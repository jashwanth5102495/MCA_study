import { Topic } from '../syllabus';

export const dataStructuresUnit2: Topic[] = [
  // Arrays
  {
    id: 'arrays-definition',
    name: 'Arrays: Definition',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Arrays are a fundamental data structure that store elements of the same type in contiguous memory locations.',
      definition: 'An array is a collection of elements, each identified by an index or a key.',
      realWorldExample: 'A list of student marks, days of the week, or a chessboard.',
      realWorldUse: 'Used in storing data in tables, implementing other data structures, and in algorithms.',
      importance: 'Arrays provide fast access to elements and are the basis for many other data structures.',
      detailedExplanation: 'Arrays are fixed-size, indexed collections. They allow random access, but insertion and deletion can be costly. Arrays are used for static data storage and are the building blocks for matrices, strings, and more.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Arrays', url: 'https://www.geeksforgeeks.org/arrays-in-c-cpp/' }
      ],
      sampleProgram: `// C program to demonstrate array\n#include <stdio.h>\nint main() {\n    int arr[5] = {10, 20, 30, 40, 50};\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}`
    }
  },
  {
    id: 'linear-arrays',
    name: 'Linear arrays',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Linear arrays are arrays where elements are arranged in a single row or line.',
      definition: 'A linear array is a list of elements stored in contiguous memory locations.',
      realWorldExample: 'A queue of people, a row of seats in a theater.',
      realWorldUse: 'Used in implementing lists, queues, and stacks.',
      importance: 'Linear arrays are simple and efficient for accessing elements by index.',
      detailedExplanation: 'Linear arrays support direct access to any element using its index. They are easy to implement but resizing requires creating a new array.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'Programiz: Linear Array', url: 'https://www.programiz.com/dsa/linear-array' }
      ],
      sampleProgram: `// C program to access elements in a linear array\n#include <stdio.h>\nint main() {\n    int arr[3] = {1, 2, 3};\n    printf("First: %d, Last: %d\n", arr[0], arr[2]);\n    return 0;\n}`
    }
  },
  {
    id: 'arrays-as-adt',
    name: 'Arrays as ADT',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Array as an Abstract Data Type (ADT) defines the operations that can be performed on arrays.',
      definition: 'Array ADT specifies operations like access, update, insert, and delete.',
      realWorldExample: 'Spreadsheet rows and columns.',
      realWorldUse: 'Used in software design to abstract array operations.',
      importance: 'ADT provides a clear interface for array manipulation.',
      detailedExplanation: 'Array ADT focuses on what operations are supported, not how they are implemented. This abstraction allows for flexible and efficient array handling.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Array as ADT', url: 'https://www.geeksforgeeks.org/array-data-structure/' }
      ],
      sampleProgram: ''
    }
  },
  {
    id: 'representation-linear-arrays',
    name: 'Representation of Linear Arrays in Memory',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Linear arrays are stored in contiguous memory locations.',
      definition: 'Each element of the array is stored next to the previous one in memory.',
      realWorldExample: 'A block of hotel rooms numbered consecutively.',
      realWorldUse: 'Used in memory management and data storage.',
      importance: 'Understanding memory representation helps in efficient programming.',
      detailedExplanation: 'The address of any element can be calculated using the base address and the index. This allows fast access but makes resizing difficult.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'TutorialsPoint: Array Representation', url: 'https://www.tutorialspoint.com/data_structures_algorithms/array_data_structure.htm' }
      ],
      sampleProgram: ''
    }
  },
  {
    id: 'traversing-linear-arrays',
    name: 'Traversing Linear arrays',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Traversing means visiting each element of the array exactly once.',
      definition: 'Array traversal is the process of accessing each element in the array sequentially.',
      realWorldExample: 'Reading all names in a class attendance list.',
      realWorldUse: 'Used in searching, sorting, and processing data.',
      importance: 'Traversal is a basic operation required for most array algorithms.',
      detailedExplanation: 'Traversal is usually done using a loop. It is the basis for searching, updating, and processing array elements.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'Programiz: Array Traversal', url: 'https://www.programiz.com/dsa/array-traversal' }
      ],
      sampleProgram: `// C program to traverse an array\n#include <stdio.h>\nint main() {\n    int arr[5] = {2, 4, 6, 8, 10};\n    for(int i = 0; i < 5; i++) {\n        printf("Element %d: %d\n", i, arr[i]);\n    }\n    return 0;\n}`
    }
  },
  {
    id: 'inserting-deleting-arrays',
    name: 'Inserting and deleting',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Insertion and deletion are basic operations on arrays.',
      definition: 'Insertion adds an element, deletion removes an element from the array.',
      realWorldExample: 'Adding a new student to a roll list, removing a product from inventory.',
      realWorldUse: 'Used in dynamic data management.',
      importance: 'Efficient insertion and deletion are important for performance.',
      detailedExplanation: 'Insertion may require shifting elements to make space. Deletion may require shifting elements to fill the gap. Both operations can be costly in large arrays.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Array Insertion/Deletion', url: 'https://www.geeksforgeeks.org/array-data-structure/' }
      ],
      sampleProgram: `// C program to insert and delete in an array\n#include <stdio.h>\nint main() {\n    int arr[6] = {1, 2, 3, 4, 5};\n    int n = 5;\n    // Insert 10 at position 2\n    for(int i = n; i > 2; i--) arr[i] = arr[i-1];\n    arr[2] = 10; n++;\n    // Delete element at position 4\n    for(int i = 4; i < n-1; i++) arr[i] = arr[i+1];\n    n--;\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}`
    }
  },
  {
    id: 'multi-dimensional-arrays',
    name: 'Multi-dimensional arrays',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Multi-dimensional arrays are arrays of arrays, used to represent tables, matrices, etc.',
      definition: 'A multi-dimensional array is an array with more than one index or subscript.',
      realWorldExample: 'A chessboard (8x8), a timetable (rows and columns).',
      realWorldUse: 'Used in scientific computing, graphics, and databases.',
      importance: 'They allow representation of complex data structures.',
      detailedExplanation: 'The most common is the 2D array (matrix). Elements are accessed using two indices. Memory is still contiguous, but access patterns differ.',
      youtubeLinks: ['https://www.youtube.com/watch?v=3FdEz7lXzTU'],
      externalLinks: [
        { title: 'Programiz: Multidimensional Arrays', url: 'https://www.programiz.com/c-programming/c-multidimensional-arrays' }
      ],
      sampleProgram: `// C program for 2D array\n#include <stdio.h>\nint main() {\n    int mat[2][3] = {{1,2,3},{4,5,6}};\n    for(int i=0;i<2;i++) {\n        for(int j=0;j<3;j++) {\n            printf("%d ", mat[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}`
    }
  },
  {
    id: 'matrices-sparse-matrices',
    name: 'Matrices and Sparse matrices',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Matrices are 2D arrays. Sparse matrices have mostly zero elements.',
      definition: 'A matrix is a rectangular array. A sparse matrix is one with many zero values.',
      realWorldExample: 'Adjacency matrix for a graph, image data.',
      realWorldUse: 'Used in scientific computing, graphics, and network analysis.',
      importance: 'Sparse matrices save memory and computation time.',
      detailedExplanation: 'Sparse matrices are stored efficiently by only saving non-zero elements. Common representations include coordinate list and compressed row storage.',
      youtubeLinks: ['https://www.youtube.com/watch?v=3FdEz7lXzTU'],
      externalLinks: [
        { title: 'GeeksforGeeks: Sparse Matrix', url: 'https://www.geeksforgeeks.org/sparse-matrix/' }
      ],
      sampleProgram: `// C program for sparse matrix representation\n#include <stdio.h>\n#define ROW 4\n#define COL 5\nint main() {\n    int mat[ROW][COL] = {\n        {0, 0, 3, 0, 4},\n        {0, 0, 5, 7, 0},\n        {0, 0, 0, 0, 0},\n        {0, 2, 6, 0, 0}\n    };\n    printf("Sparse Matrix:\n");\n    for(int i=0;i<ROW;i++) {\n        for(int j=0;j<COL;j++) {\n            printf("%d ", mat[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}`
    }
  },

  // Linked List
  {
    id: 'linkedlist-definition',
    name: 'Linked List: Definition',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'A linked list is a linear data structure where each element is a separate object, called a node.',
      definition: 'A node consists of a data field and a reference (link) to the next node in the list.',
      realWorldExample: 'A train of wagons, a chain of friends.',
      realWorldUse: 'Used in implementing dynamic data structures, queues, and stacks.',
      importance: 'Linked lists are flexible and efficient for dynamic data.',
      detailedExplanation: 'Each node points to the next node, creating a chain. The first node is called the head, and the last node points to null. Insertion and deletion are easier than in arrays.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Linked List', url: 'https://www.geeksforgeeks.org/data-structures/linked-list/' }
      ],
      sampleProgram: ''
    }
  },
  {
    id: 'representation-singly-linked',
    name: 'Representation of Singly Linked List in memory',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Singly linked lists are stored in memory as a series of nodes, each containing data and a pointer to the next node.',
      definition: 'Each node has a data field and a next pointer.',
      realWorldExample: 'A chain of people holding hands.',
      realWorldUse: 'Used in implementing dynamic data structures.',
      importance: 'Memory efficient for dynamic data.',
      detailedExplanation: 'Nodes are allocated sequentially in memory. The head pointer points to the first node. The last node points to null.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'Programiz: Singly Linked List', url: 'https://www.programiz.com/dsa/linked-list' }
      ],
      sampleProgram: `// C program to create a singly linked list\n#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node* next;\n};\nint main() {\n    struct Node* head = NULL;\n    struct Node* second = NULL;\n    struct Node* third = NULL;\n    head = (struct Node*)malloc(sizeof(struct Node));\n    second = (struct Node*)malloc(sizeof(struct Node));\n    third = (struct Node*)malloc(sizeof(struct Node));\n    head->data = 1;\n    head->next = second;\n    second->data = 2;\n    second->next = third;\n    third->data = 3;\n    third->next = NULL;\n    printf("Singly Linked List: ");\n    struct Node* temp = head;\n    while(temp != NULL) {\n        printf("%d -> ", temp->data);\n        temp = temp->next;\n    }\n    printf("NULL\\n");\n    return 0;\n}`
    }
  },
  {
    id: 'traversing-singly-linked',
    name: 'Traversing a Singly linked list',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Traversing a singly linked list means visiting each node exactly once.',
      definition: 'Iterate through the list, starting from the head, and print the data of each node.',
      realWorldExample: 'Printing all names in a class roll list.',
      realWorldUse: 'Used in searching, updating, and processing data.',
      importance: 'Traversal is a fundamental operation.',
      detailedExplanation: 'Use a loop to iterate through the list. The loop continues until the current node is null.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'Programiz: Singly Linked List Traversal', url: 'https://www.programiz.com/dsa/linked-list-traversal' }
      ],
      sampleProgram: `// C program to traverse a singly linked list\n#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node* next;\n};\nint main() {\n    struct Node* head = NULL;\n    struct Node* second = NULL;\n    struct Node* third = NULL;\n    head = (struct Node*)malloc(sizeof(struct Node));\n    second = (struct Node*)malloc(sizeof(struct Node));\n    third = (struct Node*)malloc(sizeof(struct Node));\n    head->data = 1;\n    head->next = second;\n    second->data = 2;\n    second->next = third;\n    third->data = 3;\n    third->next = NULL;\n    printf("Singly Linked List: ");\n    struct Node* temp = head;\n    while(temp != NULL) {\n        printf("%d -> ", temp->data);\n        temp = temp->next;\n    }\n    printf("NULL\\n");\n    return 0;\n}`
    }
  },
  {
    id: 'searching-singly-linked',
    name: 'Searching in a Singly linked list',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Searching in a singly linked list involves finding a specific node based on its data.',
      definition: 'Iterate through the list, compare each node\'s data with the search key.',
      realWorldExample: 'Finding a specific student in a class roll list.',
      realWorldUse: 'Used in data retrieval.',
      importance: 'Searching is a basic operation.',
      detailedExplanation: 'Use a loop to iterate through the list. If the data matches the search key, return the node. If not found, return null.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Search in Singly Linked List', url: 'https://www.geeksforgeeks.org/search-singly-linked-list/' }
      ],
      sampleProgram: `// C program to search an element in a singly linked list\n#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node* next;\n};\nint main() {\n    struct Node* head = NULL;\n    struct Node* second = NULL;\n    struct Node* third = NULL;\n    head = (struct Node*)malloc(sizeof(struct Node));\n    second = (struct Node*)malloc(sizeof(struct Node));\n    third = (struct Node*)malloc(sizeof(struct Node));\n    head->data = 1;\n    head->next = second;\n    second->data = 2;\n    second->next = third;\n    third->data = 3;\n    third->next = NULL;\n    int key = 2;\n    struct Node* temp = head;\n    while(temp != NULL) {\n        if(temp->data == key) {\n            printf("Element %d found in the list.\\n", key);\n            break;\n        }\n        temp = temp->next;\n    }\n    if(temp == NULL) {\n        printf("Element %d not found in the list.\\n", key);\n    }\n    return 0;\n}`
    }
  },
  {
    id: 'memory-allocation',
    name: 'Memory allocation',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Memory allocation is the process of assigning memory to variables and data structures.',
      definition: 'Dynamic memory allocation allocates memory at runtime, while static memory allocation is fixed at compile time.',
      realWorldExample: 'Allocating memory for a student record, a shopping cart.',
      realWorldUse: 'Used in implementing dynamic data structures.',
      importance: 'Memory management is crucial for efficient programming.',
      detailedExplanation: 'Dynamic memory allocation uses functions like malloc, calloc, realloc, and free. Static memory is declared directly.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Memory Allocation', url: 'https://www.geeksforgeeks.org/memory-allocation/' }
      ],
      sampleProgram: `// C program to demonstrate dynamic memory allocation\n#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int* arr = (int*)malloc(5 * sizeof(int));\n    if(arr == NULL) {\n        printf("Memory allocation failed.\\n");\n        return 1;\n    }\n    for(int i = 0; i < 5; i++) {\n        arr[i] = i + 1;\n    }\n    printf("Array elements: ");\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    free(arr);\n    return 0;\n}`
    }
  },
  {
    id: 'garbage-collection',
    name: 'Garbage collection',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Garbage collection is the process of automatically freeing memory that is no longer in use.',
      definition: 'It is a form of automatic memory management.',
      realWorldExample: 'Automatically freeing memory occupied by objects that are no longer reachable.',
      realWorldUse: 'Used in high-level programming languages to manage memory.',
      importance: 'Memory leaks can be prevented.',
      detailedExplanation: 'Garbage collection is typically handled by the runtime environment. It identifies and frees memory that is no longer accessible to the program.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Garbage Collection', url: 'https://www.geeksforgeeks.org/garbage-collection/' }
      ],
      sampleProgram: ''
    }
  },
  {
    id: 'insertion-singly-linked',
    name: 'Insertion into a singly linked list',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Insertion into a singly linked list involves adding a new node at the beginning, end, or after a specific node.',
      definition: 'Insertion can be at the head, tail, or after a given node.',
      realWorldExample: 'Adding a new student to the beginning of a roll list, adding a new book to the end of a shelf.',
      realWorldUse: 'Used in dynamic data management.',
      importance: 'Efficient insertion is important for performance.',
      detailedExplanation: 'Insertion at the head requires changing the head pointer. Insertion at the tail requires traversing to the end. Insertion after a node requires changing the next pointer of the current node.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Insertion in Singly Linked List', url: 'https://www.geeksforgeeks.org/insert-singly-linked-list/' }
      ],
      sampleProgram: `// C program to insert at the beginning of a singly linked list\n#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node* next;\n};\nint main() {\n    struct Node* head = NULL;\n    struct Node* second = NULL;\n    struct Node* third = NULL;\n    head = (struct Node*)malloc(sizeof(struct Node));\n    second = (struct Node*)malloc(sizeof(struct Node));\n    third = (struct Node*)malloc(sizeof(struct Node));\n    head->data = 1;\n    head->next = second;\n    second->data = 2;\n    second->next = third;\n    third->data = 3;\n    third->next = NULL;\n    int new_data = 0;\n    struct Node* new_node = (struct Node*)malloc(sizeof(struct Node));\n    new_node->data = new_data;\n    new_node->next = head;\n    head = new_node;\n    printf("Singly Linked List after insertion: ");\n    struct Node* temp = head;\n    while(temp != NULL) {\n        printf("%d -> ", temp->data);\n        temp = temp->next;\n    }\n    printf("NULL\\n");\n    return 0;\n}`
    }
  },
  {
    id: 'deletion-singly-linked',
    name: 'Deletion from a singly linked list',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Deletion from a singly linked list involves removing a node based on its data or position.',
      definition: 'Deletion can be from the head, tail, or after a specific node.',
      realWorldExample: 'Removing a student from a roll list, removing a book from a shelf.',
      realWorldUse: 'Used in dynamic data management.',
      importance: 'Efficient deletion is important for performance.',
      detailedExplanation: 'Deletion from the head requires changing the head pointer. Deletion from the tail requires traversing to the end. Deletion after a node requires changing the next pointer of the previous node.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Deletion in Singly Linked List', url: 'https://www.geeksforgeeks.org/delete-singly-linked-list/' }
      ],
      sampleProgram: `// C program to delete a node from a singly linked list\n#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node* next;\n};\nint main() {\n    struct Node* head = NULL;\n    struct Node* second = NULL;\n    struct Node* third = NULL;\n    head = (struct Node*)malloc(sizeof(struct Node));\n    second = (struct Node*)malloc(sizeof(struct Node));\n    third = (struct Node*)malloc(sizeof(struct Node));\n    head->data = 1;\n    head->next = second;\n    second->data = 2;\n    second->next = third;\n    third->data = 3;\n    third->next = NULL;\n    int key = 2;\n    struct Node* temp = head;\n    struct Node* prev = NULL;\n    while(temp != NULL && temp->data != key) {\n        prev = temp;\n        temp = temp->next;\n    }\n    if(temp == NULL) {\n        printf("Element %d not found in the list.\\n", key);\n    } else if(prev == NULL) {\n        head = temp->next;\n        free(temp);\n    } else {\n        prev->next = temp->next;\n        free(temp);\n    }\n    printf("Singly Linked List after deletion: ");\n    struct Node* current = head;\n    while(current != NULL) {\n        printf("%d -> ", current->data);\n        current = current->next;\n    }\n    printf("NULL\\n");\n    return 0;\n}`
    }
  },
  {
    id: 'doubly-linked-list',
    name: 'Doubly linked list',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'A doubly linked list is a linear data structure where each node contains a data field and two pointers: one to the next node and one to the previous node.',
      definition: 'Each node has a data field and two pointers (prev and next).',
      realWorldExample: 'A train of wagons with passengers holding hands.',
      realWorldUse: 'Used in implementing dynamic data structures and efficient traversal in both directions.',
      importance: 'Doubly linked lists provide flexibility for traversal in both directions.',
      detailedExplanation: 'Each node has a prev pointer pointing to the previous node and a next pointer pointing to the next node. The head\'s prev is null, and the tail\'s next is null.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Doubly Linked List', url: 'https://www.geeksforgeeks.org/doubly-linked-list/' }
      ],
      sampleProgram: `// C program to create a doubly linked list\n#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node* prev;\n    struct Node* next;\n};\nint main() {\n    struct Node* head = NULL;\n    struct Node* second = NULL;\n    struct Node* third = NULL;\n    head = (struct Node*)malloc(sizeof(struct Node));\n    second = (struct Node*)malloc(sizeof(struct Node));\n    third = (struct Node*)malloc(sizeof(struct Node));\n    head->data = 1;\n    head->prev = NULL;\n    head->next = second;\n    second->data = 2;\n    second->prev = head;\n    second->next = third;\n    third->data = 3;\n    third->prev = second;\n    third->next = NULL;\n    printf("Doubly Linked List: ");\n    struct Node* temp = head;\n    while(temp != NULL) {\n        printf("%d -> ", temp->data);\n        temp = temp->next;\n    }\n    printf("NULL\\n");\n    return 0;\n}`
    }
  },
  {
    id: 'header-linked-list',
    name: 'Header linked list',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'A header linked list is a singly linked list where the head node serves as a header or sentinel node.',
      definition: 'The head node contains no data and its next pointer points to the first data node.',
      realWorldExample: 'A list of students with a header node for the list itself.',
      realWorldUse: 'Used to simplify list operations and handle empty lists.',
      importance: 'Simplifies list operations and handles edge cases.',
      detailedExplanation: 'The header node is a dummy node that makes it easier to handle empty lists and simplifies insertion/deletion at the head.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Header Linked List', url: 'https://www.geeksforgeeks.org/header-linked-list/' }
      ],
      sampleProgram: `// C program to create a header linked list\n#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node* next;\n};\nint main() {\n    struct Node* head = (struct Node*)malloc(sizeof(struct Node));\n    head->data = -1; // Header node data\n    head->next = NULL;\n    struct Node* second = (struct Node*)malloc(sizeof(struct Node));\n    second->data = 1;\n    second->next = NULL;\n    head->next = second;\n    printf("Header Linked List: ");\n    struct Node* temp = head;\n    while(temp != NULL) {\n        printf("%d -> ", temp->data);\n        temp = temp->next;\n    }\n    printf("NULL\\n");\n    return 0;\n}`
    }
  },
  {
    id: 'circular-linked-list',
    name: 'Circular linked list',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'A circular linked list is a type of linked list where the last node points back to the first node, creating a loop.',
      definition: 'The last node\'s next pointer points to the head node.',
      realWorldExample: 'A circular queue, a round-robin tournament.',
      realWorldUse: 'Used in implementing circular data structures and efficient traversal.',
      importance: 'Circular lists are useful for circular data.',
      detailedExplanation: 'The last node\'s next pointer points to the head node, creating a loop. This makes traversal easier and is useful for circular queues.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Circular Linked List', url: 'https://www.geeksforgeeks.org/circular-linked-list/' }
      ],
      sampleProgram: `// C program to create a circular linked list\n#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node* next;\n};\nint main() {\n    struct Node* head = NULL;\n    struct Node* second = NULL;\n    struct Node* third = NULL;\n    head = (struct Node*)malloc(sizeof(struct Node));\n    second = (struct Node*)malloc(sizeof(struct Node));\n    third = (struct Node*)malloc(sizeof(struct Node));\n    head->data = 1;\n    head->next = second;\n    second->data = 2;\n    second->next = third;\n    third->data = 3;\n    third->next = head;\n    printf("Circular Linked List: ");\n    struct Node* temp = head;\n    do {\n        printf("%d -> ", temp->data);\n        temp = temp->next;\n    } while(temp != head);\n    printf("NULL\\n");\n    return 0;\n}`
    }
  },

  // Stacks
  {
    id: 'stacks-definition',
    name: 'Stacks: Definition',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'A stack is a linear data structure that follows the Last In First Out (LIFO) principle.',
      definition: 'It consists of elements that are inserted and removed from only one end, called the top.',
      realWorldExample: 'A stack of plates, a call stack for function calls.',
      realWorldUse: 'Used in implementing recursive algorithms, backtracking, and undo operations.',
      importance: 'Stacks provide efficient access to the last element added.',
      detailedExplanation: 'Elements are added to the top (push) and removed from the top (pop). The top of the stack is always the most recently added element.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Stack', url: 'https://www.geeksforgeeks.org/stack/' }
      ],
      sampleProgram: ''
    }
  },
  {
    id: 'array-representation-stacks',
    name: 'Array representation of stacks',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Stacks can be implemented using arrays.',
      definition: 'An array is used to store the elements of the stack.',
      realWorldExample: 'A stack of plates, a call stack for function calls.',
      realWorldUse: 'Used in implementing recursive algorithms, backtracking, and undo operations.',
      importance: 'Array representation is simple and efficient.',
      detailedExplanation: 'The stack is implemented using an array. The top of the stack is tracked by an index. Elements are added to the top and removed from the top.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'Programiz: Stack', url: 'https://www.programiz.com/dsa/stack' }
      ],
      sampleProgram: `// C program to demonstrate stack using array\n#include <stdio.h>\n#define MAX_SIZE 100\nint stack[MAX_SIZE];\nint top = -1;\nvoid push(int x) {\n    if(top == MAX_SIZE - 1) {\n        printf("Stack Overflow\\n");\n        return;\n    }\n    stack[++top] = x;\n    printf("%d pushed to stack\\n", x);\n}\nint pop() {\n    if(top == -1) {\n        printf("Stack Underflow\\n");\n        return -1;\n    }\n    return stack[top--];\n}\nint main() {\n    push(10);\n    push(20);\n    push(30);\n    printf("%d popped from stack\\n", pop());\n    printf("%d popped from stack\\n", pop());\n    return 0;\n}`
    }
  },
  {
    id: 'linked-representation-stacks',
    name: 'Linked representation of stacks',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Stacks can also be implemented using linked lists.',
      definition: 'A linked list is used to store the elements of the stack.',
      realWorldExample: 'A stack of plates, a call stack for function calls.',
      realWorldUse: 'Used in implementing recursive algorithms, backtracking, and undo operations.',
      importance: 'Linked list representation is flexible and efficient.',
      detailedExplanation: 'The stack is implemented using a linked list. The top of the stack is the head of the list. Elements are added to the top and removed from the top.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Stack using Linked List', url: 'https://www.geeksforgeeks.org/stack-using-linked-list/' }
      ],
      sampleProgram: `// C program to demonstrate stack using linked list\n#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node* next;\n};\nstruct Stack {\n    struct Node* top;\n};\nvoid push(struct Stack* stack, int x) {\n    struct Node* new_node = (struct Node*)malloc(sizeof(struct Node));\n    new_node->data = x;\n    new_node->next = stack->top;\n    stack->top = new_node;\n    printf("%d pushed to stack\\n", x);\n}\nint pop(struct Stack* stack) {\n    if(stack->top == NULL) {\n        printf("Stack Underflow\\n");\n        return -1;\n    }\n    int x = stack->top->data;\n    struct Node* temp = stack->top;\n    stack->top = stack->top->next;\n    free(temp);\n    return x;\n}\nint main() {\n    struct Stack stack;\n    stack.top = NULL;\n    push(&stack, 10);\n    push(&stack, 20);\n    push(&stack, 30);\n    printf("%d popped from stack\\n", pop(&stack));\n    printf("%d popped from stack\\n", pop(&stack));\n    return 0;\n}`
    }
  },
  {
    id: 'stack-as-adt',
    name: 'Stack as ADT',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Stack ADT defines the operations that can be performed on a stack.',
      definition: 'ADT specifies operations like push, pop, peek, isEmpty, isFull.',
      realWorldExample: 'Spreadsheet formulas, function call stack.',
      realWorldUse: 'Used in software design to abstract stack operations.',
      importance: 'ADT provides a clear interface for stack manipulation.',
      detailedExplanation: 'Stack ADT focuses on what operations are supported, not how they are implemented. This abstraction allows for flexible and efficient stack handling.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Stack as ADT', url: 'https://www.geeksforgeeks.org/stack-data-structure/' }
      ],
      sampleProgram: ''
    }
  },

  // Arithmetic Expressions
  {
    id: 'polish-notation',
    name: 'Polish Notation',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Polish notation (also known as prefix notation) is a way of writing arithmetic and logical expressions.',
      definition: 'Operators are written before their operands.',
      realWorldExample: '3 + 4 is written as + 3 4.',
      realWorldUse: 'Used in compilers and interpreters to evaluate expressions.',
      importance: 'It eliminates the need for parentheses and simplifies parsing.',
      detailedExplanation: 'In Polish notation, operators precede their operands. For example, 3 + 4 is written as + 3 4. This notation is useful for compilers and interpreters to evaluate expressions efficiently.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Polish Notation', url: 'https://www.geeksforgeeks.org/polish-notation/' }
      ],
      sampleProgram: ''
    }
  },
  {
    id: 'infix-to-postfix',
    name: 'Conversion of infix expression to postfix expression',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Infix expressions are written in the standard way (operator between operands). Postfix expressions are written with operators after their operands.',
      definition: 'Infix to Postfix conversion involves operator precedence and associativity.',
      realWorldExample: 'Infix: A + B * C, Postfix: A B C * +.',
      realWorldUse: 'Used in compilers and interpreters to evaluate expressions.',
      importance: 'Postfix notation is easier to evaluate.',
      detailedExplanation: 'Infix to Postfix conversion involves handling operator precedence and associativity. Operators with higher precedence are evaluated first. This conversion is crucial for compilers and interpreters to evaluate expressions efficiently.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Infix to Postfix', url: 'https://www.geeksforgeeks.org/infix-to-postfix/' }
      ],
      sampleProgram: ''
    }
  },
  {
    id: 'eval-postfix',
    name: 'Evaluation of Postfix expression',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Postfix expressions are evaluated from left to right.',
      definition: 'Operators are applied to the operands immediately following them.',
      realWorldExample: 'Postfix: 2 3 + 4 * 5 -, Result: 17.',
      realWorldUse: 'Used in compilers and interpreters to evaluate expressions.',
      importance: 'Postfix notation is easier to evaluate.',
      detailedExplanation: 'Postfix expressions are evaluated by pushing operands onto a stack and applying operators to the top two operands. This is a fundamental operation in compilers and interpreters.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Evaluation of Postfix', url: 'https://www.geeksforgeeks.org/evaluation-postfix-expression/' }
      ],
      sampleProgram: ''
    }
  },
  {
    id: 'application-stacks',
    name: 'Application of Stacks',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Stacks have various applications in computer science.',
      definition: 'They are used for function call management, undo/redo operations, backtracking, and expression evaluation.',
      realWorldExample: 'Function call stack, undo/redo in text editors, browser history.',
      realWorldUse: 'Used in implementing complex algorithms and data structures.',
      importance: 'Stacks are versatile and widely used.',
      detailedExplanation: 'Stacks are used for function call management, undo/redo operations, backtracking, and expression evaluation. They are also used in implementing recursive algorithms and data structures.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Applications of Stacks', url: 'https://www.geeksforgeeks.org/applications-of-stack/' }
      ],
      sampleProgram: ''
    }
  },
  {
    id: 'recursion',
    name: 'Recursion',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Recursion is a programming technique where a function calls itself.',
      definition: 'A recursive function is one that calls itself directly or indirectly.',
      realWorldExample: 'Calculating factorial, traversing a tree, sorting algorithms.',
      realWorldUse: 'Used in implementing complex algorithms and data structures.',
      importance: 'Recursion simplifies complex problems.',
      detailedExplanation: 'Recursion involves a function calling itself. It\'s useful for problems that can be broken down into smaller, similar sub-problems. The base case stops the recursion.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Recursion', url: 'https://www.geeksforgeeks.org/recursion/' }
      ],
      sampleProgram: ''
    }
  },
  {
    id: 'towers-of-hanoi',
    name: 'Towers of Hanoi',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'The Towers of Hanoi is a classic problem in recursion and data structures.',
      definition: 'It involves moving disks from one peg to another, following specific rules.',
      realWorldExample: 'A puzzle where you move disks from one pole to another.',
      realWorldUse: 'Used in teaching recursion and data structures.',
      importance: 'It\'s a classic problem in computer science.',
      detailedExplanation: 'The Towers of Hanoi is a problem where you have three pegs and n disks of different sizes. The goal is to move all disks from one peg to another, following these rules: 1. Only one disk can be moved at a time. 2. A disk can only be placed on top of a larger disk or on an empty peg. 3. All disks start on one peg and must be moved to another peg using the third peg as an auxiliary.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Towers of Hanoi', url: 'https://www.geeksforgeeks.org/tower-of-hanoi/' }
      ],
      sampleProgram: ''
    }
  },
  {
    id: 'recursive-procedures-stack',
    name: 'Implementation of recursive procedures by stack',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Recursive procedures can be implemented using a stack.',
      definition: 'A stack is used to manage the call stack for function calls.',
      realWorldExample: 'Function call stack, undo/redo in text editors, browser history.',
      realWorldUse: 'Used in implementing complex algorithms and data structures.',
      importance: 'Stacks are essential for managing function calls in recursion.',
      detailedExplanation: 'Recursive procedures are implemented using a stack. Each recursive call pushes a new frame onto the stack. The base case pops frames off the stack. This is how the call stack manages function calls and local variables.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Recursive Procedures by Stack', url: 'https://www.geeksforgeeks.org/recursive-procedures-by-stack/' }
      ],
      sampleProgram: ''
    }
  },

  // Queues
  {
    id: 'queues-definition',
    name: 'Queues: Definition',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'A queue is a linear data structure that follows the First In First Out (FIFO) principle.',
      definition: 'It consists of elements that are inserted at the rear and removed from the front.',
      realWorldExample: 'A queue of people waiting in a line, a print spooler.',
      realWorldUse: 'Used in implementing waiting lists, scheduling, and breadth-first search.',
      importance: 'Queues provide efficient access to the oldest element.',
      detailedExplanation: 'Elements are added to the rear (enqueue) and removed from the front (dequeue). The front of the queue is always the oldest element.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Queue', url: 'https://www.geeksforgeeks.org/queue/' }
      ],
      sampleProgram: ''
    }
  },
  {
    id: 'array-representation-queue',
    name: 'Array representation of queue',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Queues can be implemented using arrays.',
      definition: 'An array is used to store the elements of the queue.',
      realWorldExample: 'A queue of people waiting in a line, a print spooler.',
      realWorldUse: 'Used in implementing waiting lists, scheduling, and breadth-first search.',
      importance: 'Array representation is simple and efficient.',
      detailedExplanation: 'The queue is implemented using an array. The front and rear pointers track the start and end of the queue. Elements are added to the rear and removed from the front.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'Programiz: Queue', url: 'https://www.programiz.com/dsa/queue' }
      ],
      sampleProgram: `// C program to demonstrate queue using array\n#include <stdio.h>\n#define MAX_SIZE 100\nint queue[MAX_SIZE];\nint front = -1;\nint rear = -1;\nvoid enqueue(int x) {\n    if(rear == MAX_SIZE - 1) {\n        printf("Queue Overflow\\n");\n        return;\n    }\n    if(front == -1) front = 0;\n    queue[++rear] = x;\n    printf("%d enqueued to queue\\n", x);\n}\nint dequeue() {\n    if(front == -1 || front > rear) {\n        printf("Queue Underflow\\n");\n        return -1;\n    }\n    int x = queue[front++];\n    if(front > rear) front = rear = -1;\n    return x;\n}\nint main() {\n    enqueue(10);\n    enqueue(20);\n    enqueue(30);\n    printf("%d dequeued from queue\\n", dequeue());\n    printf("%d dequeued from queue\\n", dequeue());\n    return 0;\n}`
    }
  },
  {
    id: 'linked-representation-queues',
    name: 'Linked list representation of queues',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Queues can also be implemented using linked lists.',
      definition: 'A linked list is used to store the elements of the queue.',
      realWorldExample: 'A queue of people waiting in a line, a print spooler.',
      realWorldUse: 'Used in implementing waiting lists, scheduling, and breadth-first search.',
      importance: 'Linked list representation is flexible and efficient.',
      detailedExplanation: 'The queue is implemented using a linked list. The front and rear pointers track the start and end of the queue. Elements are added to the rear and removed from the front.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Queue using Linked List', url: 'https://www.geeksforgeeks.org/queue-using-linked-list/' }
      ],
      sampleProgram: `// C program to demonstrate queue using linked list\n#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node* next;\n};\nstruct Queue {\n    struct Node* front;\n    struct Node* rear;\n};\nvoid enqueue(struct Queue* queue, int x) {\n    struct Node* new_node = (struct Node*)malloc(sizeof(struct Node));\n    new_node->data = x;\n    new_node->next = NULL;\n    if(queue->rear == NULL) {\n        queue->front = queue->rear = new_node;\n    } else {\n        queue->rear->next = new_node;\n        queue->rear = new_node;\n    }\n    printf("%d enqueued to queue\\n", x);\n}\nint dequeue(struct Queue* queue) {\n    if(queue->front == NULL) {\n        printf("Queue Underflow\\n");\n        return -1;\n    }\n    int x = queue->front->data;\n    struct Node* temp = queue->front;\n    queue->front = queue->front->next;\n    if(queue->front == NULL) queue->rear = NULL;\n    free(temp);\n    return x;\n}\nint main() {\n    struct Queue queue;\n    queue.front = queue.rear = NULL;\n    enqueue(&queue, 10);\n    enqueue(&queue, 20);\n    enqueue(&queue, 30);\n    printf("%d dequeued from queue\\n", dequeue(&queue));\n    printf("%d dequeued from queue\\n", dequeue(&queue));\n    return 0;\n}`
    }
  },
  {
    id: 'simple-queue',
    name: 'Simple queue',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'A simple queue is a basic queue implementation.',
      definition: 'It has a front and rear pointer.',
      realWorldExample: 'A queue of people waiting in a line, a print spooler.',
      realWorldUse: 'Used in implementing waiting lists, scheduling, and breadth-first search.',
      importance: 'Simple queue is a fundamental data structure.',
      detailedExplanation: 'A simple queue has a front and rear pointer. Elements are added to the rear and removed from the front. It\'s a basic FIFO structure.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Simple Queue', url: 'https://www.geeksforgeeks.org/queue/' }
      ],
      sampleProgram: `// C program to demonstrate simple queue\n#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node* next;\n};\nstruct Queue {\n    struct Node* front;\n    struct Node* rear;\n};\nvoid enqueue(struct Queue* queue, int x) {\n    struct Node* new_node = (struct Node*)malloc(sizeof(struct Node));\n    new_node->data = x;\n    new_node->next = NULL;\n    if(queue->rear == NULL) {\n        queue->front = queue->rear = new_node;\n    } else {\n        queue->rear->next = new_node;\n        queue->rear = new_node;\n    }\n    printf("%d enqueued to queue\\n", x);\n}\nint dequeue(struct Queue* queue) {\n    if(queue->front == NULL) {\n        printf("Queue Underflow\\n");\n        return -1;\n    }\n    int x = queue->front->data;\n    struct Node* temp = queue->front;\n    queue->front = queue->front->next;\n    if(queue->front == NULL) queue->rear = NULL;\n    free(temp);\n    return x;\n}\nint main() {\n    struct Queue queue;\n    queue.front = queue.rear = NULL;\n    enqueue(&queue, 10);\n    enqueue(&queue, 20);\n    enqueue(&queue, 30);\n    printf("%d dequeued from queue\\n", dequeue(&queue));\n    printf("%d dequeued from queue\\n", dequeue(&queue));\n    return 0;\n}`
    }
  },
  {
    id: 'circular-queue',
    name: 'Circular queue',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'A circular queue is a queue that wraps around after reaching the end of the array.',
      definition: 'The rear pointer wraps around to the front when full.',
      realWorldExample: 'A circular buffer, a round-robin scheduler.',
      realWorldUse: 'Used in implementing circular data structures and efficient queue management.',
      importance: 'Circular queues are useful for circular data.',
      detailedExplanation: 'A circular queue is implemented using an array. The front and rear pointers wrap around to the beginning when full. This is useful for scenarios where the queue is expected to be circular, like a buffer or a round-robin scheduler.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Circular Queue', url: 'https://www.geeksforgeeks.org/circular-queue/' }
      ],
      sampleProgram: `// C program to demonstrate circular queue\n#include <stdio.h>\n#define MAX_SIZE 5\nint queue[MAX_SIZE];\nint front = -1;\nint rear = -1;\nvoid enqueue(int x) {\n    if((rear + 1) % MAX_SIZE == front) {\n        printf("Queue Overflow\\n");\n        return;\n    }\n    if(front == -1) front = 0;\n    rear = (rear + 1) % MAX_SIZE;\n    queue[rear] = x;\n    printf("%d enqueued to queue\\n", x);\n}\nint dequeue() {\n    if(front == -1) {\n        printf("Queue Underflow\\n");\n        return -1;\n    }\n    int x = queue[front];\n    if(front == rear) front = rear = -1;\n    else front = (front + 1) % MAX_SIZE;\n    return x;\n}\nint main() {\n    enqueue(10);\n    enqueue(20);\n    enqueue(30);\n    enqueue(40);\n    enqueue(50);\n    printf("%d dequeued from queue\\n", dequeue());\n    printf("%d dequeued from queue\\n", dequeue());\n    enqueue(60);\n    enqueue(70);\n    printf("%d dequeued from queue\\n", dequeue());\n    printf("%d dequeued from queue\\n", dequeue());\n    printf("%d dequeued from queue\\n", dequeue());\n    printf("%d dequeued from queue\\n", dequeue());\n    return 0;\n}`
    }
  },
  {
    id: 'double-ended-queue',
    name: 'Double-ended queue',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'A double-ended queue (deque) is a linear data structure that allows insertion and deletion at both ends.',
      definition: 'It has front and rear pointers, allowing insertion at the front and rear, and deletion at the front and rear.',
      realWorldExample: 'A queue that can grow from both ends, a print spooler.',
      realWorldUse: 'Used in implementing waiting lists, scheduling, and breadth-first search.',
      importance: 'Deque provides flexibility for both ends.',
      detailedExplanation: 'A deque is implemented using an array or a linked list. It has front and rear pointers. Elements can be added to the front and rear, and removed from the front and rear. It\'s a flexible structure.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Deque', url: 'https://www.geeksforgeeks.org/deque/' }
      ],
      sampleProgram: `// C program to demonstrate double-ended queue\n#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node* next;\n    struct Node* prev;\n};\nstruct Deque {\n    struct Node* front;\n    struct Node* rear;\n};\nvoid insert_front(struct Deque* deque, int x) {\n    struct Node* new_node = (struct Node*)malloc(sizeof(struct Node));\n    new_node->data = x;\n    new_node->next = deque->front;\n    new_node->prev = NULL;\n    if(deque->front != NULL) deque->front->prev = new_node;\n    deque->front = new_node;\n    if(deque->rear == NULL) deque->rear = new_node;\n    printf("%d inserted at front\\n", x);\n}\nvoid insert_rear(struct Deque* deque, int x) {\n    struct Node* new_node = (struct Node*)malloc(sizeof(struct Node));\n    new_node->data = x;\n    new_node->next = NULL;\n    new_node->prev = deque->rear;\n    if(deque->rear != NULL) deque->rear->next = new_node;\n    deque->rear = new_node;\n    if(deque->front == NULL) deque->front = new_node;\n    printf("%d inserted at rear\\n", x);\n}\nint delete_front(struct Deque* deque) {\n    if(deque->front == NULL) {\n        printf("Deque Underflow\\n");\n        return -1;\n    }\n    int x = deque->front->data;\n    struct Node* temp = deque->front;\n    deque->front = deque->front->next;\n    if(deque->front == NULL) deque->rear = NULL;\n    else deque->front->prev = NULL;\n    free(temp);\n    return x;\n}\nint delete_rear(struct Deque* deque) {\n    if(deque->rear == NULL) {\n        printf("Deque Underflow\\n");\n        return -1;\n    }\n    int x = deque->rear->data;\n    struct Node* temp = deque->rear;\n    deque->rear = deque->rear->prev;\n    if(deque->rear == NULL) deque->front = NULL;\n    else deque->rear->next = NULL;\n    free(temp);\n    return x;\n}\nint main() {\n    struct Deque deque;\n    deque.front = deque.rear = NULL;\n    insert_front(&deque, 10);\n    insert_rear(&deque, 20);\n    insert_front(&deque, 30);\n    insert_rear(&deque, 40);\n    printf("%d deleted from front\\n", delete_front(&deque));\n    printf("%d deleted from rear\\n", delete_rear(&deque));\n    printf("%d deleted from front\\n", delete_front(&deque));\n    printf("%d deleted from rear\\n", delete_rear(&deque));\n    printf("%d deleted from front\\n", delete_front(&deque));\n    printf("%d deleted from rear\\n", delete_rear(&deque));\n    return 0;\n}`
    }
  },
  {
    id: 'priority-queue',
    name: 'Priority queue',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'A priority queue is a queue where each element has a priority, and elements are dequeued based on their priority.',
      definition: 'Elements with higher priority are dequeued before elements with lower priority.',
      realWorldExample: 'Hospital emergency room, print spooler with different priorities.',
      realWorldUse: 'Used in implementing waiting lists, scheduling, and breadth-first search.',
      importance: 'Priority queue provides efficient access to the highest priority element.',
      detailedExplanation: 'A priority queue is implemented using a heap (e.g., binary heap) or a sorted array. Elements are added with a priority, and the element with the highest priority is always at the front.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Priority Queue', url: 'https://www.geeksforgeeks.org/priority-queue/' }
      ],
      sampleProgram: ''
    }
  },
  {
    id: 'operations-queues',
    name: 'Operations on Queues',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Various operations can be performed on queues.',
      definition: 'Enqueue (add), Dequeue (remove), Peek (view front), isEmpty, isFull.',
      realWorldExample: 'Adding a new student to a roll list, removing a product from inventory.',
      realWorldUse: 'Used in dynamic data management.',
      importance: 'Operations are fundamental for queue manipulation.',
      detailedExplanation: 'Enqueue adds an element to the rear. Dequeue removes an element from the front. Peek views the element at the front without removing it. isEmpty checks if the queue is empty. isFull checks if the queue is full (for bounded queues).',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Operations on Queue', url: 'https://www.geeksforgeeks.org/queue-data-structure/' }
      ],
      sampleProgram: ''
    }
  },
  {
    id: 'applications-queues',
    name: 'Applications of queues',
    semester: 1,
    subject: 'Data Structures',
    unit: 'Unit II',
    content: {
      introduction: 'Queues have various applications in computer science.',
      definition: 'They are used for breadth-first search, round-robin scheduling, and message passing.',
      realWorldExample: 'Breadth-first search in graphs, print spooler, message passing in distributed systems.',
      realWorldUse: 'Used in implementing complex algorithms and data structures.',
      importance: 'Queues are versatile and widely used.',
      detailedExplanation: 'Queues are used for breadth-first search in graphs, round-robin scheduling, and message passing in distributed systems. They are also used in implementing complex algorithms and data structures.',
      youtubeLinks: ['https://www.youtube.com/watch?v=ZwFA3YMfkoc'],
      externalLinks: [
        { title: 'GeeksforGeeks: Applications of Queue', url: 'https://www.geeksforgeeks.org/applications-of-queue/' }
      ],
      sampleProgram: ''
    }
  }
];