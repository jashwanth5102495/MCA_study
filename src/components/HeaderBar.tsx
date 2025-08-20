import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Search, X, Home, Edit3 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TabSwitcherWithPopup } from './TabSwitcherWithPopup';
import { ThemeToggle } from './ThemeToggle';
import Fuse from 'fuse.js';
import { getAllTopics, Topic } from '../data/syllabus';
import { TopicModal } from './TopicContent';

function getFormattedDateTime() {
  const now = new Date();
  return now.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
}

export const HeaderBar: React.FC<{ onMapClick?: () => void; isDark: boolean; onToggle: () => void; onEditClick?: () => void }> = ({ onMapClick, isDark, onToggle, onEditClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dateTime, setDateTime] = useState(getFormattedDateTime());
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueePosRef = useRef<number>(0);
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState<Topic[]>([]);
  const staticSuggestions = [
    'Search for Java OOP topics',
    'Find previous year question papers',
    'Quiz: Data Structures',
    'Virtual Teacher help',
    'Resume Builder',
  ];
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [modalTopic, setModalTopic] = useState<Topic | null>(null);

  // Fuzzy search setup
  const fuse = new Fuse(getAllTopics(), {
    keys: [
      { name: 'name', weight: 0.7 },
      { name: 'subject', weight: 0.3 },
      { name: 'content.introduction', weight: 0.1 }
    ],
    threshold: 0.3,
    includeScore: true,
  });

  useEffect(() => {
    if (searchValue.length > 0) {
      const results = fuse.search(searchValue);
      setSuggestions(results.slice(0, 8).map(result => result.item));
      setShowSuggestions(true);
      setSelectedIndex(-1);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
      setSelectedIndex(-1);
    }
  }, [searchValue]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || suggestions.length === 0) return;
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => prev < suggestions.length - 1 ? prev + 1 : 0);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : suggestions.length - 1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleTopicSelect(suggestions[selectedIndex]);
        } else if (suggestions.length > 0) {
          handleTopicSelect(suggestions[0]);
        }
        break;
      case 'Escape':
        setShowSearch(false);
        setShowSuggestions(false);
        setSelectedIndex(-1);
        setSearchValue('');
        break;
    }
  };

  const handleTopicSelect = (topic: Topic) => {
    setSearchValue('');
    setShowSearch(false);
    setShowSuggestions(false);
    setSelectedIndex(-1);
    setModalTopic(topic);
  };

  useEffect(() => {
    if (selectedIndex >= 0 && suggestionRefs.current[selectedIndex]) {
      suggestionRefs.current[selectedIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [selectedIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(getFormattedDateTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Removed marquee animation effect

  return (
    <>
      <div className="w-full flex justify-center mt-6">
        <div className="flex items-center gap-6 bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-full px-6 py-2 shadow-lg max-w-4xl w-full">
          {/* Left: Logo/Icon */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-white/10">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          {/* Center: Static Date/Time */}
          <div className="flex-1 flex items-center justify-center h-6">
            <span className="text-xs text-white/80 font-mono select-none">
              {dateTime}
            </span>
          </div>
          {/* Right: Switcher, Magnifier, ThemeToggle */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Home button - always visible and functional */}
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 transform hover:scale-105"
              onClick={() => {
                navigate('/');
                if (onMapClick) onMapClick();
              }}
              aria-label="Go Home"
            >
              <Home className="w-5 h-5 text-white" />
            </button>
            <TabSwitcherWithPopup onMapClick={onMapClick} />
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
              onClick={() => setShowSearch(true)}
              aria-label="Open Search"
            >
              <Search className="w-5 h-5 text-white" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
              onClick={onEditClick}
              aria-label="Edit Content"
            >
              <Edit3 className="w-5 h-5 text-white" />
            </button>
            <ThemeToggle isDark={isDark} onToggle={onToggle} />
          </div>
        </div>
      </div>
      {/* Search Modal */}
      {showSearch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={() => setShowSearch(false)}>
          <div
            className="bg-[#232222] rounded-2xl p-8 max-w-lg w-full shadow-2xl relative flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSearch(false)}
              className="absolute top-3 right-3 p-2 rounded-full hover:bg-white/10 text-white"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <form className="w-full flex items-center gap-2 mb-6" onSubmit={e => e.preventDefault()}>
              <input
                ref={inputRef}
                type="text"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search topics, subjects, or concepts..."
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-lg"
                autoFocus
              />
              <button type="submit" className="p-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition">
                <Search className="w-5 h-5" />
              </button>
            </form>
            {searchValue === '' && (
              <div className="w-full">
                <div className="text-white/60 mb-2">Suggestions:</div>
                <ul className="space-y-2">
                  {staticSuggestions.map(s => (
                    <li key={s} className="px-4 py-2 bg-white/5 rounded-lg text-white/80 cursor-pointer hover:bg-white/10 transition">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {showSuggestions && suggestions.length > 0 && (
              <div className="w-full max-h-80 overflow-y-auto mt-2">
                {suggestions.map((topic, index) => (
                  <div
                    key={topic.id}
                    ref={el => suggestionRefs.current[index] = el}
                    onClick={() => handleTopicSelect(topic)}
                    className={`flex items-start gap-3 p-4 cursor-pointer transition-colors duration-200 ${
                      index === selectedIndex
                        ? 'bg-blue-400/20 border-l-4 border-blue-400'
                        : 'hover:bg-white/5'
                    } ${index !== suggestions.length - 1 ? 'border-b border-white/10' : ''}`}
                  >
                    <span className="w-5 h-5 mt-1 flex-shrink-0">
                      <Search className="text-blue-300" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-white mb-1">
                        {topic.name}
                      </div>
                      <div className="text-sm text-white/70 mb-1">
                        {topic.subject} • Semester {topic.semester}
                      </div>
                      <div className="text-xs text-white/50 line-clamp-2">
                        {topic.content.introduction}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      {modalTopic && (
        <TopicModal topic={modalTopic} onClose={() => setModalTopic(null)} />
      )}
    </>
  );
}; 