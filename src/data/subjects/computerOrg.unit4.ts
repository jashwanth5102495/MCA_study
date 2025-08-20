import { Topic } from '../syllabus';

export const computerOrgUnit4: Topic[] = [
  {
    id: 'memory-hierarchy',
    name: 'Memory Hierarchy',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit IV',
    content: {
      introduction: 'Memory hierarchy is the organization of different types of memory in a computer system based on speed, cost, and size.',
      definition: 'A memory hierarchy arranges storage devices in levels, with the fastest and most expensive at the top and the slowest and cheapest at the bottom.',
      realWorldExample: 'A computer uses cache, RAM, and hard disk as part of its memory hierarchy.',
      realWorldUse: 'Used in all modern computers to balance speed, cost, and capacity for efficient data access.',
      importance: 'Memory hierarchy improves system performance and cost-effectiveness by keeping frequently used data in faster memory.',
      detailedExplanation: 'The memory hierarchy includes registers, cache, main memory (RAM), and secondary storage (HDD/SSD). Data moves between levels based on access patterns. The hierarchy exploits locality of reference to speed up data access and reduce costs.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Memory Hierarchy (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/memory-hierarchy-in-computer-architecture/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the levels of memory hierarchy.'
    }
  },
  {
    id: 'semiconductor-memories',
    name: 'Semiconductor Memories',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit IV',
    content: {
      introduction: 'Semiconductor memories are electronic devices that store data using semiconductor materials.',
      definition: 'A semiconductor memory is a type of memory that uses semiconductor materials to store and retrieve data.',
      realWorldExample: 'Dynamic Random Access Memory (DRAM) and Static Random Access Memory (SRAM) are common semiconductor memories.',
      realWorldUse: 'Used in all modern computers, smartphones, and other electronic devices for data storage.',
      importance: 'Semiconductor memories are the foundation of modern digital systems and enable data persistence.',
      detailedExplanation: 'Semiconductor memories use transistors to store and retrieve data. They are volatile, meaning data is lost when power is removed. Types include DRAM, SRAM, and ROM.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Semiconductor Memories (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/semiconductor-memory/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the basic structure of a semiconductor memory.'
    }
  },
  {
    id: 'ram',
    name: 'RAM (Random Access Memory)',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit IV',
    content: {
      introduction: 'RAM is the main memory of a computer system, used for temporary data storage.',
      definition: 'RAM is a type of memory that can be accessed randomly, allowing data to be read or written to any location in the memory.',
      realWorldExample: 'The main memory of a computer, where programs and data are loaded for execution.',
      realWorldUse: 'Used to store the currently executing program and its data, as well as temporary data for calculations.',
      importance: 'RAM is crucial for the operation of the computer, as it provides fast access to data and instructions.',
      detailedExplanation: 'RAM is volatile and requires power to maintain data. It is organized into banks and rows/columns. Data is accessed using addresses. Types include DRAM, SRAM, and SDRAM.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'RAM (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/ram/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the organization of RAM.'
    }
  },
  {
    id: 'rom',
    name: 'Read Only Memory (ROM)',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit IV',
    content: {
      introduction: 'ROM is a type of memory that can only be read and cannot be written to.',
      definition: 'ROM is a non-volatile memory that stores data permanently and cannot be modified.',
      realWorldExample: 'BIOS (Basic Input/Output System) and firmware on flash drives are examples of ROM.',
      realWorldUse: 'Used to store the initial boot program and system data that must persist across power cycles.',
      importance: 'ROM is essential for the computer to start up and function correctly.',
      detailedExplanation: 'ROM is typically manufactured using a process called photolithography. It is organized into blocks and sectors. Data is read-only. Types include PROM, EPROM, EEPROM, and Flash ROM.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'ROM (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/rom/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the structure of ROM.'
    }
  },
  {
    id: 'types-of-rom',
    name: 'Types of ROM',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit IV',
    content: {
      introduction: 'There are several types of ROM, each with specific characteristics and applications.',
      definition: 'ROM is a non-volatile memory that stores data permanently and cannot be modified.',
      realWorldExample: 'BIOS (Basic Input/Output System) and firmware on flash drives are examples of ROM.',
      realWorldUse: 'Used to store the initial boot program and system data that must persist across power cycles.',
      importance: 'ROM is essential for the computer to start up and function correctly.',
      detailedExplanation: 'ROM is typically manufactured using a process called photolithography. It is organized into blocks and sectors. Data is read-only. Types include PROM, EPROM, EEPROM, and Flash ROM.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'ROM (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/rom/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the structure of ROM.'
    }
  },
  {
    id: 'cache-memory',
    name: 'Cache Memory',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit IV',
    content: {
      introduction: 'Cache memory is a small, fast, and expensive memory that acts as a buffer between the CPU and main memory.',
      definition: 'Cache memory is a type of memory that is integrated into the CPU or is physically close to it, providing faster access to data than main memory.',
      realWorldExample: 'The L1, L2, and L3 caches in modern CPUs.',
      realWorldUse: 'Used to reduce the average time to access data from main memory by storing frequently used data and instructions.',
      importance: 'Cache memory significantly improves system performance by reducing memory access time.',
      detailedExplanation: 'Cache memory is organized hierarchically (L1, L2, L3). It uses a set-associative mapping. Data is fetched in blocks (cache lines). Types include SRAM cache, DRAM cache, and Flash cache.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Cache Memory (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/cache-memory/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the organization of cache memory.'
    }
  },
  {
    id: 'performance-considerations',
    name: 'Performance Considerations',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit IV',
    content: {
      introduction: 'Performance considerations are factors that affect how fast a computer system can execute tasks.',
      definition: 'Performance considerations are the factors that determine how fast a computer system can execute tasks.',
      realWorldExample: 'The speed of a computer processor, memory access time, and disk I/O.',
      realWorldUse: 'Used to optimize system performance by identifying bottlenecks and improving components.',
      importance: 'Performance is crucial for the overall usability and efficiency of a computer system.',
      detailedExplanation: 'Performance is influenced by factors like CPU speed, memory bandwidth, disk I/O, and network latency. Techniques like pipelining, instruction-level parallelism, and caching are used to improve performance.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Performance Considerations (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/performance-considerations-in-computer-architecture/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing performance considerations.'
    }
  },
  {
    id: 'virtual-memory',
    name: 'Virtual Memory',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit IV',
    content: {
      introduction: 'Virtual memory is a memory management technique that allows a computer to use more memory than it physically has.',
      definition: 'Virtual memory is a memory management technique that allows a computer to use more memory than it physically has.',
      realWorldExample: 'The operating system manages virtual memory to provide a larger address space than physical RAM.',
      realWorldUse: 'Used to extend the address space of a computer, enabling it to run more programs simultaneously.',
      importance: 'Virtual memory enables a computer to run more programs than its physical memory allows.',
      detailedExplanation: 'Virtual memory uses a paging mechanism. It maps virtual addresses to physical addresses. The operating system manages page tables and swap space. Types include Demand Paging, Working Set, and Page Replacement Algorithms.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Virtual Memory (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/virtual-memory/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing virtual memory.'
    }
  },
  {
    id: 'paging',
    name: 'Paging',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit IV',
    content: {
      introduction: 'Paging is a memory management technique that divides the main memory into fixed-size pages.',
      definition: 'Paging is a memory management technique that divides the main memory into fixed-size pages.',
      realWorldExample: 'The operating system uses paging to manage virtual memory.',
      realWorldUse: 'Used to manage the allocation and deallocation of memory pages.',
      importance: 'Paging is essential for efficient memory management and virtual memory.',
      detailedExplanation: 'Paging divides the main memory into pages. Each page has a fixed size. The operating system manages page tables. Types include Demand Paging, Working Set, and Page Replacement Algorithms.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Paging (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/paging/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing paging.'
    }
  },
  {
    id: 'secondary-storage',
    name: 'Secondary Storage',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit IV',
    content: {
      introduction: 'Secondary storage is a type of storage that is not directly accessible by the CPU, but is used for long-term data storage.',
      definition: 'Secondary storage is a type of storage that is not directly accessible by the CPU, but is used for long-term data storage.',
      realWorldExample: 'Hard disk drives (HDD), solid-state drives (SSD), and flash drives.',
      realWorldUse: 'Used to store large amounts of data that are not immediately needed by the CPU, such as operating systems, applications, and user files.',
      importance: 'Secondary storage is essential for data persistence and large-scale data storage.',
      detailedExplanation: 'Secondary storage is typically slower than main memory. It uses mechanical or solid-state components. Types include HDD, SSD, and Flash ROM. RAID (Redundant Array of Inexpensive Disks) is a technique to improve performance and reliability.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Secondary Storage (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/secondary-storage/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing secondary storage.'
    }
  },
  {
    id: 'raid',
    name: 'RAID',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit IV',
    content: {
      introduction: 'RAID (Redundant Array of Inexpensive Disks) is a technique that combines multiple disks to improve performance and reliability.',
      definition: 'RAID is a technique that combines multiple disks to improve performance and reliability.',
      realWorldExample: 'RAID 0, RAID 1, RAID 5, RAID 10, and JBOD (Just a Bunch Of Disks).',
      realWorldUse: 'Used to improve data reliability, performance, and capacity.',
      importance: 'RAID is essential for data protection and high-performance storage.',
      detailedExplanation: 'RAID uses multiple disks to provide redundancy and improve performance. It uses different RAID levels (0, 1, 5, 10, JBOD) to balance speed, reliability, and capacity. Types include RAID 0, RAID 1, RAID 5, RAID 10, and JBOD.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'RAID (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/raid/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing RAID.'
    }
  },
  {
    id: 'characteristics-of-multiprocessors',
    name: 'Characteristics of Multiprocessors',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit IV',
    content: {
      introduction: 'Multiprocessors are computers that have multiple processors working together to perform tasks.',
      definition: 'Multiprocessors are computers that have multiple processors working together to perform tasks.',
      realWorldExample: 'Symmetric multiprocessors (SMPs) and asymmetric multiprocessors (AMPs).',
      realWorldUse: 'Used in high-performance computing, servers, and specialized applications.',
      importance: 'Multiprocessors enable parallel processing and improve system performance.',
      detailedExplanation: 'Multiprocessors can be symmetric (all processors are equal) or asymmetric (some processors are more powerful). They use inter-processor communication and synchronization. Types include SMPs, AMPs, and Distributed Memory MIMD Architectures.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Multiprocessors (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/multiprocessors/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing characteristics of multiprocessors.'
    }
  },
  {
    id: 'multi-threaded-architecture',
    name: 'Multi-Threaded Architecture',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit IV',
    content: {
      introduction: 'Multi-threaded architecture allows multiple threads to execute simultaneously within a single processor.',
      definition: 'Multi-threaded architecture allows multiple threads to execute simultaneously within a single processor.',
      realWorldExample: 'Modern CPUs support multi-threading, enabling parallel execution of multiple threads.',
      realWorldUse: 'Used to improve application performance and throughput.',
      importance: 'Multi-threaded architecture enables parallel processing and improves application performance.',
      detailedExplanation: 'Multi-threaded architecture uses multiple execution units within a single processor. It requires inter-thread communication and synchronization. Types include Single-Threaded, Multi-Threaded, and Distributed Memory MIMD Architectures.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Multi-Threaded Architecture (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/multi-threaded-architecture/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing multi-threaded architecture.'
    }
  },
  {
    id: 'distributed-memory-mimd-architectures',
    name: 'Distributed Memory MIMD Architectures',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit IV',
    content: {
      introduction: 'Distributed Memory MIMD Architectures (DM-MIMD) are systems where multiple processors communicate and synchronize over a network.',
      definition: 'Distributed Memory MIMD Architectures (DM-MIMD) are systems where multiple processors communicate and synchronize over a network.',
      realWorldExample: 'Clusters of computers, supercomputers, and distributed systems.',
      realWorldUse: 'Used in high-performance computing, distributed applications, and large-scale data processing.',
      importance: 'Distributed Memory MIMD Architectures enable massive parallel processing and large-scale data analysis.',
      detailedExplanation: 'DM-MIMD systems consist of multiple processors connected via a network. They communicate and synchronize using message passing. Types include Clusters, Supercomputers, and Distributed Systems.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Distributed Memory MIMD Architectures (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/distributed-memory-mimd-architectures/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing distributed memory MIMD architectures.'
    }
  },
  {
    id: 'architecture-of-multithreaded-processor',
    name: 'Architecture of MultiThreaded Processor',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit IV',
    content: {
      introduction: 'The architecture of a multi-threaded processor is designed to support multiple threads efficiently.',
      definition: 'The architecture of a multi-threaded processor is designed to support multiple threads efficiently.',
      realWorldExample: 'Modern CPUs with multiple execution units and caches.',
      realWorldUse: 'Used to improve application performance and throughput in multi-threaded applications.',
      importance: 'The architecture of a multi-threaded processor is crucial for efficient multi-threading.',
      detailedExplanation: 'A multi-threaded processor has multiple execution units, caches, and memory hierarchies. It uses instruction-level parallelism and speculative execution. Types include Single-Threaded, Multi-Threaded, and Distributed Memory MIMD Architectures.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Architecture of MultiThreaded Processor (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/architecture-of-multithreaded-processor/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing architecture of multi-threaded processor.'
    }
  },
  {
    id: 'principle-of-multithreading',
    name: 'Principle of MultiThreading',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit IV',
    content: {
      introduction: 'The principle of multi-threading is the fundamental concept behind enabling multiple threads to execute simultaneously.',
      definition: 'The principle of multi-threading is the fundamental concept behind enabling multiple threads to execute simultaneously.',
      realWorldExample: 'Modern operating systems and application frameworks support multi-threading.',
      realWorldUse: 'Used to improve application performance and throughput in multi-threaded applications.',
      importance: 'The principle of multi-threading is essential for efficient multi-threading.',
      detailedExplanation: 'Multi-threading is achieved by having multiple execution units within a single processor and managing thread scheduling. Types include Single-Threaded, Multi-Threaded, and Distributed Memory MIMD Architectures.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Principle of MultiThreading (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/principle-of-multithreading/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing principle of multi-threading.'
    }
  },
  {
    id: 'interconnection-structures',
    name: 'Interconnection Structures',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit IV',
    content: {
      introduction: 'Interconnection structures are the mechanisms used to connect multiple processors and memory modules in a computer system.',
      definition: 'Interconnection structures are the mechanisms used to connect multiple processors and memory modules in a computer system.',
      realWorldExample: 'Buses, networks, and crossbars.',
      realWorldUse: 'Used to enable communication and synchronization between processors and memory modules.',
      importance: 'Interconnection structures are essential for the overall functionality and scalability of a computer system.',
      detailedExplanation: 'Interconnection structures include buses, networks, and crossbars. They are designed to be scalable and reliable. Types include Buses, Networks, and Crossbars.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Interconnection Structures (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/interconnection-structures/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing interconnection structures.'
    }
  },
  {
    id: 'inter-processor-arbitration',
    name: 'Inter Processor Arbitration',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit IV',
    content: {
      introduction: 'Inter-processor arbitration is the mechanism used to manage access to shared resources and data between multiple processors.',
      definition: 'Inter-processor arbitration is the mechanism used to manage access to shared resources and data between multiple processors.',
      realWorldExample: 'The bus arbitration in a multi-processor system.',
      realWorldUse: 'Used to prevent conflicts and ensure orderly access to shared resources.',
      importance: 'Inter-processor arbitration is essential for the correct operation of a multi-processor system.',
      detailedExplanation: 'Inter-processor arbitration uses mechanisms like bus arbitration, memory arbitration, and cache coherence. Types include Bus Arbitration, Memory Arbitration, and Cache Coherence.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Inter Processor Arbitration (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/inter-processor-arbitration/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing inter-processor arbitration.'
    }
  },
  {
    id: 'inter-processor-communication-and-synchronization',
    name: 'Inter Processor Communication and Synchronization',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit IV',
    content: {
      introduction: 'Inter-processor communication and synchronization are mechanisms used to enable communication and coordination between multiple processors.',
      definition: 'Inter-processor communication and synchronization are mechanisms used to enable communication and coordination between multiple processors.',
      realWorldExample: 'Message passing, shared memory, and barriers.',
      realWorldUse: 'Used to enable communication and synchronization between processors.',
      importance: 'Inter-processor communication and synchronization are essential for the correct operation of a multi-processor system.',
      detailedExplanation: 'Inter-processor communication and synchronization use mechanisms like message passing, shared memory, and barriers. Types include Message Passing, Shared Memory, and Barriers.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Inter Processor Communication and Synchronization (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/inter-processor-communication-and-synchronization/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing inter-processor communication and synchronization.'
    }
  },
  {
    id: 'cache-coherence',
    name: 'Cache Coherence',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit IV',
    content: {
      introduction: 'Cache coherence is the mechanism used to ensure that all processors see the same data in their caches.',
      definition: 'Cache coherence is the mechanism used to ensure that all processors see the same data in their caches.',
      realWorldExample: 'The coherence protocol in a multi-processor system.',
      realWorldUse: 'Used to prevent data inconsistencies and ensure correct execution of multi-threaded programs.',
      importance: 'Cache coherence is essential for the correct operation of a multi-processor system.',
      detailedExplanation: 'Cache coherence uses mechanisms like snooping, directory-based, and MSI (Modified, Shared, Invalid) protocols. Types include Snooping, Directory-Based, and MSI.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Cache Coherence (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/cache-coherence/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing cache coherence.'
    }
  }
]; 