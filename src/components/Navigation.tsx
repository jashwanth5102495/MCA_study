import React, { useState } from 'react';
import { ChevronRight, Book, GraduationCap, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Subject, Topic, getSubjectsBySemester } from '../data/syllabus';

interface NavigationProps {
  selectedSemester: number | null;
  selectedSubject: Subject | null;
  selectedTopic: Topic | null;
  onSemesterSelect: (semester: number) => void;
  onSubjectSelect: (subject: Subject) => void;
  onTopicSelect: (topic: Topic) => void;
  onBack: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  selectedSemester,
  selectedSubject,
  selectedTopic,
  onSemesterSelect,
  onSubjectSelect,
  onTopicSelect,
  onBack
}) => {
  const semesters = [1, 2, 3];
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);

  if (!selectedSemester) {
    return (
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <GraduationCap className="w-16 h-16 text-blue-300 dark:text-neon-green mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white dark:text-neon-green mb-2">Choose Your Semester</h2>
          <p className="text-white/70 dark:text-neon-green/70">Select a semester to explore subjects and topics</p>
        </motion.div>
        
        <div className="grid gap-4">
          {semesters.map((semester, index) => (
            <motion.button
              key={semester}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSemesterSelect(semester)}
              className="group flex items-center justify-between p-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg text-white hover:bg-white/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-300 dark:text-neon-green">{semester}</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white dark:text-neon-green">Semester {semester}</h3>
                  <p className="text-white/60 dark:text-neon-green/60 text-sm">{getSubjectsBySemester(semester).length} subjects</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-white/60 group-hover:text-white/80 transition-colors" />
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  if (!selectedSubject) {
    const subjects = getSubjectsBySemester(selectedSemester);
    
    return (
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-6"
        >
          <button
            onClick={onBack}
            className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-white rotate-180" />
          </button>
          <div>
            <h2 className="text-2xl font-bold text-white">Semester {selectedSemester}</h2>
            <p className="text-white/70">Choose a subject to explore</p>
          </div>
        </motion.div>

        <div className="grid gap-4">
          {subjects.map((subject, index) => (
            <motion.button
              key={subject.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSubjectSelect(subject)}
              className="group flex items-center justify-between p-5 bg-white/10 dark:bg-black/80 backdrop-blur-md border border-white/20 dark:border-neon-green/40 rounded-2xl hover:bg-white/20 dark:hover:bg-neon-green/10 transition-all duration-300 hover:scale-102"
            >
              <div className="flex items-center gap-4">
                <Book className="w-6 h-6 text-blue-300 dark:text-neon-green" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white dark:text-neon-green">{subject.name}</h3>
                  <p className="text-white/60 dark:text-neon-green/60 text-sm">{subject.topics.length} topics</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white/80 transition-colors" />
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  // Group topics by unit
  const topicsByUnit: { [unit: string]: Topic[] } = {};
  if (selectedSubject) {
    selectedSubject.topics.forEach(topic => {
      const unit = topic.unit || 'Other';
      if (!topicsByUnit[unit]) topicsByUnit[unit] = [];
      topicsByUnit[unit].push(topic);
    });
  }

  if (selectedSubject && !selectedUnit) {
    // Show unit buttons
  return (
      <div className="h-full overflow-y-auto pr-2" style={{ maxHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-6"
      >
        <button
          onClick={onBack}
          className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-white rotate-180" />
        </button>
        <div>
          <h2 className="text-xl font-bold text-white">{selectedSubject.name}</h2>
          <p className="text-white/70 text-sm">Semester {selectedSemester}</p>
        </div>
      </motion.div>
        <div className="space-y-3">
          {Object.keys(topicsByUnit).map((unit, idx) => (
            <motion.button
              key={unit}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => setSelectedUnit(unit)}
              className="w-full flex items-center gap-3 p-4 rounded-xl transition-all duration-200 text-left bg-white/10 dark:bg-black/80 hover:bg-blue-400/10 dark:hover:bg-neon-green/10 text-white/90 dark:text-neon-green border border-white/10 dark:border-neon-green/40 font-semibold text-lg"
            >
              <Book className="w-5 h-5 flex-shrink-0 text-blue-300" />
              <span>{unit}</span>
              <ChevronRight className="w-4 h-4 ml-auto text-white/60" />
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  if (selectedSubject && selectedUnit) {
    // Show topics for the selected unit
    const topics = topicsByUnit[selectedUnit] || [];
    return (
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-6"
        >
          <button
            onClick={() => setSelectedUnit(null)}
            className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-white rotate-180" />
          </button>
          <div>
            <h2 className="text-xl font-bold text-white">{selectedSubject.name}</h2>
            <p className="text-white/70 text-sm">{selectedUnit}</p>
          </div>
        </motion.div>
      <div className="space-y-3">
          {topics.map((topic, index) => (
          <motion.button
            key={topic.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => onTopicSelect(topic)}
            className={`w-full flex items-center gap-3 p-4 rounded-xl transition-all duration-200 text-left ${
              selectedTopic?.id === topic.id
                ? 'bg-blue-400/20 dark:bg-neon-green/20 border-l-4 border-blue-400 dark:border-neon-green text-white dark:text-neon-green'
                : 'bg-white/5 dark:bg-black/80 hover:bg-white/10 dark:hover:bg-neon-green/10 text-white/80 dark:text-neon-green/80 hover:text-white dark:hover:text-neon-green border border-white/10 dark:border-neon-green/40'
            }`}
          >
            <FileText className="w-4 h-4 flex-shrink-0" />
            <span className="font-medium">{topic.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
  }
};