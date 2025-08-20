import React, { useState } from 'react';
import { LayoutGrid, X, BookOpen, FileText, Sparkles, ClipboardList, HelpCircle, UserCheck, Users } from 'lucide-react';
// @ts-ignore
import { useNavigate } from 'react-router-dom';

const services = [
  { label: 'Study Material (A.I.)', icon: <BookOpen className="w-5 h-5" /> },
  { label: 'Previous Years Question Papers', icon: <FileText className="w-5 h-5" /> },
  { label: 'Document Enhancement A.I', icon: <Sparkles className="w-5 h-5" /> },
  { label: 'Quiz (A.I.)', icon: <ClipboardList className="w-5 h-5" /> },
  { label: 'Virtual Teacher (A.I.)', icon: <HelpCircle className="w-5 h-5" /> },
  { label: 'Resume Builder with ATS Score', icon: <UserCheck className="w-5 h-5" /> },
  { label: 'Community/Group Study', icon: <Users className="w-5 h-5" /> },
];

export const TabSwitcherWithPopup: React.FC<{ onMapClick?: () => void }> = ({ onMapClick }) => {
  const [selected, setSelected] = useState<'menu' | 'study'>('study'); // Default to 'study'
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setSelected('menu');
    navigate('/menu');
  };
  const handleStudyClick = () => {
    setSelected('study');
    navigate('/'); // Navigate to home/study material page
    if (onMapClick) onMapClick();
  };

  return (
    <>
      <div className="flex items-center bg-[#2b2323] rounded-full p-1 w-fit shadow-lg">
        <button
          onClick={handleMenuClick}
          className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-200 text-sm ${
            selected === 'menu'
              ? 'bg-[#cfd2b2] text-black shadow'
              : 'bg-transparent text-white hover:bg-[#3a3232]'
          }`}
        >
          <LayoutGrid className="w-4 h-4" />
          Menu
        </button>
        <button
          onClick={handleStudyClick}
          className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-200 text-sm ${
            selected === 'study'
              ? 'bg-[#cfd2b2] text-black shadow'
              : 'bg-transparent text-white hover:bg-[#3a3232]'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          Study Material
        </button>
      </div>
    </>
  );
}; 