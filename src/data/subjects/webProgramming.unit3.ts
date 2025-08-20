import { Topic } from '../syllabus';

export const webProgrammingUnit3: Topic[] = [
  {
    id: 'css3-advanced-features',
    name: 'CSS3 Advanced Features',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit III',
    content: {
      introduction: 'CSS3 introduces advanced styling capabilities that enable modern, visually appealing web designs.',
      definition: 'CSS3 is the latest version of Cascading Style Sheets, providing advanced layout, animation, and styling features.',
      realWorldExample: 'Modern websites use CSS3 features like flexbox and grid for responsive layouts, and animations for enhanced user experience.',
      realWorldUse: 'Used in all modern web development for styling, layouts, animations, and responsive design.',
      importance: 'Essential for creating modern, professional web applications with excellent user experience.',
      detailedExplanation: `CSS3 includes advanced selectors, box model improvements, flexbox and grid layouts, transforms and transitions, animations, media queries for responsive design, and advanced typography features. Flexbox provides one-dimensional layouts, while CSS Grid enables two-dimensional layouts. Transforms allow 2D and 3D transformations, while transitions and animations create smooth effects. Media queries enable responsive design across different screen sizes. CSS custom properties (variables) improve maintainability and theming capabilities.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'CSS3 Tutorial', url: 'https://www.w3schools.com/css/css3_intro.asp' },
        { title: 'CSS Grid Layout', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout' }
      ]
    }
  },
  {
    id: 'responsive-web-design',
    name: 'Responsive Web Design',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit III',
    content: {
      introduction: 'Responsive web design ensures websites work well on all devices, from desktop computers to mobile phones.',
      definition: 'Responsive web design is an approach that makes web pages render well on a variety of devices and window or screen sizes.',
      realWorldExample: 'News websites like CNN automatically adjust their layout and content for mobile devices, tablets, and desktop computers.',
      realWorldUse: 'Used in all modern web applications to ensure accessibility and usability across different devices.',
      importance: 'Critical for user experience, SEO, and reaching users on various devices and screen sizes.',
      detailedExplanation: `Responsive design uses fluid grids, flexible images, and media queries to adapt layouts to different screen sizes. Mobile-first approach prioritizes mobile design and progressively enhances for larger screens. Breakpoints define when layouts change (common breakpoints: 768px, 1024px, 1200px). CSS Grid and Flexbox provide powerful tools for responsive layouts. Images and media should be responsive using max-width and object-fit properties. Performance considerations include optimizing images and reducing unnecessary content on mobile devices.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'Responsive Web Design', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design' },
        { title: 'CSS Media Queries', url: 'https://www.w3schools.com/css/css3_mediaqueries.asp' }
      ]
    }
  },
  {
    id: 'css-preprocessors',
    name: 'CSS Preprocessors (Sass, Less)',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit III',
    content: {
      introduction: 'CSS preprocessors extend CSS with programming features like variables, nesting, and mixins.',
      definition: 'CSS preprocessors are scripting languages that extend CSS and compile to standard CSS, adding features like variables, nesting, and functions.',
      realWorldExample: 'Large web applications use Sass to organize styles with variables for colors and fonts, making maintenance easier.',
      realWorldUse: 'Used in large-scale web projects, design systems, and applications requiring maintainable and organized CSS.',
      importance: 'Improves CSS maintainability, reduces repetition, and enables better organization of styles.',
      detailedExplanation: `Popular preprocessors include Sass (Syntactically Awesome Style Sheets) and Less. Features include variables for reusable values, nesting for better organization, mixins for reusable code blocks, functions for calculations, and partials for modular CSS. Sass provides two syntaxes: SCSS (similar to CSS) and Sass (indented syntax). Compilation tools convert preprocessor code to standard CSS. Best practices include organizing files by component or feature, using meaningful variable names, and avoiding deep nesting.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'Sass Documentation', url: 'https://sass-lang.com/' },
        { title: 'Less Documentation', url: 'https://lesscss.org/' }
      ]
    }
  },
  {
    id: 'css-frameworks',
    name: 'CSS Frameworks (Bootstrap, Tailwind)',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit III',
    content: {
      introduction: 'CSS frameworks provide pre-built components and utilities to accelerate web development.',
      definition: 'CSS frameworks are collections of pre-written CSS and JavaScript code that provide common UI components and layout systems.',
      realWorldExample: 'Many corporate websites use Bootstrap for consistent, professional-looking interfaces with minimal custom development.',
      realWorldUse: 'Used in rapid prototyping, consistent design systems, and projects requiring quick development with professional appearance.',
      importance: 'Accelerates development, ensures consistency, and provides cross-browser compatibility.',
      detailedExplanation: `Popular frameworks include Bootstrap (component-based), Tailwind CSS (utility-first), Foundation, and Material-UI. Bootstrap provides a grid system, components (buttons, forms, modals), and JavaScript plugins. Tailwind CSS uses utility classes for rapid styling. Framework benefits include consistency, cross-browser compatibility, and responsive design out-of-the-box. Considerations include file size, customization limitations, and learning curve. Customization options include theming, component overrides, and selective importing.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'Bootstrap Documentation', url: 'https://getbootstrap.com/docs/' },
        { title: 'Tailwind CSS', url: 'https://tailwindcss.com/' }
      ]
    }
  },
  {
    id: 'web-accessibility',
    name: 'Web Accessibility and Standards',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit III',
    content: {
      introduction: 'Web accessibility ensures that websites are usable by people with disabilities and comply with accessibility standards.',
      definition: 'Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them.',
      realWorldExample: 'Government websites must comply with accessibility standards to ensure all citizens can access information and services.',
      realWorldUse: 'Required for government websites, educational institutions, and organizations committed to inclusive design.',
      importance: 'Ensures equal access to information and services, and is often legally required for certain organizations.',
      detailedExplanation: `Accessibility guidelines include WCAG (Web Content Accessibility Guidelines) with principles of perceivable, operable, understandable, and robust content. Techniques include semantic HTML, proper heading structure, alt text for images, keyboard navigation, color contrast, and screen reader compatibility. ARIA (Accessible Rich Internet Applications) attributes enhance accessibility for dynamic content. Testing includes automated tools, manual testing, and user testing with people with disabilities. Legal requirements vary by country and organization type.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'Web Accessibility Initiative', url: 'https://www.w3.org/WAI/' },
        { title: 'WCAG Guidelines', url: 'https://www.w3.org/WAI/WCAG21/quickref/' }
      ]
    }
  }
]; 