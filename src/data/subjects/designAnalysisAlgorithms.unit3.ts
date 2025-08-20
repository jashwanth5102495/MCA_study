import { Topic } from '../syllabus';

export const designAnalysisAlgorithmsUnit3: Topic[] = [
  {
    id: 'sorting-by-counting',
    name: 'Space and Time Tradeoffs: Sorting by Counting',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit III',
    content: {
      introduction: 'Counting sort is a non-comparison based sorting algorithm that uses extra space to achieve linear time complexity by counting occurrences of each element.',
      definition: 'Counting sort is a stable sorting algorithm that works by counting the number of occurrences of each distinct element and using this information to place elements in their correct positions.',
      realWorldExample: 'Like organizing exam papers by grade by first counting how many papers got each grade, then placing them in order based on these counts.',
      realWorldUse: 'Used when the range of input values is small and known, such as sorting grades, ages, or other bounded integer values.',
      importance: 'Demonstrates how additional space can be traded for improved time complexity, achieving linear time sorting under specific conditions.',
      detailedExplanation: `
Counting sort works by determining the frequency of each distinct element in the input array, then using this frequency information to determine the correct position of each element in the sorted output. The algorithm creates a counting array where each index represents a possible input value and the value at that index represents the frequency of that element.

The time complexity is O(n + k) where n is the number of elements and k is the range of input values. The space complexity is O(k) for the counting array plus O(n) for the output array. Counting sort is stable, meaning equal elements maintain their relative order. The algorithm is most efficient when k is not significantly larger than n. It serves as a subroutine in radix sort and is particularly useful for sorting integers within a known range. The key insight is that by using additional space proportional to the range of values, we can achieve linear time complexity without any comparisons.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=7zuGmKfUt7s',
        'https://www.youtube.com/watch?v=OKd534EWcdk'
      ],
      externalLinks: [
        { title: 'Counting Sort Algorithm', url: 'https://www.geeksforgeeks.org/counting-sort/' },
        { title: 'Counting Sort Analysis', url: 'https://www.tutorialspoint.com/data_structures_algorithms/counting_sort_algorithm.htm' }
      ]
    }
  },
  {
    id: 'input-enhancement-string-matching',
    name: 'Input Enhancement in String Matching',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit III',
    content: {
      introduction: 'Input enhancement in string matching involves preprocessing the pattern or text to create auxiliary data structures that enable faster searching.',
      definition: 'Input enhancement techniques preprocess the pattern or text to build additional data structures that allow more efficient pattern matching than brute force methods.',
      realWorldExample: 'Like creating an index for a book that allows you to quickly find topics without reading every page, preprocessing helps find patterns without checking every position.',
      realWorldUse: 'Used in text editors, search engines, DNA sequence analysis, and applications requiring frequent pattern searches in large texts.',
      importance: 'Demonstrates how preprocessing can significantly improve algorithm efficiency by trading space for time.',
      detailedExplanation: `
Input enhancement techniques include the Knuth-Morris-Pratt (KMP) algorithm that preprocesses the pattern to create a failure function, avoiding unnecessary character comparisons. The Boyer-Moore algorithm preprocesses the pattern to create bad character and good suffix tables, enabling skipping of characters during matching. The Rabin-Karp algorithm uses hashing to compare pattern and text substrings efficiently.

These algorithms achieve better than O(nm) worst-case complexity through preprocessing. KMP achieves O(n + m) time with O(m) preprocessing and space. Boyer-Moore can achieve sublinear average-case performance. The preprocessing phase creates auxiliary data structures that encode information about the pattern's structure, enabling the main algorithm to skip unnecessary comparisons or positions. This approach is particularly effective when the same pattern is searched multiple times or when the pattern has specific structural properties that can be exploited.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=V5-7GzOfADQ',
        'https://www.youtube.com/watch?v=GTJr8OvyEVQ'
      ],
      externalLinks: [
        { title: 'KMP Algorithm', url: 'https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/' },
        { title: 'String Matching Algorithms', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_string_matching.htm' }
      ]
    }
  },
  {
    id: 'hashing',
    name: 'Hashing',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit III',
    content: {
      introduction: 'Hashing is a technique that uses hash functions to map keys to array indices, enabling average-case constant-time operations for search, insertion, and deletion.',
      definition: 'Hashing is a method of storing and retrieving data using hash functions that map keys to indices in a hash table, providing efficient access to data.',
      realWorldExample: 'Like using a library catalog system where books are organized by call numbers that directly indicate their shelf location, allowing quick retrieval.',
      realWorldUse: 'Used in databases, caches, symbol tables, sets, dictionaries, and any application requiring fast key-based data access.',
      importance: 'Provides one of the most efficient methods for implementing associative data structures with average-case constant-time operations.',
      detailedExplanation: `
Hashing involves two main components: a hash function that maps keys to array indices, and a collision resolution strategy for handling cases where multiple keys map to the same index. Good hash functions distribute keys uniformly across the hash table to minimize collisions. Common hash functions include division method, multiplication method, and universal hashing.

Collision resolution techniques include chaining (storing multiple elements at each index using linked lists) and open addressing (finding alternative indices using linear probing, quadratic probing, or double hashing). The load factor (ratio of elements to table size) affects performance significantly. With a good hash function and appropriate load factor, hash tables provide O(1) average-case time for basic operations, though worst-case time can be O(n). Dynamic resizing maintains performance as the number of elements changes. Hashing demonstrates the space-time tradeoff principle by using additional space to achieve faster access times.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=shs0KM3wKv8',
        'https://www.youtube.com/watch?v=MfhjkfocRR0'
      ],
      externalLinks: [
        { title: 'Hashing Data Structure', url: 'https://www.geeksforgeeks.org/hashing-data-structure/' },
        { title: 'Hash Tables', url: 'https://www.tutorialspoint.com/data_structures_algorithms/hash_data_structure.htm' }
      ]
    }
  },
  {
    id: 'binomial-coefficient',
    name: 'Dynamic Programming: Binomial Coefficient',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit III',
    content: {
      introduction: 'Computing binomial coefficients using dynamic programming demonstrates how to avoid redundant calculations in recursive problems by storing intermediate results.',
      definition: 'The binomial coefficient C(n,k) represents the number of ways to choose k items from n items, computed efficiently using dynamic programming to avoid redundant recursive calls.',
      realWorldExample: 'Like calculating the number of ways to choose team members for different positions, where previous calculations can be reused for efficiency.',
      realWorldUse: 'Used in probability calculations, combinatorics, Pascal\'s triangle generation, and various mathematical and statistical applications.',
      importance: 'Illustrates the fundamental dynamic programming principle of optimal substructure and overlapping subproblems.',
      detailedExplanation: `
The binomial coefficient C(n,k) = n!/(k!(n-k)!) can be computed using the recursive relation C(n,k) = C(n-1,k-1) + C(n-1,k) with base cases C(n,0) = C(n,n) = 1. The naive recursive approach has exponential time complexity due to repeated subproblem calculations.

Dynamic programming solves this by storing computed values in a table, reducing time complexity to O(nk) and space complexity to O(nk) for the full table or O(k) with space optimization. The algorithm builds Pascal\'s triangle row by row, where each entry is the sum of the two entries above it. This approach demonstrates key DP principles: optimal substructure (optimal solution contains optimal solutions to subproblems) and overlapping subproblems (same subproblems are solved multiple times in naive recursion). The technique can be extended to compute entire rows of Pascal\'s triangle efficiently.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=oBt53YbR9Kk',
        'https://www.youtube.com/watch?v=P8Xa2BitN3I'
      ],
      externalLinks: [
        { title: 'Binomial Coefficient DP', url: 'https://www.geeksforgeeks.org/binomial-coefficient-dp-9/' },
        { title: 'Dynamic Programming Examples', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_dynamic_programming.htm' }
      ]
    }
  },
  {
    id: 'principle-optimality',
    name: 'Principle of Optimality',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit III',
    content: {
      introduction: 'The principle of optimality states that an optimal solution to a problem contains optimal solutions to its subproblems, forming the foundation of dynamic programming.',
      definition: 'The principle of optimality is a property that ensures that any optimal solution to a problem can be constructed from optimal solutions to its subproblems.',
      realWorldExample: 'Like finding the shortest path from A to C through B - if the overall path is shortest, then the segments A to B and B to C must also be shortest paths.',
      realWorldUse: 'Used to identify problems suitable for dynamic programming and to design optimal algorithms for optimization problems.',
      importance: 'Fundamental principle that determines when dynamic programming can be applied and guarantees that optimal solutions can be built bottom-up.',
      detailedExplanation: `
The principle of optimality is essential for dynamic programming because it ensures that we can build optimal solutions by combining optimal solutions to smaller subproblems. Not all problems satisfy this principle - those that don\'t are not suitable for standard dynamic programming approaches.

Problems that satisfy the principle of optimality exhibit optimal substructure, meaning that the optimal solution to the problem contains optimal solutions to subproblems. This property allows us to solve the problem by first solving smaller subproblems optimally, then combining these solutions. The principle can be verified by contradiction: if a subproblem within an optimal solution were not optimal, we could replace it with a better solution to improve the overall solution, contradicting the assumption that the original solution was optimal. Examples include shortest path problems, optimal binary search trees, and many scheduling problems. Understanding this principle helps identify when dynamic programming is applicable and guides the design of DP algorithms.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=oBt53YbR9Kk',
        'https://www.youtube.com/watch?v=P8Xa2BitN3I'
      ],
      externalLinks: [
        { title: 'Principle of Optimality', url: 'https://www.geeksforgeeks.org/optimal-substructure-property-in-dynamic-programming-dp-2/' },
        { title: 'Dynamic Programming Principles', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_dynamic_programming.htm' }
      ]
    }
  },
  {
    id: 'optimal-binary-search-trees',
    name: 'Optimal Binary Search Trees',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit III',
    content: {
      introduction: 'Optimal binary search trees minimize the expected search cost by considering the frequency of access for each key when constructing the tree structure.',
      definition: 'An optimal binary search tree is a BST that minimizes the expected cost of searches, considering the probability of accessing each key and the depth at which keys are placed.',
      realWorldExample: 'Like organizing a filing cabinet where frequently accessed files are placed in easily reachable locations to minimize average retrieval time.',
      realWorldUse: 'Used in database indexing, compiler symbol tables, and any application where search frequencies are known and optimization is important.',
      importance: 'Demonstrates how dynamic programming can solve complex optimization problems with overlapping subproblems and optimal substructure.',
      detailedExplanation: `
The optimal BST problem seeks to construct a binary search tree that minimizes the expected search cost, given the probabilities of searching for each key. The cost of accessing a key is proportional to its depth in the tree, so frequently accessed keys should be placed closer to the root.

The dynamic programming solution uses a table to store the minimum cost for all possible subtrees. For each subproblem defined by a range of keys, we try each possible root and recursively solve for the left and right subtrees. The recurrence relation considers the cost of the root plus the costs of optimal left and right subtrees. The time complexity is O(n³) and space complexity is O(n²). The algorithm also constructs the actual tree structure, not just the minimum cost. This problem illustrates how DP can handle complex optimization scenarios where the optimal choice at each step depends on the optimal solutions to multiple subproblems.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=wAy6nDMPYAE',
        'https://www.youtube.com/watch?v=hgA4xxlVvfQ'
      ],
      externalLinks: [
        { title: 'Optimal Binary Search Tree', url: 'https://www.geeksforgeeks.org/optimal-binary-search-tree-dp-24/' },
        { title: 'BST Optimization', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_optimal_binary_search_tree.htm' }
      ]
    }
  },
  {
    id: 'knapsack-problem',
    name: 'Knapsack Problem and Memory Functions',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit III',
    content: {
      introduction: 'The knapsack problem demonstrates dynamic programming optimization, while memory functions show how to implement DP using memoization with recursive approaches.',
      definition: 'The knapsack problem seeks to maximize value while staying within weight constraints, and memory functions implement dynamic programming through memoization of recursive calls.',
      realWorldExample: 'Like packing a suitcase with valuable items while staying under airline weight limits, or a burglar choosing items to maximize value while carrying capacity is limited.',
      realWorldUse: 'Used in resource allocation, budget optimization, cargo loading, portfolio selection, and any scenario involving constrained optimization.',
      importance: 'Classic optimization problem that illustrates both bottom-up and top-down dynamic programming approaches.',
      detailedExplanation: `
The 0/1 knapsack problem involves selecting items with given weights and values to maximize total value while staying within a weight capacity constraint. Each item can be either included or excluded (hence 0/1). The dynamic programming solution uses a table where dp[i][w] represents the maximum value achievable using the first i items with weight limit w.

The recurrence relation is: dp[i][w] = max(dp[i-1][w], dp[i-1][w-weight[i]] + value[i]) if weight[i] ≤ w, otherwise dp[i][w] = dp[i-1][w]. Time complexity is O(nW) where n is the number of items and W is the capacity. Memory functions implement the same logic using memoization, storing results of recursive calls to avoid recomputation. This top-down approach is often more intuitive and can be more space-efficient when not all subproblems need to be solved. The technique demonstrates how recursive solutions can be optimized through memoization.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8LusJS5-AGo',
        'https://www.youtube.com/watch?v=nLmhmB6NzcM'
      ],
      externalLinks: [
        { title: '0-1 Knapsack Problem', url: 'https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/' },
        { title: 'Knapsack DP', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_knapsack_problem.htm' }
      ]
    }
  },
  {
    id: 'warshall-floyd-algorithms',
    name: 'Warshall\'s and Floyd\'s Algorithms',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit III',
    content: {
      introduction: 'Warshall\'s algorithm finds transitive closure of a graph, while Floyd\'s algorithm finds shortest paths between all pairs of vertices using dynamic programming.',
      definition: 'Warshall\'s algorithm determines reachability between all pairs of vertices, while Floyd-Warshall algorithm finds shortest distances between all pairs of vertices in a weighted graph.',
      realWorldExample: 'Like determining which cities are reachable from each other (Warshall) or finding the shortest travel distances between all pairs of cities (Floyd).',
      realWorldUse: 'Used in network routing, graph analysis, social network connectivity, and any application requiring all-pairs shortest paths or reachability information.',
      importance: 'Demonstrates how dynamic programming can solve graph problems efficiently and provides fundamental algorithms for graph analysis.',
      detailedExplanation: `
Warshall\'s algorithm computes the transitive closure of a directed graph, determining whether there is a path between every pair of vertices. It uses dynamic programming with the insight that a path from i to j either goes through vertex k or it doesn\'t. The algorithm iteratively considers each vertex as an intermediate vertex and updates the reachability matrix.

Floyd-Warshall algorithm extends this concept to find shortest paths between all pairs of vertices in a weighted graph. It considers whether going through an intermediate vertex k provides a shorter path from i to j. The recurrence relation is: dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]). Both algorithms have O(n³) time complexity and O(n²) space complexity. They can handle negative edge weights (Floyd-Warshall) but not negative cycles. These algorithms demonstrate how the same DP principle can solve different but related graph problems efficiently.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=4OQeCuLYj-4',
        'https://www.youtube.com/watch?v=oNI0rf2P9gE'
      ],
      externalLinks: [
        { title: 'Floyd Warshall Algorithm', url: 'https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/' },
        { title: 'All Pairs Shortest Path', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_floyd_warshall.htm' }
      ]
    }
  },
  {
    id: 'prim-algorithm',
    name: 'Greedy Technique: Prim\'s Algorithm',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit III',
    content: {
      introduction: 'Prim\'s algorithm finds the minimum spanning tree of a weighted graph by greedily selecting the minimum weight edge that connects the growing tree to a new vertex.',
      definition: 'Prim\'s algorithm is a greedy algorithm that builds a minimum spanning tree by starting with an arbitrary vertex and repeatedly adding the minimum weight edge that connects the tree to a new vertex.',
      realWorldExample: 'Like connecting cities with the minimum total cost of roads, where you start from one city and always choose the cheapest connection to a new city.',
      realWorldUse: 'Used in network design, circuit design, clustering algorithms, and any application requiring minimum cost connectivity.',
      importance: 'Demonstrates the greedy approach for optimization problems and provides an efficient solution for the minimum spanning tree problem.',
      detailedExplanation: `
Prim\'s algorithm maintains a growing tree of vertices and repeatedly selects the minimum weight edge that connects a vertex in the tree to a vertex outside the tree. The algorithm starts with an arbitrary vertex and maintains a priority queue (or similar structure) to efficiently find the minimum weight edge at each step.

The time complexity depends on the implementation: O(V²) with simple arrays, O(E log V) with binary heaps, or O(E + V log V) with Fibonacci heaps, where V is vertices and E is edges. The space complexity is O(V). The algorithm works because of the cut property: the minimum weight edge crossing any cut is part of some MST. At each step, Prim\'s algorithm makes a locally optimal choice (minimum weight edge) that leads to a globally optimal solution. This demonstrates the greedy choice property where local optimization leads to global optimization, which is not true for all problems but holds for MST.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=cplfcGZmX7I',
        'https://www.youtube.com/watch?v=jsmMtJpPnhU'
      ],
      externalLinks: [
        { title: 'Prim\'s Algorithm', url: 'https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/' },
        { title: 'Minimum Spanning Tree', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_prims_algorithm.htm' }
      ]
    }
  },
  {
    id: 'kruskal-algorithm',
    name: 'Kruskal\'s Algorithm',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit III',
    content: {
      introduction: 'Kruskal\'s algorithm finds the minimum spanning tree by sorting all edges and greedily selecting edges in order of increasing weight while avoiding cycles.',
      definition: 'Kruskal\'s algorithm is a greedy algorithm that builds a minimum spanning tree by sorting edges by weight and adding edges to the tree if they don\'t create a cycle.',
      realWorldExample: 'Like building a road network by considering all possible road connections sorted by cost and adding roads that connect new areas without creating redundant loops.',
      realWorldUse: 'Used in network design, clustering, image segmentation, and applications where edge-based processing is preferred over vertex-based processing.',
      importance: 'Provides an alternative greedy approach to MST and demonstrates the use of union-find data structure for cycle detection.',
      detailedExplanation: `
Kruskal\'s algorithm works by sorting all edges in non-decreasing order of weight and then processing edges one by one. For each edge, the algorithm checks if adding it would create a cycle using a union-find (disjoint set) data structure. If no cycle is created, the edge is added to the MST.

The time complexity is O(E log E) for sorting edges, plus O(E α(V)) for union-find operations, where α is the inverse Ackermann function (practically constant). The overall complexity is O(E log E) or O(E log V) since E ≤ V². The space complexity is O(V) for the union-find structure. Kruskal\'s algorithm is particularly efficient for sparse graphs and when edges are already sorted. The algorithm demonstrates the greedy approach where each locally optimal choice (minimum weight edge that doesn\'t create a cycle) contributes to the globally optimal solution. The union-find data structure efficiently maintains connected components and detects cycles.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=71UQH7Pr9kU',
        'https://www.youtube.com/watch?v=5xosHRdxqHA'
      ],
      externalLinks: [
        { title: 'Kruskal\'s Algorithm', url: 'https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/' },
        { title: 'MST Algorithms', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_kruskals_algorithm.htm' }
      ]
    }
  },
  {
    id: 'dijkstra-algorithm',
    name: 'Dijkstra\'s Algorithm',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit III',
    content: {
      introduction: 'Dijkstra\'s algorithm finds the shortest paths from a source vertex to all other vertices in a weighted graph with non-negative edge weights using a greedy approach.',
      definition: 'Dijkstra\'s algorithm is a greedy algorithm that computes shortest paths from a source vertex by repeatedly selecting the unvisited vertex with minimum distance and updating distances to its neighbors.',
      realWorldExample: 'Like GPS navigation finding the shortest route from your location to all possible destinations, always choosing the closest unvisited location next.',
      realWorldUse: 'Used in GPS navigation, network routing protocols, social network analysis, and any application requiring shortest path computation.',
      importance: 'Fundamental shortest path algorithm that demonstrates greedy optimization and serves as the basis for many routing algorithms.',
      detailedExplanation: `
Dijkstra\'s algorithm maintains a set of vertices whose shortest distances from the source are known and repeatedly selects the unvisited vertex with minimum tentative distance. It then updates the distances to all neighbors of this vertex if a shorter path is found through the current vertex.

The algorithm uses a priority queue to efficiently select the minimum distance vertex. Time complexity is O(V²) with simple implementation, O((V + E) log V) with binary heap, or O(E + V log V) with Fibonacci heap. Space complexity is O(V) for distance and visited arrays. The algorithm works because of the optimal substructure property: if the shortest path from source to v goes through u, then the path from source to u must also be shortest. Dijkstra\'s algorithm makes greedy choices that are globally optimal, but this property holds only for non-negative weights. The algorithm can be modified to reconstruct actual paths, not just distances.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=GazC3A4OQTE',
        'https://www.youtube.com/watch?v=pVfj6mxhdMw'
      ],
      externalLinks: [
        { title: 'Dijkstra\'s Algorithm', url: 'https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/' },
        { title: 'Shortest Path Algorithms', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_dijkstras_algorithm.htm' }
      ]
    }
  },
  {
    id: 'huffman-trees',
    name: 'Huffman Trees',
    semester: 2,
    subject: 'The Design and Analysis of Algorithms',
    unit: 'Unit III',
    content: {
      introduction: 'Huffman coding creates optimal prefix-free binary codes for data compression by building a binary tree based on character frequencies using a greedy approach.',
      definition: 'Huffman coding is a greedy algorithm that constructs optimal prefix-free binary codes by building a binary tree where frequently occurring characters have shorter codes.',
      realWorldExample: 'Like creating a telegraph code where common letters like \'E\' get short codes and rare letters like \'Z\' get longer codes to minimize total message length.',
      realWorldUse: 'Used in file compression (ZIP, GZIP), image compression (JPEG), and any application requiring efficient data encoding.',
      importance: 'Demonstrates greedy optimization for compression and provides the foundation for many modern compression algorithms.',
      detailedExplanation: `
Huffman coding works by building a binary tree bottom-up using a greedy approach. The algorithm starts with leaf nodes for each character, each with its frequency. It repeatedly combines the two nodes with smallest frequencies into a new internal node with frequency equal to the sum of its children\'s frequencies. This process continues until only one node (the root) remains.

The resulting tree assigns shorter binary codes to more frequent characters and longer codes to less frequent characters. The codes are prefix-free, meaning no code is a prefix of another, allowing unambiguous decoding. The time complexity is O(n log n) for building the tree using a priority queue, where n is the number of distinct characters. The space complexity is O(n) for the tree and priority queue. Huffman coding produces optimal prefix-free codes, meaning no other prefix-free coding scheme can achieve better compression for the given frequency distribution. The greedy choice of always combining the two least frequent nodes leads to the globally optimal solution.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=co4_ahEDCho',
        'https://www.youtube.com/watch?v=JsTptu56GM8'
      ],
      externalLinks: [
        { title: 'Huffman Coding', url: 'https://www.geeksforgeeks.org/huffman-coding-greedy-algo-3/' },
        { title: 'Data Compression', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_huffman_coding.htm' }
      ]
    }
  }
];

export default designAnalysisAlgorithmsUnit3;