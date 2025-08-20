import { Topic } from '../syllabus';

export const researchMethodologyUnit3: Topic[] = [
  {
    id: 'frequency-data-tables-graphs',
    name: 'Tables and Graphs of Frequency Data of One Variable',
    semester: 3,
    subject: 'Research Methodology',
    unit: 'Unit III',
    content: {
      introduction: 'Frequency data tables and graphs are essential tools for organizing and visualizing data distributions.',
      definition: 'Frequency tables show how often each value occurs in a dataset, while graphs provide visual representations of these distributions.',
      realWorldExample: 'A survey of student ages might be displayed in a frequency table showing how many students are in each age group.',
      realWorldUse: 'Used in statistics, research, business analytics, and data presentation.',
      importance: 'Helps researchers understand data patterns, identify trends, and communicate findings effectively.',
      detailedExplanation: `Frequency tables organize raw data into categories with counts. Common graphs include histograms, bar charts, and pie charts. These visualizations help identify central tendency, spread, and shape of distributions. For categorical data, bar charts and pie charts are appropriate. For numerical data, histograms and frequency polygons show distributions. Stem-and-leaf plots provide detailed views of data structure. Box plots summarize key statistics including median, quartiles, and outliers. These tools are fundamental for exploratory data analysis and help researchers make informed decisions about further statistical analysis.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'Frequency Distribution', url: 'https://en.wikipedia.org/wiki/Frequency_distribution' },
        { title: 'Data Visualization', url: 'https://en.wikipedia.org/wiki/Data_visualization' }
      ]
    }
  },
  {
    id: 'two-variable-relationships',
    name: 'Tables and Graphs that Show the Relationship Between Two Variables',
    semester: 3,
    subject: 'Research Methodology',
    unit: 'Unit III',
    content: {
      introduction: 'Bivariate analysis examines relationships between two variables using tables and graphical representations.',
      definition: 'These methods include contingency tables, scatter plots, and correlation analysis to understand how variables relate to each other.',
      realWorldExample: 'A scatter plot might show the relationship between study hours and exam scores for students.',
      realWorldUse: 'Used in research, business analysis, social sciences, and quality control.',
      importance: 'Essential for identifying correlations, trends, and patterns between variables.',
      detailedExplanation: `Contingency tables (cross-tabulations) show relationships between categorical variables. Scatter plots visualize relationships between numerical variables, revealing patterns like linear, curvilinear, or no relationship. Correlation coefficients quantify the strength and direction of relationships. For categorical-numerical relationships, box plots and grouped bar charts are effective. Time series plots show how variables change over time. These visualizations help researchers formulate hypotheses and choose appropriate statistical tests. Understanding variable relationships is crucial for building predictive models and making data-driven decisions.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'Bivariate Analysis', url: 'https://en.wikipedia.org/wiki/Bivariate_analysis' },
        { title: 'Scatter Plot', url: 'https://en.wikipedia.org/wiki/Scatter_plot' }
      ]
    }
  },
  {
    id: 'frequency-distributions-graphs',
    name: 'Relation Between Frequency Distributions and Other Graphs',
    semester: 3,
    subject: 'Research Methodology',
    unit: 'Unit III',
    content: {
      introduction: 'Frequency distributions form the foundation for various types of graphs and statistical analyses.',
      definition: 'Frequency distributions can be represented through different graphical forms, each offering unique insights into data patterns.',
      realWorldExample: 'A histogram of test scores can be converted to a cumulative frequency curve to show percentile ranks.',
      realWorldUse: 'Used in statistical analysis, quality control, and research reporting.',
      importance: 'Understanding these relationships helps in choosing appropriate visualizations and interpreting data correctly.',
      detailedExplanation: `Frequency distributions can be displayed as histograms, frequency polygons, cumulative frequency curves, or ogives. Histograms show frequency density, while frequency polygons connect midpoints of histogram bars. Cumulative frequency curves show running totals, useful for finding percentiles and quartiles. Relative frequency distributions show proportions rather than counts. These different representations help researchers understand data from various perspectives. The choice of graph depends on the research question and the type of insights needed. For example, cumulative curves are useful for finding percentiles, while histograms show distribution shape.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'Frequency Distribution Graphs', url: 'https://en.wikipedia.org/wiki/Frequency_distribution' },
        { title: 'Histogram', url: 'https://en.wikipedia.org/wiki/Histogram' }
      ]
    }
  },
  {
    id: 'preparing-data-analysis',
    name: 'Preparing Data for Analysis',
    semester: 3,
    subject: 'Research Methodology',
    unit: 'Unit III',
    content: {
      introduction: 'Data preparation is a crucial step that ensures data quality and suitability for statistical analysis.',
      definition: 'Data preparation involves cleaning, transforming, and organizing raw data into a format suitable for analysis.',
      realWorldExample: 'Survey responses need to be coded, missing values handled, and outliers identified before analysis.',
      realWorldUse: 'Used in all research projects, data science, and business analytics.',
      importance: 'Proper data preparation ensures reliable results and prevents errors in statistical analysis.',
      detailedExplanation: `Data preparation includes several steps: data cleaning (removing errors, handling missing values), data transformation (scaling, normalization), data coding (converting categorical variables to numerical codes), and data validation (checking for consistency and accuracy). Outlier detection and treatment is crucial for robust analysis. Data may need to be aggregated, filtered, or restructured depending on analysis requirements. Quality checks ensure data meets assumptions for planned statistical tests. This process often consumes 60-80% of analysis time but is essential for producing valid results. Well-prepared data leads to more accurate models and reliable conclusions.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'Data Preparation', url: 'https://en.wikipedia.org/wiki/Data_preprocessing' },
        { title: 'Data Cleaning', url: 'https://en.wikipedia.org/wiki/Data_cleansing' }
      ]
    }
  }
]; 