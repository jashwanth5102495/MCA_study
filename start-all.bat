@echo off
echo 🚀 Starting Akash e notes - Windows Version
echo.

echo 🔍 Checking if MongoDB is installed...
mongod --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ MongoDB not found. Please install MongoDB first.
    echo 💡 Download from: https://www.mongodb.com/try/download/community
    echo 💡 Or use manual method instead:
    echo    1. Open 3 separate command prompts
    echo    2. Terminal 1: mongod
    echo    3. Terminal 2: cd server ^&^& npm start
    echo    4. Terminal 3: npm start
    pause
    exit /b 1
)

echo ✅ MongoDB found
echo.

echo 🔄 Starting all services...
echo 💡 This will open 3 new windows:
echo    - MongoDB (port 27017)
echo    - Backend Server (port 5000) 
echo    - Frontend (port 3000)
echo.

echo Starting MongoDB...
start "MongoDB" cmd /k "mongod"

echo Waiting for MongoDB to start...
timeout /t 3 /nobreak >nul

echo Starting Backend Server...
start "Backend Server" cmd /k "cd server && npm start"

echo Waiting for Backend to start...
timeout /t 5 /nobreak >nul

echo Starting Frontend...
start "Frontend" cmd /k "npm start"

echo.
echo 🎉 All services are starting!
echo 📊 Check the opened windows:
echo    🟢 MongoDB: Should show "waiting for connections"
echo    🔵 Backend: Should show "Server running on port 5000"
echo    🟦 Frontend: Should open browser at http://localhost:3000
echo.
echo 🧪 Test your setup:
echo    1. Wait for all services to fully start (30-60 seconds)
echo    2. Open http://localhost:3000 in your browser
echo    3. Look for "Save Test" button (bottom-left)
echo    4. Click it - should show "Save test successful!"
echo.
echo 🛑 To stop all services: Close all the opened windows
echo.
pause