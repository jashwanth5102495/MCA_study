# Simple Fix for "Failed to fetch" Error

## 🎯 The Problem
Your frontend can't connect to the backend server because it's not running.

## 🚀 Quick Fix (3 Steps)

### Step 1: Check if Backend is Running
```bash
npm run check-backend
```

If you see "❌ Port 5000 is not in use", your backend is not running.

### Step 2: Start MongoDB
```bash
# Start MongoDB (leave this terminal open)
mongod
```

### Step 3: Start Backend (Automatic Setup)
```bash
# This will install dependencies, initialize database, and start server
npm run setup-backend
```

You should see:
```
✅ Backend server started successfully!
🌐 Server URL: http://localhost:5000
🧪 Health check: http://localhost:5000/api/health
```

### Step 4: Start Frontend (New Terminal)
```bash
# In a new terminal window
npm start
```

## 🧪 Test the Fix

1. Open your app
2. Edit any topic explanation
3. Save the changes
4. You should now see: **"✅ Saved successfully to database"**

## 🔧 Manual Method (If Automatic Doesn't Work)

### 1. Start MongoDB
```bash
mongod
```

### 2. Setup Server
```bash
cd server
npm install
node quickStart.js
```

### 3. Start Server
```bash
npm start
```

### 4. Test Connection
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

### 5. Start Frontend
```bash
# In main directory (not server)
npm start
```

## 🚨 Still Not Working?

### Check These:

1. **MongoDB Running?**
   ```bash
   # Should show MongoDB process
   ps aux | grep mongod
   ```

2. **Port 5000 Free?**
   ```bash
   # Should show nothing if port is free
   lsof -i :5000
   ```

3. **Server Logs**
   Look for errors in the terminal where you ran the server

4. **Browser Console**
   Press F12 and check for network errors

## ✅ Success Signs

When everything works:
- ✅ `http://localhost:5000/api/health` loads
- ✅ No "Failed to fetch" errors
- ✅ Topic saves show "Saved successfully to database"
- ✅ Changes persist after page refresh

## 🆘 Emergency Reset

If nothing works, try this complete reset:

```bash
# Kill all processes
pkill -f node
pkill -f mongod

# Start fresh
mongod &
npm run setup-backend
```

Then in a new terminal:
```bash
npm start
```

This should get your backend running and fix the "Failed to fetch" error!