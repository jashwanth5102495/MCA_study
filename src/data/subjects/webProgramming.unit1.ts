import { Topic } from '../syllabus';

export const webProgrammingUnit1: Topic[] = [
  {
    id: 'html5-local-storage',
    name: 'HTML5 Local Storage',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit I',
    content: {
      introduction: 'HTML5 Local Storage provides a way to store data locally within the user\'s browser, persisting even after the browser is closed.',
      definition: 'Local Storage is a web storage API that allows web applications to store data locally within a user\'s browser with no expiration time.',
      realWorldExample: 'Shopping websites use Local Storage to remember items in your cart even if you close the browser and return later.',
      realWorldUse: 'Applied in storing user preferences, shopping cart contents, form data, and offline application data.',
      importance: 'Enables rich web applications with offline capabilities and improved user experience through persistent data storage.',
      detailedExplanation: `Local Storage provides 5-10MB of storage space per origin, significantly more than cookies (4KB). Data is stored as key-value pairs where both keys and values must be strings. The localStorage object provides methods: setItem(key, value) to store data, getItem(key) to retrieve data, removeItem(key) to delete specific items, clear() to remove all data, and key(index) to get key at specific index. Data persists until explicitly removed by the application, user, or browser cleanup. Unlike sessionStorage, localStorage data survives browser restarts. Security considerations include same-origin policy restrictions and the need to sanitize stored data. Best practices include error handling for storage quota exceeded, JSON serialization for complex objects, and graceful degradation for browsers without support.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=GihQAC1I39Q',
        'https://www.youtube.com/watch?v=k8yJCeuP6I8'
      ],
      externalLinks: [
        { title: 'HTML5 Local Storage', url: 'https://www.w3schools.com/html/html5_webstorage.asp' },
        { title: 'Web Storage API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API' }
      ]
    }
  },
  {
    id: 'html5-web-workers',
    name: 'HTML5 Web Workers',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit I',
    content: {
      introduction: 'Web Workers enable running JavaScript in background threads, allowing for parallel processing without blocking the main UI thread.',
      definition: 'Web Workers are a way to run JavaScript code in background threads, separate from the main execution thread that handles UI interactions.',
      realWorldExample: 'Image editing applications use Web Workers to process large images in the background while keeping the user interface responsive.',
      realWorldUse: 'Applied in data processing, image manipulation, cryptographic operations, and any CPU-intensive tasks that shouldn\'t block the UI.',
      importance: 'Enables true multithreading in web applications, improving performance and user experience for complex operations.',
      detailedExplanation: `Web Workers run in isolated contexts with their own global scope, separate from the main thread. Types include Dedicated Workers (used by single script) and Shared Workers (shared between multiple scripts/tabs). Communication occurs through message passing using postMessage() and onmessage event handlers. Workers cannot directly access DOM, window object, or parent object, but can use XMLHttpRequest, setTimeout, and most JavaScript features. Worker lifecycle includes creation with new Worker('script.js'), message exchange, and termination with terminate(). Use cases include background data processing, real-time calculations, parsing large datasets, and offloading intensive computations. Limitations include no DOM access, limited API availability, and browser support considerations. Best practices include error handling, proper resource cleanup, and fallback strategies for unsupported browsers.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Gcp7triXFjg',
        'https://www.youtube.com/watch?v=k8yJCeuP6I8'
      ],
      externalLinks: [
        { title: 'Web Workers Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API' },
        { title: 'HTML5 Web Workers', url: 'https://www.w3schools.com/html/html5_webworkers.asp' }
      ]
    }
  },
  {
    id: 'html5-drag-drop',
    name: 'HTML5 Drag and Drop',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit I',
    content: {
      introduction: 'HTML5 Drag and Drop API enables intuitive user interactions by allowing elements to be dragged and dropped within web applications.',
      definition: 'HTML5 Drag and Drop is a native browser API that allows users to drag elements from one location and drop them in another location.',
      realWorldExample: 'Project management tools like Trello use drag and drop to move cards between different columns, providing intuitive task organization.',
      realWorldUse: 'Applied in file uploads, sortable lists, kanban boards, image galleries, and interactive user interfaces.',
      importance: 'Enhances user experience by providing intuitive, desktop-like interactions in web applications.',
      detailedExplanation: `Drag and Drop involves several events: dragstart (drag begins), drag (element being dragged), dragenter (dragged element enters drop target), dragover (dragged element over drop target), dragleave (dragged element leaves drop target), drop (element dropped), and dragend (drag operation complete). Elements must have draggable="true" attribute to be draggable. The dataTransfer object carries data during drag operations and provides methods like setData(), getData(), and setDragImage(). Drop zones must prevent default behavior on dragover and drop events. Data types include text/plain, text/html, and custom formats. Visual feedback can be provided through CSS classes and drag images. Security restrictions prevent cross-origin data access. Best practices include accessibility considerations, touch device support, and graceful degradation for unsupported browsers.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=C22hQKE_32c',
        'https://www.youtube.com/watch?v=k8yJCeuP6I8'
      ],
      externalLinks: [
        { title: 'HTML5 Drag and Drop', url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API' },
        { title: 'Drag Drop Tutorial', url: 'https://www.w3schools.com/html/html5_draganddrop.asp' }
      ]
    }
  },
  {
    id: 'client-side-scripting-intro',
    name: 'Introduction to Client-Side Scripting',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit I',
    content: {
      introduction: 'Client-side scripting involves running code in the user\'s browser to create dynamic, interactive web experiences.',
      definition: 'Client-side scripting is the execution of scripts in a web browser to enhance user interfaces and provide dynamic functionality.',
      realWorldExample: 'Form validation on registration pages uses client-side scripting to check email formats and password strength before submitting to the server.',
      realWorldUse: 'Applied in form validation, user interface interactions, animations, real-time updates, and enhancing user experience.',
      importance: 'Enables interactive web applications, reduces server load, and provides immediate feedback to users.',
      detailedExplanation: `Client-side scripting primarily uses JavaScript, though historically included VBScript and others. Advantages include immediate user feedback, reduced server requests, offline functionality, and rich user interfaces. Disadvantages include security vulnerabilities, browser compatibility issues, and dependence on user settings. Common tasks include DOM manipulation, event handling, form validation, AJAX requests, and user interface enhancements. Security considerations include XSS prevention, input validation, and avoiding sensitive operations. Modern approaches include frameworks like React, Vue, and Angular that provide structured approaches to client-side development. Best practices include progressive enhancement, graceful degradation, performance optimization, and accessibility compliance. The evolution includes ES6+ features, module systems, and build tools that enhance development productivity.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=PkZNo7MFNFg',
        'https://www.youtube.com/watch?v=k8yJCeuP6I8'
      ],
      externalLinks: [
        { title: 'Client-Side Scripting', url: 'https://www.geeksforgeeks.org/client-side-scripting/' },
        { title: 'JavaScript Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript' }
      ]
    }
  },
  {
    id: 'javascript-basics',
    name: 'JavaScript Basics',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit I',
    content: {
      introduction: 'JavaScript basics cover fundamental concepts including syntax, data types, variables, and control structures essential for web development.',
      definition: 'JavaScript basics encompass the core language features and syntax needed to write functional JavaScript programs.',
      realWorldExample: 'Interactive calculators on websites use JavaScript basics like variables to store numbers and operators to perform calculations.',
      realWorldUse: 'Applied in all JavaScript programming, from simple scripts to complex web applications and server-side development.',
      importance: 'Provides the foundation for all JavaScript development and modern web application programming.',
      detailedExplanation: `JavaScript basics include: Variables declared with var, let, or const keywords, each with different scoping rules. Data types include primitives (number, string, boolean, null, undefined, symbol, bigint) and objects. Operators include arithmetic (+, -, *, /, %), comparison (==, ===, !=, !==, <, >), logical (&&, ||, !), and assignment (=, +=, -=). Control structures include if/else statements, switch statements, for loops, while loops, and do-while loops. Functions are first-class objects that can be declared, assigned to variables, and passed as parameters. Comments use // for single-line and /* */ for multi-line. JavaScript is dynamically typed, case-sensitive, and supports both procedural and object-oriented programming paradigms. Modern JavaScript (ES6+) introduces features like arrow functions, template literals, destructuring, and modules.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=PkZNo7MFNFg',
        'https://www.youtube.com/watch?v=W6NZfCO5SIk'
      ],
      externalLinks: [
        { title: 'JavaScript Tutorial', url: 'https://www.w3schools.com/js/' },
        { title: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' }
      ]
    }
  },
  {
    id: 'javascript-functions',
    name: 'JavaScript Functions',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit I',
    content: {
      introduction: 'JavaScript functions are reusable blocks of code that perform specific tasks and are fundamental to JavaScript programming.',
      definition: 'JavaScript functions are objects that contain executable code and can be invoked with parameters to perform operations and return values.',
      realWorldExample: 'E-commerce websites use functions to calculate shipping costs, validate credit card numbers, and update shopping cart totals.',
      realWorldUse: 'Applied in code organization, event handling, calculations, data processing, and creating modular, maintainable applications.',
      importance: 'Essential for code reusability, organization, and implementing complex logic in JavaScript applications.',
      detailedExplanation: `Functions can be declared using function declarations (function name() {}), function expressions (var func = function() {}), or arrow functions (const func = () => {}). Parameters allow passing data into functions, with support for default parameters, rest parameters (...args), and destructuring. Return statements specify function output; functions without explicit return statements return undefined. Scope determines variable accessibility: functions create their own scope, and variables can be local or global. Closures allow inner functions to access outer function variables even after the outer function returns. Higher-order functions can accept other functions as parameters or return functions. Modern features include arrow functions with lexical this binding, async/await for asynchronous operations, and generator functions for iterative processing.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=N8ap4k_1QEQ',
        'https://www.youtube.com/watch?v=PkZNo7MFNFg'
      ],
      externalLinks: [
        { title: 'JavaScript Functions', url: 'https://www.w3schools.com/js/js_functions.asp' },
        { title: 'MDN Functions Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions' }
      ]
    }
  },
  {
    id: 'javascript-objects',
    name: 'JavaScript Objects',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit I',
    content: {
      introduction: 'JavaScript objects are collections of key-value pairs that represent complex data structures and form the basis of object-oriented programming.',
      definition: 'JavaScript objects are data structures that store collections of properties (key-value pairs) and methods (functions) in a single entity.',
      realWorldExample: 'User profiles on social media platforms are represented as objects containing properties like name, email, age, and methods like updateProfile().',
      realWorldUse: 'Applied in data modeling, API responses, configuration settings, and representing real-world entities in applications.',
      importance: 'Fundamental to JavaScript programming, enabling complex data representation and object-oriented programming patterns.',
      detailedExplanation: `Objects can be created using object literals ({}), constructor functions, Object.create(), or ES6 classes. Properties are accessed using dot notation (obj.property) or bracket notation (obj['property']). Methods are functions stored as object properties. Object properties can be added, modified, or deleted dynamically. Prototypal inheritance allows objects to inherit properties and methods from other objects. Built-in objects include Object, Array, Date, RegExp, and Math. Object methods include Object.keys(), Object.values(), Object.entries(), Object.assign(), and Object.freeze(). ES6 introduced features like computed property names, method shorthand, and destructuring assignment. Objects are reference types, meaning variables store references to objects rather than the objects themselves.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=PFmuCDHHpwk',
        'https://www.youtube.com/watch?v=PkZNo7MFNFg'
      ],
      externalLinks: [
        { title: 'JavaScript Objects', url: 'https://www.w3schools.com/js/js_objects.asp' },
        { title: 'MDN Objects Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects' }
      ]
    }
  },
  {
    id: 'javascript-hoisting',
    name: 'JavaScript Hoisting',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit I',
    content: {
      introduction: 'Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope during compilation.',
      definition: 'Hoisting is JavaScript\'s default behavior of moving declarations to the top of the current scope before code execution.',
      realWorldExample: 'A function can be called before its declaration in the code due to hoisting, but variables declared with var are undefined until assigned.',
      realWorldUse: 'Understanding hoisting helps debug code, avoid common errors, and write more predictable JavaScript programs.',
      importance: 'Critical for understanding JavaScript execution context and avoiding common programming errors related to variable and function declarations.',
      detailedExplanation: `Hoisting affects different declarations differently: Function declarations are fully hoisted, meaning they can be called before their declaration. Variable declarations with var are hoisted but initialized with undefined. Let and const declarations are hoisted but remain in a "temporal dead zone" until their declaration is reached. Function expressions and arrow functions are not hoisted like function declarations. The temporal dead zone prevents accessing let/const variables before declaration, throwing ReferenceError. Best practices include declaring variables at the top of their scope, using let/const instead of var, and understanding that only declarations are hoisted, not initializations. Modern JavaScript development often uses linters and strict mode to catch hoisting-related issues early.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Fnlnw8uY6jo',
        'https://www.youtube.com/watch?v=PkZNo7MFNFg'
      ],
      externalLinks: [
        { title: 'JavaScript Hoisting', url: 'https://www.w3schools.com/js/js_hoisting.asp' },
        { title: 'MDN Hoisting Guide', url: 'https://developer.mozilla.org/en-US/docs/Glossary/Hoisting' }
      ]
    }
  },
  {
    id: 'javascript-arrays',
    name: 'JavaScript Arrays',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit I',
    content: {
      introduction: 'JavaScript arrays are ordered collections of elements that provide powerful methods for data manipulation and iteration.',
      definition: 'JavaScript arrays are list-like objects that store multiple values in a single variable and provide methods for manipulation and iteration.',
      realWorldExample: 'Todo list applications use arrays to store task items and array methods like push(), splice(), and filter() to manage the list.',
      realWorldUse: 'Applied in data storage, list management, data processing, and implementing complex data structures.',
      importance: 'Essential for handling collections of data and implementing many algorithms and data processing operations.',
      detailedExplanation: `Arrays are created using array literals ([]) or Array constructor. Elements are accessed using zero-based indexing (arr[0]). Key methods include: Mutating methods like push(), pop(), shift(), unshift(), splice(), sort(), and reverse() that modify the original array. Non-mutating methods like concat(), slice(), join(), indexOf(), and includes() that return new arrays or values. Iteration methods like forEach(), map(), filter(), reduce(), find(), and some() that process array elements. Arrays are objects with numeric property names and a length property. They can store any data type and have dynamic length. ES6 introduced features like spread operator (...), destructuring assignment, Array.from(), and Array.of(). Modern JavaScript emphasizes functional programming approaches using array methods for data transformation.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=7W4pQQ20nJg',
        'https://www.youtube.com/watch?v=PkZNo7MFNFg'
      ],
      externalLinks: [
        { title: 'JavaScript Arrays', url: 'https://www.w3schools.com/js/js_arrays.asp' },
        { title: 'MDN Array Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array' }
      ]
    }
  }
];