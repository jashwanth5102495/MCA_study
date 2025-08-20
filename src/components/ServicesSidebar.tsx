import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  BookOpen,
  FileText,
  Sparkles,
  ClipboardList,
  HelpCircle,
  UserCheck,
  Users
} from 'lucide-react';

const services = [
  { label: 'Study Material (A.I.)', icon: <BookOpen className="w-6 h-6" /> },
  { label: 'Previous Years Question Papers', icon: <FileText className="w-6 h-6" /> },
  { label: 'Document Enhancement A.I', icon: <Sparkles className="w-6 h-6" /> },
  { label: 'Quiz (A.I.)', icon: <ClipboardList className="w-6 h-6" /> },
  { label: 'Virtual Teacher (A.I.)', icon: <HelpCircle className="w-6 h-6" /> },
  { label: 'Resume Builder with ATS Score', icon: <UserCheck className="w-6 h-6" /> },
  { label: 'Community/Group Study', icon: <Users className="w-6 h-6" /> },
];

export const ServicesSidebar: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => (
  <AnimatePresence>
    {open && (
      <motion.aside
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-full w-72 bg-black/90 dark:bg-black z-50 shadow-2xl border-r border-neon-green flex flex-col"
      >
        <div className="flex items-center gap-3 p-6 border-b border-neon-green">
          <Layers className="w-7 h-7 text-neon-green" />
          <span className="text-xl font-bold text-neon-green">Services</span>
          <button onClick={onClose} className="ml-auto text-neon-green hover:text-white/80 p-2 rounded-xl transition-colors">
            ✕
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {services.map((service, idx) => (
            <button
              key={service.label}
              className="w-full flex items-center gap-4 p-4 rounded-xl text-left text-neon-green hover:bg-neon-green/10 transition-colors text-lg font-medium"
            >
              {service.icon}
              <span>{service.label}</span>
            </button>
          ))}
        </nav>
      </motion.aside>
    )}
  </AnimatePresence>
); 