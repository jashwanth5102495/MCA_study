import React, { useState, useEffect } from 'react';
import { Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Article {
  id: number;
  title: string;
  summary: string;
  author: string;
  publishedDate: string;
  readTime: string;
  category: string;
  image: string;
  url: string;
  tags: string[];
}

const ArticlesPage: React.FC = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  // Sample trending articles (in real app, this would come from an API)
  const sampleArticles: Article[] = [
    {
      id: 1,
      title: 'The Future of AI: GPT-5 and Beyond',
      summary: 'Exploring the latest developments in artificial intelligence and what to expect from the next generation of language models.',
      author: 'Dr. Sarah Chen',
      publishedDate: '2024-01-15',
      readTime: '8 min read',
      category: 'Artificial Intelligence',
      image: '🤖',
      url: 'https://techcrunch.com/2024/01/15/future-of-ai-gpt5',
      tags: ['AI', 'Machine Learning', 'GPT-5', 'Future Tech']
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: 1000+ Qubits Achieved',
      summary: 'IBM announces a major milestone in quantum computing with their new 1000+ qubit processor.',
      author: 'Michael Rodriguez',
      publishedDate: '2024-01-14',
      readTime: '6 min read',
      category: 'Quantum Computing',
      image: '⚛️',
      url: 'https://wired.com/2024/01/14/quantum-computing-1000-qubits',
      tags: ['Quantum Computing', 'IBM', 'Breakthrough', 'Technology']
    },
    {
      id: 3,
      title: 'Web3 Revolution: Decentralized Finance Goes Mainstream',
      summary: 'How DeFi is transforming traditional banking and financial services worldwide.',
      author: 'Alex Thompson',
      publishedDate: '2024-01-13',
      readTime: '10 min read',
      category: 'Blockchain',
      image: '🔗',
      url: 'https://coindesk.com/2024/01/13/web3-defi-mainstream',
      tags: ['Web3', 'DeFi', 'Blockchain', 'Finance']
    },
    {
      id: 4,
      title: 'Cybersecurity in 2024: AI-Powered Threat Detection',
      summary: 'How artificial intelligence is revolutionizing cybersecurity and threat detection systems.',
      author: 'Lisa Wang',
      publishedDate: '2024-01-12',
      readTime: '7 min read',
      category: 'Cybersecurity',
      image: '🔒',
      url: 'https://securityweek.com/2024/01/12/ai-cybersecurity-2024',
      tags: ['Cybersecurity', 'AI', 'Threat Detection', 'Security']
    },
    {
      id: 5,
      title: 'The Rise of Edge Computing: Processing at the Source',
      summary: 'Understanding how edge computing is reducing latency and improving performance in IoT applications.',
      author: 'David Kumar',
      publishedDate: '2024-01-11',
      readTime: '9 min read',
      category: 'Edge Computing',
      image: '🌐',
      url: 'https://ieee.org/2024/01/11/edge-computing-iot',
      tags: ['Edge Computing', 'IoT', 'Latency', 'Performance']
    },
    {
      id: 6,
      title: 'Sustainable Tech: Green Computing Solutions',
      summary: 'Innovative approaches to reduce the environmental impact of computing and data centers.',
      author: 'Emma Green',
      publishedDate: '2024-01-10',
      readTime: '5 min read',
      category: 'Green Technology',
      image: '🌱',
      url: 'https://nature.com/2024/01/10/sustainable-tech-green-computing',
      tags: ['Sustainability', 'Green Tech', 'Environment', 'Computing']
    },
    {
      id: 7,
      title: '5G Networks: Transforming Mobile Connectivity',
      summary: 'The latest developments in 5G technology and its impact on mobile applications and IoT.',
      author: 'James Wilson',
      publishedDate: '2024-01-09',
      readTime: '6 min read',
      category: '5G Technology',
      image: '📡',
      url: 'https://techradar.com/2024/01/09/5g-networks-mobile-connectivity',
      tags: ['5G', 'Mobile', 'Connectivity', 'IoT']
    },
    {
      id: 8,
      title: 'Augmented Reality: The Next Computing Platform',
      summary: 'How AR is evolving beyond gaming to become the next major computing interface.',
      author: 'Maria Santos',
      publishedDate: '2024-01-08',
      readTime: '8 min read',
      category: 'Augmented Reality',
      image: '👁️',
      url: 'https://venturebeat.com/2024/01/08/ar-next-computing-platform',
      tags: ['AR', 'Augmented Reality', 'Computing', 'Interface']
    },
    {
      id: 9,
      title: 'Data Privacy in the Age of AI',
      summary: 'Balancing innovation with privacy protection in the era of artificial intelligence.',
      author: 'Dr. Robert Kim',
      publishedDate: '2024-01-07',
      readTime: '7 min read',
      category: 'Data Privacy',
      image: '🔐',
      url: 'https://privacy.org/2024/01/07/data-privacy-ai-age',
      tags: ['Privacy', 'AI', 'Data Protection', 'Ethics']
    },
    {
      id: 10,
      title: 'The Evolution of Programming Languages',
      summary: 'New programming languages and frameworks that are shaping the future of software development.',
      author: 'Chris Johnson',
      publishedDate: '2024-01-06',
      readTime: '9 min read',
      category: 'Programming',
      image: '💻',
      url: 'https://stackoverflow.blog/2024/01/06/evolution-programming-languages',
      tags: ['Programming', 'Languages', 'Development', 'Software']
    },
    {
      id: 11,
      title: 'Machine Learning in Healthcare: Saving Lives',
      summary: 'How AI and machine learning are revolutionizing medical diagnosis and treatment.',
      author: 'Dr. Amanda Lee',
      publishedDate: '2024-01-05',
      readTime: '10 min read',
      category: 'Healthcare Tech',
      image: '🏥',
      url: 'https://healthcareitnews.com/2024/01/05/ml-healthcare-saving-lives',
      tags: ['Healthcare', 'Machine Learning', 'AI', 'Medical']
    },
    {
      id: 12,
      title: 'The Future of Work: Remote Collaboration Tools',
      summary: 'Innovative technologies that are enabling seamless remote work and collaboration.',
      author: 'Tom Anderson',
      publishedDate: '2024-01-04',
      readTime: '6 min read',
      category: 'Remote Work',
      image: '🏠',
      url: 'https://forbes.com/2024/01/04/future-work-remote-collaboration',
      tags: ['Remote Work', 'Collaboration', 'Productivity', 'Tools']
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setArticles(sampleArticles);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredArticles = articles.filter(article => {
    if (filter === 'all') return true;
    return article.category.toLowerCase().includes(filter.toLowerCase()) ||
           article.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()));
  });

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Artificial Intelligence': 'bg-blue-500',
      'Quantum Computing': 'bg-purple-500',
      'Blockchain': 'bg-green-500',
      'Cybersecurity': 'bg-red-500',
      'Edge Computing': 'bg-yellow-500',
      'Green Technology': 'bg-emerald-500',
      '5G Technology': 'bg-indigo-500',
      'Augmented Reality': 'bg-pink-500',
      'Data Privacy': 'bg-orange-500',
      'Programming': 'bg-gray-500',
      'Healthcare Tech': 'bg-teal-500',
      'Remote Work': 'bg-cyan-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-xl">Loading Articles...</div>
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
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Trending Articles on New Technology</h1>
        
        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-blue-500' : 'bg-gray-700'} hover:bg-blue-600 transition-colors`}
            >
              All Articles
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-4 py-2 rounded-full ${filter === 'ai' ? 'bg-blue-500' : 'bg-gray-700'} hover:bg-blue-600 transition-colors`}
            >
              AI & Machine Learning
            </button>
            <button
              onClick={() => setFilter('quantum')}
              className={`px-4 py-2 rounded-full ${filter === 'quantum' ? 'bg-blue-500' : 'bg-gray-700'} hover:bg-blue-600 transition-colors`}
            >
              Quantum Computing
            </button>
            <button
              onClick={() => setFilter('blockchain')}
              className={`px-4 py-2 rounded-full ${filter === 'blockchain' ? 'bg-blue-500' : 'bg-gray-700'} hover:bg-blue-600 transition-colors`}
            >
              Blockchain & Web3
            </button>
            <button
              onClick={() => setFilter('cyber')}
              className={`px-4 py-2 rounded-full ${filter === 'cyber' ? 'bg-blue-500' : 'bg-gray-700'} hover:bg-blue-600 transition-colors`}
            >
              Cybersecurity
            </button>
            <button
              onClick={() => setFilter('emerging')}
              className={`px-4 py-2 rounded-full ${filter === 'emerging' ? 'bg-blue-500' : 'bg-gray-700'} hover:bg-blue-600 transition-colors`}
            >
              Emerging Tech
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div key={article.id} className="bg-white/10 rounded-2xl p-6 shadow-lg border border-white/10 hover:border-blue-400 transition-all duration-300">
              <div className="text-4xl mb-4">{article.image}</div>
              
              <div className="flex justify-between items-start mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
                  {article.category}
                </span>
                <span className="text-xs text-white/60">{article.readTime}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-blue-400 mb-3 line-clamp-2">{article.title}</h3>
              <p className="text-white/80 text-sm mb-4 line-clamp-3">{article.summary}</p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {article.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                  {article.tags.length > 3 && (
                    <span className="bg-gray-500/20 text-gray-300 px-2 py-1 rounded-full text-xs">
                      +{article.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs text-white/60">By {article.author}</span>
                <span className="text-xs text-white/60">{new Date(article.publishedDate).toLocaleDateString()}</span>
              </div>
              
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
              >
                Read Full Article →
              </a>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60 text-lg">No articles found matching your criteria.</p>
          </div>
        )}

        {/* Update Notice */}
        <div className="mt-8 text-center text-white/60 text-sm">
          <p>🔄 Articles are updated daily with the latest technology trends!</p>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage; 