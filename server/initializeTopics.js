const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mca-study-hub';

// Topic Schema (same as in server.js)
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

// Sample topics data (you'll need to import your actual syllabus data)
const sampleTopics = [
  {
    id: 'introduction-to-java',
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
    }
  },
  {
    id: 'data-structures-arrays',
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
    }
  },
  {
    id: 'database-normalization',
    name: 'Database Normalization',
    semester: 2,
    subject: 'Database Systems',
    unit: 'Unit II',
    content: {
      introduction: 'Database normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.',
      definition: 'Normalization is a systematic approach of decomposing tables to eliminate data redundancy and undesirable characteristics.',
      realWorldExample: 'Like organizing a library where books are categorized by genre, author, and publication year to avoid duplication.',
      realWorldUse: 'Normalization is used in designing efficient database schemas for applications like e-commerce, banking, and inventory management.',
      importance: 'Normalization prevents data anomalies, reduces storage space, and ensures data consistency.',
      detailedExplanation: 'The normalization process involves several normal forms (1NF, 2NF, 3NF, BCNF) each addressing specific types of redundancy.',
      youtubeLinks: [],
      externalLinks: []
    }
  }
];

async function initializeDatabase() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');

    // Check if topics already exist
    const existingCount = await Topic.countDocuments();
    console.log(`📊 Found ${existingCount} existing topics in database`);

    if (existingCount > 0) {
      console.log('⚠️ Database already has topics. Skipping initialization.');
      console.log('💡 To reinitialize, drop the collection first: db.topics.drop()');
      return;
    }

    console.log('🚀 Initializing database with sample topics...');

    // Insert sample topics
    const operations = sampleTopics.map(topic => ({
      updateOne: {
        filter: { topicId: topic.id },
        update: {
          topicId: topic.id,
          name: topic.name,
          semester: topic.semester,
          subject: topic.subject,
          unit: topic.unit,
          content: {
            introduction: topic.content.introduction,
            definition: topic.content.definition,
            realWorldExample: topic.content.realWorldExample,
            realWorldUse: topic.content.realWorldUse,
            importance: topic.content.importance,
            detailedExplanation: topic.content.detailedExplanation,
            sampleProgram: topic.content.sampleProgram || '',
            diagram: topic.content.diagram || '',
            images: topic.content.images || [],
            youtubeLinks: topic.content.youtubeLinks || [],
            externalLinks: topic.content.externalLinks || []
          },
          updatedBy: 'initialization',
          updatedAt: new Date(),
          createdAt: new Date()
        },
        upsert: true
      }
    }));

    const result = await Topic.bulkWrite(operations);
    console.log(`✅ Successfully initialized ${result.upsertedCount} topics`);

    // Verify the data
    const finalCount = await Topic.countDocuments();
    console.log(`📊 Total topics in database: ${finalCount}`);

    // Show sample of inserted data
    const sampleTopic = await Topic.findOne();
    if (sampleTopic) {
      console.log('📝 Sample topic:', {
        topicId: sampleTopic.topicId,
        name: sampleTopic.name,
        subject: sampleTopic.subject
      });
    }

  } catch (error) {
    console.error('❌ Database initialization failed:', error);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
  }
}

// Run initialization
if (require.main === module) {
  initializeDatabase();
}

module.exports = { initializeDatabase };