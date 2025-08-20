import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  Search, 
  Filter, 
  RefreshCw, 
  ExternalLink,
  MapPin,
  Building,
  DollarSign,
  Calendar,
  GraduationCap,
  Star,
  Users,
  Github
} from 'lucide-react';
import { Layout } from './Layout';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  category: string;
  description: string;
  skills: string[];
  experience: string;
  postedDate: string;
  isRemote: boolean;
  linkedinUrl?: string;
  indeedUrl?: string;
  companyUrl?: string;
}

interface ResumeBuilderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const JobsPage: React.FC<ResumeBuilderProps> = ({ isDark, toggleTheme }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    location: 'India'
  });

  // Mock Indian jobs data with salaries in rupees
  const mockJobs: Job[] = [
    {
      id: '1',
      title: 'Software Engineer',
      company: 'TCS (Tata Consultancy Services)',
      location: 'Bangalore, India',
      salary: '₹8,00,000 - ₹12,00,000 per annum',
      type: 'Full-time',
      category: 'Software Development',
      description: 'Develop and maintain software applications for global clients. Work with cutting-edge technologies and collaborate with international teams.',
      skills: ['Java', 'Spring Boot', 'React', 'SQL', 'Git'],
      experience: '2-4 years',
      postedDate: '2024-01-20',
      isRemote: false,
      linkedinUrl: 'https://www.linkedin.com/jobs/view/software-engineer-tcs',
      indeedUrl: 'https://in.indeed.com/jobs?q=software+engineer&l=bangalore',
      companyUrl: 'https://careers.tcs.com'
    },
    {
      id: '2',
      title: 'Data Scientist',
      company: 'Infosys',
      location: 'Hyderabad, India',
      salary: '₹10,00,000 - ₹15,00,000 per annum',
      type: 'Full-time',
      category: 'Data Science',
      description: 'Analyze complex data sets and develop machine learning models. Work on AI/ML projects for enterprise clients.',
      skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL', 'Statistics'],
      experience: '3-5 years',
      postedDate: '2024-01-19',
      isRemote: true,
      linkedinUrl: 'https://www.linkedin.com/jobs/view/data-scientist-infosys',
      indeedUrl: 'https://in.indeed.com/jobs?q=data+scientist&l=hyderabad',
      companyUrl: 'https://career.infosys.com'
    },
    {
      id: '3',
      title: 'Frontend Developer',
      company: 'Wipro',
      location: 'Pune, India',
      salary: '₹6,00,000 - ₹10,00,000 per annum',
      type: 'Full-time',
      category: 'Web Development',
      description: 'Build responsive web applications using modern frontend technologies. Collaborate with UX/UI designers.',
      skills: ['React', 'JavaScript', 'HTML', 'CSS', 'TypeScript'],
      experience: '1-3 years',
      postedDate: '2024-01-18',
      isRemote: false,
      linkedinUrl: 'https://www.linkedin.com/jobs/view/frontend-developer-wipro',
      indeedUrl: 'https://in.indeed.com/jobs?q=frontend+developer&l=pune',
      companyUrl: 'https://careers.wipro.com'
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      company: 'HCL Technologies',
      location: 'Noida, India',
      salary: '₹9,00,000 - ₹14,00,000 per annum',
      type: 'Full-time',
      category: 'DevOps',
      description: 'Manage cloud infrastructure and implement CI/CD pipelines. Work with AWS, Azure, and Kubernetes.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Linux'],
      experience: '2-4 years',
      postedDate: '2024-01-17',
      isRemote: true,
      linkedinUrl: 'https://www.linkedin.com/jobs/view/devops-engineer-hcl',
      indeedUrl: 'https://in.indeed.com/jobs?q=devops+engineer&l=noida',
      companyUrl: 'https://careers.hcl.com'
    },
    {
      id: '5',
      title: 'AI/ML Engineer',
      company: 'Tech Mahindra',
      location: 'Mumbai, India',
      salary: '₹12,00,000 - ₹18,00,000 per annum',
      type: 'Full-time',
      category: 'AI/ML',
      description: 'Develop AI solutions and machine learning models. Work on cutting-edge AI projects for enterprise clients.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
      experience: '3-6 years',
      postedDate: '2024-01-16',
      isRemote: false,
      linkedinUrl: 'https://www.linkedin.com/jobs/view/ai-ml-engineer-tech-mahindra',
      indeedUrl: 'https://in.indeed.com/jobs?q=ai+ml+engineer&l=mumbai',
      companyUrl: 'https://careers.techmahindra.com'
    },
    {
      id: '6',
      title: 'Cybersecurity Analyst',
      company: 'Cognizant',
      location: 'Chennai, India',
      salary: '₹7,00,000 - ₹11,00,000 per annum',
      type: 'Full-time',
      category: 'Cybersecurity',
      description: 'Protect systems and networks from cyber threats. Implement security measures and monitor for vulnerabilities.',
      skills: ['Network Security', 'SIEM', 'Penetration Testing', 'Compliance', 'Incident Response'],
      experience: '2-4 years',
      postedDate: '2024-01-15',
      isRemote: false,
      linkedinUrl: 'https://www.linkedin.com/jobs/view/cybersecurity-analyst-cognizant',
      indeedUrl: 'https://in.indeed.com/jobs?q=cybersecurity+analyst&l=chennai',
      companyUrl: 'https://careers.cognizant.com'
    },
    {
      id: '7',
      title: 'Mobile App Developer',
      company: 'L&T Infotech',
      location: 'Bangalore, India',
      salary: '₹8,00,000 - ₹13,00,000 per annum',
      type: 'Full-time',
      category: 'Mobile Development',
      description: 'Develop native and cross-platform mobile applications. Work with React Native and Flutter.',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
      experience: '2-4 years',
      postedDate: '2024-01-14',
      isRemote: true,
      linkedinUrl: 'https://www.linkedin.com/jobs/view/mobile-app-developer-lti',
      indeedUrl: 'https://in.indeed.com/jobs?q=mobile+app+developer&l=bangalore',
      companyUrl: 'https://careers.lntinfotech.com'
    },
    {
      id: '8',
      title: 'Cloud Architect',
      company: 'Mindtree',
      location: 'Hyderabad, India',
      salary: '₹15,00,000 - ₹25,00,000 per annum',
      type: 'Full-time',
      category: 'Cloud Computing',
      description: 'Design and implement cloud solutions using AWS, Azure, and Google Cloud. Lead cloud migration projects.',
      skills: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Microservices'],
      experience: '5-8 years',
      postedDate: '2024-01-13',
      isRemote: false,
      linkedinUrl: 'https://www.linkedin.com/jobs/view/cloud-architect-mindtree',
      indeedUrl: 'https://in.indeed.com/jobs?q=cloud+architect&l=hyderabad',
      companyUrl: 'https://careers.mindtree.com'
    },
    {
      id: '9',
      title: 'Full Stack Developer',
      company: 'Mphasis',
      location: 'Pune, India',
      salary: '₹9,00,000 - ₹14,00,000 per annum',
      type: 'Full-time',
      category: 'Web Development',
      description: 'Develop end-to-end web applications using modern technologies. Work on both frontend and backend.',
      skills: ['Node.js', 'React', 'MongoDB', 'Express.js', 'JavaScript'],
      experience: '3-5 years',
      postedDate: '2024-01-12',
      isRemote: true,
      linkedinUrl: 'https://www.linkedin.com/jobs/view/full-stack-developer-mphasis',
      indeedUrl: 'https://in.indeed.com/jobs?q=full+stack+developer&l=pune',
      companyUrl: 'https://careers.mphasis.com'
    },
    {
      id: '10',
      title: 'Data Engineer',
      company: 'Persistent Systems',
      location: 'Mumbai, India',
      salary: '₹10,00,000 - ₹16,00,000 per annum',
      type: 'Full-time',
      category: 'Data Science',
      description: 'Build data pipelines and ETL processes. Work with big data technologies and cloud platforms.',
      skills: ['Apache Spark', 'Hadoop', 'Python', 'SQL', 'AWS'],
      experience: '3-5 years',
      postedDate: '2024-01-11',
      isRemote: false,
      linkedinUrl: 'https://www.linkedin.com/jobs/view/data-engineer-persistent',
      indeedUrl: 'https://in.indeed.com/jobs?q=data+engineer&l=mumbai',
      companyUrl: 'https://careers.persistent.com'
    }
  ];

  useEffect(() => {
    setJobs(mockJobs);
  }, []);

  const refreshJobs = () => {
    setLoading(true);
    setTimeout(() => {
      // Simulate new jobs being added
      const newJobs = [
        {
          id: Date.now().toString(),
          title: 'Senior Software Engineer',
          company: 'Zensar Technologies',
          location: 'Bangalore, India',
          salary: '₹12,00,000 - ₹18,00,000 per annum',
          type: 'Full-time',
          category: 'Software Development',
          description: 'Lead development teams and architect scalable solutions. Mentor junior developers.',
          skills: ['Java', 'Microservices', 'Kubernetes', 'Docker', 'AWS'],
          experience: '5-7 years',
          postedDate: new Date().toISOString().split('T')[0],
          isRemote: true,
          linkedinUrl: 'https://www.linkedin.com/jobs/view/senior-software-engineer-zensar',
          indeedUrl: 'https://in.indeed.com/jobs?q=senior+software+engineer&l=bangalore',
          companyUrl: 'https://careers.zensar.com'
        }
      ];
      setJobs(prev => [...newJobs, ...prev]);
      setLoading(false);
    }, 2000);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setFilters({
      category: '',
      location: 'India'
    });
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = !filters.category || job.category === filters.category;
    const matchesLocation = !filters.location || job.location.includes(filters.location);
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const categories = ['Software Development', 'Data Science', 'AI/ML', 'DevOps', 'Cybersecurity', 'Web Development', 'Mobile Development', 'Cloud Computing'];

  const handleApplyJob = (job: Job, platform: 'linkedin' | 'indeed' | 'company') => {
    let url = '';
    let message = '';
    
    switch (platform) {
      case 'linkedin':
        url = job.linkedinUrl || `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(job.title)}&location=India`;
        message = `Redirecting to LinkedIn for ${job.title} at ${job.company}`;
        break;
      case 'indeed':
        url = job.indeedUrl || `https://in.indeed.com/jobs?q=${encodeURIComponent(job.title)}&l=India`;
        message = `Redirecting to Indeed for ${job.title} at ${job.company}`;
        break;
      case 'company':
        url = job.companyUrl || `https://www.google.com/search?q=${encodeURIComponent(job.company + ' careers')}`;
        message = `Redirecting to ${job.company} careers page`;
        break;
    }
    
    alert(message);
    window.open(url, '_blank');
  };

  return (
    <Layout 
      isDark={isDark} 
      toggleTheme={toggleTheme} 
      showNavigation={false}
      showBackButton={true}
      backButtonText="Back to Menu"
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-blue-500/20 rounded-full">
              <Briefcase className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl font-bold text-white">Computer Science Jobs</h1>
          </div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Find the latest job opportunities in computer science and technology
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            
            <select
              value={filters.category}
              onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="" className="text-gray-900">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category} className="text-gray-900">{category}</option>
              ))}
            </select>

            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg transition-all duration-200"
            >
              Clear Filters
            </button>
          </div>
        </motion.div>

        {/* Results Count and Refresh */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-between items-center mb-6"
        >
          <p className="text-white/70">
            Showing {filteredJobs.length} of {jobs.length} jobs
          </p>
          <button
            onClick={refreshJobs}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg transition-all duration-200 disabled:opacity-50"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-blue-300 border-t-transparent rounded-full animate-spin"></div>
                Refreshing...
              </>
            ) : (
              <>
                <RefreshCw className="w-4 h-4" />
                Refresh Jobs
              </>
            )}
          </button>
        </motion.div>

        {/* Jobs Grid */}
        <div className="grid gap-6">
          <AnimatePresence>
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-200"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Job Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                        <div className="flex items-center gap-4 text-white/70 text-sm mb-3">
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            <span>{job.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                            {job.isRemote && <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs">Remote</span>}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                          {job.category}
                        </span>
                        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                          {job.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-white/80 mb-4 leading-relaxed">{job.description}</p>

                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm border border-white/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Job Details */}
                    <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GraduationCap className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Apply Buttons */}
                  <div className="flex flex-col gap-3 lg:w-48">
                    <button
                      onClick={() => handleApplyJob(job, 'linkedin')}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Apply on LinkedIn
                    </button>
                    <button
                      onClick={() => handleApplyJob(job, 'indeed')}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Apply on Indeed
                    </button>
                    <button
                      onClick={() => handleApplyJob(job, 'company')}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Company Website
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-white/50 text-lg mb-4">No jobs found matching your criteria</div>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all duration-200"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default JobsPage; 