const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting MCA Study Hub Backend...\n');

// Check if MongoDB is running
async function checkMongoDB() {
  return new Promise((resolve) => {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 3000
    })
    .then(() => {
      console.log('✅ MongoDB is running');
      mongoose.disconnect();
      resolve(true);
    })
    .catch(() => {
      console.log('❌ MongoDB is not running');
      console.log('💡 Please start MongoDB with: mongod');
      resolve(false);
    });
  });
}

// Check if server directory exists and has dependencies
function checkServerSetup() {
  const serverDir = path.join(__dirname, 'server');
  const packageJson = path.join(serverDir, 'package.json');
  const nodeModules = path.join(serverDir, 'node_modules');
  
  if (!fs.existsSync(serverDir)) {
    console.log('❌ Server directory not found');
    return false;
  }
  
  if (!fs.existsSync(packageJson)) {
    console.log('❌ Server package.json not found');
    return false;
  }
  
  if (!fs.existsSync(nodeModules)) {
    console.log('⚠️ Server dependencies not installed');
    console.log('💡 Run: cd server && npm install');
    return false;
  }
  
  console.log('✅ Server setup looks good');
  return true;
}

// Initialize database
async function initializeDatabase() {
  return new Promise((resolve) => {
    console.log('🔄 Initializing database...');
    
    const quickStart = spawn('node', ['quickStart.js'], {
      cwd: path.join(__dirname, 'server'),
      stdio: 'inherit'
    });
    
    quickStart.on('close', (code) => {
      if (code === 0) {
        console.log('✅ Database initialized');
        resolve(true);
      } else {
        console.log('⚠️ Database initialization had issues (this might be okay)');
        resolve(true); // Continue anyway
      }
    });
  });
}

// Start the server
function startServer() {
  console.log('🚀 Starting backend server...');
  
  const server = spawn('node', ['server.js'], {
    cwd: path.join(__dirname, 'server'),
    stdio: 'inherit'
  });
  
  server.on('close', (code) => {
    console.log(`Server exited with code ${code}`);
  });
  
  // Handle Ctrl+C
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down server...');
    server.kill('SIGINT');
    process.exit(0);
  });
}

// Main startup sequence
async function main() {
  try {
    // Check server setup
    if (!checkServerSetup()) {
      process.exit(1);
    }
    
    // Check MongoDB
    const mongoRunning = await checkMongoDB();
    if (!mongoRunning) {
      console.log('\n🔧 Please start MongoDB first, then run this script again.');
      process.exit(1);
    }
    
    // Initialize database
    await initializeDatabase();
    
    // Start server
    console.log('\n🎉 Everything looks good! Starting server...');
    console.log('📡 Server will be available at: http://localhost:5000');
    console.log('🧪 Test connection at: http://localhost:5000/api/health');
    console.log('🛑 Press Ctrl+C to stop\n');
    
    startServer();
    
  } catch (error) {
    console.error('❌ Startup failed:', error);
    process.exit(1);
  }
}

main();