#!/usr/bin/env pwsh

Write-Host "🚀 Starting Akash E-Notes - PowerShell Version" -ForegroundColor Green
Write-Host ""

# Check if MongoDB is installed
Write-Host "🔍 Checking if MongoDB is installed..." -ForegroundColor Yellow
try {
    $null = mongod --version 2>$null
    Write-Host "✅ MongoDB found" -ForegroundColor Green
} catch {
    Write-Host "❌ MongoDB not found. Please install MongoDB first." -ForegroundColor Red
    Write-Host "💡 Download from: https://www.mongodb.com/try/download/community" -ForegroundColor Cyan
    Write-Host "💡 Or use manual method:" -ForegroundColor Cyan
    Write-Host "   1. Open 3 separate terminals" -ForegroundColor Cyan
    Write-Host "   2. Terminal 1: mongod" -ForegroundColor Cyan
    Write-Host "   3. Terminal 2: cd server; npm start" -ForegroundColor Cyan
    Write-Host "   4. Terminal 3: npm start" -ForegroundColor Cyan
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "🔄 Starting all services..." -ForegroundColor Yellow
Write-Host "💡 This will open 3 new PowerShell windows" -ForegroundColor Cyan
Write-Host ""

# Start MongoDB
Write-Host "Starting MongoDB..." -ForegroundColor Blue
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Write-Host 'MongoDB Server' -ForegroundColor Green; mongod"

# Wait for MongoDB
Write-Host "Waiting for MongoDB to start..." -ForegroundColor Yellow
Start-Sleep -Seconds 3

# Start Backend
Write-Host "Starting Backend Server..." -ForegroundColor Blue
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Write-Host 'Backend Server' -ForegroundColor Blue; cd server; npm start"

# Wait for Backend
Write-Host "Waiting for Backend to start..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

# Start Frontend
Write-Host "Starting Frontend..." -ForegroundColor Blue
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Write-Host 'Frontend' -ForegroundColor Cyan; npm start"

Write-Host ""
Write-Host "🎉 All services are starting!" -ForegroundColor Green
Write-Host "📊 Check the opened PowerShell windows:" -ForegroundColor White
Write-Host "   🟢 MongoDB: Should show 'waiting for connections'" -ForegroundColor Green
Write-Host "   🔵 Backend: Should show 'Server running on port 5000'" -ForegroundColor Blue
Write-Host "   🟦 Frontend: Should open browser at http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "🧪 Test your setup:" -ForegroundColor Yellow
Write-Host "   1. Wait for all services to fully start (30-60 seconds)" -ForegroundColor White
Write-Host "   2. Open http://localhost:3000 in your browser" -ForegroundColor White
Write-Host "   3. Look for 'Save Test' button (bottom-left)" -ForegroundColor White
Write-Host "   4. Click it - should show 'Save test successful!'" -ForegroundColor White
Write-Host ""
Write-Host "🛑 To stop all services: Close all the opened PowerShell windows" -ForegroundColor Red
Write-Host ""
Read-Host "Press Enter to close this window"