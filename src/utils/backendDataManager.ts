import { saveTopic, getTopic, checkBackendHealth, getDatabaseStats } from '../services/api';

export interface TopicContent {
  introduction: string;
  definition: string;
  realWorldExample: string;
  realWorldUse: string;
  importance: string;
  detailedExplanation: string;
  sampleProgram?: string;
  diagram?: string;
  diagramDescription?: string;
  images?: Array<{ data: string; description: string }>;
  youtubeLinks?: string[];
  externalLinks?: Array<{ title: string; url: string }>;
}

export interface Topic {
  topicId: string;
  name: string;
  semester: number;
  subject: string;
  unit: string;
  content: TopicContent;
  updatedBy?: string;
  updatedAt?: Date;
  createdAt?: Date;
}

class BackendDataManager {
  private saveQueue: Map<string, { content: TopicContent; timestamp: number }> = new Map();
  private isProcessing = false;
  private retryAttempts = new Map<string, number>();
  private maxRetries = 3;

  constructor() {
    // Start processing queue every 2 seconds
    setInterval(() => this.processQueue(), 2000);
    
    // Save any pending changes before page unload
    window.addEventListener('beforeunload', () => {
      this.processQueue(true); // Force immediate processing
    });
  }

  // Save topic content to backend with automatic retry
  async saveTopicToBackend(topicId: string, content: TopicContent, updatedBy: string = 'user'): Promise<boolean> {
    try {
      // Add to queue for batch processing
      this.saveQueue.set(topicId, { content, timestamp: Date.now() });
      
      // Also try immediate save
      const result = await saveTopic(topicId, content, updatedBy);
      
      if (result.success) {
        console.log(`✅ Topic ${topicId} saved immediately to backend`);
        this.saveQueue.delete(topicId);
        this.retryAttempts.delete(topicId);
        return true;
      } else {
        console.warn(`⚠️ Immediate save failed for topic ${topicId}, will retry:`, result.message);
        return false;
      }
    } catch (error) {
      console.error(`❌ Error saving topic ${topicId}:`, error);
      return false;
    }
  }

  // Process the save queue
  private async processQueue(force: boolean = false) {
    if (this.isProcessing && !force) return;
    
    this.isProcessing = true;
    
    try {
      const now = Date.now();
      const topicsToSave = Array.from(this.saveQueue.entries())
        .filter(([_, data]) => force || (now - data.timestamp) > 1000) // Wait at least 1 second
        .slice(0, 10); // Process max 10 at a time

      if (topicsToSave.length === 0) {
        this.isProcessing = false;
        return;
      }

      console.log(`🔄 Processing ${topicsToSave.length} topics in save queue...`);

      for (const [topicId, { content }] of topicsToSave) {
        const retryCount = this.retryAttempts.get(topicId) || 0;
        
        if (retryCount >= this.maxRetries) {
          console.error(`❌ Max retries reached for topic ${topicId}`);
          this.saveQueue.delete(topicId);
          this.retryAttempts.delete(topicId);
          continue;
        }

        try {
          const result = await saveTopic(topicId, content, 'user');
          
          if (result.success) {
            console.log(`✅ Topic ${topicId} saved to backend (attempt ${retryCount + 1})`);
            this.saveQueue.delete(topicId);
            this.retryAttempts.delete(topicId);
          } else {
            console.warn(`⚠️ Failed to save topic ${topicId} (attempt ${retryCount + 1}):`, result.message);
            this.retryAttempts.set(topicId, retryCount + 1);
          }
        } catch (error) {
          console.error(`❌ Error saving topic ${topicId} (attempt ${retryCount + 1}):`, error);
          this.retryAttempts.set(topicId, retryCount + 1);
        }

        // Small delay between saves to avoid overwhelming the server
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    } catch (error) {
      console.error('❌ Error processing save queue:', error);
    } finally {
      this.isProcessing = false;
    }
  }

  // Get topic from backend with fallback to localStorage
  async getTopicFromBackend(topicId: string): Promise<Topic | null> {
    try {
      const result = await getTopic(topicId);
      
      if (result.success && result.data) {
        console.log(`✅ Retrieved topic ${topicId} from backend`);
        return result.data;
      } else {
        console.warn(`⚠️ Topic ${topicId} not found in backend:`, result.message);
        return null;
      }
    } catch (error) {
      console.error(`❌ Error getting topic ${topicId} from backend:`, error);
      return null;
    }
  }

  // Check backend health
  async checkBackendHealth(): Promise<{ connected: boolean; topicCount: number; message: string }> {
    try {
      const result = await checkBackendHealth();
      
      if (result.success && result.database) {
        return {
          connected: result.database.connected,
          topicCount: result.database.topicCount,
          message: result.message || 'Backend is healthy'
        };
      } else {
        return {
          connected: false,
          topicCount: 0,
          message: result.message || 'Backend health check failed'
        };
      }
    } catch (error) {
      return {
        connected: false,
        topicCount: 0,
        message: `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`
      };
    }
  }

  // Get database statistics
  async getDatabaseStats(): Promise<{ topics: number; videos: number; recentUpdates: any[] } | null> {
    try {
      const result = await getDatabaseStats();
      
      if (result.success && result.data) {
        return result.data;
      } else {
        console.warn('⚠️ Failed to get database stats:', result.message);
        return null;
      }
    } catch (error) {
      console.error('❌ Error getting database stats:', error);
      return null;
    }
  }

  // Get queue status
  getQueueStatus(): { pending: number; retrying: number } {
    const pending = this.saveQueue.size;
    const retrying = Array.from(this.retryAttempts.values()).filter(count => count > 0).length;
    
    return { pending, retrying };
  }

  // Clear queue (for testing or manual reset)
  clearQueue(): void {
    this.saveQueue.clear();
    this.retryAttempts.clear();
    console.log('🧹 Save queue cleared');
  }

  // Force process queue immediately
  async forceProcessQueue(): Promise<void> {
    await this.processQueue(true);
  }
}

// Create singleton instance
export const backendDataManager = new BackendDataManager();

// Export for use in components
export const saveTopicToBackend = (topicId: string, content: TopicContent, updatedBy?: string) => 
  backendDataManager.saveTopicToBackend(topicId, content, updatedBy);

export const getTopicFromBackend = (topicId: string) => 
  backendDataManager.getTopicFromBackend(topicId);

export const checkBackendHealth = () => 
  backendDataManager.checkBackendHealth();

export const getDatabaseStats = () => 
  backendDataManager.getDatabaseStats();

export const getQueueStatus = () => 
  backendDataManager.getQueueStatus();

export const clearQueue = () => 
  backendDataManager.clearQueue();

export const forceProcessQueue = () => 
  backendDataManager.forceProcessQueue();