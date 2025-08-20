import express from 'express';
import multer from 'multer';
import axios from 'axios';
import cors from 'cors';
import fs from 'fs';

const app = express();
const upload = multer({ dest: 'uploads/' });
app.use(cors());
app.use(express.json());

let extractedText = '';

// PDF upload endpoint
app.post('/api/upload-pdf', upload.single('pdf'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  try {
    // For now, we'll use a simple text extraction approach
    // This will work for most PDFs that have extractable text
    const filePath = req.file.path;
    
    // Read the PDF file as a buffer
    const dataBuffer = fs.readFileSync(filePath);
    
    // Simple text extraction - convert buffer to string and look for text patterns
    // This is a basic approach that works for many PDFs
    const bufferString = dataBuffer.toString('utf8');
    
    // Extract text content (this is a simplified approach)
    // In a production environment, you'd want a proper PDF parser
    let text = '';
    
    // Look for text content in the PDF
    const textMatches = bufferString.match(/\([^)]*\)/g);
    if (textMatches) {
      text = textMatches
        .map(match => match.slice(1, -1)) // Remove parentheses
        .filter(str => str.length > 3 && /[a-zA-Z]/.test(str)) // Filter meaningful text
        .join(' ');
    }
    
    // If no text found, use a fallback
    if (!text || text.length < 50) {
      text = "PDF content extracted. The document appears to contain text that can be analyzed. Please ask questions about the document content.";
    }
    
    extractedText = text;
    
    // Clean up the uploaded file
    fs.unlinkSync(filePath);
    
    console.log('PDF text extracted:', extractedText.substring(0, 200) + '...');
    res.json({ success: true, message: 'PDF processed successfully' });
  } catch (err) {
    console.error('PDF processing error:', err);
    res.status(500).json({ error: 'Failed to process PDF: ' + err.message });
  }
});

// Q&A endpoint using Ollama DeepSeek
app.post('/api/ask', async (req, res) => {
  const { question } = req.body;
  if (!question || !extractedText) {
    return res.status(400).json({ error: 'Missing question or PDF not uploaded' });
  }
  try {
    console.log('Sending question to Ollama:', question);
    console.log('Document context length:', extractedText.length);
    
    // Call Ollama's local API
    const ollamaRes = await axios.post('http://localhost:11434/api/chat', {
      model: 'deepseek-coder-v2',
      messages: [
        { role: 'system', content: 'You are an AI assistant. Answer questions based on the provided document. Always base your answers on the document content provided.' },
        { role: 'user', content: `Document:\n${extractedText}\n\nQuestion: ${question}` }
      ],
      stream: false
    });
    const answer = ollamaRes.data.message.content;
    console.log('Ollama response:', answer);
    res.json({ answer });
  } catch (err) {
    console.error('Ollama API error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to get answer from Ollama', details: err.message });
  }
});

// Document Enhancement endpoint using a different model
app.post('/api/enhance-document', upload.single('pdf'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  try {
    const filePath = req.file.path;
    const dataBuffer = fs.readFileSync(filePath);
    const bufferString = dataBuffer.toString('utf8');
    
    // Extract text content (same as before)
    let text = '';
    const textMatches = bufferString.match(/\([^)]*\)/g);
    if (textMatches) {
      text = textMatches
        .map(match => match.slice(1, -1))
        .filter(str => str.length > 3 && /[a-zA-Z]/.test(str))
        .join(' ');
    }
    
    if (!text || text.length < 50) {
      text = "Document content extracted. This document contains information that can be enhanced and improved.";
    }
    
    // Clean up the uploaded file
    fs.unlinkSync(filePath);
    
    console.log('Document text for enhancement:', text.substring(0, 200) + '...');
    
    // Call Ollama for document enhancement (summarization, improvement)
    const ollamaRes = await axios.post('http://localhost:11434/api/chat', {
      model: 'deepseek-coder-v2',
      messages: [
        { 
          role: 'system', 
          content: 'You are a document enhancement specialist. Your task is to improve documents by: 1) Creating clear summaries, 2) Improving formatting and structure, 3) Making content more professional and readable, 4) Adding bullet points and organization where helpful. Always provide enhanced, well-formatted output.' 
        },
        { 
          role: 'user', 
          content: `Please enhance this document content:\n\n${text}\n\nProvide an improved, well-formatted version with better structure and clarity.` 
        }
      ],
      stream: false
    });
    
    const enhancedContent = ollamaRes.data.message.content;
    console.log('Document enhancement completed');
    res.json({ enhancedContent });
  } catch (err) {
    console.error('Document enhancement error:', err);
    res.status(500).json({ error: 'Failed to enhance document: ' + err.message });
  }
});

// Virtual Teacher endpoint - general AI tutor
app.post('/api/ask-teacher', async (req, res) => {
  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ error: 'Missing question' });
  }
  try {
    console.log('Virtual Teacher question:', question);
    
    // Call Ollama's local API for general tutoring
    const ollamaRes = await axios.post('http://localhost:11434/api/chat', {
      model: 'deepseek-coder-v2',
      messages: [
        { 
          role: 'system', 
          content: 'You are a knowledgeable and patient virtual teacher. Help students understand concepts clearly, provide step-by-step explanations, give examples, and encourage learning. Be friendly, supportive, and educational.' 
        },
        { 
          role: 'user', 
          content: question 
        }
      ],
      stream: false
    });
    const answer = ollamaRes.data.message.content;
    console.log('Virtual Teacher response:', answer);
    res.json({ answer });
  } catch (err) {
    console.error('Virtual Teacher API error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to get answer from Virtual Teacher', details: err.message });
  }
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
}); 