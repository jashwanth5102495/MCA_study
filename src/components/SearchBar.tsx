import React, { useState, useRef, useEffect } from 'react';
import { Search, BookOpen } from 'lucide-react';
import Fuse from 'fuse.js';
import { getAllTopics, Topic } from '../data/syllabus';
import { TopicModal } from './TopicContent';

interface SearchBarProps {
  onTopicSelect: (topic: Topic) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onTopicSelect }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Topic[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [modalTopic, setModalTopic] = useState<Topic | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    if (query.length > 0) {
      const results = fuse.search(query);
      setSuggestions(results.slice(0, 8).map(result => result.item));
      setShowSuggestions(true);
      setSelectedIndex(-1);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
      setSelectedIndex(-1);
    }
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
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
        setShowSuggestions(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  const handleTopicSelect = (topic: Topic) => {
    setModalTopic(topic);
    setQuery('');
    setShowSuggestions(false);
    setSelectedIndex(-1);
    inputRef.current?.blur();
  };

  useEffect(() => {
    if (selectedIndex >= 0 && suggestionRefs.current[selectedIndex]) {
      suggestionRefs.current[selectedIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }, [selectedIndex]);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query && setShowSuggestions(true)}
          placeholder="Search topics, subjects, or concepts..."
          className="w-full pl-12 pr-4 py-4 text-lg bg-white/10 dark:bg-black/80 backdrop-blur-md border border-white/20 dark:border-neon-green/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 dark:focus:ring-neon-green/50 focus:border-blue-400/50 dark:focus:border-neon-green text-white dark:text-neon-green placeholder-white/60 dark:placeholder-neon-green/60 transition-all duration-300"
        />
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/10 dark:bg-black/80 backdrop-blur-xl border border-white/20 dark:border-neon-green/40 rounded-2xl shadow-2xl max-h-80 overflow-y-auto z-50">
          {suggestions.map((topic, index) => (
            <div
              key={topic.id}
              ref={(el) => suggestionRefs.current[index] = el}
              onClick={() => handleTopicSelect(topic)}
              className={`flex items-start gap-3 p-4 cursor-pointer transition-colors duration-200 ${
                index === selectedIndex 
                  ? 'bg-blue-400/20 dark:bg-neon-green/20 border-l-4 border-blue-400 dark:border-neon-green' 
                  : 'hover:bg-white/5 dark:hover:bg-neon-green/10'
              } ${index !== suggestions.length - 1 ? 'border-b border-white/10 dark:border-neon-green/20' : ''}`}
            >
              <BookOpen className="w-5 h-5 text-blue-300 dark:text-neon-green mt-1 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-white dark:text-neon-green mb-1">
                  {topic.name}
                </div>
                <div className="text-sm text-white/70 dark:text-neon-green/70 mb-1">
                  {topic.subject} • Semester {topic.semester}
                </div>
                <div className="text-xs text-white/50 dark:text-neon-green/50 line-clamp-2">
                  {topic.content.introduction}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {modalTopic && (
        <TopicModal topic={modalTopic} onClose={() => setModalTopic(null)} />
      )}
    </div>
  );
};