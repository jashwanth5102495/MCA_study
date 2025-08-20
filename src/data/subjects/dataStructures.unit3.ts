import { Topic } from '../syllabus';

export const dataStructuresUnit3: Topic[] = [
  // Binary Trees
  {
    id: 'binary-trees-definitions',
    name: 'Binary Trees: Definitions',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit III',
    content: {
      introduction: 'Binary trees are fundamental hierarchical data structures that form the backbone of many advanced algorithms and data structures in computer science.',
      definition: 'A binary tree is a hierarchical data structure where each node has at most two children, commonly referred to as the left child and right child. The topmost node is called the root, and nodes with no children are called leaves.',
      realWorldExample: 'Family trees, organizational hierarchies, file system directories, decision trees in AI, and expression trees in compilers all use binary tree structures.',
      realWorldUse: 'Used in database indexing (B-trees), heap data structures for priority queues, syntax trees in compilers, decision trees in machine learning, and file compression algorithms.',
      importance: 'Binary trees provide efficient searching, insertion, and deletion operations with O(log n) time complexity in balanced trees, making them essential for database systems and search algorithms.',
      detailedExplanation: `
**Key Properties:**
- **Root**: The topmost node with no parent
- **Leaf**: A node with no children  
- **Height**: The longest path from root to any leaf
- **Depth**: Distance from root to a specific node
- **Complete Binary Tree**: All levels filled except possibly the last level
- **Full Binary Tree**: Every node has either 0 or 2 children
- **Perfect Binary Tree**: All internal nodes have 2 children, all leaves at same level

**Types of Binary Trees:**
1. **Complete Binary Tree**: Filled from left to right, last level may be incomplete
2. **Full Binary Tree**: Every node has 0 or 2 children
3. **Perfect Binary Tree**: All leaves at same level, completely filled
4. **Balanced Binary Tree**: Height difference between left and right subtrees ≤ 1
5. **Degenerate Tree**: Each parent has only one child (essentially a linked list)

**Mathematical Properties:**
- Maximum nodes at level i: 2^i
- Maximum nodes in tree of height h: 2^(h+1) - 1
- Minimum height for n nodes: ⌊log₂(n)⌋
- In a complete binary tree with n nodes: height = ⌊log₂(n)⌋

**Implementation Structure:**
\`\`\`typescript
interface TreeNode<T> {
  data: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}
\`\`\`
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=H5JubkIy_p8',
        'https://www.youtube.com/watch?v=qH6yxkw0u78'
      ],
      externalLinks: [
        { title: 'Binary Tree Data Structure', url: 'https://www.geeksforgeeks.org/binary-tree-data-structure/' },
        { title: 'Tree Data Structure Tutorial', url: 'https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm' }
      ]
    }
  },
  {
    id: 'tree-search',
    name: 'Tree Search',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit III',
    content: {
      introduction: 'Tree search algorithms are fundamental techniques for finding specific values within tree data structures, forming the basis for efficient data retrieval.',
      definition: 'Tree search is the process of traversing a tree structure to locate a specific node or value. The search strategy depends on the tree type and can be optimized based on tree properties.',
      realWorldExample: 'Database queries searching for records, file system searches for specific files, AI game trees for optimal moves, and autocomplete suggestions in search engines.',
      realWorldUse: 'Used in database indexing systems, file system navigation, decision support systems, game AI algorithms, and search engine optimization.',
      importance: 'Efficient tree search algorithms enable fast data retrieval with O(log n) complexity in balanced trees, making large-scale data management feasible.',
      detailedExplanation: `
**Search Types:**

**1. Linear Search in Binary Tree:**
- Visits every node until target is found
- Time Complexity: O(n)
- Space Complexity: O(h) where h is height

**2. Binary Search Tree (BST) Search:**
- Utilizes BST property: left < root < right
- Time Complexity: O(log n) average, O(n) worst case
- Space Complexity: O(log n) for recursion

**3. Breadth-First Search (BFS):**
- Level-by-level traversal using queue
- Finds shortest path in unweighted trees
- Time Complexity: O(n), Space: O(w) where w is max width

**4. Depth-First Search (DFS):**
- Goes deep before exploring siblings
- Uses stack (recursion or explicit)
- Time Complexity: O(n), Space: O(h)

**BST Search Algorithm:**
\`\`\`typescript
function searchBST(root: TreeNode | null, target: number): boolean {
  if (!root) return false;
  if (root.data === target) return true;
  
  return target < root.data 
    ? searchBST(root.left, target)
    : searchBST(root.right, target);
}
\`\`\`

**Optimization Techniques:**
- **Balanced Trees**: Maintain O(log n) height
- **Caching**: Store frequently accessed nodes
- **Pruning**: Skip unnecessary subtrees
- **Iterative Approach**: Avoid recursion overhead
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=5cU1ILGy6dM',
        'https://www.youtube.com/watch?v=wcIRPqTR3Kc'
      ],
      externalLinks: [
        { title: 'Tree Traversals - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/' },
        { title: 'Tree Traversal - Programiz', url: 'https://www.programiz.com/dsa/tree-traversal' }
      ]
    }
  },
  {
    id: 'traversal-binary-tree',
    name: 'Traversal of Binary Tree',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit III',
    content: {
      introduction: 'Tree traversal is the systematic process of visiting each node in a tree data structure exactly once, following specific patterns that determine the order of node visits.',
      definition: 'Binary tree traversal refers to the process of visiting all nodes in a binary tree in a systematic order. The three main traversal methods are Inorder, Preorder, and Postorder, each serving different purposes.',
      realWorldExample: 'File system directory listing, expression tree evaluation in calculators, syntax tree processing in compilers, and hierarchical data processing in organizational charts.',
      realWorldUse: 'Used in compiler design for syntax analysis, database systems for query processing, file system operations, XML/JSON parsing, and decision tree algorithms in AI.',
      importance: 'Tree traversal algorithms are fundamental for processing hierarchical data, enabling operations like searching, copying, serialization, and mathematical expression evaluation.',
      detailedExplanation: `
**Three Main Traversal Methods:**

**1. Inorder Traversal (Left → Root → Right):**
- Visit left subtree, then root, then right subtree
- For BST: produces sorted sequence
- Time Complexity: O(n), Space: O(h)

\`\`\`typescript
function inorder(root: TreeNode | null): number[] {
  const result: number[] = [];
  if (root) {
    result.push(...inorder(root.left));
    result.push(root.data);
    result.push(...inorder(root.right));
  }
  return result;
}
\`\`\`

**2. Preorder Traversal (Root → Left → Right):**
- Visit root first, then left subtree, then right subtree
- Used for copying/cloning trees
- Prefix expression evaluation

\`\`\`typescript
function preorder(root: TreeNode | null): number[] {
  const result: number[] = [];
  if (root) {
    result.push(root.data);
    result.push(...preorder(root.left));
    result.push(...preorder(root.right));
  }
  return result;
}
\`\`\`

**3. Postorder Traversal (Left → Right → Root):**
- Visit left subtree, then right subtree, then root
- Used for deleting trees, calculating directory sizes
- Postfix expression evaluation

\`\`\`typescript
function postorder(root: TreeNode | null): number[] {
  const result: number[] = [];
  if (root) {
    result.push(...postorder(root.left));
    result.push(...postorder(root.right));
    result.push(root.data);
  }
  return result;
}
\`\`\`

**4. Level Order Traversal (Breadth-First):**
- Visit nodes level by level from left to right
- Uses queue data structure
- Useful for finding shortest paths

\`\`\`typescript
function levelOrder(root: TreeNode | null): number[] {
  if (!root) return [];
  const result: number[] = [];
  const queue: TreeNode[] = [root];
  
  while (queue.length > 0) {
    const node = queue.shift()!;
    result.push(node.data);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
}
\`\`\`

**Applications:**
- **Inorder**: Binary search tree sorting, range queries
- **Preorder**: Tree serialization, prefix expressions
- **Postorder**: Tree deletion, postfix expressions, directory size calculation
- **Level Order**: Tree printing, shortest path finding
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=9RHO6jU--GU',
        'https://www.youtube.com/watch?v=WLvU5EQVZqY'
      ],
      externalLinks: [
        { title: 'Tree Traversals - Inorder, Preorder and Postorder', url: 'https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/' },
        { title: 'Tree Traversal - Programiz', url: 'https://www.programiz.com/dsa/tree-traversal' }
      ]
    }
  },
  {
    id: 'tree-sort',
    name: 'Tree Sort',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit III',
    content: {
      introduction: 'Tree sort is an efficient sorting algorithm that uses a binary search tree to sort elements, combining the power of tree data structures with sorting operations.',
      definition: 'Tree sort is a sorting algorithm that works by inserting all elements into a binary search tree and then performing an inorder traversal to retrieve elements in sorted order.',
      realWorldExample: 'Database record sorting, organizing student grades, sorting file names in directories, and maintaining sorted lists in real-time applications like leaderboards.',
      realWorldUse: 'Used in database management systems for sorting query results, file system organization, maintaining sorted collections in applications, and as a foundation for more complex sorting algorithms.',
      importance: 'Tree sort provides O(n log n) average-case performance with the advantage of being able to handle dynamic insertions and deletions while maintaining sorted order.',
      detailedExplanation: `
**Algorithm Steps:**
1. Create an empty binary search tree
2. Insert all elements from the array into the BST
3. Perform inorder traversal to get sorted sequence
4. Copy the sorted elements back to the original array

**Time Complexity:**
- **Best/Average Case**: O(n log n) - when tree is balanced
- **Worst Case**: O(n²) - when tree becomes skewed (sorted input)
- **Space Complexity**: O(n) for the tree structure

**Implementation:**
\`\`\`typescript
class TreeSortBST {
  root: TreeNode | null = null;

  insert(data: number): void {
    this.root = this.insertHelper(this.root, data);
  }

  private insertHelper(node: TreeNode | null, data: number): TreeNode {
    if (!node) {
      return { data, left: null, right: null };
    }
    
    if (data <= node.data) {
      node.left = this.insertHelper(node.left, data);
    } else {
      node.right = this.insertHelper(node.right, data);
    }
    return node;
  }

  inorderTraversal(): number[] {
    const result: number[] = [];
    this.inorderHelper(this.root, result);
    return result;
  }

  private inorderHelper(node: TreeNode | null, result: number[]): void {
    if (node) {
      this.inorderHelper(node.left, result);
      result.push(node.data);
      this.inorderHelper(node.right, result);
    }
  }
}

function treeSort(arr: number[]): number[] {
  const bst = new TreeSortBST();
  
  // Insert all elements
  for (const num of arr) {
    bst.insert(num);
  }
  
  // Return sorted array via inorder traversal
  return bst.inorderTraversal();
}
\`\`\`

**Advantages:**
- Natural handling of duplicate elements
- Can be modified for stable sorting
- Efficient for nearly sorted data
- Supports dynamic operations during sorting

**Disadvantages:**
- Worst-case O(n²) performance
- Extra space overhead for tree structure
- Not suitable for large datasets due to potential skewing

**Optimization:**
- Use self-balancing trees (AVL, Red-Black) to guarantee O(n log n)
- Implement iterative inorder traversal to reduce space complexity
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=n2MLjGeK7qA',
        'https://www.youtube.com/watch?v=YlgPi75hIBc'
      ],
      externalLinks: [
        { title: 'Tree Sort Algorithm', url: 'https://www.geeksforgeeks.org/tree-sort/' },
        { title: 'Tree Sort - Programiz', url: 'https://www.programiz.com/dsa/tree-sort' }
      ]
    }
  },
  {
    id: 'building-bst',
    name: 'Building a Binary Search Tree',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit III',
    content: {
      introduction: 'Building a Binary Search Tree involves creating a hierarchical structure that maintains the BST property, enabling efficient searching, insertion, and deletion operations.',
      definition: 'A Binary Search Tree (BST) is a binary tree where for every node, all values in the left subtree are less than the node\'s value, and all values in the right subtree are greater than the node\'s value.',
      realWorldExample: 'Database indexing systems, autocomplete features in search engines, maintaining sorted data in real-time applications, and organizing hierarchical data like employee records.',
      realWorldUse: 'Used in database management systems for indexing, compiler symbol tables, expression parsing, priority queue implementations, and maintaining sorted collections with dynamic updates.',
      importance: 'BSTs provide O(log n) average-case performance for search, insert, and delete operations, making them fundamental for efficient data management in computer systems.',
      detailedExplanation: `
**BST Property:**
For any node N with value V:
- All nodes in left subtree have values < V
- All nodes in right subtree have values > V
- Both left and right subtrees are also BSTs

**Building Operations:**

**1. Insertion Algorithm:**
\`\`\`typescript
class BSTNode {
  data: number;
  left: BSTNode | null = null;
  right: BSTNode | null = null;
  
  constructor(data: number) {
    this.data = data;
  }
}

class BinarySearchTree {
  root: BSTNode | null = null;

  insert(data: number): void {
    this.root = this.insertHelper(this.root, data);
  }

  private insertHelper(node: BSTNode | null, data: number): BSTNode {
    // Base case: create new node
    if (!node) {
      return new BSTNode(data);
    }

    // Recursive insertion
    if (data < node.data) {
      node.left = this.insertHelper(node.left, data);
    } else if (data > node.data) {
      node.right = this.insertHelper(node.right, data);
    }
    // Ignore duplicates
    
    return node;
  }
}
\`\`\`

**2. Search Operation:**
\`\`\`typescript
search(target: number): boolean {
  return this.searchHelper(this.root, target);
}

private searchHelper(node: BSTNode | null, target: number): boolean {
  if (!node) return false;
  if (node.data === target) return true;
  
  return target < node.data 
    ? this.searchHelper(node.left, target)
    : this.searchHelper(node.right, target);
}
\`\`\`

**3. Deletion Operation:**
\`\`\`typescript
delete(data: number): void {
  this.root = this.deleteHelper(this.root, data);
}

private deleteHelper(node: BSTNode | null, data: number): BSTNode | null {
  if (!node) return null;

  if (data < node.data) {
    node.left = this.deleteHelper(node.left, data);
  } else if (data > node.data) {
    node.right = this.deleteHelper(node.right, data);
  } else {
    // Node to delete found
    if (!node.left) return node.right;
    if (!node.right) return node.left;
    
    // Node has two children: find inorder successor
    const minRight = this.findMin(node.right);
    node.data = minRight.data;
    node.right = this.deleteHelper(node.right, minRight.data);
  }
  return node;
}

private findMin(node: BSTNode): BSTNode {
  while (node.left) {
    node = node.left;
  }
  return node;
}
\`\`\`

**Construction Strategies:**
1. **Sequential Insertion**: Insert elements one by one
2. **Balanced Construction**: Build from sorted array using divide-and-conquer
3. **Random Insertion**: Insert in random order for better balance

**Time Complexities:**
- **Search**: O(log n) average, O(n) worst case
- **Insert**: O(log n) average, O(n) worst case  
- **Delete**: O(log n) average, O(n) worst case
- **Space**: O(n) for storage, O(log n) for recursion stack

**Balanced BST Construction:**
\`\`\`typescript
function buildBalancedBST(sortedArray: number[]): BSTNode | null {
  if (sortedArray.length === 0) return null;
  
  const mid = Math.floor(sortedArray.length / 2);
  const root = new BSTNode(sortedArray[mid]);
  
  root.left = buildBalancedBST(sortedArray.slice(0, mid));
  root.right = buildBalancedBST(sortedArray.slice(mid + 1));
  
  return root;
}
\`\`\`
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=wcIRPqTR3Kc',
        'https://www.youtube.com/watch?v=YlgPi75hIBc'
      ],
      externalLinks: [
        { title: 'Binary Search Tree Data Structure', url: 'https://www.geeksforgeeks.org/binary-search-tree-data-structure/' },
        { title: 'Binary Search Tree - Programiz', url: 'https://www.programiz.com/dsa/binary-search-tree' }
      ]
    }
  },
  {
    id: 'avl-trees',
    name: 'AVL Trees',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit III',
    content: {
      introduction: 'AVL Trees are self-balancing binary search trees that automatically maintain their height balance, ensuring optimal performance for search, insertion, and deletion operations.',
      definition: 'An AVL Tree is a height-balanced binary search tree where the heights of the left and right subtrees of any node differ by at most 1. Named after Adelson-Velsky and Landis.',
      realWorldExample: 'Database indexing systems, memory management in operating systems, maintaining balanced data in real-time applications, and implementing efficient priority queues.',
      realWorldUse: 'Used in database management systems for consistent query performance, compiler symbol tables, network routing algorithms, and applications requiring guaranteed logarithmic time complexity.',
      importance: 'AVL Trees guarantee O(log n) time complexity for all operations by maintaining balance, preventing the worst-case O(n) performance of unbalanced BSTs.',
      detailedExplanation: `
**Balance Factor:**
Balance Factor = Height(Left Subtree) - Height(Right Subtree)
Valid values: -1, 0, 1

**Rotations for Balancing:**

**1. Right Rotation (LL Case):**
\`\`\`
    y                x
   / \\              / \\
  x   T3    -->     T1  y
 / \\                  / \\
T1  T2               T2  T3
\`\`\`

**2. Left Rotation (RR Case):**
\`\`\`
  x                  y
 / \\                / \\
T1  y      -->     x   T3
   / \\            / \\
  T2  T3         T1  T2
\`\`\`

**3. Left-Right Rotation (LR Case):**
\`\`\`
    z              z               y
   / \\            / \\             / \\
  x   T4   -->   y   T4   -->    x   z
 / \\            / \\             / \\ / \\
T1  y          x   T3          T1 T2 T3 T4
   / \\        / \\
  T2  T3     T1  T2
\`\`\`

**4. Right-Left Rotation (RL Case):**
\`\`\`
  z                z                 y
 / \\              / \\               / \\
T1  x     -->    T1  y     -->     z   x
   / \\              / \\           / \\ / \\
  y   T4           T2  x         T1 T2 T3 T4
 / \\                  / \\
T2  T3               T3  T4
\`\`\`

**Implementation:**
\`\`\`typescript
interface AVLNode {
  data: number;
  left: AVLNode | null;
  right: AVLNode | null;
  height: number;
}

class AVLTree {
  root: AVLNode | null = null;

  private getHeight(node: AVLNode | null): number {
    return node ? node.height : 0;
  }

  private getBalance(node: AVLNode | null): number {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }

  private updateHeight(node: AVLNode): void {
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  private rotateRight(y: AVLNode): AVLNode {
    const x = y.left!;
    const T2 = x.right;

    x.right = y;
    y.left = T2;

    this.updateHeight(y);
    this.updateHeight(x);

    return x;
  }

  private rotateLeft(x: AVLNode): AVLNode {
    const y = x.right!;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    this.updateHeight(x);
    this.updateHeight(y);

    return y;
  }

  insert(data: number): void {
    this.root = this.insertHelper(this.root, data);
  }

  private insertHelper(node: AVLNode | null, data: number): AVLNode {
    // Standard BST insertion
    if (!node) {
      return { data, left: null, right: null, height: 1 };
    }

    if (data < node.data) {
      node.left = this.insertHelper(node.left, data);
    } else if (data > node.data) {
      node.right = this.insertHelper(node.right, data);
    } else {
      return node; // Duplicates not allowed
    }

    // Update height
    this.updateHeight(node);

    // Get balance factor
    const balance = this.getBalance(node);

    // Left Left Case
    if (balance > 1 && data < node.left!.data) {
      return this.rotateRight(node);
    }

    // Right Right Case
    if (balance < -1 && data > node.right!.data) {
      return this.rotateLeft(node);
    }

    // Left Right Case
    if (balance > 1 && data > node.left!.data) {
      node.left = this.rotateLeft(node.left!);
      return this.rotateRight(node);
    }

    // Right Left Case
    if (balance < -1 && data < node.right!.data) {
      node.right = this.rotateRight(node.right!);
      return this.rotateLeft(node);
    }

    return node;
  }
}
\`\`\`

**Time Complexities:**
- **Search**: O(log n) guaranteed
- **Insert**: O(log n) guaranteed
- **Delete**: O(log n) guaranteed
- **Space**: O(n) for storage

**Advantages:**
- Guaranteed O(log n) performance
- Self-balancing property
- Suitable for frequent insertions/deletions

**Disadvantages:**
- More complex implementation
- Extra storage for height information
- More rotations compared to Red-Black trees
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=jDM6_TnYIqE',
        'https://www.youtube.com/watch?v=FNeL18KsWPc'
      ],
      externalLinks: [
        { title: 'AVL Tree Set 1 (Insertion)', url: 'https://www.geeksforgeeks.org/avl-tree-set-1-insertion/' },
        { title: 'AVL Tree - Programiz', url: 'https://www.programiz.com/dsa/avl-tree' }
      ]
    }
  },
  {
    id: 'contiguous-representation-binary-trees',
    name: 'Contiguous Representation of Binary Trees',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit III',
    content: {
      introduction: 'Contiguous representation stores binary trees in arrays using mathematical relationships between parent and child indices, providing memory-efficient storage and fast access.',
      definition: 'Contiguous representation of binary trees uses arrays to store tree nodes where the relationship between parent and child nodes is maintained through index calculations, eliminating the need for explicit pointers.',
      realWorldExample: 'Heap data structures in priority queues, complete binary trees in sorting algorithms, memory-efficient tree storage in embedded systems, and binary heap implementations in operating systems.',
      realWorldUse: 'Used in heap sort algorithms, priority queue implementations, memory-constrained environments, cache-friendly tree operations, and systems requiring fast parent-child navigation.',
      importance: 'Provides O(1) access to parent and children, eliminates pointer overhead, improves cache locality, and enables efficient implementation of complete binary trees and heaps.',
      detailedExplanation: `
**Array Indexing Formula:**
For a node at index i (0-based indexing):
- **Left Child**: 2*i + 1
- **Right Child**: 2*i + 2  
- **Parent**: (i-1)/2 (integer division)

For 1-based indexing:
- **Left Child**: 2*i
- **Right Child**: 2*i + 1
- **Parent**: i/2 (integer division)

**Implementation (0-based indexing):**
\`\`\`typescript
class ArrayBinaryTree<T> {
  private tree: (T | null)[];
  private size: number;

  constructor(capacity: number) {
    this.tree = new Array(capacity).fill(null);
    this.size = 0;
  }

  // Get parent index
  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  // Get left child index
  private getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  // Get right child index
  private getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  // Insert element (for complete binary tree)
  insert(data: T): void {
    if (this.size >= this.tree.length) {
      throw new Error("Tree is full");
    }
    this.tree[this.size] = data;
    this.size++;
  }

  // Get element at index
  get(index: number): T | null {
    if (index >= this.size) return null;
    return this.tree[index];
  }

  // Get parent of node at index
  getParent(index: number): T | null {
    if (index === 0) return null; // Root has no parent
    const parentIndex = this.getParentIndex(index);
    return this.tree[parentIndex];
  }

  // Get left child of node at index
  getLeftChild(index: number): T | null {
    const leftIndex = this.getLeftChildIndex(index);
    if (leftIndex >= this.size) return null;
    return this.tree[leftIndex];
  }

  // Get right child of node at index
  getRightChild(index: number): T | null {
    const rightIndex = this.getRightChildIndex(index);
    if (rightIndex >= this.size) return null;
    return this.tree[rightIndex];
  }

  // Level order traversal
  levelOrder(): T[] {
    const result: T[] = [];
    for (let i = 0; i < this.size; i++) {
      if (this.tree[i] !== null) {
        result.push(this.tree[i]!);
      }
    }
    return result;
  }

  // Inorder traversal
  inorder(): T[] {
    const result: T[] = [];
    this.inorderHelper(0, result);
    return result;
  }

  private inorderHelper(index: number, result: T[]): void {
    if (index >= this.size || this.tree[index] === null) return;

    // Left
    this.inorderHelper(this.getLeftChildIndex(index), result);
    // Root
    result.push(this.tree[index]!);
    // Right
    this.inorderHelper(this.getRightChildIndex(index), result);
  }
}
\`\`\`

**Advantages:**
- **Memory Efficient**: No pointer overhead
- **Cache Friendly**: Sequential memory access
- **Fast Navigation**: O(1) parent-child access
- **Simple Implementation**: No dynamic memory allocation
- **Complete Trees**: Perfect for heaps and complete binary trees

**Disadvantages:**
- **Space Wastage**: Sparse trees waste memory
- **Fixed Size**: Array size must be predetermined
- **Insertion Complexity**: Difficult for arbitrary tree structures
- **Memory Requirements**: May need 2^h - 1 space for height h

**Best Use Cases:**
1. **Complete Binary Trees**: All levels filled except possibly last
2. **Heaps**: Min-heap and max-heap implementations
3. **Memory-Constrained Systems**: Embedded systems, mobile apps
4. **Cache-Sensitive Applications**: High-performance computing

**Example - Building a Heap:**
\`\`\`typescript
class MinHeap {
  private heap: number[] = [];

  insert(value: number): void {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  private heapifyUp(index: number): void {
    if (index === 0) return;
    
    const parentIndex = Math.floor((index - 1) / 2);
    if (this.heap[parentIndex] > this.heap[index]) {
      [this.heap[parentIndex], this.heap[index]] = 
      [this.heap[index], this.heap[parentIndex]];
      this.heapifyUp(parentIndex);
    }
  }

  extractMin(): number | null {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop()!;

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);
    return min;
  }

  private heapifyDown(index: number): void {
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;
    let smallest = index;

    if (leftChild < this.heap.length && 
        this.heap[leftChild] < this.heap[smallest]) {
      smallest = leftChild;
    }

    if (rightChild < this.heap.length && 
        this.heap[rightChild] < this.heap[smallest]) {
      smallest = rightChild;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = 
      [this.heap[smallest], this.heap[index]];
      this.heapifyDown(smallest);
    }
  }
}
\`\`\`
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=t0Cq6tVNRBA',
        'https://www.youtube.com/watch?v=HqPJF2L5h9U'
      ],
      externalLinks: [
        { title: 'Binary Tree Array Implementation', url: 'https://www.geeksforgeeks.org/binary-tree-array-implementation/' },
        { title: 'Complete Binary Tree - Programiz', url: 'https://www.programiz.com/dsa/complete-binary-tree' }
      ]
    }
  },
  {
    id: 'heaps',
    name: 'Heaps',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit III',
    content: {
      introduction: 'Heaps are specialized complete binary trees that satisfy the heap property, making them ideal for implementing priority queues and efficient sorting algorithms.',
      definition: 'A heap is a complete binary tree where every parent node satisfies a specific ordering property with its children: in a max-heap, parents are greater than children; in a min-heap, parents are smaller than children.',
      realWorldExample: 'Operating system task scheduling, Dijkstra\'s shortest path algorithm, heap sort, emergency room patient prioritization, and job scheduling in computer systems.',
      realWorldUse: 'Used in priority queue implementations, heap sort algorithm, graph algorithms like Dijkstra\'s and Prim\'s, memory management, and real-time systems for task scheduling.',
      importance: 'Heaps provide O(log n) insertion and deletion with O(1) access to the minimum/maximum element, making them essential for efficient priority-based operations.',
      detailedExplanation: `
**Heap Properties:**
1. **Complete Binary Tree**: All levels filled except possibly the last
2. **Heap Property**: 
   - **Max-Heap**: Parent ≥ Children
   - **Min-Heap**: Parent ≤ Children

**Array Representation:**
- Parent of node i: (i-1)/2
- Left child of node i: 2*i + 1  
- Right child of node i: 2*i + 2

**Min-Heap Implementation:**
\`\`\`typescript
class MinHeap {
  private heap: number[] = [];

  // Get parent, left child, right child indices
  private parent(i: number): number { return Math.floor((i - 1) / 2); }
  private leftChild(i: number): number { return 2 * i + 1; }
  private rightChild(i: number): number { return 2 * i + 2; }

  // Swap elements
  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Insert element
  insert(value: number): void {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  // Maintain heap property upward
  private heapifyUp(index: number): void {
    if (index === 0) return;
    
    const parentIndex = this.parent(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.heapifyUp(parentIndex);
    }
  }

  // Extract minimum element
  extractMin(): number | null {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop()!;

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);
    return min;
  }

  // Maintain heap property downward
  private heapifyDown(index: number): void {
    const left = this.leftChild(index);
    const right = this.rightChild(index);
    let smallest = index;

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  // Peek at minimum without removing
  peek(): number | null {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  // Get heap size
  size(): number {
    return this.heap.length;
  }

  // Check if heap is empty
  isEmpty(): boolean {
    return this.heap.length === 0;
  }
}
\`\`\`

**Heap Sort Algorithm:**
\`\`\`typescript
function heapSort(arr: number[]): number[] {
  const n = arr.length;
  
  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  
  // Extract elements one by one
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // Move current root to end
    heapify(arr, i, 0); // Heapify reduced heap
  }
  
  return arr;
}

function heapify(arr: number[], n: number, i: number): void {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}
\`\`\`

**Time Complexities:**
- **Insert**: O(log n)
- **Extract Min/Max**: O(log n)
- **Peek**: O(1)
- **Build Heap**: O(n)
- **Heap Sort**: O(n log n)

**Applications:**
1. **Priority Queues**: Task scheduling, event simulation
2. **Graph Algorithms**: Dijkstra's, Prim's MST
3. **Sorting**: Heap sort algorithm
4. **Memory Management**: Garbage collection
5. **Data Compression**: Huffman coding

**Advantages:**
- Guaranteed O(log n) operations
- Space efficient (array-based)
- Cache-friendly memory access
- Suitable for real-time systems

**Disadvantages:**
- No efficient search for arbitrary elements
- Not suitable for range queries
- Fixed ordering (min or max)
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=t0Cq6tVNRBA',
        'https://www.youtube.com/watch?v=HqPJF2L5h9U'
      ],
      externalLinks: [
        { title: 'Heap Data Structure', url: 'https://www.geeksforgeeks.org/heap-data-structure/' },
        { title: 'Heap Data Structure - Programiz', url: 'https://www.programiz.com/dsa/heap-data-structure' }
      ]
    }
  },
  {
    id: 'tries',
    name: 'Lexicographic Search Trees: Tries',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit III',
    content: {
      introduction: 'Tries (prefix trees) are specialized tree data structures designed for efficient storage and retrieval of strings, particularly useful for lexicographic operations and string matching.',
      definition: 'A Trie is a tree-like data structure where each node represents a character, and paths from root to leaves represent complete strings. Each node contains links to its children and a flag indicating if it represents the end of a valid string.',
      realWorldExample: 'Autocomplete features in search engines, spell checkers in word processors, IP routing tables in networking, dictionary implementations, and predictive text in mobile keyboards.',
      realWorldUse: 'Used in search engines for query suggestions, compiler design for keyword recognition, network routing for longest prefix matching, and text processing applications for pattern matching.',
      importance: 'Tries provide efficient string operations with O(m) time complexity where m is string length, making them ideal for applications requiring fast string searches and prefix matching.',
      detailedExplanation: `
**Trie Structure:**
- Each node contains an array/map of child pointers (typically 26 for lowercase letters)
- A boolean flag indicating end of word
- Root node represents empty string

**Implementation:**
\`\`\`typescript
class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the trie
  insert(word: string): void {
    let current = this.root;
    
    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char)!;
    }
    
    current.isEndOfWord = true;
  }

  // Search for a word in the trie
  search(word: string): boolean {
    let current = this.root;
    
    for (const char of word) {
      if (!current.children.has(char)) {
        return false;
      }
      current = current.children.get(char)!;
    }
    
    return current.isEndOfWord;
  }

  // Check if any word starts with the given prefix
  startsWith(prefix: string): boolean {
    let current = this.root;
    
    for (const char of prefix) {
      if (!current.children.has(char)) {
        return false;
      }
      current = current.children.get(char)!;
    }
    
    return true;
  }

  // Get all words with given prefix
  getWordsWithPrefix(prefix: string): string[] {
    const result: string[] = [];
    let current = this.root;
    
    // Navigate to prefix end
    for (const char of prefix) {
      if (!current.children.has(char)) {
        return result;
      }
      current = current.children.get(char)!;
    }
    
    // DFS to find all words
    this.dfsWords(current, prefix, result);
    return result;
  }

  private dfsWords(node: TrieNode, currentWord: string, result: string[]): void {
    if (node.isEndOfWord) {
      result.push(currentWord);
    }
    
    for (const [char, childNode] of node.children) {
      this.dfsWords(childNode, currentWord + char, result);
    }
  }

  // Delete a word from the trie
  delete(word: string): boolean {
    return this.deleteHelper(this.root, word, 0);
  }

  private deleteHelper(node: TrieNode, word: string, index: number): boolean {
    if (index === word.length) {
      if (!node.isEndOfWord) return false;
      node.isEndOfWord = false;
      return node.children.size === 0;
    }

    const char = word[index];
    const childNode = node.children.get(char);
    
    if (!childNode) return false;

    const shouldDeleteChild = this.deleteHelper(childNode, word, index + 1);

    if (shouldDeleteChild) {
      node.children.delete(char);
      return !node.isEndOfWord && node.children.size === 0;
    }

    return false;
  }
}
\`\`\`

**Time Complexities:**
- **Insert**: O(m) where m is word length
- **Search**: O(m) where m is word length
- **Delete**: O(m) where m is word length
- **Prefix Search**: O(p) where p is prefix length
- **Space**: O(ALPHABET_SIZE * N * M) worst case

**Applications:**

**1. Autocomplete System:**
\`\`\`typescript
class AutoComplete {
  private trie: Trie;

  constructor(words: string[]) {
    this.trie = new Trie();
    words.forEach(word => this.trie.insert(word.toLowerCase()));
  }

  getSuggestions(prefix: string, limit: number = 10): string[] {
    const suggestions = this.trie.getWordsWithPrefix(prefix.toLowerCase());
    return suggestions.slice(0, limit);
  }
}
\`\`\`

**2. Spell Checker:**
\`\`\`typescript
class SpellChecker {
  private dictionary: Trie;

  constructor(words: string[]) {
    this.dictionary = new Trie();
    words.forEach(word => this.dictionary.insert(word));
  }

  isCorrect(word: string): boolean {
    return this.dictionary.search(word);
  }

  suggest(word: string): string[] {
    // Simple suggestion: find words with same prefix
    for (let i = word.length; i > 0; i--) {
      const prefix = word.substring(0, i);
      const suggestions = this.dictionary.getWordsWithPrefix(prefix);
      if (suggestions.length > 0) {
        return suggestions.slice(0, 5);
      }
    }
    return [];
  }
}
\`\`\`

**Advantages:**
- Fast string operations O(m)
- Memory efficient for common prefixes
- Natural lexicographic ordering
- Supports prefix-based operations

**Disadvantages:**
- High memory usage for sparse datasets
- Cache performance issues due to pointer chasing
- Complex implementation compared to hash tables

**Optimizations:**
- **Compressed Tries**: Merge single-child nodes
- **Ternary Search Trees**: Reduce memory usage
- **Array Implementation**: For fixed alphabets
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=AXjmTQ8LEoI',
        'https://www.youtube.com/watch?v=zIjfhVPRZCg'
      ],
      externalLinks: [
        { title: 'Trie Insert and Search', url: 'https://www.geeksforgeeks.org/trie-insert-and-search/' },
        { title: 'Trie Data Structure - Programiz', url: 'https://www.programiz.com/dsa/trie' }
      ]
    }
  },
  {
    id: 'b-trees',
    name: 'External Searching: B-Trees',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit III',
    content: {
      introduction: 'B-Trees are self-balancing search trees designed for systems that read and write large blocks of data, particularly useful for database and file system implementations.',
      definition: 'A B-Tree is a self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. It is optimized for systems that read and write large blocks of data.',
      realWorldExample: 'Database management systems (MySQL, PostgreSQL), file systems (NTFS, ext4), search engines for indexing, and data warehouses for efficient range queries.',
      realWorldUse: 'Used in database indexing for fast query processing, file system organization for directory structures, search engines for document indexing, and distributed systems for data partitioning.',
      importance: 'B-Trees minimize disk I/O operations by storing multiple keys per node, making them essential for database systems and applications dealing with large datasets stored on secondary storage.',
      detailedExplanation: `
**B-Tree Properties:**
- All leaves are at the same level
- A B-Tree of order m has:
  - Each node has at most m children
  - Each internal node has at least ⌈m/2⌉ children
  - Root has at least 2 children (unless it's a leaf)
  - Each node has at most m-1 keys
  - Each internal node has at least ⌈m/2⌉-1 keys

**B-Tree Structure:**
\`\`\`typescript
interface BTreeNode<T> {
  keys: T[];
  children: BTreeNode<T>[];
  isLeaf: boolean;
  keyCount: number;
}

class BTree<T> {
  private root: BTreeNode<T>;
  private order: number; // Maximum number of children
  private minKeys: number; // Minimum number of keys

  constructor(order: number) {
    this.order = order;
    this.minKeys = Math.ceil(order / 2) - 1;
    this.root = this.createNode(true);
  }

  private createNode(isLeaf: boolean): BTreeNode<T> {
    return {
      keys: [],
      children: [],
      isLeaf,
      keyCount: 0
    };
  }

  // Search operation
  search(key: T): boolean {
    return this.searchHelper(this.root, key);
  }

  private searchHelper(node: BTreeNode<T>, key: T): boolean {
    let i = 0;
    
    // Find the first key greater than or equal to key
    while (i < node.keyCount && key > node.keys[i]) {
      i++;
    }

    // If key found
    if (i < node.keyCount && key === node.keys[i]) {
      return true;
    }

    // If leaf node, key not found
    if (node.isLeaf) {
      return false;
    }

    // Recursively search in appropriate child
    return this.searchHelper(node.children[i], key);
  }

  // Insert operation
  insert(key: T): void {
    const root = this.root;

    // If root is full, create new root
    if (root.keyCount === this.order - 1) {
      const newRoot = this.createNode(false);
      newRoot.children[0] = root;
      this.splitChild(newRoot, 0);
      this.root = newRoot;
    }

    this.insertNonFull(this.root, key);
  }

  private insertNonFull(node: BTreeNode<T>, key: T): void {
    let i = node.keyCount - 1;

    if (node.isLeaf) {
      // Insert key in leaf node
      while (i >= 0 && key < node.keys[i]) {
        node.keys[i + 1] = node.keys[i];
        i--;
      }
      node.keys[i + 1] = key;
      node.keyCount++;
    } else {
      // Find child to insert key
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }
      i++;

      // If child is full, split it
      if (node.children[i].keyCount === this.order - 1) {
        this.splitChild(node, i);
        if (key > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.children[i], key);
    }
  }

  private splitChild(parent: BTreeNode<T>, index: number): void {
    const fullChild = parent.children[index];
    const newChild = this.createNode(fullChild.isLeaf);
    const midIndex = Math.floor((this.order - 1) / 2);

    // Copy second half of keys to new child
    newChild.keyCount = this.order - 1 - midIndex - 1;
    for (let j = 0; j < newChild.keyCount; j++) {
      newChild.keys[j] = fullChild.keys[j + midIndex + 1];
    }

    // Copy second half of children if not leaf
    if (!fullChild.isLeaf) {
      for (let j = 0; j <= newChild.keyCount; j++) {
        newChild.children[j] = fullChild.children[j + midIndex + 1];
      }
    }

    fullChild.keyCount = midIndex;

    // Shift parent's children to make room for new child
    for (let j = parent.keyCount; j >= index + 1; j--) {
      parent.children[j + 1] = parent.children[j];
    }
    parent.children[index + 1] = newChild;

    // Move middle key up to parent
    for (let j = parent.keyCount - 1; j >= index; j--) {
      parent.keys[j + 1] = parent.keys[j];
    }
    parent.keys[index] = fullChild.keys[midIndex];
    parent.keyCount++;
  }

  // Traverse and collect all keys
  traverse(): T[] {
    const result: T[] = [];
    this.traverseHelper(this.root, result);
    return result;
  }

  private traverseHelper(node: BTreeNode<T>, result: T[]): void {
    let i = 0;
    for (i = 0; i < node.keyCount; i++) {
      if (!node.isLeaf) {
        this.traverseHelper(node.children[i], result);
      }
      result.push(node.keys[i]);
    }

    if (!node.isLeaf) {
      this.traverseHelper(node.children[i], result);
    }
  }
}
\`\`\`

**Time Complexities:**
- **Search**: O(log n)
- **Insert**: O(log n)
- **Delete**: O(log n)
- **Space**: O(n)

**Advantages:**
- **Disk-Friendly**: Minimizes disk I/O operations
- **Balanced**: Always maintains balance automatically
- **Range Queries**: Efficient for range-based searches
- **High Fanout**: Reduces tree height with more keys per node

**Disadvantages:**
- **Complex Implementation**: More complex than binary trees
- **Memory Overhead**: Requires more memory per node
- **Underutilization**: Nodes may be only half full

**Applications:**
1. **Database Indexing**: Primary and secondary indexes
2. **File Systems**: Directory structures and metadata
3. **Search Engines**: Document indexing and retrieval
4. **Data Warehouses**: Efficient range queries

**B+ Trees (Variation):**
- All data stored in leaf nodes
- Internal nodes only store keys for navigation
- Leaf nodes linked for sequential access
- Better for range queries and sequential scans

**Example Usage:**
\`\`\`typescript
const btree = new BTree<number>(5); // Order 5 B-Tree

// Insert values
[10, 20, 5, 6, 12, 30, 7, 17].forEach(val => btree.insert(val));

// Search for values
console.log(btree.search(6)); // true
console.log(btree.search(15)); // false

// Get all values in sorted order
console.log(btree.traverse()); // [5, 6, 7, 10, 12, 17, 20, 30]
\`\`\`
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=aZjYr87r1b8',
        'https://www.youtube.com/watch?v=C_q5ccN84C8'
      ],
      externalLinks: [
        { title: 'B-Tree Set 1 (Introduction)', url: 'https://www.geeksforgeeks.org/b-tree-set-1-introduction-2/' },
        { title: 'B-Tree Data Structure - Programiz', url: 'https://www.programiz.com/dsa/b-tree' }
      ]
    }
  },
  {
    id: 'applications-trees',
    name: 'Applications of Trees',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit III',
    content: {
      introduction: 'Trees have numerous practical applications across computer science, from database systems to artificial intelligence, making them one of the most versatile data structures.',
      definition: 'Tree applications encompass various domains where hierarchical relationships, efficient searching, and organized data storage are essential for optimal system performance.',
      realWorldExample: 'File systems organizing directories, HTML DOM structure in web browsers, decision trees in machine learning, organizational charts in companies, and family trees in genealogy.',
      realWorldUse: 'Used in database indexing, compiler design, network routing, artificial intelligence, game development, and data compression algorithms across various industries.',
      importance: 'Trees provide efficient solutions for complex problems involving hierarchical data, enabling O(log n) operations and forming the foundation for advanced algorithms and data structures.',
      detailedExplanation: `
**Major Applications:**

**1. Database Systems:**
- **B-Trees**: Database indexing for fast queries
- **B+ Trees**: Range queries and sequential access
- **R-Trees**: Spatial data indexing (GIS applications)
- **Hash Trees**: Distributed databases and blockchain

**2. File Systems:**
- **Directory Structure**: Hierarchical file organization
- **Inode Trees**: File metadata management
- **Journaling**: Transaction logging in filesystems

**3. Compiler Design:**
- **Parse Trees**: Syntax analysis and grammar parsing
- **Abstract Syntax Trees (AST)**: Code representation
- **Expression Trees**: Mathematical expression evaluation
- **Symbol Tables**: Variable and function management

**4. Network and Routing:**
- **Spanning Trees**: Network topology optimization
- **Routing Tables**: Internet packet routing
- **Multicast Trees**: Efficient data distribution
- **Decision Trees**: Network protocol selection

**5. Artificial Intelligence:**
- **Decision Trees**: Classification and regression
- **Game Trees**: Minimax algorithm for game AI
- **Search Trees**: Problem-solving and pathfinding
- **Knowledge Representation**: Expert systems

**6. Graphics and UI:**
- **Scene Graphs**: 3D graphics rendering
- **DOM Trees**: Web page structure
- **Widget Trees**: GUI component hierarchy
- **Quadtrees/Octrees**: Spatial partitioning

**7. Data Compression:**
- **Huffman Trees**: Optimal prefix coding
- **LZ Trees**: Dictionary-based compression
- **Suffix Trees**: String matching and compression

**Implementation Examples:**

**Expression Tree Evaluator:**
\`\`\`typescript
interface ExprNode {
  value: string;
  left: ExprNode | null;
  right: ExprNode | null;
  isOperator: boolean;
}

class ExpressionTree {
  root: ExprNode | null = null;

  // Build tree from postfix expression
  buildFromPostfix(postfix: string[]): void {
    const stack: ExprNode[] = [];
    
    for (const token of postfix) {
      const node: ExprNode = {
        value: token,
        left: null,
        right: null,
        isOperator: this.isOperator(token)
      };

      if (node.isOperator) {
        node.right = stack.pop()!;
        node.left = stack.pop()!;
      }
      
      stack.push(node);
    }
    
    this.root = stack[0];
  }

  // Evaluate expression tree
  evaluate(): number {
    return this.evaluateHelper(this.root);
  }

  private evaluateHelper(node: ExprNode | null): number {
    if (!node) return 0;
    
    if (!node.isOperator) {
      return parseFloat(node.value);
    }

    const left = this.evaluateHelper(node.left);
    const right = this.evaluateHelper(node.right);

    switch (node.value) {
      case '+': return left + right;
      case '-': return left - right;
      case '*': return left * right;
      case '/': return left / right;
      default: return 0;
    }
  }

  private isOperator(token: string): boolean {
    return ['+', '-', '*', '/'].includes(token);
  }
}
\`\`\`

**File System Tree:**
\`\`\`typescript
interface FileNode {
  name: string;
  isDirectory: boolean;
  size: number;
  children: FileNode[];
  parent: FileNode | null;
}

class FileSystem {
  root: FileNode;

  constructor() {
    this.root = {
      name: '/',
      isDirectory: true,
      size: 0,
      children: [],
      parent: null
    };
  }

  // Create directory
  mkdir(path: string): boolean {
    const pathParts = path.split('/').filter(p => p);
    let current = this.root;

    for (const part of pathParts) {
      let found = current.children.find(child => 
        child.name === part && child.isDirectory
      );

      if (!found) {
        found = {
          name: part,
          isDirectory: true,
          size: 0,
          children: [],
          parent: current
        };
        current.children.push(found);
      }
      current = found;
    }
    return true;
  }

  // List directory contents
  ls(path: string = '/'): string[] {
    const node = this.findNode(path);
    if (!node || !node.isDirectory) return [];
    
    return node.children.map(child => 
      child.isDirectory ? child.name + '/' : child.name
    );
  }

  // Calculate directory size
  calculateSize(path: string = '/'): number {
    const node = this.findNode(path);
    if (!node) return 0;
    
    if (!node.isDirectory) return node.size;
    
    return node.children.reduce((total, child) => 
      total + this.calculateSizeHelper(child), 0
    );
  }

  private calculateSizeHelper(node: FileNode): number {
    if (!node.isDirectory) return node.size;
    
    return node.children.reduce((total, child) => 
      total + this.calculateSizeHelper(child), 0
    );
  }

  private findNode(path: string): FileNode | null {
    if (path === '/') return this.root;
    
    const pathParts = path.split('/').filter(p => p);
    let current = this.root;

    for (const part of pathParts) {
      const found = current.children.find(child => child.name === part);
      if (!found) return null;
      current = found;
    }
    
    return current;
  }
}
\`\`\`

**Decision Tree for Classification:**
\`\`\`typescript
interface DecisionNode {
  feature: string;
  threshold?: number;
  left: DecisionNode | null;
  right: DecisionNode | null;
  prediction?: string;
  isLeaf: boolean;
}

class DecisionTree {
  root: DecisionNode | null = null;

  // Predict using the decision tree
  predict(sample: Record<string, number>): string {
    return this.predictHelper(this.root, sample);
  }

  private predictHelper(node: DecisionNode | null, sample: Record<string, number>): string {
    if (!node || node.isLeaf) {
      return node?.prediction || 'unknown';
    }

    const featureValue = sample[node.feature];
    
    if (node.threshold !== undefined) {
      return featureValue <= node.threshold
        ? this.predictHelper(node.left, sample)
        : this.predictHelper(node.right, sample);
    }

    return 'unknown';
  }
}
\`\`\`

**Performance Benefits:**
- **Logarithmic Operations**: O(log n) search, insert, delete
- **Hierarchical Organization**: Natural data relationships
- **Memory Efficiency**: Optimal space utilization
- **Scalability**: Handles large datasets effectively

**Industry Applications:**
- **Google**: Search indexing and PageRank
- **Facebook**: Social graph representation
- **Amazon**: Product categorization and recommendations
- **Netflix**: Content recommendation trees
- **Banking**: Transaction processing and fraud detection
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=oSWTXtMglKE',
        'https://www.youtube.com/watch?v=qH6yxkw0u78'
      ],
      externalLinks: [
        { title: 'Applications of Tree Data Structure', url: 'https://www.geeksforgeeks.org/applications-of-tree-data-structure/' },
        { title: 'Tree Data Structure Tutorial', url: 'https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm' }
      ]
    }
  },

  // Graphs
  {
    id: 'graphs-mathematical-background',
    name: 'Graphs: Mathematical Background',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit III',
    content: {
      introduction: 'Graph theory provides the mathematical foundation for understanding relationships between objects, forming the basis for modeling complex networks and solving connectivity problems.',
      definition: 'A graph G = (V, E) is a mathematical structure consisting of a finite set of vertices (V) and a set of edges (E) that connect pairs of vertices, representing relationships or connections between entities.',
      realWorldExample: 'Social networks (Facebook friends), transportation systems (road networks), computer networks (internet topology), molecular structures in chemistry, and dependency graphs in project management.',
      realWorldUse: 'Used in network analysis, route planning algorithms, social media platforms, circuit design, database relationships, and optimization problems in logistics and operations research.',
      importance: 'Graph theory provides essential mathematical tools for analyzing complex relationships, enabling efficient algorithms for pathfinding, network optimization, and connectivity analysis in various domains.',
      detailedExplanation: `
**Basic Definitions:**

**Graph G = (V, E):**
- **V**: Set of vertices (nodes)
- **E**: Set of edges (connections)
- **Order**: Number of vertices |V|
- **Size**: Number of edges |E|

**Types of Graphs:**

**1. Directed vs Undirected:**
- **Undirected**: Edges have no direction (bidirectional)
- **Directed (Digraph)**: Edges have direction (unidirectional)

**2. Weighted vs Unweighted:**
- **Weighted**: Edges have associated weights/costs
- **Unweighted**: All edges have equal weight (usually 1)

**3. Simple vs Multigraph:**
- **Simple**: No self-loops, no multiple edges between same vertices
- **Multigraph**: Allows multiple edges between same vertices

**Mathematical Properties:**

**Degree of Vertex:**
- **Undirected Graph**: Number of edges incident to vertex
- **Directed Graph**: 
  - **In-degree**: Number of incoming edges
  - **Out-degree**: Number of outgoing edges

**Handshaking Lemma:**
Sum of all vertex degrees = 2 × Number of edges
∑deg(v) = 2|E|

**Path and Connectivity:**
- **Path**: Sequence of vertices connected by edges
- **Simple Path**: No repeated vertices
- **Cycle**: Path that starts and ends at same vertex
- **Connected Graph**: Path exists between every pair of vertices
- **Strongly Connected**: In directed graphs, path exists in both directions

**Special Types:**

**Complete Graph (Kn):**
- Every vertex connected to every other vertex
- Number of edges = n(n-1)/2 for undirected
- Number of edges = n(n-1) for directed

**Bipartite Graph:**
- Vertices can be divided into two disjoint sets
- Edges only connect vertices from different sets
- No odd-length cycles

**Tree:**
- Connected acyclic graph
- n vertices, n-1 edges
- Unique path between any two vertices

**Planar Graph:**
- Can be drawn on plane without edge crossings
- Euler's formula: V - E + F = 2 (where F is faces)

**Graph Representations:**

**1. Adjacency Matrix:**
\`\`\`typescript
// For graph with n vertices
const adjMatrix: number[][] = Array(n).fill(null).map(() => Array(n).fill(0));

// Add edge from u to v
adjMatrix[u][v] = 1; // or weight for weighted graphs
if (!directed) adjMatrix[v][u] = 1; // for undirected graphs
\`\`\`

**2. Adjacency List:**
\`\`\`typescript
// Using Map for adjacency list
const adjList: Map<number, number[]> = new Map();

// Add edge from u to v
if (!adjList.has(u)) adjList.set(u, []);
adjList.get(u)!.push(v);
if (!directed) {
  if (!adjList.has(v)) adjList.set(v, []);
  adjList.get(v)!.push(u);
}
\`\`\`

**Graph Algorithms Complexity:**

**Adjacency Matrix:**
- Space: O(V²)
- Edge lookup: O(1)
- Add vertex: O(V²)
- Add edge: O(1)

**Adjacency List:**
- Space: O(V + E)
- Edge lookup: O(degree)
- Add vertex: O(1)
- Add edge: O(1)

**Important Theorems:**

**Euler's Theorem:**
- **Eulerian Path**: Exists if exactly 0 or 2 vertices have odd degree
- **Eulerian Cycle**: Exists if all vertices have even degree

**Hamiltonian Path/Cycle:**
- **Hamiltonian Path**: Visits each vertex exactly once
- **Hamiltonian Cycle**: Hamiltonian path that returns to start
- No efficient algorithm for general case (NP-complete)

**Graph Coloring:**
- **Chromatic Number**: Minimum colors needed to color vertices
- **Four Color Theorem**: Any planar graph can be colored with 4 colors

**Applications in Computer Science:**
1. **Network Routing**: Shortest path algorithms
2. **Social Networks**: Community detection, influence analysis
3. **Compiler Design**: Dependency graphs, register allocation
4. **Database Systems**: Query optimization, join operations
5. **Operating Systems**: Process scheduling, deadlock detection
6. **Machine Learning**: Neural networks, recommendation systems

**Graph Metrics:**
- **Diameter**: Longest shortest path between any two vertices
- **Radius**: Minimum eccentricity among all vertices
- **Clustering Coefficient**: Measure of local connectivity
- **Betweenness Centrality**: Measure of vertex importance in paths
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=gXgEDyodOJU',
        'https://www.youtube.com/watch?v=AfYqN3fGapc'
      ],
      externalLinks: [
        { title: 'Graph Data Structure and Algorithms', url: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/' },
        { title: 'Representing Graphs - Khan Academy', url: 'https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs' }
      ]
    }
  },
  {
    id: 'computer-representation-graphs',
    name: 'Computer Representation',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit III',
    content: {
      introduction: 'Computer representation of graphs involves storing graph data structures in memory using various methods, each optimized for different types of operations and space requirements.',
      definition: 'Graph representation refers to the way graphs are stored and organized in computer memory. The two primary methods are adjacency matrix and adjacency list, each with distinct advantages for different graph operations.',
      realWorldExample: 'Social network connections stored in databases, road network maps in GPS systems, web page link structures in search engines, and network topology representations in routing protocols.',
      realWorldUse: 'Used in social media platforms for friend recommendations, navigation systems for route planning, search engines for web crawling, and network management systems for topology analysis.',
      importance: 'Efficient graph representation is crucial for algorithm performance, memory usage optimization, and enabling fast graph operations like traversal, shortest path finding, and connectivity analysis.',
      detailedExplanation: `
**Primary Representation Methods:**

**1. Adjacency Matrix:**
A 2D array where matrix[i][j] represents the edge between vertices i and j.

\`\`\`typescript
class GraphMatrix {
  private matrix: number[][];
  private vertices: number;

  constructor(vertices: number) {
    this.vertices = vertices;
    this.matrix = Array(vertices).fill(null).map(() => Array(vertices).fill(0));
  }

  // Add edge (undirected graph)
  addEdge(u: number, v: number, weight: number = 1): void {
    this.matrix[u][v] = weight;
    this.matrix[v][u] = weight; // For undirected graph
  }

  // Add directed edge
  addDirectedEdge(u: number, v: number, weight: number = 1): void {
    this.matrix[u][v] = weight;
  }

  // Check if edge exists
  hasEdge(u: number, v: number): boolean {
    return this.matrix[u][v] !== 0;
  }

  // Get edge weight
  getWeight(u: number, v: number): number {
    return this.matrix[u][v];
  }

  // Get all neighbors of a vertex
  getNeighbors(vertex: number): number[] {
    const neighbors: number[] = [];
    for (let i = 0; i < this.vertices; i++) {
      if (this.matrix[vertex][i] !== 0) {
        neighbors.push(i);
      }
    }
    return neighbors;
  }

  // Display matrix
  display(): void {
    console.log("Adjacency Matrix:");
    for (let i = 0; i < this.vertices; i++) {
      console.log(this.matrix[i].join(" "));
    }
  }
}
\`\`\`

**2. Adjacency List:**
An array of lists where each list contains the neighbors of a vertex.

\`\`\`typescript
interface Edge {
  vertex: number;
  weight: number;
}

class GraphList {
  private adjList: Map<number, Edge[]>;
  private vertices: number;

  constructor(vertices: number) {
    this.vertices = vertices;
    this.adjList = new Map();
    
    // Initialize empty lists for all vertices
    for (let i = 0; i < vertices; i++) {
      this.adjList.set(i, []);
    }
  }

  // Add edge (undirected graph)
  addEdge(u: number, v: number, weight: number = 1): void {
    this.adjList.get(u)!.push({ vertex: v, weight });
    this.adjList.get(v)!.push({ vertex: u, weight }); // For undirected
  }

  // Add directed edge
  addDirectedEdge(u: number, v: number, weight: number = 1): void {
    this.adjList.get(u)!.push({ vertex: v, weight });
  }

  // Get neighbors of a vertex
  getNeighbors(vertex: number): Edge[] {
    return this.adjList.get(vertex) || [];
  }

  // Check if edge exists
  hasEdge(u: number, v: number): boolean {
    const neighbors = this.adjList.get(u) || [];
    return neighbors.some(edge => edge.vertex === v);
  }

  // Get edge weight
  getWeight(u: number, v: number): number {
    const neighbors = this.adjList.get(u) || [];
    const edge = neighbors.find(e => e.vertex === v);
    return edge ? edge.weight : 0;
  }

  // Display adjacency list
  display(): void {
    console.log("Adjacency List:");
    for (let i = 0; i < this.vertices; i++) {
      const neighbors = this.adjList.get(i)!;
      const neighborStr = neighbors.map(e => \`\${e.vertex}(\${e.weight})\`).join(", ");
      console.log(\`\${i}: [\${neighborStr}]\`);
    }
  }
}
\`\`\`

**3. Edge List:**
Simple list of all edges in the graph.

\`\`\`typescript
interface GraphEdge {
  source: number;
  destination: number;
  weight: number;
}

class EdgeListGraph {
  private edges: GraphEdge[];
  private vertices: number;

  constructor(vertices: number) {
    this.vertices = vertices;
    this.edges = [];
  }

  addEdge(u: number, v: number, weight: number = 1): void {
    this.edges.push({ source: u, destination: v, weight });
  }

  getEdges(): GraphEdge[] {
    return this.edges;
  }

  getVertexCount(): number {
    return this.vertices;
  }

  getEdgeCount(): number {
    return this.edges.length;
  }
}
\`\`\`

**Comparison Table:**

| Operation | Adjacency Matrix | Adjacency List | Edge List |
|-----------|------------------|----------------|-----------|
| Space Complexity | O(V²) | O(V + E) | O(E) |
| Add Edge | O(1) | O(1) | O(1) |
| Remove Edge | O(1) | O(V) | O(E) |
| Check Edge | O(1) | O(V) | O(E) |
| Get Neighbors | O(V) | O(degree) | O(E) |
| Memory Usage | High | Low-Medium | Low |

**When to Use Each:**

**Adjacency Matrix:**
- Dense graphs (many edges)
- Frequent edge lookups
- Weighted graphs with matrix operations
- Small graphs where memory isn't a concern

**Adjacency List:**
- Sparse graphs (few edges)
- Frequent neighbor traversals
- Dynamic graphs with frequent additions/deletions
- Memory-efficient representation

**Edge List:**
- Simple graph algorithms (Kruskal's MST)
- Sorting edges by weight
- Minimal memory usage
- Batch processing of edges

**Advanced Representations:**

**4. Compressed Sparse Row (CSR):**
\`\`\`typescript
class CSRGraph {
  private rowPtr: number[];
  private colInd: number[];
  private values: number[];

  constructor(adjMatrix: number[][]) {
    const n = adjMatrix.length;
    this.rowPtr = [0];
    this.colInd = [];
    this.values = [];

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (adjMatrix[i][j] !== 0) {
          this.colInd.push(j);
          this.values.push(adjMatrix[i][j]);
        }
      }
      this.rowPtr.push(this.colInd.length);
    }
  }

  getNeighbors(vertex: number): Array<{vertex: number, weight: number}> {
    const start = this.rowPtr[vertex];
    const end = this.rowPtr[vertex + 1];
    const neighbors = [];

    for (let i = start; i < end; i++) {
      neighbors.push({
        vertex: this.colInd[i],
        weight: this.values[i]
      });
    }

    return neighbors;
  }
}
\`\`\`

**Memory Optimization Techniques:**
- **Bit Vectors**: For unweighted graphs
- **Hash Tables**: For very sparse graphs
- **Compressed Formats**: CSR, CSC for large sparse graphs
- **Implicit Representation**: For regular graphs (grids, trees)

**Implementation Considerations:**
- **Cache Locality**: Adjacency lists better for traversals
- **Parallelization**: Matrix operations easier to parallelize
- **Dynamic Updates**: Lists better for frequent modifications
- **Memory Constraints**: Choose based on available memory
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=k1wraWzqtvQ',
        'https://www.youtube.com/watch?v=2guA5uMEmvQ'
      ],
      externalLinks: [
        { title: 'Graph and its Representations', url: 'https://www.geeksforgeeks.org/graph-and-its-representations/' },
        { title: 'Graph Data Structure - Programiz', url: 'https://www.programiz.com/dsa/graph' }
      ]
    }
  },
  {
    id: 'graph-traversal',
    name: 'Graph Traversal',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit III',
    content: {
      introduction: 'Graph traversal algorithms systematically visit all vertices and edges in a graph, forming the foundation for many graph-based algorithms and applications.',
      definition: 'Graph traversal is the process of visiting all vertices in a graph in a systematic manner. The two primary methods are Depth-First Search (DFS) and Breadth-First Search (BFS), each with distinct characteristics and applications.',
      realWorldExample: 'Web crawling by search engines, social network analysis for finding connections, maze solving algorithms, network topology discovery, and dependency resolution in software systems.',
      realWorldUse: 'Used in search engines for web indexing, social media platforms for friend suggestions, GPS systems for route finding, compiler design for dependency analysis, and network protocols for topology discovery.',
      importance: 'Graph traversal algorithms are fundamental building blocks for complex graph algorithms, enabling pathfinding, connectivity analysis, cycle detection, and topological sorting in various applications.',
      detailedExplanation: `
**Two Main Traversal Methods:**

**1. Depth-First Search (DFS):**
Explores as far as possible along each branch before backtracking.

**Characteristics:**
- Uses stack (recursion or explicit)
- Time Complexity: O(V + E)
- Space Complexity: O(V) for visited array + O(V) for recursion stack

**DFS Implementation:**
\`\`\`typescript
class Graph {
  private adjList: Map<number, number[]>;
  private vertices: number;

  constructor(vertices: number) {
    this.vertices = vertices;
    this.adjList = new Map();
    for (let i = 0; i < vertices; i++) {
      this.adjList.set(i, []);
    }
  }

  addEdge(u: number, v: number): void {
    this.adjList.get(u)!.push(v);
    this.adjList.get(v)!.push(u); // For undirected graph
  }

  // Recursive DFS
  dfsRecursive(startVertex: number): number[] {
    const visited = new Set<number>();
    const result: number[] = [];
    
    this.dfsHelper(startVertex, visited, result);
    return result;
  }

  private dfsHelper(vertex: number, visited: Set<number>, result: number[]): void {
    visited.add(vertex);
    result.push(vertex);

    const neighbors = this.adjList.get(vertex) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        this.dfsHelper(neighbor, visited, result);
      }
    }
  }

  // Iterative DFS using stack
  dfsIterative(startVertex: number): number[] {
    const visited = new Set<number>();
    const result: number[] = [];
    const stack: number[] = [startVertex];

    while (stack.length > 0) {
      const vertex = stack.pop()!;
      
      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);

        const neighbors = this.adjList.get(vertex) || [];
        // Add neighbors in reverse order to maintain left-to-right traversal
        for (let i = neighbors.length - 1; i >= 0; i--) {
          if (!visited.has(neighbors[i])) {
            stack.push(neighbors[i]);
          }
        }
      }
    }

    return result;
  }
}
\`\`\`

**2. Breadth-First Search (BFS):**
Explores all vertices at the current depth before moving to vertices at the next depth level.

**Characteristics:**
- Uses queue data structure
- Time Complexity: O(V + E)
- Space Complexity: O(V) for visited array + O(V) for queue

**BFS Implementation:**
\`\`\`typescript
// BFS traversal
bfs(startVertex: number): number[] {
  const visited = new Set<number>();
  const result: number[] = [];
  const queue: number[] = [startVertex];

  visited.add(startVertex);

  while (queue.length > 0) {
    const vertex = queue.shift()!;
    result.push(vertex);

    const neighbors = this.adjList.get(vertex) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return result;
}

// BFS for shortest path (unweighted graph)
bfsShortestPath(start: number, end: number): number[] {
  const visited = new Set<number>();
  const queue: Array<{vertex: number, path: number[]}> = [{vertex: start, path: [start]}];
  
  visited.add(start);

  while (queue.length > 0) {
    const {vertex, path} = queue.shift()!;
    
    if (vertex === end) {
      return path;
    }

    const neighbors = this.adjList.get(vertex) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push({vertex: neighbor, path: [...path, neighbor]});
      }
    }
  }

  return []; // No path found
}
\`\`\`

**Applications of DFS:**
1. **Cycle Detection**: Detect cycles in directed/undirected graphs
2. **Topological Sorting**: Order vertices in DAG
3. **Connected Components**: Find all connected components
4. **Path Finding**: Find if path exists between two vertices
5. **Maze Solving**: Navigate through maze-like structures

**Applications of BFS:**
1. **Shortest Path**: Find shortest path in unweighted graphs
2. **Level Order Traversal**: Process nodes level by level
3. **Bipartite Graph Check**: Determine if graph is bipartite
4. **Web Crawling**: Crawl web pages level by level
5. **Social Networks**: Find degrees of separation

**Advanced Traversal Algorithms:**

**Connected Components (using DFS):**
\`\`\`typescript
findConnectedComponents(): number[][] {
  const visited = new Set<number>();
  const components: number[][] = [];

  for (let i = 0; i < this.vertices; i++) {
    if (!visited.has(i)) {
      const component: number[] = [];
      this.dfsComponentHelper(i, visited, component);
      components.push(component);
    }
  }

  return components;
}

private dfsComponentHelper(vertex: number, visited: Set<number>, component: number[]): void {
  visited.add(vertex);
  component.push(vertex);

  const neighbors = this.adjList.get(vertex) || [];
  for (const neighbor of neighbors) {
    if (!visited.has(neighbor)) {
      this.dfsComponentHelper(neighbor, visited, component);
    }
  }
}
\`\`\`

**Cycle Detection:**
\`\`\`typescript
// Cycle detection in undirected graph using DFS
hasCycleUndirected(): boolean {
  const visited = new Set<number>();

  for (let i = 0; i < this.vertices; i++) {
    if (!visited.has(i)) {
      if (this.hasCycleUndirectedHelper(i, -1, visited)) {
        return true;
      }
    }
  }

  return false;
}

private hasCycleUndirectedHelper(vertex: number, parent: number, visited: Set<number>): boolean {
  visited.add(vertex);

  const neighbors = this.adjList.get(vertex) || [];
  for (const neighbor of neighbors) {
    if (!visited.has(neighbor)) {
      if (this.hasCycleUndirectedHelper(neighbor, vertex, visited)) {
        return true;
      }
    } else if (neighbor !== parent) {
      return true; // Back edge found
    }
  }

  return false;
}
\`\`\`

**Comparison: DFS vs BFS**

| Aspect | DFS | BFS |
|--------|-----|-----|
| Data Structure | Stack | Queue |
| Memory Usage | O(h) where h is height | O(w) where w is width |
| Path Found | Any path | Shortest path |
| Implementation | Recursive/Iterative | Iterative |
| Applications | Topological sort, cycle detection | Shortest path, level processing |

**Time and Space Complexities:**
- **Time**: O(V + E) for both DFS and BFS
- **Space**: 
  - DFS: O(V) for visited + O(h) for recursion stack
  - BFS: O(V) for visited + O(w) for queue

**Practical Considerations:**
- **DFS**: Better for deep graphs, uses less memory
- **BFS**: Better for finding shortest paths, explores systematically
- **Choice depends on**: Problem requirements, graph structure, memory constraints
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=7fujbpJ0LB4',
        'https://www.youtube.com/watch?v=oDqjPvD54Ss'
      ],
      externalLinks: [
        { title: 'Graph Traversal DFS BFS', url: 'https://www.geeksforgeeks.org/graph-traversal-dfs-bfs/' },
        { title: 'Graph DFS - Programiz', url: 'https://www.programiz.com/dsa/graph-dfs' }
      ]
    }
  },
  {
    id: 'topological-sorting',
    name: 'Topological Sorting',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit III',
    content: {
      introduction: 'Topological sorting is a linear ordering of vertices in a directed acyclic graph (DAG) where for every directed edge from vertex u to vertex v, u appears before v in the ordering.',
      definition: 'Topological sorting produces a linear ordering of vertices in a directed acyclic graph such that for every directed edge (u,v), vertex u comes before vertex v in the ordering. It is only possible for DAGs.',
      realWorldExample: 'Course prerequisite scheduling in universities, task scheduling in project management, dependency resolution in software builds, and compilation order in programming languages.',
      realWorldUse: 'Used in build systems for determining compilation order, package managers for dependency resolution, task schedulers in operating systems, and workflow management systems.',
      importance: 'Topological sorting enables efficient scheduling of dependent tasks, ensures proper ordering in systems with prerequisites, and forms the basis for many graph algorithms.',
      detailedExplanation: `
**Prerequisites:**
- Graph must be a Directed Acyclic Graph (DAG)
- No cycles allowed in the graph
- Multiple valid topological orderings may exist

**Two Main Algorithms:**

**1. Kahn's Algorithm (BFS-based):**
Uses in-degree concept and queue data structure.

\`\`\`typescript
class TopologicalSort {
  private adjList: Map<number, number[]>;
  private vertices: number;

  constructor(vertices: number) {
    this.vertices = vertices;
    this.adjList = new Map();
    for (let i = 0; i < vertices; i++) {
      this.adjList.set(i, []);
    }
  }

  addEdge(u: number, v: number): void {
    this.adjList.get(u)!.push(v);
  }

  // Kahn's Algorithm
  topologicalSortKahn(): number[] {
    // Calculate in-degrees
    const inDegree = new Array(this.vertices).fill(0);
    
    for (let u = 0; u < this.vertices; u++) {
      const neighbors = this.adjList.get(u) || [];
      for (const v of neighbors) {
        inDegree[v]++;
      }
    }

    // Initialize queue with vertices having 0 in-degree
    const queue: number[] = [];
    for (let i = 0; i < this.vertices; i++) {
      if (inDegree[i] === 0) {
        queue.push(i);
      }
    }

    const result: number[] = [];
    let processedVertices = 0;

    while (queue.length > 0) {
      const u = queue.shift()!;
      result.push(u);
      processedVertices++;

      // Reduce in-degree of adjacent vertices
      const neighbors = this.adjList.get(u) || [];
      for (const v of neighbors) {
        inDegree[v]--;
        if (inDegree[v] === 0) {
          queue.push(v);
        }
      }
    }

    // Check for cycle
    if (processedVertices !== this.vertices) {
      throw new Error("Graph contains a cycle - topological sort not possible");
    }

    return result;
  }

  // DFS-based Algorithm
  topologicalSortDFS(): number[] {
    const visited = new Set<number>();
    const stack: number[] = [];

    // Visit all vertices
    for (let i = 0; i < this.vertices; i++) {
      if (!visited.has(i)) {
        this.dfsHelper(i, visited, stack);
      }
    }

    // Return reverse of stack
    return stack.reverse();
  }

  private dfsHelper(vertex: number, visited: Set<number>, stack: number[]): void {
    visited.add(vertex);

    const neighbors = this.adjList.get(vertex) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        this.dfsHelper(neighbor, visited, stack);
      }
    }

    // Push to stack after visiting all neighbors
    stack.push(vertex);
  }

  // Cycle detection for DAG validation
  hasCycle(): boolean {
    const visited = new Set<number>();
    const recStack = new Set<number>();

    for (let i = 0; i < this.vertices; i++) {
      if (!visited.has(i)) {
        if (this.hasCycleHelper(i, visited, recStack)) {
          return true;
        }
      }
    }

    return false;
  }

  private hasCycleHelper(vertex: number, visited: Set<number>, recStack: Set<number>): boolean {
    visited.add(vertex);
    recStack.add(vertex);

    const neighbors = this.adjList.get(vertex) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        if (this.hasCycleHelper(neighbor, visited, recStack)) {
          return true;
        }
      } else if (recStack.has(neighbor)) {
        return true; // Back edge found
      }
    }

    recStack.delete(vertex);
    return false;
  }
}
\`\`\`

**Algorithm Comparison:**

| Aspect | Kahn's Algorithm | DFS-based |
|--------|------------------|-----------|
| Approach | BFS with in-degree | DFS with stack |
| Time Complexity | O(V + E) | O(V + E) |
| Space Complexity | O(V) | O(V) |
| Cycle Detection | Built-in | Requires separate check |
| Implementation | Iterative | Recursive |

**Applications:**

**1. Course Scheduling:**
\`\`\`typescript
class CourseScheduler {
  private courses: Map<string, string[]>; // course -> prerequisites

  constructor() {
    this.courses = new Map();
  }

  addCourse(course: string, prerequisites: string[] = []): void {
    this.courses.set(course, prerequisites);
  }

  getScheduleOrder(): string[] {
    // Convert to graph representation
    const courseList = Array.from(this.courses.keys());
    const courseIndex = new Map<string, number>();
    
    courseList.forEach((course, index) => {
      courseIndex.set(course, index);
    });

    const graph = new TopologicalSort(courseList.length);
    
    // Add edges (prerequisite -> course)
    for (const [course, prerequisites] of this.courses) {
      const courseIdx = courseIndex.get(course)!;
      for (const prereq of prerequisites) {
        if (courseIndex.has(prereq)) {
          const prereqIdx = courseIndex.get(prereq)!;
          graph.addEdge(prereqIdx, courseIdx);
        }
      }
    }

    try {
      const order = graph.topologicalSortKahn();
      return order.map(idx => courseList[idx]);
    } catch (error) {
      throw new Error("Circular dependency detected in course prerequisites");
    }
  }
}

// Usage
const scheduler = new CourseScheduler();
scheduler.addCourse("Data Structures", ["Programming Fundamentals"]);
scheduler.addCourse("Algorithms", ["Data Structures"]);
scheduler.addCourse("Database Systems", ["Data Structures"]);
scheduler.addCourse("Programming Fundamentals", []);

console.log(scheduler.getScheduleOrder());
// Output: ["Programming Fundamentals", "Data Structures", "Algorithms", "Database Systems"]
\`\`\`

**2. Build System Dependencies:**
\`\`\`typescript
class BuildSystem {
  private dependencies: Map<string, string[]>;

  constructor() {
    this.dependencies = new Map();
  }

  addTarget(target: string, deps: string[] = []): void {
    this.dependencies.set(target, deps);
  }

  getBuildOrder(): string[] {
    const targets = Array.from(this.dependencies.keys());
    const targetIndex = new Map<string, number>();
    
    targets.forEach((target, index) => {
      targetIndex.set(target, index);
    });

    const graph = new TopologicalSort(targets.length);
    
    // Add edges (dependency -> target)
    for (const [target, deps] of this.dependencies) {
      const targetIdx = targetIndex.get(target)!;
      for (const dep of deps) {
        if (targetIndex.has(dep)) {
          const depIdx = targetIndex.get(dep)!;
          graph.addEdge(depIdx, targetIdx);
        }
      }
    }

    const order = graph.topologicalSortKahn();
    return order.map(idx => targets[idx]);
  }
}
\`\`\`

**Time Complexity:** O(V + E)
**Space Complexity:** O(V)

**Key Properties:**
- Only works on DAGs (Directed Acyclic Graphs)
- Multiple valid orderings may exist
- Can detect cycles during execution
- Essential for dependency resolution

**Common Use Cases:**
1. **Task Scheduling**: Project management with dependencies
2. **Compilation Order**: Determining file compilation sequence
3. **Package Management**: Resolving software dependencies
4. **Workflow Systems**: Ordering workflow steps
5. **Spreadsheet Calculations**: Cell dependency resolution
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=cIBFEhD77b4',
        'https://www.youtube.com/watch?v=ddTC4Zovtbc'
      ],
      externalLinks: [
        { title: 'Topological Sorting', url: 'https://www.geeksforgeeks.org/topological-sorting/' },
        { title: 'Topological Sort - Programiz', url: 'https://www.programiz.com/dsa/topological-sort' }
      ]
    }
  },
  {
    id: 'greedy-algorithm',
    name: 'Greedy Algorithm',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit III',
    content: {
      introduction: 'Greedy algorithms make locally optimal choices at each step, hoping to find a global optimum. They are particularly effective for optimization problems in graph theory.',
      definition: 'A greedy algorithm is an algorithmic paradigm that builds up a solution piece by piece, always choosing the next piece that offers the most immediate benefit or appears to be the best choice at that moment.',
      realWorldExample: 'Making change with coins (using largest denominations first), choosing shortest routes in GPS navigation, task scheduling to minimize completion time, and resource allocation in operating systems.',
      realWorldUse: 'Used in network routing protocols, job scheduling systems, data compression algorithms, minimum spanning tree construction, and shortest path algorithms in graph theory.',
      importance: 'Greedy algorithms provide efficient solutions for many optimization problems, often with simple implementations and good performance, though they don\'t always guarantee optimal solutions.',
      detailedExplanation: `
**Greedy Algorithm Characteristics:**
1. **Local Optimization**: Makes the best choice at each step
2. **No Backtracking**: Never reconsiders previous choices
3. **Efficiency**: Usually faster than dynamic programming
4. **Simplicity**: Easy to understand and implement

**When Greedy Works:**
- Problem has **optimal substructure**
- Problem exhibits **greedy choice property**
- Local optimum leads to global optimum

**Graph Theory Applications:**

**1. Minimum Spanning Tree - Kruskal's Algorithm:**
\`\`\`typescript
interface Edge {
  source: number;
  destination: number;
  weight: number;
}

class UnionFind {
  private parent: number[];
  private rank: number[];

  constructor(size: number) {
    this.parent = Array.from({length: size}, (_, i) => i);
    this.rank = new Array(size).fill(0);
  }

  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  union(x: number, y: number): boolean {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) return false;

    // Union by rank
    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
    return true;
  }
}

function kruskalMST(vertices: number, edges: Edge[]): Edge[] {
  // Sort edges by weight (greedy choice)
  edges.sort((a, b) => a.weight - b.weight);
  
  const mst: Edge[] = [];
  const uf = new UnionFind(vertices);

  for (const edge of edges) {
    // If adding edge doesn't create cycle
    if (uf.union(edge.source, edge.destination)) {
      mst.push(edge);
      if (mst.length === vertices - 1) break;
    }
  }

  return mst;
}
\`\`\`

**2. Minimum Spanning Tree - Prim's Algorithm:**
\`\`\`typescript
function primMST(graph: number[][]): Edge[] {
  const vertices = graph.length;
  const mst: Edge[] = [];
  const visited = new Array(vertices).fill(false);
  const minEdge = new Array(vertices).fill(Infinity);
  const parent = new Array(vertices).fill(-1);

  minEdge[0] = 0; // Start from vertex 0

  for (let count = 0; count < vertices; count++) {
    // Find minimum weight edge
    let u = -1;
    for (let v = 0; v < vertices; v++) {
      if (!visited[v] && (u === -1 || minEdge[v] < minEdge[u])) {
        u = v;
      }
    }

    visited[u] = true;

    // Add edge to MST (except for first vertex)
    if (parent[u] !== -1) {
      mst.push({
        source: parent[u],
        destination: u,
        weight: graph[parent[u]][u]
      });
    }

    // Update adjacent vertices
    for (let v = 0; v < vertices; v++) {
      if (!visited[v] && graph[u][v] < minEdge[v]) {
        minEdge[v] = graph[u][v];
        parent[v] = u;
      }
    }
  }

  return mst;
}
\`\`\`

**3. Shortest Path - Dijkstra's Algorithm:**
\`\`\`typescript
interface DijkstraResult {
  distances: number[];
  previous: (number | null)[];
}

function dijkstra(graph: number[][], source: number): DijkstraResult {
  const vertices = graph.length;
  const distances = new Array(vertices).fill(Infinity);
  const previous = new Array(vertices).fill(null);
  const visited = new Array(vertices).fill(false);

  distances[source] = 0;

  for (let count = 0; count < vertices; count++) {
    // Find unvisited vertex with minimum distance
    let u = -1;
    for (let v = 0; v < vertices; v++) {
      if (!visited[v] && (u === -1 || distances[v] < distances[u])) {
        u = v;
      }
    }

    if (distances[u] === Infinity) break;
    visited[u] = true;

    // Update distances to adjacent vertices
    for (let v = 0; v < vertices; v++) {
      if (!visited[v] && graph[u][v] > 0) {
        const newDist = distances[u] + graph[u][v];
        if (newDist < distances[v]) {
          distances[v] = newDist;
          previous[v] = u;
        }
      }
    }
  }

  return { distances, previous };
}

// Get shortest path between two vertices
function getShortestPath(previous: (number | null)[], source: number, target: number): number[] {
  const path: number[] = [];
  let current: number | null = target;

  while (current !== null) {
    path.unshift(current);
    current = previous[current];
  }

  return path[0] === source ? path : []; // Return empty if no path
}
\`\`\`

**4. Activity Selection Problem:**
\`\`\`typescript
interface Activity {
  start: number;
  finish: number;
  id: number;
}

function activitySelection(activities: Activity[]): Activity[] {
  // Sort by finish time (greedy choice)
  activities.sort((a, b) => a.finish - b.finish);
  
  const selected: Activity[] = [];
  let lastFinishTime = 0;

  for (const activity of activities) {
    if (activity.start >= lastFinishTime) {
      selected.push(activity);
      lastFinishTime = activity.finish;
    }
  }

  return selected;
}
\`\`\`

**5. Fractional Knapsack Problem:**
\`\`\`typescript
interface Item {
  weight: number;
  value: number;
  ratio: number;
}

function fractionalKnapsack(capacity: number, items: Item[]): number {
  // Sort by value-to-weight ratio (greedy choice)
  items.sort((a, b) => b.ratio - a.ratio);
  
  let totalValue = 0;
  let remainingCapacity = capacity;

  for (const item of items) {
    if (remainingCapacity >= item.weight) {
      // Take whole item
      totalValue += item.value;
      remainingCapacity -= item.weight;
    } else {
      // Take fraction of item
      totalValue += (remainingCapacity / item.weight) * item.value;
      break;
    }
  }

  return totalValue;
}
\`\`\`

**Advantages of Greedy Algorithms:**
- **Efficiency**: Usually O(n log n) or better
- **Simplicity**: Easy to understand and implement
- **Memory**: Low space complexity
- **Real-time**: Suitable for online algorithms

**Disadvantages:**
- **Not Always Optimal**: May not find global optimum
- **Problem-Specific**: Requires careful analysis
- **No Backtracking**: Cannot undo poor choices

**When to Use Greedy:**
1. **Optimization Problems**: Minimization/maximization
2. **Proven Optimality**: Mathematical proof exists
3. **Time Constraints**: Need fast solutions
4. **Approximation**: Good enough solutions acceptable

**Time Complexities:**
- **Kruskal's MST**: O(E log E)
- **Prim's MST**: O(V²) or O(E log V) with priority queue
- **Dijkstra's**: O(V²) or O(E log V) with priority queue
- **Activity Selection**: O(n log n)
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=HzeK7g8cD0Y',
        'https://www.youtube.com/watch?v=9TlHvipP5yA'
      ],
      externalLinks: [
        { title: 'Greedy Algorithms', url: 'https://www.geeksforgeeks.org/greedy-algorithms/' },
        { title: 'Greedy Algorithm - Programiz', url: 'https://www.programiz.com/dsa/greedy-algorithm' }
      ]
    }
  },
  {
    id: 'graphs-as-ds',
    name: 'Graphs as Data Structure',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit III',
    content: {
      introduction: 'Graphs as data structures provide a powerful framework for modeling complex relationships and solving real-world problems involving networks, connections, and dependencies.',
      definition: 'A graph data structure consists of vertices (nodes) connected by edges, providing a flexible way to represent and manipulate relationships between entities in various computational problems.',
      realWorldExample: 'Social networks like Facebook and LinkedIn, transportation networks like road maps and flight routes, computer networks and internet topology, and dependency graphs in software systems.',
      realWorldUse: 'Used in social media platforms for friend recommendations, GPS navigation systems for route planning, search engines for web crawling, and distributed systems for network topology management.',
      importance: 'Graphs enable efficient modeling of complex relationships, support powerful algorithms for optimization and analysis, and provide the foundation for many advanced computer science applications.',
      detailedExplanation: `
**Graph as Abstract Data Type:**

**Core Operations:**
1. **addVertex(v)**: Add a new vertex to the graph
2. **addEdge(u, v)**: Add an edge between vertices u and v
3. **removeVertex(v)**: Remove vertex and all its edges
4. **removeEdge(u, v)**: Remove edge between u and v
5. **hasVertex(v)**: Check if vertex exists
6. **hasEdge(u, v)**: Check if edge exists
7. **getNeighbors(v)**: Get all adjacent vertices
8. **getVertices()**: Get all vertices in the graph

**Complete Graph Implementation:**
\`\`\`typescript
class Graph<T> {
  private vertices: Map<T, Set<T>>;
  private directed: boolean;

  constructor(directed: boolean = false) {
    this.vertices = new Map();
    this.directed = directed;
  }

  // Add vertex to graph
  addVertex(vertex: T): void {
    if (!this.vertices.has(vertex)) {
      this.vertices.set(vertex, new Set());
    }
  }

  // Add edge between two vertices
  addEdge(source: T, destination: T): void {
    this.addVertex(source);
    this.addVertex(destination);
    
    this.vertices.get(source)!.add(destination);
    
    if (!this.directed) {
      this.vertices.get(destination)!.add(source);
    }
  }

  // Remove vertex and all its edges
  removeVertex(vertex: T): boolean {
    if (!this.vertices.has(vertex)) return false;

    // Remove all edges to this vertex
    for (const [v, neighbors] of this.vertices) {
      neighbors.delete(vertex);
    }

    // Remove the vertex itself
    this.vertices.delete(vertex);
    return true;
  }

  // Remove edge between two vertices
  removeEdge(source: T, destination: T): boolean {
    if (!this.vertices.has(source) || !this.vertices.has(destination)) {
      return false;
    }

    const removed = this.vertices.get(source)!.delete(destination);
    
    if (!this.directed) {
      this.vertices.get(destination)!.delete(source);
    }

    return removed;
  }

  // Check if vertex exists
  hasVertex(vertex: T): boolean {
    return this.vertices.has(vertex);
  }

  // Check if edge exists
  hasEdge(source: T, destination: T): boolean {
    return this.vertices.has(source) && 
           this.vertices.get(source)!.has(destination);
  }

  // Get all neighbors of a vertex
  getNeighbors(vertex: T): T[] {
    if (!this.vertices.has(vertex)) return [];
    return Array.from(this.vertices.get(vertex)!);
  }

  // Get all vertices
  getVertices(): T[] {
    return Array.from(this.vertices.keys());
  }

  // Get number of vertices
  getVertexCount(): number {
    return this.vertices.size;
  }

  // Get number of edges
  getEdgeCount(): number {
    let count = 0;
    for (const neighbors of this.vertices.values()) {
      count += neighbors.size;
    }
    return this.directed ? count : count / 2;
  }

  // Get degree of a vertex
  getDegree(vertex: T): number {
    if (!this.vertices.has(vertex)) return 0;
    return this.vertices.get(vertex)!.size;
  }

  // Check if graph is empty
  isEmpty(): boolean {
    return this.vertices.size === 0;
  }

  // Clear all vertices and edges
  clear(): void {
    this.vertices.clear();
  }

  // Get all edges
  getEdges(): Array<{source: T, destination: T}> {
    const edges: Array<{source: T, destination: T}> = [];
    
    for (const [source, neighbors] of this.vertices) {
      for (const destination of neighbors) {
        if (this.directed || source <= destination) {
          edges.push({ source, destination });
        }
      }
    }
    
    return edges;
  }

  // Display graph
  display(): void {
    console.log("Graph Structure:");
    for (const [vertex, neighbors] of this.vertices) {
      const neighborList = Array.from(neighbors).join(", ");
      console.log(\`\${vertex}: [\${neighborList}]\`);
    }
  }
}
\`\`\`

**Weighted Graph Implementation:**
\`\`\`typescript
interface WeightedEdge<T> {
  destination: T;
  weight: number;
}

class WeightedGraph<T> {
  private vertices: Map<T, WeightedEdge<T>[]>;
  private directed: boolean;

  constructor(directed: boolean = false) {
    this.vertices = new Map();
    this.directed = directed;
  }

  addVertex(vertex: T): void {
    if (!this.vertices.has(vertex)) {
      this.vertices.set(vertex, []);
    }
  }

  addEdge(source: T, destination: T, weight: number): void {
    this.addVertex(source);
    this.addVertex(destination);

    this.vertices.get(source)!.push({ destination, weight });

    if (!this.directed) {
      this.vertices.get(destination)!.push({ destination: source, weight });
    }
  }

  getWeight(source: T, destination: T): number | null {
    if (!this.vertices.has(source)) return null;

    const edge = this.vertices.get(source)!.find(e => e.destination === destination);
    return edge ? edge.weight : null;
  }

  getNeighbors(vertex: T): WeightedEdge<T>[] {
    return this.vertices.get(vertex) || [];
  }
}
\`\`\`

**Graph Algorithms Integration:**

**1. Connectivity Analysis:**
\`\`\`typescript
// Find connected components
findConnectedComponents(): T[][] {
  const visited = new Set<T>();
  const components: T[][] = [];

  for (const vertex of this.vertices.keys()) {
    if (!visited.has(vertex)) {
      const component: T[] = [];
      this.dfsComponent(vertex, visited, component);
      components.push(component);
    }
  }

  return components;
}

private dfsComponent(vertex: T, visited: Set<T>, component: T[]): void {
  visited.add(vertex);
  component.push(vertex);

  for (const neighbor of this.vertices.get(vertex)!) {
    if (!visited.has(neighbor)) {
      this.dfsComponent(neighbor, visited, component);
    }
  }
}
\`\`\`

**2. Path Finding:**
\`\`\`typescript
// Find path between two vertices using BFS
findPath(start: T, end: T): T[] {
  if (!this.hasVertex(start) || !this.hasVertex(end)) return [];

  const visited = new Set<T>();
  const queue: Array<{vertex: T, path: T[]}> = [{vertex: start, path: [start]}];
  visited.add(start);

  while (queue.length > 0) {
    const {vertex, path} = queue.shift()!;

    if (vertex === end) return path;

    for (const neighbor of this.vertices.get(vertex)!) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push({vertex: neighbor, path: [...path, neighbor]});
      }
    }
  }

  return []; // No path found
}
\`\`\`

**Applications in Software Systems:**

**1. Social Network Analysis:**
\`\`\`typescript
class SocialNetwork extends Graph<string> {
  constructor() {
    super(false); // Undirected graph for friendships
  }

  addFriendship(person1: string, person2: string): void {
    this.addEdge(person1, person2);
  }

  getFriends(person: string): string[] {
    return this.getNeighbors(person);
  }

  getMutualFriends(person1: string, person2: string): string[] {
    const friends1 = new Set(this.getFriends(person1));
    const friends2 = this.getFriends(person2);
    
    return friends2.filter(friend => friends1.has(friend));
  }

  getDegreesOfSeparation(person1: string, person2: string): number {
    const path = this.findPath(person1, person2);
    return path.length > 0 ? path.length - 1 : -1;
  }
}
\`\`\`

**2. Dependency Management:**
\`\`\`typescript
class DependencyGraph extends Graph<string> {
  constructor() {
    super(true); // Directed graph for dependencies
  }

  addDependency(dependent: string, dependency: string): void {
    this.addEdge(dependency, dependent);
  }

  getInstallOrder(): string[] {
    // Topological sort for installation order
    const visited = new Set<string>();
    const stack: string[] = [];

    for (const vertex of this.getVertices()) {
      if (!visited.has(vertex)) {
        this.topologicalSortHelper(vertex, visited, stack);
      }
    }

    return stack.reverse();
  }

  private topologicalSortHelper(vertex: string, visited: Set<string>, stack: string[]): void {
    visited.add(vertex);

    for (const neighbor of this.getNeighbors(vertex)) {
      if (!visited.has(neighbor)) {
        this.topologicalSortHelper(neighbor, visited, stack);
      }
    }

    stack.push(vertex);
  }
}
\`\`\`

**Performance Characteristics:**
- **Space Complexity**: O(V + E)
- **Add Vertex**: O(1)
- **Add Edge**: O(1)
- **Remove Vertex**: O(V + E)
- **Remove Edge**: O(degree)
- **Check Edge**: O(degree)

**Advantages:**
- **Flexibility**: Models complex relationships
- **Efficiency**: Optimal for sparse graphs
- **Algorithms**: Rich set of graph algorithms
- **Scalability**: Handles large networks

**Use Cases:**
1. **Network Analysis**: Social networks, computer networks
2. **Route Planning**: GPS navigation, logistics
3. **Dependency Resolution**: Package managers, build systems
4. **Recommendation Systems**: Content and product recommendations
5. **Game Development**: Pathfinding, AI decision trees
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=gXgEDyodOJU',
        'https://www.youtube.com/watch?v=AfYqN3fGapc'
      ],
      externalLinks: [
        { title: 'Graph Data Structure and Algorithms', url: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/' },
        { title: 'Graph Data Structure - Programiz', url: 'https://www.programiz.com/dsa/graph' }
      ]
    }
  }
]; 