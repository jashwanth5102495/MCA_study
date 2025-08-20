import { Topic } from '../syllabus';

export const dataStructuresUnit1: Topic[] = [
  {
    id: 'ds-intro-overview',
    name: 'Introduction and Overview',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit I',
    content: {
      introduction: 'Data Structures is a foundational subject in computer science that deals with organizing, managing, and storing data efficiently for various operations. It provides the building blocks for designing efficient algorithms and software.',
      definition: 'A data structure is a particular way of organizing and storing data in a computer so that it can be accessed and modified efficiently.',
      realWorldExample: 'Examples include using a list to store a collection of names, a stack to manage undo operations in a text editor, or a queue to handle print jobs in a printer.',
      realWorldUse: 'Data structures are used in databases, operating systems, networking, artificial intelligence, and almost every area of software development.',
      importance: 'Understanding data structures is crucial for writing efficient code, solving complex problems, and performing well in technical interviews. They help in optimizing memory usage and processing time.',
      detailedExplanation: 'The study of data structures involves learning about different ways to store and organize data, such as arrays, linked lists, stacks, queues, trees, and graphs. Each data structure has its own strengths and weaknesses, and is suited for specific types of problems. For example, arrays provide fast access to elements by index, while linked lists allow efficient insertion and deletion. Choosing the right data structure can greatly improve the performance of an application. Data structures are also closely related to algorithms, as the choice of data structure often determines the efficiency of an algorithm. This unit introduces the basic concepts and sets the stage for deeper exploration in subsequent units.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=92S4zgXN17o',
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=RBSGKlAvoiM'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Data Structures', url: 'https://www.geeksforgeeks.org/data-structures/' },
        { title: 'Programiz: Data Structures', url: 'https://www.programiz.com/dsa/data-structure-types' },
        { title: 'Javatpoint: Data Structure', url: 'https://www.javatpoint.com/data-structure-tutorial' }
      ],
      sampleProgram: ''
    }
  },
  {
    id: 'ds-definition',
    name: 'Definition',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit I',
    content: {
      introduction: 'Understanding the definition of data structures is the first step in learning how to organize data efficiently.',
      definition: 'A data structure is a specialized format for organizing, processing, retrieving, and storing data.',
      realWorldExample: 'A contact list in your phone is a data structure that organizes names, numbers, and other details.',
      realWorldUse: 'Used in file systems, databases, and memory management in operating systems.',
      importance: 'A clear definition helps in distinguishing between different types of data structures and their applications.',
      detailedExplanation: 'Data structures can be simple (like arrays and lists) or complex (like trees and graphs). The choice of data structure affects the efficiency of algorithms and the performance of software.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=92S4zgXN17o',
        'https://www.youtube.com/watch?v=8hly31xKli0'
      ],
      externalLinks: [
        { title: 'Wikipedia: Data Structure', url: 'https://en.wikipedia.org/wiki/Data_structure' },
        { title: 'GeeksforGeeks: Data Structure Types', url: 'https://www.geeksforgeeks.org/types-of-data-structures/' }
      ],
      sampleProgram: ''
    }
  },
  {
    id: 'elementary-data-organization',
    name: 'Elementary data organization',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit I',
    content: {
      introduction: 'Elementary data organization refers to the basic ways data can be arranged and accessed in memory.',
      definition: 'It involves organizing data in simple structures like arrays, records, and files.',
      realWorldExample: 'A row in a spreadsheet is an example of elementary data organization.',
      realWorldUse: 'Used in storing tabular data, managing records in databases, and organizing files on disk.',
      importance: 'Proper organization makes data retrieval and manipulation efficient.',
      detailedExplanation: 'Elementary data organization is the foundation for more complex data structures. It includes concepts like grouping related data, indexing, and sequential storage. Understanding these basics is essential before moving to advanced structures.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=92S4zgXN17o',
        'https://www.youtube.com/watch?v=8hly31xKli0'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Data Organization', url: 'https://www.geeksforgeeks.org/data-structures/' },
        { title: 'Javatpoint: Data Structure Basics', url: 'https://www.javatpoint.com/data-structure-tutorial' }
      ],
      sampleProgram: '// C program to store and print 5 integers\n#include <stdio.h>\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}'
    }
  },
  {
    id: 'data-structures',
    name: 'Data Structures',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit I',
    content: {
      introduction: 'Data structures are the backbone of efficient programming and algorithm design.',
      definition: 'A data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.',
      realWorldExample: 'A stack of plates (stack), a line at a ticket counter (queue), or a family tree (tree structure).',
      realWorldUse: 'Used in compilers, operating systems, databases, and more.',
      importance: 'Choosing the right data structure can make programs faster and use less memory.',
      detailedExplanation: 'Common data structures include arrays, linked lists, stacks, queues, trees, and graphs. Each has unique properties and is suited for specific tasks. For example, stacks are used for function calls, queues for scheduling, and trees for hierarchical data.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=92S4zgXN17o',
        'https://www.youtube.com/watch?v=8hly31xKli0'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Types of Data Structures', url: 'https://www.geeksforgeeks.org/types-of-data-structures/' },
        { title: 'Javatpoint: Data Structure Types', url: 'https://www.javatpoint.com/data-structure-tutorial' }
      ],
      sampleProgram: ''
    }
  },
  {
    id: 'ds-operations',
    name: 'Data Structures operations',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit I',
    content: {
      introduction: 'Operations are the actions that can be performed on data structures.',
      definition: 'Common operations include insertion, deletion, traversal, searching, and sorting.',
      realWorldExample: 'Adding a new contact to your phone (insertion), removing a file (deletion), or searching for a book in a library (searching).',
      realWorldUse: 'Used in managing memory, processing data, and implementing algorithms.',
      importance: 'Understanding operations is key to using data structures effectively.',
      detailedExplanation: 'Each data structure supports a set of operations. For example, arrays allow random access, linked lists allow efficient insertion/deletion, and stacks/queues support push/pop or enqueue/dequeue. The efficiency of these operations depends on the structure.',
      youtubeLinks: ['https://www.youtube.com/watch?v=bum_19loj9A'],
      externalLinks: [
        { title: 'Programiz: Data Structure Operations', url: 'https://www.programiz.com/dsa/data-structure-types#operations' }
      ],
      sampleProgram: '// C program to insert and delete in an array\n#include <stdio.h>\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    int n = 5;\n    // Insert 10 at position 2\n    for(int i = n; i > 2; i--) arr[i] = arr[i-1];\n    arr[2] = 10; n++;\n    // Delete element at position 4\n    for(int i = 4; i < n-1; i++) arr[i] = arr[i+1];\n    n--;\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}'
    }
  },
  {
    id: 'abstract-data-types',
    name: 'Abstract data types',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit I',
    content: {
      introduction: 'Abstract Data Types (ADTs) define what operations can be performed on data, not how they are implemented.',
      definition: 'An ADT is a model for data structures that specifies the type of data stored, the operations supported, and the types of parameters.',
      realWorldExample: 'A stack ADT supports push and pop operations, regardless of whether it is implemented using an array or a linked list.',
      realWorldUse: 'ADTs are used in software design to separate interface from implementation.',
      importance: 'ADTs help in designing robust and reusable code.',
      detailedExplanation: 'ADTs provide a theoretical framework for data structures. For example, the queue ADT defines enqueue and dequeue operations, but not whether the queue is implemented as an array or a linked list. This abstraction allows flexibility and modularity in programming.',
      youtubeLinks: ['https://www.youtube.com/watch?v=RBSGKlAvoiM'],
      externalLinks: [
        { title: 'GeeksforGeeks: Abstract Data Types', url: 'https://www.geeksforgeeks.org/abstract-data-types/' }
      ],
      sampleProgram: ''
    }
  },
  {
    id: 'algorithms-complexity',
    name: 'Algorithms complexity',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit I',
    content: {
      introduction: 'Algorithm complexity measures the efficiency of an algorithm in terms of time and space.',
      definition: 'It is the analysis of the amount of resources (time and space) required by an algorithm to solve a problem.',
      realWorldExample: 'Comparing the time taken by bubble sort and quick sort for sorting a large list.',
      realWorldUse: 'Used in selecting the best algorithm for a given problem.',
      importance: 'Helps in writing efficient code and optimizing performance.',
      detailedExplanation: 'Complexity is usually expressed using Big O notation (O(n), O(log n), etc.). Time complexity measures the number of operations, while space complexity measures the amount of memory used. Lower complexity means better performance.',
      youtubeLinks: ['https://www.youtube.com/watch?v=V6mKVRU1evU'],
      externalLinks: [
        { title: 'Khan Academy: Algorithmic Complexity', url: 'https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation' }
      ],
      sampleProgram: '// C program to count operations in a loop\n#include <stdio.h>\nint main() {\n    int n = 10, count = 0;\n    for(int i = 0; i < n; i++) count++;\n    printf("Operations: %d\n", count);\n    return 0;\n}'
    }
  },
  {
    id: 'time-space-tradeoff',
    name: 'Time-space tradeoff',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit I',
    content: {
      introduction: 'Time-space tradeoff is the relationship between the time an algorithm takes and the memory it uses.',
      definition: 'It refers to situations where saving time requires more memory, or saving memory requires more time.',
      realWorldExample: 'Storing precomputed results in a lookup table to speed up calculations (uses more memory, saves time).',
      realWorldUse: 'Used in caching, dynamic programming, and database indexing.',
      importance: 'Understanding this tradeoff helps in designing efficient systems.',
      detailedExplanation: 'Some algorithms use extra memory to run faster (e.g., hash tables), while others use less memory but take more time (e.g., searching in a list). The right balance depends on the problem and available resources.',
      youtubeLinks: ['https://www.youtube.com/watch?v=V6mKVRU1evU'],
      externalLinks: [
        { title: 'Wikipedia: Space–time tradeoff', url: 'https://en.wikipedia.org/wiki/Space%E2%80%93time_tradeoff' }
      ],
      sampleProgram: '// C program to demonstrate lookup table\n#include <stdio.h>\nint main() {\n    int squares[11];\n    for(int i = 0; i <= 10; i++) squares[i] = i*i;\n    printf("Square of 7: %d\n", squares[7]);\n    return 0;\n}'
    }
  },
  {
    id: 'mathematical-notations',
    name: 'Mathematical notations and functions',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit I',
    content: {
      introduction: 'Mathematical notations are used to describe the behavior and performance of algorithms.',
      definition: 'Symbols and functions (like summation, product, logarithms) used in algorithm analysis.',
      realWorldExample: 'Big O notation (O(n)), summation (Σ), and logarithms (log n) in complexity analysis.',
      realWorldUse: 'Used in expressing time and space complexity, and in writing algorithms.',
      importance: 'Helps in understanding and communicating algorithm efficiency.',
      detailedExplanation: 'Common notations include summation (Σ), product (Π), factorial (!), and logarithms (log). These are used to express the number of operations, growth rates, and other properties of algorithms.',
      youtubeLinks: ['https://www.youtube.com/watch?v=V6mKVRU1evU'],
      externalLinks: [
        { title: 'Khan Academy: Mathematical Notation', url: 'https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation' }
      ],
      sampleProgram: '// C program to calculate factorial\n#include <stdio.h>\nint factorial(int n) {\n    if(n == 0) return 1;\n    else return n * factorial(n-1);\n}\nint main() {\n    int n = 5;\n    printf("Factorial of %d is %d\n", n, factorial(n));\n    return 0;\n}'
    }
  },
  {
    id: 'algorithmic-notations',
    name: 'Algorithmic notations',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit I',
    content: {
      introduction: 'Algorithmic notations are used to describe the steps and logic of algorithms.',
      definition: 'Standard ways to write algorithms, such as pseudocode and flowcharts.',
      realWorldExample: 'Writing a recipe as a step-by-step list (pseudocode) or as a diagram (flowchart).',
      realWorldUse: 'Used in teaching, designing, and documenting algorithms.',
      importance: 'Makes algorithms easy to understand and implement.',
      detailedExplanation: 'Pseudocode uses plain language to describe algorithms, while flowcharts use symbols and arrows. Both help in planning and communicating algorithms before coding.',
      youtubeLinks: ['https://www.youtube.com/watch?v=8hly31xKli0'],
      externalLinks: [
        { title: 'GeeksforGeeks: Pseudocode', url: 'https://www.geeksforgeeks.org/how-to-write-a-pseudocode/' }
      ],
      sampleProgram: ''
    }
  },
  {
    id: 'control-structures',
    name: 'Control structures',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit I',
    content: {
      introduction: 'Control structures determine the flow of execution in a program.',
      definition: 'Statements that control the order in which instructions are executed, such as if, else, for, while.',
      realWorldExample: 'Using a for loop to process each item in a list.',
      realWorldUse: 'Used in all programming to implement logic and repetition.',
      importance: 'Essential for writing correct and efficient programs.',
      detailedExplanation: 'The main control structures are sequence, selection (if/else), and iteration (for/while). They allow programs to make decisions and repeat actions.',
      youtubeLinks: ['https://www.youtube.com/watch?v=8PopR3x-VMY'],
      externalLinks: [
        { title: 'Programiz: Control Structures', url: 'https://www.programiz.com/c-programming/c-control-statements' }
      ],
      sampleProgram: '// C program using control structures\n#include <stdio.h>\nint main() {\n    for(int i = 1; i <= 5; i++) {\n        if(i % 2 == 0)\n            printf("%d is even\n", i);\n        else\n            printf("%d is odd\n", i);\n    }\n    return 0;\n}'
    }
  },
  {
    id: 'complexity-of-algorithms',
    name: 'Complexity of algorithms',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit I',
    content: {
      introduction: 'Complexity of algorithms refers to the resources required for execution, mainly time and space.',
      definition: 'A measure of the amount of time and/or space required by an algorithm as a function of input size.',
      realWorldExample: 'Sorting a list of 10 items vs. 1 million items shows different complexities.',
      realWorldUse: 'Used in evaluating and comparing algorithms.',
      importance: 'Helps in choosing the most efficient algorithm for a task.',
      detailedExplanation: 'Complexity is analyzed using notations like Big O, Omega, and Theta. Time complexity focuses on speed, while space complexity focuses on memory usage. Efficient algorithms save both time and resources.',
      youtubeLinks: ['https://www.youtube.com/watch?v=V6mKVRU1evU'],
      externalLinks: [
        { title: 'GeeksforGeeks: Complexity of Algorithms', url: 'https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/' }
      ],
      sampleProgram: '// C program to compare time for two loops\n#include <stdio.h>\n#include <time.h>\nint main() {\n    int n = 1000000;\n    clock_t start, end;\n    start = clock();\n    for(int i = 0; i < n; i++);\n    end = clock();\n    printf("Time: %lf\n", (double)(end-start)/CLOCKS_PER_SEC);\n    return 0;\n}'
    }
  },
  {
    id: 'asymptotic-notations',
    name: 'Asymptotic notations for complexity of algorithms',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit I',
    content: {
      introduction: 'Asymptotic notations describe the limiting behavior of an algorithm as input size grows.',
      definition: 'Big O, Omega, and Theta notations are used to classify algorithms by their running time or space requirements.',
      realWorldExample: 'O(n) for linear search, O(log n) for binary search, O(n^2) for bubble sort.',
      realWorldUse: 'Used in algorithm analysis and comparison.',
      importance: 'Helps in predicting performance and scalability.',
      detailedExplanation: 'Big O (O) gives the upper bound, Omega (Ω) the lower bound, and Theta (Θ) the tight bound of an algorithm’s complexity. These notations help in understanding how algorithms perform as data size increases.',
      youtubeLinks: ['https://www.youtube.com/watch?v=V6mKVRU1evU'],
      externalLinks: [
        { title: 'Big O Cheat Sheet', url: 'https://www.bigocheatsheet.com/' }
      ],
      sampleProgram: '// C program to demonstrate O(n) complexity\n#include <stdio.h>\nint main() {\n    int n = 10, sum = 0;\n    for(int i = 0; i < n; i++) sum += i;\n    printf("Sum: %d\n", sum);\n    return 0;\n}'
    }
  },
  {
    id: 'string-processing-definition',
    name: 'String Processing: Definition',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit I',
    content: {
      introduction: 'String processing involves manipulating sequences of characters.',
      definition: 'A string is a sequence of characters, often used to represent text.',
      realWorldExample: 'Searching for a word in a document or validating an email address.',
      realWorldUse: 'Used in text editors, search engines, and data validation.',
      importance: 'String processing is essential for handling textual data.',
      detailedExplanation: 'Common string operations include concatenation, comparison, searching, and pattern matching. Strings are often implemented as arrays of characters in C.',
      youtubeLinks: ['https://www.youtube.com/watch?v=cpPG0bKHYKc'],
      externalLinks: [
        { title: 'Programiz: Strings in C', url: 'https://www.programiz.com/c-programming/c-strings' }
      ],
      sampleProgram: '// C program to concatenate two strings\n#include <stdio.h>\n#include <string.h>\nint main() {\n    char str1[20] = "Hello ", str2[] = "World!";\n    strcat(str1, str2);\n    printf("%s\n", str1);\n    return 0;\n}'
    }
  },
  {
    id: 'storing-strings',
    name: 'Storing Strings',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit I',
    content: {
      introduction: 'Storing strings efficiently is important for text processing.',
      definition: 'Strings can be stored as arrays of characters or as pointers to character arrays.',
      realWorldExample: 'Storing user names or passwords in a database.',
      realWorldUse: 'Used in file storage, databases, and communication protocols.',
      importance: 'Efficient storage saves memory and speeds up processing.',
      detailedExplanation: 'In C, strings are arrays of characters ending with a null character (\0). Dynamic allocation allows storing strings of varying lengths.',
      youtubeLinks: ['https://www.youtube.com/watch?v=cpPG0bKHYKc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Strings in C', url: 'https://www.geeksforgeeks.org/strings-in-c-2/' }
      ],
      sampleProgram: '// C program to store and print a string\n#include <stdio.h>\nint main() {\n    char str[20];\n    printf("Enter a string: ");\n    gets(str);\n    printf("You entered: %s\n", str);\n    return 0;\n}'
    }
  },
  {
    id: 'string-as-adt',
    name: 'String as ADT',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit I',
    content: {
      introduction: 'String as an Abstract Data Type (ADT) defines operations that can be performed on strings.',
      definition: 'String ADT specifies operations like creation, concatenation, comparison, and substring extraction.',
      realWorldExample: 'Text editors use string ADT for editing and formatting text.',
      realWorldUse: 'Used in compilers, interpreters, and word processors.',
      importance: 'String ADT provides a clear interface for string manipulation.',
      detailedExplanation: 'The string ADT abstracts away the implementation details and focuses on what operations are supported. This allows for flexible and efficient string handling.',
      youtubeLinks: ['https://www.youtube.com/watch?v=cpPG0bKHYKc'],
      externalLinks: [
        { title: 'GeeksforGeeks: String Data Structure', url: 'https://www.geeksforgeeks.org/string-data-structure/' }
      ],
      sampleProgram: ''
    }
  },
  {
    id: 'string-operations',
    name: 'String operations',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit I',
    content: {
      introduction: 'String operations are functions that manipulate strings.',
      definition: 'Common operations include concatenation, comparison, length calculation, and substring extraction.',
      realWorldExample: 'Checking if a password matches during login (comparison), or joining first and last names (concatenation).',
      realWorldUse: 'Used in authentication, data validation, and formatting.',
      importance: 'Efficient string operations are vital for performance in text-heavy applications.',
      detailedExplanation: 'C provides standard library functions for string operations, such as strcpy, strcat, strcmp, strlen, etc.',
      youtubeLinks: ['https://www.youtube.com/watch?v=cpPG0bKHYKc'],
      externalLinks: [
        { title: 'Programiz: String Functions', url: 'https://www.programiz.com/c-programming/library-function/string.h' }
      ],
      sampleProgram: '// C program to compare two strings\n#include <stdio.h>\n#include <string.h>\nint main() {\n    char str1[20], str2[20];\n    printf("Enter first string: ");\n    gets(str1);\n    printf("Enter second string: ");\n    gets(str2);\n    if(strcmp(str1, str2) == 0)\n        printf("Strings are equal\n");\n    else\n        printf("Strings are not equal\n");\n    return 0;\n}'
    }
  },
  {
    id: 'word-text-processing',
    name: 'Word/text processing',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit I',
    content: {
      introduction: 'Word/text processing involves analyzing and manipulating text data.',
      definition: 'It includes operations like searching, replacing, and formatting words or text.',
      realWorldExample: 'Spell check in word processors or search functionality in web browsers.',
      realWorldUse: 'Used in natural language processing, search engines, and text editors.',
      importance: 'Text processing is essential for handling and understanding human language.',
      detailedExplanation: 'Text processing may involve tokenization (splitting text into words), pattern matching, and text transformation. Efficient algorithms are needed for large-scale text data.',
      youtubeLinks: ['https://www.youtube.com/watch?v=cpPG0bKHYKc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Text Processing', url: 'https://www.geeksforgeeks.org/text-processing-in-c/' }
      ],
      sampleProgram: `// C program to count words in a string\n#include <stdio.h>\n#include <string.h>\nint main() {\n    char str[100];\n    int i, words = 1;\n    printf("Enter a string: ");\n    gets(str);\n    for(i = 0; str[i] != '\\0'; i++) {\n        if(str[i] == ' ') words++;\n    }\n    printf("Word count: %d\\n", words);\n    return 0;\n}`
    }
  },
  {
    id: 'pattern-matching-algorithms',
    name: 'Pattern Matching algorithms',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit I',
    content: {
      introduction: 'Pattern matching algorithms are used to find sequences (patterns) within text.',
      definition: 'Algorithms that search for occurrences of a pattern string within a larger text string.',
      realWorldExample: 'Finding a word in a document or searching for a file name.',
      realWorldUse: 'Used in search engines, text editors, and DNA sequence analysis.',
      importance: 'Efficient pattern matching is crucial for fast searching in large texts.',
      detailedExplanation: 'Common algorithms include the Naive approach, Knuth-Morris-Pratt (KMP), and Boyer-Moore. These algorithms differ in efficiency and use cases.',
      youtubeLinks: ['https://www.youtube.com/watch?v=GTJr8OvyEVQ'],
      externalLinks: [
        { title: 'GeeksforGeeks: Pattern Searching', url: 'https://www.geeksforgeeks.org/pattern-searching/' }
      ],
      sampleProgram: '// C program for Naive Pattern Searching\n#include <stdio.h>\n#include <string.h>\nvoid search(char* pat, char* txt) {\n    int M = strlen(pat);\n    int N = strlen(txt);\n    for (int i = 0; i <= N - M; i++) {\n        int j;\n        for (j = 0; j < M; j++)\n            if (txt[i + j] != pat[j])\n                break;\n        if (j == M)\n            printf("Pattern found at index %d\n", i);\n    }\n}\nint main() {\n    char txt[] = "AABAACAADAABAAABAA";\n    char pat[] = "AABA";\n    search(pat, txt);\n    return 0;\n}'
    }
  }
];