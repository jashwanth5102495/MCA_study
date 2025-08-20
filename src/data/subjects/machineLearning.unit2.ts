import { Topic } from '../syllabus';

export const machineLearningUnit2: Topic[] = [
  {
    id: 'instance-based-knn',
    name: 'Instance-based Learning: K-Nearest Neighbour Learning',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit II',
    content: {
      introduction: 'K-Nearest Neighbour (KNN) is a simple, instance-based learning algorithm that classifies data points based on the majority class of their nearest neighbors.',
      definition: 'KNN is a lazy learning algorithm that stores all training instances and classifies new instances based on the majority vote of k nearest neighbors in the feature space.',
      realWorldExample: 'Netflix recommends movies by finding users with similar viewing patterns (nearest neighbors) and suggesting movies they enjoyed.',
      realWorldUse: 'Used in recommendation systems, pattern recognition, outlier detection, and any classification task where local similarity is important.',
      importance: 'Provides intuitive approach to classification that works well with sufficient data and appropriate distance metrics.',
      detailedExplanation: `KNN algorithm stores all training examples and defers computation until classification time. For a new instance, it calculates distances to all training examples, selects k nearest neighbors, and assigns the majority class. Distance metrics include Euclidean, Manhattan, and Minkowski distances. The choice of k affects performance: small k is sensitive to noise, large k may ignore local patterns. Advantages include simplicity, no assumptions about data distribution, and effectiveness with sufficient data. Disadvantages include computational cost at prediction time, sensitivity to irrelevant features, and poor performance with high-dimensional data (curse of dimensionality). Improvements include weighted voting, feature selection, and efficient data structures like KD-trees for faster neighbor search.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=HVXime0nQeI',
        'https://www.youtube.com/watch?v=4HKqjENq9OU'
      ],
      externalLinks: [
        { title: 'KNN Algorithm Explained', url: 'https://www.analyticsvidhya.com/blog/2018/03/introduction-k-neighbours-algorithm-clustering/' },
        { title: 'K-Nearest Neighbors', url: 'https://scikit-learn.org/stable/modules/neighbors.html' }
      ]
    }
  },
  {
    id: 'artificial-neural-networks-intro',
    name: 'Artificial Neural Networks: Introduction',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit II',
    content: {
      introduction: 'Artificial Neural Networks (ANNs) are computing systems inspired by biological neural networks, capable of learning complex patterns from data.',
      definition: 'ANNs are interconnected networks of artificial neurons that process information through weighted connections and activation functions to learn patterns and make predictions.',
      realWorldExample: 'Google\'s image recognition system uses neural networks to identify objects in photos, enabling features like automatic photo tagging and visual search.',
      realWorldUse: 'Applied in image recognition, speech processing, natural language processing, medical diagnosis, and autonomous systems.',
      importance: 'Foundation of modern AI and deep learning, enabling breakthrough performance in complex pattern recognition tasks.',
      detailedExplanation: `Neural networks consist of interconnected nodes (neurons) organized in layers: input layer receives data, hidden layers process information, and output layer produces results. Each connection has a weight that determines influence strength. Neurons apply activation functions to weighted inputs to produce outputs. The network learns by adjusting weights through training algorithms like backpropagation. Key concepts include forward propagation (computing outputs), backward propagation (computing gradients), and weight updates using optimization algorithms. Network architecture choices include number of layers, neurons per layer, and activation functions. Training involves presenting examples, computing errors, and updating weights to minimize prediction errors. Modern applications use deep networks with many layers for complex pattern recognition.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=aircAruvnKk',
        'https://www.youtube.com/watch?v=IHZwWFHWa-w'
      ],
      externalLinks: [
        { title: 'Neural Networks Explained', url: 'https://www.3blue1brown.com/topics/neural-networks' },
        { title: 'Introduction to Neural Networks', url: 'https://www.analyticsvidhya.com/blog/2017/05/neural-network-from-scratch-in-python-and-r/' }
      ]
    }
  },
  {
    id: 'perceptrons',
    name: 'Perceptrons',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit II',
    content: {
      introduction: 'The perceptron is the simplest form of artificial neural network, serving as the building block for more complex neural architectures.',
      definition: 'A perceptron is a linear classifier that takes multiple inputs, applies weights and bias, and produces a binary output through an activation function.',
      realWorldExample: 'Email spam filters use perceptron-like models to classify emails as spam or legitimate based on features like sender, keywords, and attachments.',
      realWorldUse: 'Used in binary classification, linear separation problems, and as building blocks for multi-layer neural networks.',
      importance: 'Provides fundamental understanding of neural computation and serves as the foundation for more complex neural architectures.',
      detailedExplanation: `The perceptron computes a weighted sum of inputs plus a bias term, then applies a step activation function to produce binary output. The learning algorithm adjusts weights when misclassifications occur, using the perceptron learning rule. The algorithm is guaranteed to converge for linearly separable data but fails for non-linearly separable problems like XOR. Key limitations include inability to solve non-linear problems and sensitivity to feature scaling. The perceptron convergence theorem proves that the algorithm will find a solution if one exists. Historical significance includes being one of the first learning algorithms and inspiring development of multi-layer networks. Modern relevance includes understanding gradient descent and serving as introduction to neural network concepts.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=4Gac5I64LM4',
        'https://www.youtube.com/watch?v=aircAruvnKk'
      ],
      externalLinks: [
        { title: 'Perceptron Algorithm', url: 'https://www.geeksforgeeks.org/perceptron-algorithm/' },
        { title: 'Understanding Perceptrons', url: 'https://machinelearningmastery.com/perceptron-algorithm-for-classification-in-python/' }
      ]
    }
  },
  {
    id: 'multi-layer-networks-backpropagation',
    name: 'Multi-layer Networks and Back-propagation',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit II',
    content: {
      introduction: 'Multi-layer neural networks with backpropagation overcome perceptron limitations by learning non-linear patterns through hidden layers.',
      definition: 'Multi-layer networks contain hidden layers between input and output, trained using backpropagation algorithm that propagates errors backward to update weights.',
      realWorldExample: 'Deep learning models for autonomous vehicles use multi-layer networks to process camera images and make driving decisions through multiple processing stages.',
      realWorldUse: 'Applied in image recognition, speech processing, natural language understanding, and any complex pattern recognition task.',
      importance: 'Enables learning of non-linear relationships and complex patterns that single-layer networks cannot handle.',
      detailedExplanation: `Multi-layer networks consist of input layer, one or more hidden layers, and output layer. Each layer transforms inputs through weighted connections and activation functions. Backpropagation training involves forward pass (computing outputs) and backward pass (computing gradients and updating weights). The algorithm uses chain rule of calculus to compute gradients efficiently. Key components include loss function (measuring prediction error), optimization algorithm (updating weights), and activation functions (introducing non-linearity). Training challenges include vanishing gradients, overfitting, and local minima. Solutions include proper weight initialization, regularization techniques, and advanced optimization algorithms. The universal approximation theorem shows that multi-layer networks can approximate any continuous function given sufficient hidden units.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Ilg3gGewQ5U',
        'https://www.youtube.com/watch?v=aircAruvnKk'
      ],
      externalLinks: [
        { title: 'Backpropagation Explained', url: 'https://www.3blue1brown.com/lessons/backpropagation' },
        { title: 'Multi-layer Perceptron', url: 'https://scikit-learn.org/stable/modules/neural_networks_supervised.html' }
      ]
    }
  },
  {
    id: 'activation-units',
    name: 'Activation Units',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit II',
    content: {
      introduction: 'Activation functions determine the output of neural network nodes and introduce non-linearity essential for learning complex patterns.',
      definition: 'Activation functions are mathematical functions applied to neuron inputs to determine the neuron\'s output, introducing non-linearity into neural networks.',
      realWorldExample: 'Modern image recognition systems use ReLU activation functions in hidden layers and softmax in output layers to classify thousands of object categories.',
      realWorldUse: 'Used in all neural network architectures to introduce non-linearity, control information flow, and enable complex pattern learning.',
      importance: 'Critical for neural network functionality, enabling learning of non-linear relationships and complex decision boundaries.',
      detailedExplanation: `Common activation functions include: Sigmoid (smooth, bounded, but suffers from vanishing gradients), Tanh (zero-centered, bounded), ReLU (simple, efficient, addresses vanishing gradients), Leaky ReLU (prevents dying neurons), and Softmax (probability distribution for multi-class classification). Each function has different properties affecting training dynamics and network performance. Sigmoid and tanh are smooth but can cause vanishing gradients in deep networks. ReLU is computationally efficient and helps with gradient flow but can cause dying neurons. Advanced functions like Swish and GELU provide smooth alternatives to ReLU. The choice of activation function affects convergence speed, final performance, and training stability. Output layer activation depends on the task: sigmoid for binary classification, softmax for multi-class, linear for regression.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=aircAruvnKk',
        'https://www.youtube.com/watch?v=Ilg3gGewQ5U'
      ],
      externalLinks: [
        { title: 'Activation Functions', url: 'https://www.analyticsvidhya.com/blog/2020/01/fundamentals-deep-learning-activation-functions-when-to-use-them/' },
        { title: 'Neural Network Activation Functions', url: 'https://machinelearningmastery.com/choose-an-activation-function-for-deep-learning/' }
      ]
    }
  },
  {
    id: 'svm-margin-maximization',
    name: 'Support Vector Machines: Margin and Maximization',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit II',
    content: {
      introduction: 'Support Vector Machines (SVMs) find optimal decision boundaries by maximizing the margin between different classes.',
      definition: 'SVMs are supervised learning algorithms that find the hyperplane with maximum margin separating different classes, using support vectors to define the boundary.',
      realWorldExample: 'Medical diagnosis systems use SVMs to classify patients as healthy or diseased based on test results, maximizing the separation between classes.',
      realWorldUse: 'Applied in text classification, image recognition, bioinformatics, and any classification task requiring robust decision boundaries.',
      importance: 'Provides theoretically grounded approach to classification with good generalization properties and handling of high-dimensional data.',
      detailedExplanation: `SVM finds the hyperplane that maximally separates classes by maximizing the margin (distance between hyperplane and nearest points). Support vectors are the training points closest to the decision boundary that define the margin. The algorithm seeks to minimize classification error while maximizing margin, balancing bias and variance. For linearly separable data, SVM finds the unique optimal hyperplane. For non-separable data, slack variables allow some misclassification while still maximizing margin. The optimization problem involves quadratic programming with constraints. Key advantages include effectiveness in high dimensions, memory efficiency (uses only support vectors), and versatility through kernel functions. Limitations include sensitivity to feature scaling and poor performance with noisy data.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=efR1C6CvhmE',
        'https://www.youtube.com/watch?v=_PwhiWxHK8o'
      ],
      externalLinks: [
        { title: 'SVM Explained', url: 'https://www.analyticsvidhya.com/blog/2017/09/understaing-support-vector-machine-example-code/' },
        { title: 'Support Vector Machines', url: 'https://scikit-learn.org/stable/modules/svm.html' }
      ]
    }
  },
  {
    id: 'svm-primal-problem',
    name: 'SVM: The Primal Problem',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit II',
    content: {
      introduction: 'The SVM primal problem formulates the optimization objective for finding the maximum margin hyperplane as a constrained optimization problem.',
      definition: 'The primal problem in SVM is the original constrained optimization formulation that seeks to minimize the norm of the weight vector while ensuring correct classification.',
      realWorldExample: 'Financial institutions formulate credit scoring as an SVM primal problem, minimizing model complexity while correctly separating good and bad credit risks.',
      realWorldUse: 'Used in understanding SVM theory, algorithm development, and optimization problem formulation in machine learning.',
      importance: 'Provides theoretical foundation for SVM algorithm and understanding of the optimization principles behind margin maximization.',
      detailedExplanation: `The primal problem minimizes (1/2)||w||² subject to constraints yi(w·xi + b) ≥ 1 for all training points. This formulation maximizes margin (2/||w||) by minimizing ||w||². For non-separable data, slack variables ξi are introduced with penalty parameter C, creating the soft margin formulation. The objective becomes minimizing (1/2)||w||² + C∑ξi subject to yi(w·xi + b) ≥ 1 - ξi and ξi ≥ 0. The parameter C controls the trade-off between margin maximization and classification error. Large C emphasizes correct classification, small C allows more errors for larger margin. The primal problem is a convex quadratic programming problem with linear constraints, guaranteeing a global optimum. However, the dual formulation is often preferred for computational reasons and kernel applications.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=efR1C6CvhmE',
        'https://www.youtube.com/watch?v=_PwhiWxHK8o'
      ],
      externalLinks: [
        { title: 'SVM Optimization', url: 'https://www.geeksforgeeks.org/support-vector-machine-algorithm/' },
        { title: 'SVM Mathematical Formulation', url: 'https://web.stanford.edu/~hastie/ElemStatLearn/' }
      ]
    }
  },
  {
    id: 'svm-lagrangian-dual',
    name: 'SVM: The Lagrangian Dual and Solution',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit II',
    content: {
      introduction: 'The Lagrangian dual formulation of SVM provides computational advantages and enables the kernel trick for non-linear classification.',
      definition: 'The dual problem transforms the SVM optimization into a form involving only dot products of training examples, enabling efficient computation and kernel methods.',
      realWorldExample: 'Text classification systems use the dual formulation with kernel functions to handle high-dimensional word vectors efficiently.',
      realWorldUse: 'Applied in kernel SVM implementations, non-linear classification, and efficient optimization algorithms for large datasets.',
      importance: 'Enables kernel methods for non-linear classification and provides computationally efficient algorithms for SVM training.',
      detailedExplanation: `The dual problem maximizes ∑αi - (1/2)∑∑αiαjyiyjxi·xj subject to ∑αiyi = 0 and 0 ≤ αi ≤ C. The Lagrange multipliers αi correspond to training examples, with non-zero values indicating support vectors. The solution involves only dot products xi·xj, enabling kernel substitution K(xi,xj) for non-linear mappings. The dual formulation has advantages: depends only on dot products (enabling kernels), number of variables equals training examples (beneficial when features >> examples), and provides sparse solutions (only support vectors matter). The KKT conditions characterize the optimal solution and provide insights into support vector identification. Solving the dual problem typically uses specialized algorithms like Sequential Minimal Optimization (SMO) that efficiently handle the quadratic programming constraints.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=efR1C6CvhmE',
        'https://www.youtube.com/watch?v=_PwhiWxHK8o'
      ],
      externalLinks: [
        { title: 'SVM Dual Problem', url: 'https://www.geeksforgeeks.org/support-vector-machine-algorithm/' },
        { title: 'Lagrangian Duality in SVM', url: 'https://web.stanford.edu/~hastie/ElemStatLearn/' }
      ]
    }
  }
];