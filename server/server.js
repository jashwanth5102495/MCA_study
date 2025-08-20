const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// More permissive CORS for development
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  optionsSuccessStatus: 200
}));

// Add request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path} - Origin: ${req.get('Origin')}`);
  next();
});

app.use(express.json({ limit: '10mb' }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Handle preflight requests
app.options('*', cors());

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mca-study-hub';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Topic Schema
const topicSchema = new mongoose.Schema({
  topicId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  semester: { type: Number, required: true },
  subject: { type: String, required: true },
  unit: { type: String, required: true },
  content: {
    introduction: { type: String, required: true },
    definition: { type: String, required: true },
    realWorldExample: { type: String, required: true },
    realWorldUse: { type: String, required: true },
    importance: { type: String, required: true },
    detailedExplanation: { type: String, required: true },
    sampleProgram: { type: String },
    diagram: { type: String },
    images: [{
      data: String,
      description: String
    }],
    youtubeLinks: [String],
    externalLinks: [{
      title: String,
      url: String
    }]
  },
  updatedBy: { type: String, default: 'system' },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
});

const Topic = mongoose.model('Topic', topicSchema);

// Video Schema
const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  topic: { type: String, required: true },
  studentName: { type: String, required: true },
  filename: { type: String, required: true },
  originalName: { type: String, required: true },
  size: { type: Number, required: true },
  mimetype: { type: String, required: true },
  duration: { type: String },
  views: { type: Number, default: 0 },
  uploadDate: { type: Date, default: Date.now },
  approved: { type: Boolean, default: false },
  approvedBy: { type: String }
});

const Video = mongoose.model('Video', videoSchema);

// Multer configuration for video uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/videos/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB limit
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      cb(new Error('Only video files are allowed!'), false);
    }
  }
});

// Create uploads directory if it doesn't exist
if (!fs.existsSync('uploads/videos/')) {
  fs.mkdirSync('uploads/videos/', { recursive: true });
}

// Routes

// Get topic by ID with detailed logging
app.get('/api/topics/:topicId', async (req, res) => {
  try {
    const topicId = req.params.topicId;
    console.log(`🔍 Fetching topic: ${topicId}`);
    
    const topic = await Topic.findOne({ topicId: topicId });
    
    if (!topic) {
      console.log(`❌ Topic not found: ${topicId}`);
      return res.status(404).json({ 
        success: false, 
        message: 'Topic not found',
        topicId: topicId
      });
    }

    console.log(`✅ Topic found: ${topic.name} (${topic.subject})`);
    
    res.json({ 
      success: true, 
      data: {
        topicId: topic.topicId,
        name: topic.name,
        semester: topic.semester,
        subject: topic.subject,
        unit: topic.unit,
        content: topic.content,
        updatedBy: topic.updatedBy,
        updatedAt: topic.updatedAt,
        createdAt: topic.createdAt
      },
      meta: {
        contentLength: Object.values(topic.content)
          .filter(val => typeof val === 'string')
          .reduce((sum, val) => sum + val.length, 0),
        hasImages: topic.content.images?.length > 0,
        hasLinks: (topic.content.youtubeLinks?.length || 0) + (topic.content.externalLinks?.length || 0) > 0,
        lastModified: topic.updatedAt
      }
    });
  } catch (error) {
    console.error('Error fetching topic:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error',
      error: error.message,
      topicId: req.params.topicId
    });
  }
});

// Create new topic route
app.post('/api/topics', async (req, res) => {
  try {
    const { topicId, name, semester, subject, unit, content, updatedBy } = req.body;
    
    console.log(`📝 Creating new topic: ${topicId}`);
    
    // Validate required fields
    if (!topicId || !name || !semester || !subject || !content) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: topicId, name, semester, subject, content'
      });
    }

    // Check if topic already exists
    const existingTopic = await Topic.findOne({ topicId });
    if (existingTopic) {
      return res.status(409).json({
        success: false,
        message: 'Topic already exists',
        topicId
      });
    }

    // Create new topic
    const newTopic = new Topic({
      topicId,
      name,
      semester: parseInt(semester),
      subject,
      unit: unit || 'Unit I',
      content: {
        introduction: content.introduction || '',
        definition: content.definition || '',
        realWorldExample: content.realWorldExample || '',
        realWorldUse: content.realWorldUse || '',
        importance: content.importance || '',
        detailedExplanation: content.detailedExplanation || '',
        sampleProgram: content.sampleProgram || '',
        diagram: content.diagram || '',
        images: content.images || [],
        youtubeLinks: content.youtubeLinks || [],
        externalLinks: content.externalLinks || []
      },
      updatedBy: updatedBy || 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    });

    await newTopic.save();
    console.log(`✅ Created new topic: ${name}`);

    res.status(201).json({
      success: true,
      data: newTopic,
      message: `Topic "${name}" created successfully`
    });
  } catch (error) {
    console.error('Error creating topic:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during topic creation',
      error: error.message
    });
  }
});

