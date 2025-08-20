import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeaderBar } from './HeaderBar';
import { Navigation } from './Navigation';
import { ServicesSidebar } from './ServicesSidebar';
import { AlertModal } from './AlertModal';
import { EditModal } from './EditModal';
import { AuthModal } from './AuthModal';
import { Subject, Topic, getSubjectById, getSubjectsBySemester, getTopicById } from '../data/syllabus';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  isDark: boolean;
  toggleTheme: () => void;
  showNavigation?: boolean;
  showServices?: boolean;
  showBackButton?: boolean;
  backButtonText?: string;
  onBackClick?: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  isDark, 
  toggleTheme, 
  showNavigation = true,
  showServices = true,
  showBackButton = false,
  backButtonText = "Back",
  onBackClick
}) => {
  const navigate = useNavigate();
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
  }, [refreshKey]);

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

  const handleBackClick = useCallback(() => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  }, [onBackClick, navigate]);

  const backgroundClass = isDark
    ? 'bg-black'
    : 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900';

  const overlayClass = isDark
    ? 'bg-black/80'
    : 'bg-black/20';

  return (
    <div className={`min-h-screen ${backgroundClass} transition-colors duration-500`}>
      <div className={`absolute inset-0 ${overlayClass}`} />
      
      {/* Services Sidebar */}
      {showServices && (
        <ServicesSidebar open={isServicesOpen} onClose={() => setIsServicesOpen(false)} />
      )}
      
      {/* Header Bar */}
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
      
      {/* Back Button */}
      {showBackButton && (
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-4">
          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-200 backdrop-blur-sm border border-white/20"
          >
            <ArrowLeft className="w-4 h-4" />
            {backButtonText}
          </button>
        </div>
      )}
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Navigation Sidebar */}
          {showNavigation && (
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
          )}

          {/* Main Content Area */}
          <main className={`flex-1 min-w-0 ${isSidebarOpen && showNavigation ? 'hidden md:block' : 'block'}`}>
            {children}
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
}; 