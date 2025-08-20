# Topic Management API Documentation

## 🚀 Overview

This API provides comprehensive endpoints for managing educational topics with full CRUD operations, validation, and bulk processing capabilities.

## 📋 Base URL
```
http://localhost:5000/api
```

## 🔐 Authentication
Currently, the API uses a simple `updatedBy` field to track who made changes. In production, implement proper JWT authentication.

## 📚 Endpoints

### 1. Get Topic by ID
```http
GET /api/topics/:topicId
```

**Description**: Retrieve a specific topic by its ID

**Parameters**:
- `topicId` (string): Unique identifier for the topic

**Response**:
```json
{
  "success": true,
  "data": {
    "topicId": "introduction-to-java",
    "name": "Introduction to Java",
    "semester": 1,
    "subject": "Java Programming",
    "unit": "Unit I",
    "content": {
      "introduction": "Java is a high-level...",
      "definition": "Java is a platform-independent...",
      "realWorldExample": "Java is used in...",
      "realWorldUse": "Java is widely used...",
      "importance": "Java is important because...",
      "detailedExplanation": "Java was designed...",
      "sampleProgram": "",
      "diagram": "",
      "images": [],
      "youtubeLinks": [],
      "externalLinks": []
    },
    "updatedBy": "user",
    "updatedAt": "2024-01-15T10:30:00.000Z",
    "createdAt": "2024-01-15T10:30:00.000Z"
  },
  "meta": {
    "contentLength": 1250,
    "hasImages": false,
    "hasLinks": false,
    "lastModified": "2024-01-15T10:30:00.000Z"
  }
}
```

### 2. Update Topic
```http
PUT /api/topics/:topicId
```

**Description**: Update an existing topic or create a new one if it doesn't exist

**Parameters**:
- `topicId` (string): Unique identifier for the topic

**Request Body**:
```json
{
  "content": {
    "introduction": "Updated introduction...",
    "definition": "Updated definition...",
    "realWorldExample": "Updated example...",
    "realWorldUse": "Updated use case...",
    "importance": "Updated importance...",
    "detailedExplanation": "Updated detailed explanation...",
    "sampleProgram": "Optional code sample",
    "diagram": "Optional diagram description",
    "images": [
      {
        "data": "base64_image_data",
        "description": "Image description"
      }
    ],
    "youtubeLinks": ["https://youtube.com/watch?v=..."],
    "externalLinks": [
      {
        "title": "Link Title",
        "url": "https://example.com"
      }
    ]
  },
  "updatedBy": "user_id",
  "name": "Optional topic name",
  "semester": 1,
  "subject": "Optional subject name",
  "unit": "Optional unit"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "topicId": "introduction-to-java",
    "name": "Introduction to Java",
    "semester": 1,
    "subject": "Java Programming",
    "unit": "Unit I",
    "content": { /* updated content */ },
    "updatedBy": "user_id",
    "updatedAt": "2024-01-15T10:35:00.000Z",
    "createdAt": "2024-01-15T10:30:00.000Z"
  },
  "message": "Topic \"Introduction to Java\" updated successfully",
  "stats": {
    "contentFields": 10,
    "totalContentLength": 1350,
    "hasMultimedia": true
  }
}
```

### 3. Create New Topic
```http
POST /api/topics
```

**Description**: Create a new topic

**Request Body**:
```json
{
  "topicId": "new-topic-id",
  "name": "New Topic Name",
  "semester": 1,
  "subject": "Subject Name",
  "unit": "Unit I",
  "content": {
    "introduction": "Topic introduction...",
    "definition": "Topic definition...",
    "realWorldExample": "Real world example...",
    "realWorldUse": "Real world use...",
    "importance": "Why it's important...",
    "detailedExplanation": "Detailed explanation..."
  },
  "updatedBy": "user_id"
}
```

**Response**:
```json
{
  "success": true,
  "data": { /* created topic data */ },
  "message": "Topic \"New Topic Name\" created successfully"
}
```

### 4. Delete Topic
```http
DELETE /api/topics/:topicId
```

**Description**: Delete a specific topic

**Parameters**:
- `topicId` (string): Unique identifier for the topic

**Request Body**:
```json
{
  "updatedBy": "user_id"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Topic \"Topic Name\" deleted successfully",
  "data": {
    "topicId": "deleted-topic-id",
    "name": "Deleted Topic Name",
    "deletedAt": "2024-01-15T10:40:00.000Z",
    "deletedBy": "user_id"
  }
}
```

### 5. Validate Topic Data
```http
POST /api/topics/validate
```

**Description**: Validate topic data before saving

**Request Body**:
```json
{
  "topicData": {
    "name": "Topic Name",
    "content": {
      "introduction": "Introduction text...",
      "definition": "Definition text...",
      /* other content fields */
    }
  }
}
```

