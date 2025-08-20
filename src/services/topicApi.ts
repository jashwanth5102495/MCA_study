// Simplified and reliable topic API service
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface TopicSaveRequest {
  topicId: string;
  name: string;
  semester: number;
  subject: string;
  unit?: string;
  content: {
    introduction: string;
    definition: string;
    realWorldExample: string;
    realWorldUse: string;
    importance: string;
    detailedExplanation: string;
    sampleProgram?: string;
    diagram?: string;
    images?: Array<{ data: string; description: string }>;
    youtubeLinks?: string[];
    externalLinks?: Array<{ title: string; url: string }>;
  };
  updatedBy?: string;
}

export interface TopicSaveResponse {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}

// Test backend connection
export const testConnection = async (): Promise<boolean> => {
  try {
    console.log('🔍 Testing backend connection...');
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Backend connection successful:', data.message);
      return true;
    } else {
      console.error('❌ Backend connection failed:', response.status, response.statusText);
      return false;
    }
  } catch (error) {
    console.error('❌ Backend connection error:', error);
    return false;
  }
};

// Save topic to backend
export const saveTopicToBackend = async (request: TopicSaveRequest): Promise<TopicSaveResponse> => {
  try {
    console.log(`💾 Saving topic "${request.name}" to backend...`);
    console.log(`🌐 API URL: ${API_BASE_URL}/topics/${request.topicId}`);
    
    // Test connection first
    const isConnected = await testConnection();
    if (!isConnected) {
      return {
        success: false,
        message: 'Cannot connect to backend server. Please ensure the server is running on port 5000.',
        error: 'Connection failed'
      };
    }

    const requestBody = {
      content: request.content,
      updatedBy: request.updatedBy || 'user',
      name: request.name,
      semester: request.semester,
      subject: request.subject,
      unit: request.unit || 'Unit I'
    };

    console.log('📤 Sending request:', {
      url: `${API_BASE_URL}/topics/${request.topicId}`,
      method: 'PUT',
      bodyKeys: Object.keys(requestBody)
    });

    const response = await fetch(`${API_BASE_URL}/topics/${request.topicId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    console.log(`📡 Response status: ${response.status} ${response.statusText}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Backend error response:', errorText);
      return {
        success: false,
        message: `Backend error: ${response.status} ${response.statusText}`,
        error: errorText
      };
    }

    const result = await response.json();
    console.log('✅ Backend response:', result);

    if (result.success) {
      return {
        success: true,
        message: result.message || 'Topic saved successfully to database',
        data: result.data
      };
    } else {
      return {
        success: false,
        message: result.message || 'Unknown backend error',
        error: result.error
      };
    }
  } catch (error) {
    console.error('❌ Network error saving topic:', error);
    return {
      success: false,
      message: `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      error: 'Network failure'
    };
  }
};

// Get topic from backend
export const getTopicFromBackend = async (topicId: string): Promise<TopicSaveResponse> => {
  try {
    console.log(`🔍 Fetching topic "${topicId}" from backend...`);
    
    const response = await fetch(`${API_BASE_URL}/topics/${topicId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return {
        success: false,
        message: `Failed to fetch topic: ${response.status} ${response.statusText}`,
        error: `HTTP ${response.status}`
      };
    }

    const result = await response.json();
    
    if (result.success) {
      return {
        success: true,
        message: 'Topic fetched successfully',
        data: result.data
      };
    } else {
      return {
        success: false,
        message: result.message || 'Failed to fetch topic',
        error: result.error
      };
    }
  } catch (error) {
    console.error('❌ Error fetching topic:', error);
    return {
      success: false,
      message: `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      error: 'Network failure'
    };
  }
};