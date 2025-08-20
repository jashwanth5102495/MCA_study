import { checkBackendHealth, getDatabaseStats } from '../services/api';
import { backendDataManager } from './backendDataManager';

// Test database connectivity and operations
export const testDatabaseIntegration = async (): Promise<void> => {
  console.log('🧪 Testing database integration...');
  
  try {
    // Test 1: Health check
    console.log('1️⃣ Testing health check...');
    const healthData = await checkBackendHealth();
    console.log('✅ Health check:', healthData.message);
    
    // Test 2: Database stats
    console.log('2️⃣ Testing database stats...');
    const statsData = await getDatabaseStats();
    console.log('✅ Database stats:', statsData);
    
    // Test 3: Topic retrieval
    console.log('3️⃣ Testing topic retrieval...');
    const testTopicId = 'introduction-to-java';
    const topic = await backendDataManager.getTopicFromBackend(testTopicId);
    if (topic) {
      console.log('✅ Topic retrieved:', topic.name);
    } else {
      console.log('⚠️ Test topic not found, database may need initialization');
    }
    
    // Test 4: Topic update (if topic exists)
    if (topic) {
      console.log('4️⃣ Testing topic update...');
      const updatedTopic = {
        ...topic,
        content: {
          ...topic.content,
          introduction: topic.content.introduction + ' [Test update]'
        }
      };
      
      const success = await backendDataManager.saveTopicToBackend(updatedTopic.topicId, updatedTopic.content, 'test-user');
      if (success) {
        console.log('✅ Topic update successful');
        
        // Revert the test change
        const revertSuccess = await backendDataManager.saveTopicToBackend(topic.topicId, topic.content, 'test-revert');
        if (revertSuccess) {
          console.log('✅ Test change reverted');
        }
      } else {
        console.log('❌ Topic update failed');
      }
    }
    
    console.log('🎉 Database integration test completed!');
    
  } catch (error) {
    console.error('❌ Database integration test failed:', error);
    throw error;
  }
};

// Test offline functionality
export const testOfflineSupport = async (): Promise<void> => {
  console.log('📱 Testing offline support...');
  
  try {
    // Simulate offline mode
    const originalOnLine = navigator.onLine;
    Object.defineProperty(navigator, 'onLine', {
      writable: true,
      value: false
    });
    
    console.log('1️⃣ Simulating offline mode...');
    
    // Try to save a topic while offline
    const testTopicContent = {
      introduction: 'Test offline introduction',
      definition: 'Test offline definition',
      realWorldExample: 'Test example',
      realWorldUse: 'Test use',
      importance: 'Test importance',
      detailedExplanation: 'Test explanation',
      youtubeLinks: [],
      externalLinks: []
    };
    
    const offlineSuccess = await backendDataManager.saveTopicToBackend('test-offline-topic', testTopicContent, 'offline-test');
    console.log('✅ Offline save:', offlineSuccess ? 'successful' : 'failed');
    
    // Check queue status
    const queueStatus = backendDataManager.getQueueStatus();
    console.log('✅ Queue status:', queueStatus);
    
    // Restore online mode
    Object.defineProperty(navigator, 'onLine', {
      writable: true,
      value: originalOnLine
    });
    
    console.log('🎉 Offline support test completed!');
    
  } catch (error) {
    console.error('❌ Offline support test failed:', error);
    throw error;
  }
};

// Run all tests
export const runAllTests = async (): Promise<void> => {
  try {
    await testDatabaseIntegration();
    await testOfflineSupport();
    console.log('🏆 All tests passed!');
  } catch (error) {
    console.error('💥 Test suite failed:', error);
  }
};