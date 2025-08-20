const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mca-study-hub';

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

// Sample topics that match your syllabus structure
const sampleTopics = [
  {
    topicId: 'introduction-to-java',
    name: 'Introduction to Java',
    semester: 1,
    subject: 'Java Programming',
    unit: 'Unit I',
    content: {
      introduction: 'Java is a high-level, object-oriented programming language developed by Sun Microsystems in 1995.',
      definition: 'Java is a platform-independent, object-oriented programming language that follows the principle of "write once, run anywhere" (WORA).',
      realWorldExample: 'Java is used in enterprise applications like banking systems (like those used by JPMorgan Chase), e-commerce platforms (like Amazon), and Android mobile applications.',
      realWorldUse: 'Java is widely used in web development (Spring framework), mobile app development (Android), desktop applications (NetBeans IDE), and large-scale enterprise systems.',
      importance: 'Java is important because of its platform independence, strong memory management through garbage collection, extensive library support, and robust security features.',
      detailedExplanation: 'Java was designed to be simple, object-oriented, and familiar to C++ programmers. It provides automatic memory management through garbage collection, has a rich set of APIs for various programming needs, and supports multithreading for concurrent programming.',
      youtubeLinks: [],
      externalLinks: []
    }
  },
  {
    topicId: 'the-role-of-algorithms-in-computing',
    name: 'The Role of Algorithms in Computing',
    semester: 2,
    subject: 'Design and Analysis of Algorithms',
    unit: 'Unit I',
    content: {
      introduction: 'Algorithms are the foundation of computer science and play a crucial role in solving computational problems efficiently.',
      definition: 'An algorithm is a well-defined sequence of computational steps that takes some input and produces some output, designed to solve a specific problem.',
      realWorldExample: 'Google\'s PageRank algorithm determines the ranking of web pages in search results, while GPS navigation systems use shortest path algorithms to find optimal routes.',
      realWorldUse: 'Algorithms are used in search engines, social media feeds, recommendation systems, data compression, cryptography, and artificial intelligence.',
      importance: 'Algorithms are essential for efficient problem-solving, optimizing resource usage, and enabling complex computations that power modern technology.',
      detailedExplanation: 'Algorithms provide a systematic approach to problem-solving. They must be correct (produce the right output), efficient (use minimal resources), and clear (easy to understand and implement). The study of algorithms involves analyzing their time and space complexity to ensure optimal performance.',
      youtubeLinks: [],
      externalLinks: []
    }
  },
  {
    topicId: 'arrays-data-structure',
    name: 'Arrays Data Structure',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit I',
    content: {
      introduction: 'Arrays are one of the most fundamental and widely used data structures in computer programming.',
      definition: 'An array is a collection of elements of the same data type stored in consecutive memory locations, accessible through indices.',
      realWorldExample: 'Arrays are like a row of mailboxes in an apartment building - each mailbox has a unique number (index) and can store mail (data) of the same type.',
      realWorldUse: 'Arrays are used in image processing (pixel data), databases (storing records), mathematical computations (matrices), and implementing other data structures like stacks and queues.',
      importance: 'Arrays provide efficient random access to elements with O(1) time complexity and are memory-efficient due to their contiguous storage.',
      detailedExplanation: 'Arrays allow constant-time access to elements using indices. They are cache-friendly due to spatial locality and form the basis for many other data structures. However, they have fixed size and insertion/deletion operations can be expensive.',
      youtubeLinks: [],
      externalLinks: []
    }
  },
  {
    topicId: 'database-normalization',
    name: 'Database Normalization',
    semester: 2,
    subject: 'Database Systems',
    unit: 'Unit II',
    content: {
      introduction: 'Database normalization is a systematic approach to organizing data in relational databases to reduce redundancy and improve data integrity.',
      definition: 'Normalization is the process of decomposing tables to eliminate data redundancy and undesirable characteristics like insertion, update, and deletion anomalies.',
      realWorldExample: 'Like organizing a library catalog where instead of repeating author information in every book record, you create separate author and book tables linked by author ID.',
      realWorldUse: 'Normalization is used in designing efficient database schemas for e-commerce systems, banking applications, inventory management, and any system requiring structured data storage.',
      importance: 'Normalization prevents data anomalies, reduces storage space, ensures data consistency, and makes database maintenance easier.',
      detailedExplanation: 'The normalization process involves several normal forms (1NF, 2NF, 3NF, BCNF) each addressing specific types of redundancy. First Normal Form eliminates repeating groups, Second Normal Form removes partial dependencies, and Third Normal Form eliminates transitive dependencies.',
      youtubeLinks: [],
      externalLinks: []
    }
  },
  {
    topicId: 'operating-system-introduction',
    name: 'Introduction to Operating Systems',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit I',
    content: {
      introduction: 'An operating system is the most important software that runs on a computer, managing hardware resources and providing services to applications.',
      definition: 'An operating system (OS) is system software that manages computer hardware, software resources, and provides common services for computer programs.',
      realWorldExample: 'Like a traffic controller at a busy intersection, an OS manages and coordinates all the different programs and hardware components to ensure smooth operation.',
      realWorldUse: 'Operating systems like Windows, macOS, Linux, Android, and iOS power everything from personal computers to smartphones, servers, and embedded systems.',
      importance: 'Operating systems are crucial for resource management, security, user interface provision, and enabling multiple programs to run simultaneously.',
      detailedExplanation: 'An OS acts as an intermediary between users and computer hardware. It provides process management, memory management, file system management, device management, and security services. Modern OS support multitasking, multiprocessing, and provide graphical user interfaces.',
      youtubeLinks: [],
      externalLinks: []
    }
  }
];

async function quickStart() {
  try {
    console.log('🚀 Quick Start: Setting up database...');
    
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');

    // Check existing topics
    const existingCount = await Topic.countDocuments();
    console.log(`📊 Found ${existingCount} existing topics`);

    if (existingCount === 0) {
      console.log('📝 Inserting sample topics...');
      
      // Insert sample topics
      const result = await Topic.insertMany(sampleTopics);
      console.log(`✅ Inserted ${result.length} sample topics`);
    } else {
      console.log('✅ Database already has topics');
    }

    // Verify final count
    const finalCount = await Topic.countDocuments();
    console.log(`📊 Total topics in database: ${finalCount}`);

    // Test update functionality
    console.log('🧪 Testing update functionality...');
    const testTopic = await Topic.findOne({ topicId: 'introduction-to-java' });
    if (testTopic) {
      testTopic.content.introduction += ' [Test update]';
      testTopic.updatedAt = new Date();
      testTopic.updatedBy = 'test';
      await testTopic.save();
      console.log('✅ Update test successful');
      
      // Revert test change
      testTopic.content.introduction = testTopic.content.introduction.replace(' [Test update]', '');
      await testTopic.save();
      console.log('✅ Test change reverted');
    }

    console.log('🎉 Quick start completed successfully!');
    console.log('💡 You can now start the server and frontend');
    
  } catch (error) {
    console.error('❌ Quick start failed:', error);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
  }
}

// Run quick start
if (require.main === module) {
  quickStart();
}

module.exports = { quickStart };