// Delete topic route
app.delete('/api/topics/:topicId', async (req, res) => {
  try {
    const topicId = req.params.topicId;
    const { updatedBy } = req.body;
    
    console.log(`🗑️ Attempting to delete topic: ${topicId}`);
    
    const deletedTopic = await Topic.findOneAndDelete({ topicId });
    
    if (!deletedTopic) {
      return res.status(404).json({
        success: false,
        message: 'Topic not found',
        topicId
      });
    }

    console.log(`✅ Deleted topic: ${deletedTopic.name}`);
    
    res.json({
      success: true,
      message: `Topic "${deletedTopic.name}" deleted successfully`,
      data: {
        topicId: deletedTopic.topicId,
        name: deletedTopic.name,
        deletedAt: new Date(),
        deletedBy: updatedBy || 'user'
      }
    });
  } catch (error) {
    console.error('Error deleting topic:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during topic deletion',
      error: error.message
    });
  }
});

// Enhanced topic update route with comprehensive validation and logging
app.put('/api/topics/:topicId', async (req, res) => {
  try {
    const { content, updatedBy, name, semester, subject, unit } = req.body;
    const topicId = req.params.topicId;
    
    console.log(`📝 Attempting to update topic: ${topicId}`);
    console.log(`📊 Update data:`, { 
      hasContent: !!content, 
      updatedBy: updatedBy || 'anonymous',
      name: name || 'not provided',
      semester: semester || 'not provided',
      subject: subject || 'not provided',
      unit: unit || 'not provided'
    });

    // Validate required content fields
    if (!content) {
      return res.status(400).json({
        success: false,
        message: 'Content is required',
        topicId
      });
    }

    // Validate content structure
    const requiredFields = ['introduction', 'definition', 'realWorldExample', 'realWorldUse', 'importance', 'detailedExplanation'];
    const missingFields = requiredFields.filter(field => !content[field] || content[field].trim() === '');
    
    if (missingFields.length > 0) {
      console.warn(`⚠️ Missing required fields for topic ${topicId}:`, missingFields);
    }

    // Prepare update data
    const updateData = {
      content: {
        introduction: content.introduction || '',
        definition: content.definition || '',
        realWorldExample: content.realWorldExample || '',
        realWorldUse: content.realWorldUse || '',
        importance: content.importance || '',
        detailedExplanation: content.detailedExplanation || '',
        sampleProgram: content.sampleProgram || '',
        diagram: content.diagram || '',
        images: content.images || [],
        youtubeLinks: content.youtubeLinks || [],
        externalLinks: content.externalLinks || []
      },
      updatedBy: updatedBy || 'user',
      updatedAt: new Date()
    };

    // Add optional fields if provided
    if (name) updateData.name = name;
    if (semester) updateData.semester = parseInt(semester);
    if (subject) updateData.subject = subject;
    if (unit) updateData.unit = unit;

    // Try to update existing topic
    let updatedTopic = await Topic.findOneAndUpdate(
      { topicId: topicId },
      updateData,
      { new: true, upsert: false }
    );

    // If topic doesn't exist, create it with provided data
    if (!updatedTopic) {
      console.log(`⚠️ Topic ${topicId} not found, attempting to create...`);
      
      try {
        const newTopicData = {
          topicId: topicId,
          name: name || content.introduction?.substring(0, 50) + '...' || 'New Topic',
          semester: parseInt(semester) || 1,
          subject: subject || 'Unknown Subject',
          unit: unit || 'Unit I',
          ...updateData,
          createdAt: new Date()
        };

        updatedTopic = new Topic(newTopicData);
        await updatedTopic.save();
        console.log(`✅ Created new topic: ${topicId}`);
      } catch (createError) {
        console.error(`❌ Failed to create topic ${topicId}:`, createError);
        return res.status(400).json({ 
          success: false, 
          message: 'Topic not found and could not be created',
          error: createError.message,
          topicId
        });
      }
    } else {
      console.log(`✅ Updated existing topic: ${topicId}`);
    }

    // Log successful update
    console.log(`📈 Topic update stats:`, {
      topicId: updatedTopic.topicId,
      name: updatedTopic.name,
      contentLength: {
        introduction: updatedTopic.content.introduction?.length || 0,
        definition: updatedTopic.content.definition?.length || 0,
        detailedExplanation: updatedTopic.content.detailedExplanation?.length || 0
      },
      hasImages: updatedTopic.content.images?.length > 0,
      hasLinks: updatedTopic.content.youtubeLinks?.length > 0 || updatedTopic.content.externalLinks?.length > 0,
      updatedBy: updatedTopic.updatedBy,
      updatedAt: updatedTopic.updatedAt
    });

    res.json({ 
      success: true, 
      data: {
        topicId: updatedTopic.topicId,
        name: updatedTopic.name,
        semester: updatedTopic.semester,
        subject: updatedTopic.subject,
        unit: updatedTopic.unit,
        content: updatedTopic.content,
        updatedBy: updatedTopic.updatedBy,
        updatedAt: updatedTopic.updatedAt,
        createdAt: updatedTopic.createdAt
      },
      message: `Topic "${updatedTopic.name}" updated successfully`,
      stats: {
        contentFields: Object.keys(updatedTopic.content).length,
        totalContentLength: Object.values(updatedTopic.content)
          .filter(val => typeof val === 'string')
          .reduce((sum, val) => sum + val.length, 0),
        hasMultimedia: (updatedTopic.content.images?.length || 0) + 
                      (updatedTopic.content.youtubeLinks?.length || 0) + 
                      (updatedTopic.content.externalLinks?.length || 0) > 0
      }
    });
  } catch (error) {
    console.error(`❌ Error updating topic ${req.params.topicId}:`, error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during topic update',
      error: error.message,
      topicId: req.params.topicId,
      timestamp: new Date().toISOString()
    });
  }
});

