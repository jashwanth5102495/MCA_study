import { Topic, Subject, syllabusData } from '../data/syllabus';
import { saveTopicToBackend, getTopicFromBackend } from '../services/topicApi';

// Key for localStorage
const STORAGE_KEY = 'mca_study_hub_data';

// Interface for stored data
interface StoredData {
  topics: { [key: string]: Topic };
  lastUpdated: string;
}

// Get stored data from localStorage
export const getStoredData = (): StoredData => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error reading stored data:', error);
  }
  return { topics: {}, lastUpdated: new Date().toISOString() };
};

// Save data to localStorage
export const saveStoredData = (data: StoredData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving data:', error);
  }
};

// Save a topic (now with reliable backend integration)
export const saveTopic = async (topic: Topic): Promise<{ success: boolean; savedToBackend: boolean; message: string }> => {
  try {
    // Save to localStorage first for immediate UI update
    const storedData = getStoredData();
    storedData.topics[topic.id] = topic;
    storedData.lastUpdated = new Date().toISOString();
    saveStoredData(storedData);

    console.log(`💾 Attempting to save topic "${topic.name}" to backend...`);

    // Always attempt backend save using the reliable API service
    const result = await saveTopicToBackend({
      topicId: topic.id,
      name: topic.name,
      semester: topic.semester,
      subject: topic.subject,
      unit: topic.unit,
      content: topic.content,
      updatedBy: 'authenticated_user'
    });
    
    let message = '';
    let savedToBackend = false;
    
    if (result.success) {
      savedToBackend = true;
      message = '✅ Saved successfully to database';
      console.log(`✅ Topic "${topic.name}" saved to backend successfully`);
    } else {
      message = `💾 Saved locally - Backend error: ${result.message || 'Unknown error'}`;
      console.warn(`⚠️ Backend save failed for "${topic.name}": ${result.message}`);
    }
    
    return {
      success: true, // Always true since we save locally
      savedToBackend,
      message
    };
  } catch (error) {
    console.error('Error saving topic:', error);
    return {
      success: false,
      savedToBackend: false,
      message: `Save failed: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
};

// Get a topic (with reliable backend integration)
export const getTopic = async (topicId: string): Promise<Topic | null> => {
  try {
    // First try to get from backend
    const result = await getTopicFromBackend(topicId);
    if (result.success && result.data) {
      // Convert backend topic to our Topic format
      const backendTopic: Topic = {
        id: result.data.topicId,
        name: result.data.name,
        semester: result.data.semester,
        subject: result.data.subject,
        unit: result.data.unit,
        content: result.data.content
      };
      
      // Update localStorage cache
      const storedData = getStoredData();
      storedData.topics[topicId] = backendTopic;
      saveStoredData(storedData);
      return backendTopic;
    }

    // Fallback to localStorage
    const storedData = getStoredData();
    if (storedData.topics[topicId]) {
      return storedData.topics[topicId];
    }
    
    // Finally, fallback to original syllabus data
    for (const subject of syllabusData) {
      const topic = subject.topics.find(t => t.id === topicId);
      if (topic) {
        return topic;
      }
    }
    
    return null;
  } catch (error) {
    console.error('Error getting topic:', error);
    
    // Fallback to localStorage on error
    const storedData = getStoredData();
    if (storedData.topics[topicId]) {
      return storedData.topics[topicId];
    }
    
    // Final fallback to original data
    for (const subject of syllabusData) {
      const topic = subject.topics.find(t => t.id === topicId);
      if (topic) {
        return topic;
      }
    }
    
    return null;
  }
};

// Get all topics for a subject (with backend integration)
export const getSubjectTopics = async (subjectId: string): Promise<Topic[]> => {
  try {
    const subject = syllabusData.find(s => s.id === subjectId);
    if (!subject) return [];
    
    // Get all topics with potential backend updates
    const topics = await Promise.all(
      subject.topics.map(async (topic) => {
        const updatedTopic = await getTopic(topic.id);
        return updatedTopic || topic;
      })
    );
    
    return topics;
  } catch (error) {
    console.error('Error getting subject topics:', error);
    
    // Fallback to localStorage + original data
    const subject = syllabusData.find(s => s.id === subjectId);
    if (!subject) return [];
    
    const storedData = getStoredData();
    return subject.topics.map(topic => storedData.topics[topic.id] || topic);
  }
};

// Get all subjects with modified topics (with backend integration)
export const getAllSubjectsWithModifications = async (): Promise<Subject[]> => {
  try {
    const subjects = await Promise.all(
      syllabusData.map(async (subject) => ({
        ...subject,
        topics: await getSubjectTopics(subject.id)
      }))
    );
    
    return subjects;
  } catch (error) {
    console.error('Error getting all subjects:', error);
    
    // Fallback to localStorage
    const storedData = getStoredData();
    return syllabusData.map(subject => ({
      ...subject,
      topics: subject.topics.map(topic => storedData.topics[topic.id] || topic)
    }));
  }
};

// Synchronous version for backward compatibility
export const getTopicSync = (topicId: string): Topic | null => {
  const storedData = getStoredData();
  
  // Check if we have a modified version
  if (storedData.topics[topicId]) {
    return storedData.topics[topicId];
  }
  
  // Find original topic from syllabus data
  for (const subject of syllabusData) {
    const topic = subject.topics.find(t => t.id === topicId);
    if (topic) {
      return topic;
    }
  }
  
  return null;
};

// Synchronous version for subject topics
export const getSubjectTopicsSync = (subjectId: string): Topic[] => {
  const subject = syllabusData.find(s => s.id === subjectId);
  if (!subject) return [];
  
  const storedData = getStoredData();
  
  // Return topics with modifications applied
  return subject.topics.map(topic => {
    return storedData.topics[topic.id] || topic;
  });
};

// Check if a topic has been modified
export const isTopicModified = (topicId: string): boolean => {
  const storedData = getStoredData();
  return !!storedData.topics[topicId];
};

// Get modification timestamp for a topic
export const getTopicModificationTime = (topicId: string): string | null => {
  const storedData = getStoredData();
  if (storedData.topics[topicId]) {
    return storedData.lastUpdated;
  }
  return null;
};

// Clear all modifications
export const clearAllModifications = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};