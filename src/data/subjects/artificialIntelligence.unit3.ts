import { Topic } from '../syllabus';

export const artificialIntelligenceUnit3: Topic[] = [
  {
    id: 'basic-plan-generation-strips',
    name: 'Basic plan generation systems – Strips',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit III',
    content: {
      introduction: 'STRIPS is a fundamental planning system that represents actions and states using a simple but powerful formalism for automated planning.',
      definition: 'STRIPS (Stanford Research Institute Problem Solver) is a planning system that represents actions with preconditions and effects, and uses means-ends analysis to generate plans.',
      realWorldExample: 'Like planning a trip where you need to book flights (requires money and dates), pack bags (requires clothes and suitcase), and arrange transportation (requires booking and timing).',
      realWorldUse: 'Used in robotics, automated manufacturing, logistics planning, and any domain requiring sequential action planning.',
      importance: 'Provides the foundation for automated planning and demonstrates how AI systems can generate sequences of actions to achieve goals.',
      detailedExplanation: `STRIPS represents the world as a set of logical propositions and actions as operators with preconditions (what must be true before the action), add effects (what becomes true after the action), and delete effects (what becomes false after the action). The planning algorithm uses means-ends analysis, working backwards from goals to find actions that achieve them, then recursively planning to achieve the preconditions of those actions. The STRIPS assumption states that actions only change what is explicitly mentioned in their effects, leaving everything else unchanged. This planning approach generates sequences of actions that transform the initial state into a state where all goals are satisfied. The system uses a simple but effective representation that has influenced many subsequent planning systems and remains important for understanding the fundamentals of automated planning.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2ePf9rue1Ao',
        'https://www.youtube.com/watch?v=kbBdfFtIddQ'
      ],
      externalLinks: [
        { title: 'STRIPS Planning', url: 'https://www.geeksforgeeks.org/strips-planner-in-ai/' },
        { title: 'Automated Planning', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_planning.htm' }
      ]
    }
  },
  {
    id: 'advanced-plan-generation-k-strips',
    name: 'Advanced plan generation systems – K strips',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit III',
    content: {
      introduction: 'K-STRIPS extends the basic STRIPS planning system with more sophisticated features for handling complex planning domains and improving planning efficiency.',
      definition: 'K-STRIPS is an advanced planning system that builds upon STRIPS by adding features like conditional effects, quantified preconditions, and more expressive action representations.',
      realWorldExample: 'Like upgrading from a simple task planner to a sophisticated project management system that can handle dependencies, resources, and conditional requirements.',
      realWorldUse: 'Used in advanced robotics, automated manufacturing, complex logistics planning, and domains requiring sophisticated action modeling.',
      importance: 'Provides more expressive planning capabilities for complex real-world domains that cannot be adequately represented in basic STRIPS.',
      detailedExplanation: `K-STRIPS extends STRIPS with several important enhancements including conditional effects that allow actions to have different outcomes depending on the current state, quantified preconditions and effects that can refer to sets of objects, and more sophisticated state representations. The system can handle planning problems with complex constraints, resource limitations, and temporal considerations that are beyond the scope of basic STRIPS. K-STRIPS also incorporates more efficient planning algorithms that can handle larger problem spaces and more complex goal structures. The system supports hierarchical planning where complex goals can be decomposed into subgoals, and it can handle planning domains with uncertainty and incomplete information. These enhancements make K-STRIPS suitable for real-world applications where the simplifying assumptions of basic STRIPS are too restrictive. The trade-off is increased computational complexity, requiring more sophisticated algorithms and heuristics to maintain planning efficiency while providing the additional expressiveness needed for complex domains.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2ePf9rue1Ao',
        'https://www.youtube.com/watch?v=kbBdfFtIddQ'
      ],
      externalLinks: [
        { title: 'Advanced Planning Systems', url: 'https://www.geeksforgeeks.org/planning-in-ai/' },
        { title: 'AI Planning Algorithms', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_planning.htm' }
      ]
    }
  },
  {
    id: 'strategic-explanations',
    name: 'Strategic explanations – Why, Why not and how explanations',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit III',
    content: {
      introduction: 'Strategic explanations provide different types of reasoning explanations that help users understand AI system decisions and build trust in automated reasoning.',
      definition: 'Strategic explanations are structured responses that explain why a conclusion was reached, why alternatives were rejected, and how the reasoning process worked.',
      realWorldExample: 'Like a doctor explaining not just the diagnosis, but why other diseases were ruled out and how the diagnostic process led to the conclusion.',
      realWorldUse: 'Used in expert systems, medical diagnosis, legal reasoning, and any AI application where users need to understand and trust system decisions.',
      importance: 'Essential for building user trust, enabling system debugging, and meeting requirements for explainable AI in critical applications.',
      detailedExplanation: `Strategic explanations encompass three main types of explanations that address different user needs. "Why" explanations justify conclusions by showing the reasoning chain that led to a particular decision, including the facts, rules, and inference steps used. "Why not" explanations address user questions about why certain alternatives were not chosen or why expected conclusions were not reached, helping users understand the system's reasoning boundaries and limitations. "How" explanations describe the reasoning process itself, showing the methods and strategies used to solve the problem. These explanations must be tailored to different user types, from domain experts who need detailed technical justifications to end users who need intuitive explanations. The challenge is generating explanations that are both accurate and understandable, requiring the system to maintain detailed traces of its reasoning process and to present this information in accessible formats. Effective explanation systems also need to handle follow-up questions and provide different levels of detail based on user needs and expertise.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2ePf9rue1Ao',
        'https://www.youtube.com/watch?v=kbBdfFtIddQ'
      ],
      externalLinks: [
        { title: 'Explainable AI', url: 'https://www.geeksforgeeks.org/explainable-ai/' },
        { title: 'AI Explanation Systems', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_expert_systems.htm' }
      ]
    }
  },
  {
    id: 'forms-of-learning',
    name: 'Learning: Forms of Learning',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit III',
    content: {
      introduction: 'Forms of learning in AI encompass different approaches for enabling machines to improve their performance through experience and data.',
      definition: 'Forms of learning refer to different categories of machine learning including supervised, unsupervised, reinforcement, and other learning paradigms used in AI systems.',
      realWorldExample: 'Like different ways humans learn: from teachers (supervised), by discovering patterns (unsupervised), or through trial and error with rewards (reinforcement).',
      realWorldUse: 'Used in machine learning applications, pattern recognition, data mining, and adaptive AI systems across various domains.',
      importance: 'Provides the foundation for creating AI systems that can adapt, improve, and generalize from experience rather than being explicitly programmed.',
      detailedExplanation: `The main forms of learning in AI include supervised learning where systems learn from labeled examples to make predictions on new data, unsupervised learning where systems discover hidden patterns in unlabeled data, and reinforcement learning where systems learn through interaction with an environment using rewards and penalties. Semi-supervised learning combines labeled and unlabeled data, while transfer learning applies knowledge from one domain to another. Online learning adapts continuously as new data arrives, while batch learning processes all data at once. Active learning allows systems to query for the most informative examples, and meta-learning enables systems to learn how to learn more effectively. Each form of learning is suited to different types of problems and data availability scenarios. The choice of learning approach depends on factors such as the availability of labeled data, the nature of the problem, computational constraints, and the need for interpretability. Understanding these different forms enables the design of appropriate learning systems for specific applications and domains.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2ePf9rue1Ao',
        'https://www.youtube.com/watch?v=kbBdfFtIddQ'
      ],
      externalLinks: [
        { title: 'Types of Machine Learning', url: 'https://www.geeksforgeeks.org/types-of-machine-learning/' },
        { title: 'Learning in AI', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_machine_learning.htm' }
      ]
    }
  },
  {
    id: 'inductive-learning',
    name: 'Inductive learning',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit III',
    content: {
      introduction: 'Inductive learning enables AI systems to generalize from specific examples to form general rules and make predictions about unseen data.',
      definition: 'Inductive learning is a form of machine learning that infers general patterns and rules from specific training examples to make predictions on new, unseen data.',
      realWorldExample: 'Like learning that "all observed swans are white" from seeing many white swans, then predicting that the next swan will also be white.',
      realWorldUse: 'Used in classification tasks, pattern recognition, data mining, and any application requiring generalization from examples.',
      importance: 'Forms the basis for most supervised learning algorithms and enables AI systems to make intelligent predictions based on past experience.',
      detailedExplanation: `Inductive learning works by finding patterns and regularities in training data that can be used to make predictions about new instances. The process involves hypothesis formation where the system generates possible rules or models that explain the training data, hypothesis evaluation to determine which hypotheses best fit the data, and generalization to apply the learned rules to new situations. Key challenges include avoiding overfitting (learning patterns specific to training data that don't generalize), handling noise in the data, and selecting appropriate inductive biases that guide the learning process. Common inductive learning algorithms include decision trees that learn hierarchical rules, neural networks that learn complex non-linear patterns, and support vector machines that find optimal decision boundaries. The success of inductive learning depends on having representative training data, appropriate feature representations, and suitable algorithms for the specific problem domain. Inductive learning is fundamental to most practical AI applications and provides the theoretical foundation for understanding how machines can learn from experience.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2ePf9rue1Ao',
        'https://www.youtube.com/watch?v=kbBdfFtIddQ'
      ],
      externalLinks: [
        { title: 'Inductive Learning', url: 'https://www.geeksforgeeks.org/inductive-learning-in-ai/' },
        { title: 'Machine Learning Basics', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_machine_learning.htm' }
      ]
    }
  },
  {
    id: 'learning-decision-trees',
    name: 'Learning decision trees',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit III',
    content: {
      introduction: 'Decision tree learning creates interpretable models that make decisions through a series of questions, providing both accurate predictions and understandable reasoning.',
      definition: 'Decision tree learning is a supervised learning method that builds tree-like models where internal nodes represent tests on attributes and leaf nodes represent class predictions.',
      realWorldExample: 'Like a flowchart for medical diagnosis where doctors ask a series of questions about symptoms to reach a diagnosis.',
      realWorldUse: 'Used in medical diagnosis, credit approval, fraud detection, and any application requiring interpretable classification models.',
      importance: 'Provides highly interpretable models that can be easily understood by humans while achieving good predictive performance on many problems.',
      detailedExplanation: `Decision tree learning algorithms like ID3, C4.5, and CART work by recursively partitioning the training data based on attribute values that best separate the classes. The key challenge is selecting the best attribute to split on at each node, typically using measures like information gain, gain ratio, or Gini impurity. The algorithm continues splitting until stopping criteria are met, such as reaching pure leaf nodes, minimum number of instances, or maximum tree depth. Important considerations include handling continuous attributes through discretization or binary splits, dealing with missing values, and preventing overfitting through pruning techniques. Post-pruning removes subtrees that don't improve performance on validation data, while pre-pruning stops growing the tree early based on statistical tests. Decision trees can handle both categorical and numerical attributes, missing values, and provide natural feature selection by choosing the most informative attributes. The resulting models are easy to interpret, can be converted to rules, and provide insights into the decision-making process, making them valuable for applications where explainability is important.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2ePf9rue1Ao',
        'https://www.youtube.com/watch?v=kbBdfFtIddQ'
      ],
      externalLinks: [
        { title: 'Decision Tree Learning', url: 'https://www.geeksforgeeks.org/decision-tree/' },
        { title: 'Decision Trees in AI', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_decision_tree.htm' }
      ]
    }
  },
  {
    id: 'ensemble-learning',
    name: 'Ensemble learning',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit III',
    content: {
      introduction: 'Ensemble learning combines multiple learning algorithms to create stronger predictive models that outperform individual algorithms.',
      definition: 'Ensemble learning is a machine learning technique that combines predictions from multiple models to produce a final prediction that is more accurate than any individual model.',
      realWorldExample: 'Like consulting multiple doctors for a complex medical case and combining their opinions to reach a more reliable diagnosis.',
      realWorldUse: 'Used in competitions, high-stakes applications, and any scenario where maximum predictive accuracy is required.',
      importance: 'Often achieves better performance than single models and provides more robust predictions by reducing overfitting and variance.',
      detailedExplanation: `Ensemble learning works on the principle that combining multiple diverse models can reduce errors and improve generalization. Common ensemble methods include bagging (bootstrap aggregating) where multiple models are trained on different subsets of the training data, boosting where models are trained sequentially with each model focusing on the errors of previous models, and stacking where a meta-model learns to combine predictions from base models. Random forests use bagging with decision trees and random feature selection, while AdaBoost and Gradient Boosting are popular boosting algorithms. The success of ensemble methods depends on having diverse base models that make different types of errors, so that their combination can compensate for individual weaknesses. Diversity can be achieved through different algorithms, different training data subsets, different feature subsets, or different hyperparameters. Ensemble methods typically require more computational resources but provide better predictive performance and more robust models. They are particularly effective for complex problems where no single algorithm performs well across all aspects of the data.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2ePf9rue1Ao',
        'https://www.youtube.com/watch?v=kbBdfFtIddQ'
      ],
      externalLinks: [
        { title: 'Ensemble Learning', url: 'https://www.geeksforgeeks.org/ensemble-methods-in-machine-learning/' },
        { title: 'Ensemble Methods', url: 'https://www.tutorialspoint.com/machine_learning_with_python/machine_learning_with_python_ensemble_learning.htm' }
      ]
    }
  },
  {
    id: 'computational-learning-theory',
    name: 'Computational learning theory',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit III',
    content: {
      introduction: 'Computational learning theory provides mathematical foundations for understanding when and how machine learning algorithms can successfully learn from data.',
      definition: 'Computational learning theory is the theoretical framework that analyzes the computational complexity and sample complexity of learning algorithms.',
      realWorldExample: 'Like having mathematical proofs about how much data a student needs to reliably learn a concept, similar to statistical confidence intervals.',
      realWorldUse: 'Used in algorithm design, performance analysis, and understanding the fundamental limits and capabilities of learning systems.',
      importance: 'Provides theoretical guarantees about learning performance and guides the design of practical learning algorithms.',
      detailedExplanation: `Computational learning theory addresses fundamental questions about learning including sample complexity (how many examples are needed to learn accurately), computational complexity (how much computation is required), and learnability (which concept classes can be learned efficiently). Key frameworks include PAC (Probably Approximately Correct) learning which provides probabilistic guarantees about learning accuracy, and VC (Vapnik-Chervonenkis) theory which characterizes the complexity of hypothesis classes. The theory establishes bounds on generalization error, showing how training error relates to test error based on the complexity of the hypothesis class and the amount of training data. Important results include the bias-variance tradeoff, no-free-lunch theorems showing that no algorithm is universally best, and structural risk minimization principles for model selection. The theory also addresses online learning where data arrives sequentially, and provides regret bounds for online algorithms. Understanding these theoretical foundations helps in designing better learning algorithms, selecting appropriate model complexity, and setting realistic expectations about learning performance. The theory bridges the gap between practical machine learning and theoretical computer science, providing rigorous foundations for the field.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2ePf9rue1Ao',
        'https://www.youtube.com/watch?v=kbBdfFtIddQ'
      ],
      externalLinks: [
        { title: 'Computational Learning Theory', url: 'https://www.geeksforgeeks.org/computational-learning-theory/' },
        { title: 'PAC Learning', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_machine_learning.htm' }
      ]
    }
  },
  {
    id: 'non-monotonic-reasoning',
    name: 'Handling Uncertainties: Non-monotonic reasoning',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit III',
    content: {
      introduction: 'Non-monotonic reasoning allows AI systems to make tentative conclusions that can be revised when new information becomes available.',
      definition: 'Non-monotonic reasoning is a form of reasoning where adding new information can invalidate previously drawn conclusions, unlike classical logic where conclusions remain valid.',
      realWorldExample: 'Like assuming a bird can fly until you learn it is a penguin, then revising your conclusion - new information changes what you believe.',
      realWorldUse: 'Used in expert systems, default reasoning, belief revision, and any AI system dealing with incomplete or changing information.',
      importance: 'Essential for reasoning in real-world scenarios where information is incomplete and conclusions may need to be revised based on new evidence.',
      detailedExplanation: `Non-monotonic reasoning addresses the limitation of classical logic where adding new premises can never invalidate existing conclusions. In real-world reasoning, we often make assumptions based on typical cases that may need to be revised when exceptional cases are encountered. Common approaches include default logic where rules have exceptions, circumscription which minimizes abnormal cases, and autoepistemic logic which reasons about what is known and unknown. The closed-world assumption treats unknown facts as false, while the open-world assumption allows for unknown information. Non-monotonic reasoning systems must handle belief revision when contradictions arise, determining which beliefs to retract to maintain consistency. Key challenges include managing the computational complexity of belief revision, handling multiple possible revisions, and maintaining coherent belief states over time. Applications include diagnostic systems that revise diagnoses based on new symptoms, planning systems that adapt to changing conditions, and knowledge bases that evolve as new information becomes available. Understanding non-monotonic reasoning is crucial for building AI systems that can operate effectively in dynamic, uncertain environments where perfect information is not available.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2ePf9rue1Ao',
        'https://www.youtube.com/watch?v=kbBdfFtIddQ'
      ],
      externalLinks: [
        { title: 'Non-monotonic Reasoning', url: 'https://www.geeksforgeeks.org/non-monotonic-reasoning/' },
        { title: 'Default Logic', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_reasoning.htm' }
      ]
    }
  },
  {
    id: 'probabilistic-reasoning',
    name: 'Probabilistic reasoning',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit III',
    content: {
      introduction: 'Probabilistic reasoning enables AI systems to handle uncertainty by using probability theory to represent and reason about uncertain information.',
      definition: 'Probabilistic reasoning is a method of reasoning under uncertainty that uses probability theory to represent degrees of belief and make decisions based on uncertain information.',
      realWorldExample: 'Like weather forecasting that gives probability of rain rather than definitive predictions, allowing people to make informed decisions under uncertainty.',
      realWorldUse: 'Used in medical diagnosis, spam filtering, speech recognition, and any application involving uncertain or noisy data.',
      importance: 'Provides a principled mathematical framework for handling uncertainty, which is pervasive in real-world AI applications.',
      detailedExplanation: `Probabilistic reasoning uses probability theory to represent uncertainty about facts and events, allowing AI systems to make rational decisions even when information is incomplete or unreliable. Key concepts include prior probabilities representing initial beliefs, conditional probabilities representing relationships between events, and posterior probabilities representing updated beliefs after observing evidence. Bayes' theorem provides the mathematical foundation for updating beliefs based on new evidence. Bayesian networks represent probabilistic relationships between variables using directed acyclic graphs, enabling efficient inference in complex domains. Markov models capture temporal dependencies, while hidden Markov models handle situations where the true state is not directly observable. Inference methods include exact algorithms like variable elimination and approximate methods like Monte Carlo sampling when exact inference is computationally intractable. Probabilistic reasoning handles various types of uncertainty including aleatory uncertainty (inherent randomness) and epistemic uncertainty (lack of knowledge). The approach provides a coherent framework for combining evidence from multiple sources, handling conflicting information, and making optimal decisions under uncertainty. Applications range from autonomous vehicles that must navigate uncertain environments to medical systems that diagnose diseases based on probabilistic symptom patterns.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2ePf9rue1Ao',
        'https://www.youtube.com/watch?v=kbBdfFtIddQ'
      ],
      externalLinks: [
        { title: 'Probabilistic Reasoning', url: 'https://www.geeksforgeeks.org/probabilistic-reasoning-in-artificial-intelligence/' },
        { title: 'Bayesian Networks', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_probabilistic_reasoning.htm' }
      ]
    }
  },
  {
    id: 'certainty-factors',
    name: 'Use of certainty factors',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit III',
    content: {
      introduction: 'Certainty factors provide a practical approach to handling uncertainty in expert systems by representing degrees of belief using numerical confidence measures.',
      definition: 'Certainty factors are numerical measures that represent the degree of confidence in facts and rules, providing a simpler alternative to full probabilistic reasoning.',
      realWorldExample: 'Like a doctor saying "I am 80% confident this is pneumonia" - expressing uncertainty with a confidence level rather than complex probability calculations.',
      realWorldUse: 'Used in expert systems, medical diagnosis, and applications where simple uncertainty representation is preferred over complex probabilistic models.',
      importance: 'Provides an intuitive and computationally efficient way to handle uncertainty without the complexity of full probability theory.',
      detailedExplanation: `Certainty factors represent uncertainty using values between -1 and +1, where +1 indicates complete certainty that something is true, -1 indicates complete certainty that something is false, and 0 indicates complete uncertainty. The approach was developed for the MYCIN expert system and provides rules for combining certainty factors when multiple pieces of evidence support or contradict a conclusion. Key operations include combining evidence from multiple sources using formulas that account for both supporting and contradicting evidence, and propagating uncertainty through chains of inference rules. Certainty factors handle both the strength of evidence and the reliability of rules, allowing experts to express their confidence in both facts and inference patterns. The system provides intuitive semantics that are easier for domain experts to understand and specify compared to precise probability values. Advantages include computational simplicity, intuitive interpretation, and the ability to handle incomplete information without requiring complete probability distributions. However, certainty factors lack the theoretical foundations of probability theory and may not handle complex dependencies correctly. Despite these limitations, certainty factors remain useful for applications where simplicity and expert interpretability are more important than theoretical rigor.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2ePf9rue1Ao',
        'https://www.youtube.com/watch?v=kbBdfFtIddQ'
      ],
      externalLinks: [
        { title: 'Certainty Factors', url: 'https://www.geeksforgeeks.org/certainty-factor-in-ai/' },
        { title: 'Expert Systems Uncertainty', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_expert_systems.htm' }
      ]
    }
  },
  {
    id: 'fuzzy-logic',
    name: 'Fuzzy logic',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit III',
    content: {
      introduction: 'Fuzzy logic handles uncertainty and imprecision by allowing partial membership in sets, enabling reasoning with vague or imprecise concepts.',
      definition: 'Fuzzy logic is a form of many-valued logic that deals with reasoning that is approximate rather than fixed and exact, using degrees of membership rather than crisp true/false values.',
      realWorldExample: 'Like describing temperature as "somewhat hot" rather than exactly 75 degrees - fuzzy logic handles concepts that have gradual transitions rather than sharp boundaries.',
      realWorldUse: 'Used in control systems, image processing, decision making, and applications involving imprecise or subjective concepts.',
      importance: 'Provides a natural way to handle imprecision and vagueness that is common in human reasoning and real-world applications.',
      detailedExplanation: `Fuzzy logic extends classical binary logic by allowing partial membership in sets, where elements can belong to a set to a degree between 0 and 1. Fuzzy sets are defined by membership functions that specify the degree to which each element belongs to the set. Linguistic variables use words instead of numbers to describe concepts, such as "tall," "medium," and "short" for height. Fuzzy rules use linguistic variables to express relationships in natural language, such as "if temperature is hot and humidity is high, then comfort is low." The inference process involves fuzzification (converting crisp inputs to fuzzy values), rule evaluation using fuzzy operators (AND, OR, NOT), and defuzzification (converting fuzzy outputs back to crisp values). Common defuzzification methods include centroid, maximum, and weighted average approaches. Fuzzy logic is particularly useful for control systems where precise mathematical models are difficult to obtain, such as washing machines that adjust cycle time based on load size and soil level. The approach handles the inherent imprecision in human language and reasoning, making it suitable for applications involving subjective judgments, approximate reasoning, and systems that must interface with human users using natural language concepts.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2ePf9rue1Ao',
        'https://www.youtube.com/watch?v=kbBdfFtIddQ'
      ],
      externalLinks: [
        { title: 'Fuzzy Logic', url: 'https://www.geeksforgeeks.org/fuzzy-logic-introduction/' },
        { title: 'Fuzzy Systems', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_fuzzy_logic.htm' }
      ]
    }
  }
];

export default artificialIntelligenceUnit3;