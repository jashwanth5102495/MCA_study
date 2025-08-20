# Database Setup Guide

This guide explains how to set up the MongoDB database for persistent topic storage.

## Prerequisites

1. **MongoDB**: Install MongoDB locally or use MongoDB Atlas
2. **Node.js**: Version 16 or higher
3. **Environment Variables**: Copy `.env.example` to `.env` and configure

## Quick Setup

### 1. Install Dependencies
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ..
npm install
```

### 2. Configure Environment
```bash
# Copy environment template
cp .env.example .env

# Edit .env file with your MongoDB connection string
# Default: MONGODB_URI=mongodb://localhost:27017/mca-study-hub
```

### 3. Start MongoDB
```bash
# If using local MongoDB
mongod

# Or use MongoDB Atlas cloud service
```

### 4. Start the Application
```bash
# Start the backend server
cd server
npm start

# In another terminal, start the frontend
cd ..
npm start
```

## Database Features

### Automatic Initialization
- The app automatically syncs all topics to MongoDB on first run
- Topics are stored with full content, metadata, and update tracking
- No manual database setup required

### Persistent Storage
- All topic edits are saved to MongoDB
- Changes persist across browser refreshes and app restarts
- Offline support with automatic sync when back online

### Data Structure
```javascript
{
  topicId: "unique-topic-id",
  name: "Topic Name",
  semester: 1,
  subject: "Subject Name", 
  unit: "Unit I",
  content: {
    introduction: "...",
    definition: "...",
    realWorldExample: "...",
    realWorldUse: "...",
    importance: "...",
    detailedExplanation: "...",
    images: [...],
    youtubeLinks: [...],
    externalLinks: [...]
  },
  updatedBy: "user",
  updatedAt: "2024-01-01T00:00:00.000Z",
  createdAt: "2024-01-01T00:00:00.000Z"
}
```

## API Endpoints

### Topics
- `GET /api/topics/:topicId` - Get specific topic
- `PUT /api/topics/:topicId` - Update topic content
- `POST /api/topics/sync` - Bulk sync topics
- `GET /api/topics/search?q=query` - Search topics

### Database Management
- `GET /api/stats` - Get database statistics
- `GET /api/health` - Health check

## Troubleshooting

### Database Connection Issues
1. Ensure MongoDB is running
2. Check connection string in `.env`
3. Verify network connectivity for Atlas

### Topics Not Persisting
1. Check browser console for API errors
2. Verify server is running on correct port
3. Check MongoDB logs for write errors

### Sync Issues
1. Check network connectivity
2. Look for pending changes in localStorage
3. Restart the application to trigger re-sync

## Development

### Reset Database
```bash
# Connect to MongoDB
mongo mca-study-hub

# Drop the topics collection
db.topics.drop()

# Restart the app to re-initialize
```

### View Database Contents
```bash
# Connect to MongoDB
mongo mca-study-hub

# List all topics
db.topics.find().pretty()

# Count topics
db.topics.count()

# Find recent updates
db.topics.find().sort({updatedAt: -1}).limit(5)
```

## Production Deployment

### Environment Variables
```bash
NODE_ENV=production
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/mca-study-hub
FRONTEND_URL=https://your-domain.com
PORT=5000
```

### Security Considerations
- Use MongoDB Atlas with authentication
- Enable CORS only for your domain
- Use HTTPS in production
- Implement rate limiting (already included)
- Regular database backups

## Monitoring

The application includes:
- Health check endpoint (`/api/health`)
- Database statistics (`/api/stats`)
- Error logging and handling
- Automatic retry for failed operations
- Offline support with sync queue