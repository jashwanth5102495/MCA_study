import React, { useState, useEffect } from 'react';
import { Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Hackathon {
  id: number;
  name: string;
  organizer: string;
  location: string;
  startDate: string;
  endDate: string;
  registrationDeadline: string;
  prizePool: string;
  theme: string;
  description: string;
  registrationUrl: string;
  type: 'Online' | 'Offline' | 'Hybrid';
  participants: string;
  technologies: string[];
  image: string;
}

const HackathonsPage: React.FC = () => {
  const navigate = useNavigate();
  const [hackathons, setHackathons] = useState<Hackathon[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  // Sample hackathon data (in real app, this would come from an API)
  const sampleHackathons: Hackathon[] = [
    {
      id: 1,
      name: 'TechCrunch Disrupt India 2024',
      organizer: 'TechCrunch',
      location: 'Bangalore, India',
      startDate: '2024-02-15',
      endDate: '2024-02-17',
      registrationDeadline: '2024-02-10',
      prizePool: '₹50,00,000',
      theme: 'AI for Social Impact',
      description: 'Build innovative AI solutions that address real-world social challenges in India.',
      registrationUrl: 'https://techcrunch.com/disrupt-india-2024',
      type: 'Hybrid',
      participants: '500+',
      technologies: ['AI/ML', 'Python', 'React', 'Cloud Computing'],
      image: '🚀'
    },
    {
      id: 2,
      name: 'Microsoft Imagine Cup India',
      organizer: 'Microsoft',
      location: 'Mumbai, India',
      startDate: '2024-03-01',
      endDate: '2024-03-03',
      registrationDeadline: '2024-02-25',
      prizePool: '₹25,00,000',
      theme: 'Innovation for Everyone',
      description: 'Create solutions that make technology accessible to everyone, everywhere.',
      registrationUrl: 'https://imaginecup.microsoft.com/india',
      type: 'Offline',
      participants: '300+',
      technologies: ['Azure', 'AI', 'IoT', 'Mobile Development'],
      image: '🏆'
    },
    {
      id: 3,
      name: 'Google Developer Hackathon',
      organizer: 'Google',
      location: 'Delhi, India',
      startDate: '2024-03-10',
      endDate: '2024-03-12',
      registrationDeadline: '2024-03-05',
      prizePool: '₹30,00,000',
      theme: 'Building for Billions',
      description: 'Develop solutions that can scale to serve billions of users worldwide.',
      registrationUrl: 'https://developers.google.com/hackathon-india',
      type: 'Online',
      participants: '1000+',
      technologies: ['Flutter', 'Firebase', 'TensorFlow', 'Google Cloud'],
      image: '🔧'
    },
    {
      id: 4,
      name: 'Amazon AWS Build On India',
      organizer: 'Amazon Web Services',
      location: 'Hyderabad, India',
      startDate: '2024-03-20',
      endDate: '2024-03-22',
      registrationDeadline: '2024-03-15',
      prizePool: '₹20,00,000',
      theme: 'Cloud-Native Solutions',
      description: 'Build innovative cloud-native applications using AWS services.',
      registrationUrl: 'https://aws.amazon.com/build-on-india',
      type: 'Hybrid',
      participants: '400+',
      technologies: ['AWS', 'Serverless', 'Docker', 'Kubernetes'],
      image: '☁️'
    },
    {
      id: 5,
      name: 'HackerEarth Sprints',
      organizer: 'HackerEarth',
      location: 'Chennai, India',
      startDate: '2024-04-05',
      endDate: '2024-04-07',
      registrationDeadline: '2024-04-01',
      prizePool: '₹15,00,000',
      theme: 'Sustainable Technology',
      description: 'Develop solutions that promote sustainability and environmental conservation.',
      registrationUrl: 'https://hackerearth.com/sprints-india',
      type: 'Online',
      participants: '800+',
      technologies: ['Blockchain', 'IoT', 'Data Science', 'Web3'],
      image: '🌱'
    },
    {
      id: 6,
      name: 'Devpost India Challenge',
      organizer: 'Devpost',
      location: 'Pune, India',
      startDate: '2024-04-15',
      endDate: '2024-04-17',
      registrationDeadline: '2024-04-10',
      prizePool: '₹12,00,000',
      theme: 'FinTech Innovation',
      description: 'Build the next generation of financial technology solutions.',
      registrationUrl: 'https://devpost.com/india-fintech',
      type: 'Offline',
      participants: '250+',
      technologies: ['Blockchain', 'AI', 'Mobile Apps', 'Security'],
      image: '💰'
    },
    {
      id: 7,
      name: 'NASSCOM Product Conclave Hackathon',
      organizer: 'NASSCOM',
      location: 'Bangalore, India',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
      registrationDeadline: '2024-04-25',
      prizePool: '₹35,00,000',
      theme: 'Product Innovation',
      description: 'Create innovative products that solve real business problems.',
      registrationUrl: 'https://nasscom.in/hackathon-2024',
      type: 'Hybrid',
      participants: '600+',
      technologies: ['Product Design', 'UI/UX', 'Full Stack', 'Analytics'],
      image: '💡'
    },
    {
      id: 8,
      name: 'Startup India Hackathon',
      organizer: 'Government of India',
      location: 'New Delhi, India',
      startDate: '2024-05-10',
      endDate: '2024-05-12',
      registrationDeadline: '2024-05-05',
      prizePool: '₹1,00,00,000',
      theme: 'Digital India Solutions',
      description: 'Build solutions that accelerate India\'s digital transformation.',
      registrationUrl: 'https://startupindia.gov.in/hackathon',
      type: 'Offline',
      participants: '2000+',
      technologies: ['Digital Payments', 'E-Governance', 'Healthcare', 'Education'],
      image: '🇮🇳'
    },
    {
      id: 9,
      name: 'Coding Ninjas CodeFest',
      organizer: 'Coding Ninjas',
      location: 'Mumbai, India',
      startDate: '2024-05-20',
      endDate: '2024-05-22',
      registrationDeadline: '2024-05-15',
      prizePool: '₹8,00,000',
      theme: 'Algorithm Mastery',
      description: 'Compete in algorithmic challenges and build efficient solutions.',
      registrationUrl: 'https://codingninjas.com/codefest-2024',
      type: 'Online',
      participants: '1500+',
      technologies: ['Algorithms', 'Data Structures', 'Competitive Programming', 'Problem Solving'],
      image: '⚡'
    },
    {
      id: 10,
      name: 'IIT Bombay Techfest',
      organizer: 'IIT Bombay',
      location: 'Mumbai, India',
      startDate: '2024-06-01',
      endDate: '2024-06-03',
      registrationDeadline: '2024-05-25',
      prizePool: '₹18,00,000',
      theme: 'Emerging Technologies',
      description: 'Explore cutting-edge technologies and build innovative solutions.',
      registrationUrl: 'https://techfest.org/hackathon-2024',
      type: 'Offline',
      participants: '700+',
      technologies: ['Quantum Computing', 'AR/VR', 'Robotics', 'AI/ML'],
      image: '🎓'
    },
    {
      id: 11,
      name: 'Flipkart Grid Hackathon',
      organizer: 'Flipkart',
      location: 'Bangalore, India',
      startDate: '2024-06-10',
      endDate: '2024-06-12',
      registrationDeadline: '2024-06-05',
      prizePool: '₹22,00,000',
      theme: 'E-commerce Innovation',
      description: 'Build solutions that revolutionize the e-commerce experience.',
      registrationUrl: 'https://flipkart.com/grid-hackathon',
      type: 'Hybrid',
      participants: '500+',
      technologies: ['Machine Learning', 'Computer Vision', 'Mobile Apps', 'Cloud'],
      image: '🛍️'
    },
    {
      id: 12,
      name: 'Tata Consultancy Services CodeVita',
      organizer: 'TCS',
      location: 'Multiple Cities, India',
      startDate: '2024-06-20',
      endDate: '2024-06-22',
      registrationDeadline: '2024-06-15',
      prizePool: '₹40,00,000',
      theme: 'Digital Transformation',
      description: 'Create solutions that drive digital transformation across industries.',
      registrationUrl: 'https://tcs.com/codevita-2024',
      type: 'Online',
      participants: '3000+',
      technologies: ['Digital Solutions', 'Enterprise Software', 'Cloud', 'Analytics'],
      image: '🏢'
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setHackathons(sampleHackathons);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredHackathons = hackathons.filter(hackathon => {
    if (filter === 'all') return true;
    return hackathon.type.toLowerCase().includes(filter.toLowerCase()) ||
           hackathon.theme.toLowerCase().includes(filter.toLowerCase()) ||
           hackathon.technologies.some(tech => tech.toLowerCase().includes(filter.toLowerCase()));
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Online': return 'bg-green-500';
      case 'Offline': return 'bg-blue-500';
      case 'Hybrid': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const isRegistrationOpen = (deadline: string) => {
    return new Date(deadline) > new Date();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-xl">Loading Hackathons...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <Home className="w-5 h-5" />
          <span>Back to Home</span>
        </button>
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Upcoming Hackathons in India</h1>
        
        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-blue-500' : 'bg-gray-700'} hover:bg-blue-600 transition-colors`}
            >
              All Hackathons
            </button>
            <button
              onClick={() => setFilter('online')}
              className={`px-4 py-2 rounded-full ${filter === 'online' ? 'bg-blue-500' : 'bg-gray-700'} hover:bg-blue-600 transition-colors`}
            >
              Online
            </button>
            <button
              onClick={() => setFilter('offline')}
              className={`px-4 py-2 rounded-full ${filter === 'offline' ? 'bg-blue-500' : 'bg-gray-700'} hover:bg-blue-600 transition-colors`}
            >
              Offline
            </button>
            <button
              onClick={() => setFilter('hybrid')}
              className={`px-4 py-2 rounded-full ${filter === 'hybrid' ? 'bg-blue-500' : 'bg-gray-700'} hover:bg-blue-600 transition-colors`}
            >
              Hybrid
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-4 py-2 rounded-full ${filter === 'ai' ? 'bg-blue-500' : 'bg-gray-700'} hover:bg-blue-600 transition-colors`}
            >
              AI/ML
            </button>
            <button
              onClick={() => setFilter('blockchain')}
              className={`px-4 py-2 rounded-full ${filter === 'blockchain' ? 'bg-blue-500' : 'bg-gray-700'} hover:bg-blue-600 transition-colors`}
            >
              Blockchain
            </button>
          </div>
        </div>

        {/* Hackathons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHackathons.map((hackathon) => (
            <div key={hackathon.id} className="bg-white/10 rounded-2xl p-6 shadow-lg border border-white/10 hover:border-blue-400 transition-all duration-300">
              <div className="text-4xl mb-4">{hackathon.image}</div>
              
              <div className="flex justify-between items-start mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(hackathon.type)}`}>
                  {hackathon.type}
                </span>
                <span className="text-xs text-white/60">{hackathon.participants}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-blue-400 mb-2">{hackathon.name}</h3>
              <p className="text-white/80 text-sm mb-3">{hackathon.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm">
                  <span className="text-white/60">🏢</span>
                  <span className="ml-2">{hackathon.organizer}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-white/60">📍</span>
                  <span className="ml-2">{hackathon.location}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-white/60">💰</span>
                  <span className="ml-2">{hackathon.prizePool}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-white/60">🎯</span>
                  <span className="ml-2">{hackathon.theme}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-1">
                  {hackathon.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                  {hackathon.technologies.length > 3 && (
                    <span className="bg-gray-500/20 text-gray-300 px-2 py-1 rounded-full text-xs">
                      +{hackathon.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-2 mb-4 text-xs">
                <div className="flex justify-between">
                  <span className="text-white/60">Start Date:</span>
                  <span>{new Date(hackathon.startDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">End Date:</span>
                  <span>{new Date(hackathon.endDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Registration Deadline:</span>
                  <span>{new Date(hackathon.registrationDeadline).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className={`text-xs px-2 py-1 rounded-full ${isRegistrationOpen(hackathon.registrationDeadline) ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                  {isRegistrationOpen(hackathon.registrationDeadline) ? 'Registration Open' : 'Registration Closed'}
                </span>
                <a
                  href={hackathon.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isRegistrationOpen(hackathon.registrationDeadline)
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                  onClick={e => !isRegistrationOpen(hackathon.registrationDeadline) && e.preventDefault()}
                >
                  {isRegistrationOpen(hackathon.registrationDeadline) ? 'Register Now' : 'Closed'}
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredHackathons.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60 text-lg">No hackathons found matching your criteria.</p>
          </div>
        )}

        {/* Update Notice */}
        <div className="mt-8 text-center text-white/60 text-sm">
          <p>🔄 Hackathon listings are updated regularly with new opportunities!</p>
        </div>
      </div>
    </div>
  );
};

export default HackathonsPage; 