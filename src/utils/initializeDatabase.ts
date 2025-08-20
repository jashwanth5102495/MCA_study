import { syllabusData } from '../data/syllabus';
import { syncAllTopics, getDatabaseStats } from '../services/api';

// Initialize database with all topics from syllabus
export const initializeDatabase = async (): Promise<void> => {
  try {
    console.log('🚀 Initializing database with topics...');
    
    // Flatten all topics from all subjects
    const allTopics = syllabusData.flatMap(subject => 
      subject.topics.map(topic => ({
        ...topic,
        content: {
          ...topic.content,
          images: topic.content.images || [],
          youtubeLinks: topic.content.youtubeLinks || [],
          externalLinks: topic.content.externalLinks || []
        }
      }))
    );

    console.log(`📊 Found ${allTopics.length} topics across ${syllabusData.length} subjects`);

    // Sync to backend
    const response = await syncAllTopics(allTopics);
    
    if (response.success) {
      console.log('✅ Database initialization complete!');
      console.log(`📈 Stats: ${response.stats?.inserted || 0} inserted, ${response.stats?.updated || 0} updated`);
    } else {
      console.error('❌ Database initialization failed:', response.message);
    }
  } catch (error) {
    console.error('❌ Database initialization error:', error);
    throw error;
  }
};

// Check if database needs initialization
export const checkDatabaseStatus = async (): Promise<boolean> => {
  try {
    const response = await getDatabaseStats();
    
    if (response.success && response.data) {
      console.log(`📊 Database status: ${response.data.topics} topics, ${response.data.videos} videos`);
      return response.data.topics > 0;
    }
    
    return false;
  } catch (error) {
    console.error('Error checking database status:', error);
    return false;
  }
};

// Auto-initialize database if needed
export const autoInitializeDatabase = async (): Promise<void> => {
  try {
    const hasData = await checkDatabaseStatus();
    
    if (!hasData) {
      console.log('🔄 Database appears empty, initializing...');
      await initializeDatabase();
    } else {
      console.log('✅ Database already initialized');
    }
  } catch (error) {
    console.error('Auto-initialization failed:', error);
  }
};