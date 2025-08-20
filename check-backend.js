const http = require('http');

console.log('🔍 Checking backend server status...\n');

// Check if port 5000 is in use
function checkPort(port) {
  return new Promise((resolve) => {
    const server = http.createServer();
    
    server.listen(port, () => {
      server.close();
      resolve(false); // Port is available (not in use)
    });
    
    server.on('error', () => {
      resolve(true); // Port is in use
    });
  });
}

// Test HTTP request to backend
function testBackend() {
  return new Promise((resolve) => {
    const req = http.get('http://localhost:5000/api/health', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve({ success: true, data: parsed });
        } catch (e) {
          resolve({ success: false, error: 'Invalid JSON response' });
        }
      });
    });
    
    req.on('error', (error) => {
      resolve({ success: false, error: error.message });
    });
    
    req.setTimeout(3000, () => {
      req.destroy();
      resolve({ success: false, error: 'Request timeout' });
    });
  });
}

async function main() {
  // Check if port 5000 is in use
  const portInUse = await checkPort(5000);
  
  if (!portInUse) {
    console.log('❌ Port 5000 is not in use - Backend server is NOT running');
    console.log('💡 To start the backend server:');
    console.log('   1. cd server');
    console.log('   2. npm install');
    console.log('   3. npm start');
    return;
  }
  
  console.log('✅ Port 5000 is in use - Something is running on this port');
  
  // Test if it's our backend
  console.log('🧪 Testing backend API...');
  const result = await testBackend();
  
  if (result.success) {
    console.log('✅ Backend API is working!');
    console.log('📊 Response:', JSON.stringify(result.data, null, 2));
    
    if (result.data.database) {
      if (result.data.database.connected) {
        console.log(`✅ Database connected with ${result.data.database.topicCount} topics`);
      } else {
        console.log('❌ Database is not connected');
        console.log('💡 Make sure MongoDB is running: mongod');
      }
    }
  } else {
    console.log('❌ Backend API is not responding correctly');
    console.log('🔍 Error:', result.error);
    console.log('💡 The server on port 5000 might not be our backend');
  }
}

main().catch(console.error);