import { Topic } from '../syllabus';

export const webProgrammingUnit4: Topic[] = [
  {
    id: 'modern-javascript-frameworks',
    name: 'Modern JavaScript Frameworks',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit IV',
    content: {
      introduction: 'Modern JavaScript frameworks provide structured approaches to building complex web applications.',
      definition: 'JavaScript frameworks are libraries that provide a foundation for building web applications with pre-built components and patterns.',
      realWorldExample: 'Facebook uses React for its web interface, while Google uses Angular for many of its applications.',
      realWorldUse: 'Used in large-scale web applications, single-page applications (SPAs), and complex user interfaces.',
      importance: 'Essential for building scalable, maintainable web applications and understanding modern web development.',
      detailedExplanation: `Popular frameworks include React (component-based, virtual DOM), Vue.js (progressive framework), and Angular (full-featured framework). Frameworks provide component architecture, state management, routing, and build tools. Benefits include code reusability, better organization, and development efficiency. Considerations include learning curve, bundle size, and ecosystem maturity. Modern frameworks often use virtual DOM for performance optimization and provide developer tools for debugging.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'React Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
        { title: 'Vue.js Guide', url: 'https://vuejs.org/guide/introduction.html' }
      ]
    }
  },
  {
    id: 'react-basics',
    name: 'React Fundamentals',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit IV',
    content: {
      introduction: 'React is a popular JavaScript library for building user interfaces, particularly single-page applications.',
      definition: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces, developed by Facebook.',
      realWorldExample: 'Instagram, Netflix, and Airbnb use React for their web applications to provide dynamic user experiences.',
      realWorldUse: 'Used in social media platforms, streaming services, e-commerce sites, and any application requiring dynamic interfaces.',
      importance: 'One of the most popular frontend libraries, essential for modern web development and job market.',
      detailedExplanation: `React uses JSX (JavaScript XML) to write components that look like HTML. Components are reusable UI pieces that can be composed together. React uses a virtual DOM for efficient updates and re-rendering. State management includes useState for local state and useContext/Redux for global state. Hooks (introduced in React 16.8) allow functional components to use state and lifecycle methods. React Router handles navigation in single-page applications.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'React Tutorial', url: 'https://reactjs.org/tutorial/tutorial.html' },
        { title: 'React Hooks', url: 'https://reactjs.org/docs/hooks-intro.html' }
      ]
    }
  },
  {
    id: 'vue-js-basics',
    name: 'Vue.js Fundamentals',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit IV',
    content: {
      introduction: 'Vue.js is a progressive JavaScript framework for building user interfaces with a gentle learning curve.',
      definition: 'Vue.js is a progressive framework for building user interfaces, designed to be incrementally adoptable.',
      realWorldExample: 'GitLab uses Vue.js for its web interface, providing a smooth and responsive user experience.',
      realWorldUse: 'Used in content management systems, developer tools, and applications requiring rapid development.',
      importance: 'Excellent for beginners and projects requiring quick development with good performance.',
      detailedExplanation: `Vue.js provides a template syntax that extends HTML with directives (v-if, v-for, v-model). Components are self-contained with their own template, script, and style sections. Vue's reactivity system automatically updates the DOM when data changes. Vue Router handles navigation, and Vuex manages state. Vue CLI provides project scaffolding and build tools. Vue 3 introduced Composition API for better code organization and TypeScript support.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'Vue.js Guide', url: 'https://vuejs.org/guide/introduction.html' },
        { title: 'Vue.js Tutorial', url: 'https://vuejs.org/tutorial/' }
      ]
    }
  },
  {
    id: 'angular-basics',
    name: 'Angular Fundamentals',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit IV',
    content: {
      introduction: 'Angular is a comprehensive framework for building large-scale web applications with enterprise features.',
      definition: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
      realWorldExample: 'Google uses Angular for many of its applications, including Google Ads and Google Cloud Console.',
      realWorldUse: 'Used in enterprise applications, large-scale projects, and applications requiring strict architecture.',
      importance: 'Essential for enterprise development and understanding full-featured frameworks with built-in tools.',
      detailedExplanation: `Angular uses TypeScript by default, providing better tooling and type safety. It includes dependency injection, routing, forms, HTTP client, and testing utilities out-of-the-box. Angular CLI provides project generation, building, and deployment tools. Components are the basic building blocks, with services for business logic and modules for organization. Angular Material provides pre-built UI components. RxJS integration enables reactive programming patterns.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'Angular Documentation', url: 'https://angular.io/docs' },
        { title: 'Angular Tutorial', url: 'https://angular.io/tutorial' }
      ]
    }
  },
  {
    id: 'state-management',
    name: 'State Management in Modern Frameworks',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit IV',
    content: {
      introduction: 'State management is crucial for handling data flow and application state in complex web applications.',
      definition: 'State management involves managing and synchronizing the state of an application across components and user interactions.',
      realWorldExample: 'E-commerce applications use state management to track shopping cart items, user preferences, and authentication status.',
      realWorldUse: 'Used in applications with complex data flows, real-time updates, and multiple user interactions.',
      importance: 'Essential for building scalable applications and maintaining predictable data flow.',
      detailedExplanation: `State management patterns include local state (useState in React), global state (Redux, Vuex, NgRx), and server state (React Query, SWR). Redux provides predictable state container with actions, reducers, and store. Vuex offers centralized state management for Vue applications. NgRx provides reactive state management for Angular. Modern approaches include Zustand, Recoil, and server state management libraries. Best practices include immutability, predictable updates, and separation of concerns.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'Redux Documentation', url: 'https://redux.js.org/' },
        { title: 'Vuex Guide', url: 'https://vuex.vuejs.org/' }
      ]
    }
  }
]; 