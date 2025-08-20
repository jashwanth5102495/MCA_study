import React, { useState, useEffect } from 'react';
import { X, Plus, Save, Trash2, BookOpen, Edit3, Sparkles, ChevronRight, FileText, Link, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Topic, Subject, syllabusData } from '../data/syllabus';
import { saveTopic, getTopicSync, getSubjectTopicsSync, isTopicModified } from '../utils/dataManager';
import { backendDataManager } from '../utils/backendDataManager';
import { triggerImmediateTopicUpdate, markAsRecentlyUpdated } from '../utils/immediateUpdate';
import { checkBackendStatus } from '../utils/diagnostics';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTopicUpdate?: () => void;
  isDark: boolean;
}

export const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, onTopicUpdate, isDark }) => {
  const [mode, setMode] = useState<'select' | 'edit' | 'add'>('select');
  const [selectedSemester, setSelectedSemester] = useState<number>(1);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [editingTopic, setEditingTopic] = useState<Partial<Topic>>({});
  const [isNewTopic, setIsNewTopic] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const subjects = syllabusData.filter(subject => subject.semester === selectedSemester);

  useEffect(() => {
    if (isOpen) {
      setMode('select');
      setSelectedSemester(1);
      setSelectedSubject(null);
      setSelectedTopic(null);
      setEditingTopic({});
      setIsNewTopic(false);
    }
  }, [isOpen]);

  const handleEditTopic = (topic: Topic) => {
    // Get the latest version of the topic (with any modifications)
    const latestTopic = getTopicSync(topic.id) || topic;
    setSelectedTopic(latestTopic);
    setEditingTopic({ ...latestTopic });
    setIsNewTopic(false);
    setMode('edit');
  };

  const handleAddNewTopic = () => {
    if (!selectedSubject) return;
    
    const newTopic: Partial<Topic> = {
      id: '',
      name: '',
      semester: selectedSemester,
      subject: selectedSubject.name,
      unit: 'Unit I',
      content: {
        introduction: '',
        definition: '',
        realWorldExample: '',
        realWorldUse: '',
        importance: '',
        detailedExplanation: '',
        youtubeLinks: [],
        externalLinks: []
      }
    };
    
    setEditingTopic(newTopic);
    setIsNewTopic(true);
    setMode('edit');
  };

  const handleSave = async () => {
    if (!editingTopic.name || !editingTopic.content) return;

    // Generate ID if new topic
    if (isNewTopic && !editingTopic.id) {
      editingTopic.id = editingTopic.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }

    // Save the topic using our data manager
    const topicToSave: Topic = {
      id: editingTopic.id!,
      name: editingTopic.name!,
      semester: editingTopic.semester!,
      subject: editingTopic.subject!,
      unit: editingTopic.unit,
      content: editingTopic.content!
    };

    try {
      // IMMEDIATELY trigger UI update before even saving
      triggerImmediateTopicUpdate(topicToSave);
      markAsRecentlyUpdated(topicToSave.id);
      
      // IMMEDIATELY call update callback for instant UI refresh
      if (onTopicUpdate) {
        onTopicUpdate();
      }
      
      // Now save topic and get detailed status (in background)
      const saveResult = await saveTopic(topicToSave);
      
      // Show detailed success message
      const action = isNewTopic ? 'added' : 'updated';
      const hasImages = topicToSave.content.images && topicToSave.content.images.length > 0;
      const imageText = hasImages ? ` with ${topicToSave.content.images!.length} image(s)` : '';
      
      // Create status message based on save result
      let statusIcon = '';
      let statusMessage = '';
      
      if (saveResult.savedToBackend) {
        statusIcon = '✅';
        statusMessage = 'Changes saved to database and visible immediately!';
      } else if (saveResult.success) {
        statusIcon = '💾';
        statusMessage = `Changes visible immediately! ${saveResult.message}`;
      } else {
        statusIcon = '⚠️';
        statusMessage = `Changes visible but ${saveResult.message}`;
      }
      
      setSuccessMessage(`${statusIcon} Topic "${topicToSave.name}" ${action} successfully${imageText}! ${statusMessage}`);
      setShowSuccessMessage(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
      
      // Reset form
      setMode('select');
      setSelectedTopic(null);
      setEditingTopic({});
      setIsNewTopic(false);
      
      // Trigger a re-render by updating the selected subject
      if (selectedSubject) {
        const updatedSubject = {
          ...selectedSubject,
          topics: getSubjectTopicsSync(selectedSubject.id)
        };
        setSelectedSubject(updatedSubject);
      }
    } catch (error) {
      console.error('Error saving topic:', error);
      alert('❌ Error saving topic. Please try again.');
    }
  };



  const updateEditingTopic = (field: string, value: any) => {
    if (field.startsWith('content.')) {
      const contentField = field.replace('content.', '');
      setEditingTopic(prev => ({
        ...prev,
        content: {
          ...prev.content!,
          [contentField]: value
        }
      }));
    } else {
      setEditingTopic(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const addYouTubeLink = () => {
    const newLinks = [...(editingTopic.content?.youtubeLinks || []), ''];
    updateEditingTopic('content.youtubeLinks', newLinks);
  };

  const updateYouTubeLink = (index: number, value: string) => {
    const newLinks = [...(editingTopic.content?.youtubeLinks || [])];
    newLinks[index] = value;
    updateEditingTopic('content.youtubeLinks', newLinks);
  };

  const removeYouTubeLink = (index: number) => {
    const newLinks = (editingTopic.content?.youtubeLinks || []).filter((_, i) => i !== index);
    updateEditingTopic('content.youtubeLinks', newLinks);
  };

  const addExternalLink = () => {
    const newLinks = [...(editingTopic.content?.externalLinks || []), { title: '', url: '' }];
    updateEditingTopic('content.externalLinks', newLinks);
  };

  const updateExternalLink = (index: number, field: 'title' | 'url', value: string) => {
    const newLinks = [...(editingTopic.content?.externalLinks || [])];
    newLinks[index] = { ...newLinks[index], [field]: value };
    updateEditingTopic('content.externalLinks', newLinks);
  };

  const removeExternalLink = (index: number) => {
    const newLinks = (editingTopic.content?.externalLinks || []).filter((_, i) => i !== index);
    updateEditingTopic('content.externalLinks', newLinks);
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
          className="relative w-full max-w-6xl mx-4 max-h-[95vh] overflow-hidden"
        >
          <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
            {/* Modern Header */}
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 px-8 py-6 rounded-t-3xl">
              <div className="absolute inset-0 bg-black/10 rounded-t-3xl"></div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 backdrop-blur-sm"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              <div className="relative flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                  {mode === 'select' ? (
                    <BookOpen className="w-8 h-8 text-white" />
                  ) : mode === 'add' ? (
                    <Sparkles className="w-8 h-8 text-white" />
                  ) : (
                    <Edit3 className="w-8 h-8 text-white" />
                  )}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-1">
                    {mode === 'select' ? 'Content Management' : mode === 'add' ? 'Create New Topic' : 'Edit Topic'}
                  </h2>
                  <p className="text-blue-100 text-sm">
                    {mode === 'select' 
                      ? 'Select semester and subject to manage content' 
                      : mode === 'add' 
                        ? 'Add comprehensive topic information'
                        : `Editing: ${editingTopic.name}`
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Success Message */}
            {showSuccessMessage && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mx-8 mt-4 p-4 bg-green-500/20 border border-green-400/30 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-green-300 font-medium">{successMessage}</p>
                </div>
              </motion.div>
            )}

            {/* Content Area */}
            <div className="p-8 overflow-y-auto max-h-[calc(95vh-200px)]">
              <AnimatePresence mode="wait">
                {mode === 'select' && (
                  <motion.div
                    key="select"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-8"
                  >
                    {/* Selection Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Semester Selection */}
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Select Semester</h3>
                        </div>
                        <select
                          value={selectedSemester}
                          onChange={(e) => {
                            setSelectedSemester(Number(e.target.value));
                            setSelectedSubject(null);
                          }}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        >
                          <option value={1}>Semester 1</option>
                          <option value={2}>Semester 2</option>
                          <option value={3}>Semester 3</option>
                        </select>
                      </div>

                      {/* Subject Selection */}
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                            <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Select Subject</h3>
                        </div>
                        <select
                          value={selectedSubject?.id || ''}
                          onChange={(e) => {
                            const subject = subjects.find(s => s.id === e.target.value);
                            setSelectedSubject(subject || null);
                          }}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        >
                          <option value="">Choose a subject...</option>
                          {subjects.map(subject => (
                            <option key={subject.id} value={subject.id}>
                              {subject.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Topics Management */}
                    {selectedSubject && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                      >
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-xl">
                              <Edit3 className="w-5 h-5 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Topics in {selectedSubject.name}
                              </h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {selectedSubject.topics.length} topics available
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={handleAddNewTopic}
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
                          >
                            <Plus className="w-5 h-5" />
                            Add New Topic
                          </button>
                        </div>
                        
                        <div className="max-h-80 overflow-y-auto">
                          {(() => {
                            const topics = getSubjectTopicsSync(selectedSubject.id);
                            const topicsByUnit = topics.reduce((acc, topic) => {
                              const unit = topic.unit || 'No Unit';
                              if (!acc[unit]) acc[unit] = [];
                              acc[unit].push(topic);
                              return acc;
                            }, {} as Record<string, typeof topics>);

                            return Object.entries(topicsByUnit).map(([unit, unitTopics]) => (
                              <div key={unit} className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                  {unit}
                                  <span className="text-sm text-gray-500 dark:text-gray-400">({unitTopics.length} topics)</span>
                                </h4>
                                <div className="grid gap-3 ml-4">
                                  {unitTopics.map((topic, index) => (
                                    <motion.div
                                      key={topic.id}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: index * 0.05 }}
                                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200 group"
                                    >
                                      <div className="flex items-center gap-3">
                                        <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-md group-hover:scale-110 transition-transform">
                                          <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div className="flex-1">
                                          <div className="flex items-center gap-2">
                                            <h5 className="font-medium text-gray-900 dark:text-white text-sm">{topic.name}</h5>
                                            {isTopicModified(topic.id) && (
                                              <span className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs rounded-full">
                                                Modified
                                              </span>
                                            )}
                                          </div>
                                          {topic.content.images && topic.content.images.length > 0 && (
                                            <p className="text-xs text-blue-500 dark:text-blue-400 mt-1">
                                              📷 {topic.content.images.length} image(s)
                                            </p>
                                          )}
                                        </div>
                                      </div>
                                      <button
                                        onClick={() => handleEditTopic(topic)}
                                        className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-all duration-200 transform hover:scale-105 text-sm"
                                      >
                                        <Edit3 className="w-3.5 h-3.5" />
                                        Edit
                                      </button>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            ));
                          })()}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {mode === 'edit' && (
                  <motion.div
                    key="edit"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    {/* Basic Information */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                          <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Basic Information</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Topic Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={editingTopic.name || ''}
                            onChange={(e) => updateEditingTopic('name', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="Enter topic name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Unit
                          </label>
                          <select
                            value={editingTopic.unit || 'Unit I'}
                            onChange={(e) => updateEditingTopic('unit', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          >
                            <option value="Unit I">Unit I</option>
                            <option value="Unit II">Unit II</option>
                            <option value="Unit III">Unit III</option>
                            <option value="Unit IV">Unit IV</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Content Fields */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                          <Edit3 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Content Details</h3>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Introduction <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            value={editingTopic.content?.introduction || ''}
                            onChange={(e) => updateEditingTopic('content.introduction', e.target.value)}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                            placeholder="Brief introduction to the topic"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Definition <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            value={editingTopic.content?.definition || ''}
                            onChange={(e) => updateEditingTopic('content.definition', e.target.value)}
                            rows={2}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                            placeholder="Clear definition of the topic"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Real World Example
                            </label>
                            <textarea
                              value={editingTopic.content?.realWorldExample || ''}
                              onChange={(e) => updateEditingTopic('content.realWorldExample', e.target.value)}
                              rows={3}
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                              placeholder="Real-world example or analogy"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Real World Use
                            </label>
                            <textarea
                              value={editingTopic.content?.realWorldUse || ''}
                              onChange={(e) => updateEditingTopic('content.realWorldUse', e.target.value)}
                              rows={3}
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                              placeholder="How this topic is used in real world"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Importance
                          </label>
                          <textarea
                            value={editingTopic.content?.importance || ''}
                            onChange={(e) => updateEditingTopic('content.importance', e.target.value)}
                            rows={2}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                            placeholder="Why this topic is important"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Detailed Explanation
                          </label>
                          <textarea
                            value={editingTopic.content?.detailedExplanation || ''}
                            onChange={(e) => updateEditingTopic('content.detailedExplanation', e.target.value)}
                            rows={8}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                            placeholder="Detailed explanation with examples, code, etc. (Markdown supported)"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Image Upload Section */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-xl">
                          <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Topic Images & Diagrams</h3>
                      </div>
                      
                      <div className="space-y-4">
                        {/* Image Upload Area */}
                        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center hover:border-green-400 dark:hover:border-green-500 transition-colors">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onload = (event) => {
                                  const imageData = event.target?.result as string;
                                  const currentImages = editingTopic.content?.images || [];
                                  updateEditingTopic('content.images', [...currentImages, {
                                    data: imageData,
                                    description: '',
                                    filename: file.name
                                  }]);
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                            className="hidden"
                            id="image-upload"
                          />
                          <label htmlFor="image-upload" className="cursor-pointer">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                              <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </div>
                            <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">Upload Image or Diagram</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Click to browse or drag and drop<br />
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </label>
                        </div>

                        {/* Uploaded Images */}
                        {editingTopic.content?.images && editingTopic.content.images.length > 0 && (
                          <div className="space-y-4">
                            <h4 className="font-medium text-gray-900 dark:text-white">Uploaded Images</h4>
                            {editingTopic.content.images.map((image: any, index: number) => (
                              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                                <div className="flex gap-4">
                                  <img 
                                    src={image.data} 
                                    alt={image.description || `Image ${index + 1}`}
                                    className="w-24 h-24 object-cover rounded-lg"
                                  />
                                  <div className="flex-1 space-y-3">
                                    <input
                                      type="text"
                                      value={image.description || ''}
                                      onChange={(e) => {
                                        const newImages = [...(editingTopic.content?.images || [])];
                                        newImages[index] = { ...newImages[index], description: e.target.value };
                                        updateEditingTopic('content.images', newImages);
                                      }}
                                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                      placeholder="Image description (optional)"
                                    />
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm text-gray-500 dark:text-gray-400">
                                        {image.filename}
                                      </span>
                                      <button
                                        onClick={() => {
                                          const newImages = (editingTopic.content?.images || []).filter((_, i) => i !== index);
                                          updateEditingTopic('content.images', newImages);
                                        }}
                                        className="flex items-center gap-1 px-3 py-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all text-sm"
                                      >
                                        <Trash2 className="w-4 h-4" />
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Links Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* YouTube Links */}
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-xl">
                              <Youtube className="w-5 h-5 text-red-600 dark:text-red-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">YouTube Links</h3>
                          </div>
                          <button
                            onClick={addYouTubeLink}
                            className="flex items-center gap-2 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-200 transform hover:scale-105"
                          >
                            <Plus className="w-4 h-4" />
                            Add
                          </button>
                        </div>
                        <div className="space-y-3">
                          {(editingTopic.content?.youtubeLinks || []).map((link, index) => (
                            <div key={index} className="flex gap-2">
                              <input
                                type="url"
                                value={link}
                                onChange={(e) => updateYouTubeLink(index, e.target.value)}
                                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                placeholder="https://www.youtube.com/watch?v=..."
                              />
                              <button
                                onClick={() => removeYouTubeLink(index)}
                                className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* External Links */}
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                              <Link className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">External Links</h3>
                          </div>
                          <button
                            onClick={addExternalLink}
                            className="flex items-center gap-2 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-200 transform hover:scale-105"
                          >
                            <Plus className="w-4 h-4" />
                            Add
                          </button>
                        </div>
                        <div className="space-y-3">
                          {(editingTopic.content?.externalLinks || []).map((link, index) => (
                            <div key={index} className="space-y-2">
                              <input
                                type="text"
                                value={link.title}
                                onChange={(e) => updateExternalLink(index, 'title', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="Link title"
                              />
                              <div className="flex gap-2">
                                <input
                                  type="url"
                                  value={link.url}
                                  onChange={(e) => updateExternalLink(index, 'url', e.target.value)}
                                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                  placeholder="https://..."
                                />
                                <button
                                  onClick={() => removeExternalLink(index)}
                                  className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Modern Footer */}
            <div className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 rounded-b-3xl">

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    if (mode === 'edit') {
                      setMode('select');
                      setEditingTopic({});
                      setIsNewTopic(false);
                    } else {
                      onClose();
                    }
                  }}
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                >
                  {mode === 'edit' ? 'Back' : 'Cancel'}
                </button>
                {mode === 'edit' && (
                  <button
                    onClick={handleSave}
                    disabled={!editingTopic.name || !editingTopic.content?.introduction || !editingTopic.content?.definition}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-xl transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
                  >
                    <Save className="w-4 h-4" />
                    {isNewTopic ? 'Add Topic' : 'Save Changes'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};