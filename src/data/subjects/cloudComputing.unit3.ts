import { Topic } from '../syllabus';

export const cloudComputingUnit3: Topic[] = [
  {
    id: 'evolution-of-computing-paradigms',
    name: 'Evolution of Computing Paradigms',
    semester: 3,
    subject: 'Cloud Computing',
    unit: 'Unit III',
    content: {
      introduction: 'Computing paradigms have evolved from centralized mainframes to distributed, utility, grid, and now cloud computing, each offering new capabilities and efficiencies.',
      definition: 'A computing paradigm is a model or pattern of computing that defines how resources are organized, managed, and accessed.',
      realWorldExample: 'Grid computing is used in scientific research for large-scale simulations, while cloud computing powers services like Google Drive and AWS.',
      realWorldUse: 'Used in scientific research, enterprise IT, web services, and large-scale data processing.',
      importance: 'Understanding the evolution helps in appreciating the benefits and challenges of cloud computing and its place in modern IT.',
      detailedExplanation: `The evolution of computing paradigms includes:
- Centralized Computing: Early computers were large mainframes accessed via terminals.
- Distributed Computing: Resources are spread across multiple systems, improving reliability and scalability.
- Utility Computing: Computing resources are provided as a metered service, similar to utilities like electricity.
- Grid Computing: Combines resources from multiple locations to solve large problems, often used in research.
- Cloud Computing: Delivers scalable, on-demand resources over the internet, abstracting infrastructure and enabling rapid innovation. Each paradigm builds on the previous, increasing flexibility, scalability, and accessibility.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2LaAJq1lB1Q'
      ],
      externalLinks: [
        { title: 'Evolution of Computing Paradigms', url: 'https://www.geeksforgeeks.org/computing-paradigms/' }
      ]
    }
  },
  {
    id: 'platform-as-a-service',
    name: 'Platform as a Service (PaaS)',
    semester: 3,
    subject: 'Cloud Computing',
    unit: 'Unit III',
    content: {
      introduction: 'PaaS provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining infrastructure.',
      definition: 'Platform as a Service (PaaS) is a cloud computing model that delivers hardware and software tools over the internet, typically for application development.',
      realWorldExample: 'Google App Engine allows developers to deploy applications without managing servers or runtime environments.',
      realWorldUse: 'Used for web application development, API hosting, and rapid prototyping.',
      importance: 'PaaS accelerates development, reduces operational burden, and enables innovation by abstracting infrastructure management.',
      detailedExplanation: `PaaS offers a complete development and deployment environment in the cloud, including runtime, middleware, development tools, database management, and more. Developers focus on writing code while the provider manages infrastructure, scaling, and security. PaaS supports multiple programming languages and frameworks, and often includes CI/CD tools, monitoring, and analytics. Examples: Google App Engine, Microsoft Azure App Service, Heroku. Advantages: Faster development, lower operational overhead, easy scaling. Disadvantages: Less control over environment, potential vendor lock-in, limited customization.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2LaAJq1lB1Q'
      ],
      externalLinks: [
        { title: 'What is PaaS?', url: 'https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-paas/' }
      ]
    }
  },
  {
    id: 'cloud-platform-services',
    name: 'Cloud Platform Services',
    semester: 3,
    subject: 'Cloud Computing',
    unit: 'Unit III',
    content: {
      introduction: 'Cloud platform services provide the tools and environments needed to build, deploy, and manage cloud applications.',
      definition: 'Cloud platform services are a set of cloud-based tools and services that support application development, deployment, and management.',
      realWorldExample: 'AWS Elastic Beanstalk automates deployment and scaling of web applications and services.',
      realWorldUse: 'Used for hosting web apps, managing databases, and automating deployment pipelines.',
      importance: 'They simplify application lifecycle management and enable rapid scaling and integration with other cloud services.',
      detailedExplanation: `Cloud platform services include application hosting, database management, development frameworks, monitoring, and analytics. They provide APIs, SDKs, and integration tools for developers. Examples: AWS Elastic Beanstalk, Google Cloud Platform, Microsoft Azure. These services abstract infrastructure management, automate scaling, and offer built-in security and compliance features. They support integration with public and private clouds, enabling hybrid and multi-cloud strategies.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2LaAJq1lB1Q'
      ],
      externalLinks: [
        { title: 'Cloud Platform Services', url: 'https://aws.amazon.com/what-is-cloud-platform/' }
      ]
    }
  },
  {
    id: 'integration-private-public-cloud',
    name: 'Integration of Private and Public Cloud',
    semester: 3,
    subject: 'Cloud Computing',
    unit: 'Unit III',
    content: {
      introduction: 'Hybrid cloud integrates private and public cloud environments, enabling data and application portability and flexibility.',
      definition: 'Integration of private and public cloud refers to connecting on-premises (private) infrastructure with public cloud services to form a hybrid cloud.',
      realWorldExample: 'A company keeps sensitive data on a private cloud but uses public cloud for scalable web hosting.',
      realWorldUse: 'Used in regulated industries, disaster recovery, and dynamic workload management.',
      importance: 'Hybrid integration enables organizations to optimize costs, performance, and compliance by leveraging both environments.',
      detailedExplanation: `Hybrid cloud integration involves connecting private and public cloud resources, allowing data and applications to move between them. This enables organizations to keep sensitive workloads on-premises while using public cloud for scalability and innovation. Key technologies include VPNs, APIs, and cloud management platforms. Challenges include ensuring security, data consistency, and seamless integration. Benefits: Flexibility, cost optimization, business continuity. Drawbacks: Increased complexity, integration challenges, potential security risks.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2LaAJq1lB1Q'
      ],
      externalLinks: [
        { title: 'Hybrid Cloud Integration', url: 'https://www.ibm.com/cloud/learn/hybrid-cloud' }
      ]
    }
  },
  {
    id: 'paas-advantages-disadvantages',
    name: 'Advantages and Disadvantages of PaaS',
    semester: 3,
    subject: 'Cloud Computing',
    unit: 'Unit III',
    content: {
      introduction: 'PaaS offers many benefits for developers and businesses, but also comes with certain limitations and risks.',
      definition: 'Advantages and disadvantages of PaaS refer to the pros and cons of using platform services for application development and deployment.',
      realWorldExample: 'A startup uses Heroku (PaaS) to quickly launch a web app, but later faces challenges migrating to a different provider.',
      realWorldUse: 'Used in rapid prototyping, scalable web services, and agile development environments.',
      importance: 'Weighing the pros and cons helps organizations decide if PaaS is the right fit for their needs.',
      detailedExplanation: `Advantages: Faster time-to-market, reduced infrastructure management, easy scaling, integrated development tools, and cost efficiency for small teams. Disadvantages: Limited control over environment, potential vendor lock-in, less flexibility for custom configurations, and possible security/compliance concerns. Organizations must assess their requirements and long-term strategy before adopting PaaS.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2LaAJq1lB1Q'
      ],
      externalLinks: [
        { title: 'PaaS Pros and Cons', url: 'https://www.geeksforgeeks.org/advantages-and-disadvantages-of-paas/' }
      ]
    }
  }
]; 