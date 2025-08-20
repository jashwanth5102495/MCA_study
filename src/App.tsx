import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { TopicContent } from './components/TopicContent';
import { AlertModal } from './components/AlertModal';
import { EditModal } from './components/EditModal';
import { AuthModal } from './components/AuthModal';
import QuestionPapersPage from './components/QuestionPapersPage';
import DocumentEnhancementPage from './components/DocumentEnhancementPage';

import QuizPage from './components/QuizPage';

import ProjectsPage from './components/ProjectsPage';
import ArticlesPage from './components/ArticlesPage';
import HackathonsPage from './components/HackathonsPage';
import ResumeBuilder from './components/ResumeBuilder';
import StudentExplanations from './components/StudentExplanations';
import JobsPage from './components/JobsPage';

import { useTheme } from './hooks/useTheme';
import { Subject, Topic, getSubjectById, getSubjectsBySemester, getTopicById } from './data/syllabus';
import { ServicesSidebar } from './components/ServicesSidebar';
import { HeaderBar } from './components/HeaderBar';
import { MenuWelcome } from './components/MenuWelcome';
import { DatabaseInitializer } from './components/DatabaseInitializer';
import { SaveTestButton } from './components/SaveTestButton';
import { useParams } from 'react-router-dom';
import { autoInitializeDatabase } from './utils/initializeDatabase';
import './utils/diagnostics'; // Auto-run diagnostics

interface AppContentProps {
  isDark: boolean;
  toggleTheme: () => void;
}

