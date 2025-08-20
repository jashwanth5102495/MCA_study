// Diagnostic utilities for troubleshooting backend connection
import { testConnection } from '../services/topicApi';

export const runDiagnostics = async (): Promise<void> => {
  console.log('🔍 Running diagnostics...');
  
  // Test 1: Check if backend is reachable
  console.log('1️⃣ Testing backend connection...');
  const isConnected = await testConnection();
  
  if (!isConnected) {
    console.error('❌ Backend is not reachable!');
    console.log('💡 Solutions:');
    console.log('   - Make sure MongoDB is running: mongod');
    console.log('   - Start the backend server: cd server && npm start');
    console.log('   - Check if port 5000 is available');
    return;
  }
  
  // Test 2: Test topic save
  console.log('2️⃣ Testing topic save...');
  try {
    const testTopic = {
      topicId: 'test-diagnostic-topic',
      name: 'Test Diagnostic Topic',
      semester: 1,
      subject: 'Test Subject',
      unit: 'Unit I',
      content: {
        introduction: 'Test introduction',
        definition: 'Test definition',
        realWorldExample: 'Test example',
        realWorldUse: 'Test use',
        importance: 'Test importance',
        detailedExplanation: 'Test explanation'
      },
      updatedBy: 'diagnostic'
    };

    const response = await fetch('http://localhost:5000/api/topics/test-diagnostic-topic', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: testTopic.content,
        updatedBy: testTopic.updatedBy,
        name: testTopic.name,
        semester: testTopic.semester,
        subject: testTopic.subject,
        unit: testTopic.unit
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('✅ Topic save test successful:', result.message);
    } else {
      console.error('❌ Topic save test failed:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('❌ Topic save test error:', error);
  }
  
  console.log('🎉 Diagnostics complete!');
};

// Quick backend status check
export const checkBackendStatus = async (): Promise<{ 
  connected: boolean; 
  message: string; 
  suggestions: string[] 
}> => {
  try {
    const response = await fetch('http://localhost:5000/api/health');
    
    if (response.ok) {
      const data = await response.json();
      return {
        connected: true,
        message: `Backend is running with ${data.database?.topicCount || 0} topics in database`,
        suggestions: []
      };
    } else {
      return {
        connected: false,
        message: `Backend responded with error: ${response.status} ${response.statusText}`,
        suggestions: [
          'Check server logs for errors',
          'Restart the backend server',
          'Verify MongoDB is running'
        ]
      };
    }
  } catch (error) {
    return {
      connected: false,
      message: `Cannot connect to backend: ${error instanceof Error ? error.message : 'Unknown error'}`,
      suggestions: [
        'Start the backend server: cd server && npm start',
        'Make sure MongoDB is running: mongod',
        'Check if port 5000 is available',
        'Verify CORS settings'
      ]
    };
  }
};

// Auto-run diagnostics in development
if (import.meta.env.DEV) {
  // Run diagnostics after a short delay to allow app to load
  setTimeout(() => {
    checkBackendStatus().then(status => {
      if (!status.connected) {
        console.warn('⚠️ Backend connection issue detected:');
        console.warn(`   ${status.message}`);
        console.warn('💡 Suggestions:');
        status.suggestions.forEach(suggestion => {
          console.warn(`   - ${suggestion}`);
        });
      }
    });
  }, 2000);
}