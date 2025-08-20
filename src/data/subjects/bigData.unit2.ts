import { Topic } from '../syllabus';

export const bigDataUnit2: Topic[] = [
  {
    id: 'data-preprocessing-overview',
    name: 'Why to Pre-process Data?',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit II',
    content: {
      introduction: 'Data preprocessing is essential for preparing raw data for analysis by cleaning, transforming, and organizing it into a suitable format.',
      definition: 'Data preprocessing involves cleaning, transforming, and preparing raw data to improve its quality and make it suitable for analysis and machine learning algorithms.',
      realWorldExample: 'E-commerce companies preprocess customer data by removing duplicates, filling missing values, and standardizing formats before building recommendation systems.',
      realWorldUse: 'Used in machine learning pipelines, data warehousing, business intelligence, and any analytical application requiring clean, consistent data.',
      importance: 'Critical for ensuring accurate analysis results, as poor quality data leads to incorrect insights and flawed decision-making.',
      detailedExplanation: `Data preprocessing is crucial because real-world data is often incomplete, inconsistent, noisy, and contains errors. Raw data may have missing values, duplicate records, inconsistent formats, outliers, and irrelevant information. Without preprocessing, analytical models produce unreliable results following the "garbage in, garbage out" principle. Preprocessing improves data quality, reduces noise, handles missing values, removes inconsistencies, and transforms data into appropriate formats. It also reduces data size through compression and dimensionality reduction, improving processing efficiency. The preprocessing phase typically consumes 60-80% of the time in data science projects, highlighting its importance in the analytical workflow.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=0xVqLJe9_CY',
        'https://www.youtube.com/watch?v=Q_9cX9aJZsE'
      ],
      externalLinks: [
        { title: 'Data Preprocessing Guide', url: 'https://www.geeksforgeeks.org/data-preprocessing-in-data-mining/' },
        { title: 'Why Data Preprocessing Matters', url: 'https://towardsdatascience.com/data-preprocessing-concepts-fa946d11c825' }
      ]
    }
  },
  {
    id: 'data-cleaning-techniques',
    name: 'Data Cleaning: Missing Values and Noisy Data',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit II',
    content: {
      introduction: 'Data cleaning addresses missing values, noisy data, and inconsistencies to improve data quality and reliability for analysis.',
      definition: 'Data cleaning is the process of detecting and correcting corrupt, inaccurate, or irrelevant parts of a dataset by handling missing values and reducing noise.',
      realWorldExample: 'Medical research datasets often have missing patient information that must be handled through imputation techniques or exclusion strategies before analysis.',
      realWorldUse: 'Applied in data warehousing, machine learning preprocessing, survey data analysis, and any application requiring high-quality datasets.',
      importance: 'Essential for ensuring analytical accuracy, as missing and noisy data can significantly bias results and lead to incorrect conclusions.',
      detailedExplanation: `Missing values occur due to equipment failures, human errors, or privacy concerns. Handling strategies include deletion (listwise or pairwise), imputation (mean, median, mode, or advanced techniques like KNN imputation), and prediction using machine learning models. Noisy data contains random errors or outliers that can distort analysis. Noise reduction techniques include binning (smoothing by local means), regression (fitting data to functions), and clustering (detecting and removing outliers). Data inconsistency arises from different data sources, formats, or entry standards. Resolution involves standardization, normalization, and establishing data quality rules. Advanced techniques include statistical methods for outlier detection and machine learning approaches for intelligent data cleaning.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=0xVqLJe9_CY',
        'https://www.youtube.com/watch?v=bgnlWpMKzD4'
      ],
      externalLinks: [
        { title: 'Data Cleaning Techniques', url: 'https://www.kdnuggets.com/2017/06/7-steps-mastering-data-preparation-python.html' },
        { title: 'Handling Missing Data', url: 'https://machinelearningmastery.com/handle-missing-data-python/' }
      ]
    }
  },
  {
    id: 'data-integration-transformation',
    name: 'Data Integration and Transformation',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit II',
    content: {
      introduction: 'Data integration combines data from multiple sources while transformation converts data into appropriate formats for analysis.',
      definition: 'Data integration merges data from different sources into a unified view, while transformation modifies data structure, format, or values to meet analytical requirements.',
      realWorldExample: 'Banks integrate customer data from multiple systems (accounts, loans, credit cards) and transform it into a unified customer profile for comprehensive analysis.',
      realWorldUse: 'Used in data warehousing, ETL processes, business intelligence, and creating master data management systems.',
      importance: 'Enables comprehensive analysis by providing a complete view of data across organizational silos and ensuring data compatibility.',
      detailedExplanation: `Data integration challenges include schema integration (resolving structural differences), entity resolution (identifying duplicate entities), and data value conflicts (handling inconsistent values). Integration approaches include materialized (data warehouse) and virtual (federated) integration. Transformation operations include normalization (scaling values to standard ranges), aggregation (summarizing data), generalization (replacing specific values with higher-level concepts), and attribute construction (creating new attributes from existing ones). Common transformations include data type conversions, unit standardization, categorical encoding, and temporal alignment. ETL (Extract, Transform, Load) processes automate these operations, while modern ELT (Extract, Load, Transform) approaches leverage big data platforms for transformation.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=bgnlWpMKzD4',
        'https://www.youtube.com/watch?v=0xVqLJe9_CY'
      ],
      externalLinks: [
        { title: 'Data Integration Guide', url: 'https://www.informatica.com/resources/articles/what-is-data-integration.html' },
        { title: 'ETL vs ELT', url: 'https://www.xplenty.com/blog/etl-vs-elt/' }
      ]
    }
  },
  {
    id: 'data-reduction-techniques',
    name: 'Data Reduction: Aggregation and Dimensionality Reduction',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit II',
    content: {
      introduction: 'Data reduction techniques decrease dataset size while preserving important information, improving processing efficiency and storage requirements.',
      definition: 'Data reduction involves techniques to reduce data volume while maintaining analytical integrity through aggregation, dimensionality reduction, compression, and sampling.',
      realWorldExample: 'Retail companies aggregate daily sales transactions into monthly summaries and use PCA to reduce customer feature dimensions for clustering analysis.',
      realWorldUse: 'Applied in data warehousing, machine learning preprocessing, visualization, and any scenario requiring efficient data processing.',
      importance: 'Essential for handling big data volumes, reducing computational costs, and improving algorithm performance while maintaining data quality.',
      detailedExplanation: `Data cube aggregation summarizes data along multiple dimensions, creating hierarchical views from detailed to summary levels. Dimensionality reduction techniques include Principal Component Analysis (PCA) for linear reduction, t-SNE for non-linear visualization, and feature selection methods. Data compression uses encoding techniques to reduce storage requirements while preserving information. Numerosity reduction includes parametric methods (fitting data to models) and non-parametric methods (sampling, clustering). Sampling techniques include random sampling, stratified sampling, and systematic sampling. The goal is maintaining data representativeness while achieving significant size reduction. Advanced techniques include wavelet transforms, singular value decomposition, and deep learning-based autoencoders for intelligent dimensionality reduction.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=FgakZw6K1QQ',
        'https://www.youtube.com/watch?v=0xVqLJe9_CY'
      ],
      externalLinks: [
        { title: 'Dimensionality Reduction', url: 'https://www.analyticsvidhya.com/blog/2018/08/dimensionality-reduction-techniques-python/' },
        { title: 'Data Reduction Techniques', url: 'https://www.geeksforgeeks.org/data-reduction-in-data-mining/' }
      ]
    }
  },
  {
    id: 'data-mining-primitives',
    name: 'Data Mining Primitives and System Architectures',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit II',
    content: {
      introduction: 'Data mining primitives define the essential components and languages needed to specify data mining tasks and system architectures.',
      definition: 'Data mining primitives are the fundamental building blocks that specify what data to mine, what knowledge to discover, and how to present results in data mining systems.',
      realWorldExample: 'A retail data mining system uses primitives to specify customer segmentation tasks, defining relevant data (purchase history), desired knowledge (customer clusters), and output format (cluster profiles).',
      realWorldUse: 'Used in designing data mining systems, specifying analytical tasks, and creating standardized interfaces for data mining operations.',
      importance: 'Provides a systematic framework for defining data mining tasks and enables the development of flexible, reusable data mining systems.',
      detailedExplanation: `Data mining primitives include task-relevant data specification (defining which data attributes and records are relevant), knowledge type specification (classification, clustering, association rules, etc.), background knowledge incorporation (concept hierarchies, constraints), interestingness measures (support, confidence, lift), and presentation formats (rules, trees, clusters). System architectures encompass database integration (tight vs. loose coupling), processing approaches (in-database vs. external), and scalability considerations. Languages like DMQL (Data Mining Query Language) provide standardized ways to express mining tasks. Modern architectures support distributed processing, real-time analytics, and integration with big data platforms like Hadoop and Spark.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=FgakZw6K1QQ',
        'https://www.youtube.com/watch?v=bgnlWpMKzD4'
      ],
      externalLinks: [
        { title: 'Data Mining Concepts', url: 'https://www.geeksforgeeks.org/data-mining/' },
        { title: 'Mining System Architecture', url: 'https://www.tutorialspoint.com/data_mining/dm_systems.htm' }
      ]
    }
  },
  {
    id: 'discretization-concept-hierarchy',
    name: 'Discretization and Concept Hierarchy',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit II',
    content: {
      introduction: 'Discretization converts continuous data into discrete intervals while concept hierarchies organize data at different abstraction levels.',
      definition: 'Discretization transforms continuous attributes into discrete categories, while concept hierarchies provide multiple levels of abstraction for data attributes.',
      realWorldExample: 'Age data (continuous) is discretized into categories like "Young (18-30)", "Middle-aged (31-50)", "Senior (51+)" for customer segmentation analysis.',
      realWorldUse: 'Applied in data preprocessing, rule mining, classification tasks, and creating meaningful data abstractions for analysis.',
      importance: 'Enables efficient processing of continuous data and provides meaningful abstractions that improve interpretability and reduce complexity.',
      detailedExplanation: `Discretization methods include equal-width binning (dividing range into equal intervals), equal-frequency binning (equal number of values per bin), and entropy-based methods (minimizing information loss). Advanced techniques use clustering, decision trees, and statistical methods for optimal bin boundaries. Concept hierarchies organize attributes at multiple abstraction levels, such as geographic hierarchies (city → state → country) or temporal hierarchies (day → month → year). They enable roll-up and drill-down operations in OLAP systems and support generalization in data mining. Automatic hierarchy generation uses clustering, statistical analysis, and domain knowledge. These techniques are crucial for handling diverse data types and enabling multi-level analysis in big data environments.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=FgakZw6K1QQ',
        'https://www.youtube.com/watch?v=0xVqLJe9_CY'
      ],
      externalLinks: [
        { title: 'Data Discretization', url: 'https://www.geeksforgeeks.org/discretization-in-data-mining/' },
        { title: 'Concept Hierarchies', url: 'https://www.tutorialspoint.com/data_mining/dm_concept_hierarchy.htm' }
      ]
    }
  },
  {

    id: 'data-compression',
    name: 'Data Compression',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit II',
    content: {
      introduction: 'Data compression reduces storage requirements and transmission time by encoding data more efficiently while preserving essential information.',
      definition: 'Data compression is the process of reducing the size of data files by eliminating redundancy and using more efficient encoding schemes.',
      realWorldExample: 'Streaming services like Netflix use advanced compression algorithms to deliver high-quality video content while minimizing bandwidth usage.',
      realWorldUse: 'Applied in data storage systems, network transmission, backup solutions, and any scenario requiring efficient data management.',
      importance: 'Essential for managing big data volumes, reducing storage costs, and improving data transfer speeds in distributed systems.',
      detailedExplanation: `Data compression techniques include lossless compression (preserves all original data) and lossy compression (acceptable data loss for higher compression ratios). Lossless methods like Huffman coding, LZ77, and arithmetic coding are used for text and structured data. Lossy methods are common for multimedia data where perfect reconstruction is not required. In big data contexts, compression is crucial for reducing storage costs in data lakes and improving query performance. Modern compression algorithms like Snappy, LZ4, and Zstandard are optimized for speed and are commonly used in big data platforms. Column-oriented compression techniques like run-length encoding and dictionary compression are particularly effective for analytical workloads. The choice of compression algorithm depends on factors like compression ratio, speed, and data characteristics.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=FgakZw6K1QQ',
        'https://www.youtube.com/watch?v=0xVqLJe9_CY'
      ],
      externalLinks: [
        { title: 'Data Compression Techniques', url: 'https://www.geeksforgeeks.org/data-compression-techniques/' },
        { title: 'Big Data Compression', url: 'https://www.ibm.com/topics/data-compression' }
      ]
    }
  },
  {
    id: 'numerosity-reduction',
    name: 'Numerosity Reduction',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit II',
    content: {
      introduction: 'Numerosity reduction decreases data volume by replacing original data with smaller representations while maintaining analytical integrity.',
      definition: 'Numerosity reduction involves reducing the number of data points or records while preserving the essential characteristics needed for analysis.',
      realWorldExample: 'Market research companies use sampling techniques to survey 1,000 people instead of millions, while still obtaining statistically valid insights.',
      realWorldUse: 'Applied in statistical sampling, data mining preprocessing, survey research, and large-scale data analysis.',
      importance: 'Enables efficient processing of massive datasets by reducing computational complexity while maintaining statistical validity.',
      detailedExplanation: `Numerosity reduction techniques include parametric methods that fit data to mathematical models (regression, log-linear models) and non-parametric methods like sampling and clustering. Sampling approaches include simple random sampling, stratified sampling, and systematic sampling, each with different advantages for various data distributions. Clustering-based reduction groups similar data points and represents each cluster with centroids or representatives. Histogram-based methods divide data into bins and store aggregate statistics. Advanced techniques include wavelet transforms for signal data and principal component analysis for high-dimensional data. The key challenge is maintaining data representativeness while achieving significant size reduction. Quality measures include sampling error, confidence intervals, and preservation of statistical properties.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=FgakZw6K1QQ',
        'https://www.youtube.com/watch?v=bgnlWpMKzD4'
      ],
      externalLinks: [
        { title: 'Numerosity Reduction', url: 'https://www.geeksforgeeks.org/numerosity-reduction-in-data-mining/' },
        { title: 'Sampling Techniques', url: 'https://www.tutorialspoint.com/data_mining/dm_data_reduction.htm' }
      ]
    }
  },
  {
    id: 'task-relevant-data',
    name: 'Task Relevant Data',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit II',
    content: {
      introduction: 'Task relevant data focuses on identifying and selecting the specific data attributes and instances that are most important for a particular analysis task.',
      definition: 'Task relevant data refers to the subset of available data that is directly useful and necessary for accomplishing a specific data mining or analytical objective.',
      realWorldExample: 'For credit card fraud detection, relevant data includes transaction amount, location, time, and merchant type, while customer age might be less relevant.',
      realWorldUse: 'Applied in feature selection, data preprocessing, machine learning model training, and focused analytical studies.',
      importance: 'Improves analysis efficiency, reduces computational costs, and enhances model performance by focusing on meaningful data.',
      detailedExplanation: `Identifying task relevant data involves understanding the analytical objective, domain knowledge, and statistical relationships between variables and target outcomes. The process includes feature relevance assessment using techniques like correlation analysis, mutual information, and statistical tests. Irrelevant features can introduce noise and increase computational complexity without improving results. Redundant features provide similar information and can be eliminated to reduce dimensionality. The selection process may use filter methods (statistical measures), wrapper methods (model performance), or embedded methods (built into algorithms). Domain expertise is crucial for identifying contextually relevant attributes that statistical measures might miss. The goal is to create a focused dataset that maximizes analytical value while minimizing processing overhead.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=FgakZw6K1QQ',
        'https://www.youtube.com/watch?v=bgnlWpMKzD4'
      ],
      externalLinks: [
        { title: 'Feature Selection', url: 'https://www.geeksforgeeks.org/feature-selection-techniques-in-machine-learning/' },
        { title: 'Data Relevance', url: 'https://www.tutorialspoint.com/data_mining/dm_data_selection.htm' }
      ]
    }
  },
  {
    id: 'kind-of-knowledge-mined',
    name: 'Kind of Knowledge to be Mined',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit II',
    content: {
      introduction: 'Different types of knowledge can be extracted from data, each serving specific analytical purposes and business objectives.',
      definition: 'Knowledge types in data mining include descriptive patterns, predictive models, classification rules, association relationships, and anomaly detection insights.',
      realWorldExample: 'Amazon mines different knowledge types: customer segments (clustering), purchase predictions (classification), product associations (market basket analysis), and fraud detection (anomaly detection).',
      realWorldUse: 'Applied in business intelligence, scientific discovery, pattern recognition, and decision support systems across various domains.',
      importance: 'Understanding knowledge types helps select appropriate mining techniques and interpret results correctly for specific business needs.',
      detailedExplanation: `Knowledge types include: Descriptive knowledge that summarizes data characteristics through clustering, summarization, and characterization. Predictive knowledge that forecasts future values using classification and regression models. Association knowledge that identifies relationships between items or events. Sequential knowledge that discovers patterns in time-ordered data. Structural knowledge that reveals hierarchical or network relationships. Deviation knowledge that identifies outliers and anomalies. Each type requires different algorithms, evaluation metrics, and interpretation approaches. The choice depends on business objectives, data characteristics, and intended use of results. Hybrid approaches often combine multiple knowledge types for comprehensive insights. Success requires aligning mining objectives with business goals and ensuring results are actionable and interpretable by domain experts.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=FgakZw6K1QQ',
        'https://www.youtube.com/watch?v=bgnlWpMKzD4'
      ],
      externalLinks: [
        { title: 'Data Mining Knowledge Types', url: 'https://www.geeksforgeeks.org/data-mining/' },
        { title: 'Knowledge Discovery Process', url: 'https://www.tutorialspoint.com/data_mining/dm_knowledge_discovery.htm' }
      ]
    }
  }];
