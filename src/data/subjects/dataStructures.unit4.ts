import { Topic } from '../syllabus';

export const dataStructuresUnit4: Topic[] = [
  // Searching
  {
    id: 'searching-introduction-notation',
    name: 'Searching: Introduction and Notation',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit IV',
    content: {
      introduction: 'Searching is a fundamental operation in computer science that involves finding a specific element or determining its absence in a collection of data.',
      definition: 'Searching refers to the process of finding a particular element in a data structure. It is one of the most common operations performed on data collections.',
      realWorldExample: 'Finding a contact in your phone book, searching for a book in a library catalog, looking up a word in a dictionary, or finding a specific file on your computer.',
      realWorldUse: 'Used in database queries, web search engines, file systems, autocomplete features, and any application that needs to locate specific information quickly.',
      importance: 'Efficient searching algorithms are crucial for application performance, user experience, and system scalability, especially when dealing with large datasets.',
      detailedExplanation: `
## Basic Concepts:
- **Search Problem**: Given a collection of elements and a target, find the target's location or determine it doesn't exist
- **Key Notations**: n (collection size), key (target element), comparisons (primary cost metric)
- **Algorithm Categories**: Linear search O(n), Binary search O(log n), Hash-based O(1) average

## Performance Metrics:
- **Time Complexity**: Number of operations relative to input size
- **Space Complexity**: Additional memory required
- **Comparison Count**: Primary measure of search efficiency

## Common Search Types:
1. **Sequential Search**: Check elements one by one
2. **Binary Search**: Divide and conquer on sorted data
3. **Hash Search**: Direct access using hash functions
4. **Tree Search**: Navigate tree structures
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=P3YID7liBug',
        'https://www.youtube.com/watch?v=MFhxShGxHWc'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Searching Algorithms', url: 'https://www.geeksforgeeks.org/searching-algorithms/' },
        { title: 'Programiz: Search Algorithms', url: 'https://www.programiz.com/dsa/linear-search' }
      ]
    }
  },
  {
    id: 'sequential-search',
    name: 'Sequential Search',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit IV',
    content: {
      introduction: 'Sequential search, also known as linear search, is the simplest searching algorithm that examines each element in a collection one by one until the target is found.',
      definition: 'Sequential search is a method for finding a target value within a list by checking each element sequentially until a match is found or the entire list has been searched.',
      realWorldExample: 'Looking through a stack of papers one by one to find a specific document, checking each book on a shelf to find a particular title.',
      realWorldUse: 'Used in unsorted data collections, small datasets where sorting overhead isn\'t justified, and situations where data is frequently modified.',
      importance: 'Sequential search works on any type of data organization and serves as a baseline for comparing other search algorithms.',
      detailedExplanation: `
**Algorithm Steps:**
1. Start from the first element
2. Compare each element with the target
3. If match found, return position
4. If end reached without match, return "not found"

**Time Complexity:**
- **Best Case**: O(1) - target at first position
- **Average Case**: O(n/2) - target at middle on average
- **Worst Case**: O(n) - target at end or not present

**Space Complexity**: O(1) - uses constant extra space

**Implementation:**
\`\`\`typescript
function sequentialSearch<T>(arr: T[], target: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Found at index i
    }
  }
  return -1; // Not found
}
\`\`\`

**Advantages:**
- Simple to implement and understand
- Works on unsorted data
- No preprocessing required
- Memory efficient

**Disadvantages:**
- Inefficient for large datasets
- Linear time complexity
- No early termination optimization
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=C46QfTjVCNU',
        'https://www.youtube.com/watch?v=246V51AWwZM'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Linear Search', url: 'https://www.geeksforgeeks.org/linear-search/' },
        { title: 'Programiz: Linear Search Algorithm', url: 'https://www.programiz.com/dsa/linear-search' }
      ]
    }
  },
  {
    id: 'binary-search',
    name: 'Binary Search',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit IV',
    content: {
      introduction: 'Binary search is an efficient algorithm for finding an item from a sorted list by repeatedly dividing the search interval in half.',
      definition: 'Binary search is a divide-and-conquer algorithm that finds the position of a target value within a sorted array by comparing the target with the middle element.',
      realWorldExample: 'Looking up a word in a dictionary by opening to the middle and deciding whether to search the left or right half.',
      realWorldUse: 'Used in database indexing, search engines, autocomplete systems, and any application requiring fast searches in sorted data.',
      importance: 'Binary search provides logarithmic time complexity, making it essential for efficient searching in large sorted datasets.',
      detailedExplanation: `
**Prerequisites:**
- Data must be sorted
- Random access to elements (arrays work best)

**Algorithm Steps:**
1. Compare target with middle element
2. If equal, return position
3. If target < middle, search left half
4. If target > middle, search right half
5. Repeat until found or search space empty

**Time Complexity:**
- **All Cases**: O(log n) - eliminates half the search space each iteration
- **Maximum Comparisons**: ⌊log₂(n)⌋ + 1

**Space Complexity**: O(1) iterative, O(log n) recursive

**Implementation:**
\`\`\`typescript
function binarySearch<T>(arr: T[], target: T): number {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1; // Not found
}
\`\`\`

**Advantages:**
- Logarithmic time complexity
- Efficient for large datasets
- Predictable performance

**Disadvantages:**
- Requires sorted data
- Not suitable for frequently changing data
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=P3YID7liBug',
        'https://www.youtube.com/watch?v=MFhxShGxHWc'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Binary Search', url: 'https://www.geeksforgeeks.org/binary-search/' },
        { title: 'Programiz: Binary Search Algorithm', url: 'https://www.programiz.com/dsa/binary-search' }
      ]
    }
  },
  {
    id: 'comparison-of-methods',
    name: 'Comparison of Methods',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit IV',
    content: {
      introduction: 'Understanding the trade-offs between different searching methods is crucial for selecting the most appropriate algorithm based on specific requirements.',
      definition: 'Comparison of searching methods involves analyzing various algorithms based on time complexity, space complexity, prerequisites, and practical considerations.',
      realWorldExample: 'Choosing between browsing through a phone book page by page versus using the alphabetical index.',
      realWorldUse: 'Used in algorithm selection for software development, database design decisions, and system optimization.',
      importance: 'Proper algorithm selection can dramatically impact application performance, making comparison analysis essential for efficient system design.',
      detailedExplanation: `
**Comprehensive Comparison:**

| Algorithm | Time Complexity | Space | Prerequisites | Best Use Case |
|-----------|----------------|-------|---------------|---------------|
| Sequential | O(n) | O(1) | None | Small/unsorted data |
| Binary | O(log n) | O(1) | Sorted data | Large sorted datasets |
| Hash | O(1) avg | O(n) | Hash function | Frequent searches |

**Selection Guidelines:**

**Choose Sequential Search when:**
- Data size < 100 elements
- Data is unsorted
- Simplicity is prioritized
- Memory is extremely limited

**Choose Binary Search when:**
- Data size > 1000 elements
- Data is sorted or can be pre-sorted
- Search operations are frequent
- Predictable performance required

**Choose Hash-based Search when:**
- Very frequent search operations
- Average O(1) performance critical
- Memory is abundant
- Good hash distribution available

**Performance Analysis:**
For n = 1,000,000:
- Sequential: ~500,000 comparisons average
- Binary: ~20 comparisons maximum
- Hash: ~1 comparison average

**Decision Matrix:**
Consider data size, sort status, search frequency, memory constraints, and performance requirements when selecting algorithms.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=MFhxShGxHWc',
        'https://www.youtube.com/watch?v=P3YID7liBug'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Comparison of Searching Algorithms', url: 'https://www.geeksforgeeks.org/comparison-searching-algorithms/' },
        { title: 'Algorithm Analysis', url: 'https://www.tutorialspoint.com/data_structures_algorithms/algorithms_analysis.htm' }
      ]
    }
  },

  // Sorting
  {
    id: 'sorting-introduction-notation',
    name: 'Sorting: Introduction and Notation',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit IV',
    content: {
      introduction: 'Sorting is one of the most fundamental operations in computer science, involving the arrangement of data elements in a specific order.',
      definition: 'Sorting is the process of arranging data elements in a particular order, typically ascending or descending, based on key values.',
      realWorldExample: 'Arranging books alphabetically on a shelf, organizing files by date, sorting students by grades.',
      realWorldUse: 'Used in database management, search engines for ranking results, operating systems for process scheduling.',
      importance: 'Sorting enables efficient searching, improves data presentation, and serves as preprocessing for many algorithms.',
      detailedExplanation: `
**Sorting Problem Definition:**
- **Input**: Sequence of n elements (a₁, a₂, ..., aₙ)
- **Output**: Permutation (a'₁, a'₂, ..., a'ₙ) where a'₁ ≤ a'₂ ≤ ... ≤ a'ₙ

**Key Classifications:**

**1. Stability:**
- **Stable**: Maintains relative order of equal elements
- **Unstable**: May change relative order of equal elements

**2. Memory Usage:**
- **In-place**: Uses O(1) extra memory
- **Out-of-place**: Requires additional memory

**3. Adaptivity:**
- **Adaptive**: Performance improves on partially sorted data
- **Non-adaptive**: Same performance regardless of input order

**Algorithm Categories:**
- **Simple Sorts**: O(n²) - Bubble, Selection, Insertion
- **Efficient Sorts**: O(n log n) - Merge, Heap, Quick
- **Specialized Sorts**: O(n) - Counting, Radix, Bucket

**Performance Metrics:**
- **Time Complexity**: Operations relative to input size
- **Space Complexity**: Additional memory required
- **Comparison Count**: Primary efficiency measure
- **Stability**: Preservation of equal element order

**Common Notations:**
- n: Number of elements
- A[i]: Element at index i
- swap(i,j): Exchange elements at positions i and j
- key(x): Comparison key for element x
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=kPRA0W1kECg',
        'https://www.youtube.com/watch?v=WaNLJf8xzC4'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Sorting Algorithms', url: 'https://www.geeksforgeeks.org/sorting-algorithms/' },
        { title: 'Programiz: Sorting Algorithms', url: 'https://www.programiz.com/dsa/sorting-algorithm' }
      ]
    }
  },
  {
    id: 'insertion-sort',
    name: 'Insertion Sort',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit IV',
    content: {
      introduction: 'Insertion sort builds the final sorted array one element at a time, similar to how you might sort playing cards in your hands.',
      definition: 'Insertion sort iteratively takes elements from the unsorted portion and inserts them into their correct position in the sorted portion.',
      realWorldExample: 'Sorting playing cards by picking up cards one by one and inserting each into its proper position.',
      realWorldUse: 'Used in small datasets, as a subroutine in hybrid algorithms, and for online sorting where data arrives continuously.',
      importance: 'Insertion sort is adaptive, stable, in-place, and performs well on small or nearly sorted datasets.',
      detailedExplanation: `
**Algorithm Steps:**
1. Start with second element (first is trivially sorted)
2. Compare current element with sorted portion
3. Shift larger elements right to make space
4. Insert current element in correct position
5. Repeat until all elements processed

**Time Complexity:**
- **Best Case**: O(n) - already sorted array
- **Average Case**: O(n²) - random order
- **Worst Case**: O(n²) - reverse sorted

**Space Complexity**: O(1) - in-place algorithm

**Implementation:**
\`\`\`typescript
function insertionSort<T>(arr: T[]): T[] {
  const result = [...arr];
  
  for (let i = 1; i < result.length; i++) {
    const key = result[i];
    let j = i - 1;
    
    // Move elements greater than key one position ahead
    while (j >= 0 && result[j] > key) {
      result[j + 1] = result[j];
      j--;
    }
    
    result[j + 1] = key;
  }
  
  return result;
}
\`\`\`

**Characteristics:**
- **Stable**: Yes - maintains relative order
- **In-place**: Yes - O(1) extra space
- **Adaptive**: Yes - efficient on nearly sorted data
- **Online**: Yes - can sort data as it arrives

**Advantages:**
- Simple implementation
- Efficient for small datasets
- Adaptive to input order
- Stable sorting
- In-place algorithm

**Disadvantages:**
- Quadratic time complexity
- Inefficient for large datasets
- Many element movements required

**When to Use:**
- Small datasets (n < 50)
- Nearly sorted data
- Online algorithms
- As part of hybrid sorting algorithms
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=JU767SDMDvA',
        'https://www.youtube.com/watch?v=i-SKeOcBwko'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Insertion Sort', url: 'https://www.geeksforgeeks.org/insertion-sort/' },
        { title: 'Programiz: Insertion Sort Algorithm', url: 'https://www.programiz.com/dsa/insertion-sort' }
      ]
    }
  },
  {
    id: 'selection-sort',
    name: 'Selection Sort',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit IV',
    content: {
      introduction: 'Selection sort divides the array into sorted and unsorted portions, repeatedly selecting the minimum element from the unsorted portion.',
      definition: 'Selection sort finds the minimum element from the unsorted portion and swaps it with the first element of the unsorted portion.',
      realWorldExample: 'Selecting the shortest person from a group and placing them at the front of a line, then selecting the next shortest.',
      realWorldUse: 'Used in educational contexts, situations where memory writes are expensive, and embedded systems where simplicity is valued.',
      importance: 'Selection sort demonstrates fundamental sorting principles and has predictable performance regardless of input.',
      detailedExplanation: `
**Algorithm Steps:**
1. Find minimum element in unsorted portion
2. Swap it with first element of unsorted portion
3. Move boundary between sorted/unsorted one position right
4. Repeat until entire array is sorted

**Time Complexity:**
- **All Cases**: O(n²) - always performs same number of comparisons
- **Comparisons**: n(n-1)/2 always
- **Swaps**: At most n-1

**Space Complexity**: O(1) - in-place algorithm

**Implementation:**
\`\`\`typescript
function selectionSort<T>(arr: T[]): T[] {
  const result = [...arr];
  const n = result.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    
    // Find minimum element in unsorted portion
    for (let j = i + 1; j < n; j++) {
      if (result[j] < result[minIndex]) {
        minIndex = j;
      }
    }
    
    // Swap minimum with first unsorted element
    if (minIndex !== i) {
      [result[i], result[minIndex]] = [result[minIndex], result[i]];
    }
  }
  
  return result;
}
\`\`\`

**Characteristics:**
- **Stable**: No - may change relative order of equal elements
- **In-place**: Yes - O(1) extra space
- **Adaptive**: No - same performance regardless of input
- **Consistent**: Always O(n²) performance

**Advantages:**
- Simple implementation
- In-place sorting
- Consistent performance
- Minimum number of swaps
- No additional data structures needed

**Disadvantages:**
- Quadratic time complexity in all cases
- Not adaptive to input order
- Not stable
- Many comparisons required

**When to Use:**
- Educational purposes
- Memory-constrained environments
- When cost of swapping is high
- Small datasets where simplicity matters
- When minimizing number of swaps is important
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=g-PGLbMth_g',
        'https://www.youtube.com/watch?v=xWBP4lzkoyM'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Selection Sort', url: 'https://www.geeksforgeeks.org/selection-sort/' },
        { title: 'Programiz: Selection Sort Algorithm', url: 'https://www.programiz.com/dsa/selection-sort' }
      ]
    }
  },
  {
    id: 'shell-sort',
    name: 'Shell Sort',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit IV',
    content: {
      introduction: 'Shell sort is an optimization of insertion sort that allows exchange of items that are far apart, reducing movements needed.',
      definition: 'Shell sort, also known as diminishing increment sort, sorts elements at specific intervals (gaps) and gradually reduces the gap to 1.',
      realWorldExample: 'Organizing books by first roughly sorting every 4th book, then every 2nd book, finally sorting adjacent books.',
      realWorldUse: 'Used in embedded systems, as subroutine in hybrid algorithms, for medium-sized datasets needing reasonable performance.',
      importance: 'Shell sort bridges the gap between simple O(n²) algorithms and complex O(n log n) algorithms with better performance than insertion sort.',
      detailedExplanation: `
**Algorithm Concept:**
Shell sort improves insertion sort by:
1. Starting with large gap between compared elements
2. Gradually reducing the gap
3. Ending with gap = 1 (regular insertion sort)

**Gap Sequences:**
The choice of gap sequence affects performance significantly.

**Shell's Original Sequence: n/2, n/4, n/8, ..., 1**
\`\`\`typescript
function shellSort<T>(arr: T[]): T[] {
  const result = [...arr];
  const n = result.length;
  
  // Start with big gap, then reduce
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Perform gapped insertion sort
    for (let i = gap; i < n; i++) {
      const temp = result[i];
      let j = i;
      
      // Shift gap-sorted elements until correct location found
      while (j >= gap && result[j - gap] > temp) {
        result[j] = result[j - gap];
        j -= gap;
      }
      
      result[j] = temp;
    }
  }
  
  return result;
}
\`\`\`

**Time Complexity:**
- **Best Case**: O(n log n) with good gap sequences
- **Average Case**: O(n^1.25) to O(n^1.5) depending on gap sequence
- **Worst Case**: O(n²) with poor gap sequences

**Space Complexity**: O(1) - in-place algorithm

**Characteristics:**
- **Stable**: No - gap-based comparisons can change relative order
- **In-place**: Yes - constant extra space
- **Adaptive**: Somewhat - benefits from partial ordering

**Advantages:**
- Better than insertion sort for medium datasets
- Simple to implement
- In-place sorting
- No worst-case O(n²) with good gap sequences

**Disadvantages:**
- Gap sequence choice affects performance
- Not stable
- Complex analysis of time complexity

**When to Use:**
- Medium-sized datasets (100-5000 elements)
- When simplicity is important but O(n²) is too slow
- Embedded systems with memory constraints
- As fallback in hybrid algorithms
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=SHcPqUe2GZM',
        'https://www.youtube.com/watch?v=ddeLSDsYVp8'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Shell Sort', url: 'https://www.geeksforgeeks.org/shellsort/' },
        { title: 'Programiz: Shell Sort Algorithm', url: 'https://www.programiz.com/dsa/shell-sort' }
      ]
    }
  },
  {
    id: 'divide-and-conquer',
    name: 'Divide and Conquer',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit IV',
    content: {
      introduction: 'Divide and conquer is a fundamental algorithmic paradigm that solves problems by breaking them into smaller subproblems.',
      definition: 'Divide and conquer works by recursively breaking down a problem into subproblems, solving them, and combining solutions.',
      realWorldExample: 'Organizing a large event by dividing tasks among teams, each handling smaller parts independently, then coordinating results.',
      realWorldUse: 'Used in merge sort, quick sort, binary search, fast Fourier transform, and many optimization algorithms.',
      importance: 'Divide and conquer enables efficient solutions to complex problems, often achieving better time complexity than naive approaches.',
      detailedExplanation: `
**Three Steps:**
1. **Divide**: Break problem into smaller subproblems
2. **Conquer**: Solve subproblems recursively
3. **Combine**: Merge solutions to solve original problem

**General Template:**
\`\`\`typescript
function divideAndConquer<T, R>(
  problem: T,
  isBaseCase: (p: T) => boolean,
  solveBaseCase: (p: T) => R,
  divide: (p: T) => T[],
  combine: (solutions: R[]) => R
): R {
  if (isBaseCase(problem)) {
    return solveBaseCase(problem);
  }
  
  const subproblems = divide(problem);
  const solutions = subproblems.map(subproblem => 
    divideAndConquer(subproblem, isBaseCase, solveBaseCase, divide, combine)
  );
  
  return combine(solutions);
}
\`\`\`

**Applications in Sorting:**

**Merge Sort Example:**
\`\`\`typescript
function mergeSort<T>(arr: T[]): T[] {
  // Base case
  if (arr.length <= 1) return [...arr];
  
  // Divide
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  
  // Conquer
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  
  // Combine
  return merge(sortedLeft, sortedRight);
}
\`\`\`

**Time Complexity Analysis:**
Using Master Theorem: T(n) = aT(n/b) + f(n)
- For merge sort: T(n) = 2T(n/2) + O(n) = O(n log n)

**Advantages:**
- Often achieves optimal time complexity
- Naturally parallelizable
- Elegant recursive solutions
- Breaks complex problems into manageable parts

**Disadvantages:**
- Recursion overhead
- May require additional memory
- Not always intuitive to apply

**Common Applications:**
- Sorting algorithms (merge sort, quick sort)
- Searching (binary search)
- Mathematical computations (matrix multiplication)
- Geometric algorithms
- Graph algorithms
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=JSceec-wEyw',
        'https://www.youtube.com/watch?v=2YLsKgO_tO4'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Divide and Conquer', url: 'https://www.geeksforgeeks.org/divide-and-conquer-algorithm-introduction/' },
        { title: 'Khan Academy: Divide and Conquer', url: 'https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms' }
      ]
    }
  },
  {
    id: 'merge-sort',
    name: 'Merge Sort',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit IV',
    content: {
      introduction: 'Merge sort is a stable, divide-and-conquer sorting algorithm that consistently delivers O(n log n) performance by recursively dividing arrays and merging sorted subarrays.',
      definition: 'Merge sort divides the array into two halves, recursively sorts both halves, and then merges the sorted halves to produce the final sorted array.',
      realWorldExample: 'Organizing two sorted piles of papers by repeatedly taking the smaller top paper from either pile, similar to merging two sorted lists.',
      realWorldUse: 'Used in external sorting for large datasets, stable sorting requirements, parallel processing systems, and as the standard library sort in many programming languages.',
      importance: 'Merge sort guarantees O(n log n) performance in all cases, maintains stability, and is highly parallelizable, making it ideal for large-scale data processing.',
      detailedExplanation: `
**Algorithm Steps:**
1. **Divide**: Split array into two halves
2. **Conquer**: Recursively sort both halves
3. **Combine**: Merge the sorted halves

**Time Complexity:**
- **All Cases**: O(n log n) - consistent performance
- **Recurrence**: T(n) = 2T(n/2) + O(n)

**Space Complexity**: O(n) - requires additional array for merging

**Complete Implementation:**
\`\`\`typescript
function mergeSort<T>(arr: T[]): T[] {
  if (arr.length <= 1) return [...arr];
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge<T>(left: T[], right: T[]): T[] {
  const result: T[] = [];
  let i = 0, j = 0;
  
  // Merge elements in sorted order
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  
  // Add remaining elements
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  
  return result;
}
\`\`\`

**Characteristics:**
- **Stable**: Yes - maintains relative order of equal elements
- **In-place**: No - requires O(n) extra space
- **Adaptive**: No - same performance regardless of input
- **Parallelizable**: Yes - naturally parallelizable

**Advantages:**
- Guaranteed O(n log n) performance
- Stable sorting algorithm
- Predictable behavior
- Excellent for large datasets
- Parallelizable

**Disadvantages:**
- Requires O(n) extra space
- Not adaptive to input order
- Overhead for small arrays

**When to Use:**
- Large datasets requiring guaranteed performance
- When stability is required
- External sorting (data doesn't fit in memory)
- Parallel processing environments
- When worst-case performance matters
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=4VqmGXwpLqc',
        'https://www.youtube.com/watch?v=TzeBrDU-JaY'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Merge Sort', url: 'https://www.geeksforgeeks.org/merge-sort/' },
        { title: 'Programiz: Merge Sort Algorithm', url: 'https://www.programiz.com/dsa/merge-sort' }
      ]
    }
  },
  {
    id: 'quick-sort',
    name: 'Quick Sort',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit IV',
    content: {
      introduction: 'Quick sort is a highly efficient divide-and-conquer sorting algorithm that works by selecting a pivot element and partitioning the array around it.',
      definition: 'Quick sort selects a pivot element, partitions the array so that elements smaller than the pivot come before it and larger elements come after, then recursively sorts the subarrays.',
      realWorldExample: 'Organizing people in a line by height: pick someone as reference, move shorter people to the left, taller to the right, then repeat for each group.',
      realWorldUse: 'Used as the default sorting algorithm in many programming languages, database systems, and applications requiring fast average-case performance.',
      importance: 'Quick sort provides excellent average-case performance O(n log n), is in-place, and has good cache locality, making it one of the most widely used sorting algorithms.',
      detailedExplanation: `
**Algorithm Steps:**
1. **Choose Pivot**: Select an element as pivot
2. **Partition**: Rearrange array so elements < pivot are left, > pivot are right
3. **Recursively Sort**: Apply quicksort to left and right subarrays

**Time Complexity:**
- **Best Case**: O(n log n) - pivot divides array evenly
- **Average Case**: O(n log n) - random pivot selection
- **Worst Case**: O(n²) - pivot is always smallest/largest

**Space Complexity**: O(log n) average for recursion stack

**Implementation with Lomuto Partition:**
\`\`\`typescript
function quickSort<T>(arr: T[], low: number = 0, high: number = arr.length - 1): T[] {
  const result = [...arr];
  quickSortHelper(result, low, high);
  return result;
}

function quickSortHelper<T>(arr: T[], low: number, high: number): void {
  if (low < high) {
    // Partition and get pivot index
    const pivotIndex = partition(arr, low, high);
    
    // Recursively sort elements before and after partition
    quickSortHelper(arr, low, pivotIndex - 1);
    quickSortHelper(arr, pivotIndex + 1, high);
  }
}

function partition<T>(arr: T[], low: number, high: number): number {
  const pivot = arr[high]; // Choose last element as pivot
  let i = low - 1; // Index of smaller element
  
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}
\`\`\`

**Pivot Selection Strategies:**
1. **First Element**: Simple but poor for sorted data
2. **Last Element**: Most common implementation
3. **Random**: Good average performance
4. **Median-of-Three**: Choose median of first, middle, last

**Optimizations:**
- **Randomized Pivot**: Avoid worst-case on sorted data
- **Hybrid Approach**: Switch to insertion sort for small subarrays
- **Three-Way Partitioning**: Handle duplicate elements efficiently

**Characteristics:**
- **Stable**: No - may change relative order of equal elements
- **In-place**: Yes - O(log n) space for recursion
- **Adaptive**: Somewhat - performance varies with input

**Advantages:**
- Excellent average-case performance
- In-place sorting
- Good cache locality
- Widely implemented and optimized

**Disadvantages:**
- Worst-case O(n²) performance
- Not stable
- Performance depends on pivot selection

**When to Use:**
- General-purpose sorting
- When average-case performance is important
- Memory-constrained environments
- When in-place sorting is required
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Hoixgm4-P4M',
        'https://www.youtube.com/watch?v=PgBzjlCcFvc'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Quick Sort', url: 'https://www.geeksforgeeks.org/quick-sort/' },
        { title: 'Programiz: Quick Sort Algorithm', url: 'https://www.programiz.com/dsa/quick-sort' }
      ]
    }
  },
  {
    id: 'heap-sort',
    name: 'Heap Sort',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit IV',
    content: {
      introduction: 'Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure to sort elements, providing guaranteed O(n log n) performance.',
      definition: 'Heap sort works by building a max heap from the input data, then repeatedly extracting the maximum element and placing it at the end of the sorted portion.',
      realWorldExample: 'Organizing a tournament where the winner (maximum) is determined and removed, then reorganizing the remaining participants to find the next winner.',
      realWorldUse: 'Used in systems requiring guaranteed performance bounds, embedded systems with memory constraints, and priority queue implementations.',
      importance: 'Heap sort provides guaranteed O(n log n) performance with O(1) space complexity, making it valuable when memory is limited and consistent performance is required.',
      detailedExplanation: `
## Algorithm Steps:
1. **Build Max Heap**: Convert array into max heap structure
2. **Extract Maximum**: Move root (maximum) to end of array  
3. **Heapify**: Restore heap property for remaining elements
4. **Repeat**: Continue until all elements are sorted

## Time Complexity:
- **All Cases**: O(n log n) - guaranteed performance
- **Build Heap**: O(n)
- **Extract Max**: O(log n) × n times

## Space Complexity: 
O(1) - in-place algorithm

## Complete Implementation:

\`\`\`typescript
function heapSort<T>(arr: T[]): T[] {
  const result = [...arr];
  const n = result.length;
  
  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(result, n, i);
  }
  
  // Extract elements from heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    [result[0], result[i]] = [result[i], result[0]];
    
    // Call heapify on the reduced heap
    heapify(result, i, 0);
  }
  
  return result;
}

function heapify<T>(arr: T[], n: number, i: number): void {
  let largest = i; // Initialize largest as root
  const left = 2 * i + 1; // Left child
  const right = 2 * i + 2; // Right child
  
  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  
  // If right child is larger than largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  
  // If largest is not root
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    
    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}
\`\`\`

## Heap Properties:
- **Complete Binary Tree**: All levels filled except possibly last
- **Max Heap Property**: Parent ≥ children  
- **Array Representation**: Parent at i, children at 2i+1 and 2i+2

## Characteristics:
- **Stable**: No - may change relative order of equal elements
- **In-place**: Yes - O(1) extra space
- **Adaptive**: No - same performance regardless of input

## Advantages:
- Guaranteed O(n log n) performance
- In-place sorting
- No worst-case degradation
- Memory efficient
- Simple implementation

## Disadvantages:
- Not stable
- Poor cache locality
- Not adaptive
- Slower than quicksort on average

## When to Use:
- When guaranteed O(n log n) performance is required
- Memory-constrained environments
- Real-time systems with strict timing requirements
- When worst-case performance matters more than average case
- Embedded systems

## Comparison with Other O(n log n) Sorts:
- **vs Merge Sort**: Uses less memory but not stable
- **vs Quick Sort**: Guaranteed performance but slower on average
- **vs Tim Sort**: Simpler but not adaptive
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2DmK_H7IdTo',
        'https://www.youtube.com/watch?v=MtQL_ll5KhQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Heap Sort', url: 'https://www.geeksforgeeks.org/heap-sort/' },
        { title: 'Programiz: Heap Sort Algorithm', url: 'https://www.programiz.com/dsa/heap-sort' }
      ]
    }
  },
  {
    id: 'comparison-of-sorting-methods',
    name: 'Comparison of Sorting Methods',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit IV',
    content: {
      introduction: 'Understanding the trade-offs between different sorting algorithms is crucial for selecting the most appropriate method based on specific requirements and constraints.',
      definition: 'Comparison of sorting methods involves analyzing various algorithms based on time complexity, space complexity, stability, adaptivity, and practical performance characteristics.',
      realWorldExample: 'Choosing between different organizational methods for a library: alphabetical sorting for browsing vs. categorized sorting for specific searches.',
      realWorldUse: 'Used in algorithm selection for software development, database design, system optimization, and performance-critical applications.',
      importance: 'Proper sorting algorithm selection can dramatically impact application performance, memory usage, and system scalability, making comparative analysis essential.',
      detailedExplanation: `
**Comprehensive Comparison Table:**

| Algorithm | Best Case | Average Case | Worst Case | Space | Stable | In-Place | Adaptive |
|-----------|-----------|--------------|------------|-------|--------|----------|----------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | Yes | Yes | Yes |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | No | Yes | No |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | Yes | Yes | Yes |
| Shell Sort | O(n log n) | O(n^1.25) | O(n²) | O(1) | No | Yes | Yes |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes | No | No |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | No | Yes | No |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) | No | Yes | No |

**Selection Guidelines:**

**Choose Simple Sorts (O(n²)) when:**
- **Small datasets** (n < 50)
- **Educational purposes**
- **Memory extremely limited**
- **Simplicity is prioritized**

**Choose Merge Sort when:**
- **Stability required**
- **Guaranteed O(n log n) performance needed**
- **External sorting** (large datasets)
- **Parallel processing** available

**Choose Quick Sort when:**
- **Average-case performance** is priority
- **Memory is limited** (in-place sorting)
- **General-purpose sorting**
- **Cache locality** is important

**Choose Heap Sort when:**
- **Guaranteed O(n log n)** with **O(1) space**
- **Real-time systems** with strict constraints
- **Worst-case performance** matters
- **Memory is very limited**

**Performance Analysis for Different Dataset Sizes:**

**Small Arrays (n < 50):**
- **Winner**: Insertion Sort
- **Reason**: Low overhead, adaptive behavior

**Medium Arrays (50 < n < 10,000):**
- **Winner**: Quick Sort
- **Reason**: Good average performance, cache-friendly

**Large Arrays (n > 10,000):**
- **Winner**: Merge Sort or Quick Sort
- **Reason**: O(n log n) performance, parallelizable

**Practical Considerations:**

**Memory Constraints:**
- **Severe**: Heap Sort, Selection Sort
- **Moderate**: Quick Sort, Shell Sort
- **Abundant**: Merge Sort

**Stability Requirements:**
- **Required**: Merge Sort, Insertion Sort
- **Not Required**: Quick Sort, Heap Sort

**Input Characteristics:**
- **Nearly Sorted**: Insertion Sort, Shell Sort
- **Random**: Quick Sort, Merge Sort
- **Reverse Sorted**: Merge Sort, Heap Sort

**Hybrid Approaches:**
Many real-world implementations use hybrid algorithms:

\`\`\`typescript
function hybridSort<T>(arr: T[]): T[] {
  if (arr.length < 10) {
    return insertionSort(arr); // Simple sort for small arrays
  } else if (arr.length < 1000) {
    return quickSort(arr); // Quick sort for medium arrays
  } else {
    return mergeSort(arr); // Merge sort for large arrays
  }
}
\`\`\`

**Industry Examples:**
- **Java**: TimSort (hybrid merge sort + insertion sort)
- **Python**: TimSort (adaptive, stable)
- **C++ STL**: Introsort (hybrid quick sort + heap sort + insertion sort)
- **JavaScript V8**: TimSort for stable sort, quick sort for unstable

**Decision Matrix:**
Consider these factors when choosing:
1. **Dataset size**
2. **Memory constraints**
3. **Stability requirements**
4. **Input characteristics**
5. **Performance requirements**
6. **Implementation complexity**
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=kPRA0W1kECg',
        'https://www.youtube.com/watch?v=WaNLJf8xzC4'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Comparison of Sorting Algorithms', url: 'https://www.geeksforgeeks.org/comparison-among-bubble-sort-selection-sort-and-insertion-sort/' },
        { title: 'Sorting Algorithm Animations', url: 'https://www.toptal.com/developers/sorting-algorithms' }
      ]
    }
  }
];