**Response**:
```json
{
  "success": true,
  "valid": true,
  "errors": [],
  "warnings": [
    "Consider adding images or links to enhance the topic"
  ],
  "suggestions": [
    "Ensure all content fields are comprehensive and informative",
    "Add real-world examples to make the topic more relatable",
    "Include relevant links or images for better understanding",
    "Keep explanations clear and concise"
  ]
}
```

### 6. Bulk Update Topics
```http
PUT /api/topics/bulk
```

**Description**: Update multiple topics in a single request

**Request Body**:
```json
{
  "topics": [
    {
      "id": "topic-1",
      "content": { /* topic 1 content */ },
      "name": "Updated Topic 1"
    },
    {
      "id": "topic-2", 
      "content": { /* topic 2 content */ },
      "name": "Updated Topic 2"
    }
  ],
  "updatedBy": "user_id"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Bulk update completed: 2 updated, 0 created, 0 failed",
  "results": {
    "updated": 2,
    "created": 0,
    "failed": 0,
    "errors": []
  }
}
```

### 7. Search Topics
```http
GET /api/topics/search?q=search_term
```

**Description**: Search topics by name, subject, or content

**Query Parameters**:
- `q` (string): Search query

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "topicId": "matching-topic-1",
      "name": "Matching Topic 1",
      "subject": "Subject Name",
      "content": { /* topic content */ }
    }
  ]
}
```

### 8. Get Topics by Subject
```http
GET /api/subjects/:subjectId/topics
```

**Description**: Get all topics for a specific subject

**Parameters**:
- `subjectId` (string): Subject identifier

**Response**:
```json
{
  "success": true,
  "data": [
    { /* topic 1 */ },
    { /* topic 2 */ },
    { /* topic 3 */ }
  ]
}
```

### 9. Sync Topics (Bulk Insert/Update)
```http
POST /api/topics/sync
```

**Description**: Synchronize multiple topics with the database

**Request Body**:
```json
{
  "topics": [
    {
      "id": "topic-1",
      "name": "Topic 1",
      "semester": 1,
      "subject": "Subject 1",
      "unit": "Unit I",
      "content": { /* topic content */ }
    }
  ]
}
```

**Response**:
```json
{
  "success": true,
  "message": "Synced 5 topics",
  "stats": {
    "inserted": 2,
    "updated": 3,
    "total": 5,
    "timestamp": "2024-01-15T10:45:00.000Z"
  }
}
```

### 10. Get Database Stats
```http
GET /api/stats
```

**Description**: Get database statistics

**Response**:
```json
{
  "success": true,
  "data": {
    "topics": 150,
    "videos": 25,
    "recentUpdates": [
      {
        "id": "recent-topic-1",
        "name": "Recently Updated Topic",
        "updatedAt": "2024-01-15T10:30:00.000Z",
        "updatedBy": "user_id"
      }
    ]
  }
}
```

### 11. Health Check
```http
GET /api/health
```

**Description**: Check server and database health

**Response**:
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-15T10:45:00.000Z",
  "database": {
    "connected": true,
    "status": "connected",
    "topicCount": 150
  }
}
```

## 🔧 Error Handling

All endpoints return consistent error responses:

```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error message",
  "topicId": "relevant-topic-id",
  "timestamp": "2024-01-15T10:45:00.000Z"
}
```

## 📊 Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `404` - Not Found
- `409` - Conflict (duplicate resource)
- `500` - Internal Server Error

## 🧪 Testing

Use the provided test endpoints:
- `GET /api/test` - CORS test
- `GET /api/health` - Health check

## 💡 Best Practices

1. **Always validate data** using `/api/topics/validate` before saving
2. **Use bulk operations** for multiple topics to improve performance
3. **Include meaningful `updatedBy`** values for audit trails
4. **Handle errors gracefully** and provide user feedback
5. **Use appropriate HTTP methods** (GET, POST, PUT, DELETE)
6. **Include comprehensive content** in all required fields

## 🔄 Frontend Integration

The API is designed to work seamlessly with the EditModal component:

```typescript
// Example usage in EditModal
const handleSave = async () => {
  // Validate first
  const validation = await validateTopic(topicData);
  if (!validation.valid) {
    showErrors(validation.errors);
    return;
  }

  // Save topic
  const result = await saveTopic(topicId, content, 'user', {
    name: topicName,
    semester: selectedSemester,
    subject: selectedSubject,
    unit: selectedUnit
  });

  if (result.success) {
    showSuccess(result.message);
    triggerImmediateTopicUpdate(result.data);
  } else {
    showError(result.message);
  }
};
```

This API provides a robust foundation for managing educational content with comprehensive validation, error handling, and performance optimization.