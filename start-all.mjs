#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Starting MCA Study Hub - Complete Setup\n');

// Function to start a process
function startProcess(command, args, cwd, name, color) {
  const process = spawn(command, args, { 
    cwd, 
    stdio: 'pipe',
    shell: true 
  });
  
  process.stdout.on('data', (data) => {
    console.log(`${color}[${name}]${'\x1b[0m'} ${data.toString().trim()}`);
  });
  
  process.stderr.on('data', (data) => {
    console.error(`${color}[${name} ERROR]${'\x1b[0m'} ${data.toString().trim()}`);
  });
  
  process.on('close', (code) => {
    console.log(`${color}[${name}]${'\x1b[0m'} Process exited with code ${code}`);
  });
  
  return process;
}

// Check if MongoDB is running
async function checkMongoDB() {
  return new Promise((resolve) => {
    const check = spawn('mongod', ['--version'], { stdio: 'pipe' });
    check.on('close', (code) => {
      resolve(code === 0);
    });
    check.on('error', () => {
      resolve(false);
    });
  });
}

async function main() {
  // Check MongoDB
  console.log('🔍 Checking MongoDB...');
  const hasMongoD = await checkMongoDB();
  
  if (!hasMongoD) {
    console.log('❌ MongoDB not found. Please install MongoDB first.');
    console.log('💡 Install from: https://www.mongodb.com/try/download/community');
    console.log('💡 Or use manual method: Start 3 separate terminals');
    console.log('   Terminal 1: mongod');
    console.log('   Terminal 2: cd server && npm start');
    console.log('   Terminal 3: npm start');
    process.exit(1);
  }
  
  console.log('✅ MongoDB found');
  
  // Start MongoDB
  console.log('🔄 Starting MongoDB...');
  const mongoProcess = startProcess('mongod', [], process.cwd(), 'MONGODB', '\x1b[32m');
  
  // Wait a bit for MongoDB to start
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  // Start Backend Server
  console.log('🔄 Starting Backend Server...');
  const serverProcess = startProcess('npm', ['start'], join(__dirname, 'server'), 'BACKEND', '\x1b[34m');
  
  // Wait a bit for backend to start
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  // Start Frontend
  console.log('🔄 Starting Frontend...');
  const frontendProcess = startProcess('npm', ['start'], __dirname, 'FRONTEND', '\x1b[36m');
  
  console.log('\n🎉 All services starting up!');
  console.log('📊 Services:');
  console.log('   🟢 MongoDB: Running on port 27017');
  console.log('   🔵 Backend: Starting on port 5000');
  console.log('   🟦 Frontend: Starting on port 3000');
  console.log('\n⏳ Please wait for all services to fully start...');
  console.log('🌐 Your app will open at: http://localhost:3000');
  console.log('🧪 Backend health: http://localhost:5000/api/health');
  console.log('\n🛑 Press Ctrl+C to stop all services');
  
  // Handle shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down all services...');
    mongoProcess.kill('SIGINT');
    serverProcess.kill('SIGINT');
    frontendProcess.kill('SIGINT');
    process.exit(0);
  });
}

main().catch(console.error);