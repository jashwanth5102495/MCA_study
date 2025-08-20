import { Topic } from '../syllabus';

export const bigDataUnit3: Topic[] = [
  {
    id: 'classification-prediction-issues',
    name: 'Introduction to Classification and Prediction: Issues',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit III',
    content: {
      introduction: 'Classification and prediction are fundamental data mining tasks that involve assigning categories to data instances and forecasting future values.',
      definition: 'Classification assigns predefined class labels to data instances, while prediction estimates continuous numerical values based on historical data patterns.',
      realWorldExample: 'Email systems classify messages as spam or legitimate, while stock market applications predict future stock prices based on historical trends.',
      realWorldUse: 'Used in fraud detection, medical diagnosis, customer segmentation, risk assessment, and demand forecasting across various industries.',
      importance: 'Essential for automated decision-making, pattern recognition, and predictive analytics in big data environments.',
      detailedExplanation: `Classification issues include handling imbalanced datasets where some classes have significantly fewer instances, dealing with missing values and noisy data, managing high-dimensional feature spaces, and avoiding overfitting. Prediction challenges involve non-linear relationships, temporal dependencies, and uncertainty quantification. Both tasks face scalability issues with big data, requiring distributed algorithms and efficient processing techniques. Model selection involves choosing appropriate algorithms, feature engineering, and hyperparameter tuning. Evaluation challenges include selecting appropriate metrics, cross-validation strategies, and handling concept drift in streaming data. Performance considerations include accuracy, interpretability, computational efficiency, and real-time processing requirements.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=_PwhiWxHK8o',
        'https://www.youtube.com/watch?v=VtRLrQ3Ev-U'
      ],
      externalLinks: [
        { title: 'Classification vs Prediction', url: 'https://www.geeksforgeeks.org/difference-between-classification-and-prediction/' },
        { title: 'Data Mining Classification', url: 'https://www.tutorialspoint.com/data_mining/dm_classification_prediction.htm' }
      ]
    }
  },
  {
    id: 'decision-trees-classification',
    name: 'Classification using Decision Trees',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit III',
    content: {
      introduction: 'Decision trees are intuitive classification models that create tree-like structures to make decisions based on feature values.',
      definition: 'Decision trees are hierarchical models that classify data by creating a tree structure where internal nodes represent feature tests, branches represent outcomes, and leaves represent class labels.',
      realWorldExample: 'Banks use decision trees to approve or reject loan applications by testing factors like income, credit score, employment history, and debt-to-income ratio.',
      realWorldUse: 'Applied in medical diagnosis, credit scoring, customer segmentation, fraud detection, and any domain requiring interpretable classification rules.',
      importance: 'Provides highly interpretable models that can be easily understood by domain experts and translated into business rules.',
      detailedExplanation: `Decision tree algorithms like ID3, C4.5, and CART use different splitting criteria to build optimal trees. ID3 uses information gain based on entropy, C4.5 uses gain ratio to handle bias toward multi-valued attributes, and CART uses Gini impurity for binary splits. The tree construction process involves selecting the best attribute for splitting at each node, partitioning data based on attribute values, and recursively building subtrees. Pruning techniques prevent overfitting by removing branches that don't improve generalization. Advantages include interpretability, handling both numerical and categorical data, and requiring minimal data preparation. Limitations include instability (small data changes can create different trees) and bias toward attributes with more levels.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=_PwhiWxHK8o',
        'https://www.youtube.com/watch?v=7VeUPuFGJHk'
      ],
      externalLinks: [
        { title: 'Decision Trees Explained', url: 'https://www.analyticsvidhya.com/blog/2016/04/tree-based-algorithms-complete-tutorial-scratch-in-python/' },
        { title: 'Decision Tree Algorithms', url: 'https://www.geeksforgeeks.org/decision-tree/' }
      ]
    }
  },
  {
    id: 'bayesian-classification',
    name: 'Bayesian Classification',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit III',
    content: {
      introduction: 'Bayesian classification applies probability theory and Bayes theorem to classify data based on prior knowledge and evidence.',
      definition: 'Bayesian classification uses Bayes theorem to calculate the probability of each class given the input features and selects the class with highest posterior probability.',
      realWorldExample: 'Spam filters use Naive Bayes to classify emails by calculating the probability of spam based on word frequencies and prior spam/ham distributions.',
      realWorldUse: 'Used in text classification, medical diagnosis, sentiment analysis, recommendation systems, and any application with probabilistic reasoning.',
      importance: 'Provides probabilistic predictions with confidence measures and handles uncertainty effectively in classification tasks.',
      detailedExplanation: `Bayesian classification is based on Bayes theorem: P(C|X) = P(X|C) × P(C) / P(X), where P(C|X) is the posterior probability of class C given features X. Naive Bayes assumes feature independence, simplifying computation while often maintaining good performance. The algorithm calculates prior probabilities P(C) from training data and likelihood P(X|C) for each feature-class combination. For continuous features, Gaussian Naive Bayes assumes normal distribution, while multinomial and Bernoulli variants handle discrete features. Advantages include fast training and prediction, good performance with small datasets, and natural handling of multi-class problems. Limitations include the strong independence assumption and sensitivity to skewed data distributions.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=O2L2Uv9pdDA',
        'https://www.youtube.com/watch?v=VtRLrQ3Ev-U'
      ],
      externalLinks: [
        { title: 'Naive Bayes Classifier', url: 'https://www.analyticsvidhya.com/blog/2017/09/naive-bayes-explained/' },
        { title: 'Bayesian Classification', url: 'https://www.geeksforgeeks.org/naive-bayes-classifiers/' }
      ]
    }
  },
  {
    id: 'backpropagation-classification',
    name: 'Classification by Backpropagation',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit III',
    content: {
      introduction: 'Backpropagation trains neural networks for classification by iteratively adjusting weights to minimize prediction errors.',
      definition: 'Backpropagation is a supervised learning algorithm that trains multi-layer neural networks by propagating errors backward through the network to update weights.',
      realWorldExample: 'Image recognition systems use backpropagation to train deep neural networks that classify photos into categories like animals, objects, or scenes.',
      realWorldUse: 'Applied in image recognition, speech processing, natural language processing, and complex pattern recognition tasks.',
      importance: 'Enables training of complex neural networks capable of learning non-linear relationships and achieving high accuracy on difficult classification tasks.',
      detailedExplanation: `Backpropagation consists of forward pass (computing predictions) and backward pass (computing gradients and updating weights). The forward pass calculates outputs layer by layer using activation functions like sigmoid, tanh, or ReLU. The backward pass computes error gradients using the chain rule of calculus, starting from the output layer and propagating back to input layers. Weight updates use gradient descent optimization with learning rate controlling step size. Techniques like momentum, adaptive learning rates, and regularization improve convergence and prevent overfitting. Modern variants include stochastic gradient descent, Adam optimizer, and batch normalization. Deep networks with many layers can learn hierarchical feature representations but face challenges like vanishing gradients and computational complexity.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Ilg3gGewQ5U',
        'https://www.youtube.com/watch?v=7VeUPuFGJHk'
      ],
      externalLinks: [
        { title: 'Backpropagation Algorithm', url: 'https://www.analyticsvidhya.com/blog/2017/05/neural-network-from-scratch-in-python-and-r/' },
        { title: 'Neural Network Training', url: 'https://www.geeksforgeeks.org/implementation-of-back-propagation-algorithm-using-python/' }
      ]
    }
  },
  {
    id: 'clustering-introduction',
    name: 'Introduction to Clustering',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit III',
    content: {
      introduction: 'Clustering is an unsupervised learning technique that groups similar data points together without predefined class labels.',
      definition: 'Clustering partitions data into groups (clusters) where objects within the same cluster are more similar to each other than to objects in other clusters.',
      realWorldExample: 'E-commerce companies use clustering to segment customers based on purchasing behavior, demographics, and preferences for targeted marketing campaigns.',
      realWorldUse: 'Used in customer segmentation, market research, image segmentation, gene analysis, and exploratory data analysis.',
      importance: 'Reveals hidden patterns and structures in data, enabling data-driven insights and decision-making without prior knowledge of categories.',
      detailedExplanation: `Clustering algorithms include partitioning methods (K-means, K-medoids), hierarchical methods (agglomerative, divisive), density-based methods (DBSCAN, OPTICS), and grid-based methods. K-means minimizes within-cluster sum of squares by iteratively updating cluster centroids. Hierarchical clustering creates tree-like structures showing relationships at different granularities. Density-based clustering identifies clusters of varying shapes and handles noise effectively. Evaluation metrics include silhouette score, Davies-Bouldin index, and Calinski-Harabasz index. Challenges include determining optimal cluster numbers, handling high-dimensional data, and dealing with clusters of different sizes and shapes. Applications require domain knowledge for interpretation and validation of discovered clusters.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=4b5d3muPQmA',
        'https://www.youtube.com/watch?v=VtRLrQ3Ev-U'
      ],
      externalLinks: [
        { title: 'Clustering Algorithms', url: 'https://www.analyticsvidhya.com/blog/2016/11/an-introduction-to-clustering-and-different-methods-of-clustering/' },
        { title: 'K-Means Clustering', url: 'https://www.geeksforgeeks.org/k-means-clustering-introduction/' }
      ]
    }
  },
  {
    id: 'spatial-web-text-mining',
    name: 'Spatial Mining, Web Mining, and Text Mining',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit III',
    content: {
      introduction: 'Specialized mining techniques handle spatial, web, and textual data types that require domain-specific approaches and algorithms.',
      definition: 'Spatial mining analyzes geographic data, web mining extracts knowledge from web content and usage, while text mining discovers patterns in textual documents.',
      realWorldExample: 'GPS navigation apps use spatial mining to find optimal routes, search engines use web mining to rank pages, and social media platforms use text mining for sentiment analysis.',
      realWorldUse: 'Applied in GIS applications, search engines, social media analysis, location-based services, and content recommendation systems.',
      importance: 'Enables analysis of complex, domain-specific data types that traditional mining techniques cannot handle effectively.',
      detailedExplanation: `Spatial mining handles geographic and geometric data using techniques like spatial clustering, spatial association rules, and spatial classification. It considers spatial relationships like proximity, containment, and intersection. Web mining includes web content mining (analyzing web page content), web structure mining (analyzing hyperlink structures), and web usage mining (analyzing user behavior patterns). Text mining involves preprocessing (tokenization, stemming, stop word removal), feature extraction (TF-IDF, word embeddings), and analysis techniques (topic modeling, sentiment analysis, named entity recognition). Each domain requires specialized algorithms, data structures, and evaluation metrics. Integration of these techniques enables comprehensive analysis of modern data sources combining spatial, web, and textual information.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=4b5d3muPQmA',
        'https://www.youtube.com/watch?v=VtRLrQ3Ev-U'
      ],
      externalLinks: [
        { title: 'Text Mining Techniques', url: 'https://www.analyticsvidhya.com/blog/2018/02/the-different-methods-deal-text-data-predictive-python/' },
        { title: 'Web Mining Overview', url: 'https://www.geeksforgeeks.org/web-mining/' }
      ]
    }
  },
  {

    id: 'prediction-classification-accuracy',
    name: 'Prediction Classification Accuracy',
    semester: 3,
    subject: 'Big Data',
    unit: 'Unit III',
    content: {
      introduction: 'Classification accuracy measures how well a predictive model correctly identifies the class or category of new instances.',
      definition: 'Prediction classification accuracy is the ratio of correctly predicted instances to the total number of instances in a dataset.',
      realWorldExample: 'A medical diagnosis system with 95% accuracy correctly identifies diseases in 95 out of 100 patients, helping doctors make informed treatment decisions.',
      realWorldUse: 'Used in model evaluation, algorithm comparison, performance monitoring, and quality assessment in machine learning applications.',
      importance: 'Critical for assessing model reliability, comparing different approaches, and ensuring predictive systems meet quality standards.',
      detailedExplanation: `Classification accuracy is calculated as (True Positives + True Negatives) / Total Predictions. While intuitive, accuracy can be misleading with imbalanced datasets where one class dominates. Alternative metrics include precision (positive predictive value), recall (sensitivity), F1-score (harmonic mean of precision and recall), and specificity. The confusion matrix provides detailed breakdown of prediction results. Cross-validation techniques like k-fold validation provide more robust accuracy estimates. Factors affecting accuracy include data quality, feature selection, algorithm choice, and hyperparameter tuning. In big data contexts, accuracy must be balanced with computational efficiency and scalability. Ensemble methods often improve accuracy by combining multiple models. The choice of accuracy metric should align with business objectives and cost considerations of different error types.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=4jRBRDbJemM',
        'https://www.youtube.com/watch?v=_PwhiWxHK8o'
      ],
      externalLinks: [
        { title: 'Classification Accuracy', url: 'https://www.geeksforgeeks.org/accuracy-precision-recall-f1-score/' },
        { title: 'Model Evaluation Metrics', url: 'https://scikit-learn.org/stable/modules/model_evaluation.html' }
      ]
    }
  }];
