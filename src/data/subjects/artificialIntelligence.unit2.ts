import { Topic } from '../syllabus';

export const artificialIntelligenceUnit2: Topic[] = [
  {
    id: 'knowledge-based-agents',
    name: 'Knowledge-based agents',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit II',
    content: {
      introduction: 'Knowledge-based agents use internal representations of knowledge to make decisions and solve problems in complex environments.',
      definition: 'A knowledge-based agent is an AI system that maintains an internal knowledge base and uses logical reasoning to determine actions based on its knowledge and perceptions.',
      realWorldExample: 'Medical diagnosis systems that use knowledge about diseases, symptoms, and treatments to recommend diagnoses and treatments for patients.',
      realWorldUse: 'Used in expert systems, medical diagnosis, legal reasoning, automated planning, and intelligent tutoring systems.',
      importance: 'Enables AI systems to handle complex reasoning tasks and make decisions based on accumulated knowledge rather than just reactive responses.',
      detailedExplanation: `Knowledge-based agents operate by maintaining a knowledge base containing facts and rules about the world, and using inference mechanisms to derive new knowledge and make decisions. The agent architecture includes a knowledge base for storing information, an inference engine for reasoning, and mechanisms for updating knowledge based on new perceptions. The agent follows a cycle of perceiving the environment, updating its knowledge base with new information, using inference to determine what actions to take, and then executing those actions. The key advantage of knowledge-based agents is their ability to handle complex reasoning tasks that require understanding relationships between different pieces of information. They can work with incomplete information, make logical deductions, and explain their reasoning processes. The knowledge representation must be expressive enough to capture relevant aspects of the domain while being computationally tractable for reasoning.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2ePf9rue1Ao',
        'https://www.youtube.com/watch?v=kbBdfFtIddQ'
      ],
      externalLinks: [
        { title: 'Knowledge-Based Agents', url: 'https://www.geeksforgeeks.org/knowledge-based-agents-in-ai/' },
        { title: 'AI Agent Architectures', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_agents_and_environments.htm' }
      ]
    }
  },
  {
    id: 'wumpus-world',
    name: 'The Wumpus world as an example world',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit II',
    content: {
      introduction: 'The Wumpus World is a classic AI problem that demonstrates knowledge representation, logical reasoning, and decision-making in uncertain environments.',
      definition: 'The Wumpus World is a cave environment where an agent must navigate to find gold while avoiding pits and a deadly Wumpus, using logical reasoning to infer safe moves.',
      realWorldExample: 'Like navigating a dangerous mine field where you must use clues and logical deduction to safely reach your objective while avoiding hidden dangers.',
      realWorldUse: 'Used as a teaching tool for AI concepts, benchmark for reasoning systems, and example for knowledge representation and inference.',
      importance: 'Provides a concrete example for understanding how knowledge-based agents work with uncertainty, partial information, and logical reasoning.',
      detailedExplanation: `The Wumpus World consists of a 4x4 grid where the agent starts at position [1,1] and must find gold while avoiding pits and the Wumpus monster. The agent has sensors that provide information about adjacent squares: it feels a breeze near pits, smells a stench near the Wumpus, and sees a glitter when gold is present. The agent must use logical reasoning to infer the locations of dangers based on sensor readings and plan safe moves to reach the gold. This environment demonstrates key AI concepts including knowledge representation using propositional logic, inference mechanisms for deducing new facts, planning under uncertainty, and decision-making with incomplete information. The agent maintains a knowledge base of facts about the world state and uses logical inference to determine which squares are safe to visit. The problem illustrates how an intelligent agent can succeed in a complex environment by combining perception, knowledge representation, logical reasoning, and action selection.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=kbBdfFtIddQ',
        'https://www.youtube.com/watch?v=2ePf9rue1Ao'
      ],
      externalLinks: [
        { title: 'Wumpus World Problem', url: 'https://www.geeksforgeeks.org/wumpus-world-in-artificial-intelligence/' },
        { title: 'AI Problem Solving', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_problem_solving.htm' }
      ]
    }
  },
  {
    id: 'logic-introduction',
    name: 'Logic',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit II',
    content: {
      introduction: 'Logic provides the mathematical foundation for knowledge representation and reasoning in artificial intelligence systems.',
      definition: 'Logic is a formal system for representing knowledge and performing reasoning, providing rules for determining what conclusions can be drawn from given premises.',
      realWorldExample: 'Like the rules of mathematics that allow us to prove theorems, logic provides rules for AI systems to make valid inferences from known facts.',
      realWorldUse: 'Used in expert systems, automated theorem proving, database query processing, and any AI system requiring formal reasoning.',
      importance: 'Provides the theoretical foundation for knowledge representation and enables AI systems to make reliable, explainable inferences.',
      detailedExplanation: `Logic in AI serves as a formal language for representing knowledge about the world and a set of inference rules for deriving new knowledge from existing facts. The key components include syntax (rules for constructing valid statements), semantics (meaning of statements in terms of world states), and inference procedures (methods for deriving new statements from existing ones). Logic enables AI systems to represent complex relationships, handle uncertainty, and provide explanations for their conclusions. Different types of logic serve different purposes in AI applications. Propositional logic deals with simple true/false statements and their combinations using logical connectives. First-order logic extends this with quantifiers and predicates, allowing more expressive knowledge representation. Higher-order logics, modal logics, and non-monotonic logics address specific reasoning challenges. The choice of logical formalism depends on the application requirements, including expressiveness needs, computational complexity constraints, and the nature of the domain being modeled.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=kbBdfFtIddQ',
        'https://www.youtube.com/watch?v=2ePf9rue1Ao'
      ],
      externalLinks: [
        { title: 'Logic in AI', url: 'https://www.geeksforgeeks.org/logic-in-artificial-intelligence/' },
        { title: 'Knowledge Representation', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_knowledge_representation.htm' }
      ]
    }
  },
  {
    id: 'propositional-logic',
    name: 'Propositional logic',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit II',
    content: {
      introduction: 'Propositional logic is the simplest form of logic used in AI, dealing with propositions that are either true or false and their logical combinations.',
      definition: 'Propositional logic is a formal system that uses propositional variables and logical connectives to represent and reason about statements that are either true or false.',
      realWorldExample: 'Like simple if-then rules: "If it is raining AND I do not have an umbrella, THEN I will get wet" - combining simple true/false statements with logical operators.',
      realWorldUse: 'Used in digital circuit design, automated reasoning systems, expert systems, and as a foundation for more complex logical systems.',
      importance: 'Provides the basic building blocks for logical reasoning in AI and serves as the foundation for understanding more complex logical systems.',
      detailedExplanation: `Propositional logic consists of propositional variables (representing atomic statements that are either true or false) and logical connectives including conjunction (AND), disjunction (OR), negation (NOT), implication (IF-THEN), and biconditional (IF AND ONLY IF). Complex statements are built by combining simpler propositions using these connectives. The truth value of complex statements is determined by the truth values of their components and the semantics of the logical connectives. Key concepts in propositional logic include satisfiability (whether a formula can be made true), validity (whether a formula is always true), and logical equivalence (whether two formulas have the same truth value in all interpretations). Inference in propositional logic can be performed using various methods including truth tables, resolution, and natural deduction. While propositional logic is limited in expressiveness compared to first-order logic, it is computationally tractable and sufficient for many AI applications.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=kbBdfFtIddQ',
        'https://www.youtube.com/watch?v=2ePf9rue1Ao'
      ],
      externalLinks: [
        { title: 'Propositional Logic', url: 'https://www.geeksforgeeks.org/propositional-logic/' },
        { title: 'Logic and Reasoning', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_logic.htm' }
      ]
    }
  },
  {
    id: 'reasoning-patterns-propositional',
    name: 'Reasoning patterns in propositional logic',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit II',
    content: {
      introduction: 'Reasoning patterns in propositional logic are systematic methods for deriving new conclusions from existing knowledge using logical inference rules.',
      definition: 'Reasoning patterns are standard forms of logical inference that allow AI systems to derive new propositions from existing ones using established rules of logical deduction.',
      realWorldExample: 'Like detective work where you use clues and logical reasoning: "If the suspect was at the crime scene AND the crime happened at 9 PM, THEN the suspect could be guilty."',
      realWorldUse: 'Used in automated theorem proving, expert systems, logical programming, and any AI system that needs to make logical deductions.',
      importance: 'Enables AI systems to systematically derive new knowledge from existing facts and make reliable logical inferences.',
      detailedExplanation: `Common reasoning patterns in propositional logic include modus ponens (if P implies Q and P is true, then Q is true), modus tollens (if P implies Q and Q is false, then P is false), hypothetical syllogism (if P implies Q and Q implies R, then P implies R), and disjunctive syllogism (if P or Q is true and P is false, then Q is true). These patterns provide the foundation for systematic reasoning in AI systems. More complex reasoning patterns include proof by contradiction (assuming the negation of what you want to prove and deriving a contradiction), case analysis (considering all possible cases), and resolution (a complete inference method for propositional logic). These patterns can be implemented algorithmically, allowing AI systems to perform automatic reasoning. The key challenge is to organize these patterns efficiently and apply them systematically to derive useful conclusions. Understanding these reasoning patterns is essential for building AI systems that can perform logical reasoning and for understanding how automated reasoning systems work.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=kbBdfFtIddQ',
        'https://www.youtube.com/watch?v=2ePf9rue1Ao'
      ],
      externalLinks: [
        { title: 'Logical Reasoning Patterns', url: 'https://www.geeksforgeeks.org/inference-in-propositional-logic/' },
        { title: 'AI Reasoning Methods', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_reasoning.htm' }
      ]
    }
  },
  {
    id: 'effective-propositional-inference',
    name: 'Effective propositional inference',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit II',
    content: {
      introduction: 'Effective propositional inference involves efficient algorithms and techniques for automatically deriving conclusions from propositional knowledge bases.',
      definition: 'Effective propositional inference refers to computationally efficient methods for determining what conclusions can be logically derived from a set of propositional statements.',
      realWorldExample: 'Like having a computer program that can automatically solve logic puzzles by systematically applying reasoning rules until it finds the solution.',
      realWorldUse: 'Used in automated reasoning systems, SAT solvers, model checkers, and AI systems requiring fast logical inference.',
      importance: 'Enables practical implementation of logical reasoning in AI systems by providing efficient algorithms for inference tasks.',
      detailedExplanation: `Effective propositional inference requires algorithms that can handle large knowledge bases efficiently. Key techniques include the resolution method, which converts formulas to conjunctive normal form and uses a single inference rule to derive conclusions. The DPLL algorithm efficiently determines satisfiability by systematically assigning truth values to variables. Modern SAT solvers use advanced techniques like conflict-driven clause learning and efficient data structures to handle problems with millions of variables. Other important techniques include forward chaining (deriving conclusions from premises) and backward chaining (working backwards from goals to premises). Unit resolution and the pure literal rule provide optimizations for faster inference. The choice of inference method depends on the specific application requirements, including the size of the knowledge base, the types of queries being asked, and the need for explanations. Effective inference systems often combine multiple techniques and use heuristics to guide the search for proofs, making logical reasoning practical for real-world AI applications.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=kbBdfFtIddQ',
        'https://www.youtube.com/watch?v=2ePf9rue1Ao'
      ],
      externalLinks: [
        { title: 'Propositional Inference', url: 'https://www.geeksforgeeks.org/inference-in-propositional-logic/' },
        { title: 'SAT Solving', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_reasoning.htm' }
      ]
    }
  },
  {
    id: 'agents-based-propositional-logic',
    name: 'Agents based on propositional logic',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit II',
    content: {
      introduction: 'Agents based on propositional logic use logical reasoning to make decisions and take actions in their environment based on propositional knowledge representation.',
      definition: 'Propositional logic-based agents maintain knowledge bases of propositional statements and use logical inference to determine appropriate actions based on their perceptions and goals.',
      realWorldExample: 'Like a smart home system that uses logical rules: "IF motion is detected AND it is dark AND no one is home, THEN turn on security lights."',
      realWorldUse: 'Used in rule-based expert systems, automated control systems, decision support systems, and simple reasoning applications.',
      importance: 'Demonstrates how logical reasoning can be integrated into agent architectures to create intelligent behavior based on formal knowledge representation.',
      detailedExplanation: `Propositional logic-based agents follow a cycle of perceiving the environment, updating their knowledge base with new information represented as propositional statements, using inference to derive new conclusions, and selecting actions based on their goals and derived knowledge. The agent architecture includes sensors for perception, a knowledge base for storing propositional facts and rules, an inference engine for logical reasoning, and actuators for taking actions. The main limitation of propositional logic-based agents is the expressiveness of propositional logic, which cannot represent relationships between objects or quantified statements. However, for domains that can be adequately represented using propositional variables, these agents can be very effective. They provide clear, explainable reasoning processes and can handle complex logical relationships. The agent must be designed with appropriate propositional variables to represent relevant aspects of the domain and inference procedures that can efficiently derive the conclusions needed for decision-making. These agents work well in structured environments where the relevant facts can be represented as true/false propositions.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=kbBdfFtIddQ',
        'https://www.youtube.com/watch?v=2ePf9rue1Ao'
      ],
      externalLinks: [
        { title: 'Logic-Based Agents', url: 'https://www.geeksforgeeks.org/knowledge-based-agents-in-ai/' },
        { title: 'AI Agent Design', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_agents_and_environments.htm' }
      ]
    }
  },
  {
    id: 'representation-revisited',
    name: 'Representation revisited',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit II',
    content: {
      introduction: 'Representation revisited examines the limitations of propositional logic and motivates the need for more expressive knowledge representation schemes.',
      definition: 'Representation revisited refers to the analysis of knowledge representation limitations and the exploration of more powerful representation schemes beyond propositional logic.',
      realWorldExample: 'Like realizing that describing a library with simple yes/no statements is inadequate - you need to describe relationships between books, authors, and subjects.',
      realWorldUse: 'Used in designing knowledge representation systems, database schemas, semantic web applications, and complex reasoning systems.',
      importance: 'Identifies the limitations of simple representation schemes and motivates the development of more expressive knowledge representation methods.',
      detailedExplanation: `The limitations of propositional logic become apparent when trying to represent complex domains that involve objects, relationships, and quantified statements. Propositional logic cannot express statements like "All birds can fly" or "There exists a student who likes every course" because it lacks variables, quantifiers, and predicates. This leads to the need for more expressive representation schemes that can handle objects, properties, and relationships. Key issues in knowledge representation include the trade-off between expressiveness and computational tractability, the need for representing uncertainty and incomplete information, and the challenge of integrating different types of knowledge. More advanced representation schemes include first-order logic with predicates and quantifiers, semantic networks that represent knowledge as graphs, frames that organize knowledge around objects and concepts, and description logics that provide structured ways to represent and reason about concepts and relationships. The choice of representation scheme depends on the domain requirements, the types of reasoning needed, and computational constraints.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=kbBdfFtIddQ',
        'https://www.youtube.com/watch?v=2ePf9rue1Ao'
      ],
      externalLinks: [
        { title: 'Knowledge Representation', url: 'https://www.geeksforgeeks.org/knowledge-representation-in-ai/' },
        { title: 'AI Representation Schemes', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_knowledge_representation.htm' }
      ]
    }
  },
  {
    id: 'first-order-logic-syntax-semantics',
    name: 'Syntax and semantics of first-order logic',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit II',
    content: {
      introduction: 'First-order logic extends propositional logic with variables, predicates, and quantifiers, providing a more expressive framework for knowledge representation.',
      definition: 'First-order logic is a formal system that includes variables, predicates, functions, and quantifiers, allowing the representation of relationships between objects and quantified statements.',
      realWorldExample: 'Like being able to say "All students who study hard will pass the exam" instead of listing every individual student - using variables and quantifiers to express general rules.',
      realWorldUse: 'Used in databases, automated theorem proving, semantic web, expert systems, and any application requiring expressive knowledge representation.',
      importance: 'Provides the mathematical foundation for expressive knowledge representation and reasoning in AI systems dealing with complex domains.',
      detailedExplanation: `The syntax of first-order logic includes terms (constants, variables, and function applications), atomic formulas (predicates applied to terms), and complex formulas built using logical connectives and quantifiers. Constants represent specific objects, variables represent arbitrary objects, and predicates represent properties and relationships. The universal quantifier (∀) expresses "for all" statements, while the existential quantifier (∃) expresses "there exists" statements. The semantics of first-order logic is defined in terms of interpretations that specify a domain of objects, assign meanings to constants and predicates, and determine truth values for formulas. An interpretation satisfies a formula if the formula is true under that interpretation. Key semantic concepts include satisfiability (whether a formula can be made true), validity (whether a formula is true in all interpretations), and logical consequence (whether one formula logically follows from others). Understanding the syntax and semantics is crucial for using first-order logic effectively in AI applications and for understanding the theoretical foundations of logical reasoning systems.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=kbBdfFtIddQ',
        'https://www.youtube.com/watch?v=2ePf9rue1Ao'
      ],
      externalLinks: [
        { title: 'First-Order Logic', url: 'https://www.geeksforgeeks.org/first-order-logic-in-artificial-intelligence/' },
        { title: 'Logic Syntax and Semantics', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_first_order_logic.htm' }
      ]
    }
  },
  {
    id: 'using-first-order-logic',
    name: 'Using first-order logic',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit II',
    content: {
      introduction: 'Using first-order logic involves practical techniques for representing knowledge and performing reasoning in real-world AI applications.',
      definition: 'Using first-order logic refers to the practical application of first-order logical systems for knowledge representation, reasoning, and problem-solving in AI domains.',
      realWorldExample: 'Like creating a database system that can answer questions like "Find all students who are enrolled in courses taught by professors in the Computer Science department."',
      realWorldUse: 'Used in database query languages, expert systems, automated planning, natural language processing, and semantic reasoning systems.',
      importance: 'Enables practical implementation of expressive knowledge representation and reasoning systems for complex real-world domains.',
      detailedExplanation: `Using first-order logic effectively requires understanding how to model domains by identifying objects, properties, and relationships, and representing them using appropriate predicates and functions. Domain modeling involves choosing the right level of abstraction, defining predicates that capture important relationships, and formulating axioms that encode domain knowledge. Common patterns include representing taxonomies using subsumption relationships, modeling actions and their effects, and expressing constraints and rules. Practical considerations include managing the complexity of first-order reasoning, which is undecidable in general, by using restricted subsets or approximation techniques. Efficient reasoning often requires careful design of the knowledge base structure, use of appropriate inference strategies, and integration with specialized reasoning modules. Applications typically combine first-order logic with other techniques such as procedural knowledge, heuristic search, and machine learning. Success in using first-order logic depends on understanding both the theoretical foundations and the practical techniques for managing complexity while maintaining the expressiveness needed for the application domain.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=kbBdfFtIddQ',
        'https://www.youtube.com/watch?v=2ePf9rue1Ao'
      ],
      externalLinks: [
        { title: 'First-Order Logic Applications', url: 'https://www.geeksforgeeks.org/first-order-logic-in-artificial-intelligence/' },
        { title: 'Logic Programming', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_first_order_logic.htm' }
      ]
    }
  },
  {
    id: 'knowledge-engineering-first-order',
    name: 'Knowledge engineering in first-order logic',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit II',
    content: {
      introduction: 'Knowledge engineering in first-order logic involves the systematic process of acquiring, representing, and organizing domain knowledge using first-order logical formalism.',
      definition: 'Knowledge engineering is the process of building knowledge-based systems by eliciting domain expertise and representing it in first-order logic for automated reasoning.',
      realWorldExample: 'Like working with medical experts to create a diagnostic system that can reason about diseases, symptoms, and treatments using logical rules and relationships.',
      realWorldUse: 'Used in expert system development, ontology engineering, semantic web applications, and any system requiring formal knowledge representation.',
      importance: 'Bridges the gap between human expertise and machine reasoning by providing systematic methods for knowledge acquisition and representation.',
      detailedExplanation: `Knowledge engineering involves several key phases including knowledge acquisition (eliciting expertise from domain experts), knowledge representation (formalizing the knowledge in first-order logic), knowledge validation (ensuring the represented knowledge is correct and complete), and knowledge maintenance (updating and refining the knowledge base). The process requires close collaboration between knowledge engineers and domain experts to capture the nuances of expert reasoning. Key challenges include handling incomplete and uncertain knowledge, managing the complexity of large knowledge bases, ensuring consistency and avoiding contradictions, and making the knowledge base maintainable and extensible. Techniques include structured interviews with experts, analysis of expert problem-solving sessions, use of knowledge acquisition tools, and iterative refinement based on testing and validation. The resulting knowledge base must be both logically sound and practically useful, requiring careful attention to the trade-offs between expressiveness, computational efficiency, and maintainability. Success depends on understanding both the domain being modeled and the capabilities and limitations of first-order logical reasoning.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=kbBdfFtIddQ',
        'https://www.youtube.com/watch?v=2ePf9rue1Ao'
      ],
      externalLinks: [
        { title: 'Knowledge Engineering', url: 'https://www.geeksforgeeks.org/knowledge-engineering-in-ai/' },
        { title: 'Expert Systems Development', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_expert_systems.htm' }
      ]
    }
  },
  {
    id: 'propositional-vs-first-order-inference',
    name: 'Propositional versus first-order inference',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit II',
    content: {
      introduction: 'Comparing propositional and first-order inference reveals the trade-offs between expressiveness and computational complexity in logical reasoning systems.',
      definition: 'The comparison between propositional and first-order inference examines the differences in expressiveness, computational complexity, and practical applicability of these two logical systems.',
      realWorldExample: 'Like comparing a simple calculator (propositional) that can only handle specific numbers with a computer algebra system (first-order) that can work with variables and general formulas.',
      realWorldUse: 'Used in choosing appropriate reasoning systems, designing hybrid approaches, and understanding the computational limits of logical reasoning.',
      importance: 'Helps in selecting the right logical formalism for specific applications and understanding the fundamental trade-offs in automated reasoning.',
      detailedExplanation: `Propositional inference is decidable and can be solved in exponential time, with practical algorithms like DPLL and modern SAT solvers handling large problems efficiently. The main limitation is expressiveness - propositional logic cannot represent relationships between objects or quantified statements. First-order inference is more expressive but undecidable in general, meaning there is no algorithm that can determine validity for all first-order formulas. However, many practical problems can be solved using incomplete but sound inference procedures. The choice between propositional and first-order logic depends on the application requirements. Propositional logic is suitable when the domain can be adequately represented using boolean variables and the reasoning tasks are within its expressiveness limits. First-order logic is necessary when dealing with objects, relationships, and quantified statements, but requires careful management of computational complexity. Hybrid approaches often combine both, using first-order logic for knowledge representation and compiling to propositional logic for efficient inference. Understanding these trade-offs is crucial for designing effective reasoning systems and choosing appropriate tools for specific AI applications.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=kbBdfFtIddQ',
        'https://www.youtube.com/watch?v=2ePf9rue1Ao'
      ],
      externalLinks: [
        { title: 'Logic Comparison', url: 'https://www.geeksforgeeks.org/difference-between-propositional-logic-and-predicate-logic/' },
        { title: 'Inference Systems', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_reasoning.htm' }
      ]
    }
  },
  {
    id: 'unification-lifting',
    name: 'Unification and lifting',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit II',
    content: {
      introduction: 'Unification and lifting are fundamental techniques in first-order logic inference that enable efficient reasoning with variables and quantifiers.',
      definition: 'Unification is the process of finding substitutions that make different logical expressions identical, while lifting extends propositional inference rules to first-order logic.',
      realWorldExample: 'Like pattern matching in programming where you find what values to substitute for variables to make two expressions match, such as matching "loves(X,Y)" with "loves(john,mary)".',
      realWorldUse: 'Used in automated theorem proving, logic programming languages like Prolog, and any system performing first-order logical inference.',
      importance: 'Enables efficient implementation of first-order logic reasoning by providing systematic methods for handling variables and quantifiers.',
      detailedExplanation: `Unification is the process of finding a substitution (assignment of terms to variables) that makes two or more expressions syntactically identical. The unification algorithm takes two expressions and either returns a most general unifier (MGU) that makes them identical, or fails if no such unifier exists. For example, unifying "P(X,f(Y))" and "P(a,f(b))" yields the substitution {X/a, Y/b}. The MGU is important because it represents the most general way to make the expressions identical without unnecessary constraints. Lifting refers to the process of extending inference rules from propositional logic to first-order logic by incorporating unification. For example, the resolution rule in propositional logic can be lifted to first-order logic by unifying complementary literals before applying resolution. This allows first-order reasoning systems to work with variables and quantifiers while building on the well-understood foundations of propositional inference. Efficient unification algorithms and lifted inference rules are essential for practical first-order reasoning systems, enabling them to handle the increased expressiveness of first-order logic while maintaining computational tractability for many practical problems.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=kbBdfFtIddQ',
        'https://www.youtube.com/watch?v=2ePf9rue1Ao'
      ],
      externalLinks: [
        { title: 'Unification Algorithm', url: 'https://www.geeksforgeeks.org/unification-in-first-order-logic/' },
        { title: 'First-Order Inference', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_first_order_logic.htm' }
      ]
    }
  },
  {
    id: 'forward-chaining',
    name: 'Forward chaining',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit II',
    content: {
      introduction: 'Forward chaining is an inference strategy that starts with known facts and applies rules to derive new conclusions, working from premises to conclusions.',
      definition: 'Forward chaining is a data-driven inference method that repeatedly applies rules to known facts to derive new facts until no more conclusions can be drawn.',
      realWorldExample: 'Like a detective starting with evidence and clues, then systematically applying logical reasoning to uncover more facts until solving the case.',
      realWorldUse: 'Used in expert systems, production rule systems, automated planning, and monitoring systems that need to derive conclusions from incoming data.',
      importance: 'Provides an efficient method for deriving all possible conclusions from a knowledge base and is particularly useful for data-driven reasoning tasks.',
      detailedExplanation: `Forward chaining works by maintaining a database of known facts and a set of rules in the form "if conditions then conclusion." The algorithm repeatedly finds rules whose conditions are satisfied by the current facts, applies these rules to derive new facts, and adds the new facts to the database. This process continues until no new facts can be derived or a specific goal is reached. The method is sound (only derives true conclusions) and complete for definite clauses (rules with single positive conclusions). The efficiency of forward chaining depends on the organization of the rule base and the use of appropriate data structures for fast pattern matching. Techniques like the Rete algorithm optimize rule matching by maintaining networks that efficiently track which rules are applicable as facts change. Forward chaining is particularly effective for monitoring and reactive systems where new data continuously arrives and needs to be processed to derive relevant conclusions. The main challenge is controlling the search space to avoid deriving irrelevant facts, which can be addressed using goal-directed techniques or relevance filtering.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=kbBdfFtIddQ',
        'https://www.youtube.com/watch?v=2ePf9rue1Ao'
      ],
      externalLinks: [
        { title: 'Forward Chaining', url: 'https://www.geeksforgeeks.org/forward-chaining-and-backward-chaining-in-ai/' },
        { title: 'Inference Strategies', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_reasoning.htm' }
      ]
    }
  },
  {
    id: 'backward-chaining',
    name: 'Backward chaining',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit II',
    content: {
      introduction: 'Backward chaining is a goal-driven inference strategy that starts with a desired conclusion and works backwards to find supporting evidence.',
      definition: 'Backward chaining is a goal-directed inference method that starts with a query or goal and works backwards through rules to find facts that support the goal.',
      realWorldExample: 'Like a doctor diagnosing a disease by starting with suspected conditions and working backwards to find symptoms and test results that confirm the diagnosis.',
      realWorldUse: 'Used in diagnostic systems, query answering systems, automated theorem proving, and applications where specific goals need to be proven or disproven.',
      importance: 'Provides an efficient method for answering specific queries without deriving irrelevant conclusions, making it ideal for goal-directed reasoning.',
      detailedExplanation: `Backward chaining starts with a goal (query) and searches for rules that could conclude the goal. If such a rule is found, the algorithm recursively tries to prove the conditions of the rule, treating them as subgoals. The process continues until either all subgoals are proven (success) or no applicable rules can be found (failure). This approach is goal-directed and only explores reasoning paths that are relevant to answering the specific query. The main advantage of backward chaining is its focus on relevant reasoning paths, avoiding the derivation of facts that are not needed to answer the current query. This makes it particularly efficient for question-answering systems and diagnostic applications. The algorithm can be implemented using depth-first search with backtracking to explore alternative proof paths when needed. Challenges include handling recursive rules, managing infinite loops, and dealing with negation. Backward chaining forms the basis for logic programming languages like Prolog and is widely used in expert systems for diagnostic and advisory applications.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=kbBdfFtIddQ',
        'https://www.youtube.com/watch?v=2ePf9rue1Ao'
      ],
      externalLinks: [
        { title: 'Backward Chaining', url: 'https://www.geeksforgeeks.org/forward-chaining-and-backward-chaining-in-ai/' },
        { title: 'Logic Programming', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_reasoning.htm' }
      ]
    }
  },
  {
    id: 'resolution',
    name: 'Resolution',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit II',
    content: {
      introduction: 'Resolution is a complete inference method for first-order logic that provides a systematic approach to automated theorem proving.',
      definition: 'Resolution is a refutation-based inference method that proves theorems by showing that the negation of the theorem leads to a contradiction when combined with the knowledge base.',
      realWorldExample: 'Like proving a mathematical theorem by assuming the opposite is true and showing this leads to a logical contradiction, thereby proving the original statement.',
      realWorldUse: 'Used in automated theorem provers, logic programming systems, and formal verification tools that need complete inference procedures.',
      importance: 'Provides a complete and systematic method for first-order logic inference, forming the theoretical foundation for many automated reasoning systems.',
      detailedExplanation: `Resolution works by converting all formulas to clause form (disjunctions of literals) and repeatedly applying the resolution rule to derive new clauses. The resolution rule states that from clauses containing complementary literals, a new clause can be derived by combining the remaining literals. For first-order logic, resolution requires unification to handle variables. The method is refutation-complete, meaning that if a set of clauses is unsatisfiable, resolution will eventually derive the empty clause (contradiction). To prove a theorem, resolution adds the negation of the theorem to the knowledge base and attempts to derive a contradiction. If successful, the original theorem is proven. The method requires preprocessing to convert formulas to clause form, including skolemization to eliminate existential quantifiers and conversion to conjunctive normal form. While resolution is complete, it can be inefficient due to the large search space of possible resolutions. Various strategies like unit resolution, set-of-support, and linear resolution help focus the search and improve efficiency while maintaining completeness.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=kbBdfFtIddQ',
        'https://www.youtube.com/watch?v=2ePf9rue1Ao'
      ],
      externalLinks: [
        { title: 'Resolution Method', url: 'https://www.geeksforgeeks.org/resolution-in-propositional-logic/' },
        { title: 'Automated Theorem Proving', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_reasoning.htm' }
      ]
    }
  },
  {
    id: 'truth-maintenance-systems',
    name: 'Truth maintenance systems',
    semester: 2,
    subject: 'Artificial Intelligence',
    unit: 'Unit II',
    content: {
      introduction: 'Truth maintenance systems manage the consistency of knowledge bases by tracking dependencies between beliefs and handling belief revision when contradictions arise.',
      definition: 'A truth maintenance system (TMS) is a reasoning system that maintains consistency in a knowledge base by tracking justifications for beliefs and revising beliefs when contradictions are detected.',
      realWorldExample: 'Like a fact-checking system that keeps track of why each fact is believed to be true and automatically updates related beliefs when new contradictory evidence is discovered.',
      realWorldUse: 'Used in expert systems, belief revision systems, non-monotonic reasoning, and any application requiring dynamic knowledge base maintenance.',
      importance: 'Enables AI systems to handle changing and potentially contradictory information while maintaining logical consistency in their knowledge bases.',
      detailedExplanation: `Truth maintenance systems address the problem of maintaining consistency in dynamic knowledge bases where new information may contradict existing beliefs. The system maintains a dependency network that tracks the justifications for each belief, showing how beliefs depend on other beliefs and assumptions. When a contradiction is detected, the TMS identifies the conflicting beliefs and their justifications, then determines which beliefs to retract to restore consistency. Key components include the justification-based truth maintenance system (JTMS) which tracks support relationships between beliefs, and the assumption-based truth maintenance system (ATMS) which maintains multiple consistent belief sets simultaneously. The TMS must handle different types of justifications including monotonic support (beliefs that remain valid when new information is added) and non-monotonic support (beliefs that may be withdrawn when new information arrives). The system provides mechanisms for belief revision, dependency-directed backtracking, and maintaining multiple consistent worldviews. This capability is essential for AI systems operating in dynamic environments where information changes and contradictions must be resolved systematically.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=kbBdfFtIddQ',
        'https://www.youtube.com/watch?v=2ePf9rue1Ao'
      ],
      externalLinks: [
        { title: 'Truth Maintenance Systems', url: 'https://www.geeksforgeeks.org/truth-maintenance-system-in-ai/' },
        { title: 'Belief Revision', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_reasoning.htm' }
      ]
    }
  }
];

export default artificialIntelligenceUnit2;