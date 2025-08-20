import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Lightbulb, 
  Globe, 
  Target, 
  AlertCircle, 
  FileText, 
  Youtube, 
  ExternalLink,
  Code,
  Image as ImageIcon,
  Edit3,
  RefreshCw
} from 'lucide-react';
import { Topic } from '../data/syllabus';
import { InlineEditModal } from './InlineEditModal';

interface TopicContentProps {
  topic: Topic;
  isDark?: boolean;
  onTopicUpdate?: () => void;
}

interface ContentSectionProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  className?: string;
  onEdit?: () => void;
  showEditButton?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({ 
  icon, 
  title, 
  content, 
  className = '',
  onEdit,
  showEditButton = false
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-white/10 dark:card-plain-translucent border border-white/20 rounded-2xl p-6 ${className} relative group`}
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-xl font-semibold text-white dark:text-white">{title}</h3>
      </div>
      {showEditButton && onEdit && (
        <button
          onClick={onEdit}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 hover:text-white"
          title="Edit this section"
        >
          <Edit3 className="w-4 h-4" />
        </button>
      )}
    </div>
    <p className="text-white/80 dark:text-white/80 leading-relaxed">{content}</p>
  </motion.div>
);

export const TopicContent: React.FC<TopicContentProps> = ({ topic, isDark = false, onTopicUpdate }) => {
  const { content } = topic;
  const [imgError, setImgError] = useState(false);
  const [currentTopic, setCurrentTopic] = useState(topic);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [editModal, setEditModal] = useState<{
    isOpen: boolean;
    field: 'introduction' | 'definition' | 'realWorldExample' | 'realWorldUse' | 'importance' | 'detailedExplanation';
  }>({
    isOpen: false,
    field: 'introduction'
  });

  // Update current topic when prop changes
  React.useEffect(() => {
    setCurrentTopic(topic);
  }, [topic]);

  // Listen for topic updates from multiple sources
  useEffect(() => {
    const handleTopicUpdate = (event: CustomEvent) => {
      const { topicId, topic: updatedTopic } = event.detail;
      if (topicId === currentTopic.id && updatedTopic) {
        console.log(`🔄 TopicContent: Updating topic "${updatedTopic.name}" immediately`);
        setCurrentTopic(updatedTopic);
        if (onTopicUpdate) {
          onTopicUpdate();
        }
      }
    };

    const handleForceRefresh = () => {
      console.log(`🔄 TopicContent: Force refresh triggered for topic "${currentTopic.name}"`);
      if (onTopicUpdate) {
        onTopicUpdate();
      }
    };

    // Listen to multiple event types for maximum responsiveness
    const eventTypes = ['topicUpdated', 'topicChanged', 'contentUpdated'];
    eventTypes.forEach(eventType => {
      window.addEventListener(eventType, handleTopicUpdate as EventListener);
    });
    
    window.addEventListener('forceRefresh', handleForceRefresh);
    
    return () => {
      eventTypes.forEach(eventType => {
        window.removeEventListener(eventType, handleTopicUpdate as EventListener);
      });
      window.removeEventListener('forceRefresh', handleForceRefresh);
    };
  }, [currentTopic.id, onTopicUpdate]);

  // Debug: Check if topic and content exist
  if (!currentTopic) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 flex items-center justify-center">
        <div className="text-white text-xl">No topic selected</div>
      </div>
    );
  }

  if (!currentTopic.content) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 flex items-center justify-center">
        <div className="text-white text-xl">No content available for this topic</div>
      </div>
    );
  }

  const handleEdit = (field: 'introduction' | 'definition' | 'realWorldExample' | 'realWorldUse' | 'importance' | 'detailedExplanation') => {
    setEditModal({
      isOpen: true,
      field
    });
  };

  const handleCloseEdit = () => {
    setEditModal({
      isOpen: false,
      field: 'introduction'
    });
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      // Trigger a force refresh
      window.dispatchEvent(new CustomEvent('forceRefresh'));
      
      // Also call the onTopicUpdate callback if provided
      if (onTopicUpdate) {
        onTopicUpdate();
      }
      
      console.log('🔄 Topic content refreshed');
    } catch (error) {
      console.error('Error refreshing topic:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleTopicUpdate = () => {
    // Force refresh by updating the current topic
    const updatedTopic = { ...currentTopic };
    setCurrentTopic(updatedTopic);
    
    // Call the parent's onTopicUpdate if provided
    if (onTopicUpdate) {
      onTopicUpdate();
    }
  };

  function getFallbackDiagram(topicId: string) {
    return (
      <svg width="320" height="80" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="20" width="80" height="40" fill="#bae6fd" stroke="#0369a1"/>
        <text x="50" y="45" fontSize="12" textAnchor="middle" fill="#0c4a6e">Input</text>
        <rect x="110" y="20" width="100" height="40" fill="#f1f5f9" stroke="#6366f1"/>
        <text x="160" y="45" fontSize="12" textAnchor="middle" fill="#1e293b">Algorithm</text>
        <rect x="230" y="20" width="80" height="40" fill="#bbf7d0" stroke="#16a34a"/>
        <text x="270" y="45" fontSize="12" textAnchor="middle" fill="#166534">Output</text>
        <line x1="90" y1="40" x2="110" y2="40" stroke="#0369a1" strokeWidth="2"/>
        <line x1="210" y1="40" x2="230" y2="40" stroke="#16a34a" strokeWidth="2"/>
      </svg>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div></div>
            <h1 className="text-4xl font-bold text-white dark:text-neon-green">{currentTopic.name}</h1>
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 text-white rounded-lg transition-all duration-200 hover:scale-105 disabled:scale-100"
              title="Refresh topic content"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">{isRefreshing ? 'Refreshing...' : 'Refresh'}</span>
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/70">
            <span>{currentTopic.subject}</span>
            <span>•</span>
            <span>Semester {currentTopic.semester}</span>
          </div>
        </motion.div>

        <div className="grid gap-6">
          <ContentSection
            icon={<BookOpen className="w-6 h-6 text-blue-300" />}
            title="Introduction"
            content={currentTopic.content.introduction}
            onEdit={() => handleEdit('introduction')}
            showEditButton={true}
          />

          <ContentSection
            icon={<FileText className="w-6 h-6 text-green-300" />}
            title="Definition"
            content={currentTopic.content.definition}
            onEdit={() => handleEdit('definition')}
            showEditButton={true}
          />

          <div className="grid md:grid-cols-2 gap-6">
            <ContentSection
              icon={<Globe className="w-6 h-6 text-purple-300" />}
              title="Real-World Example"
              content={currentTopic.content.realWorldExample}
              onEdit={() => handleEdit('realWorldExample')}
              showEditButton={true}
            />

            <ContentSection
              icon={<Target className="w-6 h-6 text-orange-300" />}
              title="Real-World Use"
              content={currentTopic.content.realWorldUse}
              onEdit={() => handleEdit('realWorldUse')}
              showEditButton={true}
            />
          </div>

          <ContentSection
            icon={<AlertCircle className="w-6 h-6 text-yellow-300" />}
            title="Why is it Important?"
            content={currentTopic.content.importance}
            onEdit={() => handleEdit('importance')}
            showEditButton={true}
          />

          <ContentSection
            icon={<Lightbulb className="w-6 h-6 text-cyan-300" />}
            title="Detailed Explanation"
            content={currentTopic.content.detailedExplanation}
            onEdit={() => handleEdit('detailedExplanation')}
            showEditButton={true}
          />

          {currentTopic.content.sampleProgram && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-900/50 dark:card-plain-translucent border border-white/20 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-green-300 dark:text-neon-green" />
                <h3 className="text-xl font-semibold text-white dark:text-white">Sample Program</h3>
              </div>
              <pre className="bg-black/30 dark:bg-black p-4 rounded-xl overflow-x-auto">
                <code className="text-green-300 dark:text-neon-green text-sm leading-relaxed whitespace-pre">
                  {currentTopic.content.sampleProgram}
                </code>
              </pre>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://www.programiz.com/c-programming/online-compiler/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:ring-offset-2"
                >
                  Try in Online C Compiler
                </a>
              </div>
            </motion.div>
          )}

          {currentTopic.content.diagram && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <ImageIcon className="w-6 h-6 text-pink-300" />
                <h3 className="text-xl font-semibold text-white">Visual Explanation</h3>
              </div>
              {currentTopic.content.diagram && !imgError ? (
                currentTopic.content.diagram.startsWith('http') ? (
                  <img
                    src={currentTopic.content.diagram}
                    alt="Visual Explanation"
                    style={{ maxWidth: '100%', margin: '0 auto', display: 'block' }}
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div>{currentTopic.content.diagram}</div>
                )
              ) : currentTopic.content.diagram ? (
                <div className="flex flex-col items-center justify-center">
                  {getFallbackDiagram(currentTopic.id)}
                  <span className="text-sm text-gray-400 mt-2">Block diagram: Input → Algorithm → Output</span>
                </div>
              ) : null}
              {currentTopic.content.diagramDescription && (
                <div className="text-sm text-gray-400 mt-2">{currentTopic.content.diagramDescription}</div>
              )}
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {currentTopic.content.images && currentTopic.content.images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/10 backdrop-blur-md border border-green-400/20 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <ImageIcon className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">Images & Diagrams</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentTopic.content.images.map((image, index) => (
                    <div key={index} className="bg-green-400/10 rounded-xl p-4">
                      <img 
                        src={image.data} 
                        alt={image.description || `Diagram ${index + 1}`}
                        className="w-full h-48 object-contain rounded-lg bg-white/5 mb-3"
                      />
                      {image.description && (
                        <p className="text-sm text-green-300">{image.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {currentTopic.content.youtubeLinks && currentTopic.content.youtubeLinks.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 backdrop-blur-md border border-red-400/20 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Youtube className="w-6 h-6 text-red-400" />
                  <h3 className="text-xl font-semibold text-white">Video Resources</h3>
                </div>
                <div className="space-y-3">
                  {currentTopic.content.youtubeLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 bg-red-400/10 rounded-xl hover:bg-red-400/20 transition-colors group"
                    >
                      <div className="flex items-center gap-2 text-red-300 group-hover:text-red-200">
                        <Youtube className="w-4 h-4" />
                        <span className="text-sm">YouTube Video {index + 1}</span>
                        <ExternalLink className="w-3 h-3 ml-auto" />
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}

            {currentTopic.content.externalLinks && currentTopic.content.externalLinks.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-blue-500/10 backdrop-blur-md border border-blue-400/20 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <ExternalLink className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">Additional Resources</h3>
                </div>
                <div className="space-y-3">
                  {currentTopic.content.externalLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 bg-blue-400/10 rounded-xl hover:bg-blue-400/20 transition-colors group"
                    >
                      <div className="flex items-center gap-2 text-blue-300 group-hover:text-blue-200">
                        <Globe className="w-4 h-4" />
                        <span className="text-sm">{link.title}</span>
                        <ExternalLink className="w-3 h-3 ml-auto" />
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Inline Edit Modal */}
      <InlineEditModal
        isOpen={editModal.isOpen}
        onClose={handleCloseEdit}
        topic={currentTopic}
        field={editModal.field}
        isDark={isDark}
        onTopicUpdate={handleTopicUpdate}
      />
    </div>
  );
};

// TopicModal component for displaying topics in a modal
interface TopicModalProps {
  topic: Topic;
  onClose: () => void;
}

export const TopicModal: React.FC<TopicModalProps> = ({ topic, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-4 max-h-[90vh] overflow-hidden">
        <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 px-8 py-6 rounded-t-3xl">
            <div className="absolute inset-0 bg-black/10 rounded-t-3xl"></div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 backdrop-blur-sm"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-1">{topic.name}</h2>
              <p className="text-blue-100 text-sm">{topic.subject} - {topic.unit}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
            <TopicContent topic={topic} />
          </div>
        </div>
      </div>
    </div>
  );
};