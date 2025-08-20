import React, { useState, useRef, useEffect } from 'react';
import { Upload, Play, User, Lock, Video, Calendar, Eye, Download, Sun, Moon, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface VideoExplanation {
  id: string;
  title: string;
  subject: string;
  topic: string;
  studentName: string;
  uploadDate: string;
  filename: string;
  duration?: string;
  views: number;
}

interface HODCredentials {
  username: string;
  password: string;
}

interface StudentExplanationsProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const StudentExplanations: React.FC<StudentExplanationsProps> = ({ isDark = true, toggleTheme }) => {
  // Add error boundary
  try {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [credentials, setCredentials] = useState<HODCredentials>({ username: '', password: '' });
  const [videos, setVideos] = useState<VideoExplanation[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Mock HOD credentials (in production, this should be from backend)
  const HOD_CREDENTIALS = {
    username: 'hod@mca.edu',
    password: 'hod123'
  };

  // Load videos from localStorage on component mount
  useEffect(() => {
    const savedVideos = localStorage.getItem('studentVideos');
    if (savedVideos) {
      setVideos(JSON.parse(savedVideos));
    }
  }, []);

  const handleLogin = () => {
    if (credentials.username === HOD_CREDENTIALS.username && 
        credentials.password === HOD_CREDENTIALS.password) {
      setIsAuthenticated(true);
      setShowLogin(false);
      setCredentials({ username: '', password: '' });
    } else {
      alert('Invalid HOD credentials!');
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('video/')) {
      alert('Please select a video file!');
      return;
    }

    // Validate file size (max 100MB)
    if (file.size > 100 * 1024 * 1024) {
      alert('File size must be less than 100MB!');
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    try {
      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 200);

      // Create video URL (in production, this would be uploaded to server)
      const videoUrl = URL.createObjectURL(file);
      
      // Get video duration
      const video = document.createElement('video');
      video.src = videoUrl;
      
      video.onloadedmetadata = () => {
        const duration = Math.floor(video.duration);
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        const durationStr = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        const newVideo: VideoExplanation = {
          id: Date.now().toString(),
          title: file.name.replace(/\.[^/.]+$/, ''), // Remove extension
          subject: 'Computer Science', // This could be selected by user
          topic: 'General', // This could be selected by user
          studentName: 'Student User', // This could be from login
          uploadDate: new Date().toLocaleDateString(),
          filename: file.name,
          duration: durationStr,
          views: 0
        };

        const updatedVideos = [...videos, newVideo];
        setVideos(updatedVideos);
        localStorage.setItem('studentVideos', JSON.stringify(updatedVideos));
        
        setUploadProgress(100);
        setTimeout(() => {
          setUploading(false);
          setUploadProgress(0);
        }, 1000);
      };
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed! Please try again.');
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const incrementViews = (videoId: string) => {
    const updatedVideos = videos.map(video => 
      video.id === videoId ? { ...video, views: video.views + 1 } : video
    );
    setVideos(updatedVideos);
    localStorage.setItem('studentVideos', JSON.stringify(updatedVideos));
  };

  const backgroundClass = isDark 
    ? 'bg-black' 
    : 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900';
  
  const cardClass = isDark 
    ? 'bg-gray-900/80 backdrop-blur-sm border-gray-700' 
    : 'bg-white/10 backdrop-blur-sm border-white/20';
  
  const textClass = isDark ? 'text-white' : 'text-white';
  const textSecondaryClass = isDark ? 'text-gray-300' : 'text-slate-300';

  if (showLogin) {
    return (
      <div className={`min-h-screen ${backgroundClass} flex items-center justify-center p-6`}>
        {/* Header with theme toggle */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <button
            onClick={() => navigate('/menu')}
            className={`flex items-center ${textClass} hover:opacity-70 transition-opacity`}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Menu
          </button>
          
          {toggleTheme && (
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${cardClass} border hover:opacity-80 transition-opacity`}
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>
          )}
        </div>

        <div className={`${cardClass} rounded-2xl p-8 w-full max-w-md border`}>
          <div className="text-center mb-6">
            <Lock className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h2 className={`text-2xl font-bold ${textClass} mb-2`}>HOD Authentication</h2>
            <p className={textSecondaryClass}>Enter HOD credentials to upload videos</p>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="HOD Username"
              value={credentials.username}
              onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
              className={`w-full p-3 rounded-lg ${isDark ? 'bg-gray-800 text-white placeholder-gray-400 border-gray-600' : 'bg-white/20 text-white placeholder-slate-300 border-white/30'} border focus:border-blue-500 focus:outline-none`}
            />
            
            <input
              type="password"
              placeholder="HOD Password"
              value={credentials.password}
              onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
              className={`w-full p-3 rounded-lg ${isDark ? 'bg-gray-800 text-white placeholder-gray-400 border-gray-600' : 'bg-white/20 text-white placeholder-slate-300 border-white/30'} border focus:border-blue-500 focus:outline-none`}
            />

            <div className="flex space-x-3">
              <button
                onClick={handleLogin}
                className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Login
              </button>
              <button
                onClick={() => setShowLogin(false)}
                className="flex-1 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>

          <div className={`mt-6 p-3 ${isDark ? 'bg-blue-900/30 border-blue-600/50' : 'bg-blue-500/20 border-blue-400/30'} rounded-lg border`}>
            <p className={`${isDark ? 'text-blue-200' : 'text-blue-300'} text-sm text-center`}>
              <strong>Demo Credentials:</strong><br />
              Username: hod@mca.edu<br />
              Password: hod123
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${backgroundClass} p-6`}>
      {/* Header with navigation and theme toggle */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="flex justify-between items-center">
          <button
            onClick={() => navigate('/menu')}
            className={`flex items-center ${textClass} hover:opacity-70 transition-opacity`}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Menu
          </button>
          
          {toggleTheme && (
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${cardClass} border hover:opacity-80 transition-opacity`}
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className={`text-4xl font-bold ${textClass} mb-4`}>Student Explanations</h1>
          <p className={textSecondaryClass}>Upload and share your topic explanation videos</p>
        </div>

        {/* Upload Section */}
        <div className={`${cardClass} rounded-2xl p-6 mb-8 border`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-2xl font-semibold ${textClass}`}>Upload Video</h2>
            {!isAuthenticated && (
              <button
                onClick={() => setShowLogin(true)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                <Lock className="w-4 h-4 mr-2" />
                Login to Upload
              </button>
            )}
          </div>

          {isAuthenticated ? (
            <div className="space-y-4">
              <div className={`border-2 border-dashed ${isDark ? 'border-gray-600' : 'border-white/30'} rounded-lg p-8 text-center`}>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="video/*"
                  className="hidden"
                  disabled={uploading}
                />
                
                {uploading ? (
                  <div className="space-y-4">
                    <Video className="w-16 h-16 text-blue-400 mx-auto animate-pulse" />
                    <div>
                      <p className={`${textClass} mb-2`}>Uploading video...</p>
                      <div className={`w-full ${isDark ? 'bg-gray-800' : 'bg-gray-700'} rounded-full h-2`}>
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      </div>
                      <p className={`${textSecondaryClass} text-sm mt-2`}>{uploadProgress}%</p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <Upload className={`w-16 h-16 ${isDark ? 'text-gray-500' : 'text-slate-400'} mx-auto mb-4`} />
                    <p className={`${textClass} mb-2`}>Click to upload your explanation video</p>
                    <p className={`${textSecondaryClass} text-sm mb-4`}>Supports MP4, AVI, MOV (Max 100MB)</p>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Choose Video File
                    </button>
                  </div>
                )}
              </div>

              <div className="text-center">
                <button
                  onClick={() => setIsAuthenticated(false)}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <Lock className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-300 mb-4">Please login with HOD credentials to upload videos</p>
              <button
                onClick={() => setShowLogin(true)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Login to Upload
              </button>
            </div>
          )}
        </div>

        {/* Videos List */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-6">Uploaded Videos</h2>
          
          {videos.length === 0 ? (
            <div className="text-center py-12">
              <Video className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-300">No videos uploaded yet</p>
              <p className="text-slate-400 text-sm">Be the first to share your explanation!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <div key={video.id} className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/20 transition-colors">
                  <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white/60" />
                  </div>
                  
                  <h3 className="text-white font-semibold mb-2 truncate">{video.title}</h3>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-slate-300">
                      <User className="w-4 h-4 mr-2" />
                      {video.studentName}
                    </div>
                    
                    <div className="flex items-center text-slate-300">
                      <Calendar className="w-4 h-4 mr-2" />
                      {video.uploadDate}
                    </div>
                    
                    {video.duration && (
                      <div className="flex items-center text-slate-300">
                        <Video className="w-4 h-4 mr-2" />
                        {video.duration}
                      </div>
                    )}
                    
                    <div className="flex items-center text-slate-300">
                      <Eye className="w-4 h-4 mr-2" />
                      {video.views} views
                    </div>
                  </div>
                  
                  <div className="mt-4 flex space-x-2">
                    <button
                      onClick={() => incrementViews(video.id)}
                      className="flex-1 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-semibold"
                    >
                      Watch
                    </button>
                    <button className="px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
  } catch (error) {
    console.error('StudentExplanations error:', error);
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
          <p className="text-slate-300">Please refresh the page and try again.</p>
        </div>
      </div>
    );
  }
};

export default StudentExplanations;