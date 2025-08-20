# Quick Database Setup Guide

## 🚀 Quick Start (3 Steps)

### 1. Start MongoDB
```bash
# Option A: Local MongoDB
mongod

# Option B: MongoDB Atlas (cloud)
# Use your connection string in .env file
```

### 2. Start Backend Server
```bash
cd server
npm install
npm start
```

### 3. Start Frontend & Initialize Database
```bash
# In another terminal
npm start

# Once the app loads, look for the "Database Status" panel in bottom-right corner
# Click "Check Status" then "Initialize DB" or "Sync All Topics"
```

## 🔧 Manual Database Initialization

If the automatic initialization doesn't work:

### Option 1: Use the UI
1. Open the app in development mode
2. Look for the "Database Status" panel (bottom-right)
3. Click "Check Status" to verify connection
4. Click "Initialize DB" for sample topics
5. Click "Sync All Topics" for full topic sync

### Option 2: Use Server Scripts
```bash
cd server

# Initialize with sample topics
npm run init-db

# Or sync all topics from files
npm run sync-topics
```

### Option 3: Manual API Calls
```bash
# Check server health
curl http://localhost:5000/api/health

# Initialize database
curl -X POST http://localhost:5000/api/topics/initialize

# Check topic count
curl http://localhost:5000/api/stats
```

## 🔍 Troubleshooting

### "Failed to fetch" Error
1. **Check if backend server is running**: `http://localhost:5000/api/health`
2. **Check MongoDB connection**: Look for "✅ Connected to MongoDB" in server logs
3. **Check CORS settings**: Frontend should be on `http://localhost:3000`

### Empty Database
1. **Use Database Initializer**: Click "Initialize DB" in the UI panel
2. **Check MongoDB**: Connect to `mongodb://localhost:27017/mca-study-hub`
3. **Verify collection**: `db.topics.count()` should return > 0

### Topics Not Saving
1. **Check browser console**: Look for API errors
2. **Check server logs**: Look for save operation logs
3. **Test with sample topic**: Try editing a simple topic first

## 📊 Verification

### Check Database Contents
```bash
# Connect to MongoDB
mongo mca-study-hub

# Count topics
db.topics.count()

# List first few topics
db.topics.find().limit(3).pretty()

# Check recent updates
db.topics.find().sort({updatedAt: -1}).limit(5)
```

### Check API Endpoints
```bash
# Health check
curl http://localhost:5000/api/health

# Get stats
curl http://localhost:5000/api/stats

# Get a specific topic
curl http://localhost:5000/api/topics/introduction-to-java
```

## ✅ Success Indicators

You'll know everything is working when:
- ✅ Database Status panel shows "Connected" with topic count > 0
- ✅ You can edit a topic and see changes persist after page refresh
- ✅ Browser console shows "✅ Successfully synced X topics to backend"
- ✅ MongoDB shows topics collection with data

## 🆘 Still Having Issues?

1. **Check Environment Variables**: Copy `.env.example` to `.env`
2. **Check Port Conflicts**: Backend on 5000, Frontend on 3000
3. **Check MongoDB**: Ensure it's running and accessible
4. **Check Logs**: Look at both browser console and server terminal
5. **Try Sample Data**: Use "Initialize DB" button for basic setup

The system is designed to work offline-first, so even if backend fails, you should still see topics and be able to edit them locally.