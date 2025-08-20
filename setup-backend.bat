@echo off
echo Setting up MCA Study Hub Backend...

echo.
echo 1. Installing backend dependencies...
cd server
call npm install

echo.
echo 2. Backend setup complete!
echo.
echo To start the backend:
echo   cd server
echo   npm run dev
echo.
echo Make sure MongoDB is running first!
echo Download MongoDB from: https://www.mongodb.com/try/download/community
echo.
pause