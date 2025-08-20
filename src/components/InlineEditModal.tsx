import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Edit3, X, Save, User, Lock } from 'lucide-react';
import { saveTopic } from '../utils/dataManager';
import { triggerImmediateTopicUpdate } from '../utils/immediateUpdate';
import { Topic } from '../data/syllabus';

interface InlineEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  topic: Topic;
  field: 'introduction' | 'definition' | 'realWorldExample' | 'realWorldUse' | 'importance' | 'detailedExplanation';
  isDark: boolean;
  onTopicUpdate?: () => void;
}

export const InlineEditModal: React.FC<InlineEditModalProps> = ({
  isOpen,
  onClose,
  topic,
  field,
  isDark,
  onTopicUpdate
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState(topic.content[field]);
  const [isEditing, setIsEditing] = useState(false);

  const fieldLabels = {
    introduction: 'Introduction',
    definition: 'Definition',
    realWorldExample: 'Real World Example',
    realWorldUse: 'Real World Use',
    importance: 'Importance',
    detailedExplanation: 'Detailed Explanation'
  };

  const handleAuthenticate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate authentication delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simple authentication check
    if (userId.trim() && password === 'admin123') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid credentials. Please check your User ID and password.');
    }
    
    setIsLoading(false);
  };

  const handleSave = async () => {
    if (!content.trim()) return;

    const updatedTopic = {
      ...topic,
      content: {
        ...topic.content,
        [field]: content
      }
    };

    try {
      // Save topic and trigger immediate UI update
      const saveResult = await saveTopic(updatedTopic);
      
      if (saveResult.success) {
        // Trigger immediate update to refresh all UI components
        triggerImmediateTopicUpdate(updatedTopic);
        
        if (onTopicUpdate) {
          onTopicUpdate();
        }
        
        setIsEditing(false);
        onClose();
      } else {
        throw new Error(saveResult.message);
      }
    } catch (error) {
      console.error('Error saving topic:', error);
      setError('Error saving changes. Please try again.');
    }
  };

  const handleClose = () => {
    setUserId('');
    setPassword('');
    setError('');
    setIsAuthenticated(false);
    setIsEditing(false);
    setContent(topic.content[field]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl mx-4 max-h-[90vh] overflow-hidden"
        >
          <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 px-8 py-6 rounded-t-3xl">
              <div className="absolute inset-0 bg-black/10 rounded-t-3xl"></div>
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 backdrop-blur-sm"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              <div className="relative flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <Edit3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-1">
                    Edit {fieldLabels[field]}
                  </h2>
                  <p className="text-blue-100 text-sm">
                    {topic.name} - {topic.subject}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
              {!isAuthenticated ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Authentication Required
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Please enter your credentials to edit this content
                    </p>
                  </div>

                  <form onSubmit={handleAuthenticate} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        User ID
                      </label>
                      <input
                        type="text"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your User ID"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your password"
                        required
                      />
                    </div>

                    {error && (
                      <div className="p-4 bg-red-500/20 border border-red-400/30 rounded-xl">
                        <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-xl transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Authenticating...
                        </>
                      ) : (
                        <>
                          <User className="w-4 h-4" />
                          Authenticate
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-400/30 rounded-xl">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-green-600 dark:text-green-400 font-medium">Authentication successful! You can now edit the content.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {fieldLabels[field]}
                    </label>
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      rows={12}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder={`Enter ${fieldLabels[field].toLowerCase()}...`}
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={handleClose}
                      className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      disabled={!content.trim()}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-xl transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
                    >
                      <Save className="w-4 h-4" />
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};