import { Topic } from '../syllabus';

export const javaOOPUnit4: Topic[] = [
  {
    id: 'multithreaded-programming',
    name: 'Multithreaded Programming',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'Multithreaded programming allows multiple parts of a program to run concurrently, making efficient use of CPU resources.',
      definition: 'Multithreaded programming is a technique where two or more threads run concurrently, sharing process resources but executing independently.',
      realWorldExample: 'A web browser can download files, render pages, and play videos simultaneously using multiple threads.',
      realWorldUse: 'Used in operating systems, web servers, games, and any application requiring parallelism.',
      importance: 'Improves application performance, responsiveness, and resource utilization.',
      detailedExplanation: 'In Java, multithreading is achieved by creating and managing multiple threads. Each thread runs independently, but they can share data and resources. Proper synchronization is needed to avoid conflicts.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ', // Jenny's Lectures
        'https://www.youtube.com/watch?v=9jYqJNVYzCg' // CodeWithHarry
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Multithreading in Java', url: 'https://www.geeksforgeeks.org/multithreading-in-java/' },
        { title: 'TutorialsPoint: Multithreading', url: 'https://www.tutorialspoint.com/java/java_multithreading.htm' }
      ],
      sampleProgram: `<div>// Java Example: Simple Multithreading\nclass MyThread extends Thread {\n    public void run() {\n        for (int i = 0; i < 5; i++) {\n            System.out.println(Thread.currentThread().getId() + \" Value \" + i);\n        }\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        MyThread t1 = new MyThread();\n        MyThread t2 = new MyThread();\n        t1.start();\n        t2.start();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`
    }
  },
  {
    id: 'java-thread-model',
    name: 'The Java Thread Model',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'The Java thread model provides a way to create and manage threads in Java applications.',
      definition: 'The Java thread model is a system that allows multiple threads to exist within the context of a single process, sharing process resources but able to execute independently.',
      realWorldExample: 'A chat application where one thread listens for messages while another sends messages.',
      realWorldUse: 'Used in network servers, GUI applications, and real-time systems.',
      importance: 'Enables concurrent execution and efficient resource use in Java programs.',
      detailedExplanation: 'Java provides built-in support for multithreading via the Thread class and Runnable interface. Threads can be created, started, paused, and stopped. Java handles thread scheduling and context switching.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Java Thread Model', url: 'https://www.geeksforgeeks.org/thread-in-java/' },
        { title: 'TutorialsPoint: Java Thread Model', url: 'https://www.tutorialspoint.com/java/java_multithreading.htm' }
      ],
      sampleProgram: `<div>// Java Example: Creating and starting a thread
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running");
    }
}
public class Main {
    public static void main(String[] args) {
        MyThread t = new MyThread();
        t.start();
    }
}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`
    }
  },
  {
    id: 'thread-life-cycle',
    name: 'The Life Cycle of a Thread',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'A thread in Java goes through several states from creation to termination.',
      definition: 'The life cycle of a thread includes New, Runnable, Running, Blocked/Waiting, and Terminated states.',
      realWorldExample: 'A download manager thread is created (New), starts running (Runnable/Running), waits for network (Blocked), and finishes (Terminated).',
      realWorldUse: 'Used in any application that manages thread states, such as servers and background tasks.',
      importance: 'Understanding thread life cycle is crucial for writing robust multithreaded programs.',
      detailedExplanation: 'The main states are: New (created but not started), Runnable (ready to run), Running (executing), Blocked/Waiting (waiting for resources), and Terminated (finished execution). Java provides methods to control and query thread state.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Thread Life Cycle', url: 'https://www.geeksforgeeks.org/lifecycle-and-states-of-a-thread-in-java/' },
        { title: 'TutorialsPoint: Thread Life Cycle', url: 'https://www.tutorialspoint.com/java/java_multithreading.htm' }
      ],
      sampleProgram: `<div>// Java Example: Thread Class\nclass MyThread extends Thread {\n    public void run() {\n        System.out.println(\"Thread running\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        MyThread t = new MyThread();\n        t.start();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`
    }
  },
  {
    id: 'thread-class',
    name: 'The Thread Class',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'The Thread class in Java is used to create and control threads.',
      definition: 'Thread is a built-in Java class that represents a thread of execution.',
      realWorldExample: 'Creating a new thread to handle background tasks in an app.',
      realWorldUse: 'Used in all Java applications that require concurrent execution.',
      importance: 'Provides methods to start, pause, resume, and stop threads.',
      detailedExplanation: 'You can create a thread by extending the Thread class and overriding its run() method. The start() method begins execution of the thread.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Thread Class', url: 'https://www.geeksforgeeks.org/thread-class-in-java/' },
        { title: 'TutorialsPoint: Thread Class', url: 'https://www.tutorialspoint.com/java/java_thread_class.htm' }
      ],
      sampleProgram: `<div>// Java Example: Thread Class\nclass MyThread extends Thread {\n    public void run() {\n        System.out.println(\"Thread running\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        MyThread t = new MyThread();\n        t.start();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`
    }
  },
  {
    id: 'main-thread',
    name: 'The Main Thread',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'The main thread is the initial thread that starts when a Java program begins.',
      definition: 'The main thread is the thread that executes the main() method of a Java program.',
      realWorldExample: 'In a Java application, the main thread starts and may create other threads for background tasks.',
      realWorldUse: 'Used as the entry point for all Java applications.',
      importance: 'Understanding the main thread is essential for managing program flow and creating additional threads.',
      detailedExplanation: 'The main thread is created automatically when a Java program starts. You can get a reference to it using Thread.currentThread(). Other threads can be created from the main thread.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Main Thread', url: 'https://www.geeksforgeeks.org/main-thread-in-java/' },
        { title: 'TutorialsPoint: Main Thread', url: 'https://www.tutorialspoint.com/java/java_multithreading.htm' }
      ]
    }
  },
  {
    id: 'creating-own-threads',
    name: 'Creating our own Threads',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'You can create your own threads in Java by extending the Thread class or implementing the Runnable interface.',
      definition: 'A thread is a lightweight process. You can create a thread by extending Thread or implementing Runnable.',
      realWorldExample: 'A game where one thread handles user input and another updates the game state.',
      realWorldUse: 'Used in applications that require concurrent execution, such as games, servers, and GUIs.',
      importance: 'Allows for parallel execution and better resource utilization.',
      detailedExplanation: 'To create a thread, either extend the Thread class and override the run() method, or implement the Runnable interface and pass it to a Thread object. Start the thread using the start() method.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Creating Threads', url: 'https://www.geeksforgeeks.org/creating-threads-in-java/' },
        { title: 'TutorialsPoint: Creating Threads', url: 'https://www.tutorialspoint.com/java/java_multithreading.htm' }
      ],
      sampleProgram: `<div>// Java Example: Creating a Thread by Implementing Runnable\nclass MyRunnable implements Runnable {\n    public void run() {\n        System.out.println(\"Thread running\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Thread t = new Thread(new MyRunnable());\n        t.start();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`
    }
  },
  {
    id: 'extending-thread-class',
    name: 'Extending the Thread Class',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'One way to create a thread in Java is by extending the Thread class.',
      definition: 'Extend the Thread class and override its run() method to define the thread’s behavior.',
      realWorldExample: 'A server application where each client connection is handled by a separate thread.',
      realWorldUse: 'Used in applications that require multiple threads with custom behavior.',
      importance: 'Provides a simple way to create threads with specific functionality.',
      detailedExplanation: 'Create a class that extends Thread and override the run() method. Create an instance and call start() to begin execution.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Extending Thread', url: 'https://www.geeksforgeeks.org/extending-thread-class-in-java/' },
        { title: 'TutorialsPoint: Extending Thread', url: 'https://www.tutorialspoint.com/java/java_multithreading.htm' }
      ],
      sampleProgram: `<div>// Java Example: Extending Thread\nclass MyThread extends Thread {\n    public void run() {\n        System.out.println(\"Thread running\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        MyThread t = new MyThread();\n        t.start();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`
    }
  },
  {
    id: 'implementing-runnable',
    name: 'Implementing the Runnable Interface',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'Another way to create a thread is by implementing the Runnable interface.',
      definition: 'Implement the Runnable interface and define the run() method. Pass an instance to a Thread object.',
      realWorldExample: 'A download manager where each download runs in its own thread.',
      realWorldUse: 'Used when you want to extend another class or separate thread logic from thread management.',
      importance: 'Provides flexibility and allows multiple inheritance.',
      detailedExplanation: 'Create a class that implements Runnable and override the run() method. Pass an instance to a Thread and call start().',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Runnable Interface', url: 'https://www.geeksforgeeks.org/runnable-interface-in-java/' },
        { title: 'TutorialsPoint: Runnable Interface', url: 'https://www.tutorialspoint.com/java/java_multithreading.htm' }
      ],
      sampleProgram: `<div>// Java Example: Implementing Runnable\nclass MyRunnable implements Runnable {\n    public void run() {\n        System.out.println(\"Runnable running\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Thread t = new Thread(new MyRunnable());\n        t.start();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`
    }
  },
  {
    id: 'thread-groups',
    name: 'Thread Groups',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'Thread groups allow you to manage multiple threads as a single unit.',
      definition: 'A thread group is a collection of threads managed together.',
      realWorldExample: 'A server application where threads for each client are grouped together.',
      realWorldUse: 'Used to manage, interrupt, or set priorities for a group of threads.',
      importance: 'Simplifies thread management in complex applications.',
      detailedExplanation: 'Create a ThreadGroup and assign threads to it. You can perform operations on all threads in the group.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Thread Groups', url: 'https://www.geeksforgeeks.org/thread-group-in-java/' },
        { title: 'TutorialsPoint: Thread Groups', url: 'https://www.tutorialspoint.com/java/java_thread_group.htm' }
      ]
    }
  },
  {
    id: 'thread-priorities',
    name: 'Thread Priorities',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'Thread priorities determine the order in which threads are scheduled for execution.',
      definition: 'Each thread has a priority, which helps the scheduler decide which thread to run next.',
      realWorldExample: 'A real-time application may give higher priority to time-sensitive threads.',
      realWorldUse: 'Used to control thread scheduling in applications with multiple threads.',
      importance: 'Helps ensure important tasks are executed promptly.',
      detailedExplanation: 'Set thread priority using setPriority(). Java provides constants: Thread.MIN_PRIORITY, Thread.NORM_PRIORITY, Thread.MAX_PRIORITY.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Thread Priorities', url: 'https://www.geeksforgeeks.org/thread-priority-in-java/' },
        { title: 'TutorialsPoint: Thread Priorities', url: 'https://www.tutorialspoint.com/java/java_thread_priority.htm' }
      ]
    }
  },
  {
    id: 'synchronization',
    name: 'Synchronization',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'Synchronization is a mechanism to control access to shared resources by multiple threads.',
      definition: 'Synchronization ensures that only one thread can access a resource at a time, preventing data inconsistency.',
      realWorldExample: 'A bank account being updated by multiple ATM machines at the same time.',
      realWorldUse: 'Used in concurrent applications to avoid race conditions and ensure data integrity.',
      importance: 'Prevents data corruption and ensures thread safety.',
      detailedExplanation: 'In Java, synchronization is achieved using the synchronized keyword. It can be applied to methods or blocks of code. Only one thread can execute a synchronized method/block at a time for a given object.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Synchronization', url: 'https://www.geeksforgeeks.org/synchronized-in-java/' },
        { title: 'TutorialsPoint: Synchronization', url: 'https://www.tutorialspoint.com/java/java_synchronization.htm' }
      ],
      sampleProgram: `<div>// Java Example: Synchronization\nclass Counter {\n    private int count = 0;\n    public synchronized void increment() {\n        count++;\n    }\n    public int getCount() {\n        return count;\n    }\n}\npublic class Main {\n    public static void main(String[] args) throws InterruptedException {\n        Counter counter = new Counter();\n        Thread t1 = new Thread(() -> { for (int i = 0; i < 1000; i++) counter.increment(); });\n        Thread t2 = new Thread(() -> { for (int i = 0; i < 1000; i++) counter.increment(); });\n        t1.start(); t2.start();\n        t1.join(); t2.join();\n        System.out.println(counter.getCount());\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`
    }
  },
  {
    id: 'deadlock',
    name: 'Deadlock',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'Deadlock is a situation where two or more threads are blocked forever, each waiting for the other.',
      definition: 'Deadlock occurs when two or more threads are waiting for resources held by each other, causing all to be blocked.',
      realWorldExample: 'Two trains waiting for each other to move at a crossing, but neither can proceed.',
      realWorldUse: 'Occurs in concurrent programming when resources are not managed properly.',
      importance: 'Understanding deadlock is crucial for writing robust multithreaded programs.',
      detailedExplanation: 'Deadlock can be avoided by proper resource allocation, ordering, and using timeout mechanisms. Java provides tools to detect and resolve deadlocks.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Deadlock', url: 'https://www.geeksforgeeks.org/deadlock-in-java-multithreading/' },
        { title: 'TutorialsPoint: Deadlock', url: 'https://www.tutorialspoint.com/java/java_deadlock.htm' }
      ]
    }
  },
  {
    id: 'suspending-resuming-threads',
    name: 'Suspending and Resuming Threads',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'Threads can be suspended and resumed to control their execution.',
      definition: 'Suspending a thread pauses its execution; resuming restarts it. Java provides methods to manage thread states.',
      realWorldExample: 'A music player app suspends playback when paused and resumes when play is pressed.',
      realWorldUse: 'Used in applications that need to pause and resume tasks.',
      importance: 'Allows for better control over thread execution.',
      detailedExplanation: 'The suspend() and resume() methods are deprecated due to deadlock risks. Use wait(), notify(), and notifyAll() for safer thread control.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Suspending Threads', url: 'https://www.geeksforgeeks.org/suspend-resume-and-stop-thread-methods-in-java/' },
        { title: 'TutorialsPoint: Suspending Threads', url: 'https://www.tutorialspoint.com/java/java_multithreading.htm' }
      ]
    }
  },
  {
    id: 'producer-consumer',
    name: 'Producer-Consumer Relationship between Threads',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'Producer-consumer is a classic example of inter-thread communication.',
      definition: 'Producer thread generates data and puts it in a buffer; consumer thread takes data from the buffer.',
      realWorldExample: 'A print spooler where one thread adds print jobs and another processes them.',
      realWorldUse: 'Used in pipelines, queues, and any system with data producers and consumers.',
      importance: 'Demonstrates synchronization and inter-thread communication.',
      detailedExplanation: 'Java provides wait() and notify() methods for inter-thread communication. The producer waits if the buffer is full; the consumer waits if the buffer is empty.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Producer Consumer', url: 'https://www.geeksforgeeks.org/producer-consumer-problem-using-threads-in-java/' },
        { title: 'TutorialsPoint: Producer Consumer', url: 'https://www.tutorialspoint.com/java/java_thread_communication.htm' }
      ],
      sampleProgram: `<div>// Java Example: Producer-Consumer\nclass Buffer {\n    private int data;\n    private boolean empty = true;\n    public synchronized void produce(int value) throws InterruptedException {\n        while (!empty) wait();\n        data = value;\n        empty = false;\n        notify();\n    }\n    public synchronized int consume() throws InterruptedException {\n        while (empty) wait();\n        empty = true;\n        notify();\n        return data;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Buffer buffer = new Buffer();\n        new Thread(() -> { try { buffer.produce(10); } catch (Exception e) {} }).start();\n        new Thread(() -> { try { System.out.println(buffer.consume()); } catch (Exception e) {} }).start();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`
    }
  },
  {
    id: 'daemon-threads',
    name: 'Daemon Threads',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'Daemon threads are background threads that provide services to user threads.',
      definition: 'A daemon thread runs in the background and does not prevent the JVM from exiting.',
      realWorldExample: 'Garbage collection in Java runs as a daemon thread.',
      realWorldUse: 'Used for background tasks like monitoring, cleanup, etc.',
      importance: 'Ensures background services run without blocking application exit.',
      detailedExplanation: 'Set a thread as daemon using setDaemon(true) before starting it. JVM exits when only daemon threads remain.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Daemon Threads', url: 'https://www.geeksforgeeks.org/daemon-thread-in-java/' },
        { title: 'TutorialsPoint: Daemon Threads', url: 'https://www.tutorialspoint.com/java/java_multithreading.htm' }
      ]
    }
  },
  {
    id: 'file-handling',
    name: 'File Handling',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'File handling in Java allows you to read from and write to files.',
      definition: 'File handling is the process of performing operations like create, read, write, and delete on files.',
      realWorldExample: 'A text editor saves and loads files using file handling.',
      realWorldUse: 'Used in all applications that need to store or retrieve data from files.',
      importance: 'Essential for persistent data storage.',
      detailedExplanation: 'Java provides classes like File, FileReader, FileWriter, BufferedReader, and BufferedWriter for file operations. Always close files after use to avoid resource leaks.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: File Handling', url: 'https://www.geeksforgeeks.org/file-handling-in-java/' },
        { title: 'TutorialsPoint: File Handling', url: 'https://www.tutorialspoint.com/java/java_files_io.htm' }
      ],
      sampleProgram: `<div>// Java Example: File Handling\nimport java.io.*;\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        FileWriter writer = new FileWriter(\"test.txt\");\n        writer.write(\"Hello, file!\");\n        writer.close();\n        BufferedReader reader = new BufferedReader(new FileReader(\"test.txt\"));\n        System.out.println(reader.readLine());\n        reader.close();\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`
    }
  },
  {
    id: 'file-class',
    name: 'The File Class',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'The File class represents files and directories in Java.',
      definition: 'File is a class in java.io that provides methods to create, delete, and get information about files and directories.',
      realWorldExample: 'Checking if a file exists before reading it.',
      realWorldUse: 'Used for file and directory management.',
      importance: 'Essential for file system operations.',
      detailedExplanation: 'Create a File object with the file path. Use methods like exists(), createNewFile(), delete(), length(), etc.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: File Class', url: 'https://www.geeksforgeeks.org/file-class-in-java/' },
        { title: 'TutorialsPoint: File Class', url: 'https://www.tutorialspoint.com/java/java_files_io.htm' }
      ],
      sampleProgram: `<div>// Java Example: File Class\nimport java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File file = new File(\"test.txt\");\n        System.out.println(\"Exists: \" + file.exists());\n    }\n}</div>\n\n[Run on OnlineGDB](https://www.onlinegdb.com/online_java_compiler)`
    }
  },
  {
    id: 'file-class-subclasses',
    name: 'The File Class and its subclasses',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'The File class has several subclasses for specific file operations.',
      definition: 'Subclasses like FileInputStream, FileOutputStream, FileReader, and FileWriter handle file I/O.',
      realWorldExample: 'Reading and writing files using FileReader and FileWriter.',
      realWorldUse: 'Used for file input and output operations.',
      importance: 'Provides specialized classes for efficient file handling.',
      detailedExplanation: 'Use FileInputStream/FileOutputStream for binary files, FileReader/FileWriter for text files. Always close streams after use.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: File Subclasses', url: 'https://www.geeksforgeeks.org/fileinputstream-fileoutputstream-java/' },
        { title: 'TutorialsPoint: File Subclasses', url: 'https://www.tutorialspoint.com/java/java_files_io.htm' }
      ]
    }
  },
  {
    id: 'outputstream-subclasses',
    name: 'The OutputStream and its subclasses',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'OutputStream is the superclass for all classes that write bytes to a destination.',
      definition: 'OutputStream and its subclasses (FileOutputStream, BufferedOutputStream, etc.) handle byte output.',
      realWorldExample: 'Writing binary data to a file.',
      realWorldUse: 'Used for writing data to files, network sockets, etc.',
      importance: 'Essential for output operations in Java.',
      detailedExplanation: 'Use FileOutputStream for files, BufferedOutputStream for buffering, DataOutputStream for primitive data types.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: OutputStream', url: 'https://www.geeksforgeeks.org/outputstream-class-in-java/' },
        { title: 'TutorialsPoint: OutputStream', url: 'https://www.tutorialspoint.com/java/java_files_io.htm' }
      ]
    }
  },
  {
    id: 'inputstream-subclasses',
    name: 'The InputStream Class and its subclasses',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'InputStream is the superclass for all classes that read bytes from a source.',
      definition: 'InputStream and its subclasses (FileInputStream, BufferedInputStream, etc.) handle byte input.',
      realWorldExample: 'Reading binary data from a file.',
      realWorldUse: 'Used for reading data from files, network sockets, etc.',
      importance: 'Essential for input operations in Java.',
      detailedExplanation: 'Use FileInputStream for files, BufferedInputStream for buffering, DataInputStream for primitive data types.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: InputStream', url: 'https://www.geeksforgeeks.org/inputstream-class-in-java/' },
        { title: 'TutorialsPoint: InputStream', url: 'https://www.tutorialspoint.com/java/java_files_io.htm' }
      ]
    }
  },
  {
    id: 'dataoutputstream',
    name: 'The DataOutputStream Class',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'DataOutputStream allows you to write primitive data types to an output stream.',
      definition: 'DataOutputStream is a subclass of OutputStream that lets you write Java primitives in a portable way.',
      realWorldExample: 'Writing integers and doubles to a binary file.',
      realWorldUse: 'Used for writing structured binary data.',
      importance: 'Ensures data is written in a format that can be read back correctly.',
      detailedExplanation: 'Use writeInt(), writeDouble(), writeUTF(), etc., to write data. Always close the stream after use.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: DataOutputStream', url: 'https://www.geeksforgeeks.org/dataoutputstream-class-in-java/' },
        { title: 'TutorialsPoint: DataOutputStream', url: 'https://www.tutorialspoint.com/java/java_dataoutputstream_class.htm' }
      ]
    }
  },
  {
    id: 'datainputstream',
    name: 'The DataInputStream Class',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'DataInputStream allows you to read primitive data types from an input stream.',
      definition: 'DataInputStream is a subclass of InputStream that lets you read Java primitives in a portable way.',
      realWorldExample: 'Reading integers and doubles from a binary file.',
      realWorldUse: 'Used for reading structured binary data.',
      importance: 'Ensures data is read in the format it was written.',
      detailedExplanation: 'Use readInt(), readDouble(), readUTF(), etc., to read data. Always close the stream after use.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: DataInputStream', url: 'https://www.geeksforgeeks.org/datainputstream-class-in-java/' },
        { title: 'TutorialsPoint: DataInputStream', url: 'https://www.tutorialspoint.com/java/java_datainputstream_class.htm' }
      ]
    }
  },
  {
    id: 'objectoutputstream',
    name: 'The ObjectOutputStream Class',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'The ObjectOutputStream class is used to write primitive data types and Java objects to an OutputStream.',
      definition: 'ObjectOutputStream is a subclass of OutputStream that provides methods to write objects in a format that can be read back by ObjectInputStream.',
      realWorldExample: 'Serializing and deserializing objects for persistence.',
      realWorldUse: 'Used for object serialization and deserialization.',
      importance: 'Allows objects to be written to and read from streams, enabling object persistence.',
      detailedExplanation: 'Use writeObject() to write objects, and readObject() to read them. Always close the stream after use.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: ObjectOutputStream', url: 'https://www.geeksforgeeks.org/objectoutputstream-class-in-java/' },
        { title: 'TutorialsPoint: ObjectOutputStream', url: 'https://www.tutorialspoint.com/java/java_objectoutputstream_class.htm' }
      ]
    }
  },
  {
    id: 'objectinputstream',
    name: 'The ObjectInputStream Class',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'The ObjectInputStream class is used to read primitive data types and Java objects from an InputStream.',
      definition: 'ObjectInputStream is a subclass of InputStream that provides methods to read objects in a format that was written by ObjectOutputStream.',
      realWorldExample: 'Deserializing objects from a file or network.',
      realWorldUse: 'Used for object deserialization.',
      importance: 'Allows objects to be read from streams, enabling object persistence.',
      detailedExplanation: 'Use readObject() to read objects. Always close the stream after use.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: ObjectInputStream', url: 'https://www.geeksforgeeks.org/objectinputstream-class-in-java/' },
        { title: 'TutorialsPoint: ObjectInputStream', url: 'https://www.tutorialspoint.com/java/java_objectinputstream_class.htm' }
      ]
    }
  },
  {
    id: 'random-access-files',
    name: 'Random Access files',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'Random Access files allow you to read and write data at any position in a file.',
      definition: 'Random Access files are files that can be read and written at any position, not just sequentially.',
      realWorldExample: 'A video player that can seek to any point in the file to play or pause.',
      realWorldUse: 'Used in applications that require non-sequential access to data, such as media players and databases.',
      importance: 'Enables efficient data retrieval and modification.',
      detailedExplanation: 'Java provides RandomAccessFile class that allows random access. Use seek() to move to a specific position, and read()/write() to read/write data.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Random Access Files', url: 'https://www.geeksforgeeks.org/random-access-file-in-java/' },
        { title: 'TutorialsPoint: Random Access Files', url: 'https://www.tutorialspoint.com/java/java_randomaccessfile.htm' }
      ]
    }
  },
  {
    id: 'applets',
    name: 'Applets',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'Applets are Java programs that run within a web browser.',
      definition: 'Applets are small Java programs that can be embedded in HTML pages and executed by a web browser.',
      realWorldExample: 'A Java-based calculator embedded in a web page.',
      realWorldUse: 'Used for interactive web content and applications.',
      importance: 'Enables Java to run on the client side, enhancing web applications.',
      detailedExplanation: 'Applets are written in Java and compiled to .class files. They are embedded in HTML using the <applet> tag. Applets have limited security and access to the client\'s system.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Applets', url: 'https://www.geeksforgeeks.org/applets-in-java/' },
        { title: 'TutorialsPoint: Applets', url: 'https://www.tutorialspoint.com/java/java_applets.htm' }
      ]
    }
  },
  {
    id: 'types-of-applets',
    name: 'Types of Applets',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'There are two types of applets: signed and unsigned.',
      definition: 'Signed applets are digitally signed by a trusted certificate authority (CA). Unsigned applets are not signed.',
      realWorldExample: 'A signed applet can be trusted to run, while an unsigned one might be blocked by browsers.',
      realWorldUse: 'Used to ensure security and trust in web applications.',
      importance: 'Helps prevent malicious code execution.',
      detailedExplanation: 'Signed applets are preferred for security. They are verified by the browser\'s security system. Unsigned applets are generally blocked by browsers for security reasons.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Types of Applets', url: 'https://www.geeksforgeeks.org/types-of-applets-in-java/' },
        { title: 'TutorialsPoint: Types of Applets', url: 'https://www.tutorialspoint.com/java/java_applets.htm' }
      ]
    }
  },
  {
    id: 'applet-life-cycle',
    name: 'The Life Cycle of an Applet',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'An applet goes through several states during its execution.',
      definition: 'The life cycle includes Init, Start, Stop, Destroy, and Error states.',
      realWorldExample: 'An applet is loaded (Init), starts running (Start), stops (Stop), and is destroyed (Destroy).',
      realWorldUse: 'Used to manage applet resources and lifecycle.',
      importance: 'Understanding applet life cycle is crucial for proper applet execution.',
      detailedExplanation: 'Init: Applet is loaded and initialized. Start: Applet is started and its init() method is called. Stop: Applet is stopped and its stop() method is called. Destroy: Applet is destroyed and its destroy() method is called. Error: Applet encounters an error and its error() method is called.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Applet Life Cycle', url: 'https://www.geeksforgeeks.org/lifecycle-of-an-applet-in-java/' },
        { title: 'TutorialsPoint: Applet Life Cycle', url: 'https://www.tutorialspoint.com/java/java_applets.htm' }
      ]
    }
  },
  {
    id: 'creating-executing-applets',
    name: 'Creating and Executing Applets',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'Creating and executing applets involves writing the applet code and embedding it in an HTML page.',
      definition: 'Applets are written in Java and compiled to .class files. They are embedded in HTML using the <applet> tag.',
      realWorldExample: 'A Java-based calculator embedded in a web page.',
      realWorldUse: 'Used for interactive web content and applications.',
      importance: 'Enables Java to run on the client side, enhancing web applications.',
      detailedExplanation: 'Applets are written in Java and compiled to .class files. They are embedded in HTML using the <applet> tag. Applets have limited security and access to the client\'s system.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Creating Applets', url: 'https://www.geeksforgeeks.org/creating-applets-in-java/' },
        { title: 'TutorialsPoint: Creating Applets', url: 'https://www.tutorialspoint.com/java/java_applets.htm' }
      ]
    }
  },
  {
    id: 'applet-tag-attributes',
    name: 'The Attributes in the <applet> tag',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'The <applet> tag has several attributes for configuring the applet.',
      definition: 'Attributes like code, archive, width, height, align, name, and codebase control the applet\'s behavior.',
      realWorldExample: 'An applet embedded in an HTML page with specific attributes.',
      realWorldUse: 'Used to customize applet behavior and appearance.',
      importance: 'Allows for fine-grained control over applet execution.',
      detailedExplanation: 'code: Specifies the .class file of the applet. archive: Specifies a list of .jar files containing the applet\'s dependencies. width, height: Define the applet\'s size. align: Aligns the applet. name: Assigns a name to the applet. codebase: Specifies the base URL for the applet\'s .class files.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Applet Tag Attributes', url: 'https://www.geeksforgeeks.org/attributes-in-applet-tag/' },
        { title: 'TutorialsPoint: Applet Tag Attributes', url: 'https://www.tutorialspoint.com/java/java_applets.htm' }
      ]
    }
  },
  {
    id: 'passing-parameters-applets',
    name: 'Passing Parameters to Applets',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'Applets can receive parameters from the HTML page that embeds them.',
      definition: 'Parameters are passed to the applet using the <applet> tag\'s param attribute.',
      realWorldExample: 'A calculator applet that receives the operation and numbers to perform.',
      realWorldUse: 'Used for dynamic configuration of applets.',
      importance: 'Allows for flexible applet behavior based on external input.',
      detailedExplanation: 'Parameters are passed using the <applet> tag\'s param attribute. The value is accessed using getParameter().',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Passing Parameters to Applets', url: 'https://www.geeksforgeeks.org/passing-parameters-to-applets/' },
        { title: 'TutorialsPoint: Passing Parameters to Applets', url: 'https://www.tutorialspoint.com/java/java_applets.htm' }
      ]
    }
  },
  {
    id: 'more-applet-tag',
    name: 'More about the <applet> tag',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'There are several other attributes and methods for working with the <applet> tag.',
      definition: 'Attributes like code, archive, width, height, align, name, and codebase control the applet\'s behavior.',
      realWorldExample: 'An applet embedded in an HTML page with specific attributes.',
      realWorldUse: 'Used to customize applet behavior and appearance.',
      importance: 'Allows for fine-grained control over applet execution.',
      detailedExplanation: 'code: Specifies the .class file of the applet. archive: Specifies a list of .jar files containing the applet\'s dependencies. width, height: Define the applet\'s size. align: Aligns the applet. name: Assigns a name to the applet. codebase: Specifies the base URL for the applet\'s .class files.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: More Applet Tag', url: 'https://www.geeksforgeeks.org/more-about-applet-tag/' },
        { title: 'TutorialsPoint: More Applet Tag', url: 'https://www.tutorialspoint.com/java/java_applets.htm' }
      ]
    }
  },
  {
    id: 'working-with-graphics',
    name: 'Working with Graphics',
    semester: 1,
    subject: 'Object-Oriented Programming (Java)',
    unit: 'Unit IV',
    content: {
      introduction: 'Java provides a comprehensive set of classes for 2D and 3D graphics.',
      definition: 'Graphics classes like java.awt.Graphics, java.awt.Graphics2D, and javax.swing.JPanel handle drawing and painting.',
      realWorldExample: 'Drawing shapes, text, images, and animations in a Java application.',
      realWorldUse: 'Used in all applications that require graphical user interfaces (GUIs) and visualizations.',
      importance: 'Essential for creating interactive and visually appealing applications.',
      detailedExplanation: 'Use java.awt.Graphics and java.awt.Graphics2D for 2D graphics. javax.swing.JPanel is a container for graphics. Use draw(), fill(), setColor(), etc., to draw shapes and text. Use add() to add components to a panel.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8p6pP5oY1JQ',
        'https://www.youtube.com/watch?v=9jYqJNVYzCg'
      ],
      externalLinks: [
        { title: 'GeeksforGeeks: Working with Graphics', url: 'https://www.geeksforgeeks.org/working-with-graphics-in-java/' },
        { title: 'TutorialsPoint: Working with Graphics', url: 'https://www.tutorialspoint.com/java/java_awt_package.htm' }
      ]
    }
  }
];