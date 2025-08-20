import { Topic } from '../syllabus';

export const computerOrgUnit2: Topic[] = [
  {
    id: 'instruction-codes',
    name: 'Instruction Codes',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit II',
    content: {
      introduction: 'Instruction codes are binary codes that represent the operations a computer can perform.',
      definition: 'An instruction code is a group of bits that instructs the computer to perform a specific operation.',
      realWorldExample: 'In assembly language, MOV, ADD, and SUB are examples of instructions with unique codes.',
      realWorldUse: 'Used in CPUs to decode and execute program instructions.',
      importance: 'Instruction codes form the basis of machine language and are essential for program execution.',
      detailedExplanation: 'Each instruction in a computer has a unique binary code, called the operation code (opcode). The instruction code may also include bits for addressing modes and operands. The CPU decodes the instruction code to determine the operation to perform. Understanding instruction codes is fundamental for assembly programming and computer architecture.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Instruction Codes (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/instruction-codes-in-computer-organization/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the structure of an instruction code.'
    }
  },
  {
    id: 'computer-registers',
    name: 'Computer Registers',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit II',
    content: {
      introduction: 'Computer registers are small, fast storage locations within the CPU used to hold data and instructions temporarily.',
      definition: 'A register is a high-speed storage area in the CPU used for temporary data storage and manipulation.',
      realWorldExample: 'The accumulator, program counter, and instruction register are examples of CPU registers.',
      realWorldUse: 'Used in all CPUs to speed up data access and processing.',
      importance: 'Registers enable fast data access and efficient CPU operation.',
      detailedExplanation: 'Registers are classified as general-purpose or special-purpose. General-purpose registers store data and intermediate results, while special-purpose registers control CPU operations (e.g., program counter, stack pointer). Registers are faster than main memory and are essential for instruction execution.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Registers in Computer Organization (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/registers-in-computer-organization/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing different types of CPU registers.'
    }
  },
  {
    id: 'instruction-cycle',
    name: 'Computer Instructions and Instruction Cycle',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit II',
    content: {
      introduction: 'The instruction cycle is the process by which a computer fetches, decodes, and executes instructions.',
      definition: 'The instruction cycle consists of fetch, decode, execute, and store phases.',
      realWorldExample: 'When you run a program, the CPU repeatedly performs the instruction cycle for each instruction.',
      realWorldUse: 'Used in all CPUs to execute programs.',
      importance: 'Understanding the instruction cycle is fundamental for programming and computer architecture.',
      detailedExplanation: 'The instruction cycle begins with fetching the instruction from memory, decoding it to determine the operation, executing the operation, and storing the result. This cycle repeats for each instruction in a program. The instruction cycle is managed by the control unit of the CPU.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Instruction Cycle (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/instruction-cycle-in-computer-organization/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the fetch-decode-execute cycle.'
    }
  },
  {
    id: 'timing-control',
    name: 'Timing and Control',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit II',
    content: {
      introduction: 'Timing and control circuits coordinate the operations of the CPU and other components in a computer system.',
      definition: 'Timing refers to the synchronization of operations, while control refers to the management of signals that direct operations.',
      realWorldExample: 'Clock signals synchronize CPU operations in all modern computers.',
      realWorldUse: 'Used in all digital systems to ensure correct sequencing of operations.',
      importance: 'Proper timing and control are essential for reliable and efficient computer operation.',
      detailedExplanation: 'The control unit generates timing signals to synchronize the execution of instructions. Control signals manage data flow, memory access, and I/O operations. Timing diagrams are used to represent the sequence of operations. Understanding timing and control is crucial for hardware design and troubleshooting.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Timing and Control (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/control-unit-in-computer-organization/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Timing diagram showing control signals in a CPU.'
    }
  },
  {
    id: 'memory-reference-instructions',
    name: 'Memory-Reference Instructions',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit II',
    content: {
      introduction: 'Memory-reference instructions are instructions that access memory locations to read or write data.',
      definition: 'A memory-reference instruction is a machine instruction that involves accessing a memory address.',
      realWorldExample: 'LOAD and STORE instructions in assembly language are memory-reference instructions.',
      realWorldUse: 'Used in all CPUs to move data between memory and registers.',
      importance: 'Memory-reference instructions are essential for data processing and program execution.',
      detailedExplanation: 'Memory-reference instructions include operations like LOAD, STORE, ADD, and SUB. These instructions specify a memory address as an operand. The CPU fetches the instruction, decodes it, accesses the specified memory location, and performs the operation. Understanding these instructions is crucial for assembly programming and computer architecture.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Memory Reference Instructions (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/memory-reference-instructions-in-computer-organization/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing memory-reference instruction format.'
    }
  },
  {
    id: 'input-output-interrupt',
    name: 'Input-Output and Interrupt',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit II',
    content: {
      introduction: 'Input-output (I/O) operations allow computers to communicate with external devices, while interrupts enable the CPU to respond to urgent events.',
      definition: 'I/O refers to data transfer between the CPU and peripherals. An interrupt is a signal that temporarily halts the CPU to handle an event.',
      realWorldExample: 'Pressing a key on the keyboard generates an interrupt for the CPU to read the input.',
      realWorldUse: 'Used in all computer systems for device communication and event handling.',
      importance: 'I/O and interrupts enable efficient and responsive computer operation.',
      detailedExplanation: 'I/O operations involve data transfer between the CPU and devices like keyboards, displays, and storage. Interrupts allow the CPU to pause its current task and execute an interrupt service routine. This mechanism improves system responsiveness and multitasking.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Input Output and Interrupt (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/input-output-and-interrupt-in-computer-organization/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing I/O operation and interrupt handling.'
    }
  },
  {
    id: 'stack-organization',
    name: 'Stack Organization',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit II',
    content: {
      introduction: 'Stack organization is a method of organizing memory in which data is stored and accessed in a last-in, first-out (LIFO) manner.',
      definition: 'A stack is a linear data structure that allows insertion and deletion of elements only at one end, called the top.',
      realWorldExample: 'Function calls in programming use a stack to store return addresses and local variables.',
      realWorldUse: 'Used in CPUs for subroutine calls, expression evaluation, and memory management.',
      importance: 'Stack organization simplifies program execution and memory management.',
      detailedExplanation: 'The stack is managed using push (insert) and pop (remove) operations. The stack pointer register keeps track of the top of the stack. Stacks are used for function calls, parameter passing, and interrupt handling in CPUs.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Stack Organization (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/stack-organization-in-computer-organization/' }
      ],
      sampleProgram: '#include <stdio.h>\n#define MAX 10\nint stack[MAX], top=-1;\nvoid push(int x){ if(top<MAX-1) stack[++top]=x; }\nint pop(){ if(top>=0) return stack[top--]; else return -1; }\nint main(){ push(5); push(10); printf("%d",pop()); return 0; }',
      diagram: '',
      diagramDescription: 'Diagram showing stack operations and stack pointer.'
    }
  },
  {
    id: 'instruction-formats',
    name: 'Instruction Formats',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit II',
    content: {
      introduction: 'Instruction formats define the layout of bits in an instruction, specifying the operation, operands, and addressing mode.',
      definition: 'An instruction format is the structure of an instruction, including opcode, operand(s), and addressing information.',
      realWorldExample: 'RISC and CISC architectures use different instruction formats for efficiency and flexibility.',
      realWorldUse: 'Used in CPU design to balance instruction length, complexity, and performance.',
      importance: 'Instruction formats affect CPU performance, memory usage, and instruction decoding.',
      detailedExplanation: 'Instruction formats may be fixed or variable length. Fields include opcode, source and destination addresses, and addressing mode. The choice of format impacts instruction decoding and execution speed.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Instruction Formats (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/instruction-formats-in-computer-organization/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing different instruction formats.'
    }
  },
  {
    id: 'addressing-modes',
    name: 'Addressing Modes',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit II',
    content: {
      introduction: 'Addressing modes specify how the operand of an instruction is chosen or calculated.',
      definition: 'An addressing mode is a technique for specifying the address of the data to be operated on.',
      realWorldExample: 'Immediate, direct, indirect, and indexed addressing are common modes in assembly language.',
      realWorldUse: 'Used in instruction set design to provide flexibility and efficiency.',
      importance: 'Addressing modes enable efficient access to data and support complex programming constructs.',
      detailedExplanation: 'Common addressing modes include immediate, direct, indirect, register, and indexed. Each mode offers trade-offs in terms of speed, flexibility, and code size. Understanding addressing modes is essential for assembly programming and CPU design.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Addressing Modes (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/addressing-modes-in-computer-organization/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing different addressing modes.'
    }
  },
  {
    id: 'data-transfer-manipulation',
    name: 'Data Transfer and Manipulation',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit II',
    content: {
      introduction: 'Data transfer and manipulation instructions move data between registers, memory, and I/O devices, and perform operations on data.',
      definition: 'Data transfer instructions move data, while manipulation instructions perform operations like increment, decrement, and shift.',
      realWorldExample: 'MOV, LOAD, STORE, INC, and DEC are examples of data transfer and manipulation instructions.',
      realWorldUse: 'Used in all CPUs to process and move data efficiently.',
      importance: 'Efficient data transfer and manipulation are essential for program execution and system performance.',
      detailedExplanation: 'Data transfer instructions include MOV, LOAD, and STORE. Manipulation instructions include arithmetic and logical operations. These instructions are fundamental for implementing algorithms and controlling program flow.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Data Transfer and Manipulation (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/data-transfer-and-manipulation-instructions-in-computer-organization/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing data transfer and manipulation operations.'
    }
  },
  {
    id: 'cisc',
    name: 'Complex Instruction Set Computer (CISC)',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit II',
    content: {
      introduction: 'CISC is a type of computer architecture that uses a large set of complex instructions, allowing a single instruction to perform multiple operations.',
      definition: 'Complex Instruction Set Computer (CISC) architecture features a rich set of instructions, some of which execute complex tasks.',
      realWorldExample: 'Intel x86 processors use CISC architecture.',
      realWorldUse: 'Used in desktop computers, servers, and embedded systems.',
      importance: 'CISC architectures simplify programming and reduce the number of instructions per program.',
      detailedExplanation: 'CISC processors have instructions that can perform multi-step operations, such as memory access and arithmetic, in a single instruction. This reduces the number of instructions needed but can make the CPU more complex and slower for some tasks.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'CISC Architecture (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/cisc-architecture/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Block diagram of a CISC processor.'
    }
  },
  {
    id: 'risc',
    name: 'Reduced Instruction Set Computer (RISC)',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit II',
    content: {
      introduction: 'RISC is a type of computer architecture that uses a small, highly optimized set of instructions, each designed to execute very quickly.',
      definition: 'Reduced Instruction Set Computer (RISC) architecture features a small set of simple instructions for fast execution.',
      realWorldExample: 'ARM processors in smartphones and tablets use RISC architecture.',
      realWorldUse: 'Used in mobile devices, embedded systems, and high-performance computing.',
      importance: 'RISC architectures enable high-speed processing and energy efficiency.',
      detailedExplanation: 'RISC processors use simple instructions that execute in a single clock cycle. This simplifies CPU design and allows for pipelining and parallelism. RISC architectures are popular in modern embedded and mobile devices.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'RISC Architecture (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/risc-architecture/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Block diagram of a RISC processor.'
    }
  },
  {
    id: 'cisc-vs-risc',
    name: 'CISC vs RISC',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit II',
    content: {
      introduction: 'CISC and RISC are two contrasting computer architectures, each with its own advantages and disadvantages.',
      definition: 'CISC uses complex instructions, while RISC uses simple, fast instructions.',
      realWorldExample: 'Intel x86 (CISC) vs ARM (RISC) processors.',
      realWorldUse: 'Used in different computing environments based on performance, power, and application needs.',
      importance: 'Understanding the differences helps in selecting the right architecture for a given application.',
      detailedExplanation: 'CISC processors have complex instructions that can perform multiple operations, reducing code size but increasing complexity. RISC processors use simple instructions, enabling faster execution and easier pipelining. The choice depends on application requirements, power consumption, and performance needs.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'CISC vs RISC (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/difference-between-cisc-and-risc/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Comparison diagram of CISC and RISC architectures.'
    }
  }
]; 