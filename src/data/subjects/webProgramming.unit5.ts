import { Topic } from '../syllabus';

export const webProgrammingUnit5: Topic[] = [
  {
    id: 'web-security-basics',
    name: 'Web Security Fundamentals',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit V',
    content: {
      introduction: 'Web security is crucial for protecting applications and users from various cyber threats and vulnerabilities.',
      definition: 'Web security involves implementing measures to protect web applications from attacks, data breaches, and unauthorized access.',
      realWorldExample: 'Banking websites use HTTPS, input validation, and secure authentication to protect customer financial data.',
      realWorldUse: 'Essential for all web applications, especially those handling sensitive data like personal information and payments.',
      importance: 'Critical for user trust, legal compliance, and protecting against financial and reputational damage.',
      detailedExplanation: `Common web security threats include XSS (Cross-Site Scripting), CSRF (Cross-Site Request Forgery), SQL injection, and session hijacking. Security measures include HTTPS encryption, input validation and sanitization, secure authentication, and proper session management. Content Security Policy (CSP) prevents XSS attacks. OWASP Top 10 provides guidelines for common vulnerabilities. Security headers like HSTS, CSP, and X-Frame-Options enhance protection. Regular security audits and penetration testing are essential for maintaining security.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
        { title: 'Web Security', url: 'https://developer.mozilla.org/en-US/docs/Web/Security' }
      ]
    }
  },
  {
    id: 'web-performance-optimization',
    name: 'Web Performance Optimization',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit V',
    content: {
      introduction: 'Performance optimization ensures web applications load quickly and provide smooth user experiences.',
      definition: 'Web performance optimization involves techniques to improve loading speed, responsiveness, and user experience of web applications.',
      realWorldExample: 'Google prioritizes page speed in search rankings, making performance crucial for SEO and user retention.',
      realWorldUse: 'Applied in all web applications to improve user experience, reduce bounce rates, and increase conversions.',
      importance: 'Directly impacts user experience, SEO rankings, and business metrics like conversion rates.',
      detailedExplanation: `Performance optimization includes image optimization, code minification, lazy loading, caching strategies, and CDN usage. Core Web Vitals (LCP, FID, CLS) measure user experience. Bundle optimization reduces JavaScript and CSS file sizes. Server-side rendering and static generation improve initial load times. Performance monitoring tools include Lighthouse, WebPageTest, and browser developer tools. Mobile performance is especially important with increasing mobile usage. Progressive Web Apps (PWAs) provide app-like experiences with offline capabilities.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'Web Performance', url: 'https://developer.mozilla.org/en-US/docs/Web/Performance' },
        { title: 'Lighthouse', url: 'https://developers.google.com/web/tools/lighthouse' }
      ]
    }
  },
  {
    id: 'web-testing-strategies',
    name: 'Web Testing Strategies',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit V',
    content: {
      introduction: 'Comprehensive testing ensures web applications work correctly across different browsers, devices, and scenarios.',
      definition: 'Web testing involves verifying that web applications function correctly, perform well, and provide good user experience.',
      realWorldExample: 'E-commerce sites test checkout processes across different browsers to ensure all customers can complete purchases.',
      realWorldUse: 'Used in all web development projects to ensure quality, reliability, and user satisfaction.',
      importance: 'Essential for maintaining code quality, preventing bugs, and ensuring reliable user experiences.',
      detailedExplanation: `Testing types include unit testing (individual components), integration testing (component interactions), end-to-end testing (user workflows), and visual regression testing (UI consistency). Testing tools include Jest, Cypress, Selenium, and Playwright. Cross-browser testing ensures compatibility across different browsers and versions. Mobile testing covers various devices and screen sizes. Performance testing measures load times and responsiveness. Accessibility testing ensures compliance with WCAG guidelines. Automated testing integrates with CI/CD pipelines for continuous quality assurance.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'Web Testing', url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing' },
        { title: 'Jest Testing Framework', url: 'https://jestjs.io/' }
      ]
    }
  },
  {
    id: 'web-deployment-strategies',
    name: 'Web Deployment and DevOps',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit V',
    content: {
      introduction: 'Deployment strategies ensure web applications are reliably delivered to users with minimal downtime.',
      definition: 'Web deployment involves the process of making web applications available to users through various hosting and delivery methods.',
      realWorldExample: 'Netflix uses blue-green deployment to update their streaming service without interrupting user experience.',
      realWorldUse: 'Used in all web applications to deliver updates, maintain uptime, and scale with user demand.',
      importance: 'Critical for business continuity, user experience, and maintaining competitive advantage.',
      detailedExplanation: `Deployment strategies include blue-green deployment, canary releases, and rolling updates. CI/CD (Continuous Integration/Continuous Deployment) automates testing and deployment processes. Cloud platforms like AWS, Google Cloud, and Azure provide scalable hosting solutions. Static site generators and CDNs improve performance for content-heavy sites. Containerization with Docker enables consistent deployment across environments. Monitoring and logging tools track application performance and user behavior. Infrastructure as Code (IaC) manages deployment environments programmatically.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'Web Deployment', url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment' },
        { title: 'CI/CD Pipeline', url: 'https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment' }
      ]
    }
  },
  {
    id: 'progressive-web-apps',
    name: 'Progressive Web Applications (PWAs)',
    semester: 3,
    subject: 'Web Programming',
    unit: 'Unit V',
    content: {
      introduction: 'Progressive Web Apps combine the best of web and mobile applications, providing app-like experiences.',
      definition: 'PWAs are web applications that use modern web capabilities to deliver app-like experiences to users.',
      realWorldExample: 'Twitter Lite and Pinterest use PWA technology to provide fast, reliable experiences even on slow networks.',
      realWorldUse: 'Used in applications requiring offline functionality, push notifications, and app-like user experiences.',
      importance: 'Provides better user engagement, reduced development costs, and improved performance compared to native apps.',
      detailedExplanation: `PWA features include service workers for offline functionality, web app manifests for app-like installation, and push notifications for user engagement. Service workers act as proxies between web applications and network, enabling caching and offline access. Web app manifests provide metadata for installation and appearance. PWAs must be served over HTTPS for security. Performance benefits include faster loading and reduced data usage. Development considerations include cross-browser compatibility and progressive enhancement.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'Progressive Web Apps', url: 'https://web.dev/progressive-web-apps/' },
        { title: 'Service Workers', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API' }
      ]
    }
  }
]; 