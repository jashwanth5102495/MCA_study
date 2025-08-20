import { Topic } from '../syllabus';

export const operatingSystemsUnit1: Topic[] = [
  // Introduction
  {
    id: 'computer-system-organization',
    name: 'Computer System Organization',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit I',
    content: {
      introduction: 'Computer system organization refers to the way hardware and software components are structured and interact to form a complete computing system.',
      definition: 'The architectural arrangement of computer hardware components including CPU, memory, I/O devices, and their interconnections that work together under operating system control.',
      realWorldExample: 'A modern laptop with CPU, RAM, storage, and peripherals all coordinated by the operating system to run applications like web browsers and games.',
      realWorldUse: 'Used in designing computer systems, understanding system performance, optimizing hardware-software interaction, and troubleshooting system issues.',
      importance: 'Understanding system organization is crucial for operating system design, performance optimization, and efficient resource management.',
      detailedExplanation: `
## System Components:

**Central Processing Unit (CPU):**
- Executes instructions and controls system operations
- Contains ALU, control unit, and registers
- Manages instruction fetch-decode-execute cycle

**Memory Hierarchy:**
- **Primary Memory**: RAM for active programs and data
- **Secondary Storage**: Hard drives, SSDs for permanent storage
- **Cache Memory**: High-speed memory for frequently accessed data

**I/O Subsystem:**
- Input devices (keyboard, mouse, sensors)
- Output devices (monitor, printer, speakers)
- I/O controllers and device drivers

**System Bus:**
- **Data Bus**: Transfers data between components
- **Address Bus**: Specifies memory locations
- **Control Bus**: Carries control signals

## System Operation:
- **Bootstrap Process**: System startup and OS loading
- **Interrupt Handling**: Managing hardware and software interrupts
- **System Calls**: Interface between user programs and OS
- **Resource Management**: CPU, memory, and I/O coordination

## Modern System Features:
- **Multicore Processors**: Parallel processing capabilities
- **Virtual Memory**: Extended memory management
- **DMA Controllers**: Direct memory access for I/O
- **Cache Coherency**: Maintaining data consistency
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=26QPDBe-NB8',
        'https://www.youtube.com/watch?v=9GDX-IyZ_C8',
        'https://www.youtube.com/watch?v=8hly31xKli0'
      ],
      externalLinks: [
        { title: 'Computer System Organization', url: 'https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/' },
        { title: 'Javatpoint: Computer Architecture', url: 'https://www.javatpoint.com/computer-architecture' },
        { title: 'Wikipedia: Computer Architecture', url: 'https://en.wikipedia.org/wiki/Computer_architecture' }
      ]
    }
  },
  {
    id: 'architecture-structure-operations',
    name: 'Architecture, Structure, Operations',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit I',
    content: {
      introduction: 'Computer architecture defines the design and organization of computer systems, including the structure of components and their operational behavior.',
      definition: 'The conceptual design and fundamental operational structure of a computer system, including instruction set architecture, microarchitecture, and system organization.',
      realWorldExample: 'Intel x86 architecture defines how processors execute instructions, while ARM architecture is optimized for mobile devices with different operational characteristics.',
      realWorldUse: 'Used in processor design, system optimization, compiler development, and understanding performance characteristics of different computing platforms.',
      importance: 'Architecture knowledge is essential for operating system design, performance tuning, and making informed decisions about hardware-software trade-offs.',
      detailedExplanation: `
## Computer Architecture Levels:

**Instruction Set Architecture (ISA):**
- Interface between hardware and software
- Defines available instructions, registers, and memory model
- Examples: x86, ARM, RISC-V, MIPS

**Microarchitecture:**
- Implementation of ISA in hardware
- Pipeline design, cache organization, branch prediction
- Performance optimization techniques

**System Architecture:**
- Overall system organization
- Memory hierarchy, I/O subsystem, interconnects
- Multiprocessor and distributed system design

## Structural Components:

**Processing Units:**
- **Single-core**: One processing unit per chip
- **Multi-core**: Multiple processing units on same chip
- **Many-core**: Hundreds or thousands of simple cores

**Memory Structure:**
- **Registers**: Fastest, smallest storage in CPU
- **Cache Levels**: L1, L2, L3 cache hierarchy
- **Main Memory**: Primary storage for active data
- **Storage**: Secondary storage for persistent data

**Interconnection Networks:**
- **Bus Architecture**: Shared communication medium
- **Point-to-Point**: Direct connections between components
- **Network-on-Chip**: Scalable interconnection for many-core systems

## Operational Characteristics:

**Instruction Execution:**
- **Fetch**: Retrieve instruction from memory
- **Decode**: Interpret instruction format
- **Execute**: Perform specified operation
- **Writeback**: Store results

**Performance Factors:**
- **Clock Speed**: Frequency of operation cycles
- **Instructions Per Cycle (IPC)**: Execution efficiency
- **Memory Bandwidth**: Data transfer rates
- **Latency**: Time delay for operations

**Parallel Processing:**
- **Instruction-Level Parallelism**: Multiple instructions simultaneously
- **Thread-Level Parallelism**: Multiple threads on different cores
- **Data-Level Parallelism**: SIMD operations on data arrays
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=L3jdHNpNjmE',
        'https://www.youtube.com/watch?v=rtAlC5J1U40'
      ],
      externalLinks: [
        { title: 'Computer Architecture Basics', url: 'https://www.geeksforgeeks.org/computer-organization-basic-computer-instructions/' },
        { title: 'System Structure and Operations', url: 'https://www.tutorialspoint.com/operating_system/os_system_structure.htm' }
      ]
    }
  },
  {
    id: 'process-management',
    name: 'Process Management',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit I',
    content: {
      introduction: 'Process management is a core function of operating systems that handles the creation, scheduling, and termination of processes.',
      definition: 'The systematic control and coordination of processes in a computer system, including process creation, scheduling, synchronization, and resource allocation.',
      realWorldExample: 'When you open multiple applications like a web browser, music player, and text editor, the OS manages all these processes, allocating CPU time and memory to each.',
      realWorldUse: 'Used in all modern operating systems to manage multitasking, ensure system stability, optimize performance, and provide fair resource allocation.',
      importance: 'Process management is fundamental to operating system functionality, enabling multitasking, system responsiveness, and efficient resource utilization.',
      detailedExplanation: `
## Process Fundamentals:

**Process Definition:**
- A program in execution with associated resources
- Includes program code, data, stack, and process control block
- Dynamic entity that changes state during execution

**Process vs Program:**
- **Program**: Static code stored on disk
- **Process**: Dynamic instance of program in memory
- Multiple processes can run same program simultaneously

## Process States:

**Basic States:**
- **New**: Process being created
- **Ready**: Waiting for CPU assignment
- **Running**: Currently executing on CPU
- **Waiting**: Blocked for I/O or event
- **Terminated**: Process has finished execution

**State Transitions:**
- New → Ready: Process creation complete
- Ready → Running: CPU scheduler selection
- Running → Ready: Time quantum expired
- Running → Waiting: I/O request or event wait
- Waiting → Ready: I/O completion or event occurrence
- Running → Terminated: Process completion

## Process Control Block (PCB):

**Essential Information:**
- **Process ID**: Unique identifier
- **Process State**: Current execution state
- **Program Counter**: Next instruction address
- **CPU Registers**: Register values when not running
- **Memory Management**: Page tables, segment tables
- **I/O Status**: Open files, I/O devices
- **Accounting**: CPU usage, time limits

## Process Operations:

**Process Creation:**
- **Fork()**: Create child process (Unix/Linux)
- **Exec()**: Replace process image
- **CreateProcess()**: Windows process creation
- Parent-child relationships and process trees

**Process Termination:**
- **Normal Completion**: Process finishes execution
- **Error Termination**: Runtime errors or exceptions
- **Fatal Error**: System-detected errors
- **Killed by Another Process**: External termination

## Process Scheduling:

**Scheduling Queues:**
- **Job Queue**: All processes in system
- **Ready Queue**: Processes ready for execution
- **Device Queues**: Processes waiting for I/O

**Schedulers:**
- **Long-term Scheduler**: Controls degree of multiprogramming
- **Short-term Scheduler**: Selects next process for CPU
- **Medium-term Scheduler**: Handles swapping

## Context Switching:

**Context Switch Process:**
1. Save current process state in PCB
2. Update PCB with new state information
3. Move PCB to appropriate queue
4. Select new process for execution
5. Restore new process state from PCB
6. Resume execution of new process

**Context Switch Overhead:**
- Time to save and restore process state
- Cache and TLB invalidation costs
- Impact on system performance
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=4s5GyXGU_4c',
        'https://www.youtube.com/watch?v=OrM7nZcxXZU'
      ],
      externalLinks: [
        { title: 'Process Management in OS', url: 'https://www.geeksforgeeks.org/process-management-in-operating-system/' },
        { title: 'Process Control Block', url: 'https://www.tutorialspoint.com/operating_system/os_process_management.htm' }
      ]
    }
  },
  {
    id: 'memory-management',
    name: 'Memory Management',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit I',
    content: {
      introduction: 'Memory management is responsible for managing the computer\'s primary memory, ensuring efficient allocation and deallocation of memory space to processes.',
      definition: 'The process of controlling and coordinating computer memory, assigning portions called blocks to various running programs to optimize overall system performance.',
      realWorldExample: 'When you run multiple programs simultaneously, the OS allocates separate memory regions to each program and prevents them from interfering with each other\'s data.',
      realWorldUse: 'Used in all computing systems to manage RAM allocation, prevent memory conflicts, enable virtual memory, and optimize system performance.',
      importance: 'Effective memory management is crucial for system stability, performance, security, and enabling multitasking capabilities.',
      detailedExplanation: `
## Memory Management Functions:

**Primary Functions:**
- **Allocation**: Assign memory blocks to processes
- **Deallocation**: Reclaim memory from terminated processes
- **Protection**: Prevent unauthorized memory access
- **Sharing**: Enable controlled memory sharing between processes
- **Virtual Memory**: Provide illusion of unlimited memory

## Memory Hierarchy:

**Storage Levels:**
- **Registers**: Fastest, smallest capacity (CPU internal)
- **Cache**: Very fast, small capacity (L1, L2, L3)
- **Main Memory**: Fast, moderate capacity (RAM)
- **Secondary Storage**: Slower, large capacity (HDD, SSD)

**Memory Characteristics:**
- **Access Time**: Speed of memory operations
- **Capacity**: Amount of data that can be stored
- **Cost**: Price per unit of storage
- **Volatility**: Data persistence without power

## Memory Allocation Strategies:

**Contiguous Allocation:**
- **Fixed Partitioning**: Memory divided into fixed-size blocks
- **Variable Partitioning**: Dynamic partition sizes based on process needs
- **Advantages**: Simple implementation, fast allocation
- **Disadvantages**: Internal/external fragmentation

**Non-Contiguous Allocation:**
- **Paging**: Memory divided into fixed-size pages
- **Segmentation**: Memory divided into variable-size segments
- **Advantages**: Reduced fragmentation, flexible allocation
- **Disadvantages**: Complex implementation, address translation overhead

## Memory Protection:

**Protection Mechanisms:**
- **Base and Limit Registers**: Define process memory boundaries
- **Memory Management Unit (MMU)**: Hardware-based protection
- **Access Control**: Read, write, execute permissions
- **Segmentation**: Logical separation of code, data, stack

**Security Features:**
- **Address Space Layout Randomization (ASLR)**: Randomize memory layout
- **Data Execution Prevention (DEP)**: Prevent code execution in data areas
- **Stack Canaries**: Detect buffer overflow attacks
- **Memory Tagging**: Hardware-assisted memory safety

## Virtual Memory:

**Virtual Memory Concepts:**
- **Logical Address**: Address generated by CPU
- **Physical Address**: Actual memory location
- **Address Translation**: Mapping logical to physical addresses
- **Memory Mapping Unit (MMU)**: Hardware for address translation

**Benefits:**
- **Process Isolation**: Each process has separate address space
- **Memory Expansion**: Use secondary storage as extended memory
- **Code Sharing**: Multiple processes share common code
- **Dynamic Loading**: Load program parts as needed

## Memory Management Algorithms:

**Allocation Algorithms:**
- **First Fit**: Allocate first available block
- **Best Fit**: Allocate smallest suitable block
- **Worst Fit**: Allocate largest available block
- **Next Fit**: Continue search from last allocation point

**Replacement Algorithms:**
- **FIFO**: Replace oldest page in memory
- **LRU**: Replace least recently used page
- **Optimal**: Replace page not used for longest time
- **Clock Algorithm**: Approximation of LRU using reference bits
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=qdkxXygc3rE',
        'https://www.youtube.com/watch?v=7J0JDovnxWA'
      ],
      externalLinks: [
        { title: 'Memory Management in Operating Systems', url: 'https://www.geeksforgeeks.org/memory-management-in-operating-system/' },
        { title: 'Virtual Memory Management', url: 'https://www.tutorialspoint.com/operating_system/os_memory_management.htm' }
      ]
    }
  },
  {
    id: 'storage-management',
    name: 'Storage Management',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit I',
    content: {
      introduction: 'Storage management handles the organization, allocation, and management of secondary storage devices like hard drives and SSDs.',
      definition: 'The systematic control of secondary storage resources, including file systems, disk scheduling, and storage allocation to provide efficient and reliable data storage.',
      realWorldExample: 'When you save a document, the OS determines where to store it on the hard drive, manages the file system structure, and ensures data integrity.',
      realWorldUse: 'Used in file systems, database management, backup systems, and any application requiring persistent data storage.',
      importance: 'Storage management is essential for data persistence, system performance, and reliable long-term data storage and retrieval.',
      detailedExplanation: `
## Storage Hierarchy:

**Primary Storage:**
- **Volatile Memory**: RAM, cache (loses data when power off)
- **Characteristics**: Fast access, limited capacity, expensive
- **Usage**: Active program execution, temporary data

**Secondary Storage:**
- **Non-volatile Storage**: Hard drives, SSDs, optical disks
- **Characteristics**: Slower access, large capacity, cheaper
- **Usage**: Permanent data storage, program files, user data

**Tertiary Storage:**
- **Archival Storage**: Tape drives, optical libraries
- **Characteristics**: Very slow access, massive capacity, very cheap
- **Usage**: Backup, archival, rarely accessed data

## File System Management:

**File System Functions:**
- **File Organization**: Structure data on storage devices
- **Directory Management**: Organize files in hierarchical structure
- **Space Allocation**: Manage free and allocated disk space
- **Access Control**: Implement file permissions and security
- **Metadata Management**: Store file attributes and properties

**File System Types:**
- **FAT32**: Simple, compatible, limited file size
- **NTFS**: Advanced features, security, large file support
- **ext4**: Linux file system with journaling
- **APFS**: Apple's modern file system with encryption
- **ZFS**: Advanced file system with data integrity features

## Disk Scheduling:

**Disk Structure:**
- **Tracks**: Concentric circles on disk surface
- **Sectors**: Smallest addressable units on tracks
- **Cylinders**: Same track number across all platters
- **Heads**: Read/write mechanisms for each surface

**Scheduling Algorithms:**
- **FCFS**: First Come First Served - simple but inefficient
- **SSTF**: Shortest Seek Time First - minimize head movement
- **SCAN**: Elevator algorithm - sweep across disk
- **C-SCAN**: Circular SCAN - unidirectional sweep
- **LOOK**: SCAN variant - only go to last request
- **C-LOOK**: Circular LOOK algorithm

## Storage Allocation:

**Allocation Methods:**
- **Contiguous Allocation**: Files stored in consecutive blocks
- **Linked Allocation**: Files stored in linked list of blocks
- **Indexed Allocation**: Index block contains pointers to data blocks
- **Combined Approach**: Mix of direct and indirect pointers

**Free Space Management:**
- **Bit Vector**: Bitmap indicating free/allocated blocks
- **Linked List**: Chain of free blocks
- **Grouping**: Store addresses of free blocks in first free block
- **Counting**: Store address and count of consecutive free blocks

## Storage Performance:

**Performance Factors:**
- **Seek Time**: Time to position read/write head
- **Rotational Latency**: Time for desired sector to rotate under head
- **Transfer Time**: Time to read/write data
- **Access Time**: Total time for disk operation

**Optimization Techniques:**
- **Disk Caching**: Keep frequently accessed data in memory
- **Read-ahead**: Anticipate future read requests
- **Write-behind**: Delay writes to optimize disk access
- **Defragmentation**: Reorganize files for contiguous storage

## Modern Storage Technologies:

**Solid State Drives (SSDs):**
- **Flash Memory**: No moving parts, faster access
- **Wear Leveling**: Distribute writes evenly across cells
- **TRIM Command**: Inform SSD about deleted data
- **Over-provisioning**: Reserve space for performance and longevity

**Storage Area Networks (SANs):**
- **Network-attached Storage**: Centralized storage over network
- **Redundancy**: RAID configurations for fault tolerance
- **Scalability**: Add storage capacity as needed
- **Performance**: High-speed network connections
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=KN8YgJnShPM',
        'https://www.youtube.com/watch?v=wteUW2sL7bc'
      ],
      externalLinks: [
        { title: 'Storage Management in OS', url: 'https://www.geeksforgeeks.org/file-systems-in-operating-system/' },
        { title: 'Disk Scheduling Algorithms', url: 'https://www.tutorialspoint.com/operating_system/os_disk_scheduling.htm' }
      ]
    }
  },
  {
    id: 'kernel-data-structures',
    name: 'Kernel Data Structures',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit I',
    content: {
      introduction: 'Kernel data structures are specialized data organizations used by the operating system kernel to manage system resources and maintain system state.',
      definition: 'Data structures used within the operating system kernel to efficiently organize and manage information about processes, memory, files, and other system resources.',
      realWorldExample: 'The process table that keeps track of all running processes, or the file descriptor table that manages open files for each process.',
      realWorldUse: 'Used internally by operating systems to manage processes, memory allocation, file systems, device drivers, and system calls.',
      importance: 'Kernel data structures are fundamental to OS performance, enabling efficient resource management, fast lookups, and maintaining system consistency.',
      detailedExplanation: `
## Common Kernel Data Structures:

**Lists:**
- **Linked Lists**: Dynamic size, efficient insertion/deletion
- **Doubly Linked Lists**: Bidirectional traversal
- **Circular Lists**: Last element points to first
- **Usage**: Process queues, free memory blocks, device lists

**Stacks:**
- **LIFO Structure**: Last In, First Out
- **Kernel Stack**: Per-process kernel execution stack
- **Interrupt Stack**: Handle interrupt service routines
- **Usage**: Function calls, interrupt handling, system calls

**Queues:**
- **FIFO Structure**: First In, First Out
- **Priority Queues**: Elements ordered by priority
- **Multi-level Queues**: Different priority levels
- **Usage**: Process scheduling, I/O request queues, message passing

**Trees:**
- **Binary Trees**: Hierarchical organization
- **B-trees**: Balanced trees for file systems
- **Red-Black Trees**: Self-balancing binary search trees
- **Usage**: File system directories, memory management, process trees

**Hash Tables:**
- **Fast Lookup**: O(1) average access time
- **Collision Handling**: Chaining or open addressing
- **Dynamic Resizing**: Maintain load factor
- **Usage**: Process ID lookup, file name resolution, page tables

## Process Management Structures:

**Process Control Block (PCB):**
\`\`\`c
struct task_struct {
    pid_t pid;                    // Process ID
    int state;                    // Process state
    struct mm_struct *mm;         // Memory management
    struct files_struct *files;   // Open files
    struct signal_struct *signal; // Signal handling
    struct task_struct *parent;   // Parent process
    struct list_head children;    // Child processes
    struct list_head sibling;     // Sibling processes
};
\`\`\`

**Process Queues:**
- **Ready Queue**: Processes ready for execution
- **Wait Queues**: Processes waiting for events
- **Run Queue**: Currently running processes
- **Zombie Queue**: Terminated processes awaiting cleanup

## Memory Management Structures:

**Page Tables:**
- **Multi-level Page Tables**: Hierarchical address translation
- **Page Table Entries**: Physical address, permissions, status bits
- **Translation Lookaside Buffer (TLB)**: Cache for page translations
- **Memory Descriptors**: Virtual memory area information

**Memory Allocation Structures:**
\`\`\`c
struct vm_area_struct {
    unsigned long vm_start;    // Start address
    unsigned long vm_end;      // End address
    struct file *vm_file;      // Associated file
    unsigned long vm_flags;    // Access permissions
    struct vm_area_struct *vm_next; // Next VMA
};
\`\`\`

## File System Structures:

**Inode Structure:**
\`\`\`c
struct inode {
    umode_t i_mode;           // File type and permissions
    uid_t i_uid;              // Owner user ID
    gid_t i_gid;              // Owner group ID
    loff_t i_size;            // File size
    struct timespec i_atime;  // Access time
    struct timespec i_mtime;  // Modification time
    struct timespec i_ctime;  // Change time
    unsigned long i_blocks;   // Number of blocks
};
\`\`\`

**Directory Entry (Dentry):**
- **Name Caching**: Cache directory lookups
- **Path Resolution**: Navigate file system hierarchy
- **Reference Counting**: Track usage
- **Hash Table**: Fast name lookup

## Synchronization Structures:

**Semaphores:**
\`\`\`c
struct semaphore {
    atomic_t count;           // Available resources
    wait_queue_head_t wait;   // Waiting processes
    spinlock_t lock;          // Protect semaphore
};
\`\`\`

**Mutexes:**
\`\`\`c
struct mutex {
    atomic_t count;           // Lock state
    spinlock_t wait_lock;     // Protect wait list
    struct list_head wait_list; // Waiting tasks
    struct task_struct *owner;  // Current owner
};
\`\`\`

## I/O and Device Structures:

**Device Drivers:**
\`\`\`c
struct device_driver {
    const char *name;         // Driver name
    struct bus_type *bus;     // Bus type
    struct module *owner;     // Module owner
    int (*probe)(struct device *dev);    // Device probe
    int (*remove)(struct device *dev);   // Device removal
};
\`\`\`

**Buffer Management:**
- **Buffer Cache**: Cache disk blocks in memory
- **Buffer Headers**: Metadata for cached blocks
- **Free Lists**: Available buffers
- **Hash Tables**: Fast buffer lookup

## Performance Considerations:

**Cache Efficiency:**
- **Locality of Reference**: Spatial and temporal locality
- **Cache Line Alignment**: Optimize memory access
- **False Sharing**: Avoid cache line conflicts
- **Prefetching**: Anticipate data access patterns

**Lock-Free Structures:**
- **Atomic Operations**: Hardware-supported atomic updates
- **Compare-and-Swap**: Lock-free synchronization
- **RCU (Read-Copy-Update)**: Scalable read-mostly data structures
- **Per-CPU Data**: Reduce contention on multiprocessor systems
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=vBZ36EAzNuI',
        'https://www.youtube.com/watch?v=GjNvXv4VnVE'
      ],
      externalLinks: [
        { title: 'Kernel Data Structures', url: 'https://www.geeksforgeeks.org/operating-system-kernel-data-structures/' },
        { title: 'Linux Kernel Data Structures', url: 'https://www.kernel.org/doc/html/latest/core-api/kernel-api.html' }
      ]
    }
  },
  {
    id: 'computing-environments',
    name: 'Computing Environments',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit I',
    content: {
      introduction: 'Computing environments refer to the various platforms and contexts in which operating systems operate, from traditional PCs to modern cloud and mobile systems.',
      definition: 'The hardware and software context in which an operating system runs, including the computational model, resource constraints, and usage patterns that influence OS design.',
      realWorldExample: 'A smartphone OS like Android is designed for mobile computing environments with touch interfaces and battery constraints, while server OS like Linux is optimized for high-performance computing environments.',
      realWorldUse: 'Used to design appropriate operating systems for different platforms like desktops, servers, mobile devices, embedded systems, and cloud computing.',
      importance: 'Understanding computing environments is crucial for selecting appropriate OS features, optimizing performance, and ensuring compatibility with target platforms.',
      detailedExplanation: `
## Traditional Computing Environments:

**Desktop Computing:**
- **Single User**: Personal computer for individual use
- **Interactive**: Direct user interaction with GUI
- **Resource Rich**: Abundant CPU, memory, storage
- **Examples**: Windows, macOS, Linux desktop distributions
- **Characteristics**: User-friendly interface, multimedia support, application diversity

**Server Computing:**
- **Multi-user**: Serve multiple clients simultaneously
- **High Performance**: Optimized for throughput and reliability
- **Resource Intensive**: Large memory, fast storage, multiple CPUs
- **Examples**: Windows Server, Linux server distributions, Unix
- **Characteristics**: Network services, database management, web hosting

## Modern Computing Environments:

**Mobile Computing:**
- **Portable Devices**: Smartphones, tablets, wearables
- **Touch Interface**: Gesture-based interaction
- **Power Constraints**: Battery life optimization
- **Examples**: Android, iOS, Windows Mobile
- **Characteristics**: App-centric, location services, connectivity

**Embedded Systems:**
- **Dedicated Function**: Single-purpose devices
- **Resource Constrained**: Limited CPU, memory, power
- **Real-time Requirements**: Deterministic response times
- **Examples**: IoT devices, automotive systems, medical devices
- **Characteristics**: Minimal OS footprint, real-time scheduling

**Cloud Computing:**
- **Virtualized Resources**: Abstract hardware through virtualization
- **Scalable**: Dynamic resource allocation
- **Distributed**: Services across multiple data centers
- **Examples**: AWS, Azure, Google Cloud Platform
- **Characteristics**: Multi-tenancy, elasticity, service-oriented

## Specialized Computing Environments:

**High-Performance Computing (HPC):**
- **Parallel Processing**: Massive parallel computation
- **Scientific Computing**: Complex mathematical simulations
- **Cluster Computing**: Multiple interconnected computers
- **Examples**: Supercomputers, research clusters
- **Characteristics**: Message passing, parallel file systems, job scheduling

**Real-Time Systems:**
- **Timing Constraints**: Strict deadline requirements
- **Deterministic**: Predictable response times
- **Safety Critical**: Failure can cause harm
- **Examples**: Aircraft control, medical devices, industrial automation
- **Characteristics**: Priority-based scheduling, minimal latency, fault tolerance

**Distributed Systems:**
- **Network-based**: Components connected via network
- **Fault Tolerance**: Continue operation despite failures
- **Scalability**: Handle increasing load
- **Examples**: Distributed databases, peer-to-peer networks
- **Characteristics**: Consistency models, replication, load balancing

## Virtualization Environments:

**Virtual Machines:**
- **Hardware Abstraction**: Multiple OS on single hardware
- **Isolation**: Separate execution environments
- **Resource Sharing**: Efficient hardware utilization
- **Examples**: VMware, VirtualBox, Hyper-V
- **Characteristics**: Hypervisor management, live migration, snapshots

**Containers:**
- **OS-level Virtualization**: Shared kernel, isolated processes
- **Lightweight**: Minimal overhead compared to VMs
- **Portable**: Consistent deployment across environments
- **Examples**: Docker, Kubernetes, LXC
- **Characteristics**: Image-based deployment, orchestration, microservices

## Edge Computing:

**Edge Devices:**
- **Local Processing**: Computation near data source
- **Low Latency**: Reduced network delays
- **Bandwidth Optimization**: Minimize data transmission
- **Examples**: IoT gateways, CDN edge servers
- **Characteristics**: Distributed intelligence, offline capability

## Operating System Adaptations:

**Environment-Specific Features:**
- **Power Management**: Battery optimization for mobile
- **Security Models**: Sandboxing for mobile apps
- **Resource Scheduling**: Real-time scheduling for embedded
- **Network Protocols**: Optimized for distributed systems
- **Virtualization Support**: Hardware-assisted virtualization

**Cross-Platform Considerations:**
- **Portability**: Code reuse across environments
- **Compatibility**: API consistency across platforms
- **Performance**: Environment-specific optimizations
- **User Experience**: Interface adaptation for different devices

## Future Computing Environments:

**Quantum Computing:**
- **Quantum Processors**: Quantum bit (qubit) based computation
- **Specialized Algorithms**: Quantum-specific programming models
- **Hybrid Systems**: Classical-quantum integration
- **Challenges**: Error correction, decoherence, programming complexity

**Neuromorphic Computing:**
- **Brain-inspired Architecture**: Mimic neural networks in hardware
- **Event-driven Processing**: Asynchronous, low-power computation
- **Learning Capabilities**: Adaptive behavior
- **Applications**: AI acceleration, sensory processing

**Autonomous Systems:**
- **Self-managing**: Minimal human intervention
- **Adaptive**: Learn and adjust to environment
- **Safety-critical**: Robust failure handling
- **Examples**: Autonomous vehicles, smart cities, robotic systems
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=9GDX-IyZ_C8',
        'https://www.youtube.com/watch?v=26QPDBe-NB8'
      ],
      externalLinks: [
        { title: 'Computing Environments Overview', url: 'https://www.geeksforgeeks.org/types-of-operating-systems/' },
        { title: 'Modern Computing Paradigms', url: 'https://www.tutorialspoint.com/operating_system/os_types.htm' }
      ]
    }
  },
  {
    id: 'os-structures-services',
    name: 'Operating System Structures: Services',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit I',
    content: {
      introduction: 'Operating system services are the fundamental functions provided by the OS to applications and users for system resource management and task execution.',
      definition: 'A set of functions and interfaces provided by the operating system to facilitate program execution, resource management, and user interaction.',
      realWorldExample: 'When you save a file, the OS provides file management services; when you run a program, it provides process management services; when you connect to the internet, it provides network services.',
      realWorldUse: 'Used by applications to access hardware resources, manage files, handle user input/output, and coordinate system operations.',
      importance: 'OS services form the foundation for all software applications, providing a standardized interface to system resources and ensuring secure, efficient system operation.',
      detailedExplanation: `
## Categories of OS Services:

**User-Oriented Services:**
Services that directly benefit users and applications

**System-Oriented Services:**
Services that ensure efficient system operation

## User-Oriented Services:

**Program Execution:**
- **Process Creation**: Load programs into memory
- **Process Management**: Schedule and control execution
- **Resource Allocation**: Assign CPU, memory, I/O devices
- **Error Handling**: Manage runtime errors and exceptions
- **Process Termination**: Clean up resources after completion

**I/O Operations:**
- **File I/O**: Read from and write to files
- **Device I/O**: Interact with hardware devices
- **Network I/O**: Communication over networks
- **Buffering**: Optimize I/O performance
- **Device Independence**: Abstract hardware differences

**File System Manipulation:**
- **File Operations**: Create, read, write, delete files
- **Directory Operations**: Navigate and manage directories
- **File Permissions**: Control access to files
- **File Attributes**: Manage metadata (size, date, permissions)
- **File System Mounting**: Access different storage devices

**Communications:**
- **Inter-Process Communication (IPC)**: Process coordination
- **Message Passing**: Exchange data between processes
- **Shared Memory**: Common memory areas for processes
- **Pipes**: Data flow between processes
- **Network Communication**: Remote process interaction

**Error Detection and Handling:**
- **Hardware Errors**: CPU, memory, I/O device failures
- **Software Errors**: Program bugs, invalid operations
- **System Errors**: Resource exhaustion, deadlocks
- **Error Reporting**: Inform users and applications
- **Error Recovery**: Attempt to continue operation

## System-Oriented Services:

**Resource Allocation:**
- **CPU Scheduling**: Allocate processor time
- **Memory Management**: Assign memory to processes
- **I/O Device Allocation**: Manage device access
- **File System Space**: Allocate storage space
- **Network Bandwidth**: Manage network resources

**Accounting and Monitoring:**
- **Resource Usage Tracking**: Monitor CPU, memory, I/O usage
- **Performance Metrics**: System throughput, response time
- **Billing Information**: Track resource consumption
- **System Statistics**: Collect operational data
- **Audit Trails**: Security and compliance logging

**Protection and Security:**
- **Access Control**: Authenticate users and authorize access
- **Memory Protection**: Prevent unauthorized memory access
- **File Protection**: Control file and directory access
- **Process Isolation**: Separate process address spaces
- **System Integrity**: Protect system files and data

## Service Implementation Models:

**System Calls:**
- **Interface**: Programming interface to OS services
- **Parameters**: Pass data to/from OS
- **Return Values**: Status and result information
- **Error Codes**: Indicate operation success/failure
- **Examples**: open(), read(), write(), fork(), exec()

**Library Functions:**
- **Standard Libraries**: C library, system libraries
- **Wrapper Functions**: Simplify system call usage
- **Portable Interface**: Abstract OS differences
- **Higher-level Operations**: Complex operations built on system calls
- **Examples**: printf(), malloc(), pthread_create()

**System Programs:**
- **Command Interpreters**: Shell programs
- **File Management**: File utilities (cp, mv, ls)
- **Status Information**: System monitoring tools
- **Programming Support**: Compilers, debuggers
- **Communications**: Network utilities

## Service Access Methods:

**Direct System Calls:**
\`\`\`c
// Example: File operations using system calls
int fd = open("file.txt", O_RDONLY);
if (fd == -1) {
    perror("open failed");
    return -1;
}
char buffer[1024];
ssize_t bytes_read = read(fd, buffer, sizeof(buffer));
close(fd);
\`\`\`

**Library Wrapper Functions:**
\`\`\`c
// Example: File operations using library functions
FILE *file = fopen("file.txt", "r");
if (file == NULL) {
    perror("fopen failed");
    return -1;
}
char buffer[1024];
fgets(buffer, sizeof(buffer), file);
fclose(file);
\`\`\`

## Service Quality Attributes:

**Performance:**
- **Response Time**: Time to complete service request
- **Throughput**: Number of requests handled per unit time
- **Scalability**: Performance under increasing load
- **Resource Efficiency**: Optimal resource utilization

**Reliability:**
- **Availability**: Service uptime percentage
- **Fault Tolerance**: Continue operation despite failures
- **Error Recovery**: Graceful handling of error conditions
- **Data Integrity**: Maintain data consistency

**Security:**
- **Authentication**: Verify user identity
- **Authorization**: Control access to resources
- **Confidentiality**: Protect sensitive information
- **Integrity**: Prevent unauthorized modifications
- **Non-repudiation**: Ensure accountability

**Usability:**
- **Ease of Use**: Simple, intuitive interfaces
- **Documentation**: Clear service descriptions
- **Error Messages**: Helpful error information
- **Consistency**: Uniform behavior across services

## Modern Service Trends:

**Microservices Architecture:**
- **Service Decomposition**: Break monolithic OS into services
- **Independent Deployment**: Update services separately
- **Scalability**: Scale individual services as needed
- **Fault Isolation**: Limit impact of service failures

**Container-based Services:**
- **Lightweight Virtualization**: OS-level virtualization
- **Service Packaging**: Bundle services with dependencies
- **Orchestration**: Manage service lifecycle
- **Portability**: Deploy services across environments
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=vBZ36EAzNuI',
        'https://www.youtube.com/watch?v=GjNvXv4VnVE'
      ],
      externalLinks: [
        { title: 'Operating System Services', url: 'https://www.geeksforgeeks.org/operating-system-services/' },
        { title: 'System Calls in Operating System', url: 'https://www.tutorialspoint.com/operating_system/os_system_calls.htm' }
      ]
    }
  },
  {
    id: 'system-calls',
    name: 'System Calls',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit I',
    content: {
      introduction: 'System calls provide the interface between user programs and the operating system kernel, allowing applications to request services from the OS.',
      definition: 'A system call is a programmatic way for a computer program to request a service from the kernel of the operating system.',
      realWorldExample: 'When you save a file in a text editor, the application makes system calls to create/write to the file on disk.',
      realWorldUse: 'Used by all applications to access hardware resources, manage files, create processes, and communicate with other programs.',
      importance: 'System calls are essential for program execution, providing controlled access to system resources while maintaining security and stability.',
      detailedExplanation: `
## Types of System Calls:

**Process Control:**
- fork() - Create new process
- exec() - Execute program
- wait() - Wait for process completion
- exit() - Terminate process

**File Management:**
- open() - Open file
- read() - Read from file
- write() - Write to file
- close() - Close file

**Device Management:**
- ioctl() - Device control
- read() - Read from device
- write() - Write to device

**Information Maintenance:**
- getpid() - Get process ID
- alarm() - Set alarm
- sleep() - Suspend execution

**Communication:**
- pipe() - Create pipe
- shmget() - Shared memory
- msgget() - Message queue

## System Call Mechanism:
1. User program invokes system call
2. Mode switch from user to kernel mode
3. Kernel validates parameters
4. Kernel executes requested service
5. Return results to user program
6. Mode switch back to user mode

## Implementation:
- **Trap Instruction**: Switch to kernel mode
- **System Call Table**: Maps call numbers to handlers
- **Parameter Passing**: Via registers, stack, or memory
- **Return Values**: Success/failure indication
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=lhToWeuWWfw',
        'https://www.youtube.com/watch?v=xHu7qI1gDPA'
      ],
      externalLinks: [
        { title: 'System Calls in Operating System', url: 'https://www.geeksforgeeks.org/system-call-in-operating-system/' },
        { title: 'System Calls Tutorial', url: 'https://www.tutorialspoint.com/operating_system/os_system_calls.htm' }
      ]
    }
  },
  {
    id: 'os-types',
    name: 'Types of Operating Systems',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit I',
    content: {
      introduction: 'Operating systems can be classified into different types based on their design, functionality, and intended use cases.',
      definition: 'Classification of operating systems based on characteristics like user support, processing method, and system architecture.',
      realWorldExample: 'Windows (multi-user), Android (mobile), Linux (server), and embedded OS in smart appliances.',
      realWorldUse: 'Different OS types are chosen based on requirements like real-time processing, multi-user support, or resource constraints.',
      importance: 'Understanding OS types helps in selecting appropriate systems for specific applications and understanding design trade-offs.',
      detailedExplanation: `
## Based on User Support:

**Single User OS:**
- Supports one user at a time
- Examples: MS-DOS, early Windows versions
- Simple design and resource management

**Multi-User OS:**
- Multiple users can access simultaneously
- Examples: Linux, Unix, Windows Server
- Complex security and resource sharing

## Based on Processing:

**Batch Processing:**
- Jobs processed in batches without user interaction
- High throughput for repetitive tasks
- Examples: Mainframe systems

**Time-Sharing:**
- CPU time divided among multiple users
- Interactive computing experience
- Examples: Unix, Linux

**Real-Time:**
- Guaranteed response within time constraints
- **Hard Real-Time**: Strict deadlines
- **Soft Real-Time**: Flexible deadlines
- Examples: Embedded systems, industrial control

## Based on Architecture:

**Monolithic:**
- All OS services in single kernel space
- Examples: Traditional Unix, Linux
- Fast but less modular

**Microkernel:**
- Minimal kernel with services in user space
- Examples: Minix, QNX
- Modular but slower communication

**Hybrid:**
- Combination of monolithic and microkernel
- Examples: Windows NT, macOS
- Balance of performance and modularity
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=6-mdtMKfEYM',
        'https://www.youtube.com/watch?v=RozoeWzT7IM'
      ],
      externalLinks: [
        { title: 'Types of Operating Systems', url: 'https://www.geeksforgeeks.org/types-of-operating-systems/' },
        { title: 'Operating System Types', url: 'https://www.tutorialspoint.com/operating_system/os_types.htm' }
      ]
    }
  },
  {
    id: 'system-boot',
    name: 'System Boot Process',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit I',
    content: {
      introduction: 'The system boot process is the sequence of operations that occurs when a computer starts up, loading the operating system into memory.',
      definition: 'The bootstrap process that initializes hardware, loads the operating system kernel, and prepares the system for user interaction.',
      realWorldExample: 'When you press the power button on your computer, it goes through POST, loads bootloader, then starts Windows or Linux.',
      realWorldUse: 'Essential for system startup, recovery procedures, and understanding system initialization in embedded systems.',
      importance: 'Understanding boot process is crucial for system administration, troubleshooting startup issues, and OS development.',
      detailedExplanation: `
## Boot Process Stages:

**1. Power-On Self Test (POST):**
- Hardware component verification
- Memory testing and initialization
- Basic hardware configuration
- Error detection and reporting

**2. BIOS/UEFI Initialization:**
- **BIOS**: Basic Input/Output System (legacy)
- **UEFI**: Unified Extensible Firmware Interface (modern)
- Hardware abstraction layer
- Boot device selection

**3. Bootloader Execution:**
- **Master Boot Record (MBR)**: Traditional partitioning
- **GUID Partition Table (GPT)**: Modern partitioning
- Load and execute bootloader program
- Examples: GRUB, Windows Boot Manager

**4. Kernel Loading:**
- Load OS kernel into memory
- Initialize kernel data structures
- Set up memory management
- Enable interrupts and system calls

**5. System Initialization:**
- Mount root file system
- Start system processes and services
- Initialize device drivers
- Launch user interface
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=KkenLT8S9Hs',
        'https://www.youtube.com/watch?v=XpFsMB6FoOs'
      ],
      externalLinks: [
        { title: 'System Boot Process', url: 'https://www.geeksforgeeks.org/booting-in-operating-system/' },
        { title: 'Boot Process Explained', url: 'https://www.tutorialspoint.com/operating_system/os_system_boot.htm' }
      ]
    }
  },
  {
    id: 'process-concept',
    name: 'Process Concept',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit I',
    content: {
      introduction: 'A process is a fundamental concept in operating systems representing a program in execution with its associated resources and state.',
      definition: 'A process is an instance of a program in execution, including the program code, current activity, and allocated system resources.',
      realWorldExample: 'When you double-click a music player application, the OS creates a process that includes the program code, memory for songs, and CPU time for playback.',
      realWorldUse: 'Used in multitasking systems, process scheduling, resource allocation, and system monitoring tools like Task Manager.',
      importance: 'Process concept is fundamental to understanding multitasking, resource management, and system performance in modern operating systems.',
      detailedExplanation: `
## Process Components:

**Program Code (Text Section):**
- Executable instructions
- Read-only segment
- Shared among multiple instances
- Machine language instructions

**Process Control Block (PCB):**
- Process ID (PID)
- Process state information
- CPU registers and program counter
- Memory management information
- I/O status information
- Accounting information

**Memory Sections:**
- **Stack**: Local variables, function calls
- **Heap**: Dynamically allocated memory
- **Data**: Global and static variables
- **Text**: Program instructions

## Process States:
**New**: Process being created
**Ready**: Waiting for CPU assignment
**Running**: Instructions being executed
**Waiting**: Waiting for I/O or event
**Terminated**: Process finished execution
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=4s5GyXGU_4c',
        'https://www.youtube.com/watch?v=OrM7nZcxXZU'
      ],
      externalLinks: [
        { title: 'Process in Operating System', url: 'https://www.geeksforgeeks.org/introduction-of-process-management/' },
        { title: 'Process Concept Tutorial', url: 'https://www.tutorialspoint.com/operating_system/os_processes.htm' }
      ]
    }
  },
  {
    id: 'process-scheduling',
    name: 'Process Scheduling',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit I',
    content: {
      introduction: 'Process scheduling determines which process runs on the CPU at any given time, managing the execution order of multiple processes.',
      definition: 'The activity of selecting processes from the ready queue and allocating CPU time to them based on scheduling algorithms.',
      realWorldExample: 'When multiple applications are running, the OS scheduler decides whether to give CPU time to your browser, music player, or text editor.',
      realWorldUse: 'Used in all multitasking systems to ensure fair CPU allocation, system responsiveness, and optimal resource utilization.',
      importance: 'Scheduling is crucial for system performance, user experience, and efficient utilization of CPU resources in multitasking environments.',
      detailedExplanation: `
## Scheduling Queues:

**Job Queue:** All processes in the system
**Ready Queue:** Processes ready for execution
**Device Queues:** Processes waiting for I/O devices

## Types of Schedulers:

**Long-term Scheduler:** Controls degree of multiprogramming
**Short-term Scheduler:** Selects process from ready queue
**Medium-term Scheduler:** Swapping processes in/out of memory

## Scheduling Criteria:
- **CPU Utilization**: Keep CPU busy
- **Throughput**: Processes completed per time unit
- **Turnaround Time**: Time from submission to completion
- **Waiting Time**: Time spent in ready queue
- **Response Time**: Time from request to first response
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2h3eWaPx8SA',
        'https://www.youtube.com/watch?v=VJhtyLLisNo'
      ],
      externalLinks: [
        { title: 'CPU Scheduling in Operating Systems', url: 'https://www.geeksforgeeks.org/cpu-scheduling-in-operating-systems/' },
        { title: 'Process Scheduling Tutorial', url: 'https://www.tutorialspoint.com/operating_system/os_process_scheduling.htm' }
      ]
    }
  },
  {
    id: 'process-operations',
    name: 'Process Operations',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit I',
    content: {
      introduction: 'Process operations include the fundamental activities of creating, executing, and terminating processes in an operating system.',
      definition: 'The set of operations that can be performed on processes, including creation, termination, suspension, resumption, and communication.',
      realWorldExample: 'Starting a new application creates a process, closing it terminates the process, and minimizing might suspend it temporarily.',
      realWorldUse: 'Used in process management, system monitoring, debugging tools, and application lifecycle management.',
      importance: 'Understanding process operations is essential for system programming, debugging, and efficient resource management.',
      detailedExplanation: `
## Process Creation:
- System initialization
- User request (double-click, command)
- System call by running process
- fork() system call in Unix/Linux
- CreateProcess() in Windows

## Process Termination:
- Normal completion (exit() system call)
- Fatal error (segmentation fault)
- Killed by another process
- System shutdown

## Process Communication:
- **Shared Memory**: Common memory region
- **Message Passing**: Send/receive messages
- **Signals**: Asynchronous notifications

## Process Monitoring:
- Process ID and parent ID
- CPU and memory usage
- Process state and priority
- System tools: ps, Task Manager, top
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=ss1-REMJ9GA',
        'https://www.youtube.com/watch?v=4s5GyXGU_4c'
      ],
      externalLinks: [
        { title: 'Process Operations in OS', url: 'https://www.geeksforgeeks.org/process-creation-termination-operating-system/' },
        { title: 'Process Management Operations', url: 'https://www.tutorialspoint.com/operating_system/os_process_management.htm' }
      ]
    }
  },
  {
    id: 'interprocess-communication',
    name: 'Interprocess Communication',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit I',
    content: {
      introduction: 'Interprocess Communication (IPC) enables processes to exchange data and synchronize their actions in a multitasking environment.',
      definition: 'Mechanisms that allow processes to communicate and synchronize their actions when sharing data or coordinating activities.',
      realWorldExample: 'A web browser process communicating with a download manager process to transfer file information.',
      realWorldUse: 'Used in client-server applications, distributed systems, parallel processing, and coordinating multiple application components.',
      importance: 'IPC is essential for building complex applications, enabling process cooperation, and implementing distributed systems.',
      detailedExplanation: `
## IPC Models:

**Shared Memory Model:**
- Processes share a common memory region
- Fast communication method
- Requires synchronization mechanisms

**Message Passing Model:**
- Processes communicate via message exchange
- No shared variables between processes
- Built-in synchronization

## IPC Mechanisms:

**Pipes:**
- Anonymous Pipes: Parent-child communication
- Named Pipes (FIFOs): Unrelated process communication

**Message Queues:**
- Structured message passing
- Priority-based message ordering

**Sockets:**
- Network and local communication
- Client-server architecture

**Signals:**
- Asynchronous event notification
- Process interruption mechanism

**Shared Memory:**
- Fast communication via shared memory segments
- Requires synchronization (semaphores, mutexes)
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=dJuYKfR8vec',
        'https://www.youtube.com/watch?v=ukM_zzrIeXs'
      ],
      externalLinks: [
        { title: 'Inter Process Communication', url: 'https://www.geeksforgeeks.org/inter-process-communication-ipc/' },
        { title: 'IPC in Operating Systems', url: 'https://www.tutorialspoint.com/operating_system/os_inter_process_communication.htm' }
      ]
    }
  },
  {
    id: 'multicore-programming',
    name: 'Multicore Programming',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit I',
    content: {
      introduction: 'Multicore programming involves designing applications to effectively utilize multiple CPU cores for improved performance and efficiency.',
      definition: 'Programming techniques and methodologies for developing applications that can execute concurrently on multiple processor cores.',
      realWorldExample: 'Video editing software using multiple cores - one core for video processing, another for audio, and a third for user interface.',
      realWorldUse: 'Used in high-performance computing, multimedia applications, scientific simulations, and modern software development.',
      importance: 'Essential for maximizing performance on modern multicore systems and developing scalable, efficient applications.',
      detailedExplanation: `
## Multicore System Architecture:

**Symmetric Multiprocessing (SMP):**
- Multiple identical processors
- Shared memory and I/O
- Single operating system instance

**Cache Coherency:**
- Maintain consistent cache data
- Hardware protocols (MESI, MOESI)
- Performance impact considerations

## Programming Challenges:
- **Concurrency Issues**: Race conditions, deadlocks
- **Load Balancing**: Distribute work evenly
- **Scalability**: Performance with increasing cores

## Parallel Programming Models:

**Shared Memory Model:**
- Threads share address space
- Examples: Pthreads, OpenMP

**Message Passing Model:**
- Processes communicate via messages
- Examples: MPI, Actor model

**Threading Concepts:**
- Thread creation and synchronization
- Thread pools for better resource utilization
- Mutexes, semaphores, condition variables
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=7ENFeb-J75k',
        'https://www.youtube.com/watch?v=olYdb0DdGtM'
      ],
      externalLinks: [
        { title: 'Multicore Programming Guide', url: 'https://www.geeksforgeeks.org/multicore-and-multiprocessor/' },
        { title: 'Parallel Programming Concepts', url: 'https://www.tutorialspoint.com/operating_system/os_multi_threading.htm' }
      ]
    }
  },
  {
    id: 'multithreading-models',
    name: 'Multithreading Models',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit I',
    content: {
      introduction: 'Multithreading models define the relationship between user-level threads and kernel-level threads in operating systems.',
      definition: 'Different approaches to implementing thread support, defining the mapping between user threads and kernel threads.',
      realWorldExample: 'Java applications use a many-to-many model where multiple Java threads can be mapped to fewer OS threads.',
      realWorldUse: 'Used in programming language runtime systems, application servers, and high-performance computing environments.',
      importance: 'Understanding threading models is crucial for performance optimization, scalability, and choosing appropriate threading strategies.',
      detailedExplanation: `
## Many-to-One Model:
- Multiple user threads mapped to single kernel thread
- Fast thread operations (no system calls)
- No true parallelism
- Examples: Green threads, early Java

## One-to-One Model:
- Each user thread mapped to kernel thread
- True parallelism on multiprocessor systems
- Higher overhead for thread operations
- Examples: Windows threads, Linux NPTL

## Many-to-Many Model:
- Multiple user threads mapped to multiple kernel threads
- Dynamic mapping based on system conditions
- True parallelism with efficiency
- Examples: Solaris threads, modern Go runtime

## Two-Level Model:
- Variation of many-to-many model
- Some user threads bound to kernel threads
- Others multiplexed on available kernel threads

## Thread Libraries:
- **POSIX Pthreads**: Standard threading API
- **Windows Threads**: Native Windows threading
- **Java Threading**: Platform-independent threading

## Performance Considerations:
- Context switching overhead
- Synchronization costs
- Scalability factors
- Memory usage per thread
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=7ENFeb-J75k',
        'https://www.youtube.com/watch?v=tc4ROCJYbm0'
      ],
      externalLinks: [
        { title: 'Multithreading Models', url: 'https://www.geeksforgeeks.org/multithreading-models/' },
        { title: 'Threading Models Explained', url: 'https://www.tutorialspoint.com/operating_system/os_multi_threading.htm' }
      ]
    }
  }
];