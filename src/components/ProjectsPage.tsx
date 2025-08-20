import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from './Layout';
import { 
  Code, 
  Github, 
  ExternalLink, 
  Star, 
  Users, 
  Calendar,
  Tag,
  Eye
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Web Development' | 'Mobile Development' | 'Data Science' | 'AI/ML' | 'DevOps' | 'Game Development' | 'System Programming';
  githubUrl?: string;
  liveUrl?: string;
  stars: number;
  forks: number;
  contributors: number;
  lastUpdated: string;
  image?: string;
}

const mockProjects: Project[] = [
  {
    id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      difficulty: 'Advanced',
    category: 'Web Development',
    githubUrl: 'https://github.com/example/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    stars: 245,
    forks: 89,
    contributors: 12,
    lastUpdated: '2024-01-15'
  },
  {
    id: '2',
    title: 'Machine Learning Model Trainer',
    description: 'A web application for training and deploying machine learning models with real-time data visualization.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'D3.js'],
      difficulty: 'Advanced',
    category: 'AI/ML',
    githubUrl: 'https://github.com/example/ml-trainer',
    stars: 189,
    forks: 67,
    contributors: 8,
    lastUpdated: '2024-01-10'
  },
  {
    id: '3',
    title: 'Task Management App',
    description: 'A mobile-first task management application with real-time collaboration and cloud sync.',
    technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      difficulty: 'Intermediate',
    category: 'Mobile Development',
    githubUrl: 'https://github.com/example/task-app',
    liveUrl: 'https://task-app-demo.com',
    stars: 156,
    forks: 45,
    contributors: 6,
    lastUpdated: '2024-01-08'
  },
  {
    id: '4',
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for visualizing complex datasets with multiple chart types and real-time updates.',
    technologies: ['D3.js', 'React', 'Node.js', 'PostgreSQL', 'Socket.io'],
      difficulty: 'Intermediate',
    category: 'Data Science',
    githubUrl: 'https://github.com/example/dashboard',
    liveUrl: 'https://dashboard-demo.com',
    stars: 203,
    forks: 78,
    contributors: 10,
    lastUpdated: '2024-01-12'
  },
  {
    id: '5',
    title: 'Container Orchestration Tool',
    description: 'A simplified container orchestration tool for managing Docker containers and microservices.',
    technologies: ['Go', 'Docker', 'Kubernetes', 'gRPC', 'Prometheus'],
      difficulty: 'Advanced',
    category: 'DevOps',
    githubUrl: 'https://github.com/example/container-tool',
    stars: 98,
    forks: 34,
    contributors: 5,
    lastUpdated: '2024-01-05'
  },
  {
    id: '6',
    title: '2D Game Engine',
    description: 'A lightweight 2D game engine with physics, collision detection, and sprite animation system.',
    technologies: ['C++', 'OpenGL', 'SDL2', 'Box2D', 'Lua'],
      difficulty: 'Advanced',
    category: 'Game Development',
    githubUrl: 'https://github.com/example/game-engine',
    stars: 312,
    forks: 123,
    contributors: 15,
    lastUpdated: '2024-01-18'
  },
  {
    id: '7',
    title: 'Operating System Kernel',
    description: 'A minimal operating system kernel with process management, memory allocation, and file system.',
    technologies: ['C', 'Assembly', 'QEMU', 'GCC', 'Make'],
      difficulty: 'Advanced',
    category: 'System Programming',
    githubUrl: 'https://github.com/example/os-kernel',
    stars: 445,
    forks: 167,
    contributors: 20,
    lastUpdated: '2024-01-20'
  },
  {
    id: '8',
    title: 'Social Media API',
    description: 'RESTful API for a social media platform with user profiles, posts, comments, and real-time notifications.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'JWT'],
      difficulty: 'Intermediate',
    category: 'Web Development',
    githubUrl: 'https://github.com/example/social-api',
    stars: 178,
    forks: 56,
    contributors: 9,
    lastUpdated: '2024-01-14'
  }
];

interface ProjectsPageProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ isDark, toggleTheme }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['Web Development', 'Mobile Development', 'Data Science', 'AI/ML', 'DevOps', 'Game Development', 'System Programming'];
  const difficulties = ['Beginner', 'Intermediate', 'Advanced'];

  const filteredProjects = mockProjects.filter(project => {
    const matchesCategory = !selectedCategory || project.category === selectedCategory;
    const matchesDifficulty = !selectedDifficulty || project.difficulty === selectedDifficulty;
    const matchesSearch = !searchTerm || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedDifficulty('');
    setSearchTerm('');
  };

  return (
    <Layout 
      isDark={isDark} 
      toggleTheme={toggleTheme} 
      showNavigation={false}
      showBackButton={true}
      backButtonText="Back to Menu"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Code className="w-8 h-8 text-blue-400" />
              </div>
              <h1 className="text-4xl font-bold text-white">Computer Science Projects</h1>
            </div>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Explore and build real-world projects to enhance your programming skills
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">All Difficulties</option>
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>{difficulty}</option>
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

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <p className="text-white/70">
              Showing {filteredProjects.length} of {mockProjects.length} projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid gap-6">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-200"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Project Info */}
                <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                          <div className="flex items-center gap-4 text-white/70 text-sm mb-3">
                            <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                              {project.category}
                            </span>
                            <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                              {project.difficulty}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-white/80 mb-4 leading-relaxed">{project.description}</p>

                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="text-white font-medium mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm border border-white/20"
                            >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                      {/* Project Stats */}
                      <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          <span>{project.stars}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Github className="w-4 h-4" />
                          <span>{project.forks}</span>
                    </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{project.contributors}</span>
                  </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>Updated {new Date(project.lastUpdated).toLocaleDateString()}</span>
                    </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 lg:w-48">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
                        >
                          <Github className="w-4 h-4" />
                          View on GitHub
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-200 border border-white/20">
                        <Eye className="w-4 h-4" />
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-white/50 text-lg mb-4">No projects found matching your criteria</div>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all duration-200"
              >
                Clear All Filters
              </button>
            </motion.div>
        )}
      </div>
    </div>
    </Layout>
  );
};

export default ProjectsPage; 