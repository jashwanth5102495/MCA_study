import { Topic } from '../syllabus';

export const computerOrgUnit1: Topic[] = [
  {
    id: 'number-systems',
    name: 'Number Systems',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Number systems are fundamental to digital electronics and computing, providing ways to represent and manipulate numbers in different bases.',
      definition: 'A number system is a writing system for expressing numbers; it defines a set of values and rules for representing quantities.',
      realWorldExample: 'Decimal (base 10) is used in daily life, binary (base 2) in computers, octal (base 8) and hexadecimal (base 16) in programming and digital circuits.',
      realWorldUse: 'Used in digital circuit design, programming, data representation, and communication protocols.',
      importance: 'Understanding number systems is essential for computer engineers, programmers, and anyone working with digital technology.',
      detailedExplanation: 'There are several number systems: decimal (base 10), binary (base 2), octal (base 8), and hexadecimal (base 16). Each system uses a different set of symbols and positional values. Computers use binary internally, but octal and hexadecimal are often used as shorthand for binary in programming and circuit design. Converting between these systems is a key skill in computer science. For example, the decimal number 25 is 11001 in binary, 31 in octal, and 19 in hexadecimal. Understanding how to convert and operate in these systems is crucial for low-level programming, digital logic design, and understanding how computers store and process data.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2z0OEdlT1xw',
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=92S4zgXN17o'
      ],
      externalLinks: [
        { title: 'Number Systems (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/number-systems/' },
        { title: 'Javatpoint: Number Systems', url: 'https://www.javatpoint.com/number-system' },
        { title: 'Wikipedia: Number System', url: 'https://en.wikipedia.org/wiki/Numeral_system' }
      ],
      sampleProgram: '',
      diagram: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Number_systems.png',
      diagramDescription: 'Diagram showing decimal, binary, octal, and hexadecimal number systems side by side.'
    }
  },
  {
    id: 'binary-numbers',
    name: 'Binary Numbers',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Binary numbers are the foundation of all digital systems and computers, representing data using only two symbols: 0 and 1.',
      definition: 'A binary number is a number expressed in the base-2 numeral system, which uses only two digits: 0 and 1.',
      realWorldExample: 'All data in computers—text, images, audio—is ultimately stored and processed as binary numbers.',
      realWorldUse: 'Used in digital circuits, memory storage, programming, and communication protocols.',
      importance: 'Understanding binary numbers is essential for anyone working with computers, electronics, or digital technology.',
      detailedExplanation: 'Binary numbers use positional notation, just like decimal numbers, but each position represents a power of 2. For example, the binary number 1011 represents 1×8 + 0×4 + 1×2 + 1×1 = 11 in decimal. Computers use binary because digital circuits can easily represent two states (on/off, high/low voltage). Binary arithmetic is the basis for all computer operations, including addition, subtraction, multiplication, and logic operations.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=VLflTjd3lWA',
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=92S4zgXN17o'
      ],
      externalLinks: [
        { title: 'Binary Number System (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/binary-number-system/' },
        { title: 'Javatpoint: Binary Number System', url: 'https://www.javatpoint.com/binary-number-system' },
        { title: 'Wikipedia: Binary Number', url: 'https://en.wikipedia.org/wiki/Binary_number' }
      ],
      sampleProgram: '#include <stdio.h>\nvoid printBinary(int n) {\n    if(n>1) printBinary(n/2);\n    printf("%d", n%2);\n}\nint main() {\n    int num = 11;\n    printBinary(num);\n    return 0;\n}',
      diagram: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Binary_example.svg',
      diagramDescription: 'Diagram showing binary representation of decimal numbers.'
    }
  },
  {
    id: 'octal-numbers',
    name: 'Octal Numbers',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Octal numbers are a base-8 number system used as a shorthand for binary in digital electronics and computing.',
      definition: 'An octal number is a number expressed in the base-8 numeral system, which uses digits 0 to 7.',
      realWorldExample: 'Octal numbers are used in Unix file permissions and as a compact way to represent binary numbers.',
      realWorldUse: 'Used in digital circuit design, programming, and data representation.',
      importance: 'Octal provides a more human-friendly way to represent long binary numbers, especially in early computing and digital logic.',
      detailedExplanation: 'Each octal digit represents three binary digits (bits). For example, the binary number 110101 is 65 in octal. Octal was widely used in early computers and is still used in some programming contexts, such as file permissions in Unix. Converting between binary and octal is straightforward: group the binary digits into sets of three, starting from the right.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw',
        'https://www.youtube.com/watch?v=92S4zgXN17o'
      ],
      externalLinks: [
        { title: 'Octal Number System (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/octal-number-system/' },
        { title: 'Javatpoint: Octal Number System', url: 'https://www.javatpoint.com/octal-number-system' },
        { title: 'Wikipedia: Octal', url: 'https://en.wikipedia.org/wiki/Octal' }
      ],
      sampleProgram: '',
      diagram: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Number_systems.png',
      diagramDescription: 'Diagram showing octal representation alongside binary and decimal.'
    }
  },
  {
    id: 'hexadecimal-numbers',
    name: 'Hexadecimal Numbers',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Hexadecimal numbers are a base-16 number system widely used in computing and digital electronics as a human-friendly representation of binary-coded values.',
      definition: 'A hexadecimal number is a number expressed in the base-16 numeral system, which uses digits 0-9 and letters A-F.',
      realWorldExample: 'Hexadecimal is used to represent memory addresses, color codes in web design (e.g., #FF5733), and machine code instructions.',
      realWorldUse: 'Used in programming, debugging, digital circuit design, and data representation.',
      importance: 'Hexadecimal provides a compact and readable way to represent long binary numbers, making it easier for humans to work with digital systems.',
      detailedExplanation: 'Each hexadecimal digit represents four binary digits (bits). For example, the binary number 11010111 is D7 in hexadecimal. Hexadecimal is commonly used in programming to represent bytes, memory addresses, and color values. Converting between binary and hexadecimal is straightforward: group the binary digits into sets of four, starting from the right.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw',
        'https://www.youtube.com/watch?v=92S4zgXN17o'
      ],
      externalLinks: [
        { title: 'Hexadecimal Number System (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/hexadecimal-number-system/' },
        { title: 'Javatpoint: Hexadecimal Number System', url: 'https://www.javatpoint.com/hexadecimal-number-system' },
        { title: 'Wikipedia: Hexadecimal', url: 'https://en.wikipedia.org/wiki/Hexadecimal' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing hexadecimal representation alongside binary and decimal.'
    }
  },
  {
    id: 'base-conversion',
    name: 'Base Conversion',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Base conversion is the process of changing a number from one number system (base) to another, such as decimal to binary or binary to hexadecimal.',
      definition: 'Base conversion involves mathematical operations to represent a number in a different base.',
      realWorldExample: 'Converting a decimal number to binary for computer processing, or converting binary to hexadecimal for easier reading.',
      realWorldUse: 'Used in programming, digital circuit design, and data communication.',
      importance: 'Base conversion is essential for understanding how computers interpret and process data in different formats.',
      detailedExplanation: 'To convert from decimal to another base, repeatedly divide the number by the new base and record the remainders. To convert from another base to decimal, multiply each digit by its base power and sum the results. Base conversion is a fundamental skill in computer science and digital electronics.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Base Conversion (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/convert-base-decimal-vice-versa/' }
      ],
      sampleProgram: '#include <stdio.h>\nvoid decToBinary(int n) {\n    int bin[32], i=0;\n    while(n>0) { bin[i++]=n%2; n/=2; }\n    for(int j=i-1;j>=0;j--) printf("%d",bin[j]);\n}\nint main() {\n    decToBinary(25);\n    return 0;\n}',
      diagram: '',
      diagramDescription: 'Diagram showing the process of converting a decimal number to binary and hexadecimal.'
    }
  },
  {
    id: 'binary-addition-subtraction',
    name: 'Addition and Subtraction of Binary Numbers',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Addition and subtraction of binary numbers are fundamental operations in digital circuits and computer arithmetic.',
      definition: 'Binary addition and subtraction follow rules similar to decimal arithmetic but use only two digits: 0 and 1.',
      realWorldExample: 'Binary addition is used in digital calculators, processors, and memory operations.',
      realWorldUse: 'Used in ALUs (Arithmetic Logic Units), digital circuits, and programming.',
      importance: 'Understanding binary arithmetic is essential for designing and analyzing digital systems and computer hardware.',
      detailedExplanation: 'Binary addition rules: 0+0=0, 0+1=1, 1+0=1, 1+1=0 (carry 1). Binary subtraction rules: 0-0=0, 1-0=1, 1-1=0, 0-1=1 (borrow 1). Multi-bit addition and subtraction are performed bit by bit, starting from the least significant bit. Overflow and underflow must be handled in digital circuits.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Binary Addition and Subtraction (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/binary-addition-and-subtraction/' }
      ],
      sampleProgram: '#include <stdio.h>\n// Simple binary addition using integers\nint main() {\n    int a=5, b=3;\n    printf("%d + %d = %d\n", a, b, a+b);\n    return 0;\n}',
      diagram: '',
      diagramDescription: 'Diagram showing binary addition and subtraction with carries and borrows.'
    }
  },
  {
    id: 'ones-twos-complements',
    name: "One's and Two's Complements",
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: "One's and Two's complements are methods used in binary arithmetic to represent negative numbers and perform subtraction operations in digital systems.",
      definition: "One's complement of a binary number is obtained by inverting all bits. Two's complement is obtained by adding 1 to the one's complement.",
      realWorldExample: "Two's complement is used in computer processors to represent negative integers and perform arithmetic operations.",
      realWorldUse: "Used in digital circuits, computer arithmetic units, and programming languages for signed number representation.",
      importance: "Understanding complements is crucial for designing arithmetic logic units and for low-level programming involving signed numbers.",
      detailedExplanation: "In one's complement, negative numbers are represented by inverting all bits of the positive number. In two's complement, you add 1 to the one's complement. Two's complement is preferred because it simplifies binary addition and subtraction, allowing the same circuitry to handle both positive and negative numbers. For example, the two's complement of 5 (00000101) is 11111011 (-5 in 8 bits).",
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: "One's and Two's Complement (GeeksforGeeks)", url: 'https://www.geeksforgeeks.org/ones-complement-twos-complement/' }
      ],
      sampleProgram: '#include <stdio.h>\nint main() {\n    int n = 5;\n    printf("One\'s complement: %d\\n", ~n);\n    printf("Two\'s complement: %d\\n", (~n)+1);\n    return 0;\n}',
      diagram: '',
      diagramDescription: "Diagram showing one's and two's complement bitwise operations."
    }
  },
  {
    id: 'positive-negative-numbers',
    name: 'Positive and Negative Numbers',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Positive and negative numbers in binary are represented using sign-magnitude, one’s complement, or two’s complement methods.',
      definition: 'A positive number has a leading 0 (sign bit), and a negative number has a leading 1 in binary representation.',
      realWorldExample: 'In C programming, signed integers use two’s complement to represent negative values.',
      realWorldUse: 'Used in computer memory, processors, and programming languages for arithmetic operations.',
      importance: 'Understanding how computers represent negative numbers is essential for debugging and designing digital systems.',
      detailedExplanation: 'There are three main methods: sign-magnitude, one’s complement, and two’s complement. Two’s complement is most widely used because it allows for simple arithmetic operations and a unique representation of zero. For example, +5 is 00000101, -5 is 11111011 in two’s complement (8 bits).',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Signed Number Representation (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/representation-of-negative-numbers/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing binary representation of positive and negative numbers.'
    }
  },
  {
    id: 'character-codes',
    name: 'Character Codes (ASCII, EBCDIC, etc.)',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Character codes are standardized numeric representations of characters used in computers and communication equipment.',
      definition: 'ASCII and EBCDIC are two common character encoding schemes. ASCII uses 7 or 8 bits, EBCDIC uses 8 bits.',
      realWorldExample: 'Text files, programming source code, and network protocols use ASCII or Unicode (an extension of ASCII).',
      realWorldUse: 'Used in data storage, transmission, and processing in computers and digital devices.',
      importance: 'Character codes enable interoperability between different systems and devices.',
      detailedExplanation: 'ASCII (American Standard Code for Information Interchange) assigns numbers to letters, digits, and symbols. EBCDIC (Extended Binary Coded Decimal Interchange Code) is used mainly on IBM mainframes. Unicode extends ASCII to support global languages. Understanding these codes is essential for data encoding, file formats, and communication protocols.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'ASCII Table (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/ascii-table/' }
      ],
      sampleProgram: '#include <stdio.h>\nint main() {\n    char c = \'A\';\n    printf("ASCII value of %c: %d\\n", c, c);\n    return 0;\n}',
      diagram: '',
      diagramDescription: 'Diagram showing ASCII and EBCDIC code tables.'
    }
  },
  {
    id: 'arithmetic-add-sub',
    name: 'Computer Arithmetic: Addition and Subtraction',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Addition and subtraction are the most basic arithmetic operations performed by computers using binary numbers.',
      definition: 'Computer arithmetic refers to the algorithms and hardware used to perform mathematical operations on binary numbers.',
      realWorldExample: 'Calculators, processors, and embedded systems perform millions of additions and subtractions every second.',
      realWorldUse: 'Used in ALUs, digital signal processors, and all computing devices.',
      importance: 'Efficient arithmetic operations are crucial for computer performance and accuracy.',
      detailedExplanation: 'Addition is performed using full adders, which handle carries between bits. Subtraction is performed using adders and two’s complement representation. Overflow detection is important in both operations. Hardware implementations use ripple-carry adders, carry-lookahead adders, and other techniques for speed.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Binary Addition and Subtraction (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/binary-addition-and-subtraction/' }
      ],
      sampleProgram: '#include <stdio.h>\nint main() {\n    int a=7, b=5;\n    printf("Addition: %d\\n", a+b);\n    printf("Subtraction: %d\\n", a-b);\n    return 0;\n}',
      diagram: '',
      diagramDescription: 'Diagram showing a full adder circuit and binary subtraction.'
    }
  },
  {
    id: 'arithmetic-mul-div',
    name: 'Computer Arithmetic: Multiplication and Division Algorithms',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Multiplication and division in computers are performed using binary algorithms implemented in hardware or software.',
      definition: 'Multiplication is repeated addition, and division is repeated subtraction or shifting in binary arithmetic.',
      realWorldExample: 'Digital signal processors use fast multiplication algorithms for audio and video processing.',
      realWorldUse: 'Used in CPUs, GPUs, and embedded systems for mathematical computations.',
      importance: 'Efficient multiplication and division are essential for high-performance computing and scientific applications.',
      detailedExplanation: 'Binary multiplication uses algorithms like shift-and-add, Booth’s algorithm, and array multipliers. Division uses restoring and non-restoring algorithms. Hardware implementations optimize for speed and area. Understanding these algorithms is important for computer engineers and programmers.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Binary Multiplication and Division (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/binary-multiplication-and-division/' }
      ],
      sampleProgram: '#include <stdio.h>\nint main() {\n    int a=6, b=3;\n    printf("Multiplication: %d\\n", a*b);\n    printf("Division: %d\\n", a/b);\n    return 0;\n}',
      diagram: '',
      diagramDescription: 'Diagram showing a binary multiplier and divider circuit.'
    }
  },
  {
    id: 'arithmetic-floating-point',
    name: 'Computer Arithmetic: Floating-point Arithmetic Operations',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Floating-point arithmetic allows computers to represent and manipulate real numbers with fractional parts, enabling scientific and engineering calculations.',
      definition: 'Floating-point numbers are represented using a sign, exponent, and mantissa (fraction) according to standards like IEEE 754.',
      realWorldExample: 'Calculators, scientific software, and graphics applications use floating-point arithmetic for precise calculations.',
      realWorldUse: 'Used in CPUs, GPUs, and embedded systems for scientific, financial, and engineering computations.',
      importance: 'Floating-point arithmetic enables computers to handle a wide range of values, from very small to very large, with reasonable precision.',
      detailedExplanation: 'Floating-point numbers are stored in memory using a specific format: a sign bit, exponent, and mantissa. The IEEE 754 standard defines single and double precision formats. Operations like addition, subtraction, multiplication, and division require special handling to manage rounding errors, overflow, and underflow. Understanding floating-point representation is crucial for writing accurate and reliable software.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Floating Point Arithmetic (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/floating-point-representation/' }
      ],
      sampleProgram: '#include <stdio.h>\nint main() {\n    float a = 3.14, b = 2.71;\n    printf("Addition: %f\\n", a+b);\n    printf("Multiplication: %f\\n", a*b);\n    return 0;\n}',
      diagram: '',
      diagramDescription: 'Diagram showing floating-point number format (sign, exponent, mantissa).'
    }
  },
  {
    id: 'arithmetic-decimal',
    name: 'Computer Arithmetic: Decimal Arithmetic Operations',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Decimal arithmetic operations allow computers to perform calculations using decimal (base-10) numbers, important for financial and business applications.',
      definition: 'Decimal arithmetic involves addition, subtraction, multiplication, and division of numbers in base-10.',
      realWorldExample: 'Banking software and accounting systems use decimal arithmetic to avoid rounding errors common in binary floating-point.',
      realWorldUse: 'Used in financial, business, and scientific applications where decimal precision is critical.',
      importance: 'Decimal arithmetic ensures accuracy in applications where binary floating-point errors are unacceptable.',
      detailedExplanation: 'Some computers and processors support decimal arithmetic directly in hardware, while others use software libraries. Decimal arithmetic avoids errors like 0.1 + 0.2 ≠ 0.3 in binary floating-point. Understanding decimal arithmetic is important for developing reliable financial and business software.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Decimal Arithmetic (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/decimal-representation/' }
      ],
      sampleProgram: '#include <stdio.h>\nint main() {\n    double a = 10.25, b = 5.75;\n    printf("Addition: %lf\\n", a+b);\n    printf("Subtraction: %lf\\n", a-b);\n    return 0;\n}',
      diagram: '',
      diagramDescription: 'Diagram showing decimal arithmetic operations.'
    }
  },
  {
    id: 'computer-types',
    name: 'Structure of Computers: Computer Types',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Computers come in various types, each designed for specific applications and performance requirements.',
      definition: 'Computer types include microcomputers, minicomputers, mainframes, and supercomputers, classified by size, power, and purpose.',
      realWorldExample: 'Desktops and laptops are microcomputers, servers are minicomputers, banks use mainframes, and research labs use supercomputers.',
      realWorldUse: 'Used in personal, business, scientific, and industrial applications.',
      importance: 'Understanding computer types helps in selecting the right system for a given application.',
      detailedExplanation: 'Microcomputers are small, affordable, and used by individuals. Minicomputers serve small businesses. Mainframes handle large-scale processing for enterprises. Supercomputers perform complex calculations for research and simulations. Each type has unique architecture and performance characteristics.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Types of Computers (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/types-of-computers/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing different types of computers (micro, mini, mainframe, supercomputer).'
    }
  },
  {
    id: 'functional-units',
    name: 'Structure of Computers: Functional Units',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Functional units are the basic building blocks of a computer system, each responsible for specific operations.',
      definition: 'The main functional units are the input unit, output unit, memory unit, arithmetic logic unit (ALU), and control unit.',
      realWorldExample: 'A keyboard is an input unit, a monitor is an output unit, RAM is a memory unit, and the CPU contains the ALU and control unit.',
      realWorldUse: 'Used in all computer systems to process, store, and communicate data.',
      importance: 'Understanding functional units is essential for designing, building, and troubleshooting computer systems.',
      detailedExplanation: 'The input unit receives data, the output unit displays results, the memory unit stores data and instructions, the ALU performs arithmetic and logic operations, and the control unit manages the execution of instructions. These units work together to execute programs and process information.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Functional Units of Computer (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/functional-units-of-a-computer/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Block diagram showing input, output, memory, ALU, and control unit.'
    }
  },
  {
    id: 'basic-operational-concepts',
    name: 'Structure of Computers: Basic Operational Concepts',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Basic operational concepts describe how computers execute instructions and process data.',
      definition: 'Operational concepts include the fetch-decode-execute cycle, instruction formats, and data flow within the CPU.',
      realWorldExample: 'When you run a program, the CPU fetches instructions from memory, decodes them, and executes them in sequence.',
      realWorldUse: 'Used in all computer systems to run software and perform tasks.',
      importance: 'Understanding operational concepts is fundamental for programming, system design, and troubleshooting.',
      detailedExplanation: 'The CPU operates in cycles: it fetches an instruction from memory, decodes it to determine the operation, and executes it. Data flows between registers, memory, and the ALU. Control signals coordinate these actions. This cycle repeats for each instruction in a program.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Basic Operational Concepts (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/basic-operational-concepts-of-computer/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the fetch-decode-execute cycle.'
    }
  },
  {
    id: 'von-neumann-architecture',
    name: 'Structure of Computers: Von-Neumann Architecture',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'The Von-Neumann architecture is a computer design model that describes a system where the CPU runs programs stored in memory.',
      definition: 'Von-Neumann architecture is a computer architecture based on a single storage structure for instructions and data.',
      realWorldExample: 'Most modern computers, including desktops and laptops, are based on the Von-Neumann architecture.',
      realWorldUse: 'Used in general-purpose computers, embedded systems, and microcontrollers.',
      importance: 'Understanding Von-Neumann architecture is fundamental for computer science and engineering students.',
      detailedExplanation: 'The Von-Neumann architecture consists of a CPU, memory, input/output devices, and a bus system. Both data and instructions are stored in the same memory, and the CPU fetches them sequentially. This design simplifies hardware but can lead to the Von-Neumann bottleneck, where the bus becomes a limiting factor for performance.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Von-Neumann Architecture (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/von-neumann-architecture/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Block diagram showing CPU, memory, and bus in Von-Neumann architecture.'
    }
  },
  {
    id: 'bus-structures',
    name: 'Structure of Computers: Bus Structures',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Bus structures are communication systems that transfer data between components inside a computer or between computers.',
      definition: 'A bus is a set of physical connections (wires, traces, or cables) that can carry data, addresses, and control signals.',
      realWorldExample: 'PCI, USB, and SATA are examples of bus structures in modern computers.',
      realWorldUse: 'Used in all computer systems to connect CPU, memory, and peripherals.',
      importance: 'Bus structures determine the speed and efficiency of data transfer in a computer system.',
      detailedExplanation: 'A typical bus structure includes data bus, address bus, and control bus. The data bus carries information, the address bus specifies memory locations, and the control bus manages signals like read/write. Bus width and speed affect overall system performance.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Bus Structure (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/bus-structure-in-computer-organization/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing data, address, and control buses connecting CPU, memory, and I/O.'
    }
  },
  {
    id: 'software',
    name: 'Structure of Computers: Software',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Software is a collection of programs and data that instruct computers to perform specific tasks.',
      definition: 'Software includes system software (operating systems), application software, and utility programs.',
      realWorldExample: 'Windows, Linux, MS Office, and web browsers are examples of software.',
      realWorldUse: 'Used in all computing devices to provide functionality and user interaction.',
      importance: 'Software bridges the gap between hardware and users, enabling computers to be useful tools.',
      detailedExplanation: 'System software manages hardware resources and provides a platform for application software. Application software performs specific tasks for users. Utility programs help maintain and optimize system performance. Software development involves programming, testing, and maintenance.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Software and its Types (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/types-of-software/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the relationship between system software, application software, and hardware.'
    }
  },
  {
    id: 'performance',
    name: 'Structure of Computers: Performance',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Performance in computer systems refers to how efficiently a computer processes data and executes instructions.',
      definition: 'Performance is measured using metrics like clock speed, MIPS, FLOPS, and benchmark scores.',
      realWorldExample: 'A gaming PC with a high clock speed and powerful GPU delivers better performance for games.',
      realWorldUse: 'Used to compare, select, and optimize computer systems for various applications.',
      importance: 'Understanding performance helps in designing, upgrading, and troubleshooting computer systems.',
      detailedExplanation: 'Performance depends on factors like CPU speed, memory bandwidth, cache size, and I/O speed. Benchmarks are used to evaluate and compare systems. Bottlenecks in hardware or software can limit performance. Optimization involves balancing resources for maximum efficiency.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Performance of Computer (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/performance-of-computer/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing factors affecting computer performance.'
    }
  },
  {
    id: 'multiprocessors-multicomputer',
    name: 'Structure of Computers: Multiprocessors and Multicomputer',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Multiprocessors and multicomputers are advanced computer architectures designed to improve performance and reliability by using multiple processing units.',
      definition: 'A multiprocessor system has two or more CPUs sharing memory and I/O, while a multicomputer system consists of multiple independent computers connected by a network.',
      realWorldExample: 'Modern servers and supercomputers use multiprocessor or multicomputer architectures for parallel processing.',
      realWorldUse: 'Used in high-performance computing, data centers, and scientific research.',
      importance: 'Multiprocessors and multicomputers enable faster computation, fault tolerance, and scalability.',
      detailedExplanation: 'Multiprocessor systems share memory and can execute multiple instructions simultaneously. Multicomputer systems use distributed memory and communicate via networks. Both architectures support parallel processing, which is essential for handling large-scale computations and big data.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Multiprocessors and Multicomputer (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/multiprocessors-and-multicomputer/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing multiprocessor and multicomputer architectures.'
    }
  },
  {
    id: 'digital-logic-circuits',
    name: 'Digital Logic Circuits',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Digital logic circuits are the foundation of digital computers, enabling the processing and storage of binary data using electronic signals.',
      definition: 'A digital logic circuit is an electronic circuit that operates on digital signals (0 and 1) to perform logical operations.',
      realWorldExample: 'Microprocessors, memory chips, and digital watches all use digital logic circuits.',
      realWorldUse: 'Used in computers, calculators, communication devices, and embedded systems.',
      importance: 'Understanding digital logic circuits is essential for designing and troubleshooting digital systems.',
      detailedExplanation: 'Digital logic circuits use logic gates (AND, OR, NOT, etc.) to perform operations on binary data. They are classified as combinational (output depends only on current inputs) or sequential (output depends on current and previous inputs). Examples include adders, multiplexers, flip-flops, and counters.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Digital Circuits (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/digital-circuits/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Block diagram showing basic digital logic circuit components.'
    }
  },
  {
    id: 'logic-gates',
    name: 'Logic Gates',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Logic gates are the basic building blocks of digital circuits, performing simple logical functions on one or more binary inputs.',
      definition: 'A logic gate is an electronic device that implements a Boolean function, such as AND, OR, NOT, NAND, NOR, XOR, and XNOR.',
      realWorldExample: 'Logic gates are used in calculators, computers, and digital control systems.',
      realWorldUse: 'Used in all digital electronic devices to process binary information.',
      importance: 'Logic gates enable the construction of complex digital circuits and systems.',
      detailedExplanation: 'Each logic gate has a unique symbol and truth table. Gates can be combined to create more complex circuits like adders and multiplexers. Understanding their operation is fundamental to digital electronics.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Logic Gates (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/logic-gates-in-digital-logic/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing symbols and truth tables for basic logic gates.'
    }
  },
  {
    id: 'boolean-algebra',
    name: 'Boolean Algebra',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Boolean algebra is a branch of mathematics that deals with binary variables and logical operations.',
      definition: 'Boolean algebra uses variables that take values 0 or 1 and operations like AND, OR, and NOT.',
      realWorldExample: 'Used in designing digital circuits, search engines, and computer programming.',
      realWorldUse: 'Essential for simplifying and analyzing digital logic circuits.',
      importance: 'Boolean algebra allows engineers to design efficient and reliable digital systems.',
      detailedExplanation: 'Boolean algebra provides rules and theorems for manipulating logical expressions. It is used to minimize the number of gates in a circuit, reducing cost and power consumption. Key laws include De Morgan’s laws, distributive, associative, and commutative properties.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Boolean Algebra (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/boolean-algebra-in-digital-logic/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing Boolean algebra operations and truth tables.'
    }
  },
  {
    id: 'map-simplification',
    name: 'Map Simplification',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Map simplification is a technique used to reduce the complexity of Boolean expressions and digital circuits.',
      definition: 'Map simplification uses Karnaugh maps (K-maps) to visually minimize Boolean functions.',
      realWorldExample: 'Used in designing efficient digital circuits for calculators and embedded systems.',
      realWorldUse: 'Essential for optimizing digital logic designs in hardware and software.',
      importance: 'Simplification reduces the number of gates, saving cost, space, and power.',
      detailedExplanation: 'Karnaugh maps provide a graphical method for minimizing Boolean expressions. By grouping adjacent 1s, engineers can find the simplest form of a logic function. This process is crucial for designing optimal digital circuits.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Karnaugh Map (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/k-map-karnaugh-map/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing a Karnaugh map and simplification process.'
    }
  },
  {
    id: 'half-adder',
    name: 'Combinational Circuits: Half Adder',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'A half adder is a combinational circuit that adds two single binary digits and produces a sum and a carry output.',
      definition: 'A half adder is a digital circuit that computes the addition of two bits, outputting sum and carry.',
      realWorldExample: 'Used in the arithmetic logic unit (ALU) of computers and calculators.',
      realWorldUse: 'Forms the basis for more complex adders like full adders and ripple-carry adders.',
      importance: 'Understanding half adders is essential for designing arithmetic circuits in digital systems.',
      detailedExplanation: 'A half adder consists of an XOR gate for the sum and an AND gate for the carry. It cannot handle carry-in from a previous stage, so it is used only for the least significant bit in multi-bit addition.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Half Adder (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/half-adder-and-full-adder/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Circuit diagram of a half adder using XOR and AND gates.'
    }
  },
  {
    id: 'full-adder',
    name: 'Combinational Circuits: Full Adder',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'A full adder is a combinational circuit that adds three binary digits (including carry-in) and produces a sum and a carry output.',
      definition: 'A full adder is a digital circuit that computes the sum of three bits: two significant bits and a carry-in.',
      realWorldExample: 'Used in multi-bit binary addition in processors and digital systems.',
      realWorldUse: 'Essential for constructing ripple-carry adders and arithmetic units.',
      importance: 'Full adders enable multi-bit binary addition, a fundamental operation in computers.',
      detailedExplanation: 'A full adder consists of two half adders and an OR gate. It takes three inputs (A, B, Cin) and produces two outputs (Sum, Cout). It is used in cascaded form to add binary numbers of any length.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Full Adder (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/half-adder-and-full-adder/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Circuit diagram of a full adder using two half adders and an OR gate.'
    }
  },
  {
    id: 'flip-flops',
    name: 'Flip Flops',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Flip flops are basic memory elements in digital electronics, used to store one bit of data.',
      definition: 'A flip flop is a bistable multivibrator circuit with two stable states, used for data storage and synchronization.',
      realWorldExample: 'Used in registers, counters, and memory devices in computers.',
      realWorldUse: 'Essential for sequential logic circuits and timing applications.',
      importance: 'Flip flops enable data storage, synchronization, and state retention in digital systems.',
      detailedExplanation: 'There are several types of flip flops: SR, JK, D, and T. Each type has unique characteristics and applications. Flip flops are triggered by clock signals and are used to build registers, counters, and memory cells.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Flip Flops (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/flip-flops-and-their-types-in-digital-electronics/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Circuit diagram of a basic SR flip flop.'
    }
  },
  {
    id: 'shift-registers',
    name: 'Sequential Circuits: Shift Registers',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Shift registers are sequential logic circuits used to store and shift binary data.',
      definition: 'A shift register is a series of flip flops connected in a chain, where the output of one is the input of the next.',
      realWorldExample: 'Used in data transfer, serial-to-parallel conversion, and digital signal processing.',
      realWorldUse: 'Essential for data storage, transfer, and manipulation in digital systems.',
      importance: 'Shift registers enable efficient data movement and storage in computers and communication devices.',
      detailedExplanation: 'Shift registers can be configured as serial-in serial-out, serial-in parallel-out, parallel-in serial-out, or parallel-in parallel-out. They are used in communication interfaces, memory devices, and digital processing.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Shift Registers (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/shift-registers-in-digital-logic/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing a 4-bit shift register using flip flops.'
    }
  },
  {
    id: 'counters',
    name: 'Sequential Circuits: Counters',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Counters are sequential circuits that count pulses and keep track of events in digital systems.',
      definition: 'A counter is a series of flip flops connected to count the number of input pulses.',
      realWorldExample: 'Used in digital clocks, timers, and frequency counters.',
      realWorldUse: 'Essential for event counting, timing, and sequencing in digital electronics.',
      importance: 'Counters provide timing and control functions in computers and embedded systems.',
      detailedExplanation: 'Counters can be asynchronous (ripple) or synchronous. They can count up, down, or both. Applications include digital clocks, event counters, and frequency dividers.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Counters (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/counters-in-digital-logic/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing a 4-bit binary counter using flip flops.'
    }
  },
  {
    id: 'integrated-circuits',
    name: 'Integrated Circuits',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Integrated circuits (ICs) are electronic circuits consisting of multiple components fabricated onto a single chip.',
      definition: 'An integrated circuit is a set of electronic circuits on a small flat piece (chip) of semiconductor material.',
      realWorldExample: 'Microprocessors, memory chips, and operational amplifiers are all types of ICs.',
      realWorldUse: 'Used in all modern electronic devices, from computers to smartphones.',
      importance: 'ICs enable miniaturization, reliability, and cost-effectiveness in electronic systems.',
      detailedExplanation: 'ICs can be analog, digital, or mixed-signal. They are classified by scale of integration: SSI, MSI, LSI, VLSI. ICs revolutionized electronics by allowing complex circuits to be built on a single chip.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Integrated Circuits (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/integrated-circuits-ics/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing the structure of an integrated circuit chip.'
    }
  },
  {
    id: 'mux',
    name: 'Mux (Multiplexer)',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'A multiplexer (mux) is a combinational circuit that selects one of many input signals and forwards the selected input to a single output line.',
      definition: 'A multiplexer is a digital switch that allows multiple signals to share one device or resource, such as a data bus.',
      realWorldExample: 'Used in communication systems to route data from multiple sources to a single destination.',
      realWorldUse: 'Essential in digital systems for data selection, routing, and resource sharing.',
      importance: 'Multiplexers reduce the number of data paths required and simplify circuit design.',
      detailedExplanation: 'A multiplexer has multiple data inputs, selection lines, and one output. The selection lines determine which input is connected to the output. Common types include 2-to-1, 4-to-1, and 8-to-1 multiplexers. Muxes are used in ALUs, memory management, and communication systems.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Multiplexer (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/multiplexer-in-digital-logic/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Circuit diagram of a 4-to-1 multiplexer.'
    }
  },
  {
    id: 'demux',
    name: 'Demux (Demultiplexer)',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'A demultiplexer (demux) is a combinational circuit that takes a single input and channels it to one of several outputs.',
      definition: 'A demultiplexer is a digital circuit that routes a single input signal to one of many output lines based on selection inputs.',
      realWorldExample: 'Used in communication systems to distribute data from one source to multiple destinations.',
      realWorldUse: 'Essential for data distribution, memory addressing, and communication protocols.',
      importance: 'Demultiplexers simplify circuit design by reducing the number of required connections.',
      detailedExplanation: 'A demultiplexer has one data input, selection lines, and multiple outputs. The selection lines determine which output receives the input signal. Common types include 1-to-2, 1-to-4, and 1-to-8 demuxes. Demuxes are used in data routing, memory selection, and digital communication.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Demultiplexer (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/demultiplexer-in-digital-logic/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Circuit diagram of a 1-to-4 demultiplexer.'
    }
  },
  {
    id: 'encoder',
    name: 'Encoder',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'An encoder is a combinational circuit that converts information from one format or code to another, typically from 2^n inputs to n outputs.',
      definition: 'An encoder is a digital circuit that encodes multiple input lines into a smaller number of output lines.',
      realWorldExample: 'Used in keyboards to convert key presses into binary codes.',
      realWorldUse: 'Essential for data compression, communication, and digital systems.',
      importance: 'Encoders reduce the number of data lines and simplify circuit design.',
      detailedExplanation: 'A typical encoder has 2^n input lines and n output lines. Priority encoders assign priority to inputs and output the binary code of the highest-priority active input. Encoders are used in data compression, communication, and digital systems.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Encoder (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/encoder-in-digital-logic/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Circuit diagram of an 8-to-3 encoder.'
    }
  },
  {
    id: 'decoder',
    name: 'Decoder',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'A decoder is a combinational circuit that converts coded inputs into coded outputs, where the output lines are mutually exclusive.',
      definition: 'A decoder is a digital circuit that decodes binary information from n input lines to a maximum of 2^n unique output lines.',
      realWorldExample: 'Used in memory address decoding and seven-segment display drivers.',
      realWorldUse: 'Essential for data selection, memory addressing, and display systems.',
      importance: 'Decoders enable the selection of specific devices or memory locations in digital systems.',
      detailedExplanation: 'A typical decoder has n input lines and 2^n output lines. Decoders are used in memory address decoding, data routing, and display systems. Common types include 2-to-4 and 3-to-8 decoders.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Decoder (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/decoder-in-digital-logic/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Circuit diagram of a 3-to-8 decoder.'
    }
  },
  {
    id: 'fixed-point',
    name: 'Data Representation: Fixed Point',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Fixed-point representation is a method of storing real numbers in computers using a fixed number of digits after the decimal point.',
      definition: 'Fixed-point numbers have a fixed number of digits before and after the decimal point, with the decimal point in a fixed position.',
      realWorldExample: 'Used in embedded systems and digital signal processing where speed and simplicity are important.',
      realWorldUse: 'Essential for applications requiring fast and predictable arithmetic operations.',
      importance: 'Fixed-point representation is faster and uses less hardware than floating-point, making it suitable for real-time systems.',
      detailedExplanation: 'In fixed-point representation, the position of the decimal point is fixed. Numbers are scaled by a factor, and arithmetic is performed on integers. This method is efficient but has limited range and precision compared to floating-point.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Fixed Point Representation (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/fixed-point-representation/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing fixed-point number representation.'
    }
  },
  {
    id: 'floating-point',
    name: 'Data Representation: Floating Point',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Floating-point representation is a method of storing real numbers in computers using scientific notation.',
      definition: 'Floating-point numbers are represented by a sign, exponent, and mantissa, allowing a wide range of values.',
      realWorldExample: 'Used in scientific computing, graphics, and engineering applications.',
      realWorldUse: 'Essential for applications requiring a large dynamic range and precision.',
      importance: 'Floating-point representation enables computers to handle very large and very small numbers efficiently.',
      detailedExplanation: 'Floating-point numbers follow the IEEE 754 standard, with single and double precision formats. The value is calculated as sign × mantissa × base^exponent. Floating-point arithmetic is more complex but provides greater range and precision than fixed-point.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Floating Point Representation (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/floating-point-representation/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing floating-point number representation.'
    }
  },
  {
    id: 'error-detection-correction',
    name: 'Error Detection and Correction Codes',
    semester: 1,
    subject: 'Computer Organization and Architecture',
    unit: 'Unit I',
    content: {
      introduction: 'Error detection and correction codes are techniques used to identify and correct errors in digital data transmission and storage.',
      definition: 'These codes add redundancy to data so that errors can be detected and corrected during communication or storage.',
      realWorldExample: 'Used in computer memory (ECC RAM), hard drives, and digital communication systems.',
      realWorldUse: 'Essential for reliable data transmission and storage in computers and networks.',
      importance: 'Error detection and correction ensure data integrity and reliability in digital systems.',
      detailedExplanation: 'Common techniques include parity bits, checksums, and Hamming codes. Parity bits detect single-bit errors, while Hamming codes can correct single-bit errors and detect double-bit errors. These methods are vital for preventing data corruption.',
      youtubeLinks: [
        'https://www.youtube.com/watch?v=8hly31xKli0',
        'https://www.youtube.com/watch?v=2z0OEdlT1xw'
      ],
      externalLinks: [
        { title: 'Error Detection and Correction (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/error-detection-and-correction/' }
      ],
      sampleProgram: '',
      diagram: '',
      diagramDescription: 'Diagram showing parity bit and Hamming code error correction.'
    }
  }
]; 