import { Topic } from '../syllabus';

export const javaOOPUnit3: Topic[] = [
  {
    id: 'packages',
    name: 'Packages',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'Packages are used to group related classes, interfaces, and sub-packages in Java.',
      definition: 'A package is a namespace that organizes a set of related classes and interfaces.',
      realWorldExample: 'The java.util package contains utility classes like ArrayList, Scanner, etc.',
      realWorldUse: 'Used to avoid class name conflicts and to control access.',
      importance: 'Packages help in modularizing code, improving maintainability, and reusability.',
      detailedExplanation: 'Packages provide a way to bundle related code together. Java has built-in packages (like java.lang, java.util) and allows users to create their own. Packages also help with access control and code organization.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Packages in Java', url: 'https://www.geeksforgeeks.org/packages-in-java/' },
        { title: 'TutorialsPoint: Java Packages', url: 'https://www.tutorialspoint.com/java/java_packages.htm' }
      ],
      sampleProgram: `<div>// Java Example: Creating a package and using a class
package mypack;
public class MyClass {
  public void show() {
    System.out.println("Hello from package!");
  }
}
// In another file
import mypack.MyClass;
public class Test {
  public static void main(String[] args) {
    MyClass obj = new MyClass();
    obj.show();
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`
    }
  },
  {
    id: 'built-in-packages',
    name: 'Built-in Packages',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'Built-in packages are pre-defined packages in Java that provide essential functionality.',
      definition: 'Built-in packages are part of the Java Development Kit (JDK) and are available by default.',
      realWorldExample: 'The java.lang package contains fundamental classes like String, System, Math, etc.',
      realWorldUse: 'Used for basic operations and common utilities.',
      importance: 'Built-in packages save development time and ensure consistent behavior.',
      detailedExplanation: 'Built-in packages are essential for any Java application. They include java.lang for fundamental classes, java.util for collections, java.io for input/output, java.net for networking, java.sql for database operations, and many more. These packages are automatically available in your project.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Built-in Packages in Java', url: 'https://www.geeksforgeeks.org/built-in-packages-in-java/' },
        { title: 'TutorialsPoint: Built-in Packages', url: 'https://www.tutorialspoint.com/java/java_packages.htm' }
      ],
      sampleProgram: `<div>// Java Example: Using built-in package java.util
import java.util.ArrayList;
public class BuiltInPackageDemo {
  public static void main(String[] args) {
    ArrayList<String> list = new ArrayList<>();
    list.add("Apple");
    list.add("Banana");
    System.out.println(list);
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`
    }
  },
  {
    id: 'user-defined-packages',
    name: 'User-defined Packages',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'User-defined packages are packages created by the programmer to organize their own classes and interfaces.',
      definition: 'A user-defined package is a collection of classes and interfaces that are grouped together.',
      realWorldExample: 'A package for a banking application might contain classes like Account, Transaction, Customer.',
      realWorldUse: 'Used to manage large projects, avoid name conflicts, and improve code organization.',
      importance: 'User-defined packages help in managing complex projects and reusability.',
      detailedExplanation: 'User-defined packages are created using the "package" keyword. They can be in a single file or spread across multiple files. Packages help in organizing code, preventing name conflicts, and making it easier to maintain.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: User-defined Packages', url: 'https://www.geeksforgeeks.org/user-defined-packages-in-java/' },
        { title: 'TutorialsPoint: User-defined Packages', url: 'https://www.tutorialspoint.com/java/java_packages.htm' }
      ]
    }
  },
  {
    id: 'creating-using-package',
    name: 'Creating and using a Package',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'Creating and using a package involves defining the package and importing classes from it.',
      definition: 'A package is defined using the "package" keyword, and classes are imported using the "import" keyword.',
      realWorldExample: 'package com.example.myapp; import com.example.myapp.MyClass;',
      realWorldUse: 'Used to organize code, avoid name conflicts, and reuse classes.',
      importance: 'Creating and using packages is fundamental to Java programming.',
      detailedExplanation: 'To create a package, you use the "package" keyword followed by the package name. For example, "package com.example.myapp;". To use a class from a package, you use the "import" keyword followed by the package name and the class name. For example, "import com.example.myapp.MyClass;". Packages must be defined at the top of the file, before any class definition.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Creating Packages', url: 'https://www.geeksforgeeks.org/creating-packages-in-java/' },
        { title: 'TutorialsPoint: Creating Packages', url: 'https://www.tutorialspoint.com/java/java_packages.htm' }
      ]
    }
  },
  {
    id: 'package-multiple-files',
    name: 'To create a package spread across multiple files',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'When a package contains multiple classes, they are typically spread across multiple files.',
      definition: 'A package can contain multiple classes, each in its own file.',
      realWorldExample: 'package com.example.myapp; // MyClass.java file: package com.example.myapp; class MyClass { ... }',
      realWorldUse: 'Used for large projects, modularity, and better organization.',
      importance: 'Spreading packages across multiple files is essential for managing large projects.',
      detailedExplanation: 'A package can contain multiple classes, each in its own file. For example, if a package "com.example.myapp" contains "MyClass", the file would be named "MyClass.java". The "package" keyword must be at the top of each file within the package. This allows for better organization and readability of the code.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Multiple Files in a Package', url: 'https://www.geeksforgeeks.org/multiple-files-in-a-package-in-java/' },
        { title: 'TutorialsPoint: Multiple Files', url: 'https://www.tutorialspoint.com/java/java_packages.htm' }
      ]
    }
  },
  {
    id: 'importing-classes',
    name: 'Importing classes from a package',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'Importing classes from a package is necessary to use classes defined in that package.',
      definition: 'Importing a class means making it available for use in the current file.',
      realWorldExample: 'import com.example.myapp.MyClass;',
      realWorldUse: 'Used to avoid typing the full package name every time you use a class.',
      importance: 'Importing classes is essential for reusability and code organization.',
      detailedExplanation: 'To import a class from a package, you use the "import" keyword followed by the package name and the class name. For example, "import com.example.myapp.MyClass;". This allows you to use the class directly by its simple name, like "MyClass myObject = new MyClass();". The "import" statement must be at the top of the file, before any class definition.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Importing Classes', url: 'https://www.geeksforgeeks.org/importing-classes-in-java/' },
        { title: 'TutorialsPoint: Importing Classes', url: 'https://www.tutorialspoint.com/java/java_packages.htm' }
      ]
    }
  },
  {
    id: 'nested-packages',
    name: 'Nested packages',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'Packages can be nested, meaning one package can contain another package.',
      definition: 'A nested package is a package that is defined inside another package.',
      realWorldExample: 'package com.example.myapp; package com.example.myapp.sub; class MyClass { ... }',
      realWorldUse: 'Used for organizing large projects, modularity, and better code organization.',
      importance: 'Nested packages help in managing complex projects and code organization.',
      detailedExplanation: 'A package can contain another package. For example, "package com.example.myapp; package com.example.myapp.sub;". This allows for a hierarchical organization of code. The "package" keyword must be at the top of each file within the package. This structure is particularly useful for large projects and modularity.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Nested Packages', url: 'https://www.geeksforgeeks.org/nested-packages-in-java/' },
        { title: 'TutorialsPoint: Nested Packages', url: 'https://www.tutorialspoint.com/java/java_packages.htm' }
      ]
    }
  },
  {
    id: 'extending-imported-class',
    name: 'Extending an imported class',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'Extending an imported class means inheriting properties and methods from that class.',
      definition: 'Inheritance is a mechanism where one class can inherit properties and methods from another class.',
      realWorldExample: 'import com.example.myapp.MyClass; class MySubClass extends MyClass { ... }',
      realWorldUse: 'Used to reuse code, extend functionality, and maintain consistency.',
      importance: 'Extending imported classes is essential for code reusability and inheritance.',
      detailedExplanation: 'To extend a class, you use the "extends" keyword. For example, "import com.example.myapp.MyClass; class MySubClass extends MyClass { ... }". This allows "MySubClass" to inherit all the properties and methods of "MyClass". The "extends" keyword must be after the class definition. This is a fundamental concept of object-oriented programming.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Inheritance in Java', url: 'https://www.geeksforgeeks.org/inheritance-in-java/' },
        { title: 'TutorialsPoint: Inheritance', url: 'https://www.tutorialspoint.com/java/java_inheritance.htm' }
      ]
    }
  },
  {
    id: 'classes-interfaces-package',
    name: 'Classes and interfaces in a package and using them',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'Understanding classes and interfaces within a package is crucial for Java programming.',
      definition: 'A class is a blueprint for creating objects, and an interface is a collection of abstract methods.',
      realWorldExample: 'package com.example.myapp; class MyClass { ... } interface MyInterface { ... }',
      realWorldUse: 'Used to model real-world entities, define contracts, and organize code.',
      importance: 'Classes and interfaces are the building blocks of Java programs.',
      detailedExplanation: 'A class is a blueprint for creating objects, and an interface is a collection of abstract methods. They are defined using the "class" and "interface" keywords. For example, "package com.example.myapp; class MyClass { ... } interface MyInterface { ... }". Classes can have attributes, methods, constructors, and can be extended. Interfaces define a contract and can be implemented by classes. This is a fundamental concept of object-oriented programming.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Classes and Interfaces', url: 'https://www.geeksforgeeks.org/classes-and-interfaces-in-java/' },
        { title: 'TutorialsPoint: Classes and Interfaces', url: 'https://www.tutorialspoint.com/java/java_classes.htm' }
      ]
    }
  },
  {
    id: 'static-importing',
    name: 'Static importing',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'Static importing allows you to use static members (like static methods, variables) directly without the class name.',
      definition: 'Static members are members that belong to the class itself, not to any specific object.',
      realWorldExample: 'import static com.example.myapp.MyClass.staticMethod;',
      realWorldUse: 'Used to avoid typing the class name every time you call a static method.',
      importance: 'Static importing is useful for reusable code and cleaner syntax.',
      detailedExplanation: 'Static members are members that belong to the class itself, not to any specific object. They are defined using the "static" keyword. For example, "package com.example.myapp; class MyClass { static void staticMethod() { ... } }". To use a static method, you can import it statically. For example, "import static com.example.myapp.MyClass.staticMethod;". This allows you to call "staticMethod()" directly, like "MyClass.staticMethod();". The "import static" statement must be at the top of the file, before any class definition.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Static Import', url: 'https://www.geeksforgeeks.org/static-import-in-java/' },
        { title: 'TutorialsPoint: Static Import', url: 'https://www.tutorialspoint.com/java/java_static_import.htm' }
      ]
    }
  },
  {
    id: 'access-control',
    name: 'Access Control',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'Access control in Java determines how classes and members can be accessed.',
      definition: 'Access modifiers are keywords that control the visibility and accessibility of classes and their members.',
      realWorldExample: 'package com.example.myapp; class MyClass { private int myVar; public void myMethod() { ... } }',
      realWorldUse: 'Used to protect data, hide implementation details, and control visibility.',
      importance: 'Access control is essential for encapsulation and security.',
      detailedExplanation: 'Access modifiers are keywords that control the visibility and accessibility of classes and their members. They are used to protect data, hide implementation details, and control visibility. For example, "package com.example.myapp; class MyClass { private int myVar; public void myMethod() { ... } }". The "private" keyword makes a member accessible only within the class. The "public" keyword makes a member accessible from anywhere. Other modifiers include "protected", "default" (no modifier), and "private". This is a fundamental concept of object-oriented programming.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Access Control', url: 'https://www.geeksforgeeks.org/access-control-in-java/' },
        { title: 'TutorialsPoint: Access Control', url: 'https://www.tutorialspoint.com/java/java_access_modifiers.htm' }
      ]
    }
  },
  {
    id: 'arrays-1d',
    name: 'Arrays – One Dimensional Arrays',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'Arrays are fundamental data structures in Java for storing collections of data.',
      definition: 'An array is a collection of elements of the same type, stored in contiguous memory locations.',
      realWorldExample: 'int[] myArray = new int[5]; myArray[0] = 10; myArray[1] = 20;',
      realWorldUse: 'Used for storing multiple values of the same type.',
      importance: 'Arrays are essential for managing collections of data.',
      detailedExplanation: 'An array is a collection of elements of the same type, stored in contiguous memory locations. For example, "int[] myArray = new int[5]; myArray[0] = 10; myArray[1] = 20;". Arrays have a fixed size, which is determined at the time of creation. You can access elements using their index (starting from 0). Arrays can be primitive types (like int, double) or objects. This is a fundamental concept of data structures.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Arrays in Java', url: 'https://www.geeksforgeeks.org/arrays-in-java/' },
        { title: 'TutorialsPoint: Arrays', url: 'https://www.tutorialspoint.com/java/java_array.htm' }
      ]
    }
  },
  {
    id: 'arrays-2d',
    name: 'Arrays – Two Dimensional Arrays',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'Two-dimensional arrays are arrays of arrays, useful for representing tables or matrices.',
      definition: 'A two-dimensional array is an array of arrays, where each element is itself an array.',
      realWorldExample: 'int[][] my2DArray = new int[3][4]; my2DArray[0][0] = 10; my2DArray[1][2] = 20;',
      realWorldUse: 'Used for representing tables, matrices, and grid-based data.',
      importance: 'Two-dimensional arrays are essential for managing grid-based data.',
      detailedExplanation: 'A two-dimensional array is an array of arrays, where each element is itself an array. For example, "int[][] my2DArray = new int[3][4]; my2DArray[0][0] = 10; my2DArray[1][2] = 20;". This is useful for representing tables, matrices, and grid-based data. The first dimension determines the number of rows, and the second dimension determines the number of columns. This is a fundamental concept of data structures.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Two Dimensional Arrays', url: 'https://www.geeksforgeeks.org/two-dimensional-arrays-in-java/' },
        { title: 'TutorialsPoint: Two Dimensional Arrays', url: 'https://www.tutorialspoint.com/java/java_array.htm' }
      ]
    }
  },
  {
    id: 'arrays-3d',
    name: 'Arrays – Three Dimensional Arrays',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'Three-dimensional arrays are arrays of arrays of arrays, useful for representing 3D data.',
      definition: 'A three-dimensional array is an array of arrays of arrays, where each element is itself an array.',
      realWorldExample: 'int[][][] my3DArray = new int[2][3][4]; my3DArray[0][1][2] = 10; my3DArray[1][0][0] = 20;',
      realWorldUse: 'Used for representing 3D data, such as a cube or a grid in a game.',
      importance: 'Three-dimensional arrays are essential for managing 3D data.',
      detailedExplanation: 'A three-dimensional array is an array of arrays of arrays, where each element is itself an array. For example, "int[][][] my3DArray = new int[2][3][4]; my3DArray[0][1][2] = 10; my3DArray[1][0][0] = 20;". This is useful for representing 3D data, such as a cube or a grid in a game. The first dimension determines the number of 2D arrays, the second determines the number of rows in each 2D array, and the third determines the number of columns in each row. This is a fundamental concept of data structures.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Three Dimensional Arrays', url: 'https://www.geeksforgeeks.org/three-dimensional-arrays-in-java/' },
        { title: 'TutorialsPoint: Three Dimensional Arrays', url: 'https://www.tutorialspoint.com/java/java_array.htm' }
      ]
    }
  },
  {
    id: 'arrays-methods',
    name: 'Arrays and methods',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'Arrays have various methods for manipulation and retrieval of data.',
      definition: 'Arrays have methods like length, sort, binarySearch, etc., for common operations.',
      realWorldExample: 'int[] myArray = new int[5]; myArray.length; myArray.sort(); myArray.binarySearch(10);',
      realWorldUse: 'Used for sorting, searching, and retrieving data efficiently.',
      importance: 'Arrays have powerful methods for data manipulation.',
      detailedExplanation: 'Arrays have various methods for manipulation and retrieval of data. For example, "int[] myArray = new int[5]; myArray.length; myArray.sort(); myArray.binarySearch(10);". The "length" method returns the size of the array. The "sort()" method sorts the array in ascending order. The "binarySearch()" method searches for an element in the array and returns its index. These are fundamental methods for working with arrays.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Arrays and Methods', url: 'https://www.geeksforgeeks.org/arrays-and-methods-in-java/' },
        { title: 'TutorialsPoint: Arrays and Methods', url: 'https://www.tutorialspoint.com/java/java_array.htm' }
      ]
    }
  },
  {
    id: 'arrays-within-classes',
    name: 'Arrays within classes',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'Arrays can be attributes of classes, allowing objects to hold collections of data.',
      definition: 'An array attribute is a variable that is itself an array.',
      realWorldExample: 'package com.example.myapp; class MyClass { int[] myArray; }',
      realWorldUse: 'Used for managing collections of data within objects.',
      importance: 'Arrays within classes are essential for managing data within objects.',
      detailedExplanation: 'An array attribute is a variable that is itself an array. For example, "package com.example.myapp; class MyClass { int[] myArray; }". This allows an object to hold a collection of data. The array can be of any type, including primitive types or objects. This is a fundamental concept of object-oriented programming.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Arrays within Classes', url: 'https://www.geeksforgeeks.org/arrays-within-classes-in-java/' },
        { title: 'TutorialsPoint: Arrays within Classes', url: 'https://www.tutorialspoint.com/java/java_array.htm' }
      ]
    }
  },
  {
    id: 'array-of-objects',
    name: 'Array of objects',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'An array can contain objects of the same type or different types.',
      definition: 'An array of objects is an array where each element is an object.',
      realWorldExample: 'package com.example.myapp; class MyClass { Object[] myObjects; }',
      realWorldUse: 'Used for managing collections of objects.',
      importance: 'Arrays of objects are essential for managing collections of objects.',
      detailedExplanation: 'An array of objects is an array where each element is an object. For example, "package com.example.myapp; class MyClass { Object[] myObjects; }". This allows an array to hold multiple objects. The objects can be of the same type or different types. This is a fundamental concept of object-oriented programming.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Array of Objects', url: 'https://www.geeksforgeeks.org/array-of-objects-in-java/' },
        { title: 'TutorialsPoint: Array of Objects', url: 'https://www.tutorialspoint.com/java/java_array.htm' }
      ]
    }
  },
  {
    id: 'strings',
    name: 'Strings',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'Strings are sequences of characters in Java.',
      definition: 'A string is an object that represents a sequence of characters.',
      realWorldExample: 'String myString = "Hello, World!";',
      realWorldUse: 'Used for storing and manipulating text data.',
      importance: 'Strings are essential for handling text data.',
      detailedExplanation: 'A string is an object that represents a sequence of characters. For example, "String myString = "Hello, World!";". Strings are immutable, meaning they cannot be changed once created. They have various methods for manipulation, such as "length()", "concat()", "substring()", etc. This is a fundamental concept of string handling.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Strings in Java', url: 'https://www.geeksforgeeks.org/strings-in-java/' },
        { title: 'TutorialsPoint: Strings', url: 'https://www.tutorialspoint.com/java/java_string.htm' }
      ]
    }
  },
  {
    id: 'string-class',
    name: 'The String Class',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'The String class is the primary class for handling text data in Java.',
      definition: 'The String class is a part of the java.lang package and represents a sequence of characters.',
      realWorldExample: 'String myString = new String("Hello");',
      realWorldUse: 'Used for creating and manipulating strings.',
      importance: 'The String class is the foundation for string manipulation in Java.',
      detailedExplanation: 'The String class is a part of the java.lang package and represents a sequence of characters. For example, "String myString = new String("Hello");". Strings are immutable, meaning they cannot be changed once created. They have various methods for manipulation, such as "length()", "concat()", "substring()", etc. This is a fundamental concept of string handling.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: String Class', url: 'https://www.geeksforgeeks.org/string-class-in-java/' },
        { title: 'TutorialsPoint: String Class', url: 'https://www.tutorialspoint.com/java/java_string.htm' }
      ]
    }
  },
  {
    id: 'stringbuffer-class',
    name: 'The StringBuffer Class',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'The StringBuffer class is used for creating mutable strings in Java.',
      definition: 'The StringBuffer class is a part of the java.lang package and represents a mutable sequence of characters.',
      realWorldExample: 'StringBuffer myStringBuffer = new StringBuffer("Hello"); myStringBuffer.append(" World");',
      realWorldUse: 'Used for creating and modifying strings efficiently.',
      importance: 'The StringBuffer class is essential for efficient string manipulation.',
      detailedExplanation: 'The StringBuffer class is a part of the java.lang package and represents a mutable sequence of characters. For example, "StringBuffer myStringBuffer = new StringBuffer("Hello"); myStringBuffer.append(" World");". This is useful for creating and modifying strings efficiently. Unlike String, StringBuffer is mutable, meaning its content can be changed after creation. It has various methods for manipulation, such as "append()", "insert()", "delete()", etc. This is a fundamental concept of string handling.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: StringBuffer Class', url: 'https://www.geeksforgeeks.org/stringbuffer-class-in-java/' },
        { title: 'TutorialsPoint: StringBuffer Class', url: 'https://www.tutorialspoint.com/java/java_stringbuffer.htm' }
      ]
    }
  },
  {
    id: 'exception-handling',
    name: 'Exception Handling',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'Exception handling is a mechanism for handling runtime errors in Java.',
      definition: 'Exception handling is a way to manage errors that occur during the execution of a program.',
      realWorldExample: 'try { int result = 10 / 0; } catch (ArithmeticException e) { System.out.println("Error: " + e); }',
      realWorldUse: 'Used to manage errors gracefully and prevent program crashes.',
      importance: 'Exception handling is essential for robust programs.',
      detailedExplanation: 'Exception handling is a way to manage errors that occur during the execution of a program. For example, "try { int result = 10 / 0; } catch (ArithmeticException e) { System.out.println("Error: " + e); }". The "try" block contains the code that might throw an exception. If an exception occurs, the "catch" block is executed. The "finally" block is executed regardless of whether an exception occurred or not. This is a fundamental concept of error management.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Exception Handling', url: 'https://www.geeksforgeeks.org/exception-handling-in-java/' },
        { title: 'TutorialsPoint: Exception Handling', url: 'https://www.tutorialspoint.com/java/java_exception_handling.htm' }
      ]
    }
  },
  {
    id: 'types-of-exceptions',
    name: 'Types of Exceptions',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'There are several types of exceptions in Java.',
      definition: 'Exceptions are classes that represent errors that occur during the execution of a program.',
      realWorldExample: 'try { int result = 10 / 0; } catch (ArithmeticException e) { System.out.println("Error: " + e); }',
      realWorldUse: 'Used to manage errors gracefully and prevent program crashes.',
      importance: 'Understanding different types of exceptions is essential for robust programs.',
      detailedExplanation: 'Exceptions are classes that represent errors that occur during the execution of a program. For example, "try { int result = 10 / 0; } catch (ArithmeticException e) { System.out.println("Error: " + e); }". There are several types of exceptions, including "ArithmeticException", "NullPointerException", "ArrayIndexOutOfBoundsException", "FileNotFoundException", etc. Each type of exception is a subclass of the "Exception" class or one of its sub-classes. This is a fundamental concept of error management.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Types of Exceptions', url: 'https://www.geeksforgeeks.org/types-of-exceptions-in-java/' },
        { title: 'TutorialsPoint: Types of Exceptions', url: 'https://www.tutorialspoint.com/java/java_exception_handling.htm' }
      ]
    }
  },
  {
    id: 'default-exception-handling',
    name: 'Default Exception Handling Mechanism',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'Java has a default exception handling mechanism.',
      definition: 'The default exception handling mechanism is the "try-catch-finally" block.',
      realWorldExample: 'try { int result = 10 / 0; } catch (ArithmeticException e) { System.out.println("Error: " + e); } finally { System.out.println("This will always execute."); }',
      realWorldUse: 'Used for basic error handling.',
      importance: 'The default exception handling mechanism is essential for any Java program.',
      detailedExplanation: 'The default exception handling mechanism is the "try-catch-finally" block. For example, "try { int result = 10 / 0; } catch (ArithmeticException e) { System.out.println("Error: " + e); } finally { System.out.println("This will always execute."); }". The "try" block contains the code that might throw an exception. If an exception occurs, the "catch" block is executed. The "finally" block is executed regardless of whether an exception occurred or not. This is a fundamental concept of error management.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Default Exception Handling', url: 'https://www.geeksforgeeks.org/default-exception-handling-in-java/' },
        { title: 'TutorialsPoint: Default Exception Handling', url: 'https://www.tutorialspoint.com/java/java_exception_handling.htm' }
      ]
    }
  },
  {
    id: 'user-defined-exception-handling',
    name: 'User-Defined Exception Handling Mechanism',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'User-defined exceptions are exceptions that are created by the programmer.',
      definition: 'User-defined exceptions are classes that extend the "Exception" or "RuntimeException" class.',
      realWorldExample: 'class MyException extends Exception { public MyException(String message) { super(message); } }',
      realWorldUse: 'Used for specific error handling requirements.',
      importance: 'User-defined exceptions are essential for specific error handling scenarios.',
      detailedExplanation: 'User-defined exceptions are classes that extend the "Exception" or "RuntimeException" class. For example, "class MyException extends Exception { public MyException(String message) { super(message); } }". This allows you to create your own exceptions with specific error messages. You can throw them using the "throw" statement. This is a fundamental concept of error management.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: User-Defined Exceptions', url: 'https://www.geeksforgeeks.org/user-defined-exceptions-in-java/' },
        { title: 'TutorialsPoint: User-Defined Exceptions', url: 'https://www.tutorialspoint.com/java/java_exception_handling.htm' }
      ]
    }
  },
  {
    id: 'try-catch-finally',
    name: 'Try blocks, Catch Blocks, Nested Try Blocks, Stack Unwinding, Throw Statement, Throws Statement, Finally Statement',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit III',
    content: {
      introduction: 'The "try-catch-finally" block is the primary mechanism for exception handling in Java.',
      definition: 'The "try-catch-finally" block consists of a "try" block, zero or more "catch" blocks, and an optional "finally" block.',
      realWorldExample: 'try { int result = 10 / 0; } catch (ArithmeticException e) { System.out.println("Error: " + e); } finally { System.out.println("This will always execute."); }',
      realWorldUse: 'Used for basic error handling.',
      importance: 'The "try-catch-finally" block is essential for any Java program.',
      detailedExplanation: 'The "try-catch-finally" block consists of a "try" block, zero or more "catch" blocks, and an optional "finally" block. For example, "try { int result = 10 / 0; } catch (ArithmeticException e) { System.out.println("Error: " + e); } finally { System.out.println("This will always execute."); }". The "try" block contains the code that might throw an exception. If an exception occurs, the "catch" block is executed. The "finally" block is executed regardless of whether an exception occurred or not. This is a fundamental concept of error management.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
        'https://www.youtube.com/watch?v=2ZphE5HcQPQ'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Try-Catch-Finally', url: 'https://www.geeksforgeeks.org/try-catch-finally-in-java/' },
        { title: 'TutorialsPoint: Try-Catch-Finally', url: 'https://www.tutorialspoint.com/java/java_exception_handling.htm' }
      ]
    }
  }
];