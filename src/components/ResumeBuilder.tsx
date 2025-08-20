import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Star,
  Briefcase,
  Upload,
  Target,
  AlertTriangle,
  ExternalLink,
  Building,
  Calendar,
  ArrowRight,
  FileEdit,
  CheckSquare,
  Square
} from 'lucide-react';
import { Layout } from './Layout';

interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    address: string;
    website?: string;
    photo?: string;
  };
  summary: string;
  skills: string[];
  languages: string[];
  experience: Array<{
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }>;
  education: Array<{
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }>;
  awards: Array<{
    id: string;
    title: string;
    issuer: string;
    date: string;
    description: string;
  }>;
}

interface ATSResult {
  score: number;
  missingKeywords: string[];
  foundKeywords: string[];
  suggestions: string[];
  overallFeedback: string;
  recommendedJobRoles: string[];
}

interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  postedDate: string;
  description: string;
  requirements: string[];
  source: 'indeed' | 'linkedin';
  url: string;
}

interface ResumeBuilderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const initialResumeData: ResumeData = {
  personalInfo: {
    name: '',
    title: '',
    email: '',
    phone: '',
    address: '',
    website: ''
  },
  summary: '',
  skills: [],
  languages: [],
  experience: [],
  education: [],
  awards: []
};

