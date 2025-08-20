import { Topic } from '../syllabus';

export const machineLearningUnit5: Topic[] = [
  {
    id: 'genetic-algorithms-introduction',
    name: 'Genetic Algorithms: Representing Hypothesis',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit V',
    content: {
      introduction: 'Genetic algorithms represent hypotheses as chromosomes and evolve solutions through natural selection principles.',
      definition: 'Genetic algorithms encode potential solutions (hypotheses) as strings of symbols (chromosomes) that can be manipulated through genetic operators.',
      realWorldExample: 'Neural network architecture search uses genetic algorithms where each chromosome represents a network structure (layers, connections, activation functions).',
      realWorldUse: 'Applied in optimization problems, neural network design, feature selection, and any search problem with large solution spaces.',
      importance: 'Provides robust search method for complex optimization problems where traditional methods may fail or be inefficient.',
      detailedExplanation: `Hypothesis representation in genetic algorithms involves encoding solutions as fixed-length strings (chromosomes) where each position (gene) represents a parameter or decision variable. Common encodings include binary strings for discrete variables, real-valued vectors for continuous parameters, and tree structures for variable-length solutions. The encoding must capture all relevant aspects of the solution while enabling meaningful genetic operations. For machine learning, hypotheses might represent rule sets (each gene is a rule condition), neural network weights (genes are connection strengths), or feature subsets (binary genes indicate feature inclusion). The representation affects algorithm performance and must balance expressiveness with computational efficiency. Good representations enable smooth fitness landscapes where small genetic changes produce small fitness changes. The choice of representation is crucial and domain-specific, requiring understanding of both the problem structure and genetic algorithm mechanics.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=MacVqujSXWE',
        'https://www.youtube.com/watch?v=nhT56blfRpE'
      ],
      externalLinks: [
        { title: 'Genetic Algorithm Representation', url: 'https://www.geeksforgeeks.org/genetic-algorithms/' },
        { title: 'GA Encoding Methods', url: 'https://www.tutorialspoint.com/genetic_algorithms/genetic_algorithms_fundamentals.htm' }
      ]
    }
  },
  {
    id: 'genetic-operators-fitness-selection',
    name: 'Genetic Operators, Fitness Function and Selection',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit V',
    content: {
      introduction: 'Genetic operators manipulate chromosomes to create new solutions, while fitness functions and selection mechanisms guide evolution toward better solutions.',
      definition: 'Genetic operators (crossover, mutation) create offspring from parents, fitness functions evaluate solution quality, and selection chooses parents for reproduction.',
      realWorldExample: 'Evolving trading strategies uses crossover to combine successful rules from different strategies and mutation to explore new trading conditions.',
      realWorldUse: 'Applied in evolutionary computation, optimization, machine learning, and any problem requiring adaptive search strategies.',
      importance: 'Core mechanisms that enable genetic algorithms to explore solution spaces effectively and converge to high-quality solutions.',
      detailedExplanation: `Crossover operators combine genetic material from two parents to create offspring, including single-point crossover (split at one position), multi-point crossover (multiple split points), and uniform crossover (randomly inherit each gene). Mutation operators introduce random changes to maintain diversity, with methods like bit-flip mutation for binary strings and Gaussian mutation for real values. Fitness functions measure solution quality and must be carefully designed to guide search toward desired objectives. Selection mechanisms choose parents based on fitness: roulette wheel selection (probability proportional to fitness), tournament selection (compete in small groups), and rank-based selection (based on fitness ranking). The balance between exploration (mutation, diversity) and exploitation (selection pressure) is crucial. Parameters like crossover rate, mutation rate, and selection pressure significantly affect algorithm performance. Advanced techniques include adaptive operators that adjust rates during evolution.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=MacVqujSXWE',
        'https://www.youtube.com/watch?v=nhT56blfRpE'
      ],
      externalLinks: [
        { title: 'Genetic Operators', url: 'https://www.geeksforgeeks.org/genetic-algorithms/' },
        { title: 'Selection Methods in GA', url: 'https://www.tutorialspoint.com/genetic_algorithms/genetic_algorithms_parent_selection.htm' }
      ]
    }
  },
  {
    id: 'simple-ga-applications',
    name: 'Simple Applications of Genetic Algorithm',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit V',
    content: {
      introduction: 'Simple genetic algorithm applications demonstrate the versatility and effectiveness of evolutionary approaches across various problem domains.',
      definition: 'Simple GA applications involve straightforward problem formulations where genetic algorithms can effectively search for optimal or near-optimal solutions.',
      realWorldExample: 'Traveling salesman problem uses GA where each chromosome represents a city tour, crossover combines tour segments, and fitness is inverse of tour length.',
      realWorldUse: 'Applied in scheduling, routing, parameter optimization, game playing, and combinatorial optimization problems.',
      importance: 'Provides practical examples of GA implementation and demonstrates the algorithm\'s broad applicability.',
      detailedExplanation: `Common simple applications include: Function optimization where chromosomes encode parameter values and fitness is function value; Knapsack problem where binary chromosomes indicate item inclusion; Job scheduling where chromosomes represent task orderings; Feature selection where binary genes indicate feature inclusion; and Parameter tuning where chromosomes encode hyperparameter values. Implementation steps include: define chromosome representation, design fitness function, choose genetic operators, set algorithm parameters, and run evolution loop. Success factors include appropriate representation, well-designed fitness function, balanced exploration/exploitation, and sufficient population diversity. Common challenges include premature convergence, local optima, and computational efficiency. Solutions include diversity maintenance techniques, adaptive parameters, and hybrid approaches combining GA with local search. These applications demonstrate GA\'s strength in handling discrete, combinatorial, and multi-modal optimization problems.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=MacVqujSXWE',
        'https://www.youtube.com/watch?v=nhT56blfRpE'
      ],
      externalLinks: [
        { title: 'GA Applications', url: 'https://www.geeksforgeeks.org/genetic-algorithms/' },
        { title: 'Simple GA Examples', url: 'https://www.tutorialspoint.com/genetic_algorithms/genetic_algorithms_quick_guide.htm' }
      ]
    }
  },
  {
    id: 'ga-decision-trees',
    name: 'Application of GA in Decision Trees',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit V',
    content: {
      introduction: 'Genetic algorithms can optimize decision tree construction by evolving tree structures, split conditions, and pruning strategies.',
      definition: 'GA-based decision trees use evolutionary approaches to optimize tree structure, feature selection, and splitting criteria beyond traditional greedy methods.',
      realWorldExample: 'Medical diagnosis systems use GA to evolve decision trees that balance accuracy with interpretability, finding optimal combinations of symptoms and tests.',
      realWorldUse: 'Applied in automated machine learning, feature selection, rule extraction, and creating interpretable models with optimal performance.',
      importance: 'Overcomes limitations of greedy tree construction algorithms and can find globally better solutions through population-based search.',
      detailedExplanation: `GA can optimize various aspects of decision trees: tree structure (chromosome encodes tree topology), split conditions (genes represent feature-threshold pairs), feature selection (binary genes indicate feature usage), and pruning decisions (genes control which branches to keep). Representation methods include linear encoding (pre-order traversal), tree-based encoding (direct tree structure), and rule-based encoding (if-then rules). Fitness functions typically combine accuracy with tree complexity to prevent overfitting. Specialized crossover operators preserve tree structure while exchanging subtrees between parents. Mutation operators can change split conditions, add/remove nodes, or modify tree structure. Advantages include global optimization (vs. greedy local search), multi-objective optimization (accuracy vs. complexity), and automatic feature selection. Challenges include maintaining valid tree structures during genetic operations and computational complexity for large datasets.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=MacVqujSXWE',
        'https://www.youtube.com/watch?v=7VeUPuFGJHk'
      ],
      externalLinks: [
        { title: 'GA for Decision Trees', url: 'https://www.geeksforgeeks.org/genetic-algorithm-for-reinforcement-learning/' },
        { title: 'Evolutionary Decision Trees', url: 'https://link.springer.com/article/10.1023/A:1022602019183' }
      ]
    }
  },
  {
    id: 'ga-clustering',
    name: 'Genetic Algorithm Based Clustering',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit V',
    content: {
      introduction: 'Genetic algorithms can optimize clustering by evolving cluster centers, assignments, and the number of clusters simultaneously.',
      definition: 'GA-based clustering uses evolutionary search to optimize cluster configurations, overcoming local optima problems in traditional clustering algorithms.',
      realWorldExample: 'Customer segmentation uses GA clustering to automatically determine optimal number of customer groups and their characteristics without prior assumptions.',
      realWorldUse: 'Applied in market segmentation, image segmentation, data mining, and any clustering task requiring global optimization.',
      importance: 'Addresses limitations of traditional clustering methods like K-means by providing global search and automatic parameter selection.',
      detailedExplanation: `GA clustering can optimize: cluster centers (genes encode centroid coordinates), cluster assignments (genes indicate point-cluster membership), number of clusters (variable-length chromosomes), and cluster shapes (genes encode cluster parameters). Common representations include centroid-based encoding where chromosomes contain cluster center coordinates, and partition-based encoding where genes indicate cluster membership for each data point. Fitness functions typically minimize within-cluster distances while maximizing between-cluster separation, often using metrics like silhouette coefficient or Davies-Bouldin index. Specialized operators include centroid crossover (exchange cluster centers), assignment crossover (exchange cluster memberships), and mutation operators that perturb cluster centers or reassign points. Advantages include automatic determination of cluster numbers, global optimization avoiding local optima, and handling non-spherical clusters. Challenges include computational complexity and designing appropriate fitness functions for specific clustering objectives.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=MacVqujSXWE',
        'https://www.youtube.com/watch?v=4b5d3muPQmA'
      ],
      externalLinks: [
        { title: 'GA Clustering', url: 'https://www.geeksforgeeks.org/genetic-algorithm-for-clustering/' },
        { title: 'Evolutionary Clustering', url: 'https://www.researchgate.net/publication/220542996_A_Genetic_Algorithm_for_Clustering' }
      ]
    }
  },
  {
    id: 'single-bi-objective-optimization',
    name: 'Single Objective and Bi-objective Optimization Problems using GA',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit V',
    content: {
      introduction: 'Genetic algorithms can handle both single-objective optimization (one goal) and multi-objective optimization (multiple conflicting goals) effectively.',
      definition: 'Single-objective GA optimizes one fitness function, while multi-objective GA simultaneously optimizes multiple conflicting objectives using Pareto optimality concepts.',
      realWorldExample: 'Engineering design uses multi-objective GA to optimize both cost and performance of products, finding trade-off solutions rather than single optimal design.',
      realWorldUse: 'Applied in engineering design, portfolio optimization, resource allocation, and any problem with multiple competing objectives.',
      importance: 'Enables handling of real-world problems that typically involve multiple conflicting objectives rather than single optimization goals.',
      detailedExplanation: `Single-objective GA uses standard fitness function and selection based on single criterion. The algorithm converges to single optimal solution or small region of optimal solutions. Multi-objective GA handles conflicting objectives where improving one objective may worsen others. Key concepts include Pareto dominance (solution A dominates B if A is better in at least one objective and not worse in others) and Pareto front (set of non-dominated solutions). Popular algorithms include NSGA-II (Non-dominated Sorting GA) and SPEA2 (Strength Pareto EA). Multi-objective GA maintains population diversity along Pareto front and provides decision makers with range of trade-off solutions. Selection mechanisms consider both dominance ranking and crowding distance to maintain spread. The output is Pareto front approximation rather than single solution, requiring post-processing for final decision making.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=MacVqujSXWE',
        'https://www.youtube.com/watch?v=nhT56blfRpE'
      ],
      externalLinks: [
        { title: 'Multi-objective Optimization', url: 'https://www.geeksforgeeks.org/genetic-algorithms/' },
        { title: 'NSGA-II Algorithm', url: 'https://www.researchgate.net/publication/3330308_A_fast_and_elitist_multiobjective_genetic_algorithm_NSGA-II' }
      ]
    }
  },
  {
    id: 'ga-gradient-descent',
    name: 'Using GA to Emulate Gradient Descent/Ascent',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit V',
    content: {
      introduction: 'Genetic algorithms can emulate gradient-based optimization methods, providing derivative-free alternatives for complex optimization landscapes.',
      definition: 'GA can approximate gradient descent behavior through population-based search and specialized operators that mimic gradient information.',
      realWorldExample: 'Neural network training uses GA when gradients are unavailable or unreliable, such as with discontinuous activation functions or noisy fitness landscapes.',
      realWorldUse: 'Applied in neural network training, black-box optimization, and problems where gradient information is unavailable or unreliable.',
      importance: 'Provides alternative optimization approach when traditional gradient methods fail or are inapplicable.',
      detailedExplanation: `GA can emulate gradient descent through several mechanisms: population spread provides local gradient estimation, selection pressure drives movement toward better solutions (analogous to gradient direction), and mutation provides exploration around current solutions. Specialized techniques include: differential evolution (uses population differences to estimate gradients), evolution strategies (adapt step sizes similar to learning rates), and hybrid approaches combining GA with local gradient information. Advantages over gradient descent include: no requirement for differentiable functions, robustness to noise and discontinuities, global search capability avoiding local minima, and parallelization potential. Disadvantages include slower convergence and higher computational cost per iteration. The approach is particularly useful for: non-differentiable functions, noisy objective functions, discrete optimization variables, and multi-modal landscapes. Modern applications include neural architecture search and hyperparameter optimization where traditional gradient methods are inapplicable.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=MacVqujSXWE',
        'https://www.youtube.com/watch?v=nhT56blfRpE'
      ],
      externalLinks: [
        { title: 'GA vs Gradient Descent', url: 'https://www.geeksforgeeks.org/genetic-algorithms/' },
        { title: 'Evolution Strategies', url: 'https://en.wikipedia.org/wiki/Evolution_strategy' }
      ]
    }
  }
];