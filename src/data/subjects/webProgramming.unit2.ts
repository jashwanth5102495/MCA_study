import { Topic } from '../syllabus';

export const webProgrammingUnit2: Topic[] = [
  {
    id: 'advanced-javascript',
    name: 'Advanced JavaScript Concepts',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit II',
    content: {
      introduction: 'Advanced JavaScript concepts enable developers to write more efficient, maintainable, and powerful web applications.',
      definition: 'Advanced JavaScript includes concepts like closures, prototypes, promises, async/await, modules, and modern ES6+ features.',
      realWorldExample: 'E-commerce sites use advanced JavaScript for shopping cart management, real-time inventory updates, and dynamic pricing.',
      realWorldUse: 'Used in complex web applications, single-page applications (SPAs), and modern web development frameworks.',
      importance: 'Essential for building scalable, maintainable web applications and understanding modern JavaScript frameworks.',
      detailedExplanation: `Advanced JavaScript includes closures (functions with access to variables in their outer scope), prototypes (inheritance mechanism), promises (handling asynchronous operations), async/await (syntactic sugar for promises), modules (ES6 module system), and modern features like destructuring, spread operators, and arrow functions. These concepts enable better code organization, error handling, and performance optimization. Understanding these concepts is crucial for working with modern frameworks like React, Vue, and Angular.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'Advanced JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' },
        { title: 'ES6 Features', url: 'https://www.w3schools.com/js/js_es6.asp' }
      ]
    }
  },
  {
    id: 'dom-manipulation',
    name: 'DOM Manipulation and Events',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit II',
    content: {
      introduction: 'DOM manipulation allows JavaScript to dynamically modify web page content, structure, and styling.',
      definition: 'DOM (Document Object Model) manipulation involves programmatically accessing and modifying HTML elements and their properties.',
      realWorldExample: 'Social media feeds that dynamically load new posts without refreshing the page use DOM manipulation.',
      realWorldUse: 'Used in dynamic content updates, form handling, interactive interfaces, and single-page applications.',
      importance: 'Core skill for creating interactive web applications and understanding how modern web frameworks work.',
      detailedExplanation: `DOM manipulation includes selecting elements (getElementById, querySelector), modifying content (innerHTML, textContent), changing attributes (setAttribute, className), creating elements (createElement, appendChild), and event handling (addEventListener, removeEventListener). Event delegation, event bubbling, and event capturing are important concepts. Modern approaches include virtual DOM (React) and reactive frameworks that abstract DOM manipulation. Performance considerations include minimizing DOM queries and batching updates.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'DOM Manipulation', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model' },
        { title: 'JavaScript Events', url: 'https://www.w3schools.com/js/js_events.asp' }
      ]
    }
  },
  {
    id: 'ajax-async-programming',
    name: 'AJAX and Asynchronous Programming',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit II',
    content: {
      introduction: 'AJAX enables web applications to communicate with servers asynchronously without reloading the entire page.',
      definition: 'AJAX (Asynchronous JavaScript and XML) is a technique for creating fast and dynamic web pages by exchanging data with a server behind the scenes.',
      realWorldExample: 'Google Maps loads map tiles and location data dynamically as users pan and zoom, without page refreshes.',
      realWorldUse: 'Used in real-time applications, form submissions, data fetching, and creating responsive user interfaces.',
      importance: 'Essential for modern web applications that require seamless user experiences and real-time data updates.',
      detailedExplanation: `AJAX uses XMLHttpRequest or the newer Fetch API to make HTTP requests. Asynchronous programming involves callbacks, promises, and async/await patterns. Common use cases include form validation, data loading, real-time updates, and API integration. Error handling, loading states, and user feedback are important considerations. Modern approaches include REST APIs, GraphQL, and WebSockets for real-time communication. CORS (Cross-Origin Resource Sharing) and security considerations are crucial for production applications.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'AJAX Tutorial', url: 'https://www.w3schools.com/xml/ajax_intro.asp' },
        { title: 'Fetch API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API' }
      ]
    }
  },
  {
    id: 'json-data-handling',
    name: 'JSON and Data Handling',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit II',
    content: {
      introduction: 'JSON (JavaScript Object Notation) is the standard format for data exchange between web applications and servers.',
      definition: 'JSON is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.',
      realWorldExample: 'Weather apps receive JSON data from APIs containing temperature, humidity, and forecast information.',
      realWorldUse: 'Used in API responses, configuration files, data storage, and inter-application communication.',
      importance: 'Standard format for web APIs and essential for modern web development and data exchange.',
      detailedExplanation: `JSON supports data types including strings, numbers, booleans, null, arrays, and objects. JavaScript provides JSON.parse() to convert JSON strings to objects and JSON.stringify() to convert objects to JSON strings. Common patterns include API integration, local storage serialization, and configuration management. Error handling for malformed JSON and validation are important considerations. JSON Schema provides validation and documentation capabilities. Performance considerations include parsing large datasets and memory usage.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'JSON Introduction', url: 'https://www.w3schools.com/js/js_json_intro.asp' },
        { title: 'JSON Schema', url: 'https://json-schema.org/' }
      ]
    }
  },
  {
    id: 'error-handling-debugging',
    name: 'Error Handling and Debugging',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit II',
    content: {
      introduction: 'Effective error handling and debugging are crucial skills for developing robust web applications.',
      definition: 'Error handling involves anticipating, catching, and managing errors gracefully, while debugging is the process of finding and fixing bugs.',
      realWorldExample: 'Web applications use try-catch blocks to handle network errors gracefully and provide user-friendly error messages.',
      realWorldUse: 'Used in all web applications to ensure reliability, user experience, and maintainability.',
      importance: 'Essential for production applications, user experience, and reducing support costs.',
      detailedExplanation: `Error handling includes try-catch blocks, error objects, custom error types, and global error handlers. Debugging tools include browser developer tools, console methods (log, error, warn), breakpoints, and step-through debugging. Common debugging techniques include logging, code inspection, and testing. Error reporting and monitoring are important for production applications. Best practices include meaningful error messages, graceful degradation, and comprehensive testing.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'JavaScript Error Handling', url: 'https://www.w3schools.com/js/js_errors.asp' },
        { title: 'Debugging JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Debugging' }
      ]
    }
  }
]; 