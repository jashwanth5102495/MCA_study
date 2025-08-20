# Akash E-Notes Backend

## Quick Setup

1. **Install MongoDB**:
   ```bash
   # Windows (using chocolatey)
   choco install mongodb
   
   # Or download from: https://www.mongodb.com/try/download/community
   ```

2. **Start MongoDB**:
   ```bash
   mongod
   ```

3. **Install Dependencies**:
   ```bash
   cd server
   npm install
   ```

4. **Start Server**:
   ```bash
   npm run dev
   ```

## API Endpoints

- `GET /api/topics/:topicId` - Get topic by ID
- `PUT /api/topics/:topicId` - Update topic
- `GET /api/topics/search?q=query` - Search topics
- `GET /api/subjects/:subjectId/topics` - Get subject topics
- `POST /api/topics/sync` - Sync all topics to database

## Environment Variables

Create `.env` file:
```
MONGODB_URI=mongodb://localhost:27017/mca-study-hub
PORT=5000
FRONTEND_URL=http://localhost:3000
```

## Testing

Server will be available at: http://localhost:5000
Health check: http://localhost:5000/api/health