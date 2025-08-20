import { Topic } from '../syllabus';

export const computerOrgUnit3: Topic[] = [
  {
    id: 'register-transfer-language',
    name: 'Register Transfer Language',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit III',
    content: {
      introduction: 'Register Transfer Language (RTL) is a symbolic notation used to describe the micro-operations and data flow between registers in a digital system.',
      definition: 'RTL is a set of symbols and rules for specifying operations on data stored in registers and the transfer of data between registers.',
      realWorldExample: 'RTL is used in the design of CPUs and digital circuits to specify how data moves and is manipulated at the hardware level.',
      realWorldUse: 'Used by computer architects and hardware designers to describe and implement the internal operations of processors.',
      importance: 'Understanding RTL is essential for designing efficient and correct digital systems and for learning how CPUs execute instructions at the hardware level.',
      detailedExplanation: 'RTL provides a concise way to represent the actions performed by the control unit of a CPU. For example, the operation R1 ← R2 + R3 means the contents of registers R2 and R3 are added and the result is stored in R1. RTL is used to describe arithmetic, logic, and data transfer operations, and forms the basis for microprogramming and hardware description languages.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Register Transfer Language (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/register-transfer-language-in-computer-organization/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing data transfer between registers using RTL notation.'
    }
  },
  {
    id: 'register-transfer',
    name: 'Register Transfer',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit III',
    content: {
      introduction: 'Register Transfer is the process of moving data from one register to another in a digital system.',
      definition: 'Register Transfer is the operation of copying the contents of one register to another register.',
      realWorldExample: 'When a CPU executes an instruction like MOV R1, R2, the data from register R2 is transferred to register R1.',
      realWorldUse: 'Used in the execution of arithmetic, logic, and data transfer instructions.',
      importance: 'Register Transfer is fundamental to the operation of a CPU and forms the basis for many other operations.',
      detailedExplanation: 'Register Transfer involves selecting the source register (R1) and the destination register (R2) and then copying the data from the source to the destination. This operation is typically controlled by the control unit and involves multiple steps, including address decoding, data bus selection, and clock synchronization.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Register Transfer (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Register_transfer' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the process of register transfer.'
    }
  },
  {
    id: 'bus-and-memory-transfers',
    name: 'Bus and Memory Transfers',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit III',
    content: {
      introduction: 'Bus and Memory Transfers are mechanisms for moving data between different components of a digital system, including registers, memory, and I/O devices.',
      definition: 'Bus and Memory Transfers involve the movement of data along a data bus and the management of memory addresses.',
      realWorldExample: 'When a CPU needs to read data from memory, it sends an address on the address bus, and the data is transferred from memory to the CPU on the data bus.',
      realWorldUse: 'Used in the execution of load, store, and I/O instructions.',
      importance: 'Bus and Memory Transfers are critical for data movement and memory access in a digital system.',
      detailedExplanation: 'A data bus carries data from the source to the destination, while an address bus carries the memory address. Memory is organized into a grid of addressable locations, and data can be read from or written to any location based on the address. The control unit manages the address bus and data bus, coordinating memory access and data transfer.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Bus and Memory Transfers (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Bus_(computing)' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the data bus and address bus.'
    }
  },
  {
    id: 'arithmetic-micro-operations',
    name: 'Arithmetic Micro-Operations',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit III',
    content: {
      introduction: 'Arithmetic Micro-Operations are the basic operations performed on data in a digital system, such as addition, subtraction, multiplication, and division.',
      definition: 'Arithmetic Micro-Operations are the individual steps involved in performing arithmetic operations.',
      realWorldExample: 'When a CPU executes the instruction ADD R1, R2, R3, the micro-operations for addition are performed: R1 ← R2 + R3.',
      realWorldUse: 'Used in the execution of arithmetic instructions.',
      importance: 'Arithmetic Micro-Operations are essential for performing calculations and data processing in a digital system.',
      detailedExplanation: 'Arithmetic Micro-Operations include addition, subtraction, multiplication, division, increment, decrement, and comparison. Each operation involves multiple steps, such as operand selection, ALU (Arithmetic Logic Unit) operation, and result storage. The control unit orchestrates these micro-operations to execute complex arithmetic instructions.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Arithmetic Micro-Operations (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Arithmetic_logic_unit' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the ALU and its components.'
    }
  },
  {
    id: 'logic-micro-operations',
    name: 'Logic Micro-Operations',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit III',
    content: {
      introduction: 'Logic Micro-Operations are the basic operations performed on data in a digital system, such as AND, OR, NOT, and XOR.',
      definition: 'Logic Micro-Operations are the individual steps involved in performing logic operations.',
      realWorldExample: 'When a CPU executes the instruction AND R1, R2, R3, the micro-operations for AND are performed: R1 ← R2 AND R3.',
      realWorldUse: 'Used in the execution of logic instructions.',
      importance: 'Logic Micro-Operations are essential for performing conditional branching and data manipulation in a digital system.',
      detailedExplanation: 'Logic Micro-Operations include AND, OR, NOT, XOR, and other logic operations. These operations are typically performed by a dedicated logic unit (ALU) and involve multiple steps, such as operand selection, logic operation, and result storage. The control unit orchestrates these micro-operations to execute complex logic instructions.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Logic Micro-Operations (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Logic_microoperation' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the logic unit and its components.'
    }
  },
  {
    id: 'shift-micro-operations',
    name: 'Shift Micro-Operations',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit III',
    content: {
      introduction: 'Shift Micro-Operations are the basic operations performed on data in a digital system, such as left shift, right shift, and arithmetic shift.',
      definition: 'Shift Micro-Operations are the individual steps involved in performing shift operations.',
      realWorldExample: 'When a CPU executes the instruction SHL R1, R2, the micro-operations for left shift are performed: R1 ← R2 << 1.',
      realWorldUse: 'Used in the execution of shift instructions.',
      importance: 'Shift Micro-Operations are essential for data manipulation and bit manipulation in a digital system.',
      detailedExplanation: 'Shift Micro-Operations include left shift (<<), right shift (>>), arithmetic shift (>>), and logical shift (<<). These operations involve multiple steps, such as operand selection, shift operation, and result storage. The control unit orchestrates these micro-operations to execute complex shift instructions.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Shift Micro-Operations (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Shift_operation' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the shift unit and its components.'
    }
  },
  {
    id: 'arithmetic-logic-shift-unit',
    name: 'Arithmetic Logic Shift Unit',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit III',
    content: {
      introduction: 'Arithmetic Logic Shift Unit (ALSU) is a component that performs arithmetic, logic, and shift operations.',
      definition: 'ALSU is a dedicated unit within the CPU that handles arithmetic, logic, and shift operations.',
      realWorldExample: 'The ALSU in a CPU is responsible for executing instructions like ADD, AND, SHL, etc.',
      realWorldUse: 'Used in the execution of arithmetic, logic, and shift instructions.',
      importance: 'The ALSU is essential for performing complex calculations and data manipulation in a digital system.',
      detailedExplanation: 'The ALSU contains multiple functional units: an arithmetic unit for addition, subtraction, multiplication, and division; a logic unit for AND, OR, NOT, XOR, etc.; and a shift unit for left shift, right shift, and arithmetic shift. These units are interconnected and controlled by the control unit to execute complex instructions.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Arithmetic Logic Shift Unit (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Arithmetic_logic_unit' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the ALSU and its components.'
    }
  },
  {
    id: 'control-memory',
    name: 'Control Memory',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit III',
    content: {
      introduction: 'Control Memory is a type of memory that stores the micro-program instructions for the control unit.',
      definition: 'Control Memory is a read-only memory (ROM) that contains the sequence of micro-operations to be executed for each instruction.',
      realWorldExample: 'The control memory in a CPU stores the micro-program for the ADD instruction, which includes the micro-operations for addition.',
      realWorldUse: 'Used to store the micro-program for the control unit.',
      importance: 'Control Memory is essential for the control unit to execute instructions correctly and efficiently.',
      detailedExplanation: 'Control Memory is typically implemented as a ROM (Read-Only Memory) and contains the sequence of micro-operations for each instruction. The control unit uses the address from the instruction to fetch the corresponding micro-program. The micro-program specifies the order of micro-operations and the control signals needed for each step.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Control Memory (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Control_memory' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the control memory and its role in the control unit.'
    }
  },
  {
    id: 'address-sequencing',
    name: 'Address Sequencing',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit III',
    content: {
      introduction: 'Address Sequencing is the process of generating and managing memory addresses in a digital system.',
      definition: 'Address Sequencing involves selecting the correct memory address for data transfer or memory access.',
      realWorldExample: 'When a CPU needs to read data from memory, it generates an address on the address bus, and the data is transferred from memory to the CPU on the data bus.',
      realWorldUse: 'Used in the execution of load, store, and I/O instructions.',
      importance: 'Address Sequencing is essential for correct memory access and data transfer in a digital system.',
      detailedExplanation: 'Address Sequencing involves selecting the correct memory address based on the instruction and the current program counter. The control unit manages the address bus and ensures that the correct memory location is accessed. This is crucial for both data and instruction fetching.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Address Sequencing (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Address_sequencing' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the address sequencer and its role in memory access.'
    }
  },
  {
    id: 'micro-program-example',
    name: 'Micro-Program Example',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit III',
    content: {
      introduction: 'A Micro-Program Example is a concrete representation of how a CPU executes a specific instruction.',
      definition: 'A Micro-Program Example is a sequence of micro-operations and control signals that define the execution of a single instruction.',
      realWorldExample: 'The micro-program for the ADD instruction might include micro-operations like R1 ← R2 + R3, R3 ← 0, and R4 ← R1.',
      realWorldUse: 'Used to illustrate how a CPU executes a specific instruction.',
      importance: 'Micro-Program Examples are essential for understanding how a CPU executes instructions at the hardware level.',
      detailedExplanation: 'A Micro-Program Example is a concrete representation of how a CPU executes a specific instruction. It includes the sequence of micro-operations and the control signals needed for each step. For example, the micro-program for the ADD instruction might include micro-operations like R1 ← R2 + R3, R3 ← 0, and R4 ← R1. This example helps illustrate the control logic and data flow for a specific instruction.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Micro-Program Example (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Microprogrammed_control' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the micro-program for a specific instruction.'
    }
  },
  {
    id: 'design-of-control-unit',
    name: 'Design of Control Unit',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit III',
    content: {
      introduction: 'The Design of Control Unit is the process of designing the control unit to execute instructions.',
      definition: 'The Design of Control Unit involves selecting the micro-operations, control signals, and the overall architecture of the control unit.',
      realWorldExample: 'A simple control unit might have a few registers and a few micro-operations. A more complex control unit might have multiple functional units and a large control memory.',
      realWorldUse: 'Used in the design of CPUs and digital circuits.',
      importance: 'The Design of Control Unit is essential for creating efficient and correct digital systems.',
      detailedExplanation: 'The Design of Control Unit involves selecting the micro-operations, control signals, and the overall architecture of the control unit. A simple control unit might have a few registers and a few micro-operations. A more complex control unit might have multiple functional units and a large control memory. The control unit must be able to decode instructions, generate control signals, and manage the micro-program flow.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Design of Control Unit (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Control_unit' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the architecture of a control unit.'
    }
  },
  {
    id: 'i-o-interface',
    name: 'I/O Interface',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit III',
    content: {
      introduction: 'An I/O Interface is a mechanism for communicating between the CPU and external devices.',
      definition: 'An I/O Interface is a set of hardware and software components that enable data transfer between the CPU and I/O devices.',
      realWorldExample: 'When a CPU needs to read data from a keyboard, it sends an address on the address bus, and the data is transferred from the keyboard to the CPU on the data bus.',
      realWorldUse: 'Used in the execution of I/O instructions.',
      importance: 'An I/O Interface is essential for interacting with external devices in a digital system.',
      detailedExplanation: 'An I/O Interface is a set of hardware and software components that enable data transfer between the CPU and I/O devices. It includes components like data registers, status registers, control registers, and communication channels. The control unit manages the I/O operations, including address decoding, data transfer, and status checking.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'I/O Interface (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Input/output' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the I/O interface and its components.'
    }
  },
  {
    id: 'programmed-io',
    name: 'Programmed IO',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit III',
    content: {
      introduction: 'Programmed IO is a method of controlling I/O devices using instructions.',
      definition: 'Programmed IO involves writing software that explicitly tells the CPU how to communicate with I/O devices.',
      realWorldExample: 'When a CPU needs to read data from a keyboard, it sends an address on the address bus, and the data is transferred from the keyboard to the CPU on the data bus.',
      realWorldUse: 'Used in the execution of I/O instructions.',
      importance: 'Programmed IO is essential for interacting with external devices in a digital system.',
      detailedExplanation: 'Programmed IO involves writing software that explicitly tells the CPU how to communicate with I/O devices. It includes instructions like IN, OUT, and the corresponding status registers. The control unit manages the I/O operations, including address decoding, data transfer, and status checking.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Programmed IO (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Programmed_I/O' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the programmed I/O method.'
    }
  },
  {
    id: 'memory-mapped-io',
    name: 'Memory Mapped IO',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit III',
    content: {
      introduction: 'Memory Mapped IO is a method of controlling I/O devices by mapping their addresses to memory addresses.',
      definition: 'Memory Mapped IO involves assigning specific memory addresses to I/O devices, and the CPU treats these addresses as memory.',
      realWorldExample: 'When a CPU needs to read data from a keyboard, it sends an address on the address bus, and the data is transferred from the keyboard to the CPU on the data bus.',
      realWorldUse: 'Used in the execution of I/O instructions.',
      importance: 'Memory Mapped IO is essential for interacting with external devices in a digital system.',
      detailedExplanation: 'Memory Mapped IO involves assigning specific memory addresses to I/O devices, and the CPU treats these addresses as memory. This allows the CPU to use the same memory addressing mechanism for both memory and I/O devices. The control unit manages the I/O operations, including address decoding, data transfer, and status checking.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Memory Mapped IO (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Memory-mapped_I/O' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the memory mapped I/O method.'
    }
  },
  {
    id: 'interrupt-driven-io',
    name: 'Interrupt Driven IO',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit III',
    content: {
      introduction: 'Interrupt Driven IO is a method of controlling I/O devices using interrupts.',
      definition: 'Interrupt Driven IO involves using interrupts to signal the CPU when an I/O device needs attention.',
      realWorldExample: 'When a CPU needs to read data from a keyboard, it sends an address on the address bus, and the data is transferred from the keyboard to the CPU on the data bus.',
      realWorldUse: 'Used in the execution of I/O instructions.',
      importance: 'Interrupt Driven IO is essential for interacting with external devices in a digital system.',
      detailedExplanation: 'Interrupt Driven IO involves using interrupts to signal the CPU when an I/O device needs attention. When an I/O device is ready to send or receive data, it generates an interrupt. The CPU then saves its current state, fetches the micro-program for the I/O operation, and resumes execution. This allows the CPU to be interruptible and handle multiple devices efficiently.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Interrupt Driven IO (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Interrupt-driven_I/O' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the interrupt driven I/O method.'
    }
  },
  {
    id: 'dma',
    name: 'DMA',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit III',
    content: {
      introduction: 'DMA (Direct Memory Access) is a method of transferring data between memory and I/O devices without CPU intervention.',
      definition: 'DMA is a hardware feature that allows data to be transferred directly from an I/O device to memory or from memory to an I/O device, bypassing the CPU.',
      realWorldExample: 'When a CPU needs to read data from a keyboard, it sends an address on the address bus, and the data is transferred from the keyboard to the CPU on the data bus.',
      realWorldUse: 'Used in the execution of I/O instructions.',
      importance: 'DMA is essential for efficient data transfer in a digital system.',
      detailedExplanation: 'DMA is a hardware feature that allows data to be transferred directly from an I/O device to memory or from memory to an I/O device, bypassing the CPU. This is particularly useful for large data transfers or when the CPU is busy with other tasks. The control unit manages the DMA operations, including address generation, data transfer, and status checking.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'DMA (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Direct_memory_access' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the DMA method.'
    }
  },
  {
    id: 'instruction-level-parallelism',
    name: 'Instruction Level Parallelism (ILP)',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit III',
    content: {
      introduction: 'Instruction Level Parallelism (ILP) is the ability of a CPU to execute multiple instructions simultaneously.',
      definition: 'ILP is the ability of a CPU to execute multiple instructions in parallel, often across different instruction types.',
      realWorldExample: 'When a CPU executes instructions like ADD R1, R2 and ADD R3, R4, it can perform both additions in parallel.',
      realWorldUse: 'Used to improve CPU performance and throughput.',
      importance: 'ILP is essential for achieving high performance in a digital system.',
      detailedExplanation: 'ILP is the ability of a CPU to execute multiple instructions in parallel, often across different instruction types. This can be achieved through techniques like instruction pipelining, instruction scheduling, and loop unrolling. The control unit manages the instruction flow and ensures that instructions can be executed in parallel, while the ALU and other functional units handle the actual operations.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Instruction Level Parallelism (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Instruction_level_parallelism' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the concept of instruction level parallelism.'
    }
  },
  {
    id: 'overcoming-data-hazards',
    name: 'Overcoming Data Hazards',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit III',
    content: {
      introduction: 'Data Hazards are situations where instructions depend on the results of previous instructions, causing pipeline stalls or incorrect results.',
      definition: 'Data Hazards are dependencies between instructions that prevent or delay the execution of subsequent instructions.',
      realWorldExample: 'When a CPU executes instructions like ADD R1, R2 and ADD R1, R3, the second ADD instruction cannot start until the first ADD instruction finishes and the result is in R1.',
      realWorldUse: 'Used to prevent or resolve data hazards in a digital system.',
      importance: 'Overcoming Data Hazards is essential for achieving high performance and correct results in a digital system.',
      detailedExplanation: 'Data Hazards are dependencies between instructions that prevent or delay the execution of subsequent instructions. This can occur due to RAW (Read After Write), WAR (Write After Read), and WAW (Write After Write) hazards. The control unit must manage the instruction flow and ensure that instructions can be executed in parallel, while also preventing these hazards. Techniques like instruction reordering, forwarding, and bypassing are used to overcome data hazards.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Data Hazards (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Hazard_(computer_architecture)' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the concept of data hazards.'
    }
  },
  {
    id: 'limitations-of-ilp',
    name: 'Limitations of ILP',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit III',
    content: {
      introduction: 'There are several limitations to achieving high levels of Instruction Level Parallelism (ILP).',
      definition: 'Limitations of ILP are factors that prevent or reduce the degree of parallelism in a CPU.',
      realWorldExample: 'The maximum ILP is limited by the number of functional units, instruction dependencies, and pipeline stages.',
      realWorldUse: 'Used to understand the practical limitations of ILP.',
      importance: 'Understanding these limitations is essential for designing efficient and correct digital systems.',
      detailedExplanation: 'Limitations of ILP are factors that prevent or reduce the degree of parallelism in a CPU. These include: 1) Instruction Dependencies: Instructions that depend on the results of previous instructions (RAW, WAR, WAW hazards) limit the degree of parallelism. 2) Functional Unit Limitations: The number of functional units (ALU, Logic, Shift) is limited. 3) Pipeline Stages: The number of stages in the pipeline (IF, ID, EX, MEM, WB) also limits ILP. 4) Instruction Scheduling: Complex instruction scheduling can introduce dependencies. 5) Branch Prediction: Mispredictions can stall the pipeline. 6) Cache Misses: Memory access can be a bottleneck. 7) Instruction Decoding: Complex instructions require more time to decode. 8) Instruction Fetch: The instruction cache size limits the number of instructions that can be fetched in parallel.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Limitations of ILP (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Instruction_level_parallelism#Limitations' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the limitations of instruction level parallelism.'
    }
  }
]; 