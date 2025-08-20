import { Topic } from '../syllabus';

export const designAnalysisAlgorithmsUnit4: Topic[] = [
    {
        id: 'lower-bound-arguments',
        name: 'Limitations of Algorithm Power: Lower-Bound Arguments',
        semester: 2,
        subject: 'The Design and Analysis of Algorithms',
        unit: 'Unit IV',
        content: {
            introduction: 'Lower-bound arguments establish theoretical limits on algorithm efficiency, proving that certain problems cannot be solved faster than a specific time complexity.',
            definition: 'Lower-bound arguments are mathematical proofs that demonstrate the minimum amount of work required to solve a problem, regardless of the algorithm used.',
            realWorldExample: 'Like proving that you must examine at least half the books on average to find a specific book in an unsorted library, regardless of your search strategy.',
            realWorldUse: 'Used in theoretical computer science to understand fundamental limits, guide algorithm design, and determine when algorithms are optimal.',
            importance: 'Establishes theoretical foundations for algorithm analysis and helps identify when further optimization is impossible.',
            detailedExplanation: `
Lower-bound arguments provide theoretical limits on the computational complexity of problems by analyzing the minimum amount of work any algorithm must perform. These arguments are independent of specific algorithms and instead focus on the inherent difficulty of problems. Common techniques include information-theoretic arguments that count the minimum information needed to solve a problem, and adversarial arguments that construct worst-case inputs.

For example, comparison-based sorting has a lower bound of Ω(n log n) because any algorithm must make enough comparisons to distinguish between all n! possible permutations of n elements. This requires at least log₂(n!) ≈ n log n comparisons. Lower bounds help identify optimal algorithms - when an algorithm matches the lower bound, we know it cannot be improved asymptotically. Understanding lower bounds guides research efforts and helps determine when to seek alternative approaches or when current algorithms are fundamentally optimal.
      `,
            youtubeLinks: [
                'https://www.youtube.com/watch?v=Nz1KZXbghj8',
                'https://www.youtube.com/watch?v=4q-jmGrmxKs'
            ],
            externalLinks: [
                { title: 'Lower Bounds in Algorithms', url: 'https://www.geeksforgeeks.org/lower-bound-theory/' },
                { title: 'Algorithm Complexity Bounds', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_lower_bounds.htm' }
            ]
        }
    },
    {
        id: 'decision-trees',
        name: 'Decision Trees',
        semester: 2,
        subject: 'The Design and Analysis of Algorithms',
        unit: 'Unit IV',
        content: {
            introduction: 'Decision trees model the execution of comparison-based algorithms as binary trees, providing a framework for analyzing lower bounds and algorithm optimality.',
            definition: 'A decision tree is a binary tree that represents all possible execution paths of a comparison-based algorithm, where internal nodes represent comparisons and leaves represent outcomes.',
            realWorldExample: 'Like a flowchart for diagnosing a medical condition, where each question leads to further questions until a diagnosis is reached.',
            realWorldUse: 'Used in algorithm analysis, proving lower bounds, designing optimal algorithms, and understanding the structure of comparison-based problems.',
            importance: 'Provides a powerful tool for analyzing comparison-based algorithms and establishing theoretical limits on their performance.',
            detailedExplanation: `
Decision trees represent the structure of comparison-based algorithms where each internal node corresponds to a comparison between two elements, and each leaf represents a possible outcome or solution. The height of the decision tree corresponds to the worst-case number of comparisons needed by the algorithm. For any problem with n possible outcomes, the decision tree must have at least n leaves.

Since a binary tree of height h can have at most 2^h leaves, we need h ≥ log₂(n) to accommodate n outcomes. This gives us the fundamental lower bound for comparison-based problems. For sorting n elements, there are n! possible permutations, so we need height at least log₂(n!) ≈ n log n. Decision trees help visualize why certain algorithms are optimal and guide the design of new algorithms. They also help identify the information-theoretic limits of problems and understand the trade-offs between different algorithmic approaches.
      `,
            youtubeLinks: [
                'https://www.youtube.com/watch?v=Nz1KZXbghj8',
                'https://www.youtube.com/watch?v=4q-jmGrmxKs'
            ],
            externalLinks: [
                { title: 'Decision Tree Model', url: 'https://www.geeksforgeeks.org/decision-tree/' },
                { title: 'Algorithm Analysis Trees', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_decision_trees.htm' }
            ]
        }
    },
    {
        id: 'p-np-npc-problems',
        name: 'P, NP and NP-Complete Problems',
        semester: 2,
        subject: 'The Design and Analysis of Algorithms',
        unit: 'Unit IV',
        content: {
            introduction: 'P, NP, and NP-Complete problems represent fundamental complexity classes that categorize computational problems based on their difficulty and the resources required to solve them.',
            definition: 'P contains problems solvable in polynomial time, NP contains problems verifiable in polynomial time, and NP-Complete problems are the hardest problems in NP.',
            realWorldExample: 'Like the difference between solving a jigsaw puzzle (hard) versus checking if a completed puzzle is correct (easy), or finding versus verifying solutions.',
            realWorldUse: 'Used in complexity theory, cryptography, optimization, and determining the computational feasibility of real-world problems.',
            importance: 'Central to theoretical computer science and helps classify problems by their computational difficulty, guiding algorithm design and resource allocation.',
            detailedExplanation: `
The class P consists of decision problems that can be solved by a deterministic algorithm in polynomial time. The class NP (Nondeterministic Polynomial) contains decision problems for which a solution can be verified in polynomial time, even if finding the solution might be difficult. Every problem in P is also in NP, but whether P = NP remains the most famous unsolved problem in computer science.

NP-Complete problems are the hardest problems in NP - they are in NP and every problem in NP can be reduced to them in polynomial time. If any NP-Complete problem can be solved in polynomial time, then P = NP. Examples include the Traveling Salesman Problem, Boolean Satisfiability (SAT), and the Knapsack Problem. NP-Hard problems are at least as hard as NP-Complete problems but may not be in NP. Understanding these complexity classes helps determine when to seek exact solutions versus approximations, and guides the development of heuristic and approximation algorithms for intractable problems.
      `,
            youtubeLinks: [
                'https://www.youtube.com/watch?v=YX40hbAHx3s',
                'https://www.youtube.com/watch?v=e2cF8a5aAhE'
            ],
            externalLinks: [
                { title: 'P vs NP Problem', url: 'https://www.geeksforgeeks.org/types-of-complexity-classes-p-np-conp-np-hard-and-np-complete/' },
                { title: 'Complexity Classes', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_np_complete.htm' }
            ]
        }
    },
    {
        id: 'n-queens-problem',
        name: 'Back Tracking: n-Queens problem',
        semester: 2,
        subject: 'The Design and Analysis of Algorithms',
        unit: 'Unit IV',
        content: {
            introduction: 'The n-Queens problem demonstrates backtracking by finding arrangements of n queens on an n×n chessboard such that no two queens attack each other.',
            definition: 'The n-Queens problem seeks to place n chess queens on an n×n chessboard so that no two queens are in the same row, column, or diagonal.',
            realWorldExample: 'Like arranging security guards in a building so that each can monitor their area without interfering with others\' coverage.',
            realWorldUse: 'Used to demonstrate backtracking algorithms, constraint satisfaction problems, and serves as a benchmark for algorithm testing.',
            importance: 'Classic example of backtracking that illustrates systematic exploration of solution spaces with pruning of invalid branches.',
            detailedExplanation: `
The n-Queens problem uses backtracking to systematically explore all possible placements of queens while pruning branches that lead to invalid configurations. The algorithm places queens one row at a time, checking at each step whether the current placement conflicts with previously placed queens.

When a conflict is detected (two queens in the same column or diagonal), the algorithm backtracks by removing the most recently placed queen and trying the next position. The solution space forms a tree where each level represents a row, and each branch represents a column choice. Backtracking prunes large portions of this tree by detecting conflicts early. The time complexity is O(n!) in the worst case, but pruning significantly reduces the actual search space. The algorithm can find one solution, all solutions, or count the total number of solutions. This problem demonstrates how backtracking can solve constraint satisfaction problems efficiently by avoiding the exploration of obviously invalid solution paths.
      `,
            youtubeLinks: [
                'https://www.youtube.com/watch?v=xouin83ebxE',
                'https://www.youtube.com/watch?v=Ph95IHjRp5M'
            ],
            externalLinks: [
                { title: 'N-Queens Problem', url: 'https://www.geeksforgeeks.org/n-queen-problem-backtracking-3/' },
                { title: 'Backtracking Algorithms', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_n_queens_problem.htm' }
            ]
        }
    },
    {
        id: 'hamiltonian-circuit-problem',
        name: 'Hamiltonian Circuit Problem',
        semester: 2,
        subject: 'The Design and Analysis of Algorithms',
        unit: 'Unit IV',
        content: {
            introduction: 'The Hamiltonian Circuit problem uses backtracking to find a cycle that visits every vertex in a graph exactly once and returns to the starting vertex.',
            definition: 'A Hamiltonian circuit is a cycle in a graph that visits every vertex exactly once and returns to the starting vertex, and the problem seeks to determine if such a circuit exists.',
            realWorldExample: 'Like planning a road trip that visits every city exactly once and returns home, or a delivery route that covers all locations efficiently.',
            realWorldUse: 'Used in route planning, circuit design, DNA sequencing, and any application requiring complete traversal with minimal repetition.',
            importance: 'Demonstrates backtracking on graph problems and illustrates the difficulty of NP-Complete problems in practice.',
            detailedExplanation: `
The Hamiltonian Circuit problem uses backtracking to systematically explore paths through the graph, building a potential circuit one vertex at a time. The algorithm maintains a path of visited vertices and at each step tries to extend the path to an unvisited adjacent vertex. When no valid extension is possible, it backtracks by removing the last vertex and trying alternative paths.

The algorithm checks two main constraints: the next vertex must be adjacent to the current vertex, and the next vertex must not have been visited (except for the final step where we return to the start). The time complexity is O(n!) in the worst case since we might need to explore all possible permutations of vertices. However, backtracking prunes many branches early when no valid adjacent vertex is available. The problem is NP-Complete, meaning no known polynomial-time algorithm exists. The backtracking approach is still practical for small to medium-sized graphs and demonstrates how systematic search with pruning can tackle computationally difficult problems.
      `,
            youtubeLinks: [
                'https://www.youtube.com/watch?v=dQr4wZCiJJ4',
                'https://www.youtube.com/watch?v=naimpJzSJm4'
            ],
            externalLinks: [
                { title: 'Hamiltonian Path and Circuit', url: 'https://www.geeksforgeeks.org/hamiltonian-cycle-backtracking-6/' },
                { title: 'Graph Traversal Problems', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_hamiltonian_circuit.htm' }
            ]
        }
    },
    {
        id: 'subset-sum-problem',
        name: 'Subset-Sum Problem',
        semester: 2,
        subject: 'The Design and Analysis of Algorithms',
        unit: 'Unit IV',
        content: {
            introduction: 'The Subset-Sum problem uses backtracking to find if there exists a subset of given numbers that sum to a target value.',
            definition: 'The Subset-Sum problem determines whether there exists a subset of a given set of integers that sums to a specified target value.',
            realWorldExample: 'Like determining if you can make exact change for a purchase using specific coins from your wallet, or if certain expenses sum to your budget.',
            realWorldUse: 'Used in resource allocation, budget planning, cryptography, and any scenario involving exact sum requirements.',
            importance: 'Classic NP-Complete problem that demonstrates backtracking for combinatorial optimization and constraint satisfaction.',
            detailedExplanation: `
The Subset-Sum problem uses backtracking to systematically explore all possible subsets of the given set, checking if any subset sums to the target value. The algorithm makes binary decisions for each element: include it in the current subset or exclude it. At each step, it maintains the current sum and remaining elements to consider.

The backtracking approach prunes branches when the current sum exceeds the target (for positive numbers) or when the remaining elements cannot possibly reach the target. The algorithm can be optimized by sorting the input array and using additional pruning strategies. The time complexity is O(2^n) in the worst case, as there are 2^n possible subsets to consider. However, backtracking with pruning often performs much better in practice. The problem can be solved using dynamic programming in O(n × sum) time, but backtracking is useful when we need to find the actual subset or when memory is limited. This problem illustrates how backtracking can handle exponential search spaces efficiently through intelligent pruning.
      `,
            youtubeLinks: [
                'https://www.youtube.com/watch?v=kyLxTdsT8ws',
                'https://www.youtube.com/watch?v=s6FhG--P7z0'
            ],
            externalLinks: [
                { title: 'Subset Sum Problem', url: 'https://www.geeksforgeeks.org/subset-sum-backtracking-4/' },
                { title: 'Backtracking Examples', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_subset_sum_problem.htm' }
            ]
        }
    },
    {
        id: 'assignment-problem',
        name: 'Branch-and-Bound: Assignment Problem',
        semester: 2,
        subject: 'The Design and Analysis of Algorithms',
        unit: 'Unit IV',
        content: {
            introduction: 'The Assignment Problem uses branch-and-bound to optimally assign n tasks to n workers, minimizing the total cost while ensuring each task is assigned to exactly one worker.',
            definition: 'The Assignment Problem seeks to find a one-to-one assignment of n tasks to n workers that minimizes the total assignment cost, solved efficiently using branch-and-bound.',
            realWorldExample: 'Like assigning employees to projects based on their skills and availability to minimize overall project costs or completion time.',
            realWorldUse: 'Used in job scheduling, resource allocation, matching problems, and any scenario requiring optimal one-to-one assignments.',
            importance: 'Demonstrates branch-and-bound optimization and provides solutions for important practical assignment problems.',
            detailedExplanation: `
The Assignment Problem uses branch-and-bound to find the optimal assignment by systematically exploring the solution space while maintaining bounds on the optimal solution cost. The algorithm builds a search tree where each level represents a task, and each branch represents assigning that task to a specific worker.

At each node, the algorithm computes a lower bound on the cost of any complete assignment that extends the current partial assignment. This is typically done using relaxation techniques such as the Hungarian method or linear programming relaxation. If the lower bound at a node exceeds the cost of the best known complete assignment, that branch is pruned. The algorithm maintains the best complete assignment found so far and uses it to prune branches that cannot lead to better solutions. The time complexity depends on the effectiveness of the bounding function and pruning, but can be much better than the O(n!) brute force approach. Branch-and-bound guarantees finding the optimal solution while often exploring only a small fraction of the total solution space.
      `,
            youtubeLinks: [
                'https://www.youtube.com/watch?v=dQHMbpc2k_k',
                'https://www.youtube.com/watch?v=BUGOln8ydXM'
            ],
            externalLinks: [
                { title: 'Assignment Problem', url: 'https://www.geeksforgeeks.org/assignment-problem-using-branch-and-bound/' },
                { title: 'Branch and Bound', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_assignment_problem.htm' }
            ]
        }
    },
    {
        id: 'knapsack-branch-bound',
        name: 'Knapsack Problem (Branch-and-Bound)',
        semester: 2,
        subject: 'The Design and Analysis of Algorithms',
        unit: 'Unit IV',
        content: {
            introduction: 'The Knapsack Problem solved using branch-and-bound explores the solution space systematically while using bounds to prune suboptimal branches.',
            definition: 'Branch-and-bound for the Knapsack Problem finds the optimal selection of items by building a search tree and using upper bounds to eliminate branches that cannot lead to optimal solutions.',
            realWorldExample: 'Like a smart shopper who estimates the maximum possible value before exploring each aisle, avoiding aisles that cannot improve their current best selection.',
            realWorldUse: 'Used in resource allocation, portfolio optimization, cargo loading, and any constrained optimization problem requiring exact solutions.',
            importance: 'Demonstrates how branch-and-bound can solve NP-Hard problems optimally while being more efficient than brute force approaches.',
            detailedExplanation: `
Branch-and-bound for the Knapsack Problem creates a binary search tree where each level represents an item, and each branch represents the decision to include or exclude that item. At each node, the algorithm computes an upper bound on the maximum value achievable by any solution that extends the current partial solution.

The upper bound is typically computed using fractional knapsack relaxation, where remaining items are considered in order of value-to-weight ratio, and the last item can be taken fractionally. If the upper bound at a node is less than or equal to the value of the best known complete solution, that branch is pruned. The algorithm maintains the best complete solution found so far and uses it for pruning. Nodes are typically explored in a best-first manner, prioritizing nodes with higher upper bounds. This approach can significantly reduce the search space compared to exhaustive enumeration, though the worst-case complexity remains exponential. The effectiveness depends on the quality of the bounding function and the order of exploration.
      `,
            youtubeLinks: [
                'https://www.youtube.com/watch?v=slayHdxtqDo',
                'https://www.youtube.com/watch?v=yV1d-b_NeK8'
            ],
            externalLinks: [
                { title: 'Knapsack Branch and Bound', url: 'https://www.geeksforgeeks.org/0-1-knapsack-using-branch-and-bound/' },
                { title: 'Branch and Bound Optimization', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_knapsack_problem.htm' }
            ]
        }
    },
    {
        id: 'traveling-salesman-problem',
        name: 'Traveling Salesman Problem',
        semester: 2,
        subject: 'The Design and Analysis of Algorithms',
        unit: 'Unit IV',
        content: {
            introduction: 'The Traveling Salesman Problem (TSP) uses branch-and-bound to find the shortest possible route that visits each city exactly once and returns to the starting city.',
            definition: 'TSP seeks to find the minimum-cost Hamiltonian cycle in a weighted graph, representing the shortest route for a salesman visiting all cities exactly once.',
            realWorldExample: 'Like planning the most efficient delivery route for a courier service that must visit all customers and return to the depot with minimum travel distance.',
            realWorldUse: 'Used in logistics, circuit board drilling, DNA sequencing, and any application requiring optimal routing or sequencing.',
            importance: 'Classic NP-Hard optimization problem that demonstrates branch-and-bound techniques and serves as a benchmark for optimization algorithms.',
            detailedExplanation: `
The TSP branch-and-bound algorithm builds a search tree where each level represents a city to visit next, and each branch represents choosing a specific unvisited city. The algorithm computes lower bounds at each node using techniques such as the minimum spanning tree bound or the assignment problem relaxation.

The MST-based lower bound computes the cost of the minimum spanning tree of unvisited cities plus the minimum costs to connect the current city to the MST and to return from the MST to the starting city. If the lower bound at a node exceeds the cost of the best known tour, that branch is pruned. The algorithm maintains the best complete tour found so far and uses various pruning strategies to eliminate suboptimal branches. Advanced implementations use sophisticated bounding techniques, node selection strategies, and preprocessing to improve efficiency. While TSP remains NP-Hard, branch-and-bound can solve moderately sized instances optimally and provides a framework for understanding the problem\'s structure and developing approximation algorithms.
      `,
            youtubeLinks: [
                'https://www.youtube.com/watch?v=1FEP_sNb62k',
                'https://www.youtube.com/watch?v=GiDsjIBOVoA'
            ],
            externalLinks: [
                { title: 'Traveling Salesman Problem', url: 'https://www.geeksforgeeks.org/traveling-salesman-problem-tsp-implementation/' },
                { title: 'TSP Branch and Bound', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_travelling_salesman_problem.htm' }
            ]
        }
    }
];

export default designAnalysisAlgorithmsUnit4;