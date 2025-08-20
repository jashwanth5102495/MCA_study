# Fix Steps for Database Save Issue

## 🎯 Problem
You're getting "Saved locally - Will sync when connection is available" instead of saving to the database.

## 🔧 Solution Steps

### Step 1: Start MongoDB
```bash
# Make sure MongoDB is running
mongod
```

### Step 2: Initialize Database
```bash
# Go to server directory
cd server

# Install dependencies if not done
npm install

# Run quick start to set up database
npm run quick-start
```

### Step 3: Start Backend Server
```bash
# In server directory
npm start
```
You should see:
```
✅ Connected to MongoDB
🚀 Server running on port 5000
```

### Step 4: Test Backend Connection
Open browser and go to: `http://localhost:5000/api/health`

You should see:
```json
{
  "success": true,
  "message": "Server is running",
  "database": {
    "connected": true,
    "status": "connected",
    "topicCount": 5
  }
}
```

### Step 5: Start Frontend
```bash
# In main project directory
npm start
```

### Step 6: Test Topic Save
1. Open the app
2. Navigate to any topic
3. Click edit and modify the explanation
4. Save the changes
5. You should now see: "✅ Saved successfully to database"

## 🔍 Troubleshooting

### If you still get "Saved locally" message:

1. **Check server logs** - Look for error messages in the terminal where you ran `npm start`

2. **Check browser console** - Press F12 and look for network errors

3. **Verify API URL** - The frontend should be calling `http://localhost:5000/api/topics/[topic-id]`

4. **Test API directly**:
   ```bash
   # Test if you can reach the API
   curl http://localhost:5000/api/health
   
   # Test topic retrieval
   curl http://localhost:5000/api/topics/introduction-to-java
   ```

### Common Issues:

1. **Port 5000 already in use**: 
   - Kill the process using port 5000
   - Or change PORT in server/.env file

2. **MongoDB not running**:
   - Start MongoDB with `mongod`
   - Or use MongoDB Atlas cloud service

3. **CORS errors**:
   - Make sure frontend is on `http://localhost:3000`
   - Backend should allow this origin

## 🎉 Success Indicators

When everything is working:
- ✅ Backend shows "Connected to MongoDB"
- ✅ `/api/health` returns database info
- ✅ Topic edits show "Saved successfully to database"
- ✅ Changes persist after page refresh
- ✅ No errors in browser console

## 📞 Quick Test

Run this in your browser console to test the API:
```javascript
fetch('http://localhost:5000/api/health')
  .then(r => r.json())
  .then(d => console.log('Backend status:', d))
  .catch(e => console.error('Backend error:', e))
```

If this works, your backend is ready and topic saves should work!