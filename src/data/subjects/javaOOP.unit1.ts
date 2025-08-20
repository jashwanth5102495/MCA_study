import { Topic } from '../syllabus';

export const javaOOPUnit1: Topic[] = [
  {
    id: 'evolution-hll',
    name: 'Evolution of Higher-Level Programming Languages',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'Higher-level programming languages have evolved to make programming more accessible, efficient, and powerful, moving from machine code to modern object-oriented languages.',
      definition: 'Higher-level programming languages are languages that provide abstractions closer to human language and further from machine code, making it easier to write, read, and maintain programs.',
      realWorldExample: 'Early computers were programmed in assembly or machine code. Today, languages like Java, Python, and C++ are used for everything from web development to scientific computing.',
      realWorldUse: 'Used in software development, web applications, mobile apps, embedded systems, and more.',
      importance: 'The evolution of programming languages has enabled the development of complex software systems, improved productivity, and reduced errors.',
      detailedExplanation: 'The journey began with machine languages (binary code), which were difficult and error-prone. Assembly languages introduced mnemonics, making programming slightly easier. The next leap was to procedural languages like FORTRAN, COBOL, and C, which introduced structured programming and better abstraction. Object-oriented languages like C++ and Java brought concepts like encapsulation, inheritance, and polymorphism, making code more modular and reusable. Scripting languages like Python and JavaScript further simplified programming for rapid development. Each generation of languages has built upon the previous, adding features to improve developer productivity, code safety, and application performance.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=0IAPZzGSbME',
        'https://www.youtube.com/watch?v=92S4zgXN17o'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Programming Language Evolution', url: 'https://www.geeksforgeeks.org/generation-of-programming-languages/' },
        { title: 'Javatpoint: Programming Languages', url: 'https://www.javatpoint.com/programming-language' },
        { title: 'Wikipedia: Programming Language', url: 'https://en.wikipedia.org/wiki/Programming_language' }
      ],
      sampleProgram: `<div>// Java Example: Hello World (demonstrates high-level language simplicity)
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Timeline diagram: [Machine Code] → [Assembly] → [FORTRAN/C] → [C++/Java] → [Python/JavaScript]'
    }
  },
  {
    id: 'complexity-software',
    name: 'Complexity of Software and their Attributes',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'Understanding the complexity of software and their attributes is crucial for designing, developing, and maintaining robust applications.',
      definition: 'Software complexity refers to the difficulty of developing, testing, and maintaining software. It is influenced by factors like the size, structure, and dependencies of the codebase.',
      realWorldExample: 'A simple calculator application is less complex than a complex banking system. A small web application is less complex than a large enterprise system.',
      realWorldUse: 'Used to evaluate the difficulty of developing, testing, and maintaining software systems.',
      importance: 'High complexity can lead to bugs, performance issues, and increased development time. Low complexity is desirable for efficient and maintainable code.',
      detailedExplanation: 'Software complexity is measured in terms of attributes like size, cyclomatic complexity, and maintainability. Size refers to the number of lines of code. Cyclomatic complexity measures the number of independent paths through the code. Maintainability is a subjective measure of how easy it is to understand, modify, and fix bugs in the code.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=7Am0_q1QJ1Y',
        'https://www.youtube.com/watch?v=4c_L_0_0_0',
        'https://www.youtube.com/watch?v=8hly31xKli0'
      ],
      externalLinks: [
        { title: 'Wikipedia: Software Complexity', url: 'https://en.wikipedia.org/wiki/Software_complexity' },
        { title: 'GeeksforGeeks: Software Engineering', url: 'https://www.geeksforgeeks.org/software-engineering/' },
        { title: 'Javatpoint: Software Engineering', url: 'https://www.javatpoint.com/software-engineering' }
      ],
      sampleProgram: `<div>// Java Example: Simple vs. Complex Program
// Simple: Add two numbers
public class Simple {
  public static void main(String[] args) {
    int a = 5, b = 10;
    System.out.println("Sum: " + (a + b));
  }
}
// Complex: Class with method
class Complex {
  int multiply(int x, int y) { return x * y; }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between software size, complexity, and maintainability.'
    }
  },
  {
    id: 'oop-paradigm',
    name: 'Object-Oriented Programming Paradigm',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code to manipulate that data.',
      definition: 'OOP is a programming paradigm that uses objects and their interactions to design applications and is characterized by concepts like encapsulation, inheritance, and polymorphism.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'OOP provides a more natural and intuitive way to model real-world problems, making code more modular, reusable, and easier to understand.',
      detailedExplanation: 'The OOP paradigm revolves around objects, which are instances of classes. A class defines the blueprint for creating objects. Encapsulation means bundling data (attributes) and methods (functions) that operate on the data into a single unit (class). Inheritance allows new classes to be based on existing classes, inheriting their properties and methods. Polymorphism allows methods to have different implementations based on the object they are called on.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY',
        'https://www.youtube.com/watch?v=8hly31xKli0'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'GeeksforGeeks: OOP Concepts', url: 'https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/' },
        { title: 'Javatpoint: OOP in Java', url: 'https://www.javatpoint.com/java-oops-concepts' }
      ],
      sampleProgram: `<div>// Java Example: OOP Paradigm
class Car {
  String color;
  void drive() { System.out.println("Driving a " + color + " car"); }
}
public class Main {
  public static void main(String[] args) {
    Car myCar = new Car();
    myCar.color = "red";
    myCar.drive();
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'oop-principles',
    name: 'Principles of Object-Oriented Programming – Data Encapsulation, Polymorphism, and Inheritance',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'Encapsulation, polymorphism, and inheritance are fundamental principles of object-oriented programming that help in designing robust and maintainable software.',
      definition: 'Encapsulation: Bundling data (attributes) and methods (functions) that operate on the data into a single unit (class). Inheritance: New classes are based on existing classes, inheriting their properties and methods. Polymorphism: Methods can have different implementations based on the object they are called on.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'OOP provides a more natural and intuitive way to model real-world problems, making code more modular, reusable, and easier to understand.',
      detailedExplanation: 'Encapsulation: Bundling data (attributes) and methods (functions) that operate on the data into a single unit (class). Inheritance: New classes are based on existing classes, inheriting their properties and methods. Polymorphism: Methods can have different implementations based on the object they are called on.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: Encapsulation, Inheritance, Polymorphism
class Animal {
  void sound() { System.out.println("Animal sound"); }
}
class Dog extends Animal {
  void sound() { System.out.println("Bark"); }
}
public class Main {
  public static void main(String[] args) {
    Animal a = new Dog();
    a.sound(); // Polymorphism
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'oop-advantages',
    name: 'Advantages of Object-Oriented Programming',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'Object-oriented programming offers several advantages over procedural programming, making it a popular choice for software development.',
      definition: 'OOP provides a more natural and intuitive way to model real-world problems, making code more modular, reusable, and easier to understand.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'OOP provides a more natural and intuitive way to model real-world problems, making code more modular, reusable, and easier to understand.',
      detailedExplanation: 'OOP provides a more natural and intuitive way to model real-world problems, making code more modular, reusable, and easier to understand.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: OOP Advantage - Reusability
class Calculator {
  int add(int a, int b) { return a + b; }
}
public class Main {
  public static void main(String[] args) {
    Calculator calc = new Calculator();
    System.out.println("Sum: " + calc.add(3, 4));
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'oop-application-areas',
    name: 'Application areas of Object-Oriented Programming',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'Object-oriented programming is widely used across various domains and applications.',
      definition: 'OOP provides a more natural and intuitive way to model real-world problems, making code more modular, reusable, and easier to understand.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'OOP provides a more natural and intuitive way to model real-world problems, making code more modular, reusable, and easier to understand.',
      detailedExplanation: 'OOP provides a more natural and intuitive way to model real-world problems, making code more modular, reusable, and easier to understand.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: OOP in GUI Application
import javax.swing.*;
public class AppArea {
  public static void main(String[] args) {
    JFrame frame = new JFrame("OOP App Area");
    frame.setSize(200, 100);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'oop-languages',
    name: 'Object-Oriented Programming Languages',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'There are several programming languages that support object-oriented programming paradigms.',
      definition: 'OOP provides a more natural and intuitive way to model real-world problems, making code more modular, reusable, and easier to understand.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'OOP provides a more natural and intuitive way to model real-world problems, making code more modular, reusable, and easier to understand.',
      detailedExplanation: 'OOP provides a more natural and intuitive way to model real-world problems, making code more modular, reusable, and easier to understand.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: OOP Language Syntax
public class OOPLang {
  public static void main(String[] args) {
    System.out.println("Java is an OOP language!");
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'oop-limitations',
    name: 'Limitations of Object-Oriented Programming',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'Object-oriented programming, while powerful, has some limitations that developers need to be aware of.',
      definition: 'OOP provides a more natural and intuitive way to model real-world problems, making code more modular, reusable, and easier to understand.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'OOP provides a more natural and intuitive way to model real-world problems, making code more modular, reusable, and easier to understand.',
      detailedExplanation: 'OOP provides a more natural and intuitive way to model real-world problems, making code more modular, reusable, and easier to understand.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: OOP Limitation - Overhead
class Base {}
class Derived extends Base {}
public class Main {
  public static void main(String[] args) {
    Base b = new Derived();
    System.out.println("OOP can add overhead in some cases.");
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-introduction',
    name: 'Introduction to the JAVA language',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      definition: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      detailedExplanation: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: Basic Java Program
public class JavaIntro {
  public static void main(String[] args) {
    System.out.println("Welcome to Java!");
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-evolution',
    name: 'Evolution of Java',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'Java has evolved significantly since its inception in 1995, becoming one of the most popular programming languages in the world.',
      definition: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      detailedExplanation: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: Java Version Info
public class JavaEvolution {
  public static void main(String[] args) {
    System.out.println("Java version: " + System.getProperty("java.version"));
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-salient-features',
    name: 'Salient Features of the JAVA Language',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'Java has several distinctive features that make it a powerful and versatile programming language.',
      definition: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      detailedExplanation: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: Salient Features
public class Features {
  public static void main(String[] args) {
    System.out.println("Java is platform-independent, object-oriented, and secure!");
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-bytecode-jvm',
    name: 'The Java Byte Code and the JVM',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'Java bytecode is the intermediate representation of a Java program that is executed by the Java Virtual Machine (JVM).',
      definition: 'Java bytecode is the intermediate representation of a Java program that is executed by the Java Virtual Machine (JVM).',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'Java bytecode is the intermediate representation of a Java program that is executed by the Java Virtual Machine (JVM).',
      detailedExplanation: 'Java bytecode is the intermediate representation of a Java program that is executed by the Java Virtual Machine (JVM).',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: JVM and Bytecode
public class BytecodeDemo {
  public static void main(String[] args) {
    System.out.println("This code is compiled to bytecode and run on the JVM.");
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-platform',
    name: 'The JAVA platform',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'The JAVA platform is a collection of software and specifications that enables the execution of Java programs.',
      definition: 'The JAVA platform is a collection of software and specifications that enables the execution of Java programs.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'The JAVA platform is a collection of software and specifications that enables the execution of Java programs.',
      detailedExplanation: 'The JAVA platform is a collection of software and specifications that enables the execution of Java programs.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: Java Platform
public class JavaPlatform {
  public static void main(String[] args) {
    System.out.println("Java runs on Windows, Linux, Mac, and more!");
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-internet-www',
    name: 'JAVA, Internet and WWW',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'Java has played a crucial role in the development of the Internet and World Wide Web (WWW).',
      definition: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      detailedExplanation: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: Java and Internet
import java.net.*;
public class InternetDemo {
  public static void main(String[] args) throws Exception {
    URL url = new URL("https://www.example.com");
    System.out.println("Host: " + url.getHost());
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-environment',
    name: 'JAVA Environment',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'The JAVA environment is the set of software and hardware components that enable the execution of Java programs.',
      definition: 'The JAVA environment is the set of software and hardware components that enable the execution of Java programs.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'The JAVA environment is the set of software and hardware components that enable the execution of Java programs.',
      detailedExplanation: 'The JAVA environment is the set of software and hardware components that enable the execution of Java programs.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: Java Environment
public class JavaEnv {
  public static void main(String[] args) {
    System.out.println("Java Home: " + System.getProperty("java.home"));
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-tokens-keywords-identifiers',
    name: 'Tokens, Keywords and Identifiers',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'Tokens, keywords, and identifiers are fundamental concepts in Java programming.',
      definition: 'Tokens are the smallest units of a program, like words in a sentence. Keywords are predefined words in Java, like public, private, and void. Identifiers are names given to classes, methods, variables, and other entities.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'Tokens, keywords, and identifiers are fundamental concepts in Java programming.',
      detailedExplanation: 'Tokens are the smallest units of a program, like words in a sentence. Keywords are predefined words in Java, like public, private, and void. Identifiers are names given to classes, methods, variables, and other entities.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: Tokens, Keywords, Identifiers
public class TokensDemo {
  public static void main(String[] args) {
    int number = 10; // 'int' is a keyword, 'number' is an identifier
    System.out.println("Number: " + number);
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-constants-variables',
    name: 'Constants and Variables',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'Constants and variables are fundamental concepts in Java programming.',
      definition: 'Constants are values that cannot be changed during the execution of a program. Variables are used to store data that can be changed during the execution of a program.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'Constants and variables are fundamental concepts in Java programming.',
      detailedExplanation: 'Constants are values that cannot be changed during the execution of a program. Variables are used to store data that can be changed during the execution of a program.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: Constants and Variables
public class ConstVarDemo {
  public static void main(String[] args) {
    final int MAX = 100; // constant
    int value = 50; // variable
    System.out.println("MAX: " + MAX + ", value: " + value);
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-data-types',
    name: 'Data types',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'Data types are fundamental concepts in Java programming.',
      definition: 'Data types define the type of data that can be stored in a variable. Java has several built-in data types, including primitive types and reference types.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'Data types are fundamental concepts in Java programming.',
      detailedExplanation: 'Data types define the type of data that can be stored in a variable. Java has several built-in data types, including primitive types and reference types.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: Data Types
public class DataTypesDemo {
  public static void main(String[] args) {
    int a = 10;
    double b = 5.5;
    char c = 'A';
    boolean d = true;
    System.out.println(a + ", " + b + ", " + c + ", " + d);
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-console-io',
    name: 'Console I/O',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'Console I/O (Input/Output) is a fundamental concept in Java programming.',
      definition: 'Console I/O is the process of reading input from the keyboard and displaying output on the screen.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'Console I/O is a fundamental concept in Java programming.',
      detailedExplanation: 'Console I/O is the process of reading input from the keyboard and displaying output on the screen.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `import java.util.Scanner;
