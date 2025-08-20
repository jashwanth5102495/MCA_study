import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, Trash2, Plus, Link, Upload, X, Check } from 'lucide-react';
import { Topic, getTopicById, getAllTopics, getSubjectsBySemester } from '../data/syllabus';

interface EditPageProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function EditPage({ isDark, toggleTheme }: EditPageProps) {
  const navigate = useNavigate();
  const { topicId } = useParams();
  const [mode, setMode] = useState<'select' | 'edit'>('select');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [editingTopic, setEditingTopic] = useState<any>({});
  const [isNewTopic, setIsNewTopic] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState<number>(1);

  useEffect(() => {
    if (topicId) {
      const topic = getTopicById(topicId);
      if (topic) {
        setSelectedTopic(topic);
        setEditingTopic(topic);
        setMode('edit');
      }
    }
  }, [topicId]);

  const updateEditingTopic = (path: string, value: any) => {
    setEditingTopic((prev: any) => {
      const newTopic = { ...prev };
      const keys = path.split('.');
      let current = newTopic;
      
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) {
          current[keys[i]] = {};
        }
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = value;
      return newTopic;
    });
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

  const handleSave = () => {
    // Here you would typically save to a backend or local storage
    console.log('Saving topic:', editingTopic);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      navigate('/');
    }, 2000);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this topic?')) {
      // Here you would typically delete from backend or local storage
      console.log('Deleting topic:', selectedTopic);
      navigate('/');
    }
  };

  const handleNewTopic = () => {
    setEditingTopic({
      id: '',
      name: '',
      semester: selectedSemester,
      subject: '',
      unit: '',
      content: {
        introduction: '',
        definition: '',
        realWorldExample: '',
        realWorldUse: '',
        importance: '',
        detailedExplanation: '',
        youtubeLinks: [],
        externalLinks: [],
        diagram: '',
        diagramDescription: ''
      }
    });
    setIsNewTopic(true);
    setMode('edit');
  };

  const backgroundClass = isDark
    ? 'bg-black'
    : 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900';

  const overlayClass = isDark
    ? 'bg-black/80'
    : 'bg-black/20';

  const contentFields = [
    { key: 'introduction', label: 'Introduction', required: true, rows: 3 },
    { key: 'definition', label: 'Definition', required: true, rows: 3 },
    { key: 'realWorldExample', label: 'Real World Example', required: true, rows: 3 },
    { key: 'realWorldUse', label: 'Real World Use', required: true, rows: 3 },
    { key: 'importance', label: 'Importance', required: true, rows: 3 },
    { key: 'detailedExplanation', label: 'Detailed Explanation', required: true, rows: 8 }
  ];

  return (
    <div className={`min-h-screen ${backgroundClass} transition-colors duration-500`}>
      <div className={`absolute inset-0 ${overlayClass}`} />
      
      {/* Header */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all text-white"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </button>
              <h1 className="text-2xl font-bold text-white">
                {mode === 'select' ? 'Topic Editor' : (isNewTopic ? 'Create New Topic' : 'Edit Topic')}
              </h1>
            </div>
            {mode === 'edit' && (
              <div className="flex items-center gap-3">
                {!isNewTopic && (
                  <button
                    onClick={handleDelete}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                )}
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {saveSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400"
          >
            <Check className="w-5 h-5" />
            <span className="font-medium">
              Topic {isNewTopic ? 'created' : 'updated'} successfully!
            </span>
          </motion.div>
        )}

        {mode === 'select' ? (
          <div className="space-y-8">
            {/* Semester Selection */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-white mb-4">Select Semester</h2>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((semester) => (
                  <button
                    key={semester}
                    onClick={() => setSelectedSemester(semester)}
                    className={`p-4 rounded-xl transition-all ${
                      selectedSemester === semester
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/10 hover:bg-white/20 text-white/70'
                    }`}
                  >
                    Semester {semester}
                  </button>
                ))}
              </div>
            </div>

            {/* Create New Topic */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-2">Create New Topic</h2>
                  <p className="text-white/70">Add a new topic to Semester {selectedSemester}</p>
                </div>
                <button
                  onClick={handleNewTopic}
                  className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all"
                >
                  <Plus className="w-4 h-4" />
                  New Topic
                </button>
              </div>
            </div>

            {/* Existing Topics */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-white mb-4">Edit Existing Topics</h2>
              <div className="space-y-3">
                {getSubjectsBySemester(selectedSemester).map((subject) => (
                  <div key={subject.id} className="space-y-2">
                    <h3 className="text-lg font-medium text-white/90">{subject.name}</h3>
                    <div className="grid gap-2">
                      {subject.topics.slice(0, 5).map((topic) => (
                        <button
                          key={topic.id}
                          onClick={() => {
                            setSelectedTopic(topic);
                            setEditingTopic(topic);
                            setMode('edit');
                          }}
                          className="text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all text-white/80 hover:text-white"
                        >
                          {topic.name}
                        </button>
                      ))}
                      {subject.topics.length > 5 && (
                        <p className="text-white/50 text-sm px-3">
                          ... and {subject.topics.length - 5} more topics
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
            <div className="space-y-8">
              {/* Basic Information */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white mb-4">Basic Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Topic Name *
                    </label>
                    <input
                      type="text"
                      value={editingTopic.name || ''}
                      onChange={(e) => updateEditingTopic('name', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter topic name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Unit
                    </label>
                    <select
                      value={editingTopic.unit || ''}
                      onChange={(e) => updateEditingTopic('unit', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select Unit</option>
                      <option value="Unit I">Unit I</option>
                      <option value="Unit II">Unit II</option>
                      <option value="Unit III">Unit III</option>
                      <option value="Unit IV">Unit IV</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Content Details */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white mb-4">Content Details</h2>
                {contentFields.map(({ key, label, required, rows }) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      {label} {required && <span className="text-red-400">*</span>}
                    </label>
                    <textarea
                      value={editingTopic.content?.[key as keyof typeof editingTopic.content] || ''}
                      onChange={(e) => updateEditingTopic(`content.${key}`, e.target.value)}
                      rows={rows}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder={`Enter ${label.toLowerCase()}`}
                    />
                  </div>
                ))}
              </div>

              {/* YouTube Links */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">YouTube Links</h3>
                  <button
                    onClick={addYouTubeLink}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    Add Link
                  </button>
                </div>
                <div className="space-y-3">
                  {(editingTopic.content?.youtubeLinks || []).map((link: string, index: number) => (
                    <div key={index} className="flex gap-3">
                      <input
                        type="url"
                        value={link}
                        onChange={(e) => updateYouTubeLink(index, e.target.value)}
                        className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="https://www.youtube.com/watch?v=..."
                      />
                      <button
                        onClick={() => removeYouTubeLink(index)}
                        className="p-3 text-red-400 hover:bg-red-500/20 rounded-xl transition-all"
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
                  <h3 className="text-lg font-semibold text-white">External Links</h3>
                  <button
                    onClick={addExternalLink}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-xl transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    Add Link
                  </button>
                </div>
                <div className="space-y-3">
                  {(editingTopic.content?.externalLinks || []).map((link: any, index: number) => (
                    <div key={index} className="flex gap-3">
                      <input
                        type="text"
                        value={link.title}
                        onChange={(e) => updateExternalLink(index, 'title', e.target.value)}
                        className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Link title"
                      />
                      <input
                        type="url"
                        value={link.url}
                        onChange={(e) => updateExternalLink(index, 'url', e.target.value)}
                        className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="https://..."
                      />
                      <button
                        onClick={() => removeExternalLink(index)}
                        className="p-3 text-red-400 hover:bg-red-500/20 rounded-xl transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Upload */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Diagram/Image Upload</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
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
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="flex items-center gap-2 px-6 py-3 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-xl transition-all cursor-pointer"
                    >
                      <Upload className="w-4 h-4" />
                      Upload Image
                    </label>
                    {editingTopic.content?.diagram && (
                      <button
                        onClick={() => updateEditingTopic('content.diagram', '')}
                        className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl transition-all"
                      >
                        <X className="w-4 h-4" />
                        Remove
                      </button>
                    )}
                  </div>
                  
                  {editingTopic.content?.diagram && (
                    <div className="relative max-w-md">
                      <img
                        src={editingTopic.content.diagram}
                        alt="Topic diagram"
                        className="w-full rounded-xl border border-white/20"
                      />
                    </div>
                  )}
                  
                  <input
                    type="text"
                    value={editingTopic.content?.diagramDescription || ''}
                    onChange={(e) => updateEditingTopic('content.diagramDescription', e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Diagram description (optional)"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}