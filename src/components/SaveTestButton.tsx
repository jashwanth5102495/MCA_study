import React, { useState } from 'react';
import { TestTube, CheckCircle, XCircle, Loader } from 'lucide-react';
import { checkBackendStatus } from '../utils/diagnostics';
import { saveTopicToBackend } from '../services/topicApi';

export const SaveTestButton: React.FC = () => {
  const [testing, setTesting] = useState(false);
  const [result, setResult] = useState<{
    type: 'success' | 'error' | 'info';
    message: string;
  } | null>(null);

  const runSaveTest = async () => {
    setTesting(true);
    setResult(null);

    try {
      // Step 1: Check backend connection
      setResult({ type: 'info', message: 'Testing backend connection...' });
      const status = await checkBackendStatus();
      
      if (!status.connected) {
        setResult({ 
          type: 'error', 
          message: `Backend not connected: ${status.message}` 
        });
        setTesting(false);
        return;
      }

      // Step 2: Test topic save
      setResult({ type: 'info', message: 'Testing topic save...' });
      const testTopic = {
        topicId: 'test-save-functionality',
        name: 'Test Save Functionality',
        semester: 1,
        subject: 'Test Subject',
        unit: 'Unit I',
        content: {
          introduction: 'This is a test topic to verify save functionality works correctly.',
          definition: 'A test topic is a temporary topic used for testing purposes.',
          realWorldExample: 'Like testing a new feature before releasing it to users.',
          realWorldUse: 'Used in software development to ensure functionality works as expected.',
          importance: 'Testing is crucial for maintaining software quality and user experience.',
          detailedExplanation: 'This test verifies that the save functionality can successfully communicate with the backend server, validate the data, store it in the database, and return a success response.'
        },
        updatedBy: 'save-test'
      };

      const saveResult = await saveTopicToBackend(testTopic);
      
      if (saveResult.success) {
        setResult({ 
          type: 'success', 
          message: '✅ Save test successful! Your save functionality is working perfectly.' 
        });
      } else {
        setResult({ 
          type: 'error', 
          message: `❌ Save test failed: ${saveResult.message}` 
        });
      }
    } catch (error) {
      setResult({ 
        type: 'error', 
        message: `❌ Test error: ${error instanceof Error ? error.message : 'Unknown error'}` 
      });
    } finally {
      setTesting(false);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700 max-w-sm">
      <div className="flex items-center gap-2 mb-3">
        <TestTube className="w-5 h-5 text-blue-500" />
        <h3 className="font-semibold text-gray-900 dark:text-white">Save Test</h3>
      </div>
      
      <button
        onClick={runSaveTest}
        disabled={testing}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white rounded font-medium transition-colors"
      >
        {testing ? (
          <>
            <Loader className="w-4 h-4 animate-spin" />
            Testing...
          </>
        ) : (
          <>
            <TestTube className="w-4 h-4" />
            Test Save Function
          </>
        )}
      </button>
      
      {result && (
        <div className={`mt-3 p-3 rounded text-sm ${
          result.type === 'success' 
            ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800' 
            : result.type === 'error'
            ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
            : 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
        }`}>
          <div className="flex items-start gap-2">
            {result.type === 'success' ? (
              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
            ) : result.type === 'error' ? (
              <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
            ) : (
              <Loader className="w-4 h-4 mt-0.5 flex-shrink-0 animate-spin" />
            )}
            <span>{result.message}</span>
          </div>
        </div>
      )}
      
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        Click to test if save functionality is working
      </p>
    </div>
  );
};