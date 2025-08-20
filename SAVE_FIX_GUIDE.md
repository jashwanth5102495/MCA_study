# Save Changes Fix Guide

## 🎯 Problem
You're getting "Network error: Failed to fetch" when clicking the "Save Changes" button.

## 🚀 Complete Solution (3 Steps)

### Step 1: Start MongoDB
```bash
# Open a terminal and start MongoDB
mongod
```
**Keep this terminal open!**

### Step 2: Start Backend Server
```bash
# Open a new terminal
cd server
npm install
npm start
```

You should see:
```
✅ Connected to MongoDB
🚀 Server running on port 5000
```

### Step 3: Start Frontend
```bash
# Open another new terminal (in main project directory)
npm start
```

## 🧪 Test the Fix

1. **Open your app** in the browser
2. **Check browser console** (F12) - you should see:
   ```
   ✅ Backend is running with X topics in database
   ```
3. **Edit any topic** and click "Save Changes"
4. **You should now see**: "✅ Saved successfully to database"

## 🔍 Troubleshooting

### If you still get "Failed to fetch":

#### Check 1: Is MongoDB running?
```bash
# This should show MongoDB process
ps aux | grep mongod
```

#### Check 2: Is backend server running?
Open: `http://localhost:5000/api/health`

Should show:
```json
{
  "success": true,
  "message": "Server is running",
  "database": {
    "connected": true,
    "topicCount": 5
  }
}
```

#### Check 3: Check browser console
Press F12 and look for:
- ✅ "Backend is running with X topics in database" = Good!
- ❌ "Cannot connect to backend" = Backend not running
- ❌ "CORS error" = Server configuration issue

### Common Issues & Solutions:

#### Issue: "Port 5000 already in use"
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Then restart server
cd server && npm start
```

#### Issue: "MongoDB connection error"
```bash
# Start MongoDB
mongod

# Or if using Homebrew on Mac
brew services start mongodb-community
```

#### Issue: "Cannot GET /api/health"
- Backend server is not running
- Run: `cd server && npm start`

## 🎉 Success Indicators

When everything works:
- ✅ MongoDB shows: "waiting for connections on port 27017"
- ✅ Backend shows: "🚀 Server running on port 5000"
- ✅ Frontend shows: "Backend is running with X topics"
- ✅ Save button shows: "✅ Saved successfully to database"
- ✅ Changes persist after page refresh

## 🔧 What I Fixed

1. **Created reliable API service** (`src/services/topicApi.ts`)
2. **Updated data manager** to use the new API
3. **Added connection testing** before each save attempt
4. **Added automatic diagnostics** to detect issues
5. **Enhanced error messages** with specific solutions

## 🆘 Still Having Issues?

Run this in your browser console (F12):
```javascript
// Test backend connection
fetch('http://localhost:5000/api/health')
  .then(r => r.json())
  .then(d => console.log('✅ Backend working:', d))
  .catch(e => console.error('❌ Backend failed:', e))
```

If this fails, your backend server is not running properly.

## 📞 Quick Commands Summary

```bash
# Terminal 1: Start MongoDB
mongod

# Terminal 2: Start Backend
cd server
npm start

# Terminal 3: Start Frontend  
npm start
```

Once all three are running, the save functionality will work perfectly! 🎉