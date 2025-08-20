import { Topic } from '../syllabus';

export const bigDataUnit4: Topic[] = [
  {
    id: 'hadoop-history-ecosystem',
    name: 'History of Hadoop and Ecosystem Overview',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit IV',
    content: {
      introduction: 'Hadoop emerged as a solution to Google\'s big data challenges and evolved into a comprehensive ecosystem for distributed computing.',
      definition: 'Hadoop is an open-source framework inspired by Google\'s MapReduce and GFS papers, designed for distributed storage and processing of large datasets across commodity hardware clusters.',
      realWorldExample: 'Yahoo developed Hadoop to handle web search indexing, later adopted by Facebook, LinkedIn, and Twitter for processing petabytes of user data.',
      realWorldUse: 'Used in data warehousing, log processing, ETL operations, machine learning, and any application requiring distributed big data processing.',
      importance: 'Revolutionized big data processing by making distributed computing accessible and cost-effective for organizations of all sizes.',
      detailedExplanation: `Hadoop was created by Doug Cutting in 2005, inspired by Google's MapReduce (2004) and Google File System (2003) papers. Initially developed at Yahoo for web search, it became an Apache project in 2006. The ecosystem expanded beyond core Hadoop to include numerous tools: Hive for SQL-like queries, Pig for data flow scripting, HBase for NoSQL database, Spark for in-memory processing, Kafka for streaming, and many others. The ecosystem addresses various big data challenges including storage (HDFS), processing (MapReduce, Spark), querying (Hive, Impala), workflow management (Oozie), and monitoring (Ambari). This comprehensive toolkit enables organizations to build complete big data solutions using open-source technologies.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=aReuLtY0YMI',
        'https://www.youtube.com/watch?v=MfF750YVDxM'
      ],
      externalLinks: [
        { title: 'Hadoop History', url: 'https://hadoop.apache.org/docs/current/' },
        { title: 'Hadoop Ecosystem', url: 'https://www.edureka.co/blog/hadoop-ecosystem' }
      ]
    }
  },
  {
    id: 'hadoop-components',
    name: 'Components of Hadoop',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit IV',
    content: {
      introduction: 'Hadoop consists of four core components that work together to provide distributed storage and processing capabilities.',
      definition: 'Hadoop core components include HDFS for distributed storage, MapReduce for distributed processing, YARN for resource management, and Hadoop Common utilities.',
      realWorldExample: 'Netflix uses HDFS to store massive video files, MapReduce to process viewing analytics, and YARN to manage cluster resources efficiently.',
      realWorldUse: 'Applied in building scalable data processing pipelines, data lakes, and distributed computing applications.',
      importance: 'Understanding core components is essential for designing, implementing, and maintaining Hadoop-based big data solutions.',
      detailedExplanation: `HDFS (Hadoop Distributed File System) provides fault-tolerant storage across multiple machines with automatic replication. MapReduce enables parallel processing by dividing tasks into map and reduce phases. YARN (Yet Another Resource Negotiator) manages cluster resources and job scheduling, separating resource management from processing logic. Hadoop Common contains libraries and utilities used by other modules. Additional ecosystem components include Hive for SQL queries, Pig for data flow, HBase for NoSQL storage, Spark for in-memory processing, Kafka for streaming, Flume for data ingestion, Sqoop for database integration, Oozie for workflow management, and Zookeeper for coordination. Each component addresses specific big data challenges while integrating seamlessly with others.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=aReuLtY0YMI',
        'https://www.youtube.com/watch?v=MfF750YVDxM'
      ],
      externalLinks: [
        { title: 'Hadoop Components', url: 'https://www.tutorialspoint.com/hadoop/hadoop_enviornment_setup.htm' },
        { title: 'Hadoop Architecture', url: 'https://www.geeksforgeeks.org/hadoop-architecture/' }
      ]
    }
  },
  {
    id: 'hdfs-design-architecture',
    name: 'Hadoop Distributed File System (HDFS): Design and Architecture',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit IV',
    content: {
      introduction: 'HDFS is designed to store very large files across multiple machines with high fault tolerance and throughput.',
      definition: 'HDFS is a distributed file system that stores data across multiple nodes with automatic replication, designed for high throughput access to large datasets.',
      realWorldExample: 'Facebook stores billions of photos and videos in HDFS, automatically replicating data across multiple data centers for reliability and fast access.',
      realWorldUse: 'Used for storing large datasets, data lakes, backup systems, and any application requiring distributed, fault-tolerant storage.',
      importance: 'Provides the foundation for Hadoop ecosystem by offering reliable, scalable storage that can handle hardware failures gracefully.',
      detailedExplanation: `HDFS follows a master-slave architecture with NameNode (master) managing metadata and DataNodes (slaves) storing actual data. Files are split into blocks (default 128MB) and replicated across multiple DataNodes (default replication factor 3). The NameNode maintains the file system namespace, block locations, and metadata in memory for fast access. DataNodes periodically send heartbeats and block reports to the NameNode. HDFS is optimized for large files and sequential access patterns, with write-once, read-many semantics. Key features include fault tolerance through replication, scalability by adding nodes, and high throughput for large datasets. Limitations include high latency for small files and lack of support for concurrent writes.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=1_ly9dZnmWc',
        'https://www.youtube.com/watch?v=MfF750YVDxM'
      ],
      externalLinks: [
        { title: 'HDFS Architecture', url: 'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html' },
        { title: 'HDFS Tutorial', url: 'https://www.tutorialspoint.com/hadoop/hadoop_hdfs_overview.htm' }
      ]
    }
  },
  {
    id: 'java-interfaces-hdfs',
    name: 'Java Interfaces to HDFS',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit IV',
    content: {
      introduction: 'Java APIs provide programmatic access to HDFS operations, enabling developers to build applications that interact with the distributed file system.',
      definition: 'Java interfaces to HDFS include FileSystem API, Path classes, and various input/output streams for reading, writing, and managing files in the distributed environment.',
      realWorldExample: 'Data processing applications use Java APIs to read input files from HDFS, process data, and write results back to HDFS programmatically.',
      realWorldUse: 'Used in developing MapReduce jobs, data processing applications, ETL tools, and any Java application requiring HDFS integration.',
      importance: 'Enables developers to build custom applications that leverage HDFS capabilities for distributed data storage and processing.',
      detailedExplanation: `The FileSystem class is the main interface for HDFS operations, providing methods for file creation, deletion, reading, and writing. Configuration class manages Hadoop settings and connection parameters. Path class represents file and directory paths in HDFS. FSDataInputStream and FSDataOutputStream handle file reading and writing with support for random access and positioning. FileStatus provides file metadata including size, permissions, and modification time. The API supports both local and remote file system operations through a unified interface. Common operations include creating directories, copying files, checking file existence, and setting permissions. Error handling involves IOException for network and file system errors. Best practices include proper resource management, connection pooling, and handling distributed system failures.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=1_ly9dZnmWc',
        'https://www.youtube.com/watch?v=MfF750YVDxM'
      ],
      externalLinks: [
        { title: 'HDFS Java API', url: 'https://hadoop.apache.org/docs/current/api/' },
        { title: 'HDFS Programming', url: 'https://www.tutorialspoint.com/hadoop/hadoop_hdfs_operations.htm' }
      ]
    }
  },
  {
    id: 'hadoop-development-environment',
    name: 'Development Environment and Basic Commands',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit IV',
    content: {
      introduction: 'Setting up Hadoop development environment and mastering basic commands is essential for big data development and administration.',
      definition: 'Hadoop development environment includes installation, configuration, and command-line tools for managing HDFS, running jobs, and monitoring cluster operations.',
      realWorldExample: 'Data engineers use Hadoop commands to upload datasets, monitor job progress, and manage cluster resources in production environments.',
      realWorldUse: 'Used in cluster administration, data management, job monitoring, and development workflow for Hadoop-based applications.',
      importance: 'Provides the foundation for working with Hadoop clusters and developing big data applications effectively.',
      detailedExplanation: `Development environment setup involves installing Java, downloading Hadoop distribution, configuring environment variables, and setting up cluster modes (standalone, pseudo-distributed, or fully distributed). Basic HDFS commands include: hdfs dfs -ls (list files), -put (upload files), -get (download files), -mkdir (create directories), -rm (delete files), and -cat (view file contents). MapReduce commands include hadoop jar (run jobs), -kill (terminate jobs), and job monitoring through web interfaces. Cluster management commands handle node operations, configuration updates, and service management. Eclipse integration enables IDE-based development with debugging capabilities. Best practices include proper logging, error handling, and resource management in development workflows.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=1_ly9dZnmWc',
        'https://www.youtube.com/watch?v=aReuLtY0YMI'
      ],
      externalLinks: [
        { title: 'Hadoop Installation', url: 'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/SingleCluster.html' },
        { title: 'HDFS Commands', url: 'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HDFSCommands.html' }
      ]
    }
  },
  {

    id: 'hadoop-architecture-overview',
    name: 'Hadoop Architecture Overview',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit IV',
    content: {
      introduction: 'Hadoop architecture provides a comprehensive framework for distributed storage and processing of big data across commodity hardware clusters.',
      definition: 'Hadoop architecture consists of a master-slave topology with core components working together to provide fault-tolerant, scalable big data processing capabilities.',
      realWorldExample: 'Yahoo\'s Hadoop cluster processes web crawl data across thousands of nodes, with NameNodes managing metadata and DataNodes storing actual web page content.',
      realWorldUse: 'Used in designing scalable data processing systems, planning cluster deployments, and understanding system interactions in big data environments.',
      importance: 'Essential for system administrators, architects, and developers to understand how Hadoop components interact and scale.',
      detailedExplanation: `Hadoop architecture follows a master-slave pattern with distinct layers: Storage layer (HDFS) with NameNode managing metadata and DataNodes storing data blocks. Processing layer (MapReduce/YARN) with ResourceManager allocating resources and NodeManagers executing tasks. The architecture supports horizontal scaling by adding more nodes to the cluster. Fault tolerance is achieved through data replication and automatic failover mechanisms. The ecosystem includes additional components like Hive for SQL queries, Pig for data flow, HBase for real-time access, and Spark for in-memory processing. Network topology awareness optimizes data placement and processing. The architecture supports multi-tenancy through resource isolation and security mechanisms. Understanding the architecture is crucial for performance tuning, capacity planning, and troubleshooting distributed applications.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=aReuLtY0YMI',
        'https://www.youtube.com/watch?v=1_ly9dZnmWc'
      ],
      externalLinks: [
        { title: 'Hadoop Architecture Guide', url: 'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/ClusterSetup.html' },
        { title: 'Hadoop Components', url: 'https://www.tutorialspoint.com/hadoop/hadoop_architecture.htm' }
      ]
    }
  },
  {
    id: 'hadoop-distribution-commands',
    name: 'Hadoop Distribution and Basic Commands',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit IV',
    content: {
      introduction: 'Hadoop distributions and command-line tools provide the foundation for managing clusters and executing big data operations.',
      definition: 'Hadoop distributions are packaged versions of Hadoop with additional tools and enterprise features, while basic commands enable cluster management and data operations.',
      realWorldExample: 'Data engineers use Cloudera or Hortonworks distributions with commands like "hdfs dfs -put" to upload datasets and "yarn application -list" to monitor jobs.',
      realWorldUse: 'Applied in cluster administration, data management, job execution, and daily operations of Hadoop-based big data systems.',
      importance: 'Fundamental skills required for working with Hadoop clusters and performing routine big data operations effectively.',
      detailedExplanation: `Major Hadoop distributions include Apache Hadoop (open source), Cloudera (CDP), Hortonworks (HDP, now part of Cloudera), Amazon EMR, and Microsoft HDInsight. Each distribution provides additional enterprise features, support, and management tools. Basic HDFS commands include file operations (-ls, -put, -get, -cp, -mv, -rm), directory operations (-mkdir, -rmdir), and administrative commands (-fsck, -report). YARN commands manage applications (-application, -node, -queue) and cluster resources. MapReduce commands execute and monitor jobs. Administrative commands handle cluster operations, user management, and system monitoring. Command syntax follows Unix conventions with distributed system extensions. Mastering these commands is essential for data engineers, administrators, and developers working with Hadoop environments.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=1_ly9dZnmWc',
        'https://www.youtube.com/watch?v=aReuLtY0YMI'
      ],
      externalLinks: [
        { title: 'Hadoop Commands Reference', url: 'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HDFSCommands.html' },
        { title: 'Hadoop Distributions Comparison', url: 'https://www.cloudera.com/products/open-source/apache-hadoop.html' }
      ]
    }
  },
  {
    id: 'eclipse-development',
    name: 'Eclipse Development for Hadoop',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit IV',
    content: {
      introduction: 'Eclipse IDE provides integrated development environment for creating, debugging, and deploying Hadoop applications with enhanced productivity.',
      definition: 'Eclipse development for Hadoop involves using IDE plugins and tools to streamline the development workflow for MapReduce jobs and big data applications.',
      realWorldExample: 'Developers use Eclipse with Hadoop plugins to write MapReduce jobs with syntax highlighting, debugging capabilities, and direct cluster deployment.',
      realWorldUse: 'Applied in MapReduce development, debugging distributed applications, and creating comprehensive big data solutions with IDE support.',
      importance: 'Enhances developer productivity by providing familiar IDE features for complex distributed application development.',
      detailedExplanation: `Eclipse development for Hadoop requires installing Hadoop plugins that provide project templates, syntax highlighting, and debugging capabilities for MapReduce applications. The setup involves configuring Hadoop libraries, setting up cluster connections, and establishing development workflows. Key features include code completion for Hadoop APIs, integrated debugging for MapReduce jobs, and direct deployment to clusters. Developers can create MapReduce projects using wizards, test applications locally, and monitor job execution through IDE interfaces. The environment supports various Hadoop ecosystem tools including Hive, Pig, and HBase development. Best practices include proper project structure, version control integration, and testing strategies. Modern alternatives include IntelliJ IDEA with Hadoop plugins and cloud-based development environments that provide similar capabilities with additional collaboration features.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=1_ly9dZnmWc',
        'https://www.youtube.com/watch?v=aReuLtY0YMI'
      ],
      externalLinks: [
        { title: 'Eclipse Hadoop Plugin', url: 'https://www.eclipse.org/hadoop/' },
        { title: 'Hadoop Development Setup', url: 'https://www.tutorialspoint.com/hadoop/hadoop_enviornment_setup.htm' }
      ]
    }
  }];
