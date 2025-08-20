import { Topic } from '../syllabus';

export const javaOOPUnit2: Topic[] = [
  {
    id: 'classes-objects-methods',
    name: 'Classes, Objects and Methods',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Classes, objects, and methods are the core building blocks of object-oriented programming in Java.',
      definition: 'A class is a blueprint for creating objects. An object is an instance of a class. Methods are functions defined inside a class that describe the behaviors of objects.',
      realWorldExample: 'A "Car" class can have objects like myCar, yourCar, each with their own properties and behaviors.',
      realWorldUse: 'Used in all Java applications to model real-world entities and their interactions.',
      importance: 'Understanding classes, objects, and methods is fundamental to writing modular, reusable, and maintainable Java code.',
      detailedExplanation: 'A class defines the structure and behavior (data and methods) that the objects created from the class will have. Objects are created using the "new" keyword. Methods define what actions the objects can perform. This encapsulation allows for better code organization and reuse.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Classes and Objects (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/classes-objects-java/' },
        { title: 'Java Classes and Objects (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_object_classes.htm' }
      ],
      sampleProgram: `<div>// Java Example: Class, Object, and Method\nclass Car {\n    String color;\n    void drive() {\n        System.out.println(\"Driving a \" + color + \" car\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car();\n        myCar.color = \"red\";\n        myCar.drive();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing a class as a blueprint and objects as instances.'
    }
  },
  {
    id: 'class-definition',
    name: 'Class Definition',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'A class is a blueprint for creating objects. It defines the structure and behavior of objects.',
      definition: 'A class is a collection of data members (variables) and member functions (methods) that define the properties and actions of an object.',
      realWorldExample: 'A "Student" class can have objects like student1, student2, each with their own ID, name, and marks.',
      realWorldUse: 'Used to model real-world entities and their properties and behaviors in Java applications.',
      importance: 'Understanding class definition is crucial for writing reusable and maintainable code.',
      detailedExplanation: 'A class is defined using the "class" keyword. It can have variables (data members) to store data and methods (member functions) to perform actions. Variables are also called instance variables, and methods are also called instance methods.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Class Definition (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/java-class-definition/' },
        { title: 'Java Class Definition (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_class_definition.htm' }
      ],
      sampleProgram: `<div>// Java Example: Class Definition\nclass Student {\n    int id;\n    String name;\n    void display() {\n        System.out.println(\"ID: \" + id + \", Name: \" + name);\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Student student1 = new Student();\n        student1.id = 1;\n        student1.name = \"John\";\n        student1.display();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing a class definition with data members and methods.'
    }
  },
  {
    id: 'instance-vars-member-methods',
    name: 'Instance Variables and Member Methods',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Instance variables and member methods are fundamental to object-oriented programming in Java.',
      definition: 'Instance variables are variables declared inside a class, but outside any method, constructor, or block. Member methods are functions defined inside a class that operate on instance variables.',
      realWorldExample: 'A "BankAccount" class can have instance variables like accountNumber and balance, and member methods like deposit and withdraw.',
      realWorldUse: 'Used to model real-world entities and their properties and behaviors, and to perform actions on those properties.',
      importance: 'Understanding instance variables and member methods is essential for writing robust and maintainable Java code.',
      detailedExplanation: 'Instance variables are declared using the "data-type variable-name" syntax. They are initialized when an object is created. Member methods are declared using the "access-modifier return-type method-name(parameter-list)" syntax. They operate on instance variables.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Instance Variables (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/java-instance-variables/' },
        { title: 'Java Member Methods (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/java-member-methods/' }
      ],
      sampleProgram: `<div>// Java Example: Instance Variables and Member Methods\nclass BankAccount {\n    int accountNumber;\n    double balance;\n    void deposit(double amount) {\n        balance += amount;\n        System.out.println(\"Deposited: \" + amount + \", New Balance: \" + balance);\n    }\n    void withdraw(double amount) {\n        if (balance >= amount) {\n            balance -= amount;\n            System.out.println(\"Withdrew: \" + amount + \", New Balance: \" + balance);\n        } else {\n            System.out.println(\"Insufficient balance\");\n        }\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        BankAccount account = new BankAccount();\n        account.accountNumber = 12345;\n        account.balance = 1000.0;\n        account.deposit(500.0);\n        account.withdraw(200.0);\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing instance variables and member methods.'
    }
  },
  {
    id: 'declaration-creation-objects',
    name: 'Declaration and Creation of Objects',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Objects are created from classes, and this process involves declaration and creation.',
      definition: 'Objects are created using the "new" keyword. The "new" keyword allocates memory for the object and calls the constructor.',
      realWorldExample: 'A "Book" class can have objects like book1, book2, each with their own title, author, and price.',
      realWorldUse: 'Used to instantiate classes and create instances of objects in Java applications.',
      importance: 'Understanding object creation is crucial for writing Java programs that utilize objects.',
      detailedExplanation: 'Objects are declared using the "class-name object-name" syntax. The "new" keyword is used to create an object. The constructor is called when an object is created.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Object Creation (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/object-creation-in-java/' },
        { title: 'Java Object Creation (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_object_creation.htm' }
      ],
      sampleProgram: `<div>// Java Example: Declaration and Creation of Objects\nclass Book {\n    String title;\n    String author;\n    double price;\n}\npublic class Main {\n    public static void main(String[] args) {\n        Book book1 = new Book();\n        Book book2 = new Book();\n        book1.title = \"Java Programming\";\n        book1.author = \"John Doe\";\n        book1.price = 299.0;\n        book2.title = \"Python Basics\";\n        book2.author = \"Jane Smith\";\n        book2.price = 199.0;\n        System.out.println(book1.title + \" by \" + book1.author + \", $\" + book1.price);\n        System.out.println(book2.title + \" by \" + book2.author + \", $\" + book2.price);\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing object declaration and creation.'
    }
  },
  {
    id: 'accessing-members',
    name: 'Accessing Members',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Accessing members (variables and methods) of an object is essential for manipulating data and performing actions.',
      definition: 'Accessing members involves using the dot (.) operator to access variables and methods of an object.',
      realWorldExample: 'A "Person" class can have instance variables like name and age, and member methods like walk and talk.',
      realWorldUse: 'Used to read and modify the values of instance variables and call member methods on objects.',
      importance: 'Understanding member access is crucial for writing Java programs that effectively utilize objects.',
      detailedExplanation: 'Accessing members involves using the dot (.) operator. Variables are accessed using the dot operator, and methods are called using the dot operator followed by parentheses.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Accessing Members (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/accessing-members-of-a-class-in-java/' },
        { title: 'Java Accessing Members (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_access_modifiers.htm' }
      ],
      sampleProgram: `<div>// Java Example: Accessing Members\nclass Person {\n    String name;\n    int age;\n    void walk() {\n        System.out.println(name + \" is walking.\");\n    }\n    void talk() {\n        System.out.println(name + \" is talking.\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Person person = new Person();\n        person.name = \"Alice\";\n        person.age = 25;\n        person.walk();\n        person.talk();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing accessing members of an object.'
    }
  },
  {
    id: 'classification-member-methods',
    name: 'Classification of Member Methods',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Member methods can be classified based on their access modifiers, return types, and parameters.',
      definition: 'Member methods can be classified into different types based on their access modifiers (public, private, protected, default), return types (void, primitive, object), and parameters (no parameters, parameters, variable arguments).',
      realWorldExample: 'A "Calculator" class can have methods like add, subtract, multiply, divide, and a method to display results.',
      realWorldUse: 'Used to organize and categorize methods based on their characteristics and reusability.',
      importance: 'Understanding method classification is essential for writing efficient and maintainable Java code.',
      detailedExplanation: 'Member methods can be classified into different types based on their access modifiers (public, private, protected, default), return types (void, primitive, object), and parameters (no parameters, parameters, variable arguments). This classification helps in better code organization and reusability.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Method Classification (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/types-of-methods-in-java/' },
        { title: 'Java Method Classification (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_methods.htm' }
      ],
      sampleProgram: `<div>// Java Example: Classification of Member Methods\nclass Calculator {\n    void add(int a, int b) {\n        System.out.println(\"Sum: \" + (a + b));\n    }\n    void subtract(int a, int b) {\n        System.out.println(\"Difference: \" + (a - b));\n    }\n    void multiply(int a, int b) {\n        System.out.println(\"Product: \" + (a * b));\n    }\n    void divide(int a, int b) {\n        if (b != 0) {\n            System.out.println(\"Quotient: \" + (a / b));\n        } else {\n            System.out.println(\"Cannot divide by zero\");\n        }\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n        calc.add(10, 5);\n        calc.subtract(10, 5);\n        calc.multiply(10, 5);\n        calc.divide(10, 5);\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing different types of member methods.'
    }
  },
  {
    id: 'constructors-copy-this',
    name: 'Constructors, Copy Constructor, this keyword',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Constructors, copy constructors, and the "this" keyword are essential for object initialization and manipulation.',
      definition: 'A constructor is a special method that is called when an object of a class is created. A copy constructor is a constructor that takes an object of the same class as an argument. The "this" keyword refers to the current object.',
      realWorldExample: 'A "Student" class can have a constructor to initialize name and age, and a copy constructor to create a new student from an existing one.',
      realWorldUse: 'Used to initialize objects, create copies, and refer to the current object in methods.',
      importance: 'Understanding constructors, copy constructors, and the "this" keyword is crucial for writing robust and maintainable Java code.',
      detailedExplanation: 'A constructor is defined using the class name. It can have parameters. A copy constructor is a constructor that takes an object of the same class as an argument. The "this" keyword is used to refer to the current object in methods.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Constructors (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/constructors-in-java/' },
        { title: 'Java Copy Constructor (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/copy-constructor-in-java/' },
        { title: 'Java this Keyword (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/this-keyword-in-java/' }
      ],
      sampleProgram: `<div>// Java Example: Constructors, Copy Constructor, this keyword\nclass Student {\n    String name;\n    int age;\n    Student(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    Student(Student s) {\n        this.name = s.name;\n        this.age = s.age;\n    }\n    void display() {\n        System.out.println(\"Name: \" + name + \", Age: \" + age);\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Student student1 = new Student(\"Alice\", 25);\n        Student student2 = new Student(student1);\n        student1.display();\n        student2.display();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing constructors, copy constructor, and this keyword.'
    }
  },
  {
    id: 'objects-as-arguments',
    name: 'Objects as Arguments to methods',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Objects can be passed as arguments to methods, allowing for flexible and reusable code.',
      definition: 'Objects are passed to methods using the object reference. The method can then operate on the object\'s properties.',
      realWorldExample: 'A "Person" class can have a method that takes another "Person" object as an argument to compare ages.',
      realWorldUse: 'Used to pass complex data structures or objects between methods for efficient processing.',
      importance: 'Understanding object passing as arguments is crucial for writing Java programs that utilize objects effectively.',
      detailedExplanation: 'Objects are passed to methods using the object reference. The method can then operate on the object\'s properties. This allows for flexible and reusable code.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Objects as Arguments (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/objects-as-arguments-in-java/' },
        { title: 'Java Objects as Arguments (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_object_passing.htm' }
      ],
      sampleProgram: `<div>// Java Example: Objects as Arguments to methods\nclass Person {\n    String name;\n    int age;\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Person person1 = new Person(\"Alice\", 25);\n        Person person2 = new Person(\"Bob\", 30);\n        compareAges(person1, person2);\n    }\n    static void compareAges(Person p1, Person p2) {\n        if (p1.age > p2.age) {\n            System.out.println(p1.name + \" is older than \" + p2.name);\n        } else if (p1.age < p2.age) {\n            System.out.println(p2.name + \" is older than \" + p1.name);\n        } else {\n            System.out.println(p1.name + \" and \" + p2.name + \" are of the same age\");\n        }\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing objects as arguments to methods.'
    }
  },
  {
    id: 'methods-returning-object',
    name: 'Methods returning an object',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Methods can return objects, allowing for chaining of operations and flexible return types.',
      definition: 'A method can return an object of its own class or a different class. This is useful for creating new objects or returning existing ones.',
      realWorldExample: 'A "Calculator" class can have methods like add, subtract, multiply, divide, and a method that returns a new "Result" object.',
      realWorldUse: 'Used to return objects that encapsulate results or new instances of objects.',
      importance: 'Understanding method return types is crucial for writing Java programs that utilize objects effectively.',
      detailedExplanation: 'A method can return an object of its own class or a different class. This is useful for creating new objects or returning existing ones. The return type is specified in the method signature.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Methods Returning Object (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/methods-returning-object-in-java/' },
        { title: 'Java Methods Returning Object (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_methods.htm' }
      ],
      sampleProgram: `<div>// Java Example: Methods returning an object\nclass Result {\n    double sum;\n    double product;\n    Result(double sum, double product) {\n        this.sum = sum;\n        this.product = product;\n    }\n}\nclass Calculator {\n    Result add(double a, double b) {\n        return new Result(a + b, a * b);\n    }\n    Result subtract(double a, double b) {\n        return new Result(a - b, a * b);\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n        Result result1 = calc.add(10.0, 5.0);\n        Result result2 = calc.subtract(10.0, 5.0);\n        System.out.println(\"Sum: \" + result1.sum + \", Product: \" + result1.product);\n        System.out.println(\"Difference: \" + result2.sum + \", Product: \" + result2.product);\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing methods returning objects.'
    }
  },
  {
    id: 'static-member-data',
    name: 'Static member data',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Static member data and methods are associated with the class itself, not individual objects.',
      definition: 'Static member data (variables) are shared across all instances of a class. Static member methods (functions) are also shared and can be called without an object.',
      realWorldExample: 'A "Math" class can have static methods like add, subtract, multiply, divide, and a static variable for PI.',
      realWorldUse: 'Used to share data and methods that are common to all objects of a class, such as constants or utility functions.',
      importance: 'Understanding static member data and methods is essential for writing efficient and maintainable Java code.',
      detailedExplanation: 'Static member data are declared using the "static" keyword. They are shared across all instances of the class. Static member methods are also declared using the "static" keyword. They can be called using the class name.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Static Members (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/static-keyword-in-java/' },
        { title: 'Java Static Members (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_static_keyword.htm' }
      ],
      sampleProgram: `<div>// Java Example: Static member data\nclass Math {\n    static double PI = 3.14159;\n    static double add(double a, double b) {\n        return a + b;\n    }\n    static double subtract(double a, double b) {\n        return a - b;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"PI: \" + Math.PI);\n        System.out.println(\"Sum: \" + Math.add(10.0, 5.0));\n        System.out.println(\"Difference: \" + Math.subtract(10.0, 5.0));\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing static member data and methods.'
    }
  },
  {
    id: 'static-member-methods',
    name: 'Static member methods',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Static member methods are associated with the class itself, not individual objects.',
      definition: 'Static member methods are declared using the "static" keyword. They can be called using the class name.',
      realWorldExample: 'A "Math" class can have static methods like add, subtract, multiply, divide, and a static variable for PI.',
      realWorldUse: 'Used to share methods that are common to all objects of a class, such as utility functions.',
      importance: 'Understanding static member methods is essential for writing efficient and maintainable Java code.',
      detailedExplanation: 'Static member methods are declared using the "static" keyword. They can be called using the class name. This allows for methods that are not tied to a specific object instance.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Static Methods (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/static-keyword-in-java/' },
        { title: 'Java Static Methods (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_static_keyword.htm' }
      ],
      sampleProgram: `<div>// Java Example: Static member methods\nclass Math {\n    static double PI = 3.14159;\n    static double add(double a, double b) {\n        return a + b;\n    }\n    static double subtract(double a, double b) {\n        return a - b;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"PI: \" + Math.PI);\n        System.out.println(\"Sum: \" + Math.add(10.0, 5.0));\n        System.out.println(\"Difference: \" + Math.subtract(10.0, 5.0));\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing static member methods.'
    }
  },
  {
    id: 'static-blocks',
    name: 'Static Blocks',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Static blocks are executed once when the class is loaded, before the main method.',
      definition: 'Static blocks are blocks of code enclosed in curly braces ({}) and preceded by the "static" keyword. They are executed only once when the class is loaded.',
      realWorldExample: 'A "Database" class can have a static block to initialize a database connection.',
      realWorldUse: 'Used for initialization tasks that need to be performed only once, such as database connections or configuration.',
      importance: 'Understanding static blocks is essential for writing Java programs that require class-level initialization.',
      detailedExplanation: 'Static blocks are executed only once when the class is loaded. They are typically used for initialization tasks that are common to all instances of the class.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Static Blocks (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/static-block-in-java/' },
        { title: 'Java Static Blocks (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_static_block.htm' }
      ],
      sampleProgram: `<div>// Java Example: Static Blocks\nclass Database {\n    static {\n        System.out.println(\"Initializing database connection...\");\n        // Database connection logic here\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        // The static block will be executed only once\n        // when the class is loaded.\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing static blocks.'
    }
  },
  {
    id: 'nesting-methods',
    name: 'Nesting of Methods',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Methods can be nested within other methods, allowing for more complex and organized code.',
      definition: 'A method can contain another method. This is called method nesting or method chaining.',
      realWorldExample: 'A "Calculator" class can have methods like add, subtract, multiply, divide, and a method that calls another method to display results.',
      realWorldUse: 'Used to break down complex tasks into smaller, more manageable pieces and to reuse code.',
      importance: 'Understanding method nesting is essential for writing efficient and maintainable Java code.',
      detailedExplanation: 'A method can contain another method. This is called method nesting or method chaining. The inner method can access variables and methods of the outer method.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Method Nesting (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/method-nesting-in-java/' },
        { title: 'Java Method Nesting (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_methods.htm' }
      ],
      sampleProgram: `<div>// Java Example: Nesting of Methods\nclass Calculator {\n    double add(double a, double b) {\n        return a + b;\n    }\n    double subtract(double a, double b) {\n        return a - b;\n    }\n    double multiply(double a, double b) {\n        return a * b;\n    }\n    double divide(double a, double b) {\n        if (b != 0) {\n            return a / b;\n        } else {\n            return 0.0; // Or throw an exception\n        }\n    }\n    void displayResult(double result) {\n        System.out.println(\"Result: \" + result);\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n        double sum = calc.add(10.0, 5.0);\n        calc.displayResult(sum);\n        double difference = calc.subtract(10.0, 5.0);\n        calc.displayResult(difference);\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing method nesting.'
    }
  },
  {
    id: 'recursion',
    name: 'Recursion',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Recursion is a programming technique where a function calls itself to solve a problem.',
      definition: 'Recursion is a programming technique where a function calls itself to solve a problem. It involves breaking down a problem into smaller instances of the same problem.',
      realWorldExample: 'A "Factorial" class can have a method that calculates the factorial of a number using recursion.',
      realWorldUse: 'Used to solve problems that can be broken down into smaller, similar problems, such as calculating factorials, Fibonacci series, or traversing trees.',
      importance: 'Understanding recursion is essential for writing efficient and maintainable Java code.',
      detailedExplanation: 'Recursion involves a function calling itself. This continues until a base case is reached. The base case is a condition that stops the recursion. Recursion is useful for problems that can be broken down into smaller, similar problems.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Recursion (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/recursion/' },
        { title: 'Java Recursion (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_recursion.htm' }
      ],
      sampleProgram: `<div>// Java Example: Recursion\nclass Factorial {\n    int calculateFactorial(int n) {\n        if (n == 0 || n == 1) {\n            return 1;\n        }\n        return n * calculateFactorial(n - 1);\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Factorial factorial = new Factorial();\n        int result = factorial.calculateFactorial(5);\n        System.out.println(\"Factorial of 5: \" + result);\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing recursion.'
    }
  },
  {
    id: 'nested-classes',
    name: 'Nested Classes, Inner Classes, Static nested Classes, Local Classes, Anonymous Classes',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Nested classes, inner classes, static nested classes, local classes, and anonymous classes are advanced concepts for organizing and encapsulating code.',
      definition: 'Nested classes are classes defined inside another class. Inner classes are classes defined inside another class, typically with access to the outer class\'s members. Static nested classes are defined using the "static" keyword. Local classes are defined inside a method. Anonymous classes are classes without a name, used for one-time use.',
      realWorldExample: 'A "Car" class can have a nested "Engine" class, an inner "Door" class, a static nested "FuelTank" class, a local "Speedometer" class, and an anonymous "GPS" class.',
      realWorldUse: 'Used to organize code, encapsulate related functionality, and provide better access control.',
      importance: 'Understanding nested classes is essential for writing efficient and maintainable Java code.',
      detailedExplanation: 'Nested classes are classes defined inside another class. Inner classes are classes defined inside another class, typically with access to the outer class\'s members. Static nested classes are defined using the "static" keyword. Local classes are defined inside a method. Anonymous classes are classes without a name, used for one-time use.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Nested Classes (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/nested-classes-in-java/' },
        { title: 'Java Inner Classes (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/inner-class-in-java/' },
        { title: 'Java Static Nested Classes (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/static-nested-classes-in-java/' },
        { title: 'Java Local Classes (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/local-class-in-java/' },
        { title: 'Java Anonymous Classes (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/anonymous-class-in-java/' }
      ],
      sampleProgram: `<div>// Java Example: Nested Classes\nclass Car {\n    String color;\n    Engine engine;\n    Door door;\n    static FuelTank fuelTank;\n    LocalSpeedometer speedometer;\n    AnonymousGPS gps;\n    Car(String color) {\n        this.color = color;\n        this.engine = new Engine();\n        this.door = new Door();\n        Car.fuelTank = new FuelTank();\n        this.speedometer = new LocalSpeedometer();\n        this.gps = new AnonymousGPS();\n    }\n    class Engine {\n        void start() {\n            System.out.println(\"Engine started for \" + Car.this.color + \" car\");\n        }\n    }\n    class Door {\n        void open() {\n            System.out.println(\"Door opened for \" + Car.this.color + \" car\");\n        }\n    }\n    static class FuelTank {\n        void fill() {\n            System.out.println(\"Fuel tank filled\");\n        }\n    }\n    class LocalSpeedometer {\n        void displaySpeed() {\n            System.out.println(\"Speed: 60 km/h\");\n        }\n    }\n    AnonymousGPS gps = new AnonymousGPS() {\n        void showLocation() {\n            System.out.println(\"Location: 12.9716, 77.5946\");\n        }\n    };\n}\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car(\"Red\");\n        myCar.engine.start();\n        myCar.door.open();\n        Car.fuelTank.fill();\n        myCar.speedometer.displaySpeed();\n        myCar.gps.showLocation();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing nested classes.'
    }
  },
  {
    id: 'final-members',
    name: 'Final members',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Final members (variables, methods, and classes) are used to restrict changes and ensure immutability.',
      definition: 'Final variables cannot be changed once initialized. Final methods cannot be overridden. Final classes cannot be inherited.',
      realWorldExample: 'A "Student" class can have a final variable for ID, a final method for calculating GPA, and a final class for a specific student type.',
      realWorldUse: 'Used to ensure data integrity, prevent overriding, and restrict inheritance.',
      importance: 'Understanding final members is essential for writing robust and maintainable Java code.',
      detailedExplanation: 'Final variables are declared using the "final" keyword. They must be initialized and cannot be reassigned. Final methods are declared using the "final" keyword. They cannot be overridden. Final classes are declared using the "final" keyword. They cannot be inherited.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Final Members (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/final-keyword-in-java/' },
        { title: 'Java Final Members (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_final_keyword.htm' }
      ],
      sampleProgram: `<div>// Java Example: Final Members\nclass Student {\n    final int ID = 1001;\n    final double calculateGPA() {\n        return 3.8;\n    }\n}\nfinal class SpecificStudent extends Student {\n    // This will cause a compilation error\n    // void calculateGPA() {\n    //     System.out.println(\"GPA: 4.0\");\n    // }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Student student = new Student();\n        System.out.println(\"Student ID: \" + student.ID);\n        System.out.println(\"GPA: \" + student.calculateGPA());\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing final members.'
    }
  },
  {
    id: 'variable-arguments',
    name: 'Variable Arguments',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Variable arguments (varargs) allow methods to accept a variable number of arguments.',
      definition: 'Variable arguments (varargs) allow methods to accept a variable number of arguments. They are declared using the "data-type..." syntax.',
      realWorldExample: 'A "Calculator" class can have a method that adds multiple numbers using varargs.',
      realWorldUse: 'Used to create flexible methods that can accept a varying number of arguments.',
      importance: 'Understanding variable arguments is essential for writing Java programs that require flexible parameter lists.',
      detailedExplanation: 'Variable arguments are declared using the "data-type..." syntax. They are treated as an array by the method. This allows for methods to accept a variable number of arguments.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Variable Arguments (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/variable-arguments-varargs-in-java/' },
        { title: 'Java Variable Arguments (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_varargs.htm' }
      ],
      sampleProgram: `<div>// Java Example: Variable Arguments\nclass Calculator {\n    double add(double... numbers) {\n        double sum = 0;\n        for (double num : numbers) {\n            sum += num;\n        }\n        return sum;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n        System.out.println(\"Sum of 1, 2, 3: \" + calc.add(1, 2, 3));\n        System.out.println(\"Sum of 10, 20, 30, 40: \" + calc.add(10, 20, 30, 40));\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing variable arguments.'
    }
  },
  {
    id: 'containment',
    name: 'Objects of one class as members of another class (Containment)',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Containment is a technique where one class contains another class as a member.',
      definition: 'Containment is a technique where one class contains another class as a member. This is achieved by declaring an object of one class inside another class.',
      realWorldExample: 'A "Car" class can have an "Engine" object, a "Door" object, and a "FuelTank" object.',
      realWorldUse: 'Used to model real-world relationships, where an object of one class is part of another object.',
      importance: 'Understanding containment is essential for writing Java programs that model complex real-world scenarios.',
      detailedExplanation: 'Containment is achieved by declaring an object of one class inside another class. This allows for better code organization and reusability.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Containment (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/object-composition-in-java/' },
        { title: 'Java Containment (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_object_composition.htm' }
      ],
      sampleProgram: `<div>// Java Example: Containment\nclass Engine {\n    void start() {\n        System.out.println(\"Engine started\");\n    }\n}\nclass Door {\n    void open() {\n        System.out.println(\"Door opened\");\n    }\n}\nclass FuelTank {\n    void fill() {\n        System.out.println(\"Fuel tank filled\");\n    }\n}\nclass Car {\n    Engine engine;\n    Door door;\n    FuelTank fuelTank;\n    Car() {\n        this.engine = new Engine();\n        this.door = new Door();\n        this.fuelTank = new FuelTank();\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car();\n        myCar.engine.start();\n        myCar.door.open();\n        myCar.fuelTank.fill();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing containment.'
    }
  },
  {
    id: 'finalize-garbage-collection',
    name: 'Finalize Method and Garbage Collection',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Finalize method and garbage collection are essential for resource management and memory cleanup.',
      definition: 'Finalize method is a method that is called by the garbage collector before an object is destroyed. It is used for cleaning up resources.',
      realWorldExample: 'A "File" class can have a finalize method to close an open file.',
      realWorldUse: 'Used to perform cleanup tasks when an object is no longer needed and its memory is freed by the garbage collector.',
      importance: 'Understanding finalize method and garbage collection is essential for writing robust and maintainable Java code.',
      detailedExplanation: 'Finalize method is a method that is called by the garbage collector before an object is destroyed. It is used for cleaning up resources. The garbage collector is responsible for freeing memory that is no longer in use.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Finalize Method (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/finalize-in-java/' },
        { title: 'Java Garbage Collection (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/garbage-collection-in-java/' },
        { title: 'Java Garbage Collection (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_garbage_collection.htm' }
      ],
      sampleProgram: `<div>// Java Example: Finalize Method and Garbage Collection\nclass FileHandler {\n    void openFile() {\n        System.out.println(\"File opened\");\n    }\n    void closeFile() {\n        System.out.println(\"File closed\");\n    }\n    protected void finalize() throws Throwable {\n        super.finalize();\n        closeFile();\n        System.out.println(\"FileHandler finalized\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        FileHandler fileHandler = new FileHandler();\n        fileHandler.openFile();\n        // The finalize method will be called by the garbage collector\n        // when fileHandler is no longer in use.\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing finalize method and garbage collection.'
    }
  },
  {
    id: 'inheritance',
    name: 'Inheritance',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Inheritance is a mechanism where a new class (derived class) inherits properties and behaviors from an existing class (base class).',
      definition: 'Inheritance is a mechanism where a new class (derived class) inherits properties and behaviors from an existing class (base class). The derived class can add new properties and behaviors or modify existing ones.',
      realWorldExample: 'A "Car" class can inherit from a "Vehicle" class, adding specific car-related properties and behaviors.',
      realWorldUse: 'Used to create new classes that reuse and extend the functionality of existing classes.',
      importance: 'Understanding inheritance is essential for writing modular and maintainable Java code.',
      detailedExplanation: 'Inheritance is a mechanism where a new class (derived class) inherits properties and behaviors from an existing class (base class). The derived class can add new properties and behaviors or modify existing ones. This promotes code reusability and establishes a hierarchical relationship.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Inheritance (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/inheritance-in-java/' },
        { title: 'Java Inheritance (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_inheritance.htm' }
      ],
      sampleProgram: `<div>// Java Example: Inheritance\nclass Vehicle {\n    String brand;\n    void start() {\n        System.out.println(\"Vehicle started\");\n    }\n}\nclass Car extends Vehicle {\n    void drive() {\n        System.out.println(\"Car is driving on the road\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car();\n        myCar.brand = \"Toyota\";\n        myCar.start();\n        myCar.drive();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing inheritance.'
    }
  },
  {
    id: 'single-level-inheritance',
    name: 'Single-level Inheritance',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Single-level inheritance is a type of inheritance where a derived class inherits from a single base class.',
      definition: 'Single-level inheritance is a type of inheritance where a derived class inherits from a single base class. The derived class can add new properties and behaviors or modify existing ones.',
      realWorldExample: 'A "Car" class can inherit from a "Vehicle" class, adding specific car-related properties and behaviors.',
      realWorldUse: 'Used to create new classes that reuse and extend the functionality of existing classes.',
      importance: 'Understanding single-level inheritance is essential for writing modular and maintainable Java code.',
      detailedExplanation: 'Single-level inheritance is a type of inheritance where a derived class inherits from a single base class. The derived class can add new properties and behaviors or modify existing ones. This promotes code reusability and establishes a hierarchical relationship.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Single-level Inheritance (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/single-level-inheritance-in-java/' },
        { title: 'Java Single-level Inheritance (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_single_inheritance.htm' }
      ],
      sampleProgram: `<div>// Java Example: Single-level Inheritance\nclass Vehicle {\n    String brand;\n    void start() {\n        System.out.println(\"Vehicle started\");\n    }\n}\nclass Car extends Vehicle {\n    void drive() {\n        System.out.println(\"Car is driving on the road\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car();\n        myCar.brand = \"Toyota\";\n        myCar.start();\n        myCar.drive();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing single-level inheritance.'
    }
  },
  {
    id: 'multilevel-inheritance',
    name: 'Multilevel Inheritance',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Multilevel inheritance is a type of inheritance where a derived class inherits from a base class, and this derived class itself is a base class for another derived class.',
      definition: 'Multilevel inheritance is a type of inheritance where a derived class inherits from a base class, and this derived class itself is a base class for another derived class. The derived class can add new properties and behaviors or modify existing ones.',
      realWorldExample: 'A "Car" class can inherit from a "Vehicle" class, a "FourWheeler" class, and a "SportsCar" class, adding specific car-related properties and behaviors.',
      realWorldUse: 'Used to create new classes that reuse and extend the functionality of existing classes.',
      importance: 'Understanding multilevel inheritance is essential for writing modular and maintainable Java code.',
      detailedExplanation: 'Multilevel inheritance is a type of inheritance where a derived class inherits from a base class, and this derived class itself is a base class for another derived class. The derived class can add new properties and behaviors or modify existing ones. This promotes code reusability and establishes a hierarchical relationship.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Multilevel Inheritance (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/multilevel-inheritance-in-java/' },
        { title: 'Java Multilevel Inheritance (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_multilevel_inheritance.htm' }
      ],
      sampleProgram: `<div>// Java Example: Multilevel Inheritance\nclass Vehicle {\n    String brand;\n    void start() {\n        System.out.println(\"Vehicle started\");\n    }\n}\nclass Car extends Vehicle {\n    void drive() {\n        System.out.println(\"Car is driving on the road\");\n    }\n}\nclass SportsCar extends Car {\n    void accelerate() {\n        System.out.println(\"Sports car accelerating\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        SportsCar mySportsCar = new SportsCar();\n        mySportsCar.brand = \"Porsche\";\n        mySportsCar.start();\n        mySportsCar.drive();\n        mySportsCar.accelerate();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing multilevel inheritance.'
    }
  },
  {
    id: 'hierarchical-inheritance',
    name: 'Hierarchical Inheritance',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Hierarchical inheritance is a type of inheritance where multiple derived classes inherit from a single base class.',
      definition: 'Hierarchical inheritance is a type of inheritance where multiple derived classes inherit from a single base class. The derived classes can add new properties and behaviors or modify existing ones.',
      realWorldExample: 'A "Vehicle" class can have multiple derived classes like "Car", "Bike", "Truck", each with their own specific properties and behaviors.',
      realWorldUse: 'Used to create new classes that reuse and extend the functionality of existing classes.',
      importance: 'Understanding hierarchical inheritance is essential for writing modular and maintainable Java code.',
      detailedExplanation: 'Hierarchical inheritance is a type of inheritance where multiple derived classes inherit from a single base class. The derived classes can add new properties and behaviors or modify existing ones. This promotes code reusability and establishes a hierarchical relationship.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Hierarchical Inheritance (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/hierarchical-inheritance-in-java/' },
        { title: 'Java Hierarchical Inheritance (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_hierarchical_inheritance.htm' }
      ],
      sampleProgram: `<div>// Java Example: Hierarchical Inheritance\nclass Vehicle {\n    String brand;\n    void start() {\n        System.out.println(\"Vehicle started\");\n    }\n}\nclass Car extends Vehicle {\n    void drive() {\n        System.out.println(\"Car is driving on the road\");\n    }\n}\nclass Bike extends Vehicle {\n    void ride() {\n        System.out.println(\"Bike is riding on the road\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car();\n        myCar.brand = \"Toyota\";\n        myCar.start();\n        myCar.drive();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing hierarchical inheritance.'
    }
  },
  {
    id: 'multiple-inheritance',
    name: 'Multiple Inheritance',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Multiple inheritance is a type of inheritance where a derived class inherits from multiple base classes.',
      definition: 'Multiple inheritance is a type of inheritance where a derived class inherits from multiple base classes. The derived class can add new properties and behaviors or modify existing ones.',
      realWorldExample: 'A "Developer" class can inherit from "Employee" and "Programmer" classes, adding specific developer-related properties and behaviors.',
      realWorldUse: 'Used to create new classes that reuse and extend the functionality of existing classes.',
      importance: 'Understanding multiple inheritance is essential for writing modular and maintainable Java code.',
      detailedExplanation: 'Multiple inheritance is a type of inheritance where a derived class inherits from multiple base classes. The derived class can add new properties and behaviors or modify existing ones. This promotes code reusability and establishes a hierarchical relationship.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Multiple Inheritance (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/multiple-inheritance-in-java/' },
        { title: 'Java Multiple Inheritance (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_multiple_inheritance.htm' }
      ],
      sampleProgram: `<div>// Java Example: Multiple Inheritance\nclass Employee {\n    String name;\n    double salary;\n    void work() {\n        System.out.println(\"Employee is working\");\n    }\n}\nclass Programmer extends Employee {\n    void code() {\n        System.out.println(\"Programmer is coding\");\n    }\n}\nclass Developer extends Employee {\n    void develop() {\n        System.out.println(\"Developer is developing\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Developer myDeveloper = new Developer();\n        myDeveloper.name = \"Alice\";\n        myDeveloper.salary = 100000.0;\n        myDeveloper.work();\n        myDeveloper.develop();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing multiple inheritance.'
    }
  },
  {
    id: 'hybrid-inheritance',
    name: 'Hybrid Inheritance',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Hybrid inheritance is a combination of single, multilevel, and hierarchical inheritance.',
      definition: 'Hybrid inheritance is a combination of single, multilevel, and hierarchical inheritance. It involves a class that inherits from multiple base classes, and some of those base classes might themselves be derived from other base classes.',
      realWorldExample: 'A "Car" class can inherit from "Vehicle" and "FourWheeler" classes, and "SportsCar" class can inherit from "Car" and "FourWheeler" classes, creating a complex hybrid inheritance structure.',
      realWorldUse: 'Used to create new classes that reuse and extend the functionality of existing classes.',
      importance: 'Understanding hybrid inheritance is essential for writing modular and maintainable Java code.',
      detailedExplanation: 'Hybrid inheritance is a combination of single, multilevel, and hierarchical inheritance. It involves a class that inherits from multiple base classes, and some of those base classes might themselves be derived from other base classes. This promotes code reusability and establishes a hierarchical relationship.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Hybrid Inheritance (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/hybrid-inheritance-in-java/' },
        { title: 'Java Hybrid Inheritance (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_hybrid_inheritance.htm' }
      ],
      sampleProgram: `<div>// Java Example: Hybrid Inheritance\nclass Vehicle {\n    String brand;\n    void start() {\n        System.out.println(\"Vehicle started\");\n    }\n}\nclass Car extends Vehicle {\n    void drive() {\n        System.out.println(\"Car is driving on the road\");\n    }\n}\nclass FourWheeler extends Vehicle {\n    void transport() {\n        System.out.println(\"FourWheeler is transporting\");\n    }\n}\nclass SportsCar extends Car {\n    void accelerate() {\n        System.out.println(\"Sports car accelerating\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        SportsCar mySportsCar = new SportsCar();\n        mySportsCar.brand = \"Porsche\";\n        mySportsCar.start();\n        mySportsCar.drive();\n        mySportsCar.accelerate();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing hybrid inheritance.'
    }
  },
  {
    id: 'constructors-inheritance',
    name: 'Constructors and Inheritance',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Constructors and inheritance work together to initialize objects and manage inheritance relationships.',
      definition: 'When a derived class is instantiated, the constructor of the base class is called first. This ensures that the base class\'s properties are initialized before the derived class\'s properties are set. The derived class\'s constructor can also call the base class\'s constructor using "super()".',
      realWorldExample: 'A "Student" class can inherit from "Person" class, and the "Student" constructor can call the "Person" constructor to initialize name and age.',
      realWorldUse: 'Used to ensure proper initialization of objects and inheritance relationships.',
      importance: 'Understanding constructor and inheritance interaction is essential for writing robust and maintainable Java code.',
      detailedExplanation: 'When a derived class is instantiated, the constructor of the base class is called first. This ensures that the base class\'s properties are initialized before the derived class\'s properties are set. The derived class\'s constructor can also call the base class\'s constructor using "super()". This allows for hierarchical initialization.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Constructors and Inheritance (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/constructors-and-inheritance-in-java/' },
        { title: 'Java Constructors and Inheritance (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_inheritance.htm' }
      ],
      sampleProgram: `<div>// Java Example: Constructors and Inheritance\nclass Person {\n    String name;\n    int age;\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n}\nclass Student extends Person {\n    int studentId;\n    Student(String name, int age, int studentId) {\n        super(name, age);\n        this.studentId = studentId;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Student student = new Student(\"Alice\", 25, 1001);\n        System.out.println(\"Name: \" + student.name + \", Age: \" + student.age + \", ID: \" + student.studentId);\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing constructors and inheritance.'
    }
  },
  {
    id: 'abstract-classes-methods',
    name: 'Abstract Classes and Methods',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Abstract classes and methods are used to define a common structure and behavior that derived classes must follow.',
      definition: 'Abstract classes are classes that cannot be instantiated. They can have abstract methods (methods without a body) and concrete methods. Abstract methods must be overridden by derived classes.',
      realWorldExample: 'A "Shape" class can be abstract, with abstract methods like area() and perimeter(), and concrete classes like Circle, Rectangle, Square that extend it.',
      realWorldUse: 'Used to define a common structure and behavior that derived classes must follow, ensuring consistency across different types of objects.',
      importance: 'Understanding abstract classes and methods is essential for writing modular and maintainable Java code.',
      detailedExplanation: 'Abstract classes are classes that cannot be instantiated. They can have abstract methods (methods without a body) and concrete methods. Abstract methods must be overridden by derived classes. This promotes code reusability and establishes a hierarchical relationship.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Abstract Classes (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/abstract-classes-in-java/' },
        { title: 'Java Abstract Classes (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_abstract_class.htm' }
      ],
      sampleProgram: `<div>// Java Example: Abstract Classes and Methods\nabstract class Shape {\n    abstract double area();\n    abstract double perimeter();\n}\nclass Circle extends Shape {\n    double radius;\n    Circle(double radius) {\n        this.radius = radius;\n    }\n    double area() {\n        return Math.PI * radius * radius;\n    }\n    double perimeter() {\n        return 2 * Math.PI * radius;\n    }\n}\nclass Rectangle extends Shape {\n    double length, width;\n    Rectangle(double length, double width) {\n        this.length = length;\n        this.width = width;\n    }\n    double area() {\n        return length * width;\n    }\n    double perimeter() {\n        return 2 * (length + width);\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Circle circle = new Circle(5);\n        System.out.println(\"Circle Area: \" + circle.area());\n        System.out.println(\"Circle Perimeter: \" + circle.perimeter());\n        Rectangle rectangle = new Rectangle(4, 6);\n        System.out.println(\"Rectangle Area: \" + rectangle.area());\n        System.out.println(\"Rectangle Perimeter: \" + rectangle.perimeter());\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing abstract classes and methods.'
    }
  },
  {
    id: 'dynamic-method-dispatch',
    name: 'Dynamic Method Dispatch',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Dynamic method dispatch is a mechanism where the method to be executed is determined at runtime based on the actual object type.',
      definition: 'Dynamic method dispatch is a mechanism where the method to be executed is determined at runtime based on the actual object type. This is achieved through inheritance and overriding.',
      realWorldExample: 'A "Vehicle" class can have methods like start(), drive(), and accelerate(). A "Car" class can override drive() to print "Car is driving on the road".',
      realWorldUse: 'Used to achieve polymorphism, where different objects can respond to the same message (method call) in different ways.',
      importance: 'Understanding dynamic method dispatch is essential for writing modular and maintainable Java code.',
      detailedExplanation: 'Dynamic method dispatch is a mechanism where the method to be executed is determined at runtime based on the actual object type. This is achieved through inheritance and overriding. This allows for polymorphism, where different objects can respond to the same message (method call) in different ways.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Dynamic Method Dispatch (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/dynamic-method-dispatch-in-java/' },
        { title: 'Java Dynamic Method Dispatch (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_polymorphism.htm' }
      ],
      sampleProgram: `<div>// Java Example: Dynamic Method Dispatch\nclass Vehicle {\n    String brand;\n    void start() {\n        System.out.println(\"Vehicle started\");\n    }\n}\nclass Car extends Vehicle {\n    void drive() {\n        System.out.println(\"Car is driving on the road\");\n    }\n}\nclass Bike extends Vehicle {\n    void ride() {\n        System.out.println(\"Bike is riding on the road\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Vehicle vehicle = new Car();\n        vehicle.start(); // Vehicle's start()\n        vehicle.drive(); // Car's drive()\n        vehicle = new Bike();\n        vehicle.start(); // Vehicle's start()\n        vehicle.ride(); // Bike's ride()\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing dynamic method dispatch.'
    }
  },
  {
    id: 'object-slicing',
    name: 'Object Slicing',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Object slicing is a concept where a derived class object is treated as a base class object, losing its specific derived class properties.',
      definition: 'Object slicing is a concept where a derived class object is treated as a base class object, losing its specific derived class properties. This happens when a derived class object is assigned to a base class reference.',
      realWorldExample: 'A "Car" object is assigned to a "Vehicle" reference, losing its specific car properties like color, but keeping its vehicle properties like brand.',
      realWorldUse: 'Used to demonstrate the concept of inheritance and polymorphism.',
      importance: 'Understanding object slicing is essential for writing robust and maintainable Java code.',
      detailedExplanation: 'Object slicing is a concept where a derived class object is treated as a base class object, losing its specific derived class properties. This happens when a derived class object is assigned to a base class reference. This demonstrates the concept of inheritance and polymorphism.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Object Slicing (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/object-slicing-in-java/' },
        { title: 'Java Object Slicing (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_object_passing.htm' }
      ],
      sampleProgram: `<div>// Java Example: Object Slicing\nclass Vehicle {\n    String brand;\n    void start() {\n        System.out.println(\"Vehicle started\");\n    }\n}\nclass Car extends Vehicle {\n    String color;\n    Car(String brand, String color) {\n        super(brand);\n        this.color = color;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car(\"Toyota\", \"Red\");\n        Vehicle myVehicle = myCar; // Object slicing\n        myVehicle.start(); // Vehicle's start()\n        // myVehicle.color; // This line would cause a compilation error\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing object slicing.'
    }
  },
  {
    id: 'object-typecasting',
    name: 'Object Typecasting',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Object typecasting is used to convert an object of one type to another type.',
      definition: 'Object typecasting is used to convert an object of one type to another type. This is done using the "instanceof" operator and explicit typecasting.',
      realWorldExample: 'A "Vehicle" object can be typecast to a "Car" object to access car-specific properties.',
      realWorldUse: 'Used to access specific properties or methods of an object that are not available in its current type.',
      importance: 'Understanding object typecasting is essential for writing robust and maintainable Java code.',
      detailedExplanation: 'Object typecasting is used to convert an object of one type to another type. This is done using the "instanceof" operator and explicit typecasting. This allows for flexible and dynamic type handling.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Object Typecasting (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/type-casting-in-java/' },
        { title: 'Java Object Typecasting (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_type_casting.htm' }
      ],
      sampleProgram: `<div>// Java Example: Object Typecasting\nclass Vehicle {\n    String brand;\n    void start() {\n        System.out.println(\"Vehicle started\");\n    }\n}\nclass Car extends Vehicle {\n    String color;\n    Car(String brand, String color) {\n        super(brand);\n        this.color = color;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car(\"Toyota\", \"Red\");\n        Vehicle myVehicle = myCar; // Object slicing\n        if (myVehicle instanceof Car) {\n            Car car = (Car) myVehicle; // Typecasting\n            System.out.println(\"Car color: \" + car.color);\n        }\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing object typecasting.'
    }
  },
  {
    id: 'final-classes',
    name: 'Final Classes',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Final classes cannot be inherited, ensuring their immutability and preventing accidental modification.',
      definition: 'Final classes cannot be inherited. This is achieved by declaring a class as "final".',
      realWorldExample: 'A "Vehicle" class can be declared as "final", preventing any other class from inheriting it.',
      realWorldUse: 'Used to ensure that a class cannot be extended, thereby preventing accidental modification of its methods or properties.',
      importance: 'Understanding final classes is essential for writing robust and maintainable Java code.',
      detailedExplanation: 'Final classes cannot be inherited. This is achieved by declaring a class as "final". This ensures that a class cannot be extended, thereby preventing accidental modification of its methods or properties.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Final Classes (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/final-keyword-in-java/' },
        { title: 'Java Final Classes (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_final_keyword.htm' }
      ],
      sampleProgram: `<div>// Java Example: Final Classes\nfinal class Vehicle {\n    String brand;\n    void start() {\n        System.out.println(\"Vehicle started\");\n    }\n}\nclass Car extends Vehicle {\n    // This will cause a compilation error\n    // void start() {\n    //     System.out.println(\"Car started\");\n    // }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Vehicle myVehicle = new Vehicle();\n        myVehicle.start();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing final classes.'
    }
  },
  {
    id: 'interfaces',
    name: 'Interfaces',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Interfaces define a contract that a class must follow, ensuring consistent behavior.',
      definition: 'Interfaces define a contract that a class must follow, ensuring consistent behavior. They can have abstract methods and constants. A class can implement multiple interfaces.',
      realWorldExample: 'A "Vehicle" interface can define methods like start(), drive(), and accelerate(). A "Car" class can implement this interface, ensuring it has these methods.',
      realWorldUse: 'Used to define a common set of methods that a class must implement, ensuring consistent behavior across different types of objects.',
      importance: 'Understanding interfaces is essential for writing modular and maintainable Java code.',
      detailedExplanation: 'Interfaces define a contract that a class must follow, ensuring consistent behavior. They can have abstract methods and constants. A class can implement multiple interfaces. This promotes code reusability and establishes a hierarchical relationship.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Interfaces (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/interfaces-in-java/' },
        { title: 'Java Interfaces (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_interfaces.htm' }
      ],
      sampleProgram: `<div>// Java Example: Interfaces\ninterface Vehicle {\n    void start();\n    void drive();\n}\nclass Car implements Vehicle {\n    String brand;\n    Car(String brand) {\n        this.brand = brand;\n    }\n    public void start() {\n        System.out.println(brand + \" Car started\");\n    }\n    public void drive() {\n        System.out.println(brand + \" Car is driving\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car(\"Toyota\");\n        myCar.start();\n        myCar.drive();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing interfaces.'
    }
  },
  {
    id: 'defining-interfaces',
    name: 'Defining Interfaces',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Interfaces are defined using the "interface" keyword, similar to classes.',
      definition: 'Interfaces are defined using the "interface" keyword, similar to classes. They can have abstract methods, constants, and default methods.',
      realWorldExample: 'A "Vehicle" interface can define methods like start(), drive(), and accelerate(). A "Car" class can implement this interface, ensuring it has these methods.',
      realWorldUse: 'Used to define a common set of methods that a class must implement, ensuring consistent behavior across different types of objects.',
      importance: 'Understanding interface definition is essential for writing modular and maintainable Java code.',
      detailedExplanation: 'Interfaces are defined using the "interface" keyword, similar to classes. They can have abstract methods, constants, and default methods. This allows for a flexible and extensible design.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Interface Definition (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/interfaces-in-java/' },
        { title: 'Java Interface Definition (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_interfaces.htm' }
      ],
      sampleProgram: `<div>// Java Example: Defining Interfaces\ninterface Vehicle {\n    void start();\n    void drive();\n}\ninterface FourWheeler extends Vehicle {\n    void transport();\n}\nclass Car implements Vehicle, FourWheeler {\n    String brand;\n    Car(String brand) {\n        this.brand = brand;\n    }\n    public void start() {\n        System.out.println(brand + \" Car started\");\n    }\n    public void drive() {\n        System.out.println(brand + \" Car is driving\");\n    }\n    public void transport() {\n        System.out.println(brand + \" Car is transporting\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car(\"Toyota\");\n        myCar.start();\n        myCar.drive();\n        myCar.transport();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing interface definition.'
    }
  },
  {
    id: 'implementing-interfaces',
    name: 'Implementing Interfaces',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'A class implements an interface using the "implements" keyword.',
      definition: 'A class implements an interface using the "implements" keyword. It must override all abstract methods and constants defined in the interface.',
      realWorldExample: 'A "Car" class can implement a "Vehicle" interface, ensuring it has the start() and drive() methods.',
      realWorldUse: 'Used to ensure that a class must provide concrete implementations for all methods defined in an interface.',
      importance: 'Understanding interface implementation is essential for writing modular and maintainable Java code.',
      detailedExplanation: 'A class implements an interface using the "implements" keyword. It must override all abstract methods and constants defined in the interface. This ensures that a class must provide concrete implementations for all methods defined in an interface.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Implementing Interfaces (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/implementing-interface-in-java/' },
        { title: 'Java Implementing Interfaces (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_interface.htm' }
      ],
      sampleProgram: `<div>// Java Example: Implementing Interfaces\ninterface Vehicle {\n    void start();\n    void drive();\n}\nclass Car implements Vehicle {\n    String brand;\n    Car(String brand) {\n        this.brand = brand;\n    }\n    public void start() {\n        System.out.println(brand + \" Car started\");\n    }\n    public void drive() {\n        System.out.println(brand + \" Car is driving\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car(\"Toyota\");\n        myCar.start();\n        myCar.drive();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing interface implementation.'
    }
  },
  {
    id: 'polymorphism-interfaces',
    name: 'Polymorphism through interfaces',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Polymorphism through interfaces allows objects to take on multiple forms, depending on the interface they implement.',
      definition: 'Polymorphism through interfaces allows objects to take on multiple forms, depending on the interface they implement. This is achieved by having a base interface and multiple derived classes implementing it.',
      realWorldExample: 'A "Vehicle" interface can define methods like start(), drive(), and accelerate(). A "Car" class, "Bike" class, and "Truck" class can implement this interface, allowing them to be treated as "Vehicle" objects.',
      realWorldUse: 'Used to achieve polymorphism, where different objects can respond to the same message (method call) in different ways, based on their interface implementation.',
      importance: 'Understanding polymorphism through interfaces is essential for writing modular and maintainable Java code.',
      detailedExplanation: 'Polymorphism through interfaces allows objects to take on multiple forms, depending on the interface they implement. This is achieved by having a base interface and multiple derived classes implementing it. This promotes code reusability and establishes a hierarchical relationship.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Polymorphism through Interfaces (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/polymorphism-in-java/' },
        { title: 'Java Polymorphism through Interfaces (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_polymorphism.htm' }
      ],
      sampleProgram: `<div>// Java Example: Polymorphism through Interfaces\ninterface Vehicle {\n    void start();\n    void drive();\n}\nclass Car implements Vehicle {\n    String brand;\n    Car(String brand) {\n        this.brand = brand;\n    }\n    public void start() {\n        System.out.println(brand + \" Car started\");\n    }\n    public void drive() {\n        System.out.println(brand + \" Car is driving\");\n    }\n}\nclass Bike implements Vehicle {\n    String brand;\n    Bike(String brand) {\n        this.brand = brand;\n    }\n    public void start() {\n        System.out.println(brand + \" Bike started\");\n    }\n    public void drive() {\n        System.out.println(brand + \" Bike is riding\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Vehicle myVehicle1 = new Car(\"Toyota\");\n        Vehicle myVehicle2 = new Bike(\"Honda\");\n        myVehicle1.start(); // Car's start()\n        myVehicle1.drive(); // Car's drive()\n        myVehicle2.start(); // Bike's start()\n        myVehicle2.drive(); // Bike's drive()\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing polymorphism through interfaces.'
    }
  },
  {
    id: 'implementing-interface-partially',
    name: 'Implementing an Interface Partially',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'A class can implement an interface partially, meaning it only overrides some of the methods.',
      definition: 'A class can implement an interface partially, meaning it only overrides some of the methods. This is achieved by declaring the class as "abstract" and overriding only the required methods.',
      realWorldExample: 'A "Vehicle" interface can define methods like start(), drive(), and accelerate(). A "Car" class can implement this interface, ensuring it has the start() and drive() methods, but not the accelerate() method.',
      realWorldUse: 'Used to achieve polymorphism, where different objects can respond to the same message (method call) in different ways, based on their interface implementation.',
      importance: 'Understanding partial interface implementation is essential for writing modular and maintainable Java code.',
      detailedExplanation: 'A class can implement an interface partially, meaning it only overrides some of the methods. This is achieved by declaring the class as "abstract" and overriding only the required methods. This allows for flexibility in implementing interfaces.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Partial Interface Implementation (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/partial-interface-implementation-in-java/' },
        { title: 'Java Partial Interface Implementation (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_interface.htm' }
      ],
      sampleProgram: `<div>// Java Example: Partial Interface Implementation\ninterface Vehicle {\n    void start();\n    void drive();\n}\nabstract class Car implements Vehicle {\n    String brand;\n    Car(String brand) {\n        this.brand = brand;\n    }\n    public void start() {\n        System.out.println(brand + \" Car started\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car(\"Toyota\") {\n            public void drive() {\n                System.out.println(brand + \" Car is driving\");\n            }\n        };\n        myCar.start();\n        myCar.drive();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing partial interface implementation.'
    }
  },
  {
    id: 'extending-interfaces',
    name: 'Extending Interfaces',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Interfaces can extend other interfaces, allowing for a hierarchical relationship.',
      definition: 'Interfaces can extend other interfaces, allowing for a hierarchical relationship. This is achieved using the "extends" keyword.',
      realWorldExample: 'A "Vehicle" interface can define methods like start(), drive(), and accelerate(). A "FourWheeler" interface can extend "Vehicle" and add a "transport()" method. A "Car" class can implement "FourWheeler" and "Vehicle".',
      realWorldUse: 'Used to create a hierarchical relationship between interfaces, allowing for a flexible and extensible design.',
      importance: 'Understanding interface extension is essential for writing modular and maintainable Java code.',
      detailedExplanation: 'Interfaces can extend other interfaces, allowing for a hierarchical relationship. This is achieved using the "extends" keyword. This allows for a flexible and extensible design.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Extending Interfaces (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/interfaces-in-java/' },
        { title: 'Java Extending Interfaces (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_interfaces.htm' }
      ],
      sampleProgram: `<div>// Java Example: Extending Interfaces\ninterface Vehicle {\n    void start();\n    void drive();\n}\ninterface FourWheeler extends Vehicle {\n    void transport();\n}\nclass Car implements FourWheeler {\n    String brand;\n    Car(String brand) {\n        this.brand = brand;\n    }\n    public void start() {\n        System.out.println(brand + \" Car started\");\n    }\n    public void drive() {\n        System.out.println(brand + \" Car is driving\");\n    }\n    public void transport() {\n        System.out.println(brand + \" Car is transporting\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car(\"Toyota\");\n        myCar.start();\n        myCar.drive();\n        myCar.transport();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing interface extension.'
    }
  },
  {
    id: 'implementing-multiple-interfaces',
    name: 'Implementing Multiple Interfaces',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'A class can implement multiple interfaces, allowing it to inherit properties and behaviors from multiple sources.',
      definition: 'A class can implement multiple interfaces, allowing it to inherit properties and behaviors from multiple sources. This is achieved using the "implements" keyword for each interface.',
      realWorldExample: 'A "Car" class can implement "Vehicle" and "FourWheeler" interfaces, ensuring it has the start(), drive(), and transport() methods.',
      realWorldUse: 'Used to create new classes that reuse and extend the functionality of existing classes, and to model complex real-world scenarios.',
      importance: 'Understanding multiple interface implementation is essential for writing modular and maintainable Java code.',
      detailedExplanation: 'A class can implement multiple interfaces, allowing it to inherit properties and behaviors from multiple sources. This is achieved using the "implements" keyword for each interface. This promotes code reusability and establishes a hierarchical relationship.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Multiple Interface Implementation (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/multiple-inheritance-through-interfaces-in-java/' },
        { title: 'Java Multiple Interface Implementation (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_multiple_inheritance.htm' }
      ],
      sampleProgram: `<div>// Java Example: Multiple Interface Implementation\ninterface Vehicle {\n    void start();\n    void drive();\n}\ninterface FourWheeler extends Vehicle {\n    void transport();\n}\nclass Car implements Vehicle, FourWheeler {\n    String brand;\n    Car(String brand) {\n        this.brand = brand;\n    }\n    public void start() {\n        System.out.println(brand + \" Car started\");\n    }\n    public void drive() {\n        System.out.println(brand + \" Car is driving\");\n    }\n    public void transport() {\n        System.out.println(brand + \" Car is transporting\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car(\"Toyota\");\n        myCar.start();\n        myCar.drive();\n        myCar.transport();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing multiple interface implementation.'
    }
  },
  {
    id: 'multiple-inheritance-interfaces',
    name: 'Multiple Inheritance through Interfaces',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit II',
    content: {
      introduction: 'Multiple inheritance through interfaces is a mechanism where a class can implement multiple interfaces, achieving a form of multiple inheritance.',
      definition: 'Multiple inheritance through interfaces is a mechanism where a class can implement multiple interfaces, achieving a form of multiple inheritance. This is achieved using the "implements" keyword for each interface.',
      realWorldExample: 'A "Developer" class can implement "Employee" and "Programmer" interfaces, ensuring it has the work() method. A "FullStackDeveloper" class can implement "Developer" and "FrontendDeveloper" interfaces, ensuring it has the code() method.',
      realWorldUse: 'Used to create new classes that reuse and extend the functionality of existing classes, and to model complex real-world scenarios.',
      importance: 'Understanding multiple inheritance through interfaces is essential for writing modular and maintainable Java code.',
      detailedExplanation: 'Multiple inheritance through interfaces is a mechanism where a class can implement multiple interfaces, achieving a form of multiple inheritance. This is achieved using the "implements" keyword for each interface. This promotes code reusability and establishes a hierarchical relationship.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=grEKMHGYyns', // CodeWithHarry
        'https://www.youtube.com/watch?v=UmnCZ7-9yDY' // Jenny's Lectures
      ],
      externalLinks: [
        { title: 'Java Multiple Inheritance through Interfaces (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/multiple-inheritance-through-interfaces-in-java/' },
        { title: 'Java Multiple Inheritance through Interfaces (TutorialsPoint)', url: 'https://www.tutorialspoint.com/java/java_multiple_inheritance.htm' }
      ],
      sampleProgram: `<div>// Java Example: Multiple Inheritance through Interfaces\ninterface Employee {\n    void work();\n}\ninterface Programmer extends Employee {\n    void code();\n}\ninterface FrontendDeveloper extends Programmer {\n    void developFrontend();\n}\nclass Developer implements Employee, Programmer, FrontendDeveloper {\n    public void work() {\n        System.out.println(\"Developer is working\");\n    }\n    public void code() {\n        System.out.println(\"Developer is coding\");\n    }\n    public void developFrontend() {\n        System.out.println(\"Developer is developing frontend\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Developer myDeveloper = new Developer();\n        myDeveloper.work();\n        myDeveloper.code();\n        myDeveloper.developFrontend();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`,
      diagram: '',
      diagramDescription: 'Diagram showing multiple inheritance through interfaces.'
    }
  }
];