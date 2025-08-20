import { Topic } from '../syllabus';

export const operatingSystemsUnit2: Topic[] = [
  // Process Synchronization
  {
    id: 'critical-section-problem',
    name: 'The Critical-Section Problem',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit II',
    content: {
      introduction: 'The critical-section problem is a fundamental synchronization problem where multiple processes need to access shared resources safely.',
      definition: 'A segment of code in which a process accesses shared resources that must not be accessed by more than one process at a time.',
      realWorldExample: 'Multiple people trying to use the same ATM machine - only one person can use it at a time to avoid conflicts.',
      realWorldUse: 'Used in database systems, file systems, shared memory access, and any system where multiple processes access shared resources.',
      importance: 'Critical for preventing race conditions, ensuring data consistency, and maintaining system integrity in concurrent systems.',
      detailedExplanation: `
## Critical Section Components:

**Entry Section:**
- Code that requests permission to enter critical section
- Implements synchronization mechanism
- May involve waiting if another process is in critical section

**Critical Section:**
- Code segment accessing shared resources
- Only one process allowed at a time
- Contains operations on shared variables or resources

**Exit Section:**
- Code that signals completion of critical section
- Releases synchronization mechanism
- Allows other processes to enter critical section

**Remainder Section:**
- Rest of the process code
- Does not access shared resources
- Can execute concurrently with other processes

## Requirements for Solution:

**Mutual Exclusion:**
- Only one process in critical section at a time
- Fundamental requirement for correctness
- Prevents race conditions and data corruption

**Progress:**
- If no process is in critical section, selection cannot be postponed indefinitely
- Prevents deadlock situations
- Ensures system makes forward progress

**Bounded Waiting:**
- Limit on number of times other processes can enter critical section
- Prevents starvation of waiting processes
- Ensures fairness in resource access
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=BSX1YEoCVgA'
      ],
      externalLinks: [
        { title: 'Critical Section Problem', url: 'https://www.geeksforgeeks.org/critical-section-in-synchronization/' }
      ]
    }
  },
  {
    id: 'petersons-solution',
    name: 'Peterson\'s Solution',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit II',
    content: {
      introduction: 'Peterson\'s solution is a classic software-based solution to the critical-section problem for two processes.',
      definition: 'A software algorithm that ensures mutual exclusion between two processes using shared variables without requiring special hardware support.',
      realWorldExample: 'Two roommates sharing a bathroom using a system of notes and flags to ensure only one person uses it at a time.',
      realWorldUse: 'Used as a theoretical foundation for understanding synchronization, though modern systems use hardware-based solutions.',
      importance: 'Demonstrates how software-only solutions can achieve synchronization and provides insight into synchronization principles.',
      detailedExplanation: `
## Peterson's Algorithm:

**Shared Variables:**
\`\`\`c
boolean flag[2];  // Indicates if process wants to enter critical section
int turn;         // Indicates whose turn it is to enter
\`\`\`

**Process i Algorithm:**
\`\`\`c
do {
    flag[i] = true;        // I want to enter
    turn = j;              // Give turn to other process
    while (flag[j] && turn == j); // Wait if other wants to enter and it's their turn
    
    // Critical Section
    
    flag[i] = false;       // I'm done
    
    // Remainder Section
} while (true);
\`\`\`

## Algorithm Analysis:

**Mutual Exclusion:**
- Process enters critical section only if flag[j] is false OR turn != j
- If both processes try to enter, turn can only have one value
- Ensures only one process in critical section

**Progress:**
- If no process wants to enter (both flags false), any process can enter
- If one process wants to enter and other doesn't, it can proceed
- No deadlock situation possible

**Bounded Waiting:**
- After process j exits, it sets flag[j] = false
- Process i can then enter critical section
- Maximum wait is one turn of the other process
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=UtGiTH9bmCc'
      ],
      externalLinks: [
        { title: 'Peterson\'s Solution', url: 'https://www.geeksforgeeks.org/petersons-algorithm-in-process-synchronization/' }
      ]
    }
  },
  {
    id: 'synchronization-hardware',
    name: 'Synchronization Hardware',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit II',
    content: {
      introduction: 'Hardware-based synchronization provides atomic operations that enable efficient and reliable synchronization mechanisms.',
      definition: 'Special hardware instructions that perform multiple operations atomically, providing the foundation for implementing synchronization primitives.',
      realWorldExample: 'A hardware lock on a safe that can only be opened by one key at a time, preventing multiple people from accessing it simultaneously.',
      realWorldUse: 'Used in modern operating systems, database systems, and concurrent programming to implement locks, semaphores, and other synchronization primitives.',
      importance: 'Hardware support makes synchronization more efficient and reliable than software-only solutions, enabling better performance in multiprocessor systems.',
      detailedExplanation: `
## Atomic Hardware Instructions:

**Test-and-Set Instruction:**
\`\`\`c
boolean test_and_set(boolean *target) {
    boolean rv = *target;  // Read current value
    *target = true;        // Set to true
    return rv;             // Return original value
}
\`\`\`

**Using Test-and-Set for Mutual Exclusion:**
\`\`\`c
boolean lock = false;  // Shared variable

do {
    while (test_and_set(&lock)); // Wait until lock is available
    
    // Critical Section
    
    lock = false;  // Release lock
    
    // Remainder Section
} while (true);
\`\`\`

**Compare-and-Swap Instruction:**
\`\`\`c
int compare_and_swap(int *value, int expected, int new_value) {
    int temp = *value;
    if (*value == expected)
        *value = new_value;
    return temp;
}
\`\`\`

## Hardware Features:

**Atomicity:**
- Instructions execute as single, indivisible operations
- No interruption possible during execution
- Prevents race conditions at instruction level

**Memory Barriers:**
- Ensure memory operations complete in specified order
- Prevent compiler and processor optimizations that could break synchronization
- Maintain memory consistency in multiprocessor systems

**Cache Coherency:**
- Ensure all processors see consistent view of memory
- Invalidate cached copies when memory is modified
- Maintain data integrity across processor caches
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=ukM_zzrIeXs'
      ],
      externalLinks: [
        { title: 'Hardware Synchronization', url: 'https://www.geeksforgeeks.org/hardware-synchronization-algorithms/' }
      ]
    }
  },
  {
    id: 'mutex-locks',
    name: 'Mutex Locks',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit II',
    content: {
      introduction: 'Mutex (mutual exclusion) locks are synchronization primitives that provide exclusive access to shared resources.',
      definition: 'A locking mechanism that ensures only one thread can access a shared resource at a time by acquiring and releasing locks.',
      realWorldExample: 'A single key for a room - only the person with the key can enter, and they must return it before someone else can use it.',
      realWorldUse: 'Used in multithreaded applications, database systems, and operating systems to protect critical sections and shared data structures.',
      importance: 'Mutex locks provide a simple and efficient way to achieve mutual exclusion, preventing race conditions and ensuring data consistency.',
      detailedExplanation: `
## Mutex Lock Operations:

**acquire() Operation:**
\`\`\`c
void acquire(mutex_lock *lock) {
    while (!available) {
        ; // Busy wait (spinlock)
    }
    available = false;
}
\`\`\`

**release() Operation:**
\`\`\`c
void release(mutex_lock *lock) {
    available = true;
}
\`\`\`

**Using Mutex Locks:**
\`\`\`c
mutex_lock lock;

do {
    acquire(&lock);
    
    // Critical Section
    
    release(&lock);
    
    // Remainder Section
} while (true);
\`\`\`

## Types of Mutex Locks:

**Spinlock:**
- Busy waiting implementation
- Continuously checks lock availability
- Efficient for short critical sections
- Wastes CPU cycles while waiting

**Blocking Mutex:**
- Thread blocks when lock unavailable
- OS scheduler manages waiting threads
- Efficient for longer critical sections
- No CPU waste while waiting

**Recursive Mutex:**
- Same thread can acquire lock multiple times
- Must release same number of times
- Useful for recursive function calls
- Prevents self-deadlock

## Implementation Considerations:

**Fairness:**
- FIFO ordering of waiting threads
- Prevents thread starvation
- May require additional queue structure

**Priority Inheritance:**
- Temporary priority boost for lock holder
- Prevents priority inversion problem
- Important in real-time systems

**Deadlock Prevention:**
- Lock ordering protocols
- Timeout mechanisms
- Deadlock detection algorithms
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=oq29KUy29iQ'
      ],
      externalLinks: [
        { title: 'Mutex Locks in Operating Systems', url: 'https://www.geeksforgeeks.org/mutex-lock-for-linux-thread-synchronization/' }
      ]
    }
  },
  {
    id: 'semaphores',
    name: 'Semaphores',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit II',
    content: {
      introduction: 'Semaphores are synchronization primitives that control access to shared resources by maintaining a counter of available resources.',
      definition: 'An integer variable that is accessed through two atomic operations: wait (P) and signal (V), used to control access to a common resource.',
      realWorldExample: 'A parking lot with limited spaces - a counter shows available spots, decremented when cars enter and incremented when they leave.',
      realWorldUse: 'Used in operating systems for process synchronization, resource management, and implementing producer-consumer problems.',
      importance: 'Semaphores provide a flexible synchronization mechanism that can handle multiple resources and complex synchronization scenarios.',
      detailedExplanation: `
## Semaphore Operations:

**wait() Operation (P operation):**
\`\`\`c
void wait(semaphore *S) {
    while (S->value <= 0) {
        ; // Busy wait
    }
    S->value--;
}
\`\`\`

**signal() Operation (V operation):**
\`\`\`c
void signal(semaphore *S) {
    S->value++;
}
\`\`\`

**Blocking Implementation:**
\`\`\`c
typedef struct {
    int value;
    struct process *list; // Waiting processes
} semaphore;

void wait(semaphore *S) {
    S->value--;
    if (S->value < 0) {
        // Add this process to S->list
        block(); // Block the process
    }
}

void signal(semaphore *S) {
    S->value++;
    if (S->value <= 0) {
        // Remove a process P from S->list
        wakeup(P); // Wake up the process
    }
}
\`\`\`

## Types of Semaphores:

**Binary Semaphore (Mutex):**
- Value can be 0 or 1
- Similar to mutex lock
- Used for mutual exclusion
- Also called counting semaphore with max value 1

**Counting Semaphore:**
- Value can be any non-negative integer
- Represents number of available resources
- Used for resource allocation
- Can handle multiple instances of resources

## Classic Semaphore Problems:

**Producer-Consumer Problem:**
\`\`\`c
semaphore empty = n;    // Number of empty slots
semaphore full = 0;     // Number of full slots
semaphore mutex = 1;    // Mutual exclusion

// Producer
do {
    // Produce item
    wait(empty);
    wait(mutex);
    
    // Add item to buffer
    
    signal(mutex);
    signal(full);
} while (true);

// Consumer
do {
    wait(full);
    wait(mutex);
    
    // Remove item from buffer
    
    signal(mutex);
    signal(empty);
    // Consume item
} while (true);
\`\`\`

**Readers-Writers Problem:**
\`\`\`c
semaphore rw_mutex = 1;    // Mutual exclusion for writers
semaphore mutex = 1;       // Mutual exclusion for read_count
int read_count = 0;        // Number of readers

// Reader
do {
    wait(mutex);
    read_count++;
    if (read_count == 1)
        wait(rw_mutex);    // First reader locks writers
    signal(mutex);
    
    // Reading
    
    wait(mutex);
    read_count--;
    if (read_count == 0)
        signal(rw_mutex);  // Last reader unlocks writers
    signal(mutex);
} while (true);

// Writer
do {
    wait(rw_mutex);
    
    // Writing
    
    signal(rw_mutex);
} while (true);
\`\`\`

## Advantages and Disadvantages:

**Advantages:**
- Flexible resource management
- Can handle multiple resources
- Supports both mutual exclusion and synchronization
- Well-established and widely understood

**Disadvantages:**
- Can lead to deadlocks if not used carefully
- Priority inversion problems
- Difficult to debug
- Potential for programming errors
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=ukM_zzrIeXs',
        'https://www.youtube.com/watch?v=XDIOC2EY5JE'
      ],
      externalLinks: [
        { title: 'Semaphores in Operating Systems', url: 'https://www.geeksforgeeks.org/semaphores-in-process-synchronization/' },
        { title: 'Producer Consumer Problem', url: 'https://www.tutorialspoint.com/operating_system/os_process_synchronization.htm' }
      ]
    }
  },
  {
    id: 'process-scheduling-algorithms',
    name: 'Process Scheduling: Criteria and Algorithms',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit II',
    content: {
      introduction: 'Process scheduling determines which process runs on the CPU at any given time, optimizing system performance and resource utilization.',
      definition: 'The method by which the operating system decides which process in the ready queue should be allocated the CPU for execution.',
      realWorldExample: 'A hospital emergency room where patients are treated based on different criteria - severity (priority), arrival time (FCFS), or estimated treatment time (SJF).',
      realWorldUse: 'Used in all operating systems to manage CPU allocation, ensure fairness, optimize response time, and maximize system throughput.',
      importance: 'Effective scheduling is crucial for system responsiveness, fairness, and overall performance in multitasking environments.',
      detailedExplanation: `
## Scheduling Criteria:

**CPU Utilization:**
- Percentage of time CPU is busy
- Goal: Keep CPU as busy as possible
- Typical range: 40% (lightly loaded) to 90% (heavily loaded)

**Throughput:**
- Number of processes completed per unit time
- Higher throughput indicates better performance
- Measured in processes per second or minute

**Turnaround Time:**
- Time from process submission to completion
- Includes waiting time, execution time, and I/O time
- Lower turnaround time is better

**Waiting Time:**
- Time spent waiting in ready queue
- Does not include execution or I/O time
- Should be minimized for better user experience

**Response Time:**
- Time from request submission to first response
- Important for interactive systems
- Different from turnaround time

## Scheduling Algorithms:

**First-Come, First-Served (FCFS):**
\`\`\`
Process | Burst Time | Arrival Time
P1      | 24         | 0
P2      | 3          | 0  
P3      | 3          | 0

Gantt Chart: |P1(24)|P2(3)|P3(3)|
Waiting Time: P1=0, P2=24, P3=27
Average Waiting Time = (0+24+27)/3 = 17
\`\`\`

**Shortest-Job-First (SJF):**
- **Non-preemptive**: Once started, process runs to completion
- **Preemptive (SRTF)**: Can interrupt running process for shorter job

\`\`\`
Process | Burst Time
P1      | 6
P2      | 8
P3      | 7
P4      | 3

SJF Order: P4(3) -> P1(6) -> P3(7) -> P2(8)
Gantt Chart: |P4(3)|P1(6)|P3(7)|P2(8)|
Average Waiting Time = (0+3+9+16)/4 = 7
\`\`\`

**Round Robin (RR):**
\`\`\`
Process | Burst Time | Time Quantum = 4
P1      | 20
P2      | 3
P3      | 3

Gantt Chart: |P1(4)|P2(3)|P3(3)|P1(4)|P1(4)|P1(4)|P1(4)|
\`\`\`

**Priority Scheduling:**
- Each process assigned priority number
- CPU allocated to highest priority process
- Can be preemptive or non-preemptive
- Problem: Starvation of low-priority processes
- Solution: Aging (gradually increase priority)

**Multilevel Queue:**
- Ready queue partitioned into separate queues
- Each queue has its own scheduling algorithm
- Fixed priority between queues
- Example: System processes > Interactive processes > Batch processes

**Multilevel Feedback Queue:**
- Processes can move between queues
- Aging prevents starvation
- Most general and flexible
- Parameters: Number of queues, scheduling algorithm for each queue, method to determine when to upgrade/demote

## Algorithm Comparison:

| Algorithm | Advantages | Disadvantages |
|-----------|------------|---------------|
| FCFS | Simple, fair | Poor average waiting time |
| SJF | Optimal average waiting time | Requires future knowledge |
| RR | Good response time | Higher context switch overhead |
| Priority | Important processes first | Starvation possible |
| MLQ | Flexible, good for different process types | Complex, potential starvation |
| MLFQ | Adaptive, prevents starvation | Most complex |

## Real-Time Scheduling:

**Hard Real-Time:**
- Must meet deadlines
- System failure if deadline missed
- Used in safety-critical systems

**Soft Real-Time:**
- Prefer to meet deadlines
- Performance degrades if deadline missed
- Used in multimedia applications

**Rate Monotonic Scheduling:**
- Static priority assignment
- Shorter period = higher priority
- Optimal for fixed-priority scheduling

**Earliest Deadline First (EDF):**
- Dynamic priority assignment
- Earlier deadline = higher priority
- Optimal for dynamic priority scheduling
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2h3eWaPx8SA',
        'https://www.youtube.com/watch?v=7FRW4iGjLrc'
      ],
      externalLinks: [
        { title: 'CPU Scheduling Algorithms', url: 'https://www.geeksforgeeks.org/cpu-scheduling-in-operating-systems/' },
        { title: 'Process Scheduling', url: 'https://www.tutorialspoint.com/operating_system/os_process_scheduling.htm' }
      ]
    }
  },
  {
    id: 'deadlocks',
    name: 'Deadlocks: System Model, Characterization, and Handling Methods',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit II',
    content: {
      introduction: 'Deadlock is a situation where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by some other process.',
      definition: 'A state in which each member of a group of processes is waiting for some other member to release a resource, resulting in all processes being blocked indefinitely.',
      realWorldExample: 'Four cars arriving at a four-way intersection at the same time, each waiting for the others to move first, creating a traffic deadlock.',
      realWorldUse: 'Understanding deadlocks is crucial for designing database systems, operating systems, and any concurrent system with shared resources.',
      importance: 'Deadlock handling is essential for system reliability and preventing system freezes in multitasking environments.',
      detailedExplanation: `
## Deadlock Characterization:

**Necessary Conditions (Coffman Conditions):**
All four conditions must hold simultaneously for deadlock to occur:

**1. Mutual Exclusion:**
- At least one resource must be held in non-shareable mode
- Only one process can use the resource at a time
- If another process requests the resource, it must wait

**2. Hold and Wait:**
- A process must be holding at least one resource
- The same process must be waiting to acquire additional resources
- Resources are held while waiting for others

**3. No Preemption:**
- Resources cannot be forcibly removed from processes
- Resources are released only voluntarily by the holding process
- Typically after the process has completed its task

**4. Circular Wait:**
- A set of waiting processes {P0, P1, ..., Pn} exists such that:
- P0 waits for resource held by P1
- P1 waits for resource held by P2
- ...
- Pn waits for resource held by P0

## System Model:

**Resource Types:**
- **R1, R2, ..., Rm**: Different resource types
- **Wi**: Number of instances of resource type Ri
- **Examples**: CPU cycles, memory space, I/O devices, files

**Process Resource Usage:**
1. **Request**: Process requests resource instances
2. **Use**: Process uses the allocated resources
3. **Release**: Process releases resources when done

**Resource Allocation Graph:**
- **Vertices**: Processes (circles) and Resources (rectangles)
- **Edges**: 
  - Request edge: Process → Resource (dashed arrow)
  - Assignment edge: Resource → Process (solid arrow)
- **Deadlock Detection**: Cycle in graph indicates potential deadlock

## Deadlock Handling Methods:

**1. Deadlock Prevention:**
Ensure at least one necessary condition cannot hold

**Prevent Mutual Exclusion:**
- Make resources shareable when possible
- Not always feasible (e.g., printers, write access to files)

**Prevent Hold and Wait:**
- Require processes to request all resources at once
- Release all resources before requesting new ones
- **Disadvantages**: Low resource utilization, starvation possible

**Prevent No Preemption:**
- If process holding resources requests unavailable resource, release all held resources
- Restart process only when all resources available
- **Disadvantages**: Applicable only to resources whose state can be saved/restored

**Prevent Circular Wait:**
- Impose total ordering on resource types
- Require processes to request resources in increasing order
- **Implementation**: Assign unique numbers to resources, request in numerical order

**2. Deadlock Avoidance:**
Use additional information about resource requests

**Safe State:**
- System can allocate resources to each process in some order
- Avoid allocation that leads to unsafe state
- **Safe Sequence**: Order in which processes can complete

**Banker's Algorithm:**
\`\`\`
Data Structures:
- Available[m]: Available instances of each resource
- Max[n][m]: Maximum demand of each process
- Allocation[n][m]: Currently allocated resources
- Need[n][m]: Remaining resource need (Max - Allocation)

Safety Algorithm:
1. Work = Available, Finish[i] = false for all i
2. Find i such that Finish[i] = false and Need[i] ≤ Work
3. Work = Work + Allocation[i], Finish[i] = true
4. If Finish[i] = true for all i, system is safe
\`\`\`

**3. Deadlock Detection and Recovery:**

**Detection Algorithm:**
- Maintain resource allocation graph
- Periodically check for cycles
- For single instance: DFS cycle detection
- For multiple instances: Modified banker's algorithm

**Recovery Methods:**
- **Process Termination**:
  - Abort all deadlocked processes
  - Abort one process at a time until deadlock is eliminated
- **Resource Preemption**:
  - Select victim process
  - Rollback to safe state
  - Prevent starvation through aging

**4. Deadlock Ignorance:**
- Assume deadlocks never occur
- Used by most operating systems (Windows, Linux)
- Restart system if deadlock occurs
- **Ostrich Algorithm**: Ignore the problem

## Practical Considerations:

**Performance Impact:**
- Prevention: May reduce system performance
- Avoidance: Runtime overhead for safety checking
- Detection: Periodic overhead for cycle detection
- Ignorance: No overhead until deadlock occurs

**Implementation Complexity:**
- Prevention: Moderate complexity
- Avoidance: High complexity (Banker's algorithm)
- Detection: Moderate complexity
- Ignorance: No complexity

**Real-World Usage:**
- Most systems use combination of approaches
- Critical systems use prevention/avoidance
- General-purpose systems often use ignorance with recovery
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=UVo9mGARkhQ',
        'https://www.youtube.com/watch?v=onkWXaXAgbY'
      ],
      externalLinks: [
        { title: 'Deadlocks in Operating Systems', url: 'https://www.geeksforgeeks.org/deadlock-in-operating-system/' },
        { title: 'Banker\'s Algorithm', url: 'https://www.tutorialspoint.com/operating_system/os_deadlocks.htm' }
      ]
    }
  },
  {
    id: 'classic-synchronization-problems',
    name: 'Classic Problems of Synchronization',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit II',
    content: {
      introduction: 'Classic synchronization problems are well-known scenarios that demonstrate fundamental synchronization challenges and their solutions in concurrent programming.',
      definition: 'Standard problems used to illustrate synchronization concepts including Producer-Consumer, Readers-Writers, Dining Philosophers, and Sleeping Barber problems.',
      realWorldExample: 'A restaurant kitchen where multiple chefs (producers) prepare dishes and waiters (consumers) serve them, requiring coordination to avoid conflicts.',
      realWorldUse: 'Used as design patterns for solving real-world synchronization problems in operating systems, databases, and concurrent applications.',
      importance: 'These problems provide fundamental understanding of synchronization mechanisms and serve as building blocks for complex concurrent systems.',
      detailedExplanation: `
Producer-Consumer Problem involves producers generating data and consumers processing it with a shared buffer. The challenge is coordinating access to prevent buffer overflow or underflow. Solutions use semaphores or monitors to synchronize producer and consumer activities.

Readers-Writers Problem deals with multiple processes accessing shared data where readers can access simultaneously but writers need exclusive access. Priority can be given to readers or writers, affecting system performance and fairness.

Dining Philosophers Problem illustrates deadlock and resource allocation issues where five philosophers alternate between thinking and eating, requiring two chopsticks. Solutions prevent deadlock through careful resource ordering or limiting concurrent diners.

Sleeping Barber Problem demonstrates customer service scenarios where a barber sleeps when no customers are present and customers wait in chairs. Synchronization ensures proper customer-barber interaction without race conditions.

Cigarette Smokers Problem involves three smokers with different ingredients and an agent providing random pairs. Synchronization ensures only the smoker with the missing ingredient can proceed, demonstrating complex dependency relationships.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=eKKc0d7kzww',
        'https://www.youtube.com/watch?v=XDIOC2EY5JE'
      ],
      externalLinks: [
        { title: 'Classic Synchronization Problems', url: 'https://www.geeksforgeeks.org/classical-problems-of-synchronization/' },
        { title: 'Producer Consumer Problem', url: 'https://www.tutorialspoint.com/operating_system/os_process_synchronization.htm' }
      ]
    }
  },
  {
    id: 'monitors',
    name: 'Monitors',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit II',
    content: {
      introduction: 'Monitors are high-level synchronization constructs that provide a structured approach to process synchronization by encapsulating shared data and operations.',
      definition: 'A monitor is a synchronization construct that allows threads to have mutual exclusion and wait for certain conditions to become true before proceeding.',
      realWorldExample: 'A bank account system where all account operations (deposit, withdraw, check balance) are protected by a monitor ensuring only one operation occurs at a time.',
      realWorldUse: 'Used in programming languages like Java (synchronized methods), C# (lock statements), and concurrent programming frameworks for thread-safe operations.',
      importance: 'Monitors provide a cleaner, more structured approach to synchronization compared to semaphores, reducing programming errors and improving code maintainability.',
      detailedExplanation: `
Monitor Structure consists of shared variables, procedures that operate on these variables, and synchronization mechanisms. Only one process can be active inside a monitor at any time, ensuring mutual exclusion automatically.

Condition Variables allow processes to wait for specific conditions and signal when conditions become true. Wait operation suspends the calling process, while signal operation wakes up a waiting process.

Monitor Implementation typically uses mutex locks for mutual exclusion and condition variables for coordination. The programming language or runtime system handles the synchronization details transparently.

Advantages over Semaphores include automatic mutual exclusion, structured programming approach, reduced chance of programming errors, and cleaner code organization. Monitors encapsulate synchronization logic with data.

Monitor Types include Hoare monitors where signaling process immediately transfers control, and Mesa monitors where signaled process eventually gets control. Different semantics affect program behavior and performance.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=9axu8CUvOKY',
        'https://www.youtube.com/watch?v=8wcuLCvMmF8'
      ],
      externalLinks: [
        { title: 'Monitors in Operating System', url: 'https://www.geeksforgeeks.org/monitors-in-process-synchronization/' },
        { title: 'Monitor Synchronization', url: 'https://www.tutorialspoint.com/operating_system/os_monitors.htm' }
      ]
    }
  },
  {
    id: 'synchronization-examples',
    name: 'Synchronization Examples',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit II',
    content: {
      introduction: 'Synchronization examples demonstrate practical implementations of synchronization mechanisms in real operating systems and applications.',
      definition: 'Concrete implementations and case studies showing how synchronization primitives are used in actual systems to solve coordination problems.',
      realWorldExample: 'Linux kernel spinlocks for short critical sections, Windows critical sections for thread synchronization, and database transaction locks for data consistency.',
      realWorldUse: 'Applied in operating system kernels, database management systems, web servers, and any multi-threaded application requiring coordination.',
      importance: 'Examples bridge the gap between theoretical concepts and practical implementation, showing how synchronization works in real-world systems.',
      detailedExplanation: `
Linux Synchronization uses various mechanisms including spinlocks for short critical sections in kernel space, mutexes for longer critical sections, and read-write locks for reader-writer scenarios. The kernel provides atomic operations and memory barriers for low-level synchronization.

Windows Synchronization implements critical sections for fast user-mode synchronization, mutexes for inter-process synchronization, and events for signaling between threads. The system provides both kernel-mode and user-mode synchronization objects.

Database Synchronization employs locking protocols like two-phase locking, timestamp ordering, and optimistic concurrency control. Transaction isolation levels determine the degree of synchronization required for data consistency.

Web Server Synchronization handles concurrent client requests using thread pools, connection queues, and resource locking. Load balancing and session management require careful synchronization to maintain consistency.

Java Synchronization provides synchronized methods and blocks, wait-notify mechanisms, and concurrent collections. The Java Memory Model defines visibility and ordering guarantees for synchronized operations.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=ukM_zzrIeXs',
        'https://www.youtube.com/watch?v=9axu8CUvOKY'
      ],
      externalLinks: [
        { title: 'Linux Kernel Synchronization', url: 'https://www.geeksforgeeks.org/linux-kernel-synchronization/' },
        { title: 'Synchronization Examples', url: 'https://www.tutorialspoint.com/operating_system/os_process_synchronization.htm' }
      ]
    }
  },
  {
    id: 'multiprocessor-scheduling',
    name: 'Multi-Processor Scheduling',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit II',
    content: {
      introduction: 'Multi-processor scheduling involves distributing processes across multiple CPUs to maximize system performance and resource utilization.',
      definition: 'The process of assigning processes or threads to multiple processors in a multiprocessor system to achieve optimal performance and load distribution.',
      realWorldExample: 'A modern smartphone with multiple CPU cores where the operating system distributes app processes across cores for better performance and battery efficiency.',
      realWorldUse: 'Used in multi-core processors, server systems, supercomputers, and any system with multiple processing units requiring workload distribution.',
      importance: 'Essential for maximizing performance in modern multi-core systems and ensuring efficient utilization of available processing resources.',
      detailedExplanation: `
Symmetric Multiprocessing (SMP) treats all processors equally where any processor can run any process. The operating system maintains a single ready queue and processors compete for processes, requiring careful synchronization to avoid conflicts.

Asymmetric Multiprocessing assigns specific roles to processors where one master processor handles system tasks and scheduling while slave processors execute user processes. This approach simplifies synchronization but may create bottlenecks.

Processor Affinity refers to the tendency of keeping a process on the same processor to maintain cache locality. Soft affinity allows migration when necessary while hard affinity prevents process migration between processors.

Load Balancing ensures even distribution of work across processors through push migration (idle processors pull work) and pull migration (busy processors push work). The system monitors processor utilization and redistributes processes accordingly.

Scheduling Algorithms for multiprocessors include per-processor queues, global queues with locking, and work-stealing where idle processors steal work from busy ones. Each approach has different performance characteristics and complexity trade-offs.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=7ENFeb-J75k',
        'https://www.youtube.com/watch?v=olYdb0DdGtM'
      ],
      externalLinks: [
        { title: 'Multiprocessor Scheduling', url: 'https://www.geeksforgeeks.org/multiprocessor-scheduling-in-operating-system/' },
        { title: 'SMP Scheduling', url: 'https://www.tutorialspoint.com/operating_system/os_multiprocessor.htm' }
      ]
    }
  },
  {
    id: 'realtime-scheduling',
    name: 'Real-time CPU Scheduling',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit II',
    content: {
      introduction: 'Real-time CPU scheduling ensures that time-critical tasks meet their deadlines in systems where timing constraints are crucial for correct operation.',
      definition: 'Scheduling algorithms designed for real-time systems where tasks must complete within specified time constraints to maintain system correctness.',
      realWorldExample: 'An automotive engine control system where fuel injection timing must occur within microseconds, or a medical device monitoring patient vital signs with strict response requirements.',
      realWorldUse: 'Used in embedded systems, industrial control systems, medical devices, automotive systems, and any application with strict timing requirements.',
      importance: 'Critical for systems where missing deadlines can result in system failure, safety hazards, or significant performance degradation.',
      detailedExplanation: `
Hard Real-time Systems require tasks to complete before their deadlines without exception. Missing a deadline results in system failure. These systems use deterministic scheduling algorithms and often sacrifice average performance for predictability.

Soft Real-time Systems allow occasional deadline misses with degraded performance but no system failure. These systems balance real-time requirements with overall system performance and are more flexible than hard real-time systems.

Rate Monotonic Scheduling assigns higher priorities to tasks with shorter periods. This static priority algorithm is optimal for periodic tasks and provides theoretical guarantees about schedulability in hard real-time systems.

Earliest Deadline First (EDF) scheduling assigns highest priority to the task with the earliest deadline. This dynamic priority algorithm can achieve higher processor utilization than rate monotonic scheduling but requires more runtime overhead.

Priority Inversion occurs when a high-priority task waits for a low-priority task holding a required resource while medium-priority tasks execute. Solutions include priority inheritance and priority ceiling protocols to prevent unbounded blocking.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8X_KUbqzuS0',
        'https://www.youtube.com/watch?v=s4VmI-yYTnA'
      ],
      externalLinks: [
        { title: 'Real-time Scheduling', url: 'https://www.geeksforgeeks.org/real-time-systems/' },
        { title: 'EDF and Rate Monotonic', url: 'https://www.tutorialspoint.com/operating_system/os_real_time.htm' }
      ]
    }
  },
  {
    id: 'deadlock-prevention',
    name: 'Deadlock Prevention',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit II',
    content: {
      introduction: 'Deadlock prevention involves designing systems to eliminate the possibility of deadlock by ensuring that at least one of the necessary conditions for deadlock cannot occur.',
      definition: 'A proactive approach to deadlock handling that prevents deadlock by denying at least one of the four necessary conditions: mutual exclusion, hold and wait, no preemption, or circular wait.',
      realWorldExample: 'A traffic system with one-way streets and traffic lights designed to prevent circular waiting, ensuring vehicles cannot form a circular dependency that blocks all movement.',
      realWorldUse: 'Used in database systems, operating system design, network protocols, and any system where deadlock prevention is preferred over detection and recovery.',
      importance: 'Prevention eliminates deadlock possibility entirely, providing system reliability and predictable behavior, though potentially at the cost of resource utilization efficiency.',
      detailedExplanation: `
Mutual Exclusion Prevention attempts to eliminate the need for exclusive resource access by making resources shareable. However, many resources like printers and write access to files inherently require exclusive access, making this approach limited in practice.

Hold and Wait Prevention requires processes to request all needed resources simultaneously before execution begins. This approach reduces resource utilization efficiency as processes may hold resources longer than necessary and may not know all required resources in advance.

No Preemption Prevention allows the system to forcibly remove resources from processes. When a process requests an unavailable resource, it must release all currently held resources. This works well for resources whose state can be saved and restored like CPU and memory.

Circular Wait Prevention imposes a total ordering on resource types and requires processes to request resources in increasing order. This breaks the circular dependency chain but may force processes to request resources earlier than needed, reducing efficiency.

Resource Allocation Graph algorithms can prevent deadlock by ensuring the resource allocation graph remains acyclic. Before granting a resource request, the system checks if the allocation would create a cycle in the graph.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=UVo9mGARkhQ',
        'https://www.youtube.com/watch?v=onkWXaXAgbY'
      ],
      externalLinks: [
        { title: 'Deadlock Prevention', url: 'https://www.geeksforgeeks.org/deadlock-prevention/' },
        { title: 'Deadlock Handling Methods', url: 'https://www.tutorialspoint.com/operating_system/os_deadlocks.htm' }
      ]
    }
  },
  {
    id: 'deadlock-avoidance',
    name: 'Deadlock Avoidance',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit II',
    content: {
      introduction: 'Deadlock avoidance uses additional information about resource requirements to make dynamic decisions that prevent the system from entering an unsafe state that could lead to deadlock.',
      definition: 'A dynamic approach to deadlock handling that uses information about future resource requests to ensure the system never enters a state from which deadlock is possible.',
      realWorldExample: 'A bank loan system that checks if approving a loan request would leave insufficient funds for existing commitments, avoiding a situation where the bank cannot meet its obligations.',
      realWorldUse: 'Used in systems where resource requirements can be predicted, such as batch processing systems, database transaction management, and resource allocation in distributed systems.',
      importance: 'Avoidance provides a balance between prevention and detection by allowing more flexible resource allocation while still guaranteeing deadlock-free operation.',
      detailedExplanation: `
Safe State Definition describes a system state where there exists a sequence of process executions that allows all processes to complete without deadlock. The system maintains safety by only granting resource requests that keep the system in a safe state.

Unsafe State indicates that no sequence of process executions can guarantee all processes will complete. An unsafe state does not necessarily mean deadlock will occur, but deadlock becomes possible from unsafe states.

Bankers Algorithm is the most well-known deadlock avoidance algorithm that simulates resource allocation to determine if granting a request would leave the system in a safe state. It requires advance knowledge of maximum resource requirements for each process.

Resource Allocation Graph Algorithm works for systems with single instances of each resource type. It uses claim edges to represent future resource requests and converts them to request edges when resources are actually needed.

Avoidance Limitations include the requirement for advance knowledge of maximum resource needs, conservative resource allocation that may reduce system throughput, and computational overhead for safety checking on each resource request.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=bVKjvtQsKLw',
        'https://www.youtube.com/watch?v=7VqhHGGwNjE'
      ],
      externalLinks: [
        { title: 'Bankers Algorithm', url: 'https://www.geeksforgeeks.org/bankers-algorithm-in-operating-system-2/' },
        { title: 'Deadlock Avoidance', url: 'https://www.tutorialspoint.com/operating_system/os_deadlock_avoidance.htm' }
      ]
    }
  },
  {
    id: 'deadlock-detection-recovery',
    name: 'Detection and Recovery from Deadlock',
    semester: 2,
    subject: 'Operating Systems',
    unit: 'Unit II',
    content: {
      introduction: 'Deadlock detection and recovery allows deadlocks to occur but provides mechanisms to detect when they happen and recover the system to a working state.',
      definition: 'A reactive approach to deadlock handling that periodically checks for deadlock occurrence and takes corrective action to break existing deadlocks.',
      realWorldExample: 'A traffic control system that detects traffic jams at intersections and resolves them by temporarily changing traffic light patterns or routing vehicles through alternate paths.',
      realWorldUse: 'Used in database systems with deadlock detection, operating systems that allow deadlocks but recover from them, and distributed systems with timeout-based recovery.',
      importance: 'Detection and recovery provides flexibility in resource allocation while handling deadlocks when they occur, suitable for systems where deadlocks are infrequent.',
      detailedExplanation: `
Detection Algorithms periodically examine the system state to identify deadlock occurrence. For single-instance resources, cycle detection in the resource allocation graph suffices. For multiple-instance resources, algorithms similar to the bankers algorithm determine if the system can satisfy all outstanding requests.

Wait-for Graph represents the waiting relationships between processes where an edge from process A to process B indicates A is waiting for a resource held by B. Deadlock exists if and only if the wait-for graph contains a cycle.

Detection Frequency affects system performance and deadlock resolution time. Frequent detection provides quick deadlock resolution but increases system overhead. Infrequent detection reduces overhead but allows deadlocks to persist longer.

Recovery by Process Termination involves aborting one or more deadlocked processes to break the deadlock. The system can abort all deadlocked processes simultaneously or terminate processes one by one until the deadlock is resolved.

Recovery by Resource Preemption forcibly removes resources from processes and allocates them to others. This approach requires careful selection of victim processes and may necessitate rolling back process execution to a previous safe state.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=onkWXaXAgbY',
        'https://www.youtube.com/watch?v=UVo9mGARkhQ'
      ],
      externalLinks: [
        { title: 'Deadlock Detection', url: 'https://www.geeksforgeeks.org/deadlock-detection-algorithm/' },
        { title: 'Deadlock Recovery', url: 'https://www.tutorialspoint.com/operating_system/os_deadlock_detection.htm' }
      ]
    }
  }
];