public class ConsoleIOExample {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter your name: ");
    String name = sc.nextLine();
    System.out.println("Hello, " + name + "!");
  }
}
// Run this code online: https://www.onlinegdb.com/online_java_compiler`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-structure-program',
    name: 'Structure of a Java Program',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'A Java program consists of classes and their methods.',
      definition: 'A Java program consists of classes and their methods.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'A Java program consists of classes and their methods.',
      detailedExplanation: 'A Java program consists of classes and their methods.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: Structure of a Java Program
public class StructureDemo {
  public static void main(String[] args) {
    System.out.println("This is a basic Java program structure.");
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-executing-program',
    name: 'Executing a Java program',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'The process of executing a Java program involves compiling and running it.',
      definition: 'The process of executing a Java program involves compiling and running it.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'The process of executing a Java program involves compiling and running it.',
      detailedExplanation: 'The process of executing a Java program involves compiling and running it.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: Executing a Program
public class ExecuteDemo {
  public static void main(String[] args) {
    System.out.println("Java program executed!");
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-types-errors',
    name: 'Types of Errors',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'There are several types of errors that can occur during the execution of a Java program.',
      definition: 'There are several types of errors that can occur during the execution of a Java program.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'There are several types of errors that can occur during the execution of a Java program.',
      detailedExplanation: 'There are several types of errors that can occur during the execution of a Java program.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: Types of Errors
public class ErrorTypes {
  public static void main(String[] args) {
    // Syntax error: Uncommenting next line will cause compile error
    // int x = ;
    // Runtime error: Division by zero
    try {
      int a = 5 / 0;
    } catch (ArithmeticException e) {
      System.out.println("Runtime error: " + e);
    }
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-operators',
    name: 'Operators in JAVA',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'Operators are symbols that perform operations on variables and values.',
      definition: 'Operators are symbols that perform operations on variables and values.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'Operators are symbols that perform operations on variables and values.',
      detailedExplanation: 'Operators are symbols that perform operations on variables and values.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: Operators
public class OperatorsDemo {
  public static void main(String[] args) {
    int a = 10, b = 3;
    System.out.println("a + b = " + (a + b));
    System.out.println("a - b = " + (a - b));
    System.out.println("a * b = " + (a * b));
    System.out.println("a / b = " + (a / b));
    System.out.println("a % b = " + (a % b));
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-precedence-associativity',
    name: 'Precedence and Associativity of Operators',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'Precedence and associativity determine the order in which operators are evaluated in expressions.',
      definition: 'Precedence and associativity determine the order in which operators are evaluated in expressions.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'Precedence and associativity determine the order in which operators are evaluated in expressions.',
      detailedExplanation: 'Precedence and associativity determine the order in which operators are evaluated in expressions.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: Precedence and Associativity
public class PrecedenceDemo {
  public static void main(String[] args) {
    int result = 2 + 3 * 4;
    System.out.println("2 + 3 * 4 = " + result); // 14
    int result2 = (2 + 3) * 4;
    System.out.println("(2 + 3) * 4 = " + result2); // 20
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-type-conversion',
    name: 'Type Conversion',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'Type conversion is the process of converting one data type to another.',
      definition: 'Type conversion is the process of converting one data type to another.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'Type conversion is the process of converting one data type to another.',
      detailedExplanation: 'Type conversion is the process of converting one data type to another.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: Type Conversion
public class TypeConversionDemo {
  public static void main(String[] args) {
    int a = 10;
    double b = a; // implicit conversion
    System.out.println("int to double: " + b);
    double c = 9.7;
    int d = (int) c; // explicit conversion
    System.out.println("double to int: " + d);
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-selection-structures',
    name: 'Selection Structures',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'Selection structures allow programs to make decisions based on conditions.',
      definition: 'Selection structures allow programs to make decisions based on conditions.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'Selection structures allow programs to make decisions based on conditions.',
      detailedExplanation: 'Selection structures allow programs to make decisions based on conditions.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: Selection Structure
public class SelectionDemo {
  public static void main(String[] args) {
    int age = 18;
    if (age >= 18) {
      System.out.println("Adult");
    } else {
      System.out.println("Minor");
    }
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-simple-if',
    name: 'Simple-If statement',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'A simple-if statement is used to execute a block of code only if a condition is true.',
      definition: 'A simple-if statement is used to execute a block of code only if a condition is true.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'A simple-if statement is used to execute a block of code only if a condition is true.',
      detailedExplanation: 'A simple-if statement is used to execute a block of code only if a condition is true.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `public class SimpleIfExample {
  public static void main(String[] args) {
    int number = 10;
    if (number > 0) {
      System.out.println("Number is positive");
    }
  }
}
// Run this code online: https://www.onlinegdb.com/online_java_compiler`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-if-else',
    name: 'If-Else statement',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'An if-else statement is used to execute one block of code if a condition is true, and another block if it is false.',
      definition: 'An if-else statement is used to execute one block of code if a condition is true, and another block if it is false.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'An if-else statement is used to execute one block of code if a condition is true, and another block if it is false.',
      detailedExplanation: 'An if-else statement is used to execute one block of code if a condition is true, and another block if it is false.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `public class IfElseExample {
  public static void main(String[] args) {
    int number = -5;
    if (number > 0) {
      System.out.println("Number is positive");
    } else {
      System.out.println("Number is not positive");
    }
  }
}
// Run this code online: https://www.onlinegdb.com/online_java_compiler`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-nested-if-else',
    name: 'Nested If-Else statement',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'A nested if-else statement is an if-else statement that is itself inside another if-else statement.',
      definition: 'A nested if-else statement is an if-else statement that is itself inside another if-else statement.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'A nested if-else statement is an if-else statement that is itself inside another if-else statement.',
      detailedExplanation: 'A nested if-else statement is an if-else statement that is itself inside another if-else statement.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: Nested If-Else
public class NestedIfElseDemo {
  public static void main(String[] args) {
    int num = 0;
    if (num >= 0) {
      if (num == 0) {
        System.out.println("Zero");
      } else {
        System.out.println("Positive");
      }
    } else {
      System.out.println("Negative");
    }
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-else-if-ladder',
    name: 'Else-if ladder',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'An else-if ladder is a series of if-else statements, where only one block of code is executed based on multiple conditions.',
      definition: 'An else-if ladder is a series of if-else statements, where only one block of code is executed based on multiple conditions.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'An else-if ladder is a series of if-else statements, where only one block of code is executed based on multiple conditions.',
      detailedExplanation: 'An else-if ladder is a series of if-else statements, where only one block of code is executed based on multiple conditions.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: Else-If Ladder
public class ElseIfLadderDemo {
  public static void main(String[] args) {
    int marks = 75;
    if (marks >= 90) {
      System.out.println("Grade A");
    } else if (marks >= 75) {
      System.out.println("Grade B");
    } else if (marks >= 60) {
      System.out.println("Grade C");
    } else {
      System.out.println("Grade D");
    }
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-switch-statement',
    name: 'The Switch Statement',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'A switch statement is used to execute different blocks of code based on the value of a single expression.',
      definition: 'A switch statement is used to execute different blocks of code based on the value of a single expression.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'A switch statement is used to execute different blocks of code based on the value of a single expression.',
      detailedExplanation: 'A switch statement is used to execute different blocks of code based on the value of a single expression.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `public class SwitchExample {
  public static void main(String[] args) {
    int day = 3;
    switch (day) {
      case 1: System.out.println("Monday"); break;
      case 2: System.out.println("Tuesday"); break;
      case 3: System.out.println("Wednesday"); break;
      default: System.out.println("Other day");
    }
  }
}
// Run this code online: https://www.onlinegdb.com/online_java_compiler`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-looping-structures',
    name: 'Looping Structures',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'Looping structures allow programs to execute a block of code repeatedly.',
      definition: 'Looping structures allow programs to execute a block of code repeatedly.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'Looping structures allow programs to execute a block of code repeatedly.',
      detailedExplanation: 'Looping structures allow programs to execute a block of code repeatedly.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: Looping Structure
public class LoopingDemo {
  public static void main(String[] args) {
    for (int i = 1; i <= 3; i++) {
      System.out.println("Loop iteration: " + i);
    }
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-while-loop',
    name: 'The while loop',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'A while loop is used to execute a block of code repeatedly as long as a condition is true.',
      definition: 'A while loop is used to execute a block of code repeatedly as long as a condition is true.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'A while loop is used to execute a block of code repeatedly as long as a condition is true.',
      detailedExplanation: 'A while loop is used to execute a block of code repeatedly as long as a condition is true.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `public class WhileLoopExample {
  public static void main(String[] args) {
    int i = 1;
    while (i <= 5) {
      System.out.println("i = " + i);
      i++;
    }
  }
}
// Run this code online: https://www.onlinegdb.com/online_java_compiler`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-for-loop',
    name: 'The For loop',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'A for loop is used to execute a block of code repeatedly for a specific number of times.',
      definition: 'A for loop is used to execute a block of code repeatedly for a specific number of times.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'A for loop is used to execute a block of code repeatedly for a specific number of times.',
      detailedExplanation: 'A for loop is used to execute a block of code repeatedly for a specific number of times.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `public class ForLoopExample {
  public static void main(String[] args) {
    for (int i = 1; i <= 5; i++) {
      System.out.println("i = " + i);
    }
  }
}
// Run this code online: https://www.onlinegdb.com/online_java_compiler`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-do-while-loop',
    name: 'The Do-While loop',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'A do-while loop is used to execute a block of code repeatedly until a condition becomes false.',
      definition: 'A do-while loop is used to execute a block of code repeatedly until a condition becomes false.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'A do-while loop is used to execute a block of code repeatedly until a condition becomes false.',
      detailedExplanation: 'A do-while loop is used to execute a block of code repeatedly until a condition becomes false.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `public class DoWhileLoopExample {
  public static void main(String[] args) {
    int i = 1;
    do {
      System.out.println("i = " + i);
      i++;
    } while (i <= 5);
  }
}
// Run this code online: https://www.onlinegdb.com/online_java_compiler`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-nested-loops',
    name: 'Nested Loops',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'Nested loops are loops that are inside other loops.',
      definition: 'Nested loops are loops that are inside other loops.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'Nested loops are loops that are inside other loops.',
      detailedExplanation: 'Nested loops are loops that are inside other loops.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: Nested Loops
public class NestedLoopsDemo {
  public static void main(String[] args) {
    for (int i = 1; i <= 2; i++) {
      for (int j = 1; j <= 2; j++) {
        System.out.println("i=" + i + ", j=" + j);
      }
    }
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-break-statement',
    name: 'The Break Statement',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'The break statement is used to exit a loop or switch statement.',
      definition: 'The break statement is used to exit a loop or switch statement.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'The break statement is used to exit a loop or switch statement.',
      detailedExplanation: 'The break statement is used to exit a loop or switch statement.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: Break Statement
public class BreakDemo {
  public static void main(String[] args) {
    for (int i = 1; i <= 5; i++) {
      if (i == 3) break;
      System.out.println(i);
    }
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-continue-statement',
    name: 'The Continue Statement',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'The continue statement is used to skip the current iteration of a loop and continue with the next iteration.',
      definition: 'The continue statement is used to skip the current iteration of a loop and continue with the next iteration.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'The continue statement is used to skip the current iteration of a loop and continue with the next iteration.',
      detailedExplanation: 'The continue statement is used to skip the current iteration of a loop and continue with the next iteration.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: Continue Statement
public class ContinueDemo {
  public static void main(String[] args) {
    for (int i = 1; i <= 5; i++) {
      if (i == 3) continue;
      System.out.println(i);
    }
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  },
  {
    id: 'java-labelled-loops',
    name: 'Labelled Loops',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit I',
    content: {
      introduction: 'Labelled loops are loops that are given a name, allowing the break or continue statements to refer to them.',
      definition: 'Labelled loops are loops that are given a name, allowing the break or continue statements to refer to them.',
      realWorldExample: 'Consider a car. It has properties like color, model, and speed, and methods like accelerate, brake, and turn. This is an object-oriented representation of a real-world concept.',
      realWorldUse: 'Used in software development for building applications that are modular, reusable, and easier to maintain.',
      importance: 'Labelled loops are loops that are given a name, allowing the break or continue statements to refer to them.',
      detailedExplanation: 'Labelled loops are loops that are given a name, allowing the break or continue statements to refer to them.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=pTB0EiLXUCY',
        'https://www.youtube.com/watch?v=1i8ylq4j_EY'
      ],
      externalLinks: [
        { title: 'Wikipedia: Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
        { title: 'TutorialsPoint: Object-Oriented Programming', url: 'https://www.tutorialspoint.com/object_oriented_programming/index.htm' }
      ],
      sampleProgram: `<div>// Java Example: Labelled Loops
public class LabelledLoopsDemo {
  public static void main(String[] args) {
    outer: for (int i = 1; i <= 2; i++) {
      for (int j = 1; j <= 2; j++) {
        if (i == j) continue outer;
        System.out.println("i=" + i + ", j=" + j);
      }
    }
  }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between classes, objects, and inheritance.'
    }
  }
]; 