const ResumeBuilder: React.FC<ResumeBuilderProps> = ({ isDark, toggleTheme }) => {
  const [currentStep, setCurrentStep] = useState<'welcome' | 'upload' | 'analysis' | 'results'>('welcome');
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [newSkill, setNewSkill] = useState('');
  const [newLanguage, setNewLanguage] = useState('');
  const [atsResult, setAtsResult] = useState<ATSResult | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [jobListings, setJobListings] = useState<JobListing[]>([]);
  const [selectedChanges, setSelectedChanges] = useState<string[]>([]);

  const templates = [
    { id: 1, name: 'Professional Blue', color: 'bg-blue-600' },
    { id: 2, name: 'Modern Gray', color: 'bg-gray-600' },
    { id: 3, name: 'Creative Purple', color: 'bg-purple-600' },
    { id: 4, name: 'Elegant Dark', color: 'bg-gray-800' },
    { id: 5, name: 'Tech Green', color: 'bg-green-600' },
    { id: 6, name: 'Corporate Navy', color: 'bg-blue-900' }
  ];

  // Mock job listings (in real app, these would come from APIs)
  const mockJobListings: JobListing[] = [
    {
      id: '1',
      title: 'Software Engineer Trainee',
      company: 'TCS (Tata Consultancy Services)',
      location: 'Bangalore, Karnataka',
      salary: '₹3,36,000 - ₹4,00,000',
      type: 'Full-time',
      postedDate: '2 days ago',
      description: 'Join our graduate program to develop software solutions for global clients. Training provided.',
      requirements: ['Java', 'Python', 'Basic Programming', 'B.Tech/BE', 'Freshers welcome'],
      source: 'linkedin',
      url: 'https://www.linkedin.com/jobs/search/?keywords=TCS%20fresher&location=India'
    },
    {
      id: '2',
      title: 'Data Analyst Intern',
      company: 'Infosys',
      location: 'Hyderabad, Telangana',
      salary: '₹25,000 - ₹35,000',
      type: 'Internship',
      postedDate: '1 day ago',
      description: 'Learn data analysis and visualization techniques. Great opportunity for freshers.',
      requirements: ['Python', 'Excel', 'SQL Basics', 'B.Tech/BE', 'Freshers welcome'],
      source: 'indeed',
      url: 'https://in.indeed.com/jobs?q=Infosys%20fresher&l=India'
    },
    {
      id: '3',
      title: 'Frontend Developer (Fresher)',
      company: 'Wipro',
      location: 'Pune, Maharashtra',
      salary: '₹3,00,000 - ₹4,50,000',
      type: 'Full-time',
      postedDate: '3 days ago',
      description: 'Build user interfaces and web applications. Training and mentorship provided.',
      requirements: ['JavaScript', 'HTML', 'CSS', 'B.Tech/BE', 'Freshers welcome'],
      source: 'linkedin',
      url: 'https://www.linkedin.com/jobs/search/?keywords=Wipro%20fresher&location=India'
    },
    {
      id: '4',
      title: 'System Engineer Trainee',
      company: 'HCL Technologies',
      location: 'Noida, Uttar Pradesh',
      salary: '₹3,25,000 - ₹3,75,000',
      type: 'Full-time',
      postedDate: '4 days ago',
      description: 'Learn system administration and IT infrastructure. Comprehensive training program.',
      requirements: ['Basic IT Knowledge', 'Linux', 'Networking', 'B.Tech/BE', 'Freshers welcome'],
      source: 'indeed',
      url: 'https://in.indeed.com/jobs?q=HCL%20fresher&l=India'
    },
    {
      id: '5',
      title: 'Python Developer (Entry Level)',
      company: 'Tech Mahindra',
      location: 'Mumbai, Maharashtra',
      salary: '₹3,50,000 - ₹4,50,000',
      type: 'Full-time',
      postedDate: '1 week ago',
      description: 'Develop Python applications and learn modern development practices.',
      requirements: ['Python', 'Basic Programming', 'B.Tech/BE', 'Freshers welcome'],
      source: 'linkedin',
      url: 'https://www.linkedin.com/jobs/search/?keywords=Tech%20Mahindra%20fresher&location=India'
    },
    {
      id: '6',
      title: 'Web Developer (Fresher)',
      company: 'Cognizant',
      location: 'Chennai, Tamil Nadu',
      salary: '₹3,00,000 - ₹4,00,000',
      type: 'Full-time',
      postedDate: '5 days ago',
      description: 'Create web applications using modern technologies. Mentorship provided.',
      requirements: ['JavaScript', 'HTML', 'CSS', 'B.Tech/BE', 'Freshers welcome'],
      source: 'indeed',
      url: 'https://in.indeed.com/jobs?q=Cognizant%20fresher&l=India'
    },
    {
      id: '7',
      title: 'IT Support Engineer',
      company: 'L&T Infotech',
      location: 'Gurgaon, Haryana',
      salary: '₹2,80,000 - ₹3,50,000',
      type: 'Full-time',
      postedDate: '1 day ago',
      description: 'Provide technical support and learn enterprise IT systems.',
      requirements: ['Basic IT Knowledge', 'Communication Skills', 'B.Tech/BE', 'Freshers welcome'],
      source: 'linkedin',
      url: 'https://www.linkedin.com/jobs/search/?keywords=L%26T%20fresher&location=India'
    },
    {
      id: '8',
      title: 'Mobile App Developer (Entry Level)',
      company: 'Mindtree',
      location: 'Bangalore, Karnataka',
      salary: '₹3,50,000 - ₹4,50,000',
      type: 'Full-time',
      postedDate: '2 days ago',
      description: 'Develop mobile applications for iOS and Android platforms.',
      requirements: ['Java/Kotlin', 'Basic Programming', 'B.Tech/BE', 'Freshers welcome'],
      source: 'indeed',
      url: 'https://in.indeed.com/jobs?q=Mindtree%20fresher&l=India'
    },
    {
      id: '9',
      title: 'Network Engineer Trainee',
      company: 'Mphasis',
      location: 'Pune, Maharashtra',
      salary: '₹2,50,000 - ₹3,50,000',
      type: 'Full-time',
      postedDate: '3 days ago',
      description: 'Learn network administration and cybersecurity basics.',
      requirements: ['Basic Networking', 'IT Knowledge', 'B.Tech/BE', 'Freshers welcome'],
      source: 'linkedin',
      url: 'https://www.linkedin.com/jobs/search/?keywords=Mphasis%20fresher&location=India'
    },
    {
      id: '10',
      title: 'Business Analyst Trainee',
      company: 'Zensar Technologies',
      location: 'Mumbai, Maharashtra',
      salary: '₹3,00,000 - ₹4,00,000',
      type: 'Full-time',
      postedDate: '1 week ago',
      description: 'Learn business analysis and requirements gathering techniques.',
      requirements: ['Analytical Skills', 'Communication', 'B.Tech/BE', 'Freshers welcome'],
      source: 'indeed',
      url: 'https://in.indeed.com/jobs?q=Zensar%20fresher&l=India'
    }
  ];

  const handleCanvaResumeBuilder = () => {
    window.open('https://www.canva.com/resumes/', '_blank');
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setCurrentStep('analysis');
        analyzeResume(content);
      };
      reader.readAsText(file);
    }
  };

  const analyzeResume = (content: string) => {
    setIsScanning(true);

    // Simulate ATS scanning process
    setTimeout(() => {
      const resumeContent = content.toLowerCase();

      // Analyze content for job roles
      const detectedRoles = detectJobRoles(resumeContent);

      // Calculate ATS score based on content quality
      const score = calculateATSScore(resumeContent);

      // Generate keywords analysis
      const keywords = extractKeywords(resumeContent);
      const foundKeywords = keywords.slice(0, 8);
      const missingKeywords = ['Python', 'React', 'AWS', 'Machine Learning', 'Docker'];

      // Generate suggestions
      const suggestions = generateSuggestions(score, missingKeywords);

      // Generate feedback
      const overallFeedback = generateFeedback(score);

      // Get recommended job roles
      const recommendedJobRoles = detectedRoles.length > 0 ? detectedRoles : ['Software Engineer', 'Data Analyst', 'Web Developer'];

      setAtsResult({
        score,
        missingKeywords,
        foundKeywords,
        suggestions,
        overallFeedback,
        recommendedJobRoles
      });

      // Set job listings based on recommended roles
      setJobListings(mockJobListings);

      setIsScanning(false);
      setCurrentStep('results');
    }, 3000);
  };

  const detectJobRoles = (content: string): string[] => {
    const roles = [];

    if (content.includes('python') || content.includes('machine learning') || content.includes('data')) {
      roles.push('Data Scientist', 'Machine Learning Engineer');
    }
    if (content.includes('react') || content.includes('javascript') || content.includes('frontend')) {
      roles.push('Frontend Developer', 'Web Developer');
    }
    if (content.includes('java') || content.includes('backend') || content.includes('api')) {
      roles.push('Backend Developer', 'Software Engineer');
    }
    if (content.includes('aws') || content.includes('docker') || content.includes('devops')) {
      roles.push('DevOps Engineer', 'Cloud Engineer');
    }

    return roles.length > 0 ? roles : ['Software Engineer', 'Data Analyst', 'Web Developer'];
  };

  const calculateATSScore = (content: string): number => {
    let score = 50; // Base score

    // Add points for good practices
    if (content.includes('experience') || content.includes('worked')) score += 10;
    if (content.includes('developed') || content.includes('built')) score += 10;
    if (content.includes('managed') || content.includes('led')) score += 5;
    if (content.includes('improved') || content.includes('increased')) score += 5;
    if (content.includes('python') || content.includes('java') || content.includes('javascript')) score += 10;
    if (content.includes('react') || content.includes('node') || content.includes('aws')) score += 10;

    return Math.min(score, 95);
  };

  const extractKeywords = (text: string): string[] => {
    const keywords = new Set<string>();

    const technicalTerms = [
      'java', 'python', 'javascript', 'react', 'node.js', 'sql', 'git', 'aws', 'docker', 'kubernetes',
      'machine learning', 'ai', 'ml', 'data analysis', 'cybersecurity', 'devops', 'cloud computing',
      'html', 'css', 'php', 'angular', 'vue.js', 'swift', 'kotlin', 'ios', 'android', 'flutter',
      'tensorflow', 'pytorch', 'pandas', 'numpy', 'scikit-learn', 'tableau', 'power bi',
      'agile', 'scrum', 'ci/cd', 'microservices', 'rest api', 'graphql', 'mongodb', 'postgresql'
    ];

    technicalTerms.forEach(term => {
      if (text.includes(term)) {
        keywords.add(term);
      }
    });

    return Array.from(keywords).slice(0, 10);
  };

  const generateSuggestions = (score: number, missingKeywords: string[]): string[] => {
    const suggestions = [];

    if (score < 70) {
      suggestions.push('Add more specific technical skills and tools');
      suggestions.push('Include quantifiable achievements with numbers and metrics');
      suggestions.push('Use bullet points to highlight key accomplishments');
    }

    if (missingKeywords.length > 0) {
      suggestions.push(`Consider adding these skills: ${missingKeywords.slice(0, 3).join(', ')}`);
    }

    if (score < 80) {
      suggestions.push('Ensure your resume format is clean and ATS-friendly');
      suggestions.push('Avoid using images, tables, or complex formatting');
    }

    return suggestions;
  };

  const generateFeedback = (score: number): string => {
    if (score >= 85) {
      return 'Excellent! Your resume is well-optimized for ATS systems and shows strong technical skills.';
    } else if (score >= 70) {
      return 'Good! Your resume has solid content, but there\'s room for improvement in keyword optimization.';
    } else if (score >= 50) {
      return 'Fair. Your resume needs more specific keywords and quantifiable achievements to stand out.';
    } else {
      return 'Needs significant improvement. Focus on adding relevant technical skills and specific achievements.';
    }
  };

  const handleSuggestionToggle = (suggestion: string) => {
    setSelectedChanges(prev =>
      prev.includes(suggestion)
        ? prev.filter(s => s !== suggestion)
        : [...prev, suggestion]
    );
  };

  const renderWelcomeStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-8"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className={`p-4 ${isDark ? 'bg-black border-2 border-white' : 'bg-white border-2 border-gray-300'} rounded-full`}>
            <Briefcase className={`w-10 h-10 ${isDark ? 'text-white' : 'text-gray-800'}`} />
          </div>
          <h1 className={`text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Resume Builder</h1>
        </div>
        <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
          Create professional resumes and optimize them for Applicant Tracking Systems to discover the best job opportunities
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className={`${isDark ? 'bg-black border-2 border-white hover:border-gray-400' : 'bg-white border-2 border-gray-200 hover:border-gray-400 shadow-lg'} rounded-2xl p-8 transition-colors`}
        >
          <div className="text-center space-y-4">
            <div className={`p-4 ${isDark ? 'bg-white' : 'bg-blue-100'} rounded-full w-16 h-16 mx-auto flex items-center justify-center`}>
              <FileEdit className={`w-8 h-8 ${isDark ? 'text-black' : 'text-blue-600'}`} />
            </div>
            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Create Your Resume</h3>
            <p className={isDark ? 'text-white/70' : 'text-gray-600'}>
              Don't have a resume yet? Build a professional one with Canva's resume builder
            </p>
            <button
              onClick={handleCanvaResumeBuilder}
              className={`w-full flex items-center justify-center gap-2 px-6 py-4 font-semibold rounded-xl transition-colors ${isDark
                ? 'bg-white text-black hover:bg-gray-200'
                : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
            >
              <Briefcase className="w-5 h-5" />
              Build Resume with Canva
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className={`${isDark ? 'bg-black border-2 border-white hover:border-gray-400' : 'bg-white border-2 border-gray-200 hover:border-gray-400 shadow-lg'} rounded-2xl p-8 transition-colors`}
        >
          <div className="text-center space-y-4">
            <div className={`p-4 ${isDark ? 'bg-white' : 'bg-green-100'} rounded-full w-16 h-16 mx-auto flex items-center justify-center`}>
              <Upload className={`w-8 h-8 ${isDark ? 'text-black' : 'text-green-600'}`} />
            </div>
            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Upload Existing Resume</h3>
            <p className={isDark ? 'text-white/70' : 'text-gray-600'}>
              Already have a resume? Upload it to analyze and optimize for ATS systems
            </p>
            <button
              onClick={() => setCurrentStep('upload')}
              className={`w-full flex items-center justify-center gap-2 px-6 py-4 font-semibold rounded-xl transition-colors ${isDark
                ? 'bg-white text-black hover:bg-gray-200'
                : 'bg-green-600 text-white hover:bg-green-700'
                }`}
            >
              <Upload className="w-5 h-5" />
              Upload Resume
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  const renderUploadStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto space-y-8"
    >
      <div className="text-center space-y-4">
        <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Upload Your Resume</h2>
        <p className={isDark ? 'text-white/70' : 'text-gray-600'}>
          Upload your resume to analyze its ATS compatibility and get personalized job recommendations
        </p>
      </div>

      <div className={`${isDark ? 'bg-black border-2 border-white' : 'bg-white border-2 border-gray-200 shadow-lg'} rounded-2xl p-8`}>
        <div className="space-y-6">
          <div>
            <label className={`block font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Upload Resume File</label>
            <input
              type="file"
              accept=".txt,.pdf,.doc,.docx"
              onChange={handleFileUpload}
              className={`w-full px-4 py-3 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold transition-colors ${isDark
                ? 'bg-white text-black file:bg-black file:text-white hover:file:bg-gray-800'
                : 'bg-gray-50 text-gray-900 file:bg-blue-600 file:text-white hover:file:bg-blue-700 border border-gray-300'
                }`}
            />
          </div>

          <div className="text-center">
            <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
              Supported formats: PDF, DOC, DOCX, TXT
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderAnalysisStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-8"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className={`p-4 ${isDark ? 'bg-black border-2 border-white' : 'bg-white border-2 border-gray-300'} rounded-full`}>
            <Target className={`w-8 h-8 ${isDark ? 'text-white' : 'text-gray-800'}`} />
          </div>
          <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Analyzing Your Resume</h2>
        </div>
        <p className={`text-lg ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
          Scanning for ATS compatibility and extracting key skills...
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <div className={`${isDark ? 'bg-black border-2 border-white' : 'bg-white border-2 border-gray-200 shadow-lg'} rounded-2xl p-8`}>
          <div className="space-y-6">
            <div className="flex items-center justify-center">
              <div className={`w-12 h-12 border-4 ${isDark ? 'border-white' : 'border-gray-600'} border-t-transparent rounded-full animate-spin`}></div>
            </div>
            <div className="text-center space-y-2">
              <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Processing Resume</p>
              <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>This may take a few moments...</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderResultsStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {atsResult && (
        <>
          {/* ATS Score Section */}
          <div className={`${isDark ? 'bg-black border-2 border-white' : 'bg-white border-2 border-gray-200 shadow-lg'} rounded-2xl p-8`}>
            <div className="text-center mb-6">
              <h2 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>ATS Compatibility Score</h2>
              <div className="flex items-center justify-center gap-4">
                <span className={`text-6xl font-bold ${atsResult.score >= 80 ? 'text-green-500' :
                  atsResult.score >= 60 ? 'text-yellow-500' : 'text-red-500'
                  }`}>
                  {atsResult.score}%
                </span>
                <div className="text-left">
                  <p className={isDark ? 'text-white/70' : 'text-gray-600'}>{atsResult.overallFeedback}</p>
                </div>
              </div>
            </div>

            <div className={`w-full rounded-full h-4 mb-6 ${isDark ? 'bg-white/20' : 'bg-gray-200'}`}>
              <div
                className={`h-4 rounded-full transition-all duration-500 ${atsResult.score >= 80 ? 'bg-green-500' :
                  atsResult.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                style={{ width: `${atsResult.score}%` }}
              ></div>
            </div>
          </div>

          {/* Improvement Suggestions */}
          <div className={`${isDark ? 'bg-black border-2 border-white' : 'bg-white border-2 border-gray-200 shadow-lg'} rounded-2xl p-8`}>
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <AlertTriangle className="w-6 h-6 text-yellow-500" />
              Suggested Improvements
            </h3>
            <div className="space-y-4">
              {atsResult.suggestions.map((suggestion, index) => (
                <div key={index} className="flex items-start gap-3">
                  <button
                    onClick={() => handleSuggestionToggle(suggestion)}
                    className="mt-1"
                  >
                    {selectedChanges.includes(suggestion) ? (
                      <CheckSquare className="w-5 h-5 text-green-500" />
                    ) : (
                      <Square className={`w-5 h-5 ${isDark ? 'text-white/60' : 'text-gray-400'}`} />
                    )}
                  </button>
                  <span className={`flex-1 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>{suggestion}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Job Roles */}
          <div className={`${isDark ? 'bg-black border-2 border-white' : 'bg-white border-2 border-gray-200 shadow-lg'} rounded-2xl p-8`}>
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <Star className="w-6 h-6 text-yellow-500" />
              Recommended Job Roles
            </h3>
            <div className="flex flex-wrap gap-3">
              {atsResult.recommendedJobRoles.map((role, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full font-medium ${isDark
                    ? 'bg-white text-black'
                    : 'bg-blue-100 text-blue-800'
                    }`}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Job Listings */}
          <div className={`${isDark ? 'bg-black border-2 border-white' : 'bg-white border-2 border-gray-200 shadow-lg'} rounded-2xl p-8`}>
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <Briefcase className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-800'}`} />
              Recommended Jobs
            </h3>
            <div className="space-y-4">
              {jobListings.map((job) => (
                <div key={job.id} className={`border rounded-xl p-6 transition-colors ${isDark
                  ? 'border-white/20 hover:border-white/40'
                  : 'border-gray-200 hover:border-gray-300'
                  }`}>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{job.title}</h4>
                      <p className={isDark ? 'text-white/70' : 'text-gray-600'}>{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-500 font-medium">{job.salary}</p>
                      <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>{job.type}</p>
                    </div>
                  </div>

                  <div className={`flex items-center gap-4 mb-3 text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {job.postedDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      {job.source}
                    </div>
                  </div>

                  <p className={`mb-4 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>{job.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <span key={index} className={`px-2 py-1 rounded text-sm ${isDark
                          ? 'bg-white/10 text-white/80'
                          : 'bg-gray-100 text-gray-700'
                          }`}>
                          {req}
                        </span>
                      ))}
                    </div>
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isDark
                        ? 'bg-white text-black hover:bg-gray-200'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                    >
                      Apply
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </motion.div>
  );

  return (
    <Layout
      isDark={isDark}
      toggleTheme={toggleTheme}
      showNavigation={false}
      showBackButton={true}
      backButtonText="Back to Menu"
    >
      <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 py-8">
          {currentStep === 'welcome' && renderWelcomeStep()}
          {currentStep === 'upload' && renderUploadStep()}
          {currentStep === 'analysis' && renderAnalysisStep()}
          {currentStep === 'results' && renderResultsStep()}
        </div>
      </div>
    </Layout>
  );
};

export default ResumeBuilder;