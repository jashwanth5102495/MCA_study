import { Topic } from '../syllabus';

export const cloudComputingUnit4: Topic[] = [
  {
    id: 'parallel-distributed-programming-paradigms',
    name: 'Parallel and Distributed Programming Paradigms',
    semester: 3,
    subject: 'Cloud Computing',
    unit: 'Unit IV',
    content: {
      introduction: 'Parallel and distributed programming paradigms are essential for efficiently processing large-scale data and computations in cloud environments.',
      definition: 'Parallel programming involves dividing a problem into subproblems that can be solved simultaneously, while distributed programming involves multiple computers working together to solve a problem.',
      realWorldExample: 'Weather forecasting models use parallel and distributed computing to process massive datasets and run simulations quickly.',
      realWorldUse: 'Used in scientific simulations, big data analytics, financial modeling, and cloud-based services.',
      importance: 'Enables faster processing, scalability, and efficient resource utilization in cloud computing.',
      detailedExplanation: `Parallel programming splits tasks into smaller units that run concurrently on multiple processors or cores. Distributed programming coordinates multiple computers (nodes) to work on a problem, often over a network. Common paradigms include shared memory (OpenMP), message passing (MPI), and data parallelism (MapReduce). Cloud platforms leverage these paradigms to provide scalable, high-performance computing for applications like machine learning, analytics, and simulations. Challenges include synchronization, data consistency, fault tolerance, and load balancing.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=QJ5bAwRA5mU'],
      externalLinks: [
        { title: 'Parallel Computing', url: 'https://en.wikipedia.org/wiki/Parallel_computing' },
        { title: 'Distributed Computing', url: 'https://en.wikipedia.org/wiki/Distributed_computing' }
      ]
    }
  },
  {
    id: 'mapreduce',
    name: 'MapReduce',
    semester: 3,
    subject: 'Cloud Computing',
    unit: 'Unit IV',
    content: {
      introduction: 'MapReduce is a programming model for processing and generating large datasets with a parallel, distributed algorithm.',
      definition: 'MapReduce divides a task into two phases: Map (process and filter data) and Reduce (aggregate results).',
      realWorldExample: 'Google uses MapReduce to index the web and process search queries efficiently.',
      realWorldUse: 'Used in big data analytics, log processing, and large-scale data transformations.',
      importance: 'Simplifies parallel processing of massive datasets and is foundational for many cloud data services.',
      detailedExplanation: `In the Map phase, input data is split into chunks and processed in parallel to produce key-value pairs. In the Reduce phase, these pairs are aggregated to produce the final result. MapReduce frameworks handle data distribution, fault tolerance, and task scheduling. Hadoop is the most popular open-source implementation. MapReduce is ideal for tasks like counting, sorting, and filtering large datasets. Limitations include high latency for iterative tasks and lack of real-time processing.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=JE0JE8ce1V0'],
      externalLinks: [
        { title: 'MapReduce', url: 'https://en.wikipedia.org/wiki/MapReduce' },
        { title: 'Hadoop MapReduce', url: 'https://hadoop.apache.org/docs/stable/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html' }
      ]
    }
  },
  {
    id: 'twister-iterative-mapreduce',
    name: 'Twister and Iterative MapReduce',
    semester: 3,
    subject: 'Cloud Computing',
    unit: 'Unit IV',
    content: {
      introduction: 'Twister and Iterative MapReduce extend the MapReduce model to support iterative computations, common in scientific and machine learning applications.',
      definition: 'Twister is a MapReduce runtime optimized for iterative computations, reducing overhead by reusing resources across iterations.',
      realWorldExample: 'Machine learning algorithms like k-means clustering and PageRank require multiple iterations over data, making Twister ideal.',
      realWorldUse: 'Used in scientific computing, machine learning, and graph processing.',
      importance: 'Improves efficiency for algorithms that require repeated processing of the same data.',
      detailedExplanation: `Traditional MapReduce frameworks are inefficient for iterative tasks because they reload data and reinitialize resources for each iteration. Twister addresses this by keeping data in memory and reusing map/reduce tasks, significantly reducing overhead. Iterative MapReduce is essential for algorithms that refine results over multiple passes, such as training neural networks or graph analytics. Twister also supports publish/subscribe messaging for dynamic data updates.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=JE0JE8ce1V0'],
      externalLinks: [
        { title: 'Twister Overview', url: 'https://en.wikipedia.org/wiki/Twister_(programming_language)' },
        { title: 'Iterative MapReduce', url: 'https://www.usenix.org/legacy/event/hotcloud10/tech/full_papers/Ekanayake.pdf' }
      ]
    }
  },
  {
    id: 'hadoop-library',
    name: 'Hadoop Library from Apache',
    semester: 3,
    subject: 'Cloud Computing',
    unit: 'Unit IV',
    content: {
      introduction: 'The Hadoop library from Apache provides an open-source framework for distributed storage and processing of large datasets.',
      definition: 'Hadoop is a framework that enables distributed processing of large data sets across clusters of computers using simple programming models.',
      realWorldExample: 'Yahoo! uses Hadoop to analyze web traffic and user behavior data at scale.',
      realWorldUse: 'Used in data warehousing, analytics, and large-scale data processing in enterprises.',
      importance: 'Enables organizations to store and process petabytes of data efficiently and cost-effectively.',
      detailedExplanation: `Hadoop consists of Hadoop Distributed File System (HDFS) for storage and MapReduce for processing. It is designed to scale from single servers to thousands of machines. Hadoop handles hardware failures automatically and provides high throughput access to data. The ecosystem includes tools like Hive (SQL queries), Pig (data flow scripts), and HBase (NoSQL database). Hadoop is widely adopted for big data analytics, ETL processes, and machine learning pipelines.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=JE0JE8ce1V0'],
      externalLinks: [
        { title: 'Apache Hadoop', url: 'https://hadoop.apache.org/' },
        { title: 'Hadoop Ecosystem', url: 'https://data-flair.training/blogs/hadoop-ecosystem-components/' }
      ]
    }
  },
  {
    id: 'mapping-applications',
    name: 'Mapping Applications',
    semester: 3,
    subject: 'Cloud Computing',
    unit: 'Unit IV',
    content: {
      introduction: 'Mapping applications leverage cloud computing to process and visualize geospatial data at scale.',
      definition: 'Mapping applications are software tools that display, analyze, and manage spatial or geographic data.',
      realWorldExample: 'Google Maps processes massive amounts of geospatial data to provide real-time navigation and traffic updates.',
      realWorldUse: 'Used in navigation, logistics, urban planning, and disaster management.',
      importance: 'Enables real-time decision-making and efficient resource allocation using geospatial data.',
      detailedExplanation: `Cloud-based mapping applications use distributed storage and processing to handle large geospatial datasets. Technologies like MapReduce and Hadoop process satellite imagery, GPS data, and sensor feeds. APIs and cloud services (e.g., Google Maps API, AWS Location Service) provide developers with tools to build custom mapping solutions. Challenges include data accuracy, privacy, and integration with other systems.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=QJ5bAwRA5mU'],
      externalLinks: [
        { title: 'Mapping Applications', url: 'https://en.wikipedia.org/wiki/Web_mapping' },
        { title: 'Cloud GIS', url: 'https://www.esri.com/en-us/arcgis/products/arcgis-online/overview' }
      ]
    }
  },
  {
    id: 'programming-support',
    name: 'Programming Support: Google App Engine, Amazon AWS, Cloud Software Environments, Eucalyptus, Open Nebula, OpenStack, Aneka, CloudSim',
    semester: 3,
    subject: 'Cloud Computing',
    unit: 'Unit IV',
    content: {
      introduction: 'Cloud programming support platforms provide environments and tools for developing, deploying, and managing cloud applications.',
      definition: 'Programming support in cloud computing refers to platforms and environments that offer infrastructure, services, and APIs for cloud application development.',
      realWorldExample: 'Startups use AWS or Google App Engine to quickly launch scalable web applications without managing physical servers.',
      realWorldUse: 'Used by businesses, researchers, and developers to build, test, and deploy cloud-native applications.',
      importance: 'Accelerates development, reduces operational overhead, and enables rapid scaling of applications.',
      detailedExplanation: `- Google App Engine: PaaS for building scalable web apps and mobile backends.
- Amazon AWS: Comprehensive cloud platform with IaaS, PaaS, and SaaS offerings.
- Eucalyptus, Open Nebula, OpenStack: Open-source cloud platforms for private/hybrid clouds.
- Aneka: .NET-based cloud application platform.
- CloudSim: Simulation toolkit for modeling and experimenting with cloud environments.
These platforms provide APIs, SDKs, and management tools for resource provisioning, monitoring, and automation. They support multiple programming languages and integrate with databases, storage, and analytics services.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=QJ5bAwRA5mU'],
      externalLinks: [
        { title: 'Google App Engine', url: 'https://cloud.google.com/appengine' },
        { title: 'Amazon AWS', url: 'https://aws.amazon.com/' },
        { title: 'OpenStack', url: 'https://www.openstack.org/' },
        { title: 'CloudSim', url: 'https://www.cloudbus.org/cloudsim/' }
      ]
    }
  }
]; 