// Search topics
app.get('/api/topics/search', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({ success: false, message: 'Query parameter required' });
    }

    const topics = await Topic.find({
      $or: [
        { name: { $regex: q, $options: 'i' } },
        { 'content.introduction': { $regex: q, $options: 'i' } },
        { 'content.definition': { $regex: q, $options: 'i' } },
        { subject: { $regex: q, $options: 'i' } }
      ]
    }).limit(20);

    res.json({ success: true, data: topics });
  } catch (error) {
    console.error('Error searching topics:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Get all topics for a subject
app.get('/api/subjects/:subjectId/topics', async (req, res) => {
  try {
    const topics = await Topic.find({ 
      subject: { $regex: req.params.subjectId, $options: 'i' } 
    });
    res.json({ success: true, data: topics });
  } catch (error) {
    console.error('Error fetching subject topics:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Validate topic data before save
app.post('/api/topics/validate', async (req, res) => {
  try {
    const { topicData } = req.body;
    
    if (!topicData) {
      return res.status(400).json({
        success: false,
        message: 'Topic data is required'
      });
    }

    const errors = [];
    const warnings = [];

    // Required field validation
    if (!topicData.name || topicData.name.trim() === '') {
      errors.push('Topic name is required');
    }

    if (!topicData.content) {
      errors.push('Topic content is required');
    } else {
      // Content field validation
      const requiredContentFields = [
        'introduction', 'definition', 'realWorldExample', 
        'realWorldUse', 'importance', 'detailedExplanation'
      ];

      requiredContentFields.forEach(field => {
        if (!topicData.content[field] || topicData.content[field].trim() === '') {
          warnings.push(`${field} is empty or missing`);
        } else if (topicData.content[field].length < 10) {
          warnings.push(`${field} is too short (less than 10 characters)`);
        }
      });

      // Check for multimedia content
      const hasImages = topicData.content.images && topicData.content.images.length > 0;
      const hasLinks = (topicData.content.youtubeLinks && topicData.content.youtubeLinks.length > 0) ||
                      (topicData.content.externalLinks && topicData.content.externalLinks.length > 0);
      
      if (!hasImages && !hasLinks) {
        warnings.push('Consider adding images or links to enhance the topic');
      }
    }

    // Check for duplicate topic ID
    if (topicData.topicId) {
      const existingTopic = await Topic.findOne({ topicId: topicData.topicId });
      if (existingTopic) {
        warnings.push('Topic with this ID already exists and will be updated');
      }
    }

    const isValid = errors.length === 0;

    res.json({
      success: true,
      valid: isValid,
      errors,
      warnings,
      suggestions: [
        'Ensure all content fields are comprehensive and informative',
        'Add real-world examples to make the topic more relatable',
        'Include relevant links or images for better understanding',
        'Keep explanations clear and concise'
      ]
    });
  } catch (error) {
    console.error('Error validating topic:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during validation',
      error: error.message
    });
  }
});

// Bulk update topics with enhanced logging
app.put('/api/topics/bulk', async (req, res) => {
  try {
    const { topics, updatedBy } = req.body;
    
    if (!Array.isArray(topics)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Topics array required' 
      });
    }

    console.log(`📥 Bulk updating ${topics.length} topics...`);

    const results = {
      updated: 0,
      created: 0,
      failed: 0,
      errors: []
    };

    for (const topicData of topics) {
      try {
        const updateData = {
          content: topicData.content,
          updatedBy: updatedBy || 'bulk-update',
          updatedAt: new Date()
        };

        if (topicData.name) updateData.name = topicData.name;
        if (topicData.semester) updateData.semester = topicData.semester;
        if (topicData.subject) updateData.subject = topicData.subject;
        if (topicData.unit) updateData.unit = topicData.unit;

        const result = await Topic.findOneAndUpdate(
          { topicId: topicData.id || topicData.topicId },
          updateData,
          { new: true, upsert: true }
        );

        if (result.createdAt.getTime() === result.updatedAt.getTime()) {
          results.created++;
        } else {
          results.updated++;
        }
      } catch (error) {
        results.failed++;
        results.errors.push({
          topicId: topicData.id || topicData.topicId,
          error: error.message
        });
      }
    }

    console.log(`✅ Bulk update complete:`, results);

    res.json({
      success: true,
      message: `Bulk update completed: ${results.updated} updated, ${results.created} created, ${results.failed} failed`,
      results
    });
  } catch (error) {
    console.error('Error in bulk update:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during bulk update',
      error: error.message
    });
  }
});

// Sync topics (bulk insert/update) - Enhanced version
app.post('/api/topics/sync', async (req, res) => {
  try {
    const { topics } = req.body;
    
    if (!Array.isArray(topics)) {
      return res.status(400).json({ success: false, message: 'Topics array required' });
    }

    console.log(`📥 Syncing ${topics.length} topics to database...`);

    const operations = topics.map(topic => ({
      updateOne: {
        filter: { topicId: topic.id },
        update: {
          topicId: topic.id,
          name: topic.name,
          semester: topic.semester,
          subject: topic.subject,
          unit: topic.unit || 'Unit I',
          content: {
            introduction: topic.content.introduction || '',
            definition: topic.content.definition || '',
            realWorldExample: topic.content.realWorldExample || '',
            realWorldUse: topic.content.realWorldUse || '',
            importance: topic.content.importance || '',
            detailedExplanation: topic.content.detailedExplanation || '',
            sampleProgram: topic.content.sampleProgram || '',
            diagram: topic.content.diagram || '',
            images: topic.content.images || [],
            youtubeLinks: topic.content.youtubeLinks || [],
            externalLinks: topic.content.externalLinks || []
          },
          updatedBy: 'sync',
          updatedAt: new Date(),
          createdAt: new Date()
        },
        upsert: true
      }
    }));

    const result = await Topic.bulkWrite(operations);
    
    console.log(`✅ Sync complete: ${result.upsertedCount} inserted, ${result.modifiedCount} updated`);
    
    res.json({ 
      success: true, 
      message: `Synced ${result.upsertedCount + result.modifiedCount} topics`,
      stats: {
        inserted: result.upsertedCount,
        updated: result.modifiedCount,
        total: topics.length,
        timestamp: new Date()
      }
    });
  } catch (error) {
    console.error('Error syncing topics:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during sync', 
      error: error.message 
    });
  }
});

// Video upload endpoint
app.post('/api/videos/upload', upload.single('video'), async (req, res) => {
  try {
    const { title, subject, topic, studentName } = req.body;
    const file = req.file;
    
    if (!file) {
      return res.status(400).json({ success: false, message: 'No video file provided' });
    }

    const newVideo = new Video({
      title,
      subject,
      topic,
      studentName,
      filename: file.filename,
      originalName: file.originalname,
      size: file.size,
      mimetype: file.mimetype,
      uploadDate: new Date()
    });

    await newVideo.save();
    
    res.json({ success: true, data: newVideo });
  } catch (error) {
    console.error('Error uploading video:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Get all videos
app.get('/api/videos', async (req, res) => {
  try {
    const videos = await Video.find().sort({ uploadDate: -1 });
    res.json({ success: true, data: videos });
  } catch (error) {
    console.error('Error fetching videos:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Serve video files
app.use('/uploads', express.static('uploads'));

// Initialize database with default topics
app.post('/api/topics/initialize', async (req, res) => {
  try {
    const count = await Topic.countDocuments();
    console.log(`📊 Current topic count: ${count}`);
    
    if (count > 0) {
      return res.json({ 
        success: true, 
        message: `Database already initialized with ${count} topics`,
        count: count
      });
    }

    // Initialize with sample topics if database is empty
    const sampleTopics = [
      {
        topicId: 'introduction-to-java',
        name: 'Introduction to Java',
        semester: 1,
        subject: 'Java Programming',
        unit: 'Unit I',
        content: {
          introduction: 'Java is a high-level, object-oriented programming language developed by Sun Microsystems.',
          definition: 'Java is a platform-independent, object-oriented programming language that follows the principle of "write once, run anywhere".',
          realWorldExample: 'Java is used in enterprise applications like banking systems, e-commerce platforms, and Android mobile applications.',
          realWorldUse: 'Java is widely used in web development, mobile app development, desktop applications, and large-scale enterprise systems.',
          importance: 'Java is important because of its platform independence, strong memory management, and extensive library support.',
          detailedExplanation: 'Java was designed to be simple, object-oriented, and familiar. It provides automatic memory management through garbage collection and has a rich set of APIs for various programming needs.',
          youtubeLinks: [],
          externalLinks: []
        },
        updatedBy: 'initialization',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        topicId: 'data-structures-arrays',
        name: 'Arrays in Data Structures',
        semester: 1,
        subject: 'Data Structures',
        unit: 'Unit I',
        content: {
          introduction: 'Arrays are fundamental data structures that store elements of the same type in contiguous memory locations.',
          definition: 'An array is a collection of elements of the same data type stored in consecutive memory locations.',
          realWorldExample: 'Arrays are like a row of mailboxes where each mailbox has a number and can store mail.',
          realWorldUse: 'Arrays are used in databases, image processing, mathematical computations, and implementing other data structures.',
          importance: 'Arrays provide efficient random access to elements and are the foundation for many other data structures.',
          detailedExplanation: 'Arrays allow constant-time access to elements using indices. They are memory-efficient and provide cache-friendly access patterns.',
          youtubeLinks: [],
          externalLinks: []
        },
        updatedBy: 'initialization',
        updatedAt: new Date(),
        createdAt: new Date()
      }
    ];

    console.log('🚀 Initializing database with sample topics...');
    const result = await Topic.insertMany(sampleTopics);
    
    res.json({ 
      success: true, 
      message: `Database initialized with ${result.length} sample topics`,
      count: result.length
    });
  } catch (error) {
    console.error('Error initializing database:', error);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

// Get database stats
app.get('/api/stats', async (req, res) => {
  try {
    const topicCount = await Topic.countDocuments();
    const videoCount = await Video.countDocuments();
    const recentTopics = await Topic.find().sort({ updatedAt: -1 }).limit(5);
    
    res.json({ 
      success: true, 
      data: {
        topics: topicCount,
        videos: videoCount,
        recentUpdates: recentTopics.map(t => ({
          id: t.topicId,
          name: t.name,
          updatedAt: t.updatedAt,
          updatedBy: t.updatedBy
        }))
      }
    });
  } catch (error) {
    console.error('Error getting stats:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Simple CORS test endpoint
app.get('/api/test', (req, res) => {
  res.json({ 
    success: true, 
    message: 'CORS is working!', 
    timestamp: new Date(),
    origin: req.get('Origin')
  });
});

// Health check with database status
app.get('/api/health', async (req, res) => {
  try {
    const dbStatus = mongoose.connection.readyState;
    const topicCount = await Topic.countDocuments();
    
    res.json({ 
      success: true, 
      message: 'Server is running', 
      timestamp: new Date(),
      database: {
        connected: dbStatus === 1,
        status: dbStatus === 1 ? 'connected' : 'disconnected',
        topicCount: topicCount
      }
    });
  } catch (error) {
    res.json({ 
      success: true, 
      message: 'Server is running', 
      timestamp: new Date(),
      database: {
        connected: false,
        error: error.message
      }
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 MongoDB URI: ${MONGODB_URI}`);
});