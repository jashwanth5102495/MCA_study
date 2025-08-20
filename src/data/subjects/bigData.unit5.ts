import { Topic } from '../syllabus';

export const bigDataUnit5: Topic[] = [
  {
    id: 'pig-introduction-execution',
    name: 'Pig: Introduction and Execution Modes',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit V',
    content: {
      introduction: 'Apache Pig is a high-level platform for creating programs that run on Hadoop, using a scripting language called Pig Latin.',
      definition: 'Pig is a platform for analyzing large datasets using a high-level scripting language (Pig Latin) that compiles to MapReduce jobs for execution on Hadoop.',
      realWorldExample: 'Twitter uses Pig to process billions of tweets daily for analytics, transforming raw tweet data into structured insights for business intelligence.',
      realWorldUse: 'Used in ETL operations, data transformation, log analysis, and any scenario requiring complex data processing workflows.',
      importance: 'Simplifies big data processing by providing a SQL-like language that abstracts MapReduce complexity while maintaining scalability.',
      detailedExplanation: `Pig operates in two execution modes: Local mode runs on a single machine using local file system, ideal for development and testing with small datasets. MapReduce mode runs on Hadoop clusters, processing large datasets across multiple nodes. Pig Latin scripts are compiled into MapReduce jobs automatically, optimizing execution plans for efficiency. The platform includes Grunt shell for interactive development, allowing developers to test and debug scripts incrementally. Pig supports various data types including scalars, complex types (bags, tuples, maps), and user-defined functions for custom processing. The execution engine optimizes queries through techniques like early filtering, projection pushdown, and join optimization. Integration with Hadoop ecosystem enables seamless data flow between HDFS, Hive, and other tools.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=PQb9I-8986s',
        'https://www.youtube.com/watch?v=MfF750YVDxM'
      ],
      externalLinks: [
        { title: 'Apache Pig Tutorial', url: 'https://pig.apache.org/docs/latest/start.html' },
        { title: 'Pig vs MapReduce', url: 'https://www.tutorialspoint.com/apache_pig/apache_pig_introduction.htm' }
      ]
    }
  },
  {
    id: 'pig-latin-udfs',
    name: 'Pig Latin and User Defined Functions',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit V',
    content: {
      introduction: 'Pig Latin is a dataflow language that describes data transformations, while UDFs extend functionality with custom processing logic.',
      definition: 'Pig Latin is a high-level dataflow language for expressing data analysis programs, with User Defined Functions (UDFs) providing extensibility for custom operations.',
      realWorldExample: 'E-commerce companies use Pig Latin to analyze customer purchase patterns and create custom UDFs for specialized recommendation algorithms.',
      realWorldUse: 'Applied in data cleaning, transformation, aggregation, and any scenario requiring custom data processing logic.',
      importance: 'Provides powerful data manipulation capabilities while allowing developers to extend functionality for domain-specific requirements.',
      detailedExplanation: `Pig Latin supports various operations: LOAD for data input, FILTER for row selection, FOREACH for transformation, GROUP for aggregation, JOIN for combining datasets, ORDER for sorting, and STORE for output. The language handles complex data types including nested structures and supports operations like FLATTEN for unnesting. UDFs can be written in Java, Python, or JavaScript, extending Pig's capabilities for custom processing. Filter functions process individual records, eval functions transform data, and aggregate functions compute summaries. UDF development involves implementing specific interfaces and registering functions in Pig scripts. Advanced features include streaming for external program integration and macros for reusable code blocks. Performance optimization includes understanding execution plans and data locality principles.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=PQb9I-8986s',
        'https://www.youtube.com/watch?v=MfF750YVDxM'
      ],
      externalLinks: [
        { title: 'Pig Latin Reference', url: 'https://pig.apache.org/docs/latest/basic.html' },
        { title: 'Pig UDF Tutorial', url: 'https://www.tutorialspoint.com/apache_pig/apache_pig_user_defined_functions.htm' }
      ]
    }
  },
  {
    id: 'hive-shell-services',
    name: 'Hive: Shell, Services, and Metastore',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit V',
    content: {
      introduction: 'Apache Hive provides SQL-like interface to Hadoop with shell access, various services, and centralized metadata management.',
      definition: 'Hive is a data warehouse software that facilitates reading, writing, and managing large datasets in distributed storage using SQL-like queries.',
      realWorldExample: 'Netflix uses Hive to analyze viewing patterns across millions of users, running complex SQL queries on petabytes of streaming data.',
      realWorldUse: 'Used in data warehousing, business intelligence, reporting, and any application requiring SQL access to big data.',
      importance: 'Enables SQL developers to work with big data without learning MapReduce, democratizing access to Hadoop-based analytics.',
      detailedExplanation: `Hive Shell (CLI) provides interactive SQL interface for query execution and database management. HiveServer2 enables remote client connections through JDBC/ODBC drivers. Hive Metastore stores metadata about tables, partitions, and schemas in a relational database (MySQL, PostgreSQL). The metastore can run in embedded, local, or remote mode depending on deployment requirements. Hive services include HiveServer2 for client connections, Metastore service for metadata management, and WebHCat for REST API access. The architecture translates HiveQL queries into MapReduce or Spark jobs for execution. Hive supports various file formats (TextFile, SequenceFile, ORC, Parquet) and compression codecs for optimized storage and processing.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=tKNGB5IZPFE',
        'https://www.youtube.com/watch?v=MfF750YVDxM'
      ],
      externalLinks: [
        { title: 'Apache Hive Tutorial', url: 'https://hive.apache.org/index.html' },
        { title: 'Hive Architecture', url: 'https://www.tutorialspoint.com/hive/hive_architecture.htm' }
      ]
    }
  },
  {
    id: 'hiveql-tables-queries',
    name: 'HiveQL: Tables, Querying Data, and User Defined Functions',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit V',
    content: {
      introduction: 'HiveQL provides SQL-like syntax for creating tables, querying data, and extending functionality with custom functions in Hive.',
      definition: 'HiveQL is a SQL-like query language for Hive that supports table operations, data querying, and user-defined functions for big data analytics.',
      realWorldExample: 'Retail companies use HiveQL to create sales tables, run complex analytical queries, and implement custom functions for business-specific calculations.',
      realWorldUse: 'Applied in data analysis, reporting, ETL operations, and building data warehouse solutions on Hadoop.',
      importance: 'Provides familiar SQL interface for big data processing, enabling database professionals to leverage existing skills.',
      detailedExplanation: `HiveQL supports DDL operations for creating, altering, and dropping tables with various storage formats and partitioning schemes. DML operations include INSERT, UPDATE, DELETE, and LOAD DATA for data manipulation. Query operations support SELECT with joins, subqueries, window functions, and aggregations. Table types include managed tables (Hive controls data) and external tables (data stored externally). Partitioning improves query performance by organizing data into subdirectories. Bucketing distributes data across files for efficient joins and sampling. UDFs extend HiveQL with custom functions written in Java, Python, or other languages. Advanced features include views, indexes, and integration with other Hadoop ecosystem tools. Performance optimization involves understanding query execution plans and data organization strategies.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=tKNGB5IZPFE',
        'https://www.youtube.com/watch?v=MfF750YVDxM'
      ],
      externalLinks: [
        { title: 'HiveQL Language Manual', url: 'https://cwiki.apache.org/confluence/display/Hive/LanguageManual' },
        { title: 'Hive UDF Tutorial', url: 'https://www.tutorialspoint.com/hive/hive_user_defined_functions.htm' }
      ]
    }
  },
  {
    id: 'hbase-concepts-clients',
    name: 'HBase: Concepts, Clients, and Examples',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit V',
    content: {
      introduction: 'Apache HBase is a distributed, scalable NoSQL database built on top of HDFS, designed for real-time read/write access to big data.',
      definition: 'HBase is a column-family NoSQL database that provides random, real-time read/write access to large datasets stored in HDFS.',
      realWorldExample: 'Facebook uses HBase to store and serve billions of messages, photos, and user interactions with millisecond response times.',
      realWorldUse: 'Used in real-time analytics, content serving, messaging systems, and any application requiring fast access to large datasets.',
      importance: 'Bridges the gap between batch processing (Hadoop) and real-time access, enabling interactive applications on big data.',
      detailedExplanation: `HBase follows a master-slave architecture with HMaster coordinating operations and RegionServers managing data regions. Data is organized in tables with row keys, column families, and timestamps for versioning. The column-oriented storage model enables efficient compression and fast column access. Regions automatically split when they grow too large, distributing load across the cluster. Clients include Java API for programmatic access, REST API for web services, and Thrift API for multi-language support. HBase Shell provides interactive command-line interface for administration and data manipulation. Key features include automatic sharding, strong consistency, and integration with MapReduce for batch processing. Performance optimization involves proper row key design, column family organization, and region management.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=N4YhqPO9BDY',
        'https://www.youtube.com/watch?v=MfF750YVDxM'
      ],
      externalLinks: [
        { title: 'Apache HBase Tutorial', url: 'https://hbase.apache.org/book.html' },
        { title: 'HBase vs RDBMS', url: 'https://www.tutorialspoint.com/hbase/hbase_overview.htm' }
      ]
    }
  },
  {
    id: 'data-analytics-r-ml',
    name: 'Data Analytics with R: Machine Learning and Collaborative Filtering',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit V',
    content: {
      introduction: 'R provides powerful statistical computing capabilities for big data analytics, including machine learning and recommendation systems.',
      definition: 'R is a programming language and environment for statistical computing and graphics, with extensive libraries for machine learning and data analysis.',
      realWorldExample: 'Spotify uses R for music recommendation algorithms, analyzing listening patterns to suggest songs through collaborative filtering techniques.',
      realWorldUse: 'Applied in statistical analysis, predictive modeling, data visualization, and building recommendation systems.',
      importance: 'Provides comprehensive statistical and machine learning capabilities essential for extracting insights from big data.',
      detailedExplanation: `R offers extensive machine learning libraries including supervised learning (classification, regression), unsupervised learning (clustering, dimensionality reduction), and specialized techniques. Supervised learning includes algorithms like linear regression, decision trees, random forests, and support vector machines. Unsupervised learning encompasses k-means clustering, hierarchical clustering, and principal component analysis. Collaborative filtering for recommendation systems includes user-based and item-based approaches, matrix factorization, and deep learning methods. R integrates with big data platforms through packages like RHadoop, SparkR, and RHive. Data manipulation uses packages like dplyr and data.table for efficient processing. Visualization capabilities include ggplot2 for publication-quality graphics. Performance considerations involve memory management, parallel processing, and integration with distributed computing frameworks.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=_V8eKsto3Ug',
        'https://www.youtube.com/watch?v=MfF750YVDxM'
      ],
      externalLinks: [
        { title: 'R for Data Science', url: 'https://r4ds.had.co.nz/' },
        { title: 'Machine Learning in R', url: 'https://www.tutorialspoint.com/r/r_data_mining.htm' }
      ]
    }
  },
  {

    id: 'pig-database-comparison',
    name: 'Comparison of Pig with Databases',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit V',
    content: {
      introduction: 'Comparing Pig with traditional databases reveals fundamental differences in architecture, use cases, and data processing approaches.',
      definition: 'Pig differs from traditional databases in its schema-on-read approach, batch processing orientation, and distributed computing model versus ACID transactions.',
      realWorldExample: 'While a bank uses SQL databases for real-time transactions, it uses Pig for analyzing historical transaction patterns across petabytes of data.',
      realWorldUse: 'Applied in choosing appropriate tools for different data processing needs, architectural decisions, and hybrid system designs.',
      importance: 'Understanding differences helps architects and developers select the right tool for specific data processing requirements.',
      detailedExplanation: `Traditional databases use schema-on-write with predefined structures, while Pig uses schema-on-read allowing flexible data interpretation. Databases excel at OLTP with ACID properties, while Pig is designed for OLAP and batch processing. SQL databases provide real-time queries with millisecond response times, while Pig processes large datasets with higher latency but massive throughput. Databases use indexes and query optimization for fast access, while Pig leverages distributed computing for scalability. Data types differ: databases have strict typing, Pig handles semi-structured data naturally. Pig integrates with Hadoop ecosystem for big data workflows, while databases focus on consistency and reliability. Hybrid approaches often combine both: databases for operational systems and Pig for analytical processing.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=PQb9I-8986s',
        'https://www.youtube.com/watch?v=MfF750YVDxM'
      ],
      externalLinks: [
        { title: 'Pig vs SQL', url: 'https://www.tutorialspoint.com/apache_pig/apache_pig_vs_sql.htm' },
        { title: 'Big Data vs Traditional Databases', url: 'https://www.geeksforgeeks.org/difference-between-big-data-and-traditional-database/' }
      ]
    }
  },
  {
    id: 'pig-grunt-shell',
    name: 'Pig Grunt Shell',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit V',
    content: {
      introduction: 'Grunt shell provides an interactive command-line interface for executing Pig Latin commands and exploring data interactively.',
      definition: 'Grunt is Pig\'s interactive shell that allows users to execute Pig Latin statements, debug scripts, and explore data through command-line interface.',
      realWorldExample: 'Data analysts use Grunt shell to interactively explore customer data, test transformations, and prototype analytics workflows before creating production scripts.',
      realWorldUse: 'Applied in data exploration, script debugging, prototyping, and interactive data analysis during development phases.',
      importance: 'Provides essential interactive capabilities for developing and testing Pig applications efficiently.',
      detailedExplanation: `Grunt shell supports interactive execution of Pig Latin commands, allowing users to load data, apply transformations, and examine results step by step. Key features include command history, tab completion, and help system. Users can execute scripts, define aliases, and inspect data schemas interactively. The shell provides debugging capabilities through DESCRIBE and EXPLAIN commands that show data schemas and execution plans. File system commands enable data exploration and management. The shell supports both local and cluster execution modes. Advanced features include parameter substitution, macro definitions, and integration with external scripts. Best practices include using SAMPLE for large datasets, leveraging ILLUSTRATE for understanding transformations, and using DUMP sparingly for performance. The interactive nature makes it ideal for data exploration and iterative development workflows.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=PQb9I-8986s',
        'https://www.youtube.com/watch?v=MfF750YVDxM'
      ],
      externalLinks: [
        { title: 'Pig Grunt Shell', url: 'https://pig.apache.org/docs/latest/start.html#grunt' },
        { title: 'Pig Interactive Mode', url: 'https://www.tutorialspoint.com/apache_pig/apache_pig_grunt_shell.htm' }
      ]
    }
  },
  {
    id: 'pig-data-processing-operators',
    name: 'Pig Data Processing Operators',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit V',
    content: {
      introduction: 'Pig provides a comprehensive set of data processing operators for loading, transforming, filtering, and storing data in distributed environments.',
      definition: 'Pig data processing operators are built-in functions and commands that enable various data manipulation operations like filtering, grouping, joining, and aggregation.',
      realWorldExample: 'E-commerce companies use Pig operators to FILTER customer data, GROUP by demographics, JOIN with purchase history, and FOREACH to calculate metrics.',
      realWorldUse: 'Applied in ETL processes, data cleaning, aggregation tasks, and complex data transformation workflows.',
      importance: 'Essential building blocks for creating sophisticated data processing pipelines and analytical workflows.',
      detailedExplanation: `Key Pig operators include: LOAD for data input from various sources, FILTER for row selection based on conditions, FOREACH for applying transformations to each record, GROUP for aggregating data by keys, JOIN for combining datasets, ORDER for sorting results, DISTINCT for removing duplicates, UNION for combining datasets, SPLIT for dividing data into multiple relations, and STORE for saving results. Advanced operators include COGROUP for complex grouping, CROSS for Cartesian products, and SAMPLE for data sampling. Each operator has specific syntax and optimization characteristics. Operators can be chained to create complex data flows. Understanding operator execution order and optimization is crucial for performance. The operators abstract MapReduce complexity while providing powerful data manipulation capabilities.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=PQb9I-8986s',
        'https://www.youtube.com/watch?v=MfF750YVDxM'
      ],
      externalLinks: [
        { title: 'Pig Operators Reference', url: 'https://pig.apache.org/docs/latest/basic.html#operators' },
        { title: 'Pig Latin Tutorial', url: 'https://www.tutorialspoint.com/apache_pig/apache_pig_operators.htm' }
      ]
    }
  },
  {
    id: 'hive-traditional-database-comparison',
    name: 'Hive Comparison with Traditional Databases',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit V',
    content: {
      introduction: 'Hive bridges the gap between traditional SQL databases and big data processing, offering familiar interfaces with distributed computing benefits.',
      definition: 'Hive provides SQL-like interface for big data processing but differs from traditional databases in architecture, performance characteristics, and use cases.',
      realWorldExample: 'While Oracle database handles real-time banking transactions, Hive analyzes years of transaction history to identify fraud patterns and customer trends.',
      realWorldUse: 'Applied in data warehousing, business intelligence, reporting, and analytical workloads requiring SQL interface to big data.',
      importance: 'Understanding differences helps organizations choose appropriate tools and design hybrid architectures effectively.',
      detailedExplanation: `Traditional databases excel at OLTP with ACID properties, real-time queries, and complex transactions, while Hive is optimized for OLAP with eventual consistency and batch processing. Databases use row-based storage with indexes for fast lookups, while Hive uses columnar storage optimized for analytical queries. Query latency differs significantly: databases provide sub-second responses, while Hive queries may take minutes but process terabytes of data. Schema flexibility varies: databases require predefined schemas, while Hive supports schema-on-read for semi-structured data. Scalability approaches differ: databases scale vertically with powerful hardware, while Hive scales horizontally across commodity clusters. Cost models vary: databases require expensive licenses and hardware, while Hive leverages open-source software and commodity hardware. Integration patterns often combine both for comprehensive data solutions.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=tKNGB5IZPFE',
        'https://www.youtube.com/watch?v=MfF750YVDxM'
      ],
      externalLinks: [
        { title: 'Hive vs Traditional Databases', url: 'https://www.geeksforgeeks.org/difference-between-hive-and-rdbms/' },
        { title: 'SQL on Hadoop', url: 'https://www.cloudera.com/products/open-source/apache-hadoop/apache-hive.html' }
      ]
    }
  },
  {
    id: 'hbase-vs-rdbms',
    name: 'HBase Versus RDBMS',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit V',
    content: {
      introduction: 'HBase and RDBMS serve different purposes in data management, with HBase optimized for big data scenarios and RDBMS for traditional applications.',
      definition: 'HBase is a NoSQL column-family database designed for massive scale and real-time access, while RDBMS provides ACID transactions and relational data management.',
      realWorldExample: 'Facebook uses HBase to store billions of user messages with fast access times, while using MySQL for user profiles requiring complex relationships.',
      realWorldUse: 'Applied in choosing appropriate database technologies, designing hybrid architectures, and migrating from traditional to big data systems.',
      importance: 'Critical for architects and developers to understand trade-offs and select appropriate database technologies for specific requirements.',
      detailedExplanation: `HBase provides horizontal scalability across thousands of nodes, while RDBMS typically scales vertically with hardware upgrades. Data models differ: HBase uses column-family structure with flexible schemas, while RDBMS uses fixed relational schemas with foreign keys. Consistency models vary: HBase provides eventual consistency with strong consistency options, while RDBMS guarantees ACID properties. Query capabilities differ: HBase supports key-based access and range scans, while RDBMS provides complex SQL queries with joins. Performance characteristics vary: HBase excels at high-volume writes and real-time reads, while RDBMS optimizes for complex analytical queries. Operational aspects differ: HBase requires distributed systems expertise, while RDBMS has mature tooling and administration practices. Cost considerations include licensing (RDBMS) versus operational complexity (HBase). Many organizations use both technologies in complementary roles.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=N4YhqPO9BDY',
        'https://www.youtube.com/watch?v=MfF750YVDxM'
      ],
      externalLinks: [
        { title: 'HBase vs RDBMS', url: 'https://www.geeksforgeeks.org/difference-between-hbase-and-rdbms/' },
        { title: 'NoSQL vs SQL', url: 'https://www.mongodb.com/nosql-explained/nosql-vs-sql' }
      ]
    }
  },
  {
    id: 'big-sql',
    name: 'Big SQL',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit V',
    content: {
      introduction: 'Big SQL provides SQL interface to Hadoop data with enterprise-grade performance, security, and integration capabilities.',
      definition: 'Big SQL is IBM\'s SQL-on-Hadoop technology that enables standard SQL queries on big data stored in HDFS with optimized performance and enterprise features.',
      realWorldExample: 'Banks use Big SQL to run complex regulatory reports on transaction data stored in Hadoop, leveraging existing SQL skills and tools.',
      realWorldUse: 'Applied in enterprise data warehousing, business intelligence, regulatory reporting, and migrating SQL workloads to big data platforms.',
      importance: 'Enables organizations to leverage existing SQL investments while gaining big data scalability and cost benefits.',
      detailedExplanation: `Big SQL provides a standards-compliant SQL interface that works with existing BI tools, applications, and SQL skills. It offers optimized query execution through techniques like predicate pushdown, columnar processing, and parallel execution. Security features include fine-grained access control, encryption, and integration with enterprise security systems. The technology supports various data formats (Parquet, ORC, Avro) and integrates with Hadoop ecosystem tools. Performance optimizations include cost-based optimization, statistics collection, and caching mechanisms. Enterprise features include workload management, monitoring, and high availability. Big SQL bridges the gap between traditional data warehousing and big data analytics, enabling gradual migration strategies. It supports both batch and interactive queries with different performance characteristics. The technology competes with other SQL-on-Hadoop solutions like Impala, Presto, and Spark SQL.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=tKNGB5IZPFE',
        'https://www.youtube.com/watch?v=MfF750YVDxM'
      ],
      externalLinks: [
        { title: 'IBM Big SQL', url: 'https://www.ibm.com/products/big-sql' },
        { title: 'SQL on Hadoop Technologies', url: 'https://www.cloudera.com/products/open-source/apache-hadoop/apache-impala.html' }
      ]
    }
  },
  {
    id: 'case-study-investment-sectors',
    name: 'Case Study: Investment Sector Analysis',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit V',
    content: {
      introduction: 'This case study demonstrates applying big data techniques to analyze market trends and identify optimal investment sectors for companies.',
      definition: 'Investment sector analysis using big data involves processing market data, financial reports, and economic indicators to identify promising investment opportunities.',
      realWorldExample: 'Investment firms use big data analytics to process news sentiment, financial reports, and market data to identify emerging sectors like renewable energy or biotechnology.',
      realWorldUse: 'Applied in portfolio management, investment strategy, risk assessment, and financial decision-making across various industries.',
      importance: 'Demonstrates practical application of big data concepts in real-world business scenarios with measurable outcomes.',
      detailedExplanation: `The case study involves collecting data from multiple sources: financial markets, company reports, economic indicators, news sentiment, and social media trends. Data preprocessing includes cleaning financial data, normalizing different data formats, and handling missing values. Analysis techniques include time series analysis for market trends, sentiment analysis for news impact, clustering for sector grouping, and predictive modeling for future performance. Tools used include Hadoop for data storage, Spark for processing, Hive for querying, and R for statistical analysis. The methodology involves data ingestion pipelines, feature engineering, model training, and validation. Results include sector rankings, risk assessments, and investment recommendations. Success metrics include prediction accuracy, portfolio performance, and risk-adjusted returns. The case study demonstrates integration of multiple big data technologies and analytical techniques to solve complex business problems.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=_V8eKsto3Ug',
        'https://www.youtube.com/watch?v=MfF750YVDxM'
      ],
      externalLinks: [
        { title: 'Big Data in Finance', url: 'https://www.investopedia.com/articles/active-trading/040915/how-big-data-has-changed-finance.asp' },
        { title: 'Financial Analytics Case Studies', url: 'https://www.sas.com/en_us/industry/banking/financial-analytics.html' }
      ]
    }
  }]
;