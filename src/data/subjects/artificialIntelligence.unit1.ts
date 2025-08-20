import { Topic } from '../syllabus';

export const artificialIntelligenceUnit1: Topic[] = [
  {
    id: 'what-is-ai',
    name: 'Introduction to AI: What is AI?',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit I',
    content: {
      introduction: 'Artificial Intelligence is the simulation of human intelligence processes by machines, especially computer systems, enabling them to perform tasks that typically require human cognition.',
      definition: 'AI is a branch of computer science that aims to create intelligent machines capable of performing tasks that normally require human intelligence, such as visual perception, speech recognition, decision-making, and language translation.',
      realWorldExample: 'Virtual assistants like Siri, Alexa, and Google Assistant use AI to understand natural language, process requests, and provide intelligent responses to users.',
      realWorldUse: 'Used in healthcare for medical diagnosis, autonomous vehicles for self-driving cars, finance for fraud detection, entertainment for recommendation systems, and robotics for automation.',
      importance: 'AI is revolutionizing industries by automating complex tasks, improving decision-making, enhancing productivity, and creating new possibilities for human-machine interaction.',
      detailedExplanation: `
Artificial Intelligence encompasses various approaches to creating intelligent systems, including symbolic AI that uses logic and knowledge representation, statistical AI that learns from data patterns, and hybrid approaches that combine multiple techniques. The field includes several subdomains such as machine learning for pattern recognition and prediction, natural language processing for understanding and generating human language, computer vision for interpreting visual information, and robotics for physical interaction with the environment.

Modern AI systems can be categorized into narrow AI, which excels at specific tasks like playing chess or recognizing images, and the theoretical concept of general AI, which would match human cognitive abilities across all domains. Current AI applications demonstrate remarkable capabilities in areas such as medical diagnosis where AI can detect diseases from medical images, autonomous driving where AI processes sensor data to navigate safely, and natural language understanding where AI can engage in meaningful conversations and translate between languages with increasing accuracy.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2ePf9rue1Ao',
        'https://www.youtube.com/watch?v=JMUxmLyrhSk'
      ],
      externalLinks: [
        { title: 'Introduction to Artificial Intelligence', url: 'https://www.geeksforgeeks.org/artificial-intelligence-an-introduction/' },
        { title: 'What is AI? - IBM', url: 'https://www.ibm.com/cloud/learn/what-is-artificial-intelligence' }
      ]
    }
  },
  {
    id: 'intelligent-agents',
    name: 'Intelligent Agents: Agents and Environment',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit I',
    content: {
      introduction: 'Intelligent agents are autonomous entities that perceive their environment through sensors and act upon it through actuators to achieve specific goals.',
      definition: 'An intelligent agent is a system that can perceive its environment, process information, make decisions, and take actions to maximize its performance measure or achieve its objectives.',
      realWorldExample: 'A thermostat is a simple agent that perceives temperature through sensors and acts by turning heating or cooling systems on or off to maintain desired temperature.',
      realWorldUse: 'Used in autonomous robots, smart home systems, game-playing programs, recommendation engines, and automated trading systems.',
      importance: 'Understanding agents and environments provides the fundamental framework for designing AI systems that can operate effectively in real-world scenarios.',
      detailedExplanation: `
An intelligent agent operates within an environment through a perception-action cycle, where it continuously perceives the current state of its environment through sensors, processes this information using its knowledge and reasoning capabilities, and selects appropriate actions to execute through actuators. The agent's behavior is guided by its performance measure, which defines what constitutes success in its particular domain. The relationship between agent and environment is crucial because the environment determines what perceptions are available and what actions are possible.

The agent-environment interaction can be modeled as a sequence of perception-action pairs over time, where each action potentially changes the environment state, leading to new perceptions. Different types of agents include simple reflex agents that respond directly to current perceptions, model-based agents that maintain internal state representations, goal-based agents that work toward specific objectives, and utility-based agents that try to maximize their expected utility. The design of effective agents requires careful consideration of the environment characteristics and the selection of appropriate agent architectures.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=7fGNVD1PB6g',
        'https://www.youtube.com/watch?v=2ePf9rue1Ao'
      ],
      externalLinks: [
        { title: 'Intelligent Agents in AI', url: 'https://www.geeksforgeeks.org/agents-artificial-intelligence/' },
        { title: 'AI Agents and Environments', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_agents_and_environments.htm' }
      ]
    }
  },
  {
    id: 'rationality',
    name: 'Rationality',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit I',
    content: {
      introduction: 'Rationality in AI refers to an agent\'s ability to make decisions that maximize its expected performance based on available information and computational resources.',
      definition: 'A rational agent is one that acts to achieve the best expected outcome given its knowledge, perceptions, and available actions, considering the constraints of its environment and computational limitations.',
      realWorldExample: 'A GPS navigation system acts rationally by calculating the fastest route based on current traffic conditions, road closures, and user preferences to minimize travel time.',
      realWorldUse: 'Applied in decision support systems, autonomous vehicles, financial trading algorithms, resource allocation systems, and strategic game playing.',
      importance: 'Rationality provides the theoretical foundation for evaluating and designing AI systems that make optimal decisions under uncertainty and resource constraints.',
      detailedExplanation: `
Rationality in AI is defined relative to four key factors: the performance measure that defines success criteria, the agent's prior knowledge about the environment, the actions that the agent can perform, and the agent's perceptual sequence up to the current time. A perfectly rational agent would always choose the action that maximizes expected performance, but real-world agents face limitations such as incomplete information, computational constraints, and time pressure that prevent perfect rationality.

Bounded rationality acknowledges these practical limitations and focuses on making good decisions within computational and informational constraints rather than optimal decisions. This concept is crucial for designing practical AI systems that must operate in real-time with limited resources. The notion of rationality also extends to learning agents that improve their performance over time by updating their knowledge and decision-making strategies based on experience, making them more effective in dynamic environments.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=7fGNVD1PB6g',
        'https://www.youtube.com/watch?v=2ePf9rue1Ao'
      ],
      externalLinks: [
        { title: 'Rationality in AI', url: 'https://www.geeksforgeeks.org/rationality-artificial-intelligence/' },
        { title: 'Rational Agents', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_rational_agents.htm' }
      ]
    }
  },
  {
    id: 'nature-of-environment',
    name: 'The Nature of Environment',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit I',
    content: {
      introduction: 'The nature of environment in AI describes the characteristics and properties of the world in which an intelligent agent operates, affecting how the agent should be designed and how it behaves.',
      definition: 'Environment properties include whether it is fully or partially observable, deterministic or stochastic, episodic or sequential, static or dynamic, discrete or continuous, and single-agent or multi-agent.',
      realWorldExample: 'A chess game represents a fully observable, deterministic, sequential, static, discrete, multi-agent environment, while autonomous driving involves a partially observable, stochastic, sequential, dynamic, continuous, multi-agent environment.',
      realWorldUse: 'Understanding environment types guides the design of appropriate AI systems for applications like game playing, robotics, autonomous systems, and intelligent control systems.',
      importance: 'Proper characterization of environment properties is crucial for selecting appropriate algorithms, architectures, and strategies for AI system design.',
      detailedExplanation: `
Environment classification helps determine the complexity of the AI problem and guides algorithm selection. Fully observable environments provide complete information about the current state, while partially observable environments require the agent to maintain beliefs about hidden aspects. Deterministic environments have predictable outcomes for each action, whereas stochastic environments involve uncertainty and probability. Episodic environments treat each decision independently, while sequential environments require considering the long-term consequences of actions.

Static environments remain unchanged while the agent deliberates, but dynamic environments continue to change, requiring real-time decision making. Discrete environments have a finite number of distinct states and actions, while continuous environments involve infinite possibilities. Single-agent environments focus on one decision-maker, while multi-agent environments involve multiple intelligent entities that may cooperate or compete. Understanding these dimensions helps AI designers choose appropriate techniques such as search algorithms for static environments, reinforcement learning for sequential environments, or game theory for multi-agent scenarios.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=7fGNVD1PB6g',
        'https://www.youtube.com/watch?v=2ePf9rue1Ao'
      ],
      externalLinks: [
        { title: 'Environment Types in AI', url: 'https://www.geeksforgeeks.org/environment-in-ai/' },
        { title: 'AI Environment Properties', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_environment_properties.htm' }
      ]
    }
  },
  {
    id: 'structure-of-agents',
    name: 'The Structure of Agents',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit I',
    content: {
      introduction: 'The structure of agents defines the internal architecture and components that enable an AI system to perceive, reason, and act effectively in its environment.',
      definition: 'Agent structure encompasses the agent program that implements the agent function, including components for perception processing, knowledge representation, reasoning, decision-making, and action execution.',
      realWorldExample: 'A robot vacuum cleaner has sensors for perception (cameras, bump sensors), a mapping system for knowledge representation, path planning algorithms for reasoning, and motors for action execution.',
      realWorldUse: 'Applied in designing autonomous robots, intelligent software agents, expert systems, game-playing programs, and automated decision-making systems.',
      importance: 'Understanding agent structure is essential for building effective AI systems that can operate reliably and efficiently in complex environments.',
      detailedExplanation: `
Agent architecture typically includes several key components: sensors for perceiving the environment, actuators for taking actions, a knowledge base for storing information about the world, inference mechanisms for reasoning and decision-making, and learning components for improving performance over time. Different agent architectures are suitable for different types of problems and environments. Simple reflex agents use condition-action rules to respond directly to perceptions, while model-based reflex agents maintain internal state to handle partially observable environments.

Goal-based agents work toward achieving specific objectives by planning sequences of actions, and utility-based agents make decisions by comparing the expected utility of different outcomes. Learning agents incorporate mechanisms for improving their performance through experience, including learning elements that modify the agent's knowledge and behavior based on feedback. The choice of agent structure depends on factors such as environment complexity, performance requirements, computational resources, and the need for adaptability and learning.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=7fGNVD1PB6g',
        'https://www.youtube.com/watch?v=2ePf9rue1Ao'
      ],
      externalLinks: [
        { title: 'Agent Architecture', url: 'https://www.geeksforgeeks.org/structure-of-agents-in-ai/' },
        { title: 'AI Agent Design', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_agent_architecture.htm' }
      ]
    }
  },
  {
    id: 'problem-solving-agents',
    name: 'Problem Solving: Problem-solving Agents',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit I',
    content: {
      introduction: 'Problem-solving agents are AI systems that achieve goals by searching through a space of possible states and actions to find a sequence of steps that leads from the initial state to a goal state.',
      definition: 'A problem-solving agent formulates problems as search problems, consisting of states, actions, transition models, and goal tests, then uses search algorithms to find solution paths.',
      realWorldExample: 'A GPS navigation system acts as a problem-solving agent by formulating route planning as a search problem, where states are locations, actions are road segments, and the goal is reaching the destination.',
      realWorldUse: 'Used in path planning for robotics, puzzle solving, scheduling and planning systems, game playing, and automated reasoning applications.',
      importance: 'Problem-solving agents provide a systematic approach to goal achievement in AI, forming the foundation for many intelligent systems and applications.',
      detailedExplanation: `
Problem-solving agents operate through a four-step process: problem formulation, where the agent defines the problem in terms of states and actions; search, where the agent explores possible solution paths; execution, where the agent carries out the chosen solution; and monitoring, where the agent tracks progress and handles unexpected situations. The problem formulation phase is crucial as it determines how the real-world situation is abstracted into a search problem with clearly defined states, actions, transition models, and goal conditions.

The effectiveness of problem-solving agents depends on choosing appropriate problem representations and search strategies. Well-formulated problems have clearly defined state spaces, unambiguous action specifications, and precise goal criteria. The agent must balance the completeness of the problem representation with computational efficiency, often requiring abstraction and simplification of complex real-world scenarios. Problem-solving agents are particularly effective in domains with well-defined objectives and deterministic or predictable environments where search-based approaches can systematically explore solution spaces.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=dRMvK76xQJI',
        'https://www.youtube.com/watch?v=j1H3jAAGlEA'
      ],
      externalLinks: [
        { title: 'Problem Solving Agents', url: 'https://www.geeksforgeeks.org/problem-solving-agent-in-ai/' },
        { title: 'AI Problem Solving', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_problem_solving.htm' }
      ]
    }
  },
  {
    id: 'example-problems',
    name: 'Example Problems',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit I',
    content: {
      introduction: 'Example problems in AI demonstrate how real-world challenges can be formulated as search problems with defined states, actions, and goals, providing concrete illustrations of problem-solving techniques.',
      definition: 'Classic AI problems include the 8-puzzle, N-Queens, traveling salesman, missionaries and cannibals, and tower of Hanoi, each illustrating different aspects of search and problem-solving.',
      realWorldExample: 'The 8-puzzle sliding tile game represents spatial reasoning problems, while the traveling salesman problem models optimization challenges in logistics and route planning.',
      realWorldUse: 'These problems serve as benchmarks for testing AI algorithms, educational tools for understanding search techniques, and simplified models of complex real-world applications.',
      importance: 'Example problems provide concrete contexts for learning AI concepts, testing algorithms, and understanding the relationship between problem characteristics and solution approaches.',
      detailedExplanation: `
Classic AI problems serve multiple purposes in the field: they provide standardized benchmarks for comparing different algorithms, offer educational examples that illustrate key concepts, and represent simplified versions of complex real-world challenges. The 8-puzzle involves sliding numbered tiles in a 3x3 grid to achieve a goal configuration, demonstrating state space search in a discrete, deterministic environment. The N-Queens problem requires placing N chess queens on an NxN board without conflicts, illustrating constraint satisfaction and backtracking techniques.

The traveling salesman problem seeks the shortest route visiting all cities exactly once, representing optimization challenges in logistics and operations research. The missionaries and cannibals problem involves safely transporting people across a river with constraints, demonstrating planning under restrictions. The tower of Hanoi requires moving disks between pegs following specific rules, illustrating recursive problem decomposition. Each problem type highlights different algorithmic approaches: state space search, constraint satisfaction, optimization, planning, and recursive decomposition, providing a comprehensive foundation for understanding AI problem-solving methodologies.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=dRMvK76xQJI',
        'https://www.youtube.com/watch?v=j1H3jAAGlEA'
      ],
      externalLinks: [
        { title: 'Classic AI Problems', url: 'https://www.geeksforgeeks.org/8-puzzle-problem-using-branch-and-bound/' },
        { title: 'AI Problem Examples', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_problem_examples.htm' }
      ]
    }
  },
  {
    id: 'searching-for-solution',
    name: 'Searching for Solution',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit I',
    content: {
      introduction: 'Searching for solutions involves systematically exploring the space of possible states and actions to find a path from the initial state to a goal state using various search algorithms.',
      definition: 'Solution search is the process of navigating through a problem\'s state space using search strategies to discover a sequence of actions that transforms the initial state into a goal state.',
      realWorldExample: 'Finding a route from home to work involves searching through possible paths on a map, considering factors like distance, traffic, and road conditions to identify the best route.',
      realWorldUse: 'Applied in GPS navigation, game playing, puzzle solving, automated planning, resource allocation, and any domain requiring systematic exploration of possibilities.',
      importance: 'Search algorithms form the core of many AI applications, providing systematic methods for finding solutions in complex problem spaces.',
      detailedExplanation: `
The search process involves representing the problem as a graph where nodes represent states and edges represent actions that transition between states. Search algorithms systematically explore this graph to find a path from the start node to a goal node. The choice of search strategy depends on problem characteristics such as the size of the state space, the branching factor, the depth of solutions, and whether optimal solutions are required.

Search algorithms maintain a frontier of unexplored nodes and use different strategies to select which node to explore next. The effectiveness of search depends on the problem representation, the search strategy, and the use of heuristics to guide the search toward promising areas of the state space. Key considerations include completeness (guaranteeing a solution if one exists), optimality (finding the best solution), time complexity, and space complexity. Modern search techniques often combine multiple strategies and use domain knowledge to improve efficiency and solution quality.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=dRMvK76xQJI',
        'https://www.youtube.com/watch?v=j1H3jAAGlEA'
      ],
      externalLinks: [
        { title: 'Search Algorithms in AI', url: 'https://www.geeksforgeeks.org/search-algorithms-in-ai/' },
        { title: 'AI Search Techniques', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_search_algorithms.htm' }
      ]
    }
  },
  {
    id: 'uninformed-search-strategies',
    name: 'Uninformed Search Strategies',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit I',
    content: {
      introduction: 'Uninformed search strategies, also known as blind search, explore the search space without using domain-specific knowledge or heuristics to guide the search process.',
      definition: 'Uninformed search algorithms include breadth-first search, depth-first search, uniform-cost search, depth-limited search, and iterative deepening search, each using different systematic exploration patterns.',
      realWorldExample: 'Breadth-first search is like exploring a maze by checking all paths of length 1, then all paths of length 2, and so on, while depth-first search is like following one path as far as possible before backtracking.',
      realWorldUse: 'Used in web crawling, network routing, puzzle solving, game tree exploration, and any application where systematic exploration is needed without domain-specific guidance.',
      importance: 'Uninformed search provides fundamental algorithms that guarantee finding solutions when they exist, serving as building blocks for more sophisticated search techniques.',
      detailedExplanation: `
Breadth-first search (BFS) explores all nodes at depth d before exploring nodes at depth d+1, guaranteeing the shortest path in unweighted graphs but requiring significant memory. Depth-first search (DFS) explores as far as possible along each branch before backtracking, using less memory but potentially getting trapped in infinite paths. Uniform-cost search expands the node with the lowest path cost, finding optimal solutions in weighted graphs but potentially exploring many nodes.

Depth-limited search imposes a maximum depth limit to prevent infinite exploration, while iterative deepening search combines the benefits of BFS and DFS by performing depth-limited searches with increasing depth limits. Each algorithm has different properties regarding completeness, optimality, time complexity, and space complexity. The choice depends on problem characteristics such as solution depth, branching factor, and memory constraints. Understanding these trade-offs is crucial for selecting appropriate search strategies for different applications.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=oDqjPvD54Ss',
        'https://www.youtube.com/watch?v=7fujbpJ0LB4'
      ],
      externalLinks: [
        { title: 'Uninformed Search', url: 'https://www.geeksforgeeks.org/uninformed-search-algorithms/' },
        { title: 'Blind Search Algorithms', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_uninformed_search.htm' }
      ]
    }
  },
  {
    id: 'informed-search-strategies',
    name: 'Informed Search Strategies',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit I',
    content: {
      introduction: 'Informed search strategies use domain-specific knowledge in the form of heuristic functions to guide the search toward goal states more efficiently than uninformed search.',
      definition: 'Informed search algorithms include greedy best-first search, A* search, and weighted A* search, which use heuristic functions to estimate the cost or distance to the goal state.',
      realWorldExample: 'GPS navigation uses informed search by considering both the distance traveled and the estimated remaining distance to the destination, similar to A* search with a straight-line distance heuristic.',
      realWorldUse: 'Applied in pathfinding for games and robotics, route planning, puzzle solving, automated planning, and any domain where good heuristics can guide search efficiently.',
      importance: 'Informed search dramatically improves search efficiency by focusing exploration on promising areas of the search space, making complex problems tractable.',
      detailedExplanation: `
Informed search algorithms use heuristic functions h(n) that estimate the cost from node n to the nearest goal state. Greedy best-first search selects nodes based solely on the heuristic value, often finding solutions quickly but not guaranteeing optimality. A* search combines the actual cost from the start g(n) with the heuristic estimate h(n) using the evaluation function f(n) = g(n) + h(n), guaranteeing optimal solutions when the heuristic is admissible (never overestimates the true cost).

The effectiveness of informed search depends critically on the quality of the heuristic function. Good heuristics are admissible, consistent, and provide accurate guidance toward goal states. Common heuristics include Manhattan distance for grid-based problems, straight-line distance for navigation, and pattern databases for complex puzzles. Informed search algorithms can achieve dramatic improvements in efficiency compared to uninformed search, often reducing exponential search spaces to manageable sizes while maintaining optimality guarantees.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=6TsL96NAZCo',
        'https://www.youtube.com/watch?v=ySN5Wnu88nE'
      ],
      externalLinks: [
        { title: 'Informed Search Algorithms', url: 'https://www.geeksforgeeks.org/informed-search-algorithms-in-ai/' },
        { title: 'A* Search Algorithm', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_informed_search.htm' }
      ]
    }
  },
  {
    id: 'heuristic-functions',
    name: 'Heuristic Functions',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit I',
    content: {
      introduction: 'Heuristic functions provide estimates of the cost or distance from any given state to the goal state, enabling informed search algorithms to make intelligent decisions about which paths to explore.',
      definition: 'A heuristic function h(n) estimates the cost of the cheapest path from node n to a goal node, serving as a guide for search algorithms to focus on promising directions.',
      realWorldExample: 'In GPS navigation, the straight-line distance between current location and destination serves as a heuristic, providing a lower bound estimate of the actual travel distance.',
      realWorldUse: 'Used in pathfinding algorithms, game playing, puzzle solving, automated planning, and optimization problems where domain knowledge can guide search.',
      importance: 'Good heuristic functions dramatically improve search efficiency by providing intelligent guidance, making complex problems solvable within reasonable time and space constraints.',
      detailedExplanation: `
Effective heuristic functions must satisfy certain properties to guarantee algorithm correctness and efficiency. Admissible heuristics never overestimate the true cost to the goal, ensuring that A* search finds optimal solutions. Consistent (monotonic) heuristics satisfy the triangle inequality, providing additional efficiency guarantees. The quality of a heuristic is measured by how closely it approximates the true cost while remaining computationally efficient to calculate.

Common techniques for developing heuristics include relaxing problem constraints to create simpler versions that can be solved exactly, using pattern databases that precompute costs for subproblems, and combining multiple heuristics using techniques like taking the maximum value. Domain-specific knowledge is crucial for creating effective heuristics, such as using Manhattan distance for grid-based movement, counting misplaced tiles in sliding puzzles, or estimating material advantage in chess. The trade-off between heuristic accuracy and computational cost must be carefully balanced for practical applications.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=6TsL96NAZCo',
        'https://www.youtube.com/watch?v=ySN5Wnu88nE'
      ],
      externalLinks: [
        { title: 'Heuristic Functions in AI', url: 'https://www.geeksforgeeks.org/heuristic-search-techniques-in-ai/' },
        { title: 'Designing Heuristics', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_heuristic_search.htm' }
      ]
    }
  },
  {
    id: 'online-search-agents',
    name: 'On-line Search Agents and Unknown Environment',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit I',
    content: {
      introduction: 'Online search agents operate in unknown environments where the agent must explore and learn about the environment while simultaneously searching for solutions, without complete prior knowledge of the state space.',
      definition: 'Online search involves agents that must act in real-time with incomplete information about their environment, learning the state space structure through exploration and adapting their search strategy accordingly.',
      realWorldExample: 'A robot exploring an unknown building must navigate while simultaneously mapping the environment, similar to how early explorers mapped new territories while searching for specific destinations.',
      realWorldUse: 'Applied in autonomous robot navigation, web crawling, network exploration, real-time strategy games, and any scenario where the environment structure is initially unknown.',
      importance: 'Online search is essential for autonomous systems operating in dynamic or unknown environments where complete prior knowledge is unavailable or impractical.',
      detailedExplanation: `
Online search agents face unique challenges compared to offline search, including the need to balance exploration of unknown areas with exploitation of known information, handling incomplete state space knowledge, and making decisions under uncertainty. The agent must maintain a model of the discovered portion of the environment while continuously updating this model based on new observations. Key algorithms include online depth-first search, learning real-time A* (LRTA*), and real-time adaptive A* (RTAA*).

These algorithms must handle issues such as getting trapped in dead ends, efficiently backtracking when necessary, and learning from experience to improve future performance. The competitive ratio compares online algorithm performance to optimal offline solutions, providing a measure of algorithm quality. Online search agents often use techniques such as maintaining visited state information, using local search when global information is unavailable, and employing learning mechanisms to improve performance over time in repeated problem instances.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=6TsL96NAZCo',
        'https://www.youtube.com/watch?v=ySN5Wnu88nE'
      ],
      externalLinks: [
        { title: 'Online Search Algorithms', url: 'https://www.geeksforgeeks.org/online-search-algorithms/' },
        { title: 'Real-time Search', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_online_search.htm' }
      ]
    }
  },
  {
    id: 'constraint-satisfaction-problems',
    name: 'Constraint Satisfaction Problems',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit I',
    content: {
      introduction: 'Constraint Satisfaction Problems (CSPs) are a class of problems where the goal is to find values for variables that satisfy a set of constraints, providing a powerful framework for modeling many AI problems.',
      definition: 'A CSP consists of a set of variables, each with a domain of possible values, and a set of constraints that specify allowable combinations of values for subsets of variables.',
      realWorldExample: 'Sudoku is a classic CSP where variables are the empty cells, domains are numbers 1-9, and constraints ensure no number repeats in rows, columns, or 3x3 boxes.',
      realWorldUse: 'Used in scheduling problems, resource allocation, configuration problems, circuit design, map coloring, and any domain involving assignment of values subject to restrictions.',
      importance: 'CSPs provide a unified framework for representing and solving a wide variety of AI problems, with specialized algorithms that exploit constraint structure for efficiency.',
      detailedExplanation: `
CSPs offer several advantages over general search problems, including the ability to use constraint propagation to reduce search spaces, specialized heuristics for variable and value ordering, and the capacity to detect inconsistencies early in the search process. The structure of CSPs allows for powerful preprocessing techniques such as arc consistency, which eliminates values that cannot be part of any solution, and forward checking, which prevents assignments that would immediately violate constraints.

Constraint satisfaction techniques include backtracking search with various improvements such as minimum remaining values (MRV) heuristic for variable selection, least constraining value heuristic for value selection, and constraint propagation algorithms like AC-3 for maintaining arc consistency. Advanced techniques include local search methods for large CSPs, constraint learning to avoid repeating failed search paths, and decomposition methods for problems with special structure. The CSP framework is particularly powerful because it separates problem representation from solution algorithms, allowing the same techniques to be applied across diverse domains.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=d76e4hV1iJY',
        'https://www.youtube.com/watch?v=hJ9WOiueJes'
      ],
      externalLinks: [
        { title: 'Constraint Satisfaction Problems', url: 'https://www.geeksforgeeks.org/constraint-satisfaction-problems-csp-in-artificial-intelligence/' },
        { title: 'CSP Algorithms', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_constraint_satisfaction_problems.htm' }
      ]
    }
  },
  {
    id: 'backtracking-search-csp',
    name: 'Backtracking Search for CSPs',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit I',
    content: {
      introduction: 'Backtracking search for CSPs is a systematic algorithm that incrementally builds solutions by assigning values to variables and backtracking when constraints are violated.',
      definition: 'Backtracking search for CSPs systematically explores the space of partial assignments, extending consistent partial solutions and backtracking when no legal values remain for a variable.',
      realWorldExample: 'Solving a Sudoku puzzle by filling in numbers one cell at a time, and erasing and trying different numbers when a contradiction is reached.',
      realWorldUse: 'Applied in puzzle solving, scheduling systems, configuration problems, resource allocation, and any CSP where systematic exploration is needed.',
      importance: 'Backtracking provides a complete algorithm for CSPs that can be enhanced with various heuristics and constraint propagation techniques for improved efficiency.',
      detailedExplanation: `
Backtracking search for CSPs operates by maintaining a partial assignment of values to variables and systematically extending this assignment by choosing an unassigned variable and trying each value in its domain. When a value assignment violates a constraint, the algorithm backtracks by undoing the assignment and trying the next value. If all values for a variable have been tried unsuccessfully, the algorithm backtracks further to reconsider previous variable assignments.

The basic backtracking algorithm can be significantly improved through various enhancements: variable ordering heuristics such as minimum remaining values (MRV) and degree heuristic help choose which variable to assign next; value ordering heuristics like least constraining value help choose which value to try first; constraint propagation techniques such as forward checking and arc consistency reduce the domains of unassigned variables; and intelligent backtracking methods like backjumping and conflict-directed backjumping avoid redundant search by identifying the actual causes of conflicts.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=d76e4hV1iJY',
        'https://www.youtube.com/watch?v=hJ9WOiueJes'
      ],
      externalLinks: [
        { title: 'Backtracking for CSP', url: 'https://www.geeksforgeeks.org/backtracking-set-1-the-knights-tour-problem/' },
        { title: 'CSP Backtracking Algorithm', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_backtracking_search.htm' }
      ]
    }
  },
  {
    id: 'adversarial-search-games',
    name: 'Adversarial Search: Games',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit I',
    content: {
      introduction: 'Adversarial search deals with problems where multiple agents have conflicting goals, typically modeled as games where one agent\'s gain is another\'s loss, requiring strategic thinking and planning.',
      definition: 'Adversarial search involves finding optimal strategies in competitive environments where agents must consider the actions and strategies of opponents who are trying to minimize their success.',
      realWorldExample: 'Chess, checkers, and tic-tac-toe are classic examples where players must think several moves ahead, considering how their opponent will respond to each possible move.',
      realWorldUse: 'Applied in game playing programs, competitive bidding systems, military strategy, economic modeling, and any scenario involving strategic interaction between competing agents.',
      importance: 'Adversarial search provides the foundation for strategic reasoning in competitive environments and has led to significant advances in game-playing AI systems.',
      detailedExplanation: `
Adversarial search problems are typically formulated as two-player, zero-sum games with perfect information, where the outcome for one player is exactly the negative of the outcome for the other player. The game is represented as a tree where nodes represent game states, edges represent moves, and leaf nodes represent terminal states with associated utility values. Players alternate turns, with one player (MAX) trying to maximize the outcome and the other player (MIN) trying to minimize it.

The challenge in adversarial search is that each player must consider not only their own possible moves but also how their opponent will respond to each move. This leads to a recursive decision-making process where players must think several moves ahead, evaluating the consequences of move sequences rather than individual moves. The complexity of this process grows exponentially with the depth of search, making efficient algorithms and evaluation techniques crucial for practical game-playing systems.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=l-hh51ncgDI',
        'https://www.youtube.com/watch?v=STjW3eH0Cik'
      ],
      externalLinks: [
        { title: 'Adversarial Search in AI', url: 'https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-1-introduction/' },
        { title: 'Game Theory in AI', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_adversarial_search.htm' }
      ]
    }
  },
  {
    id: 'optimal-decisions-games',
    name: 'Optimal Decisions in Games',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit I',
    content: {
      introduction: 'Optimal decisions in games involve finding the best possible strategy assuming that opponents also play optimally, typically solved using the minimax algorithm and game tree evaluation.',
      definition: 'Optimal game-playing strategy is determined by the minimax algorithm, which assumes both players play perfectly and chooses moves that maximize the minimum guaranteed outcome.',
      realWorldExample: 'In tic-tac-toe, optimal play by both players always results in a draw, demonstrating how minimax analysis can determine the theoretical outcome of perfect play.',
      realWorldUse: 'Implemented in chess engines, checkers programs, game-playing AI, strategic planning systems, and competitive analysis applications.',
      importance: 'Understanding optimal decision-making in games provides the theoretical foundation for building strong game-playing AI systems and strategic reasoning applications.',
      detailedExplanation: `
The minimax algorithm works by recursively evaluating game positions, assuming that the maximizing player will choose moves that lead to the highest value outcomes while the minimizing player will choose moves that lead to the lowest value outcomes. At each node in the game tree, the algorithm computes the minimax value by considering all possible moves and their consequences. For MAX nodes, the algorithm selects the maximum value among child nodes, while for MIN nodes, it selects the minimum value.

The minimax algorithm guarantees optimal play against an optimal opponent, but its computational complexity grows exponentially with search depth. Practical implementations require evaluation functions to estimate the value of non-terminal positions, since searching to the end of the game is usually computationally infeasible. The quality of the evaluation function significantly affects the strength of the game-playing program, requiring domain expertise to identify important features and their relative importance in determining position value.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=l-hh51ncgDI',
        'https://www.youtube.com/watch?v=STjW3eH0Cik'
      ],
      externalLinks: [
        { title: 'Minimax Algorithm', url: 'https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-1-introduction/' },
        { title: 'Optimal Game Strategy', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_minimax_algorithm.htm' }
      ]
    }
  },
  {
    id: 'alpha-beta-pruning',
    name: 'Alpha-Beta Pruning',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit I',
    content: {
      introduction: 'Alpha-beta pruning is an optimization technique for the minimax algorithm that eliminates branches in the game tree that cannot affect the final decision, significantly reducing computation time.',
      definition: 'Alpha-beta pruning maintains alpha (best value for MAX) and beta (best value for MIN) bounds during minimax search, pruning branches when alpha >= beta, indicating that the current branch cannot improve the result.',
      realWorldExample: 'In chess analysis, if you find a move that guarantees a win, you don\'t need to analyze other moves in that position, similar to how alpha-beta pruning eliminates unnecessary search branches.',
      realWorldUse: 'Implemented in chess engines, game-playing programs, decision-making systems, and any application using minimax search where computational efficiency is important.',
      importance: 'Alpha-beta pruning makes minimax search practical for complex games by dramatically reducing the number of nodes that need to be evaluated without affecting the quality of decisions.',
      detailedExplanation: `
Alpha-beta pruning works by maintaining two values during the minimax search: alpha represents the best value that the maximizing player can guarantee so far, and beta represents the best value that the minimizing player can guarantee so far. When the algorithm discovers that alpha >= beta at any node, it can safely prune the remaining branches at that node because the minimizing player would never allow the maximizing player to reach a position better than beta.

The effectiveness of alpha-beta pruning depends heavily on the order in which moves are examined. In the best case, where the best moves are always examined first, alpha-beta pruning can reduce the effective branching factor from b to approximately sqrt(b), allowing the search to go roughly twice as deep in the same amount of time. Move ordering techniques such as examining captures first, using previous search results, or employing killer move heuristics can significantly improve pruning effectiveness and overall search performance.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=xBXHtz4Gbdo',
        'https://www.youtube.com/watch?v=STjW3eH0Cik'
      ],
      externalLinks: [
        { title: 'Alpha-Beta Pruning', url: 'https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-4-alpha-beta-pruning/' },
        { title: 'Game Tree Pruning', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_alpha_beta_pruning.htm' }
      ]
    }
  }
];

export default artificialIntelligenceUnit1;