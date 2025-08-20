// API service for MongoDB backend integration

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface TopicContent {
  introduction: string;
  definition: string;
  realWorldExample: string;
  realWorldUse: string;
  importance: string;
  detailedExplanation: string;
  sampleProgram?: string;
  diagram?: string;
  diagramDescription?: string;
  images?: Array<{ data: string; description: string }>;
  youtubeLinks?: string[];
  externalLinks?: Array<{ title: string; url: string }>;
}

export interface Topic {
  topicId: string;
  name: string;
  semester: number;
  subject: string;
  unit: string;
  content: TopicContent;
  updatedBy?: string;
  updatedAt?: Date;
  createdAt?: Date;
}

// Enhanced save topic to backend with comprehensive data
export const saveTopic = async (
  topicId: string, 
  content: TopicContent, 
  updatedBy: string = 'user',
  additionalData?: {
    name?: string;
    semester?: number;
    subject?: string;
    unit?: string;
  }
): Promise<{ success: boolean; data?: Topic; message?: string; stats?: any }> => {
  try {
    console.log(`💾 Saving topic ${topicId} to backend...`);
    
    const requestBody = {
      content,
      updatedBy,
      ...additionalData
    };

    const response = await fetch(`${API_BASE_URL}/topics/${topicId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const result = await response.json();
    
    if (result.success) {
      console.log(`✅ Topic ${topicId} saved to backend successfully`);
      console.log(`📊 Save stats:`, result.stats);
      return result;
    } else {
      console.error(`❌ Failed to save topic ${topicId}:`, result.message);
      return result;
    }
  } catch (error) {
    console.error(`❌ Error saving topic ${topicId}:`, error);
    return {
      success: false,
      message: `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
};

// Create new topic
export const createTopic = async (topicData: {
  topicId: string;
  name: string;
  semester: number;
  subject: string;
  unit?: string;
  content: TopicContent;
  updatedBy?: string;
}): Promise<{ success: boolean; data?: Topic; message?: string }> => {
  try {
    console.log(`📝 Creating new topic: ${topicData.topicId}`);
    
    const response = await fetch(`${API_BASE_URL}/topics`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(topicData),
    });

    const result = await response.json();
    
    if (result.success) {
      console.log(`✅ Topic ${topicData.topicId} created successfully`);
      return result;
    } else {
      console.error(`❌ Failed to create topic ${topicData.topicId}:`, result.message);
      return result;
    }
  } catch (error) {
    console.error(`❌ Error creating topic ${topicData.topicId}:`, error);
    return {
      success: false,
      message: `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
};

// Validate topic data before saving
export const validateTopic = async (topicData: any): Promise<{ 
  success: boolean; 
  valid: boolean; 
  errors: string[]; 
  warnings: string[]; 
  suggestions: string[];
  message?: string;
}> => {
  try {
    console.log(`🔍 Validating topic data...`);
    
    const response = await fetch(`${API_BASE_URL}/topics/validate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topicData }),
    });

    const result = await response.json();
    
    if (result.success) {
      console.log(`✅ Topic validation completed:`, {
        valid: result.valid,
        errors: result.errors?.length || 0,
        warnings: result.warnings?.length || 0
      });
      return result;
    } else {
      console.error(`❌ Topic validation failed:`, result.message);
      return result;
    }
  } catch (error) {
    console.error(`❌ Error validating topic:`, error);
    return {
      success: false,
      valid: false,
      errors: ['Network error during validation'],
      warnings: [],
      suggestions: [],
      message: `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
};

// Delete topic
export const deleteTopic = async (topicId: string, updatedBy: string = 'user'): Promise<{ success: boolean; message?: string }> => {
  try {
    console.log(`🗑️ Deleting topic: ${topicId}`);
    
    const response = await fetch(`${API_BASE_URL}/topics/${topicId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ updatedBy }),
    });

    const result = await response.json();
    
    if (result.success) {
      console.log(`✅ Topic ${topicId} deleted successfully`);
      return result;
    } else {
      console.error(`❌ Failed to delete topic ${topicId}:`, result.message);
      return result;
    }
  } catch (error) {
    console.error(`❌ Error deleting topic ${topicId}:`, error);
    return {
      success: false,
      message: `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
};

// Get topic from backend
export const getTopic = async (topicId: string): Promise<{ success: boolean; data?: Topic; message?: string }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/topics/${topicId}`);
    const result = await response.json();
    
    if (result.success) {
      console.log(`✅ Retrieved topic ${topicId} from backend`);
      return result;
    } else {
      console.error(`❌ Failed to get topic ${topicId}:`, result.message);
      return result;
    }
  } catch (error) {
    console.error(`❌ Error getting topic ${topicId}:`, error);
    return {
      success: false,
      message: `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
};

// Search topics
export const searchTopics = async (query: string): Promise<{ success: boolean; data?: Topic[]; message?: string }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/topics/search?q=${encodeURIComponent(query)}`);
    const result = await response.json();
    
    if (result.success) {
      console.log(`✅ Found ${result.data?.length || 0} topics for query: ${query}`);
      return result;
    } else {
      console.error(`❌ Failed to search topics:`, result.message);
      return result;
    }
  } catch (error) {
    console.error(`❌ Error searching topics:`, error);
    return {
      success: false,
      message: `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
};

// Get topics by subject
export const getTopicsBySubject = async (subjectId: string): Promise<{ success: boolean; data?: Topic[]; message?: string }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/subjects/${encodeURIComponent(subjectId)}/topics`);
    const result = await response.json();
    
    if (result.success) {
      console.log(`✅ Retrieved ${result.data?.length || 0} topics for subject: ${subjectId}`);
      return result;
    } else {
      console.error(`❌ Failed to get topics for subject ${subjectId}:`, result.message);
      return result;
    }
  } catch (error) {
    console.error(`❌ Error getting topics for subject ${subjectId}:`, error);
    return {
      success: false,
      message: `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
};

// Sync all topics to backend
export const syncAllTopics = async (topics: Topic[]): Promise<{ success: boolean; message?: string; stats?: { inserted: number; updated: number; total: number } }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/topics/sync`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topics }),
    });

    const result = await response.json();
    
    if (result.success) {
      console.log(`✅ Synced ${result.stats?.total || 0} topics to backend`);
      return result;
    } else {
      console.error(`❌ Failed to sync topics:`, result.message);
      return result;
    }
  } catch (error) {
    console.error(`❌ Error syncing topics:`, error);
    return {
      success: false,
      message: `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
};

// Get database stats
export const getDatabaseStats = async (): Promise<{ success: boolean; data?: { topics: number; videos: number; recentUpdates: any[] }; message?: string }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/stats`);
    const result = await response.json();
    
    if (result.success) {
      console.log(`✅ Retrieved database stats: ${result.data?.topics || 0} topics, ${result.data?.videos || 0} videos`);
      return result;
    } else {
      console.error(`❌ Failed to get database stats:`, result.message);
      return result;
    }
  } catch (error) {
    console.error(`❌ Error getting database stats:`, error);
    return {
      success: false,
      message: `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
};

// Health check
export const checkBackendHealth = async (): Promise<{ success: boolean; message?: string; database?: { connected: boolean; status: string; topicCount: number } }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    const result = await response.json();
    
    if (result.success) {
      console.log(`✅ Backend health check passed: ${result.database?.topicCount || 0} topics in database`);
      return result;
    } else {
      console.error(`❌ Backend health check failed:`, result.message);
      return result;
    }
  } catch (error) {
    console.error(`❌ Error checking backend health:`, error);
    return {
      success: false,
      message: `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
};

// Initialize database with default topics
export const initializeDatabase = async (): Promise<{ success: boolean; message?: string; count?: number }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/topics/initialize`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    
    if (result.success) {
      console.log(`✅ Database initialized with ${result.count || 0} topics`);
      return result;
    } else {
      console.error(`❌ Failed to initialize database:`, result.message);
      return result;
    }
  } catch (error) {
    console.error(`❌ Error initializing database:`, error);
    return {
      success: false,
      message: `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
};