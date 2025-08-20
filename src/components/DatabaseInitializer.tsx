import React, { useState } from 'react';
import { Database, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';

interface DatabaseStatus {
  connected: boolean;
  topicCount: number;
  message: string;
}

export const DatabaseInitializer: React.FC = () => {
  const [status, setStatus] = useState<DatabaseStatus | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkDatabaseStatus = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/health');
      const data = await response.json();
      
      if (data.success && data.database) {
        setStatus({
          connected: data.database.connected,
          topicCount: data.database.topicCount || 0,
          message: data.message
        });
      } else {
        setError('Failed to get database status');
      }
    } catch (err) {
      setError('Server connection failed');
      console.error('Health check failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const initializeDatabase = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/topics/initialize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus(prev => prev ? { ...prev, topicCount: data.count || prev.topicCount, message: data.message } : null);
        alert(`✅ ${data.message}`);
      } else {
        setError(data.message || 'Initialization failed');
      }
    } catch (err) {
      setError('Initialization request failed');
      console.error('Initialization failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const syncAllTopics = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Import syllabus data
      const { syllabusData } = await import('../data/syllabus');
      
      // Flatten all topics
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

      const response = await fetch('/api/topics/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topics: allTopics })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus(prev => prev ? { ...prev, topicCount: data.stats?.total || allTopics.length, message: data.message } : null);
        alert(`✅ ${data.message}`);
      } else {
        setError(data.message || 'Sync failed');
      }
    } catch (err) {
      setError('Sync request failed');
      console.error('Sync failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700 max-w-sm">
      <div className="flex items-center gap-2 mb-3">
        <Database className="w-5 h-5 text-blue-500" />
        <h3 className="font-semibold text-gray-900 dark:text-white">Database Status</h3>
      </div>
      
      {status && (
        <div className="mb-3 p-2 rounded bg-gray-50 dark:bg-gray-700">
          <div className="flex items-center gap-2 mb-1">
            {status.connected ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-500" />
            )}
            <span className="text-sm font-medium">
              {status.connected ? 'Connected' : 'Disconnected'}
            </span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            Topics: {status.topicCount}
          </p>
        </div>
      )}
      
      {error && (
        <div className="mb-3 p-2 rounded bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
          <p className="text-xs text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}
      
      <div className="space-y-2">
        <button
          onClick={checkDatabaseStatus}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white rounded text-sm font-medium transition-colors"
        >
          {loading ? (
            <RefreshCw className="w-4 h-4 animate-spin" />
          ) : (
            <RefreshCw className="w-4 h-4" />
          )}
          Check Status
        </button>
        
        <button
          onClick={initializeDatabase}
          disabled={loading}
          className="w-full px-3 py-2 bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white rounded text-sm font-medium transition-colors"
        >
          Initialize DB
        </button>
        
        <button
          onClick={syncAllTopics}
          disabled={loading}
          className="w-full px-3 py-2 bg-purple-500 hover:bg-purple-600 disabled:bg-purple-300 text-white rounded text-sm font-medium transition-colors"
        >
          Sync All Topics
        </button>
      </div>
      
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        Use these buttons to initialize and sync the database
      </p>
    </div>
  );
};