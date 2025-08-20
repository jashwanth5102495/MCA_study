import React, { useState } from 'react';
import { getTopicById } from '../data/syllabus';
import { saveTopic } from '../utils/dataManager';
import { Layout } from './Layout';

interface TestPageProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const TestPage: React.FC<TestPageProps> = ({ isDark, toggleTheme }) => {
  const [topicId, setTopicId] = useState('algorithms');
  const [topic, setTopic] = useState<any>(null);
  const [newContent, setNewContent] = useState('');

  const loadTopic = () => {
    const foundTopic = getTopicById(topicId);
    setTopic(foundTopic);
    console.log('Loaded topic:', foundTopic);
  };

  const updateTopic = () => {
    if (topic && newContent) {
      const updatedTopic = {
        ...topic,
        content: {
          ...topic.content,
          detailedExplanation: newContent
        }
      };
      
      saveTopic(updatedTopic);
      console.log('Saved topic:', updatedTopic);
      
      // Reload the topic to see if changes are reflected
      setTimeout(() => {
        const reloadedTopic = getTopicById(topicId);
        console.log('Reloaded topic:', reloadedTopic);
        setTopic(reloadedTopic);
      }, 100);
    }
  };

  return (
    <Layout 
      isDark={isDark} 
      toggleTheme={toggleTheme} 
      showNavigation={false}
      showBackButton={true}
      backButtonText="Back to Menu"
    >
      <div className="min-h-screen bg-black text-white p-8">
        <h1 className="text-3xl font-bold mb-8">Topic Update Test</h1>
        
        <div className="space-y-4 mb-8">
          <div>
            <label className="block mb-2">Topic ID:</label>
            <input
              type="text"
              value={topicId}
              onChange={(e) => setTopicId(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white rounded"
            />
          </div>
          
          <button
            onClick={loadTopic}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Load Topic
          </button>
        </div>

        {topic && (
          <div className="space-y-4 mb-8">
            <h2 className="text-2xl font-bold">{topic.name}</h2>
            <div>
              <label className="block mb-2">Current Detailed Explanation:</label>
              <textarea
                value={topic.content.detailedExplanation}
                readOnly
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded"
              />
            </div>
            
            <div>
              <label className="block mb-2">New Detailed Explanation:</label>
              <textarea
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded"
                placeholder="Enter new content..."
              />
            </div>
            
            <button
              onClick={updateTopic}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Update Topic
            </button>
          </div>
        )}

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Debug Info:</h3>
          <pre className="bg-gray-800 p-4 rounded text-sm overflow-auto">
            {JSON.stringify(topic, null, 2)}
          </pre>
        </div>
      </div>
    </Layout>
  );
};

export default TestPage; 