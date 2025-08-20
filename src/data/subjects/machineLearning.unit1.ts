import { Topic } from '../syllabus';

export const machineLearningUnit1: Topic[] = [
  {
    id: 'ml-introduction-perspectives',
    name: 'Introduction to Machine Learning: Perspectives and Issues',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit I',
    content: {
      introduction: 'Machine Learning is a subset of artificial intelligence that enables computers to learn and make decisions from data without explicit programming.',
      definition: 'Machine Learning is the scientific study of algorithms and statistical models that computer systems use to perform tasks without explicit instructions, relying on patterns and inference instead.',
      realWorldExample: 'Netflix uses machine learning to analyze viewing patterns and recommend movies and shows tailored to individual user preferences.',
      realWorldUse: 'Used in recommendation systems, fraud detection, medical diagnosis, autonomous vehicles, and natural language processing applications.',
      importance: 'Enables automation of complex decision-making processes and discovery of hidden patterns in large datasets, driving innovation across industries.',
      detailedExplanation: `Machine Learning encompasses various perspectives including statistical learning theory, computational learning theory, and cognitive science approaches. Key issues include the bias-variance tradeoff, overfitting vs. underfitting, and the curse of dimensionality. The field addresses challenges like data quality, feature selection, model interpretability, and scalability. Different learning paradigms include supervised learning (learning from labeled examples), unsupervised learning (finding patterns in unlabeled data), and reinforcement learning (learning through interaction with environment). Ethical considerations include algorithmic bias, fairness, and transparency in automated decision-making systems.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=ukzFI9rgwfU',
        'https://www.youtube.com/watch?v=GwIo3gDZCVQ'
      ],
      externalLinks: [
        { title: 'Machine Learning Course - Stanford', url: 'https://www.coursera.org/learn/machine-learning' },
        { title: 'Introduction to ML - MIT', url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/' }
      ]
    }
  },
  {
    id: 'designing-learning-systems',
    name: 'Designing Learning Systems',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit I',
    content: {
      introduction: 'Designing learning systems involves creating architectures and frameworks that can automatically improve performance through experience.',
      definition: 'A learning system design encompasses the components, algorithms, and processes that enable a machine to acquire knowledge and improve performance on specific tasks.',
      realWorldExample: 'Google\'s search algorithm continuously learns from user interactions to improve search result relevance and ranking.',
      realWorldUse: 'Applied in adaptive systems, personalization engines, autonomous systems, and intelligent software applications.',
      importance: 'Provides systematic approach to building systems that can adapt and improve over time, essential for creating intelligent applications.',
      detailedExplanation: `Learning system design involves several key components: the performance element (executes actions), learning element (improves performance), critic (provides feedback), and problem generator (suggests exploratory actions). The design process includes defining the learning task, choosing appropriate representation for knowledge, selecting learning algorithms, and establishing evaluation metrics. Considerations include data preprocessing, feature engineering, model selection, hyperparameter tuning, and deployment strategies. The system must handle various challenges like concept drift, scalability, real-time constraints, and integration with existing infrastructure.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=GwIo3gDZCVQ',
        'https://www.youtube.com/watch?v=ukzFI9rgwfU'
      ],
      externalLinks: [
        { title: 'ML System Design', url: 'https://www.educative.io/blog/machine-learning-system-design' },
        { title: 'Building ML Systems', url: 'https://developers.google.com/machine-learning/guides/rules-of-ml' }
      ]
    }
  },
  {
    id: 'concepts-hypotheses-version-space',
    name: 'Concepts of Hypotheses and Version Space',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit I',
    content: {
      introduction: 'Hypotheses and version space are fundamental concepts in machine learning that describe how algorithms form and refine predictions.',
      definition: 'A hypothesis is a proposed explanation or prediction rule, while version space is the set of all hypotheses consistent with the training data.',
      realWorldExample: 'In email spam detection, different hypotheses might focus on sender, keywords, or attachments, with version space containing all rules that correctly classify training emails.',
      realWorldUse: 'Used in concept learning, rule induction, and any supervised learning scenario where multiple valid explanations exist.',
      importance: 'Provides theoretical foundation for understanding how learning algorithms search through possible solutions and make generalizations.',
      detailedExplanation: `A hypothesis represents a potential solution or rule that maps inputs to outputs. The hypothesis space contains all possible hypotheses the algorithm can consider. Version space is the subset of hypothesis space that is consistent with all training examples. The candidate elimination algorithm maintains version space by keeping track of the most general and most specific hypotheses. As new examples are encountered, the version space is refined by eliminating inconsistent hypotheses. This framework helps understand the learning process as a search through hypothesis space, guided by training data and prior knowledge.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=GwIo3gDZCVQ',
        'https://www.youtube.com/watch?v=ukzFI9rgwfU'
      ],
      externalLinks: [
        { title: 'Version Space Learning', url: 'https://www.geeksforgeeks.org/ml-version-space-in-concept-learning/' },
        { title: 'Hypothesis Space', url: 'https://machinelearningmastery.com/what-is-a-hypothesis-in-machine-learning/' }
      ]
    }
  },
  {
    id: 'inductive-bias',
    name: 'Inductive Bias',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit I',
    content: {
      introduction: 'Inductive bias refers to the assumptions a learning algorithm makes to generalize from training data to unseen examples.',
      definition: 'Inductive bias is the set of assumptions that a learning algorithm uses to predict outputs for inputs it has not encountered during training.',
      realWorldExample: 'Linear regression assumes a linear relationship between variables, which is its inductive bias that enables it to make predictions on new data.',
      realWorldUse: 'Present in all machine learning algorithms, influencing their ability to generalize and the types of patterns they can discover.',
      importance: 'Essential for generalization; without inductive bias, learning from finite data would be impossible.',
      detailedExplanation: `Inductive bias can be explicit (clearly stated assumptions) or implicit (built into the algorithm structure). Types include restriction bias (limiting hypothesis space) and preference bias (ordering hypotheses by preference). Examples include the smoothness assumption in neural networks, independence assumption in Naive Bayes, and linearity assumption in linear models. Strong bias leads to fast learning but may miss complex patterns, while weak bias is more flexible but requires more data. The choice of inductive bias should match the problem domain and available data characteristics.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=GwIo3gDZCVQ',
        'https://www.youtube.com/watch?v=ukzFI9rgwfU'
      ],
      externalLinks: [
        { title: 'Inductive Bias Explained', url: 'https://machinelearningmastery.com/inductive-bias-in-machine-learning/' },
        { title: 'Bias in ML', url: 'https://www.geeksforgeeks.org/bias-in-machine-learning/' }
      ]
    }
  },
  {
    id: 'performance-metrics',
    name: 'Performance Metrics: Accuracy, Precision, Recall, Sensitivity, Specificity, AUC, ROC',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit I',
    content: {
      introduction: 'Performance metrics are essential tools for evaluating and comparing machine learning models across different tasks and domains.',
      definition: 'Performance metrics are quantitative measures used to assess how well a machine learning model performs on a given task.',
      realWorldExample: 'In medical diagnosis, high recall ensures most diseases are detected, while high precision reduces false alarms that could cause unnecessary anxiety.',
      realWorldUse: 'Used in model selection, hyperparameter tuning, comparing algorithms, and reporting results in research and industry applications.',
      importance: 'Critical for understanding model performance, identifying weaknesses, and making informed decisions about model deployment.',
      detailedExplanation: `Accuracy measures overall correctness but can be misleading with imbalanced datasets. Precision (positive predictive value) measures the fraction of positive predictions that are correct. Recall (sensitivity) measures the fraction of actual positives correctly identified. Specificity measures the fraction of actual negatives correctly identified. F1-score combines precision and recall. ROC curve plots true positive rate vs. false positive rate, while AUC measures the area under the ROC curve. Different metrics are appropriate for different problems: accuracy for balanced datasets, precision for minimizing false positives, recall for minimizing false negatives.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=4jRBRDbJemM',
        'https://www.youtube.com/watch?v=GwIo3gDZCVQ'
      ],
      externalLinks: [
        { title: 'ML Metrics Guide', url: 'https://scikit-learn.org/stable/modules/model_evaluation.html' },
        { title: 'ROC and AUC Explained', url: 'https://www.analyticsvidhya.com/blog/2020/06/auc-roc-curve-machine-learning/' }
      ]
    }
  },
  {
    id: 'bias-variance-decomposition',
    name: 'Bias Variance Decomposition',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit I',
    content: {
      introduction: 'Bias-variance decomposition is a fundamental framework for understanding the sources of error in machine learning models.',
      definition: 'Bias-variance decomposition breaks down the expected prediction error into three components: bias, variance, and irreducible error.',
      realWorldExample: 'A simple linear model may have high bias (underfitting) but low variance, while a complex neural network may have low bias but high variance (overfitting).',
      realWorldUse: 'Used in model selection, regularization techniques, ensemble methods, and understanding the bias-variance tradeoff.',
      importance: 'Provides theoretical foundation for understanding overfitting, underfitting, and guides strategies for improving model performance.',
      detailedExplanation: `Bias measures how far the average prediction is from the true value, indicating systematic errors in the model. Variance measures how much predictions vary for different training sets, indicating sensitivity to training data. Irreducible error represents noise that cannot be reduced. High bias leads to underfitting (model too simple), while high variance leads to overfitting (model too complex). The bias-variance tradeoff suggests that reducing one often increases the other. Strategies include regularization (reduces variance), feature engineering (reduces bias), and ensemble methods (can reduce both).`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=EuBBz3bI-aA',
        'https://www.youtube.com/watch?v=GwIo3gDZCVQ'
      ],
      externalLinks: [
        { title: 'Bias-Variance Tradeoff', url: 'https://www.analyticsvidhya.com/blog/2020/08/bias-and-variance-tradeoff-machine-learning/' },
        { title: 'Understanding Bias-Variance', url: 'https://machinelearningmastery.com/gentle-introduction-to-the-bias-variance-trade-off-in-machine-learning/' }
      ]
    }
  },
  {
    id: 'decision-trees-id3',
    name: 'Decision Trees Learning: Basic Algorithm (ID3)',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit I',
    content: {
      introduction: 'ID3 (Iterative Dichotomiser 3) is a fundamental decision tree algorithm that builds trees using information gain as the splitting criterion.',
      definition: 'ID3 is a decision tree learning algorithm that constructs trees by recursively selecting attributes that provide the highest information gain.',
      realWorldExample: 'A bank uses ID3 to create a decision tree for loan approval, splitting on attributes like income, credit score, and employment status.',
      realWorldUse: 'Applied in classification tasks, rule extraction, feature selection, and building interpretable models in various domains.',
      importance: 'Provides an intuitive and interpretable approach to classification that can be easily understood by domain experts.',
      detailedExplanation: `ID3 works by calculating information gain for each attribute and selecting the one with the highest gain for splitting. Information gain is based on entropy reduction, measuring how much uncertainty is removed by the split. The algorithm recursively builds the tree until all examples in a node belong to the same class or no more attributes are available. Key concepts include entropy (measure of impurity), information gain (entropy reduction), and stopping criteria. The resulting tree can be converted to if-then rules for easy interpretation. Limitations include handling only categorical attributes and tendency to overfit with noisy data.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=7VeUPuFGJHk',
        'https://www.youtube.com/watch?v=_PwhiWxHK8o'
      ],
      externalLinks: [
        { title: 'ID3 Algorithm Explained', url: 'https://www.geeksforgeeks.org/decision-tree-introduction-example/' },
        { title: 'Decision Trees Tutorial', url: 'https://www.analyticsvidhya.com/blog/2016/04/tree-based-algorithms-complete-tutorial-scratch-in-python/' }
      ]
    }
  },
  {
    id: 'decision-tree-issues-overfitting',
    name: 'Issues in Decision Tree Learning: Overfitting and Solutions',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit I',
    content: {
      introduction: 'Decision trees are prone to overfitting, where the model becomes too complex and performs poorly on new data.',
      definition: 'Overfitting in decision trees occurs when the tree becomes too deep or complex, memorizing training data rather than learning generalizable patterns.',
      realWorldExample: 'A decision tree for medical diagnosis that creates very specific rules for each patient in training data, failing to generalize to new patients.',
      realWorldUse: 'Addressed through pruning techniques, ensemble methods, and regularization in practical machine learning applications.',
      importance: 'Understanding and preventing overfitting is crucial for building decision trees that generalize well to unseen data.',
      detailedExplanation: `Overfitting manifests as very deep trees with many branches that perfectly classify training data but perform poorly on test data. Causes include noisy data, small training sets, and lack of stopping criteria. Solutions include pre-pruning (stopping tree growth early) and post-pruning (removing branches after construction). Pre-pruning techniques include minimum samples per leaf, maximum depth limits, and minimum information gain thresholds. Post-pruning methods like reduced error pruning and cost complexity pruning remove branches that don't improve validation performance. Other solutions include ensemble methods like Random Forests and handling continuous attributes through discretization.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=7VeUPuFGJHk',
        'https://www.youtube.com/watch?v=_PwhiWxHK8o'
      ],
      externalLinks: [
        { title: 'Decision Tree Pruning', url: 'https://www.geeksforgeeks.org/decision-tree-pruning/' },
        { title: 'Overfitting in Decision Trees', url: 'https://machinelearningmastery.com/overfitting-and-underfitting-with-machine-learning-algorithms/' }
      ]
    }
  }
];