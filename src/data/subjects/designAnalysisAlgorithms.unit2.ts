import { Topic } from '../syllabus';

export const designAnalysisAlgorithmsUnit2: Topic[] = [
  {
    id: 'selection-sort',
    name: 'Brute Force Method: Selection Sort',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit II',
    content: {
      introduction: 'Selection sort is a simple brute force sorting algorithm that repeatedly finds the minimum element and places it at the beginning of the unsorted portion.',
      definition: 'Selection sort is a comparison-based sorting algorithm that divides the array into sorted and unsorted portions, repeatedly selecting the smallest element from the unsorted portion.',
      realWorldExample: 'Like organizing a deck of cards by repeatedly finding the smallest card from the remaining cards and placing it in the correct position.',
      realWorldUse: 'Used in educational contexts, small datasets, and situations where memory writes are expensive due to its minimal number of swaps.',
      importance: 'Demonstrates brute force approach and provides foundation for understanding more complex sorting algorithms.',
      detailedExplanation: `
Selection sort operates by maintaining two subarrays: a sorted subarray at the beginning and an unsorted subarray for the remaining elements. In each iteration, the algorithm finds the minimum element in the unsorted subarray and swaps it with the first element of the unsorted subarray, effectively expanding the sorted portion by one element. This process continues until the entire array is sorted.

The algorithm has a time complexity of O(n²) in all cases because it always performs the same number of comparisons regardless of the initial order of elements. However, it performs at most n-1 swaps, making it efficient when the cost of swapping is high. The space complexity is O(1) as it sorts in-place. While not efficient for large datasets, selection sort is notable for its simplicity and the fact that it minimizes the number of memory writes, making it suitable for situations where write operations are significantly more expensive than read operations.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=g-PGLbMth_g',
        'https://www.youtube.com/watch?v=xWBP4lzkoyM'
      ],
      externalLinks: [
        { title: 'Selection Sort Algorithm', url: 'https://www.geeksforgeeks.org/selection-sort/' },
        { title: 'Selection Sort Visualization', url: 'https://www.tutorialspoint.com/data_structures_algorithms/selection_sort_algorithm.htm' }
      ]
    }
  },
  {
    id: 'bubble-sort',
    name: 'Bubble Sort',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit II',
    content: {
      introduction: 'Bubble sort is a simple brute force sorting algorithm that repeatedly compares adjacent elements and swaps them if they are in the wrong order.',
      definition: 'Bubble sort is a comparison-based sorting algorithm that works by repeatedly stepping through the list, comparing adjacent elements and swapping them if they are in the wrong order.',
      realWorldExample: 'Like bubbles rising to the surface in water, larger elements "bubble up" to their correct positions through repeated comparisons with neighbors.',
      realWorldUse: 'Used primarily for educational purposes to teach sorting concepts and algorithm analysis, rarely used in production due to poor performance.',
      importance: 'Provides an intuitive introduction to sorting algorithms and demonstrates the importance of algorithm efficiency analysis.',
      detailedExplanation: `
Bubble sort works by repeatedly passing through the array, comparing each pair of adjacent elements and swapping them if they are in the wrong order. After each complete pass, the largest unsorted element "bubbles up" to its correct position at the end of the array. The algorithm continues until a complete pass is made without any swaps, indicating that the array is sorted.

The basic version has a time complexity of O(n²) in the worst and average cases, but can be optimized to O(n) in the best case when the array is already sorted by adding a flag to detect when no swaps are made. The space complexity is O(1) as it sorts in-place. Despite its poor performance on large datasets, bubble sort is valuable for educational purposes because it clearly demonstrates the sorting process and the importance of algorithm optimization. Various optimizations can be applied, such as stopping early when no swaps are made or reducing the range of comparison in each pass.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=xli_FI7CuzA',
        'https://www.youtube.com/watch?v=Jdtq5uKz-w4'
      ],
      externalLinks: [
        { title: 'Bubble Sort Algorithm', url: 'https://www.geeksforgeeks.org/bubble-sort/' },
        { title: 'Bubble Sort Analysis', url: 'https://www.tutorialspoint.com/data_structures_algorithms/bubble_sort_algorithm.htm' }
      ]
    }
  },
  {
    id: 'sequential-search',
    name: 'Sequential Search',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit II',
    content: {
      introduction: 'Sequential search is a brute force searching algorithm that examines each element in a list one by one until the target element is found or the list is exhausted.',
      definition: 'Sequential search, also known as linear search, is a method for finding a target value within a list by checking each element sequentially until the target is found or the end is reached.',
      realWorldExample: 'Like looking for a specific book in an unsorted library by checking each book one by one from the beginning until you find the desired book.',
      realWorldUse: 'Used for searching in unsorted arrays, linked lists, and small datasets where the overhead of more complex algorithms is not justified.',
      importance: 'Fundamental searching algorithm that works on any data structure and serves as a baseline for comparing more efficient search methods.',
      detailedExplanation: `
Sequential search is the most straightforward searching algorithm that works by examining each element in the data structure sequentially from the beginning until either the target element is found or all elements have been examined. The algorithm returns the index of the found element or indicates that the element is not present in the collection.

The time complexity is O(n) in the worst case when the element is at the end or not present, O(1) in the best case when the element is at the beginning, and O(n/2) on average. The space complexity is O(1) as it requires only a constant amount of additional memory. While not efficient for large datasets, sequential search has several advantages: it works on both sorted and unsorted data, requires no preprocessing, works with any data structure that supports sequential access, and is simple to implement and understand. It's often the only option for unsorted data or when random access is not available.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=C46QfTjVCNU',
        'https://www.youtube.com/watch?v=SGU9duLE30w'
      ],
      externalLinks: [
        { title: 'Linear Search Algorithm', url: 'https://www.geeksforgeeks.org/linear-search/' },
        { title: 'Sequential Search', url: 'https://www.tutorialspoint.com/data_structures_algorithms/linear_search_algorithm.htm' }
      ]
    }
  },
  {
    id: 'brute-force-string-matching',
    name: 'Brute-Force String Matching',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit II',
    content: {
      introduction: 'Brute-force string matching is a straightforward algorithm that searches for a pattern within a text by checking every possible position.',
      definition: 'Brute-force string matching is a pattern searching algorithm that compares the pattern with every possible position in the text until a match is found or all positions are exhausted.',
      realWorldExample: 'Like searching for a specific word in a book by checking every position where the word could start, character by character.',
      realWorldUse: 'Used in text editors, search functions, DNA sequence analysis, and situations where simplicity is preferred over efficiency.',
      importance: 'Provides foundation for understanding string matching algorithms and serves as a baseline for comparing more sophisticated pattern matching techniques.',
      detailedExplanation: `
Brute-force string matching works by sliding the pattern over the text and comparing characters at each position. For each starting position in the text, the algorithm compares the pattern characters with the corresponding text characters. If all characters match, a match is found. If any character doesn't match, the algorithm moves to the next position in the text and repeats the process.

The time complexity is O(nm) in the worst case, where n is the length of the text and m is the length of the pattern. This occurs when there are many partial matches that fail at the last character. The best case is O(n) when the first character of the pattern doesn't appear in the text. The space complexity is O(1) as it requires only constant additional space. While inefficient for large texts or patterns, the brute-force approach is simple to implement, works for any alphabet, and doesn't require preprocessing. It's often sufficient for small texts or when the pattern is expected to be found quickly.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=V5-7GzOfADQ',
        'https://www.youtube.com/watch?v=GTJr8OvyEVQ'
      ],
      externalLinks: [
        { title: 'String Matching Algorithms', url: 'https://www.geeksforgeeks.org/naive-algorithm-for-pattern-searching/' },
        { title: 'Brute Force Pattern Matching', url: 'https://www.tutorialspoint.com/data_structures_algorithms/pattern_searching_algorithm.htm' }
      ]
    }
  },
  {
    id: 'exhaustive-search',
    name: 'Exhaustive Search',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit II',
    content: {
      introduction: 'Exhaustive search is a brute force approach that systematically examines all possible solutions to find the optimal or desired solution.',
      definition: 'Exhaustive search is a problem-solving method that explores the entire solution space by checking every possible candidate solution until the optimal solution is found.',
      realWorldExample: 'Like trying every possible combination on a combination lock until it opens, or checking every possible route to find the shortest path.',
      realWorldUse: 'Used in cryptography, optimization problems, puzzle solving, and situations where the solution space is small enough to explore completely.',
      importance: 'Guarantees finding the optimal solution and serves as a baseline for evaluating the effectiveness of more efficient algorithms.',
      detailedExplanation: `
Exhaustive search systematically explores all possible solutions in the solution space, making it a complete algorithm that guarantees finding the optimal solution if one exists. The approach involves generating all possible candidate solutions and evaluating each one according to the problem's criteria. This method is particularly useful for optimization problems where finding the global optimum is crucial.

The time complexity depends on the size of the solution space, which can be exponential for many problems, making exhaustive search impractical for large instances. However, it's valuable when the solution space is small, when optimality is critical, or when used as a baseline for comparison with heuristic methods. Exhaustive search can be implemented using various techniques such as nested loops for simple cases, recursive enumeration for complex structures, or systematic generation of permutations and combinations. While computationally expensive, it provides certainty about solution quality and completeness of the search process.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=V5-7GzOfADQ',
        'https://www.youtube.com/watch?v=GTJr8OvyEVQ'
      ],
      externalLinks: [
        { title: 'Exhaustive Search', url: 'https://www.geeksforgeeks.org/brute-force-approach-and-its-pros-and-cons/' },
        { title: 'Brute Force Algorithms', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_brute_force.htm' }
      ]
    }
  },
  {
    id: 'depth-first-search',
    name: 'Depth-First Search',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit II',
    content: {
      introduction: 'Depth-First Search (DFS) is a graph traversal algorithm that explores as far as possible along each branch before backtracking.',
      definition: 'DFS is a graph traversal algorithm that visits vertices by going as deep as possible down each path before backtracking to explore other paths.',
      realWorldExample: 'Like exploring a maze by always taking the first available path and only turning back when you reach a dead end.',
      realWorldUse: 'Used in pathfinding, topological sorting, cycle detection, solving puzzles, and analyzing connected components in graphs.',
      importance: 'Fundamental graph algorithm that forms the basis for many other graph algorithms and problem-solving techniques.',
      detailedExplanation: `
DFS explores a graph by starting at a source vertex and visiting vertices as deeply as possible before backtracking. The algorithm uses a stack (either explicitly or through recursion) to keep track of vertices to visit. It marks vertices as visited to avoid cycles and ensures each vertex is processed exactly once in connected graphs.

The algorithm has a time complexity of O(V + E) where V is the number of vertices and E is the number of edges, as it visits each vertex once and examines each edge once. The space complexity is O(V) for the visited array and recursion stack. DFS can be implemented recursively or iteratively using an explicit stack. The algorithm produces a DFS tree (or forest for disconnected graphs) and can be used to detect cycles, find connected components, perform topological sorting, and solve various graph problems. The order of vertex visitation depends on the order in which adjacent vertices are considered, making DFS useful for systematic exploration of solution spaces.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=7fujbpJ0LB4',
        'https://www.youtube.com/watch?v=Urx87-NMm6c'
      ],
      externalLinks: [
        { title: 'Depth First Search', url: 'https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/' },
        { title: 'DFS Algorithm', url: 'https://www.tutorialspoint.com/data_structures_algorithms/depth_first_traversal.htm' }
      ]
    }
  },
  {
    id: 'breadth-first-search',
    name: 'Breadth-First Search',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit II',
    content: {
      introduction: 'Breadth-First Search (BFS) is a graph traversal algorithm that explores vertices level by level, visiting all neighbors before moving to the next level.',
      definition: 'BFS is a graph traversal algorithm that visits vertices in order of their distance from the source, exploring all vertices at distance k before visiting vertices at distance k+1.',
      realWorldExample: 'Like spreading news through a social network, where information reaches all immediate friends first, then friends of friends, and so on.',
      realWorldUse: 'Used in shortest path algorithms, level-order tree traversal, social network analysis, and finding minimum spanning trees.',
      importance: 'Essential for finding shortest paths in unweighted graphs and serves as the foundation for many graph algorithms.',
      detailedExplanation: `
BFS explores a graph by visiting vertices in order of their distance from the starting vertex. It uses a queue data structure to maintain the order of vertex visitation, ensuring that vertices are processed in the order they were discovered. The algorithm marks vertices as visited and maintains the invariant that all vertices at distance k are visited before any vertex at distance k+1.

The time complexity is O(V + E) where V is the number of vertices and E is the number of edges, as each vertex and edge is examined exactly once. The space complexity is O(V) for the queue and visited array. BFS guarantees finding the shortest path (minimum number of edges) between the source and any reachable vertex in unweighted graphs. The algorithm produces a BFS tree that represents shortest paths from the source to all reachable vertices. BFS is particularly useful for problems involving minimum steps, level-wise processing, and finding the closest or nearest elements in graph structures.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=oDqjPvD54Ss',
        'https://www.youtube.com/watch?v=s-CYnVz-uh4'
      ],
      externalLinks: [
        { title: 'Breadth First Search', url: 'https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/' },
        { title: 'BFS Algorithm', url: 'https://www.tutorialspoint.com/data_structures_algorithms/breadth_first_traversal.htm' }
      ]
    }
  },
  {
    id: 'insertion-sort',
    name: 'Decrease and Conquer: Insertion Sort',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit II',
    content: {
      introduction: 'Insertion sort is a decrease-and-conquer sorting algorithm that builds the sorted array one element at a time by inserting each element into its correct position.',
      definition: 'Insertion sort is a comparison-based sorting algorithm that works by taking elements from the unsorted portion and inserting them into their correct position in the sorted portion.',
      realWorldExample: 'Like sorting playing cards in your hand by picking up cards one at a time and inserting each into its correct position among the already sorted cards.',
      realWorldUse: 'Used for small datasets, nearly sorted arrays, online algorithms, and as a subroutine in hybrid sorting algorithms like Timsort.',
      importance: 'Demonstrates the decrease-and-conquer paradigm and provides efficient performance for small or nearly sorted datasets.',
      detailedExplanation: `
Insertion sort works by maintaining a sorted subarray at the beginning of the array and repeatedly taking the next element from the unsorted portion and inserting it into its correct position in the sorted portion. The algorithm shifts elements in the sorted portion to make room for the new element, maintaining the sorted order.

The time complexity is O(n²) in the worst case when the array is reverse sorted, O(n) in the best case when the array is already sorted, and O(n²) on average. The space complexity is O(1) as it sorts in-place. Insertion sort is adaptive (performs better on nearly sorted data), stable (maintains relative order of equal elements), and online (can sort data as it arrives). It's particularly efficient for small arrays and is often used as the base case in recursive sorting algorithms. The algorithm's simplicity and good performance on small or nearly sorted datasets make it valuable in practical applications.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=JU767SDMDvA',
        'https://www.youtube.com/watch?v=i-SKeOcBwko'
      ],
      externalLinks: [
        { title: 'Insertion Sort Algorithm', url: 'https://www.geeksforgeeks.org/insertion-sort/' },
        { title: 'Insertion Sort Analysis', url: 'https://www.tutorialspoint.com/data_structures_algorithms/insertion_sort_algorithm.htm' }
      ]
    }
  },
  {
    id: 'topological-sorting',
    name: 'Topological Sorting',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit II',
    content: {
      introduction: 'Topological sorting is a linear ordering of vertices in a directed acyclic graph (DAG) such that for every directed edge, the source vertex comes before the destination vertex.',
      definition: 'Topological sorting is an algorithm that produces a linear ordering of vertices in a DAG where each vertex appears before all vertices it has edges to.',
      realWorldExample: 'Like determining the order of courses to take in college where some courses have prerequisites that must be completed first.',
      realWorldUse: 'Used in task scheduling, dependency resolution, build systems, course planning, and any scenario involving precedence constraints.',
      importance: 'Essential for solving problems with dependencies and precedence relationships, forming the basis for many scheduling algorithms.',
      detailedExplanation: `
Topological sorting can be implemented using two main approaches: DFS-based approach and Kahn's algorithm using in-degree counting. The DFS approach performs a depth-first search and adds vertices to the result in reverse order of their finishing times. Kahn's algorithm repeatedly removes vertices with zero in-degree and updates the in-degrees of their neighbors.

Both algorithms have O(V + E) time complexity where V is vertices and E is edges. The space complexity is O(V) for storing the result and auxiliary data structures. Topological sorting is only possible for DAGs; the presence of cycles makes topological ordering impossible. The algorithm can detect cycles during execution. Multiple valid topological orderings may exist for the same DAG. Applications include compiler dependency analysis, spreadsheet formula evaluation, task scheduling in project management, and determining the order of operations in complex systems with dependencies.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=cIBFEhD77b4',
        'https://www.youtube.com/watch?v=ddTC4Zovtbc'
      ],
      externalLinks: [
        { title: 'Topological Sorting', url: 'https://www.geeksforgeeks.org/topological-sorting/' },
        { title: 'Topological Sort Algorithm', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_topological_sort.htm' }
      ]
    }
  },
  {
    id: 'generating-combinatorial-objects',
    name: 'Algorithms for Generating Combinatorial Objects',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit II',
    content: {
      introduction: 'Algorithms for generating combinatorial objects systematically produce all possible arrangements, selections, or combinations of elements according to specific rules.',
      definition: 'Combinatorial generation algorithms create all possible permutations, combinations, subsets, or other arrangements of elements in a systematic and efficient manner.',
      realWorldExample: 'Like generating all possible seating arrangements for a dinner party or all possible teams that can be formed from a group of players.',
      realWorldUse: 'Used in cryptography, testing, optimization, game development, and any application requiring exhaustive enumeration of possibilities.',
      importance: 'Fundamental for exhaustive search algorithms and provides building blocks for many optimization and enumeration problems.',
      detailedExplanation: `
Combinatorial generation algorithms include methods for generating permutations (all possible orderings of elements), combinations (selections of elements without regard to order), subsets (all possible collections of elements), and other combinatorial structures. These algorithms can be implemented using recursive approaches, iterative methods, or mathematical formulas.

Permutation generation can use recursive backtracking or iterative methods like Heap's algorithm. Combination generation often uses the binary representation approach or recursive selection. Subset generation can enumerate all 2^n subsets using binary counting or recursive inclusion/exclusion. The efficiency of these algorithms varies: generating all permutations takes O(n! × n) time, all combinations of size k takes O(C(n,k) × k) time, and all subsets takes O(2^n × n) time. These algorithms are essential for problems requiring exhaustive search, testing all possibilities, or when the solution space must be completely explored.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=s7AvT7cGdSo',
        'https://www.youtube.com/watch?v=KukNnoN-SoY'
      ],
      externalLinks: [
        { title: 'Generating Permutations', url: 'https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/' },
        { title: 'Combinatorial Algorithms', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_combinatorial_objects.htm' }
      ]
    }
  },
  {
    id: 'decrease-constant-factor',
    name: 'Decrease-by-a-Constant-Factor Algorithms',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit II',
    content: {
      introduction: 'Decrease-by-a-constant-factor algorithms solve problems by reducing the problem size by a constant factor in each step, typically leading to logarithmic time complexity.',
      definition: 'These algorithms reduce the problem size by dividing it by a constant factor (usually 2) in each recursive step, leading to efficient solutions with logarithmic complexity.',
      realWorldExample: 'Like binary search in a phone book where you eliminate half of the remaining pages in each step until you find the desired name.',
      realWorldUse: 'Used in binary search, exponentiation by squaring, finding elements in sorted arrays, and various divide-and-conquer algorithms.',
      importance: 'Provides highly efficient algorithms with logarithmic complexity and demonstrates the power of the decrease-and-conquer paradigm.',
      detailedExplanation: `
Decrease-by-a-constant-factor algorithms work by reducing the problem size by a constant multiplicative factor in each step. The most common factor is 2, leading to algorithms that "halve" the problem size repeatedly. This approach typically results in O(log n) time complexity, making these algorithms very efficient even for large inputs.

Binary search is the classic example, reducing the search space by half in each comparison. Exponentiation by squaring computes a^n by repeatedly squaring and halving the exponent. These algorithms often have the recurrence relation T(n) = T(n/c) + O(1) where c is the constant factor, which solves to O(log n) by the master theorem. The key insight is that by eliminating a constant fraction of the remaining problem in each step, the total number of steps grows logarithmically with the input size. This paradigm is particularly effective for problems with inherent structure that allows systematic elimination of large portions of the solution space.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=P3YID7liBug',
        'https://www.youtube.com/watch?v=MFhxShGxHWc'
      ],
      externalLinks: [
        { title: 'Binary Search Algorithm', url: 'https://www.geeksforgeeks.org/binary-search/' },
        { title: 'Decrease and Conquer', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_decrease_and_conquer.htm' }
      ]
    }
  },
  {
    id: 'merge-sort',
    name: 'Divide and Conquer: Merge Sort',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit II',
    content: {
      introduction: 'Merge sort is a divide-and-conquer sorting algorithm that recursively divides the array into halves, sorts them separately, and merges the sorted halves.',
      definition: 'Merge sort is a stable, comparison-based sorting algorithm that works by dividing the array into two halves, recursively sorting each half, and merging the sorted halves.',
      realWorldExample: 'Like organizing two sorted piles of papers into one sorted pile by repeatedly taking the smaller top paper from either pile.',
      realWorldUse: 'Used in external sorting, stable sorting requirements, linked list sorting, and as a building block in other algorithms.',
      importance: 'Demonstrates divide-and-conquer paradigm and provides guaranteed O(n log n) performance with stability.',
      detailedExplanation: `
Merge sort works by recursively dividing the array into two halves until each subarray contains only one element (which is trivially sorted), then merging these subarrays back together in sorted order. The merge operation compares elements from two sorted arrays and combines them into a single sorted array.

The time complexity is O(n log n) in all cases (best, average, and worst) because the array is always divided into equal halves and the merge operation takes linear time. The space complexity is O(n) due to the temporary arrays needed for merging. Merge sort is stable (maintains relative order of equal elements) and predictable in performance. It's particularly suitable for sorting linked lists (where it can achieve O(1) space complexity) and external sorting of large datasets that don't fit in memory. The algorithm's consistent performance makes it reliable for applications where worst-case guarantees are important.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=4VqmGXwpLqc',
        'https://www.youtube.com/watch?v=TzeBrDU-JaY'
      ],
      externalLinks: [
        { title: 'Merge Sort Algorithm', url: 'https://www.geeksforgeeks.org/merge-sort/' },
        { title: 'Merge Sort Analysis', url: 'https://www.tutorialspoint.com/data_structures_algorithms/merge_sort_algorithm.htm' }
      ]
    }
  },
  {
    id: 'quick-sort',
    name: 'Quick Sort',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit II',
    content: {
      introduction: 'Quick sort is a divide-and-conquer sorting algorithm that selects a pivot element and partitions the array around it, then recursively sorts the partitions.',
      definition: 'Quick sort is an in-place, comparison-based sorting algorithm that works by selecting a pivot element and partitioning the array so that smaller elements come before the pivot and larger elements come after.',
      realWorldExample: 'Like organizing a group of people by height by choosing one person as reference and having everyone shorter stand on the left and everyone taller on the right.',
      realWorldUse: 'Used as the default sorting algorithm in many programming libraries due to its excellent average-case performance and in-place operation.',
      importance: 'One of the most efficient general-purpose sorting algorithms with excellent average-case performance and practical utility.',
      detailedExplanation: `
Quick sort works by selecting a pivot element from the array and partitioning the other elements into two subarrays according to whether they are less than or greater than the pivot. The subarrays are then sorted recursively. The choice of pivot and partitioning strategy significantly affects performance.

The time complexity is O(n log n) on average and O(n²) in the worst case (when the pivot is always the smallest or largest element). The best case is O(n log n) when the pivot divides the array into equal halves. The space complexity is O(log n) for the recursion stack in the average case and O(n) in the worst case. Quick sort is not stable but sorts in-place, making it memory efficient. Various optimizations include choosing better pivots (median-of-three), switching to insertion sort for small subarrays, and using iterative implementations to reduce stack usage. Despite its worst-case quadratic behavior, quick sort is often preferred due to its excellent average-case performance and cache efficiency.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Hoixgm4-P4M',
        'https://www.youtube.com/watch?v=SLauY6PpjW4'
      ],
      externalLinks: [
        { title: 'Quick Sort Algorithm', url: 'https://www.geeksforgeeks.org/quick-sort/' },
        { title: 'Quick Sort Analysis', url: 'https://www.tutorialspoint.com/data_structures_algorithms/quick_sort_algorithm.htm' }
      ]
    }
  },
  {
    id: 'binary-tree-traversals',
    name: 'Binary Tree Traversals and Related Properties',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit II',
    content: {
      introduction: 'Binary tree traversals are systematic methods for visiting all nodes in a binary tree, with different traversal orders providing different perspectives on the tree structure.',
      definition: 'Binary tree traversals are algorithms that visit every node in a binary tree exactly once in a specific order: preorder (root-left-right), inorder (left-root-right), or postorder (left-right-root).',
      realWorldExample: 'Like reading a family tree in different ways: top-down (preorder), left-to-right (inorder), or children-before-parents (postorder).',
      realWorldUse: 'Used in expression evaluation, tree serialization, syntax analysis, file system traversal, and various tree-based algorithms.',
      importance: 'Fundamental for understanding tree structures and forms the basis for many tree algorithms and applications.',
      detailedExplanation: `
Binary tree traversals can be implemented recursively or iteratively. Preorder traversal visits the root first, then left subtree, then right subtree - useful for creating copies of trees or prefix expressions. Inorder traversal visits left subtree, root, then right subtree - produces sorted order for binary search trees. Postorder traversal visits left subtree, right subtree, then root - useful for deleting trees or postfix expressions.

Each traversal has O(n) time complexity as every node is visited exactly once, and O(h) space complexity where h is the tree height (O(log n) for balanced trees, O(n) for skewed trees). Iterative implementations use explicit stacks to simulate recursion. Level-order traversal (breadth-first) visits nodes level by level using a queue. These traversals have important properties: inorder traversal of BST gives sorted sequence, preorder and postorder can uniquely reconstruct a binary tree, and different traversals are suitable for different applications like expression parsing and tree serialization.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=9RHO6jU--GU',
        'https://www.youtube.com/watch?v=WLvU5EQVZqY'
      ],
      externalLinks: [
        { title: 'Tree Traversals', url: 'https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/' },
        { title: 'Binary Tree Traversal', url: 'https://www.tutorialspoint.com/data_structures_algorithms/tree_traversal.htm' }
      ]
    }
  },
  {
    id: 'strassen-matrix-multiplication',
    name: 'Strassen\'s Matrix Multiplication',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit II',
    content: {
      introduction: 'Strassen\'s algorithm is a divide-and-conquer method for matrix multiplication that reduces the number of recursive multiplications from 8 to 7, improving asymptotic complexity.',
      definition: 'Strassen\'s algorithm multiplies two n×n matrices using divide-and-conquer with only 7 recursive multiplications instead of the standard 8, achieving O(n^log₂7) ≈ O(n^2.807) complexity.',
      realWorldExample: 'Like finding a clever way to calculate restaurant bills for large groups by reducing the number of multiplication operations needed.',
      realWorldUse: 'Used in high-performance computing, computer graphics, scientific computing, and applications requiring large matrix operations.',
      importance: 'Demonstrates that seemingly optimal algorithms can be improved and introduced the concept of fast matrix multiplication.',
      detailedExplanation: `
Strassen\'s algorithm works by dividing each n×n matrix into four (n/2)×(n/2) submatrices and computing seven specific products instead of the eight required by standard block matrix multiplication. The algorithm defines seven intermediate products using clever combinations of submatrix additions and subtractions, then combines these products to obtain the final result.

The time complexity is O(n^log₂7) ≈ O(n^2.807), which is asymptotically better than the standard O(n³) algorithm. However, the space complexity is higher due to the need to store intermediate matrices, and the constant factors are large, making it practical only for very large matrices. The algorithm can be applied recursively and combined with standard multiplication for small matrices to optimize performance. While Strassen\'s algorithm was groundbreaking in showing that matrix multiplication could be done faster than O(n³), even faster algorithms have since been discovered, though they are primarily of theoretical interest due to enormous constant factors.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=LOLebQ8nKHA',
        'https://www.youtube.com/watch?v=OSiqpjIAKkI'
      ],
      externalLinks: [
        { title: 'Strassen Matrix Multiplication', url: 'https://www.geeksforgeeks.org/strassens-matrix-multiplication/' },
        { title: 'Fast Matrix Multiplication', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_strassens_matrix_multiplication.htm' }
      ]
    }
  }
];

export default designAnalysisAlgorithmsUnit2;