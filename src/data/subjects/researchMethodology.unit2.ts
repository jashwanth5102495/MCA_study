import { Topic } from '../syllabus';

export const researchMethodologyUnit2: Topic[] = [
  {
    id: 'statistical-modeling-analysis',
    name: 'Statistical Modeling and Analysis',
    semester: 3,
    subject: 'Research Methodology',
    unit: 'Unit II',
    content: {
      introduction: 'Statistical modeling and analysis are essential for interpreting data and drawing valid conclusions in research.',
      definition: 'Statistical modeling involves creating mathematical representations of real-world processes, while analysis refers to applying statistical methods to interpret data.',
      realWorldExample: 'Regression models are used in economics to predict market trends based on historical data.',
      realWorldUse: 'Used in scientific research, business analytics, social sciences, and engineering.',
      importance: 'Enables researchers to make sense of complex data, identify patterns, and test hypotheses.',
      detailedExplanation: `Statistical modeling includes techniques such as regression, ANOVA, and factor analysis. Analysis involves hypothesis testing, estimation, and inference. These tools help researchers understand relationships between variables, assess the significance of findings, and make predictions.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=Vfo5le26IhY'],
      externalLinks: [
        { title: 'Statistical Modeling', url: 'https://en.wikipedia.org/wiki/Statistical_model' }
      ]
    }
  },
  {
    id: 'time-series-analysis',
    name: 'Time Series Analysis',
    semester: 3,
    subject: 'Research Methodology',
    unit: 'Unit II',
    content: {
      introduction: 'Time series analysis examines data points collected or recorded at specific time intervals.',
      definition: 'It involves statistical techniques for analyzing time-ordered data to identify trends, cycles, and seasonal variations.',
      realWorldExample: 'Stock market analysis uses time series to forecast future prices based on past trends.',
      realWorldUse: 'Used in economics, finance, environmental science, and engineering.',
      importance: 'Helps in forecasting, understanding temporal patterns, and making informed decisions.',
      detailedExplanation: `Time series analysis includes decomposition, smoothing, and forecasting methods such as ARIMA. It is crucial for identifying underlying patterns and predicting future values.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=Vfo5le26IhY'],
      externalLinks: [
        { title: 'Time Series Analysis', url: 'https://en.wikipedia.org/wiki/Time_series' }
      ]
    }
  },
  {
    id: 'probability-distributions',
    name: 'Probability Distributions',
    semester: 3,
    subject: 'Research Methodology',
    unit: 'Unit II',
    content: {
      introduction: 'Probability distributions describe how the values of a random variable are distributed.',
      definition: 'A probability distribution assigns probabilities to each possible value of a random variable.',
      realWorldExample: 'The normal distribution is used in quality control to model measurement errors.',
      realWorldUse: 'Used in statistics, risk analysis, and machine learning.',
      importance: 'Understanding distributions is fundamental for statistical inference and hypothesis testing.',
      detailedExplanation: `Common distributions include normal, binomial, Poisson, and exponential. Each has unique properties and applications in research and data analysis.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=Vfo5le26IhY'],
      externalLinks: [
        { title: 'Probability Distribution', url: 'https://en.wikipedia.org/wiki/Probability_distribution' }
      ]
    }
  },
  {
    id: 'statistical-analysis-inference',
    name: 'Fundamentals of Statistical Analysis and Inference',
    semester: 3,
    subject: 'Research Methodology',
    unit: 'Unit II',
    content: {
      introduction: 'Statistical analysis and inference are used to draw conclusions from data and test hypotheses.',
      definition: 'Statistical inference involves using data from a sample to make generalizations about a population.',
      realWorldExample: 'Clinical trials use statistical inference to determine the effectiveness of new treatments.',
      realWorldUse: 'Used in medical research, policy analysis, and quality control.',
      importance: 'Ensures that research findings are valid, reliable, and generalizable.',
      detailedExplanation: `Statistical analysis includes descriptive and inferential methods. Inference uses techniques like confidence intervals and hypothesis tests to make decisions based on data.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=Vfo5le26IhY'],
      externalLinks: [
        { title: 'Statistical Inference', url: 'https://en.wikipedia.org/wiki/Statistical_inference' }
      ]
    }
  },
  {
    id: 'multivariate-methods',
    name: 'Multivariate Methods',
    semester: 3,
    subject: 'Research Methodology',
    unit: 'Unit II',
    content: {
      introduction: 'Multivariate methods analyze data involving multiple variables to understand relationships and patterns.',
      definition: 'These methods include techniques like multiple regression, factor analysis, and cluster analysis.',
      realWorldExample: 'Market researchers use cluster analysis to segment customers based on purchasing behavior.',
      realWorldUse: 'Used in social sciences, marketing, and bioinformatics.',
      importance: 'Allows researchers to analyze complex data sets and uncover hidden structures.',
      detailedExplanation: `Multivariate analysis helps in understanding the joint behavior of several variables, identifying patterns, and making predictions.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=Vfo5le26IhY'],
      externalLinks: [
        { title: 'Multivariate Analysis', url: 'https://en.wikipedia.org/wiki/Multivariate_statistics' }
      ]
    }
  },
  {
    id: 'correlation-regression',
    name: 'Concepts of Correlation and Regression',
    semester: 3,
    subject: 'Research Methodology',
    unit: 'Unit II',
    content: {
      introduction: 'Correlation and regression are statistical tools for examining relationships between variables.',
      definition: 'Correlation measures the strength and direction of a linear relationship, while regression predicts the value of one variable based on another.',
      realWorldExample: 'Regression is used in real estate to predict house prices based on features like size and location.',
      realWorldUse: 'Used in economics, health sciences, and engineering.',
      importance: 'Helps in understanding dependencies and making predictions.',
      detailedExplanation: `Correlation coefficients (like Pearson’s r) quantify relationships, while regression models (linear, logistic) are used for prediction and analysis.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=Vfo5le26IhY'],
      externalLinks: [
        { title: 'Correlation and Regression', url: 'https://en.wikipedia.org/wiki/Correlation_and_dependence' }
      ]
    }
  },
  {
    id: 'spectral-error-analysis',
    name: 'Time Series, Spectral and Error Analysis',
    semester: 3,
    subject: 'Research Methodology',
    unit: 'Unit II',
    content: {
      introduction: 'Spectral analysis examines the frequency components of time series data, while error analysis evaluates the accuracy of measurements.',
      definition: 'Spectral analysis decomposes signals into constituent frequencies; error analysis quantifies uncertainties in data.',
      realWorldExample: 'Spectral analysis is used in engineering to analyze vibrations in machinery.',
      realWorldUse: 'Used in signal processing, physics, and engineering.',
      importance: 'Essential for understanding periodicities and ensuring data quality.',
      detailedExplanation: `Spectral analysis uses tools like Fourier transform to analyze frequency content. Error analysis involves calculating standard errors, confidence intervals, and identifying sources of error.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=Vfo5le26IhY'],
      externalLinks: [
        { title: 'Spectral Analysis', url: 'https://en.wikipedia.org/wiki/Spectral_density_estimation' },
        { title: 'Error Analysis', url: 'https://en.wikipedia.org/wiki/Error_analysis_(mathematics)' }
      ]
    }
  }
]; 