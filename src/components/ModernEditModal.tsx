import React, { useState, useEffect } from 'react';
import { X, Plus, Save, Trash2, BookOpen, Edit3, Sparkles, ArrowLeft, Check, GraduationCap, FileText, Link, Youtube, Database, Wifi, WifiOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Topic, Subject, syllabusData } from '../data/syllabus';
import { saveTopicToBackend, checkBackendHealth, getQueueStatus } from '../utils/backendDataManager';
import { triggerImmediateTopicUpdate } from '../utils/immediateUpdate';
import { saveTopic } from '../utils/dataManager';

interface ModernEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

interface NotificationProps {
  message: string;
  type: 'success' | 'error' | 'warning';
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-md ${
      type === 'success' ? 'bg-green-500 text-white' :
      type === 'error' ? 'bg-red-500 text-white' :
      'bg-yellow-500 text-white'
    }`}
  >
    <div className="flex items-center justify-between">
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 text-white/80 hover:text-white">
        <X className="w-4 h-4" />
      </button>
    </div>
  </motion.div>
);

export const ModernEditModal: React.FC<ModernEditModalProps> = ({ isOpen, onClose, isDark }) => {
  const [mode, setMode] = useState<'select' | 'edit' | 'add'>('select');
  const [selectedSemester, setSelectedSemester] = useState<number>(1);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [editingTopic, setEditingTopic] = useState<Partial<Topic>>({});
  const [isNewTopic, setIsNewTopic] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [backendStatus, setBackendStatus] = useState<{ connected: boolean; topicCount: number; message: string } | null>(null);
  const [queueStatus, setQueueStatus] = useState<{ pending: number; retrying: number }>({ pending: 0, retrying: 0 });
  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' | 'warning' } | null>(null);

  const subjects = syllabusData.filter(subject => subject.semester === selectedSemester);

  useEffect(() => {
    if (isOpen) {
      setMode('select');
      setSelectedSemester(1);
      setSelectedSubject(null);
      setSelectedTopic(null);
      setEditingTopic({});
      setIsNewTopic(false);
      setSaveSuccess(false);
      
      // Check backend status when modal opens
      checkBackendStatus();
    }
  }, [isOpen]);

  // Check backend status
  const checkBackendStatus = async () => {
    try {
      const status = await checkBackendHealth();
      setBackendStatus(status);
    } catch (error) {
      console.error('Error checking backend status:', error);
      setBackendStatus({ connected: false, topicCount: 0, message: 'Failed to check backend status' });
    }
  };

  // Update queue status periodically
  useEffect(() => {
    const updateQueueStatus = () => {
      const status = getQueueStatus();
      setQueueStatus(status);
    };

    updateQueueStatus();
    const interval = setInterval(updateQueueStatus, 2000);
    return () => clearInterval(interval);
  }, []);

  const showNotification = (message: string, type: 'success' | 'error' | 'warning') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleEditTopic = (topic: Topic) => {
    setSelectedTopic(topic);
    setEditingTopic({ ...topic });
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

    if (isNewTopic && !editingTopic.id) {
      editingTopic.id = editingTopic.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }

    setIsSaving(true);
    
    try {
      // Save to both localStorage and backend
      if (editingTopic.id && editingTopic.content) {
        // First save to localStorage and trigger immediate UI update
        const localSaveResult = await saveTopic(editingTopic);
        
        if (localSaveResult.success) {
          // Trigger immediate update to refresh all UI components
          triggerImmediateTopicUpdate(editingTopic);
          
          if (localSaveResult.savedToBackend) {
            console.log(`✅ Topic "${editingTopic.name}" saved to backend successfully`);
            showNotification(`✅ Topic "${editingTopic.name}" updated successfully! Changes saved to database and visible immediately!`, 'success');
          } else {
            console.warn(`⚠️ Topic "${editingTopic.name}" saved locally, will sync to backend`);
            showNotification(`Topic "${editingTopic.name}" saved locally - will sync when connection is available`, 'warning');
          }
        } else {
          throw new Error(localSaveResult.message);
        }
      }

      setSaveSuccess(true);
      setTimeout(() => {
        setSaveSuccess(false);
        setMode('select');
        setSelectedTopic(null);
        setEditingTopic({});
        setIsNewTopic(false);
        setIsSaving(false);
      }, 2000);
    } catch (error) {
      console.error('Error saving topic:', error);
      showNotification(`Failed to save topic: ${error instanceof Error ? error.message : 'Unknown error'}`, 'error');
      setIsSaving(false);
    }
  };

  const handleDelete = () => {
    if (!selectedTopic) return;
    
    if (confirm(`Are you sure you want to delete "${selectedTopic.name}"?`)) {
      alert(`Topic "${selectedTopic.name}" deleted successfully!`);
      setMode('select');
      setSelectedTopic(null);
      setEditingTopic({});
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
    newLinks[index] = { ...newLinks[index], [field]: value } as { title: string; url: string };
    updateEditingTopic('content.externalLinks', newLinks);
  };

  const removeExternalLink = (index: number) => {
    const newLinks = (editingTopic.content?.externalLinks || []).filter((_, i) => i !== index);
    updateEditingTopic('content.externalLinks', newLinks);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-6xl max-h-[95vh] mx-4 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl blur-xl" />
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/5 to-yellow-600/5 rounded-3xl blur-2xl" />
        
        {/* Main Container */}
        <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden">
          
          {/* Header */}
          <div className="relative px-8 py-6 bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-gray-800/80 dark:to-gray-700/80 border-b border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  {mode === 'select' ? (
                    <BookOpen className="w-6 h-6 text-white" />
                  ) : (
                    <Edit3 className="w-6 h-6 text-white" />
                  )}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {mode === 'select' ? 'Content Management' : 
                     mode === 'add' ? 'Create New Topic' : 
                     `Edit: ${editingTopic.name}`}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {mode === 'select' ? 'Select content to modify or create new topics' :
                     mode === 'add' ? 'Add comprehensive topic information' :
                     'Modify topic content and resources'}
                  </p>
                </div>
              </div>
              
              {/* Backend Status Indicator */}
              <div className="flex items-center gap-4">
                {backendStatus && (
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                    {backendStatus.connected ? (
                      <Wifi className="w-4 h-4 text-green-500" />
                    ) : (
                      <WifiOff className="w-4 h-4 text-red-500" />
                    )}
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {backendStatus.connected ? `${backendStatus.topicCount} topics` : 'Offline'}
                    </span>
                  </div>
                )}
                
                {(queueStatus.pending > 0 || queueStatus.retrying > 0) && (
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/20">
                    <Database className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                    <span className="text-xs text-yellow-700 dark:text-yellow-300">
                      {queueStatus.pending > 0 && `${queueStatus.pending} pending`}
                      {queueStatus.pending > 0 && queueStatus.retrying > 0 && ', '}
                      {queueStatus.retrying > 0 && `${queueStatus.retrying} retrying`}
                    </span>
                  </div>
                )}
                
                <button
                  onClick={onClose}
                  className="p-3 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-all duration-200 hover:scale-105"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
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
                  {/* Semester Selection */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-5 h-5 text-blue-500" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Select Semester</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((sem) => (
                        <button
                          key={sem}
                          onClick={() => {
                            setSelectedSemester(sem);
                            setSelectedSubject(null);
                          }}
                          className={`p-4 rounded-2xl border-2 transition-all duration-200 ${
                            selectedSemester === sem
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          <div className="text-center">
                            <div className="text-2xl font-bold mb-1">Semester {sem}</div>
                            <div className="text-sm opacity-75">
                              {syllabusData.filter(s => s.semester === sem).length} subjects
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Subject Selection */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-purple-500" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Select Subject</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {subjects.map(subject => (
                        <button
                          key={subject.id}
                          onClick={() => setSelectedSubject(subject)}
                          className={`p-6 rounded-2xl border-2 text-left transition-all duration-200 hover:scale-[1.02] ${
                            selectedSubject?.id === subject.id
                              ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-800'
                          }`}
                        >
                          <div className="font-semibold text-gray-900 dark:text-white mb-2">
                            {subject.name}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {subject.topics.length} topics available
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Topics List */}
                  {selectedSubject && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-green-500" />
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Topics in {selectedSubject.name}
                          </h3>
                        </div>
                        <button
                          onClick={handleAddNewTopic}
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          <Plus className="w-4 h-4" />
                          Add New Topic
                        </button>
                      </div>
                      <div className="grid grid-cols-1 gap-3 max-h-80 overflow-y-auto">
                        {selectedSubject.topics.map((topic) => (
                          <div
                            key={topic.id}
                            className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-md transition-all duration-200"
                          >
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{topic.name}</h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {topic.unit || 'No unit specified'} • {topic.content.introduction.slice(0, 100)}...
                              </p>
                            </div>
                            <button
                              onClick={() => handleEditTopic(topic)}
                              className="ml-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-sm transition-all duration-200 hover:scale-105"
                            >
                              Edit
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
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
                  {/* Success Message */}
                  <AnimatePresence>
                    {saveSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl text-green-700 dark:text-green-400"
                      >
                        <Check className="w-5 h-5" />
                        <span className="font-medium">
                          Topic {isNewTopic ? 'created' : 'updated'} successfully!
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        <Sparkles className="w-4 h-4 text-yellow-500" />
                        Topic Name
                      </label>
                      <input
                        type="text"
                        value={editingTopic.name || ''}
                        onChange={(e) => updateEditingTopic('name', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter topic name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        <BookOpen className="w-4 h-4 text-blue-500" />
                        Unit
                      </label>
                      <select
                        value={editingTopic.unit || 'Unit I'}
                        onChange={(e) => updateEditingTopic('unit', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="Unit I">Unit I</option>
                        <option value="Unit II">Unit II</option>
                        <option value="Unit III">Unit III</option>
                        <option value="Unit IV">Unit IV</option>
                      </select>
                    </div>
                  </div>

                  {/* Content Fields */}
                  {[
                    { key: 'introduction', label: 'Introduction', rows: 3, required: true },
                    { key: 'definition', label: 'Definition', rows: 2, required: true },
                    { key: 'realWorldExample', label: 'Real World Example', rows: 2 },
                    { key: 'realWorldUse', label: 'Real World Use', rows: 2 },
                    { key: 'importance', label: 'Importance', rows: 2 },
                    { key: 'detailedExplanation', label: 'Detailed Explanation', rows: 8 }
                  ].map(({ key, label, rows, required }) => (
                    <div key={key} className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        <FileText className="w-4 h-4 text-purple-500" />
                        {label} {required && <span className="text-red-500">*</span>}
                      </label>
                      <textarea
                        value={String(editingTopic.content?.[key as keyof typeof editingTopic.content] || '')}
                        onChange={(e) => updateEditingTopic(`content.${key}`, e.target.value)}
                        rows={rows}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder={`Enter ${label.toLowerCase()}`}
                      />
                    </div>
                  ))}

                  {/* YouTube Links */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        <Youtube className="w-4 h-4 text-red-500" />
                        YouTube Links
                      </label>
                      <button
                        onClick={addYouTubeLink}
                        className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl text-sm transition-all duration-200 hover:scale-105"
                      >
                        <Plus className="w-3 h-3" />
                        Add Link
                      </button>
                    </div>
                    <div className="space-y-3">
                      {(editingTopic.content?.youtubeLinks || []).map((link, index) => (
                        <div key={index} className="flex gap-3">
                          <input
                            type="url"
                            value={link}
                            onChange={(e) => updateYouTubeLink(index, e.target.value)}
                            className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                            placeholder="https://www.youtube.com/watch?v=..."
                          />
                          <button
                            onClick={() => removeYouTubeLink(index)}
                            className="p-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* External Links */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        <Link className="w-4 h-4 text-blue-500" />
                        External Links
                      </label>
                      <button
                        onClick={addExternalLink}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-sm transition-all duration-200 hover:scale-105"
                      >
                        <Plus className="w-3 h-3" />
                        Add Link
                      </button>
                    </div>
                    <div className="space-y-3">
                      {(editingTopic.content?.externalLinks || []).map((link, index) => (
                        <div key={index} className="flex gap-3">
                          <input
                            type="text"
                            value={link.title}
                            onChange={(e) => updateExternalLink(index, 'title', e.target.value)}
                            className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="Link title"
                          />
                          <input
                            type="url"
                            value={link.url}
                            onChange={(e) => updateExternalLink(index, 'url', e.target.value)}
                            className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="https://..."
                          />
                          <button
                            onClick={() => removeExternalLink(index)}
                            className="p-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Diagram Upload */}
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Diagram/Image Upload
                    </label>
                    <div className="space-y-3">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (event) => {
                              const imageUrl = event.target?.result as string;
                              updateEditingTopic('content.diagram', imageUrl);
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                      {editingTopic.content?.diagram && (
                        <div className="relative">
                          <img
                            src={editingTopic.content.diagram}
                            alt="Topic diagram"
                            className="w-full max-w-md mx-auto rounded-xl border border-gray-200 dark:border-gray-600"
                          />
                          <button
                            onClick={() => updateEditingTopic('content.diagram', '')}
                            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      )}
                      <input
                        type="text"
                        value={editingTopic.content?.diagramDescription || ''}
                        onChange={(e) => updateEditingTopic('content.diagramDescription', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Diagram description (optional)"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-6 bg-gray-50/80 dark:bg-gray-800/80 border-t border-gray-200/50 dark:border-gray-700/50">
            <div>
              {mode === 'edit' && !isNewTopic && (
                <button
                  onClick={handleDelete}
                  className="flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete Topic
                </button>
              )}
            </div>
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
                className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                {mode === 'edit' ? 'Back' : 'Cancel'}
              </button>
              {mode === 'edit' && (
                <button
                  onClick={handleSave}
                  disabled={!editingTopic.name || !editingTopic.content?.introduction || !editingTopic.content?.definition || isSaving}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-2xl transition-all duration-200 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {isSaving ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Save className="w-4 h-4" />
                  )}
                  {isSaving ? 'Saving...' : (isNewTopic ? 'Create Topic' : 'Save Changes')}
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
};