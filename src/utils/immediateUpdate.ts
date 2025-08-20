import { Topic } from '../data/syllabus';

// Utility for immediate UI updates after topic saves
export const triggerImmediateTopicUpdate = (topic: Topic): void => {
  // Update all possible caches immediately
  localStorage.setItem(`topic_${topic.id}`, JSON.stringify(topic));
  
  // Dispatch multiple events to ensure all components update
  const events = [
    new CustomEvent('topicUpdated', { 
      detail: { topicId: topic.id, topic } 
    }),
    new CustomEvent('topicChanged', { 
      detail: { topicId: topic.id, topic } 
    }),
    new CustomEvent('contentUpdated', { 
      detail: { topicId: topic.id, topic } 
    })
  ];
  
  events.forEach(event => {
    window.dispatchEvent(event);
  });
  
  // Force a small delay then trigger again to ensure all components catch it
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent('topicUpdated', { 
      detail: { topicId: topic.id, topic } 
    }));
  }, 50);
  
  console.log(`🔄 Triggered immediate UI update for topic: ${topic.name}`);
};

// Force refresh of all topic displays
export const forceTopicRefresh = (): void => {
  window.dispatchEvent(new CustomEvent('forceRefresh'));
  
  // Also trigger a storage event to update all tabs
  window.dispatchEvent(new StorageEvent('storage', {
    key: 'topicUpdate',
    newValue: Date.now().toString()
  }));
};

// Check if a topic update is recent (within last 5 seconds)
export const isRecentUpdate = (topicId: string): boolean => {
  const lastUpdate = localStorage.getItem(`lastUpdate_${topicId}`);
  if (!lastUpdate) return false;
  
  const updateTime = parseInt(lastUpdate);
  const now = Date.now();
  
  return (now - updateTime) < 5000; // 5 seconds
};

// Mark a topic as recently updated
export const markAsRecentlyUpdated = (topicId: string): void => {
  localStorage.setItem(`lastUpdate_${topicId}`, Date.now().toString());
  
  // Clean up old markers after 10 seconds
  setTimeout(() => {
    localStorage.removeItem(`lastUpdate_${topicId}`);
  }, 10000);
};