const { spawn, exec } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Akash e notes - Complete Setup and Start\n');

// Utility function to run commands
function runCommand(command, cwd = process.cwd()) {
  return new Promise((resolve, reject) => {
    console.log(`📝 Running: ${command} (in ${cwd})`);
    
    exec(command, { cwd }, (error, stdout, stderr) => {
      if (error) {
        console.error(`❌ Error: ${error.message}`);
        reject(error);
        return;
      }
      
      if (stderr) {
        console.log(`⚠️ Warning: ${stderr}`);
      }
      
      if (stdout) {
        console.log(stdout);
      }
      
      resolve(stdout);
    });
  });
}

// Check if MongoDB is running
async function checkMongoDB() {
  try {
    await runCommand('mongod --version');
    console.log('✅ MongoDB is installed');
    
    // Try to connect
    const mongoose = require('mongoose');
    await mongoose.connect('mongodb://localhost:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 3000
    });
    
    console.log('✅ MongoDB is running');
    await mongoose.disconnect();
    return true;
  } catch (error) {
    console.log('❌ MongoDB is not running or not installed');
    console.log('💡 Please install and start MongoDB:');
    console.log('   - Install: https://www.mongodb.com/try/download/community');
    console.log('   - Start: mongod');
    return false;
  }
}

// Setup server
async function setupServer() {
  const serverDir = path.join(__dirname, 'server');
  
  // Check if server directory exists
  if (!fs.existsSync(serverDir)) {
    console.log('❌ Server directory not found');
    return false;
  }
  
  // Install server dependencies
  try {
    await runCommand('npm install', serverDir);
    console.log('✅ Server dependencies installed');
  } catch (error) {
    console.log('❌ Failed to install server dependencies');
    return false;
  }
  
  // Initialize database
  try {
    await runCommand('node quickStart.js', serverDir);
    console.log('✅ Database initialized');
  } catch (error) {
    console.log('⚠️ Database initialization had issues (continuing anyway)');
  }
  
  return true;
}

// Start server
function startServer() {
  return new Promise((resolve) => {
    console.log('🚀 Starting backend server...');
    
    const serverProcess = spawn('node', ['server.js'], {
      cwd: path.join(__dirname, 'server'),
      stdio: 'pipe'
    });
    
    let serverStarted = false;
    
    serverProcess.stdout.on('data', (data) => {
      const output = data.toString();
      console.log(`[SERVER] ${output.trim()}`);
      
      if (output.includes('Server running on port') || output.includes('🚀')) {
        if (!serverStarted) {
          serverStarted = true;
          console.log('✅ Backend server started successfully!');
          console.log('🌐 Server URL: http://localhost:5000');
          console.log('🧪 Health check: http://localhost:5000/api/health');
          resolve(serverProcess);
        }
      }
    });
    
    serverProcess.stderr.on('data', (data) => {
      console.error(`[SERVER ERROR] ${data.toString().trim()}`);
    });
    
    serverProcess.on('close', (code) => {
      console.log(`Server process exited with code ${code}`);
    });
    
    // Timeout after 10 seconds
    setTimeout(() => {
      if (!serverStarted) {
        console.log('⚠️ Server taking longer than expected to start');
        resolve(serverProcess);
      }
    }, 10000);
  });
}

// Test the setup
async function testSetup() {
  console.log('🧪 Testing the setup...');
  
  // Wait a moment for server to be ready
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  try {
    const http = require('http');
    
    const testResult = await new Promise((resolve) => {
      const req = http.get('http://localhost:5000/api/health', (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            const parsed = JSON.parse(data);
            resolve({ success: true, data: parsed });
          } catch (e) {
            resolve({ success: false, error: 'Invalid response' });
          }
        });
      });
      
      req.on('error', (error) => {
        resolve({ success: false, error: error.message });
      });
      
      req.setTimeout(5000, () => {
        req.destroy();
        resolve({ success: false, error: 'Timeout' });
      });
    });
    
    if (testResult.success) {
      console.log('✅ Backend is responding correctly!');
      console.log(`📊 Database: ${testResult.data.database?.connected ? 'Connected' : 'Disconnected'}`);
      console.log(`📚 Topics: ${testResult.data.database?.topicCount || 0}`);
      
      console.log('\n🎉 Setup complete! Your backend is ready.');
      console.log('💡 Now start your frontend with: npm start');
      console.log('🛑 Press Ctrl+C to stop the backend server');
      
    } else {
      console.log('❌ Backend test failed:', testResult.error);
    }
    
  } catch (error) {
    console.log('❌ Test failed:', error.message);
  }
}

// Main setup process
async function main() {
  try {
    console.log('Step 1: Checking MongoDB...');
    const mongoOk = await checkMongoDB();
    if (!mongoOk) {
      process.exit(1);
    }
    
    console.log('\nStep 2: Setting up server...');
    const serverOk = await setupServer();
    if (!serverOk) {
      process.exit(1);
    }
    
    console.log('\nStep 3: Starting server...');
    const serverProcess = await startServer();
    
    console.log('\nStep 4: Testing setup...');
    await testSetup();
    
    // Handle Ctrl+C
    process.on('SIGINT', () => {
      console.log('\n🛑 Shutting down...');
      serverProcess.kill('SIGINT');
      process.exit(0);
    });
    
  } catch (error) {
    console.error('❌ Setup failed:', error);
    process.exit(1);
  }
}

main();