function AppContent({ isDark, toggleTheme }: AppContentProps) {
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [alertModal, setAlertModal] = useState<{
    isOpen: boolean;
    message: string;
    title: string;
  }>({
    isOpen: false,
    message: '',
    title: ''
  });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleSemesterSelect = useCallback((semester: number) => {
    setSelectedSemester(semester);
    setSelectedSubject(null);
    setSelectedTopic(null);
  }, []);

  const handleSubjectSelect = useCallback((subject: Subject) => {
    if (subject.showAlert && subject.alertMessage) {
      setAlertModal({
        isOpen: true,
        message: subject.alertMessage,
        title: subject.name
      });
    }
    setSelectedSubject(subject);
    setSelectedTopic(null);
    setIsSidebarOpen(false);
  }, []);

  const handleTopicSelect = useCallback((topic: Topic) => {
    // Get the latest version of the topic (with any modifications)
    const latestTopic = getTopicById(topic.id) || topic;
    const subject = getSubjectById(latestTopic.subject.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
    
    if (subject) {
      setSelectedSemester(latestTopic.semester);
      setSelectedSubject(subject);
      setSelectedTopic(latestTopic);
    } else {
      // Fallback: find subject by matching topic
      const allSubjects = [1, 2, 3].flatMap(sem => getSubjectsBySemester(sem));
      const matchingSubject = allSubjects.find(subj => 
        subj.topics.some((t: Topic) => t.id === latestTopic.id)
      );
      
      if (matchingSubject) {
        setSelectedSemester(latestTopic.semester);
        setSelectedSubject(matchingSubject);
        setSelectedTopic(latestTopic);
      }
    }
    setIsSidebarOpen(false);
  }, [refreshKey]); // Add refreshKey as dependency

  const handleBack = useCallback(() => {
    if (selectedTopic) {
      setSelectedTopic(null);
    } else if (selectedSubject) {
      setSelectedSubject(null);
    } else if (selectedSemester) {
      setSelectedSemester(null);
    }
  }, [selectedSemester, selectedSubject, selectedTopic]);

  const handleTopicUpdate = useCallback(() => {
    // Force refresh of topic data
    setRefreshKey(prev => prev + 1);
    
    // If a topic is currently selected, refresh it with the latest data
    if (selectedTopic) {
      const latestTopic = getTopicById(selectedTopic.id);
      if (latestTopic) {
        setSelectedTopic(latestTopic);
      }
    }
  }, [selectedTopic]);

  const backgroundClass = isDark
    ? 'bg-black'
    : 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900';

  const overlayClass = isDark
    ? 'bg-black/80'
    : 'bg-black/20';

  return (
    <div className={`min-h-screen ${backgroundClass} transition-colors duration-500`}>
      <div className={`absolute inset-0 ${overlayClass}`} />
      <ServicesSidebar open={isServicesOpen} onClose={() => setIsServicesOpen(false)} />
      <HeaderBar
        onMapClick={() => {
          setSelectedSemester(null);
          setSelectedSubject(null);
          setSelectedTopic(null);
          setIsSidebarOpen(false);
          setIsServicesOpen(false);
        }}
        isDark={isDark}
        onToggle={toggleTheme}
        onEditClick={() => {
          if (isAuthenticated) {
            setIsEditModalOpen(true);
          } else {
            setIsAuthModalOpen(true);
          }
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <AnimatePresence mode="wait">
            <motion.aside
              key="sidebar"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={`w-full md:w-80 lg:w-96 flex-shrink-0 ${
                isSidebarOpen ? 'block' : 'hidden md:block'
              }`}
            >
              <div className="sticky top-8 h-[calc(100vh-4rem)] overflow-y-auto pr-2">
                <Navigation
                  selectedSemester={selectedSemester}
                  selectedSubject={selectedSubject}
                  selectedTopic={selectedTopic}
                  onSemesterSelect={handleSemesterSelect}
                  onSubjectSelect={handleSubjectSelect}
                  onTopicSelect={handleTopicSelect}
                  onBack={handleBack}
                />
              </div>
            </motion.aside>
          </AnimatePresence>

          {/* Main Content Area */}
          <main className={`flex-1 min-w-0 ${isSidebarOpen ? 'hidden md:block' : 'block'}`}>
            <AnimatePresence mode="wait">
              {selectedTopic ? (
                <motion.div
                  key="topic-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <TopicContent topic={selectedTopic} />
                </motion.div>
              ) : (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-20"
                >
                  <div className="max-w-2xl mx-auto">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8"
                    >
                      <GraduationCap className="w-12 h-12 text-white" />
                    </motion.div>
                    
                    <motion.h2
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-4xl md:text-5xl font-bold text-white dark:text-neon-green mb-6"
                    >
                      Welcome to MCA Study Hub
                    </motion.h2>
                    
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-xl text-white/70 dark:text-neon-green/70 mb-8 leading-relaxed"
                    >
                      Your comprehensive learning companion for the MCA program. 
                      Navigate through semesters and subjects, or use the powerful 
                      search to find exactly what you're looking for.
                    </motion.p>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="grid md:grid-cols-2 gap-6 mt-12"
                    >
                      <div className="bg-white/10 dark:card-plain-translucent border border-white/20 rounded-2xl p-6 text-left">
                        <div className="w-12 h-12 bg-blue-400/20 rounded-xl flex items-center justify-center mb-4">
                          <span className="text-2xl">🔍</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white dark:text-neon-green mb-2">Smart Search</h3>
                        <p className="text-white/70 dark:text-neon-green/70 text-sm">
                          Use Google-style search with autocomplete to instantly find topics, 
                          subjects, or concepts across all semesters.
                        </p>
                      </div>

                      <div className="bg-white/10 dark:card-plain-translucent border border-white/20 rounded-2xl p-6 text-left">
                        <div className="w-12 h-12 bg-purple-400/20 rounded-xl flex items-center justify-center mb-4">
                          <span className="text-2xl">📚</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white dark:text-neon-green mb-2">Structured Learning</h3>
                        <p className="text-white/70 dark:text-neon-green/70 text-sm">
                          Navigate systematically through Semester → Subject → Topic 
                          with detailed explanations and examples.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>

      {/* Alert Modal */}
      <AlertModal
        isOpen={alertModal.isOpen}
        onClose={() => setAlertModal(prev => ({ ...prev, isOpen: false }))}
        message={alertModal.message}
        title={alertModal.title}
      />

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthenticated={() => {
          setIsAuthenticated(true);
          setIsEditModalOpen(true);
        }}
        isDark={isDark}
      />

      {/* Edit Modal */}
      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onTopicUpdate={handleTopicUpdate}
        isDark={isDark}
      />
    </div>
  );
}

function TopicPage({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const initialTopic = getTopicById(topicId || '');
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [refreshKey, setRefreshKey] = React.useState(0);

  // Interactive sidebar state
  const [selectedSemester, setSelectedSemester] = React.useState<number | null>(initialTopic ? initialTopic.semester : null);
  const [selectedSubject, setSelectedSubject] = React.useState<Subject | null>(initialTopic ? getSubjectById(initialTopic.subject.toLowerCase().replace(/[^a-z0-9]+/g, '-')) || null : null);
  const [selectedTopic, setSelectedTopic] = React.useState<Topic | null>(initialTopic || null);

  React.useEffect(() => {
    // If topicId changes (via URL), update sidebar state with latest data
    if (topicId) {
      const latestTopic = getTopicById(topicId);
      if (latestTopic) {
        setSelectedSemester(latestTopic.semester);
        setSelectedSubject(getSubjectById(latestTopic.subject.toLowerCase().replace(/[^a-z0-9]+/g, '-')) || null);
        setSelectedTopic(latestTopic);
      }
    }
  }, [topicId, refreshKey]); // Add refreshKey as dependency

  const handleSemesterSelect = (semester: number) => {
    setSelectedSemester(semester);
    setSelectedSubject(null);
    setSelectedTopic(null);
  };

  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubject(subject);
    setSelectedTopic(null);
  };

  const handleTopicSelect = React.useCallback((topic: Topic) => {
    // Get the latest version of the topic (with any modifications)
    const latestTopic = getTopicById(topic.id) || topic;
    setSelectedTopic(latestTopic);
    navigate(`/topic/${topic.id}`);
  }, [navigate, refreshKey]);

  const handleBack = () => {
    if (selectedTopic) {
      setSelectedTopic(null);
    } else if (selectedSubject) {
      setSelectedSubject(null);
    } else if (selectedSemester) {
      setSelectedSemester(null);
    } else {
      navigate('/'); // Go to home screen if nothing is selected
    }
  };

  const handleTopicUpdate = React.useCallback(() => {
    // Force refresh of topic data
    setRefreshKey(prev => prev + 1);
    
    // If a topic is currently selected, refresh it with the latest data
    if (selectedTopic) {
      const latestTopic = getTopicById(selectedTopic.id);
      if (latestTopic) {
        setSelectedTopic(latestTopic);
      }
    }
  }, [selectedTopic]);

  if (!selectedTopic) return <div className="text-white p-8">Select a topic from the sidebar.</div>;

  const backgroundClass = isDark
    ? 'bg-black'
    : 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900';
  const overlayClass = isDark ? 'bg-black/80' : 'bg-black/20';

  return (
    <div className={`min-h-screen ${backgroundClass} transition-colors duration-500`}>
      <div className={`absolute inset-0 ${overlayClass}`} />
      <ServicesSidebar open={isServicesOpen} onClose={() => setIsServicesOpen(false)} />
      <HeaderBar
        isDark={isDark}
        onToggle={toggleTheme}
        onMapClick={() => {}}
        onEditClick={() => {
          if (isAuthenticated) {
            setIsEditModalOpen(true);
          } else {
            setIsAuthModalOpen(true);
          }
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <AnimatePresence mode="wait">
            <motion.aside
              key="sidebar"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={`w-full md:w-80 lg:w-96 flex-shrink-0 ${isSidebarOpen ? 'block' : 'hidden md:block'}`}
            >
              <div className="sticky top-8 h-[calc(100vh-4rem)] overflow-y-auto pr-2">
                <Navigation
                  selectedSemester={selectedSemester}
                  selectedSubject={selectedSubject}
                  selectedTopic={selectedTopic}
                  onSemesterSelect={handleSemesterSelect}
                  onSubjectSelect={handleSubjectSelect}
                  onTopicSelect={handleTopicSelect}
                  onBack={handleBack}
                />
              </div>
            </motion.aside>
          </AnimatePresence>
          <main className="flex-1 min-w-0">
            <TopicContent topic={selectedTopic} isDark={isDark} onTopicUpdate={handleTopicUpdate} />
          </main>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthenticated={() => {
          setIsAuthenticated(true);
          setIsEditModalOpen(true);
        }}
        isDark={isDark}
      />

      {/* Edit Modal */}
      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onTopicUpdate={handleTopicUpdate}
        isDark={isDark}
      />
    </div>
  );
}

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  
  // Initialize database on app start
  useEffect(() => {
    autoInitializeDatabase();
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/menu" element={<MenuWelcome isDark={isDark} onToggle={toggleTheme} />} />
        <Route path="/topic/:topicId" element={<TopicPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/study-material" element={<AppContent isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/mca/qp" element={<QuestionPapersPage isDark={isDark} toggleTheme={toggleTheme} />} />

        <Route path="/document-enhancement" element={<DocumentEnhancementPage />} />
        
        <Route path="/quiz" element={<QuizPage />} />

        <Route path="/projects" element={<ProjectsPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/hackathons" element={<HackathonsPage />} />
        <Route path="/resume-builder" element={<ResumeBuilder isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/student-explanations" element={<StudentExplanations isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/jobs" element={<JobsPage isDark={isDark} toggleTheme={toggleTheme} />} />

        <Route path="/*" element={<AppContent isDark={isDark} toggleTheme={toggleTheme} />} />
      </Routes>
      
      {/* Development tools - only show in development */}
      {import.meta.env.DEV && (
        <>
          <DatabaseInitializer />
          <SaveTestButton />
        </>
      )}
    </BrowserRouter>
  );
}