import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Search, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Download,
  Upload,
  Target,
  TrendingUp,
  Star,
  Eye,
  Edit3,
  Briefcase,
  ExternalLink,
  Building,
  MapPin,
  DollarSign,
  Calendar,
  Users,
  ArrowRight,
  Plus,
  FileEdit,
  CheckSquare,
  Square
} from 'lucide-react';
import { Layout } from './Layout';

interface ATSResult {
  score: number;
  missingKeywords: string[];
  foundKeywords: string[];
  suggestions: string[];
  overallFeedback: string;
  recommendedJobRoles: string[];
}

interface ResumeData {
  content: string;
  jobTitle: string;
  company: string;
  jobDescription: string;
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

interface ATSScannerProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const ATSScanner: React.FC<ATSScannerProps> = ({ isDark, toggleTheme }) => {
  const [currentStep, setCurrentStep] = useState<'welcome' | 'upload' | 'analysis' | 'results'>('welcome');
  const [resumeData, setResumeData] = useState<ResumeData>({
    content: '',
    jobTitle: '',
    company: '',
    jobDescription: ''
  });
  const [atsResult, setAtsResult] = useState<ATSResult | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [jobListings, setJobListings] = useState<JobListing[]>([]);
  const [selectedChanges, setSelectedChanges] = useState<string[]>([]);

  // Common keywords for different job categories
  const commonKeywords = {
    'Software Development': ['Java', 'Python', 'JavaScript', 'React', 'Node.js', 'SQL', 'Git', 'Agile', 'REST API', 'Microservices'],
    'Data Science': ['Python', 'Machine Learning', 'SQL', 'Statistics', 'Data Analysis', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Tableau'],
    'AI/ML': ['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision', 'Neural Networks', 'AI', 'ML'],
    'DevOps': ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Linux', 'Terraform', 'Ansible', 'Git', 'Cloud'],
    'Cybersecurity': ['Network Security', 'SIEM', 'Penetration Testing', 'Incident Response', 'Compliance', 'Firewall', 'VPN', 'Encryption', 'Threat Hunting'],
    'Web Development': ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'PHP', 'WordPress', 'Responsive Design'],
    'Mobile Development': ['iOS', 'Android', 'React Native', 'Flutter', 'Swift', 'Kotlin', 'Mobile App', 'UI/UX', 'App Store', 'Google Play'],
    'Cloud Computing': ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Serverless', 'Microservices', 'Cloud Architecture', 'DevOps', 'Infrastructure']
  };

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
        setResumeData(prev => ({ ...prev, content }));
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
          <div className="p-4 bg-black border-2 border-white rounded-full">
            <Target className="w-10 h-10 text-white" />
              </div>
          <h1 className="text-5xl font-bold text-white">ATS Resume Scanner</h1>
            </div>
        <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
          Optimize your resume for Applicant Tracking Systems and discover the best job opportunities that match your skills
            </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-black border-2 border-white rounded-2xl p-8 hover:border-gray-400 transition-colors"
        >
          <div className="text-center space-y-4">
            <div className="p-4 bg-white rounded-full w-16 h-16 mx-auto flex items-center justify-center">
              <FileEdit className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white">Create Your Resume</h3>
            <p className="text-white/70">
              Don't have a resume yet? Build a professional one with Canva's resume builder
            </p>
            <button
              onClick={handleCanvaResumeBuilder}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors"
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
          className="bg-black border-2 border-white rounded-2xl p-8 hover:border-gray-400 transition-colors"
        >
          <div className="text-center space-y-4">
            <div className="p-4 bg-white rounded-full w-16 h-16 mx-auto flex items-center justify-center">
              <Upload className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white">Upload Existing Resume</h3>
            <p className="text-white/70">
              Already have a resume? Upload it to analyze and optimize for ATS systems
            </p>
            <button
              onClick={() => setCurrentStep('upload')}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors"
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
        <h2 className="text-3xl font-bold text-white">Upload Your Resume</h2>
        <p className="text-white/70">
          Upload your resume to analyze its ATS compatibility and get personalized job recommendations
        </p>
      </div>

      <div className="bg-black border-2 border-white rounded-2xl p-8">
        <div className="space-y-6">
          <div>
            <label className="block text-white font-medium mb-2">Upload Resume File</label>
                  <input
              type="file"
              accept=".txt,.pdf,.doc,.docx"
              onChange={handleFileUpload}
              className="w-full px-4 py-3 bg-white text-black rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
                  />
                </div>
                
          <div className="text-center">
            <p className="text-white/60 text-sm">
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
          <div className="p-4 bg-black border-2 border-white rounded-full">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white">Analyzing Your Resume</h2>
        </div>
        <p className="text-white/70 text-lg">
          Scanning for ATS compatibility and extracting key skills...
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <div className="bg-black border-2 border-white rounded-2xl p-8">
          <div className="space-y-6">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="text-center space-y-2">
              <p className="text-white font-medium">Processing Resume</p>
              <p className="text-white/60 text-sm">This may take a few moments...</p>
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
          <div className="bg-black border-2 border-white rounded-2xl p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">ATS Compatibility Score</h2>
              <div className="flex items-center justify-center gap-4">
                <span className={`text-6xl font-bold ${
                        atsResult.score >= 80 ? 'text-green-400' :
                        atsResult.score >= 60 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {atsResult.score}%
                      </span>
                <div className="text-left">
                  <p className="text-white/70">{atsResult.overallFeedback}</p>
                </div>
              </div>
                    </div>
            
            <div className="w-full bg-white/20 rounded-full h-4 mb-6">
                      <div 
                className={`h-4 rounded-full transition-all duration-500 ${
                          atsResult.score >= 80 ? 'bg-green-500' :
                          atsResult.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${atsResult.score}%` }}
                      ></div>
                    </div>
                  </div>

          {/* Improvement Suggestions */}
          <div className="bg-black border-2 border-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
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
                      <CheckSquare className="w-5 h-5 text-green-400" />
                    ) : (
                      <Square className="w-5 h-5 text-white/60" />
                    )}
                  </button>
                  <span className="text-white/80 flex-1">{suggestion}</span>
                </div>
              ))}
            </div>
                  </div>

          {/* Recommended Job Roles */}
          <div className="bg-black border-2 border-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-400" />
              Recommended Job Roles
                      </h3>
            <div className="flex flex-wrap gap-3">
              {atsResult.recommendedJobRoles.map((role, index) => (
                          <span
                            key={index}
                  className="px-4 py-2 bg-white text-black rounded-full font-medium"
                          >
                  {role}
                          </span>
                        ))}
                      </div>
                    </div>

          {/* Job Listings */}
          <div className="bg-black border-2 border-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-white" />
              Recommended Jobs
            </h3>
            <div className="space-y-4">
              {jobListings.map((job) => (
                <div key={job.id} className="border border-white/20 rounded-xl p-6 hover:border-white/40 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{job.title}</h4>
                      <p className="text-white/70">{job.company}</p>
                      </div>
                    <div className="text-right">
                      <p className="text-green-400 font-medium">{job.salary}</p>
                      <p className="text-white/60 text-sm">{job.type}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-3 text-white/60 text-sm">
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
                  
                  <p className="text-white/80 mb-4">{job.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <span key={index} className="px-2 py-1 bg-white/10 text-white/80 rounded text-sm">
                          {req}
                        </span>
                      ))}
                  </div>
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
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

export default ATSScanner; 