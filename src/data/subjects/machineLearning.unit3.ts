import { Topic } from '../syllabus';

export const machineLearningUnit3: Topic[] = [
  {
    id: 'bayesian-learning-bayes-theorem',
    name: 'Bayesian Learning: Bayes Theorem',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit III',
    content: {
      introduction: 'Bayes theorem provides the mathematical foundation for probabilistic reasoning and learning from evidence in machine learning.',
      definition: 'Bayes theorem describes the probability of an event based on prior knowledge and new evidence: P(A|B) = P(B|A) × P(A) / P(B).',
      realWorldExample: 'Medical diagnosis systems use Bayes theorem to update disease probability based on test results, combining prior disease prevalence with test accuracy.',
      realWorldUse: 'Applied in spam filtering, medical diagnosis, recommendation systems, and any application requiring probabilistic inference.',
      importance: 'Fundamental to probabilistic machine learning, enabling principled reasoning under uncertainty and continuous learning from new evidence.',
      detailedExplanation: `Bayes theorem relates prior probability P(A), likelihood P(B|A), evidence P(B), and posterior probability P(A|B). In machine learning context, A represents hypotheses (models/parameters) and B represents observed data. The theorem enables updating beliefs about hypotheses as new data arrives. Prior probability represents initial beliefs before seeing data. Likelihood measures how well different hypotheses explain the observed data. Evidence (marginal likelihood) normalizes probabilities across all hypotheses. Posterior probability represents updated beliefs after incorporating new evidence. Bayesian learning provides a principled framework for handling uncertainty, incorporating prior knowledge, and making predictions with confidence measures. The approach naturally handles overfitting through regularization effects of priors.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=HZGCoVF3YvM',
        'https://www.youtube.com/watch?v=O2L2Uv9pdDA'
      ],
      externalLinks: [
        { title: 'Bayes Theorem Explained', url: 'https://www.analyticsvidhya.com/blog/2019/06/introduction-powerful-bayes-theorem-data-science/' },
        { title: 'Bayesian Statistics', url: 'https://www.geeksforgeeks.org/bayes-theorem/' }
      ]
    }
  },
  {
    id: 'bayesian-concept-learning',
    name: 'Bayesian Concept Learning',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit III',
    content: {
      introduction: 'Bayesian concept learning applies probabilistic principles to learn concepts from examples, handling uncertainty and multiple hypotheses.',
      definition: 'Bayesian concept learning uses Bayes theorem to update probability distributions over concept hypotheses based on observed examples.',
      realWorldExample: 'Children learning word meanings use Bayesian principles, starting with broad interpretations and refining based on examples and corrections.',
      realWorldUse: 'Applied in cognitive modeling, natural language processing, automated reasoning, and any domain requiring concept acquisition.',
      importance: 'Provides principled approach to concept learning that handles uncertainty and incorporates prior knowledge effectively.',
      detailedExplanation: `Bayesian concept learning maintains probability distributions over possible concept definitions (hypotheses). Each hypothesis specifies which examples belong to the concept. Prior probabilities reflect initial beliefs about concept complexity and structure. As examples are observed, likelihood calculations determine how well each hypothesis explains the data. Bayes theorem updates posterior probabilities, favoring hypotheses that better explain observed examples. The approach naturally handles both positive and negative examples, with negative examples being particularly informative for ruling out overly general hypotheses. Size principle favors simpler hypotheses that still explain the data. The framework provides uncertainty estimates and can make probabilistic predictions about new examples. Applications include learning word meanings, visual concepts, and rule-based categories.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=HZGCoVF3YvM',
        'https://www.youtube.com/watch?v=O2L2Uv9pdDA'
      ],
      externalLinks: [
        { title: 'Bayesian Learning', url: 'https://www.geeksforgeeks.org/bayesian-learning/' },
        { title: 'Concept Learning', url: 'https://machinelearningmastery.com/what-is-concept-learning-in-machine-learning/' }
      ]
    }
  },
  {
    id: 'maximum-likelihood',
    name: 'Maximum Likelihood',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit III',
    content: {
      introduction: 'Maximum likelihood estimation finds model parameters that make the observed data most probable under the assumed model.',
      definition: 'Maximum likelihood estimation (MLE) selects parameter values that maximize the probability (likelihood) of observing the given data.',
      realWorldExample: 'Fitting a normal distribution to height measurements involves finding mean and variance parameters that maximize the likelihood of the observed heights.',
      realWorldUse: 'Used in parameter estimation, model fitting, statistical inference, and training probabilistic machine learning models.',
      importance: 'Fundamental principle for parameter estimation in statistical models and probabilistic machine learning algorithms.',
      detailedExplanation: `MLE assumes data points are independent and identically distributed (i.i.d.) from some probability distribution with unknown parameters. The likelihood function L(θ) measures the probability of observing the data given parameters θ. MLE finds θ that maximizes L(θ), often by maximizing the log-likelihood for computational convenience. The method provides point estimates without uncertainty quantification. For many distributions, MLE has desirable properties: consistency (converges to true parameters with infinite data), efficiency (achieves minimum variance), and invariance (transformations of MLE are MLE of transformations). However, MLE can overfit with limited data and doesn\'t incorporate prior knowledge. Examples include fitting Gaussian distributions, logistic regression coefficients, and neural network weights. The approach forms the basis for many machine learning algorithms.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=XepXtl9YKwc',
        'https://www.youtube.com/watch?v=HZGCoVF3YvM'
      ],
      externalLinks: [
        { title: 'Maximum Likelihood Estimation', url: 'https://www.analyticsvidhya.com/blog/2018/07/introductory-guide-maximum-likelihood-estimation/' },
        { title: 'MLE Explained', url: 'https://www.geeksforgeeks.org/ml-maximum-likelihood-estimation/' }
      ]
    }
  },
  {
    id: 'bayes-optimal-classifier',
    name: 'Bayes Optimal Classifier',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit III',
    content: {
      introduction: 'The Bayes optimal classifier represents the theoretical best possible classifier that minimizes expected classification error.',
      definition: 'The Bayes optimal classifier selects the class with highest posterior probability for each instance, achieving minimum possible error rate.',
      realWorldExample: 'In medical diagnosis, the Bayes optimal classifier would choose the disease with highest probability given all symptoms and test results.',
      realWorldUse: 'Used as theoretical benchmark for classifier performance and in decision theory for optimal decision making.',
      importance: 'Provides theoretical foundation for classification and establishes performance bounds for practical algorithms.',
      detailedExplanation: `The Bayes optimal classifier computes P(class|features) for each class and selects the class with maximum posterior probability. This decision rule minimizes the expected classification error (Bayes error rate). The classifier requires knowing the true probability distributions, which are typically unknown in practice. The Bayes error represents the irreducible error due to overlapping class distributions and noise. No classifier can achieve lower error rate than the Bayes optimal classifier on the same problem. Practical classifiers approximate the Bayes optimal by estimating probability distributions from training data. The framework extends to cost-sensitive classification by incorporating misclassification costs. Understanding the Bayes optimal classifier helps evaluate practical algorithms and understand fundamental limits of classification performance.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=O2L2Uv9pdDA',
        'https://www.youtube.com/watch?v=HZGCoVF3YvM'
      ],
      externalLinks: [
        { title: 'Bayes Optimal Classifier', url: 'https://www.geeksforgeeks.org/bayes-optimal-classifier/' },
        { title: 'Optimal Classification', url: 'https://machinelearningmastery.com/bayes-optimal-classifier/' }
      ]
    }
  },
  {
    id: 'gibbs-algorithm',
    name: 'Gibbs Algorithm',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit III',
    content: {
      introduction: 'The Gibbs algorithm provides a practical approximation to the Bayes optimal classifier by randomly sampling from the posterior distribution.',
      definition: 'The Gibbs algorithm selects hypotheses randomly according to their posterior probabilities and makes predictions based on the selected hypothesis.',
      realWorldExample: 'In ensemble learning, the Gibbs algorithm might randomly select different models based on their performance probabilities for each prediction.',
      realWorldUse: 'Applied in Bayesian model averaging, ensemble methods, and situations where computing exact Bayes optimal predictions is intractable.',
      importance: 'Provides computationally feasible approximation to optimal Bayesian inference with theoretical performance guarantees.',
      detailedExplanation: `The Gibbs algorithm randomly selects a hypothesis h from the posterior distribution P(h|data) and uses h to classify new instances. This contrasts with the Bayes optimal classifier that uses all hypotheses weighted by their probabilities. The algorithm\'s expected error is at most twice the Bayes optimal error, providing theoretical performance bounds. The approach is particularly useful when the hypothesis space is large or when exact Bayes optimal computation is intractable. In practice, the algorithm can be implemented through sampling methods like Markov Chain Monte Carlo (MCMC). The random selection introduces beneficial regularization effects and can improve generalization. The algorithm connects to ensemble methods where different models are selected probabilistically. Modern applications include Bayesian neural networks and probabilistic programming frameworks.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=O2L2Uv9pdDA',
        'https://www.youtube.com/watch?v=HZGCoVF3YvM'
      ],
      externalLinks: [
        { title: 'Gibbs Algorithm', url: 'https://www.geeksforgeeks.org/gibbs-algorithm-for-machine-learning/' },
        { title: 'Bayesian Learning Algorithms', url: 'https://machinelearningmastery.com/what-is-bayesian-machine-learning/' }
      ]
    }
  },
  {
    id: 'naive-bayes-classifier',
    name: 'Naive Bayes Classifier',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit III',
    content: {
      introduction: 'Naive Bayes classifier applies Bayes theorem with the "naive" assumption of feature independence to create simple yet effective classification models.',
      definition: 'Naive Bayes assumes features are conditionally independent given the class, simplifying probability calculations while often maintaining good performance.',
      realWorldExample: 'Email spam filters use Naive Bayes to classify emails by assuming word occurrences are independent, achieving high accuracy despite the simplifying assumption.',
      realWorldUse: 'Applied in text classification, spam filtering, sentiment analysis, medical diagnosis, and real-time classification tasks.',
      importance: 'Provides simple, fast, and often surprisingly effective classification with minimal training data requirements.',
      detailedExplanation: `Naive Bayes calculates P(class|features) = P(features|class) × P(class) / P(features), assuming P(features|class) = ∏P(feature_i|class). This independence assumption greatly simplifies computation and reduces data requirements. Variants include Gaussian Naive Bayes (continuous features), Multinomial Naive Bayes (discrete counts), and Bernoulli Naive Bayes (binary features). Advantages include fast training and prediction, good performance with small datasets, handling of multiple classes naturally, and insensitivity to irrelevant features. Limitations include the strong independence assumption and poor probability estimates (though classifications are often correct). Smoothing techniques handle zero probabilities for unseen feature combinations. Despite its simplicity, Naive Bayes often performs competitively with more sophisticated algorithms, especially in text classification and with high-dimensional sparse data.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=O2L2Uv9pdDA',
        'https://www.youtube.com/watch?v=HZGCoVF3YvM'
      ],
      externalLinks: [
        { title: 'Naive Bayes Explained', url: 'https://www.analyticsvidhya.com/blog/2017/09/naive-bayes-explained/' },
        { title: 'Naive Bayes Classifier', url: 'https://scikit-learn.org/stable/modules/naive_bayes.html' }
      ]
    }
  },
  {
    id: 'expectation-maximization-gmm',
    name: 'Expectation Maximization and Gaussian Mixture Models',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit III',
    content: {
      introduction: 'Expectation Maximization (EM) algorithm learns parameters of probabilistic models with hidden variables, commonly applied to Gaussian Mixture Models.',
      definition: 'EM is an iterative algorithm that alternates between computing expected values of hidden variables (E-step) and maximizing likelihood with respect to parameters (M-step).',
      realWorldExample: 'Customer segmentation uses Gaussian Mixture Models with EM to identify distinct customer groups based on purchasing behavior without predefined categories.',
      realWorldUse: 'Applied in clustering, density estimation, missing data imputation, and learning probabilistic models with latent variables.',
      importance: 'Fundamental algorithm for unsupervised learning and parameter estimation in probabilistic models with hidden structure.',
      detailedExplanation: `EM algorithm addresses maximum likelihood estimation when some variables are unobserved (hidden/latent). The E-step computes expected values of hidden variables given current parameter estimates. The M-step finds parameters that maximize the expected log-likelihood computed in the E-step. The algorithm is guaranteed to increase likelihood at each iteration and converge to a local maximum. Gaussian Mixture Models (GMM) represent data as a mixture of Gaussian distributions, with hidden variables indicating component membership. GMM-EM alternates between computing component responsibilities (E-step) and updating component parameters (M-step). Applications include clustering (soft assignment), density estimation, and dimensionality reduction. Challenges include local optima sensitivity, choosing the number of components, and computational complexity. Extensions include regularization, online EM, and variational EM for approximate inference.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=REypj2sy_5U',
        'https://www.youtube.com/watch?v=HZGCoVF3YvM'
      ],
      externalLinks: [
        { title: 'EM Algorithm Explained', url: 'https://www.analyticsvidhya.com/blog/2019/10/gaussian-mixture-models-clustering/' },
        { title: 'Gaussian Mixture Models', url: 'https://scikit-learn.org/stable/modules/mixture.html' }
      ]
    }
  },
  {
    id: 'hidden-markov-models',
    name: 'Hidden Markov Models',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit III',
    content: {
      introduction: 'Hidden Markov Models (HMMs) model sequential data with hidden states, enabling analysis of time series and sequential patterns.',
      definition: 'HMMs are probabilistic models for sequential data where observations depend on hidden states that follow Markov properties.',
      realWorldExample: 'Speech recognition systems use HMMs to model phonemes as hidden states that generate observable acoustic features over time.',
      realWorldUse: 'Applied in speech recognition, natural language processing, bioinformatics, finance, and any sequential data analysis.',
      importance: 'Fundamental model for sequential data analysis, providing framework for temporal pattern recognition and prediction.',
      detailedExplanation: `HMMs consist of hidden states following Markov property (current state depends only on previous state), transition probabilities between states, and emission probabilities linking states to observations. Key algorithms include Forward algorithm (computing observation probability), Viterbi algorithm (finding most likely state sequence), and Baum-Welch algorithm (parameter learning using EM). The model assumes observations are conditionally independent given states and states form a Markov chain. Applications include part-of-speech tagging (states are grammatical categories), gene finding (states represent coding/non-coding regions), and financial modeling (states represent market regimes). Extensions include higher-order HMMs, continuous observation HMMs, and hierarchical HMMs. Modern alternatives include Recurrent Neural Networks and Transformer models for sequential data.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=kqSzLo9fenk',
        'https://www.youtube.com/watch?v=HZGCoVF3YvM'
      ],
      externalLinks: [
        { title: 'Hidden Markov Models', url: 'https://www.analyticsvidhya.com/blog/2018/12/introduction-hidden-markov-models-python/' },
        { title: 'HMM Tutorial', url: 'https://www.geeksforgeeks.org/hidden-markov-model-in-machine-learning/' }
      ]
    }
  }
];