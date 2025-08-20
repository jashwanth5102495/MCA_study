const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mca-study-hub';

// Topic Schema - making required fields optional to handle parsing issues
const topicSchema = new mongoose.Schema({
  topicId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  semester: { type: Number, required: true },
  subject: { type: String, required: true },
  unit: { type: String, required: true },
  content: {
    introduction: { type: String, default: 'Introduction not available' },
    definition: { type: String, default: 'Definition not available' },
    realWorldExample: { type: String, default: 'Example not available' },
    realWorldUse: { type: String, default: 'Use case not available' },
    importance: { type: String, default: 'Importance not available' },
    detailedExplanation: { type: String, default: 'Detailed explanation not available' },
    sampleProgram: { type: String, default: '' },
    diagram: { type: String, default: '' },
    diagramDescription: { type: String, default: '' },
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

// Function to parse topics from TypeScript files
function parseTopicsFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const topics = [];
    
    // Extract topic objects using regex - look for complete topic objects
    const topicMatches = content.match(/\{\s*id:\s*['"`][^'"`]+['"`][\s\S]*?\}/g);
    
    if (topicMatches) {
      topicMatches.forEach(match => {
        try {
          // Extract basic fields
          const idMatch = match.match(/id:\s*['"`]([^'"`]+)['"`]/);
          const nameMatch = match.match(/name:\s*['"`]([^'"`]+)['"`]/);
          const semesterMatch = match.match(/semester:\s*(\d+)/);
          const subjectMatch = match.match(/subject:\s*['"`]([^'"`]+)['"`]/);
          const unitMatch = match.match(/unit:\s*['"`]([^'"`]+)['"`]/);
          
          if (idMatch && nameMatch && semesterMatch && subjectMatch) {
            // Extract content fields with better regex patterns
            const introMatch = match.match(/introduction:\s*['"`]([\s\S]*?)['"`],?\s*(?:definition|realWorldExample|realWorldUse|importance|detailedExplanation|youtubeLinks|sampleProgram|diagram|diagramDescription|images|externalLinks|$)/);
            const defMatch = match.match(/definition:\s*['"`]([\s\S]*?)['"`],?\s*(?:realWorldExample|realWorldUse|importance|detailedExplanation|youtubeLinks|sampleProgram|diagram|diagramDescription|images|externalLinks|$)/);
            const exampleMatch = match.match(/realWorldExample:\s*['"`]([\s\S]*?)['"`],?\s*(?:realWorldUse|importance|detailedExplanation|youtubeLinks|sampleProgram|diagram|diagramDescription|images|externalLinks|$)/);
            const useMatch = match.match(/realWorldUse:\s*['"`]([\s\S]*?)['"`],?\s*(?:importance|detailedExplanation|youtubeLinks|sampleProgram|diagram|diagramDescription|images|externalLinks|$)/);
            const importanceMatch = match.match(/importance:\s*['"`]([\s\S]*?)['"`],?\s*(?:detailedExplanation|youtubeLinks|sampleProgram|diagram|diagramDescription|images|externalLinks|$)/);
            const detailMatch = match.match(/detailedExplanation:\s*['"`]([\s\S]*?)['"`],?\s*(?:youtubeLinks|sampleProgram|diagram|diagramDescription|images|externalLinks|$)/);
            const sampleMatch = match.match(/sampleProgram:\s*['"`]([\s\S]*?)['"`],?\s*(?:diagram|diagramDescription|images|externalLinks|$)/);
            const diagramMatch = match.match(/diagram:\s*['"`]([\s\S]*?)['"`],?\s*(?:diagramDescription|images|externalLinks|$)/);
            const diagramDescMatch = match.match(/diagramDescription:\s*['"`]([\s\S]*?)['"`],?\s*(?:images|externalLinks|$)/);
            
            // Extract YouTube links
            const youtubeMatch = match.match(/youtubeLinks:\s*\[([\s\S]*?)\]/);
            const youtubeLinks = youtubeMatch ? 
              youtubeMatch[1].match(/['"`]([^'"`]+)['"`]/g)?.map(link => link.replace(/['"`]/g, '')) || [] : [];
            
            // Extract external links
            const externalMatch = match.match(/externalLinks:\s*\[([\s\S]*?)\]/);
            const externalLinks = externalMatch ? 
              externalMatch[1].match(/\{\s*title:\s*['"`]([^'"`]+)['"`],\s*url:\s*['"`]([^'"`]+)['"`]\s*\}/g)?.map(link => {
                const titleMatch = link.match(/title:\s*['"`]([^'"`]+)['"`]/);
                const urlMatch = link.match(/url:\s*['"`]([^'"`]+)['"`]/);
                return {
                  title: titleMatch ? titleMatch[1] : '',
                  url: urlMatch ? urlMatch[1] : ''
                };
              }) || [] : [];
            
            const topic = {
              topicId: idMatch[1],
              name: nameMatch[1],
              semester: parseInt(semesterMatch[1]),
              subject: subjectMatch[1],
              unit: unitMatch ? unitMatch[1] : 'Unit I',
              content: {
                introduction: introMatch ? introMatch[1].replace(/\\n/g, '\n').replace(/\\"/g, '"').trim() : 'Introduction not available',
                definition: defMatch ? defMatch[1].replace(/\\n/g, '\n').replace(/\\"/g, '"').trim() : 'Definition not available',
                realWorldExample: exampleMatch ? exampleMatch[1].replace(/\\n/g, '\n').replace(/\\"/g, '"').trim() : 'Example not available',
                realWorldUse: useMatch ? useMatch[1].replace(/\\n/g, '\n').replace(/\\"/g, '"').trim() : 'Use case not available',
                importance: importanceMatch ? importanceMatch[1].replace(/\\n/g, '\n').replace(/\\"/g, '"').trim() : 'Importance not available',
                detailedExplanation: detailMatch ? detailMatch[1].replace(/\\n/g, '\n').replace(/\\"/g, '"').trim() : 'Detailed explanation not available',
                sampleProgram: sampleMatch ? sampleMatch[1].replace(/\\n/g, '\n').replace(/\\"/g, '"').trim() : '',
                diagram: diagramMatch ? diagramMatch[1].replace(/\\n/g, '\n').replace(/\\"/g, '"').trim() : '',
                diagramDescription: diagramDescMatch ? diagramDescMatch[1].replace(/\\n/g, '\n').replace(/\\"/g, '"').trim() : '',
                images: [],
                youtubeLinks: youtubeLinks,
                externalLinks: externalLinks
              }
            };
            
            topics.push(topic);
          }
        } catch (parseError) {
          console.warn(`⚠️ Failed to parse topic from ${filePath}:`, parseError.message);
        }
      });
    }
    
    return topics;
  } catch (error) {
    console.error(`❌ Error reading file ${filePath}:`, error);
    return [];
  }
}

async function syncAllTopics() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');

    const subjectsDir = path.join(__dirname, '../src/data/subjects');
    const files = fs.readdirSync(subjectsDir).filter(file => file.endsWith('.ts'));
    
    console.log(`📚 Found ${files.length} subject files to process`);
    
    let allTopics = [];
    
    // Process each file
    for (const file of files) {
      const filePath = path.join(subjectsDir, file);
      console.log(`📖 Processing ${file}...`);
      
      const topics = parseTopicsFromFile(filePath);
      allTopics = allTopics.concat(topics);
      
      console.log(`  ✅ Found ${topics.length} topics in ${file}`);
    }
    
    console.log(`📥 Total topics found: ${allTopics.length}`);
    
    if (allTopics.length === 0) {
      console.log('⚠️ No topics found to sync');
      return;
    }

    // Clear existing topics
    console.log('🗑️ Clearing existing topics...');
    await Topic.deleteMany({});
    console.log('✅ Cleared existing topics');

    // Insert all topics
    console.log('📝 Inserting topics into database...');
    const result = await Topic.insertMany(allTopics);
    
    console.log(`✅ Successfully synced ${result.length} topics to MongoDB`);
    console.log(`📊 Database now contains ${result.length} topics`);

    // Show some statistics
    const subjects = [...new Set(allTopics.map(t => t.subject))];
    console.log(`📚 Subjects covered: ${subjects.length}`);
    console.log('📋 Subjects:', subjects.join(', '));

  } catch (error) {
    console.error('❌ Error syncing topics:', error);
  } finally {
    console.log('🔌 Disconnected from MongoDB');
    await mongoose.disconnect();
  }
}

// Run the sync
syncAllTopics();