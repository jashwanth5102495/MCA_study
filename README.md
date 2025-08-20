# MCA Study Hub 🎓

A comprehensive study platform for MCA (Master of Computer Applications) students with interactive topic management, resume builder, and student explanations.

## 🚀 Features

### 📚 Study Materials
- **Comprehensive Syllabus**: Complete MCA curriculum coverage
- **Interactive Topics**: Detailed explanations with real-world examples
- **Subject-wise Organization**: Computer Networks, Java OOP, Software Engineering, etc.
- **Search Functionality**: Quick topic discovery

### ✏️ Topic Management
- **Live Editing**: Real-time topic content editing
- **Dual Storage**: Local storage + MongoDB backend
- **Immediate Updates**: Changes reflect instantly in UI
- **Offline Support**: Works without internet connection

### 🎯 Additional Tools
- **Resume Builder**: Professional resume creation with ATS optimization
- **Student Explanations**: Collaborative learning platform
- **Project Showcase**: Featured development projects
- **Dark/Light Theme**: Customizable UI experience

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **Lucide React** for icons

### Backend
- **Node.js** with Express
- **MongoDB** for data persistence
- **CORS** enabled for cross-origin requests
- **RESTful API** architecture

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jashwanth5102495/MCA_study.git
   cd MCA_study
   ```

2. **Install dependencies**
   ```bash
   # Frontend dependencies
   npm install
   
   # Backend dependencies
   cd server
   npm install
   cd ..
   ```

3. **Environment Setup**
   ```bash
   # Copy environment file
   cp .env.example .env
   
   # Update .env with your MongoDB connection string
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Start the application**
   ```bash
   # Start MongoDB (if local)
   mongod
   
   # Start backend server (Terminal 1)
   cd server
   npm start
   
   # Start frontend (Terminal 2)
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000/api

## 📖 Usage

### Editing Topics
1. Navigate to any subject → unit → topic
2. Click the "Edit" button
3. Modify content in the modal
4. Click "Save Changes"
5. Changes are saved locally and synced to database

### Resume Builder
1. Go to "Resume Builder" from the main menu
2. Fill in your details
3. Choose from professional templates
4. Download as PDF

### Student Explanations
1. Access "Student Explanations" section
2. Upload study materials
3. Share explanations with peers
4. Collaborate on difficult topics

## 🔧 API Endpoints

### Topics
- `GET /api/topics/:id` - Get topic by ID
- `PUT /api/topics/:id` - Update topic
- `POST /api/topics` - Create new topic
- `DELETE /api/topics/:id` - Delete topic

### System
- `GET /api/health` - Health check
- `GET /api/stats` - Database statistics
- `POST /api/sync` - Sync topics to database

## 🐛 Troubleshooting

### Common Issues

**"Failed to fetch" errors:**
- Ensure backend server is running on port 5000
- Check MongoDB connection
- Verify CORS settings

**Topics not saving:**
- Check browser console for errors
- Verify backend API is accessible
- Ensure MongoDB is running

**White screen on load:**
- Clear browser cache (Ctrl+Shift+R)
- Check for JavaScript errors in console
- Verify all dependencies are installed

### Development Tools

The app includes built-in diagnostic tools (development mode only):
- Database status checker
- Backend connection tester
- Topic save validator

## 📁 Project Structure

```
MCA_study/
├── src/
│   ├── components/          # React components
│   ├── data/               # Static data and subjects
│   ├── services/           # API services
│   ├── utils/              # Utility functions
│   └── hooks/              # Custom React hooks
├── server/
│   ├── server.js           # Express server
│   ├── models/             # MongoDB models
│   └── routes/             # API routes
├── public/                 # Static assets
└── docs/                   # Documentation
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- MCA curriculum contributors
- Open source community
- React and Node.js ecosystems

## 📞 Support

For support, please open an issue on GitHub or contact the development team.

---

**Happy Learning! 🎓✨**