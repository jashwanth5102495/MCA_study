import React, { useState } from 'react';
import { BookOpen, FileText, Sparkles, ClipboardList, Briefcase, HelpCircle, Laptop2, Newspaper, CalendarClock, GraduationCap, User, Video } from 'lucide-react';
import { HeaderBar } from './HeaderBar';
import { useNavigate } from 'react-router-dom';

interface MenuWelcomeProps {
  isDark: boolean;
  onToggle: () => void;
}

const features = [
  { label: 'Study Material (A.I.)', icon: <BookOpen className="w-8 h-8 text-blue-400" />, description: 'Access AI-powered study materials tailored to your syllabus.' },
  { label: 'Question Papers', icon: <FileText className="w-8 h-8 text-purple-400" />, description: 'Practice with previous and sample question papers.' },
  { label: 'Document Enhancement', icon: <FileText className="w-8 h-8 text-gray-400" />, description: 'Coming Soon - Upload study material and get AI-powered Q&A and summaries.', disabled: true },
  { label: 'Quiz (A.I.)', icon: <ClipboardList className="w-8 h-8 text-green-400" />, description: 'Test your knowledge with AI-generated quizzes.' },
  { label: 'Resume Builder', icon: <User className="w-8 h-8 text-cyan-400" />, description: 'Create professional resumes with ATS scoring and templates.' },
  { label: 'Student Explanations', icon: <Video className="w-8 h-8 text-red-400" />, description: 'Upload and share your topic explanation videos with HOD approval.' },
  { label: 'Jobs Update', icon: <Briefcase className="w-8 h-8 text-pink-400" />, description: 'Stay updated with the latest job opportunities.' },
  { label: 'Virtual Teacher (A.I.)', icon: <GraduationCap className="w-8 h-8 text-yellow-300" />, description: 'Get personalized AI tutoring and explanations.' },
  { label: 'Computer Science Projects', icon: <Laptop2 className="w-8 h-8 text-indigo-400" />, description: 'Explore and build computer science projects.' },
  { label: 'Trending Articles on New Technology', icon: <Newspaper className="w-8 h-8 text-orange-400" />, description: 'Read trending articles on the latest technologies.' },
  { label: 'Upcoming Hackathons', icon: <CalendarClock className="w-8 h-8 text-lime-400" />, description: 'Find and participate in upcoming hackathons.' },
];

export const MenuWelcome: React.FC<MenuWelcomeProps> = ({ isDark, onToggle }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center bg-black px-2 relative">
      <HeaderBar isDark={isDark} onToggle={onToggle} onMapClick={() => {}} />
      <div className="w-full max-w-6xl mx-auto mt-16 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center drop-shadow-lg">Welcome to the Menu</h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-24">
          {features.map((item, idx) => (
            <div
              key={item.label}
              className={`relative group rounded-3xl shadow-2xl p-10 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 bg-black/60 backdrop-blur-lg border border-white/10 hover:border-blue-400 hover:shadow-neon hover:scale-105 ${hovered === idx ? 'ring-2 ring-blue-400/60' : ''}`}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              style={{ minHeight: 240 }}
        >
          {item.icon}
              <span className="mt-5 text-xl font-semibold text-white text-center leading-tight drop-shadow-lg">
            {item.label}
          </span>
          <button
                className={`mt-8 px-8 py-2 rounded-full font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 text-lg ${
                  idx === 2 
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 focus:ring-blue-400/60'
                }`}
                onClick={() => {
                  if (idx === 0) navigate('/study-material');
                  else if (idx === 1) navigate('/mca/qp');
                  else if (idx === 2) {
                    alert('🚀 Document Enhancement Feature Coming Soon!\n\nWe are working on an advanced AI-powered document enhancement system that will help you:\n\n• Generate summaries from your documents\n• Create Q&A from study materials\n• Improve document formatting\n• Extract key insights\n\nStay tuned for this exciting feature!');
                  }
                  else if (idx === 3) navigate('/quiz');
                  else if (idx === 4) navigate('/resume-builder');
                  else if (idx === 5) navigate('/student-explanations');
                  else if (idx === 6) navigate('/jobs');
                  else if (idx === 7) navigate('/virtual-teacher');
                  else if (idx === 8) navigate('/projects');
                  else if (idx === 9) navigate('/articles');
                  else if (idx === 10) navigate('/hackathons');
                }}
          >
            {idx === 2 ? 'Coming Soon' : 'Start'}
          </button>
        </div>
      ))}
    </div>
  </div>
      {/* Auto-scrolling ticker at the bottom */}
      <div className="w-full fixed bottom-0 left-0 bg-black/70 backdrop-blur-lg py-3 overflow-hidden z-50 border-t border-white/10">
        <div className="relative w-full h-10">
          <div
            className="absolute whitespace-nowrap animate-marquee text-white text-lg font-semibold flex items-center gap-16"
            style={{ animation: 'marquee 30s linear infinite' }}
          >
            {features.concat(features).map((item, idx) => (
              <span key={idx} className="mx-8 flex items-center gap-2 opacity-90">
                {item.icon}
                {item.label}
              </span>
            ))}
          </div>
        </div>
    <style>{`
          @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
          .animate-fade-in {
            animation: fadeIn 0.3s ease;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .hover\:shadow-neon:hover {
            box-shadow: 0 0 24px 4px #38bdf8, 0 2px 16px 0 #000;
          }
    `}</style>
      </div>
  </div>
); 
}; 