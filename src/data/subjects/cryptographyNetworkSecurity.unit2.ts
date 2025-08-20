import { Topic } from '../syllabus';

export const cryptographyNetworkSecurityUnit2: Topic[] = [
  {
    id: 'block-cipher-principles',
    name: 'Block Cipher Principles',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit II',
    content: {
      introduction: 'Block ciphers encrypt fixed-size blocks of plaintext into ciphertext blocks using symmetric keys and are fundamental to modern cryptography.',
      definition: 'Block ciphers are symmetric key cryptographic algorithms that process plaintext in fixed-size blocks, typically 64 or 128 bits.',
      realWorldExample: 'AES (Advanced Encryption Standard) is a block cipher used in HTTPS, WiFi security, and file encryption, processing 128-bit blocks.',
      realWorldUse: 'Applied in data encryption, secure communications, file protection, and as building blocks for other cryptographic constructions.',
      importance: 'Forms the foundation of modern symmetric cryptography, providing efficient and secure encryption for various applications.',
      detailedExplanation: `Block cipher principles include confusion (making the relationship between key and ciphertext complex) and diffusion (spreading plaintext influence across ciphertext). Key components include substitution boxes (S-boxes) for confusion and permutation boxes (P-boxes) for diffusion. The Feistel structure divides data blocks into halves and applies round functions alternately. Product ciphers combine substitution and transposition operations through multiple rounds. Security depends on key size, number of rounds, and strength of round functions. Block size affects security and efficiency: larger blocks provide better security but may be less efficient. Common block sizes are 64 bits (DES) and 128 bits (AES). Modern block ciphers use multiple rounds of substitution and permutation to achieve strong security properties.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=O4xNJsQIO8k',
        'https://www.youtube.com/watch?v=NmM9HA2MQGI'
      ],
      externalLinks: [
        { title: 'Block Cipher Principles', url: 'https://www.geeksforgeeks.org/block-cipher/' },
        { title: 'Block Cipher Design', url: 'https://www.tutorialspoint.com/cryptography/block_cipher.htm' }
      ]
    }
  },
  {
    id: 'data-encryption-standard',
    name: 'The Data Encryption Standard (DES)',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit II',
    content: {
      introduction: 'DES was the first widely adopted commercial encryption standard, serving as the foundation for modern block cipher design.',
      definition: 'DES (Data Encryption Standard) is a symmetric block cipher that encrypts 64-bit blocks using a 56-bit key through 16 rounds of processing.',
      realWorldExample: 'Banking systems used DES extensively in the 1980s and 1990s for ATM transactions and electronic funds transfers before transitioning to stronger algorithms.',
      realWorldUse: 'Historically used in financial systems, government communications, and commercial applications; now largely replaced by AES.',
      importance: 'Established principles of modern block cipher design and demonstrated the importance of key length in cryptographic security.',
      detailedExplanation: `DES uses a Feistel structure with 16 rounds, each applying a round function to half the data block using a 48-bit subkey derived from the main 56-bit key. The algorithm includes initial and final permutations, expansion permutation, S-box substitutions, and P-box permutations. Key schedule generates 16 subkeys from the main key through left shifts and permutations. The 56-bit effective key length (64 bits with 8 parity bits) became insufficient against brute force attacks as computing power increased. DES was broken by specialized hardware in 1998, demonstrating the need for longer keys. Despite cryptographic weaknesses, DES established important design principles and paved the way for advanced encryption standards.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=FGhj3CGxl8I',
        'https://www.youtube.com/watch?v=O4xNJsQIO8k'
      ],
      externalLinks: [
        { title: 'DES Algorithm', url: 'https://www.geeksforgeeks.org/data-encryption-standard-des-set-1/' },
        { title: 'DES Explained', url: 'https://www.tutorialspoint.com/cryptography/data_encryption_standard.htm' }
      ]
    }
  },
  {
    id: 'strength-of-des',
    name: 'The Strength of DES',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit II',
    content: {
      introduction: 'The strength of DES has been extensively analyzed, revealing both its design merits and fundamental limitations.',
      definition: 'DES strength refers to its resistance against various cryptanalytic attacks and the security provided by its 56-bit key length.',
      realWorldExample: 'The EFF DES Cracker built in 1998 broke DES in 56 hours, demonstrating that 56-bit keys were no longer secure against dedicated hardware attacks.',
      realWorldUse: 'Used in security analysis, cryptographic research, and understanding the evolution of encryption standards.',
      importance: 'Demonstrates the relationship between key length and security, influencing the development of stronger encryption algorithms.',
      detailedExplanation: `DES strength analysis reveals several aspects: Key space of 2^56 (approximately 72 quadrillion) was considered secure in 1977 but became vulnerable to brute force attacks as computing power increased. The algorithm resists differential and linear cryptanalysis better than random S-boxes, suggesting NSA involvement in strengthening the design. Weak keys (4 keys) and semi-weak keys (12 keys) produce identical encryption and decryption, but their probability is negligible. The complementation property allows reducing brute force search space by half. Time-memory tradeoff attacks using rainbow tables can accelerate key recovery. Despite these weaknesses, DES remained secure against practical attacks for nearly two decades, validating its design principles while highlighting the importance of adequate key length.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=FGhj3CGxl8I',
        'https://www.youtube.com/watch?v=O4xNJsQIO8k'
      ],
      externalLinks: [
        { title: 'DES Security Analysis', url: 'https://www.geeksforgeeks.org/data-encryption-standard-des-set-1/' },
        { title: 'Cryptanalysis of DES', url: 'https://www.tutorialspoint.com/cryptography/data_encryption_standard.htm' }
      ]
    }
  },
  {
    id: 'differential-linear-cryptanalysis',
    name: 'Differential and Linear Cryptanalysis',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit II',
    content: {
      introduction: 'Differential and linear cryptanalysis are powerful techniques for analyzing the security of block ciphers by exploiting statistical properties.',
      definition: 'Differential cryptanalysis studies how differences in plaintext affect differences in ciphertext, while linear cryptanalysis finds linear approximations of cipher operations.',
      realWorldExample: 'These techniques were used to analyze DES security and influenced the design of AES to resist such attacks through careful S-box construction.',
      realWorldUse: 'Applied in cryptographic research, cipher design evaluation, and security assessment of encryption algorithms.',
      importance: 'Revolutionized cryptanalysis and significantly influenced the design of modern block ciphers to resist statistical attacks.',
      detailedExplanation: `Differential cryptanalysis, introduced by Biham and Shamir, analyzes how input differences propagate through cipher rounds. It uses chosen plaintext pairs with specific differences to find key bits through statistical analysis. The attack exploits non-uniform distribution in S-box outputs for certain input differences. Linear cryptanalysis, developed by Matsui, finds linear approximations between plaintext, ciphertext, and key bits. It uses known plaintext-ciphertext pairs to determine linear expressions that hold with probability significantly different from 1/2. Both attacks require large amounts of data and computational resources. Modern ciphers like AES are designed to resist these attacks through careful S-box design, adequate number of rounds, and strong diffusion properties. These techniques led to the development of provable security concepts in cryptography.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=FGhj3CGxl8I',
        'https://www.youtube.com/watch?v=O4xNJsQIO8k'
      ],
      externalLinks: [
        { title: 'Differential Cryptanalysis', url: 'https://www.geeksforgeeks.org/differential-cryptanalysis/' },
        { title: 'Linear Cryptanalysis', url: 'https://en.wikipedia.org/wiki/Linear_cryptanalysis' }
      ]
    }
  },
  {
    id: 'block-cipher-design',
    name: 'Block Cipher Design',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit II',
    content: {
      introduction: 'Block cipher design involves creating secure and efficient encryption algorithms that resist known attacks while maintaining practical performance.',
      definition: 'Block cipher design is the process of constructing symmetric encryption algorithms that transform fixed-size plaintext blocks into ciphertext blocks.',
      realWorldExample: 'The AES design competition evaluated multiple cipher proposals based on security, performance, and implementation characteristics before selecting Rijndael.',
      realWorldUse: 'Applied in developing new encryption standards, improving existing algorithms, and creating specialized ciphers for specific applications.',
      importance: 'Critical for advancing cryptographic security and ensuring protection against evolving threats and attack techniques.',
      detailedExplanation: `Block cipher design principles include achieving confusion through non-linear substitutions and diffusion through linear transformations. Key design decisions involve block size (affecting security and efficiency), key size (determining resistance to brute force), number of rounds (balancing security and performance), and round function structure. The substitution-permutation network (SPN) and Feistel network are common structures. Security criteria include resistance to differential and linear cryptanalysis, algebraic attacks, and side-channel attacks. Performance considerations include encryption/decryption speed, memory requirements, and hardware implementation efficiency. Modern design approaches use provable security techniques, wide-trail strategy for diffusion, and careful analysis of algebraic properties. The design process involves extensive cryptanalytic evaluation, performance testing, and peer review.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=O4xNJsQIO8k',
        'https://www.youtube.com/watch?v=NmM9HA2MQGI'
      ],
      externalLinks: [
        { title: 'Block Cipher Design', url: 'https://www.geeksforgeeks.org/block-cipher/' },
        { title: 'Cipher Design Principles', url: 'https://www.tutorialspoint.com/cryptography/block_cipher.htm' }
      ]
    }
  },
  {
    id: 'aes-polynomials-gf28',
    name: 'The AES Polynomials with Coefficients in GF(2^8)',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit II',
    content: {
      introduction: 'AES uses polynomial arithmetic in the finite field GF(2^8) to perform mathematical operations that provide strong cryptographic properties.',
      definition: 'AES polynomial operations in GF(2^8) involve arithmetic on polynomials with coefficients in the finite field of 256 elements, used in MixColumns transformation.',
      realWorldExample: 'AES encryption in secure messaging apps like Signal uses GF(2^8) polynomial multiplication to mix column data, providing diffusion across the cipher state.',
      realWorldUse: 'Applied in AES implementation, finite field arithmetic, and cryptographic algorithms requiring mathematical operations in finite fields.',
      importance: 'Provides the mathematical foundation for AES security properties and demonstrates the application of abstract algebra in cryptography.',
      detailedExplanation: `GF(2^8) is a finite field with 256 elements, where each element can be represented as a polynomial of degree at most 7 with coefficients in GF(2). AES represents bytes as polynomials: byte value 0x53 becomes x^6 + x^4 + x + 1. Addition in GF(2^8) is XOR operation. Multiplication requires polynomial multiplication followed by reduction modulo the irreducible polynomial m(x) = x^8 + x^4 + x^3 + x + 1. The MixColumns transformation multiplies the state column by a fixed polynomial matrix. The inverse operation uses the multiplicative inverse in GF(2^8). This mathematical structure ensures that small changes in input produce large changes in output (avalanche effect) and provides resistance against linear and differential attacks. Implementation can use lookup tables or direct computation for efficiency.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=gP4PqVGudtg',
        'https://www.youtube.com/watch?v=O4xNJsQIO8k'
      ],
      externalLinks: [
        { title: 'AES Mathematics', url: 'https://www.geeksforgeeks.org/advanced-encryption-standard-aes/' },
        { title: 'Finite Field Arithmetic', url: 'https://en.wikipedia.org/wiki/Finite_field_arithmetic' }
      ]
    }
  },
  {
    id: 'simplified-aes',
    name: 'Simplified AES',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit II',
    content: {
      introduction: 'Simplified AES (S-AES) is an educational version of AES that demonstrates the algorithm\'s principles using smaller block and key sizes.',
      definition: 'Simplified AES is a reduced version of AES operating on 16-bit blocks with 16-bit keys, designed for educational purposes and algorithm understanding.',
      realWorldExample: 'Computer science courses use S-AES to teach encryption concepts because students can manually trace through the algorithm steps with pencil and paper.',
      realWorldUse: 'Applied in cryptography education, algorithm demonstration, and understanding AES principles without computational complexity.',
      importance: 'Provides accessible introduction to AES concepts and demonstrates how block cipher principles work in practice.',
      detailedExplanation: `Simplified AES operates on 16-bit plaintext blocks using 16-bit keys through two rounds of processing. The algorithm includes key expansion generating three 16-bit subkeys, initial key addition, two rounds of SubBytes (using 4-bit S-boxes), ShiftRows (simple byte swap), MixColumns (matrix multiplication in GF(2^4)), and AddRoundKey operations. The structure mirrors full AES but with reduced parameters for educational clarity. S-AES demonstrates confusion through S-box substitution and diffusion through MixColumns transformation. The algorithm can be implemented by hand, allowing students to understand each step. While cryptographically weak due to small key space (2^16), S-AES effectively illustrates the principles underlying modern block ciphers and provides foundation for understanding full AES.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=gP4PqVGudtg',
        'https://www.youtube.com/watch?v=O4xNJsQIO8k'
      ],
      externalLinks: [
        { title: 'Simplified AES', url: 'https://www.geeksforgeeks.org/simplified-aes/' },
        { title: 'S-AES Tutorial', url: 'https://www.tutorialspoint.com/cryptography/advanced_encryption_standard.htm' }
      ]
    }
  },
  {
    id: 'multiple-encryption-triple-des',
    name: 'Multiple Encryption and Triple DES',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit II',
    content: {
      introduction: 'Multiple encryption applies encryption algorithms multiple times to increase security, with Triple DES being the most common implementation.',
      definition: 'Multiple encryption involves applying block ciphers multiple times with different keys to achieve higher security than single encryption.',
      realWorldExample: 'Banking systems used Triple DES (3DES) for credit card transactions and ATM communications when DES became vulnerable to brute force attacks.',
      realWorldUse: 'Applied in legacy systems requiring stronger security than DES, financial transactions, and transitional security solutions.',
      importance: 'Demonstrates how existing algorithms can be strengthened and provides bridge between weak and strong encryption standards.',
      detailedExplanation: `Multiple encryption strategies include double encryption (encrypt twice with different keys) and triple encryption. Double DES is vulnerable to meet-in-the-middle attacks, providing only 57-bit security instead of expected 112-bit. Triple DES (3DES) uses encrypt-decrypt-encrypt (EDE) with two or three keys: 3DES-EDE2 uses two keys (K1, K2, K1) providing 112-bit security, while 3DES-EDE3 uses three keys (K1, K2, K3) providing 168-bit security. The decrypt step in the middle ensures backward compatibility with single DES when K1=K2. 3DES is slower than single DES but provides adequate security. However, 3DES has been largely replaced by AES due to performance considerations and the availability of stronger, more efficient algorithms. The approach demonstrates that simply cascading ciphers doesn't always provide expected security improvements.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=FGhj3CGxl8I',
        'https://www.youtube.com/watch?v=O4xNJsQIO8k'
      ],
      externalLinks: [
        { title: 'Triple DES', url: 'https://www.geeksforgeeks.org/triple-des/' },
        { title: '3DES Algorithm', url: 'https://www.tutorialspoint.com/cryptography/triple_des.htm' }
      ]
    }
  },
  {
    id: 'block-cipher-modes',
    name: 'Block Cipher Modes of Operation',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit II',
    content: {
      introduction: 'Block cipher modes of operation define how block ciphers encrypt data larger than a single block while maintaining security properties.',
      definition: 'Block cipher modes are methods for applying block ciphers to encrypt plaintext longer than the cipher\'s block size while preserving security.',
      realWorldExample: 'HTTPS connections use AES in GCM mode to encrypt web traffic, providing both confidentiality and authentication for secure communications.',
      realWorldUse: 'Applied in secure communications, file encryption, database protection, and any application requiring encryption of variable-length data.',
      importance: 'Essential for practical use of block ciphers, as most real-world data exceeds single block size and requires secure chaining methods.',
      detailedExplanation: `Common modes include: Electronic Codebook (ECB) encrypts each block independently but reveals patterns in plaintext. Cipher Block Chaining (CBC) XORs each plaintext block with the previous ciphertext block before encryption, requiring an initialization vector (IV). Cipher Feedback (CFB) and Output Feedback (OFB) convert block ciphers into stream ciphers. Counter (CTR) mode encrypts a counter value and XORs with plaintext, enabling parallel processing. Galois/Counter Mode (GCM) combines CTR mode with authentication. Each mode has different properties: ECB is fast but insecure for structured data, CBC provides good security but requires sequential processing, CTR enables parallel processing and random access, and GCM provides authenticated encryption. Mode selection depends on security requirements, performance needs, and implementation constraints.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Rk0NIQfEXBA',
        'https://www.youtube.com/watch?v=O4xNJsQIO8k'
      ],
      externalLinks: [
        { title: 'Block Cipher Modes', url: 'https://www.geeksforgeeks.org/block-cipher-modes-of-operation/' },
        { title: 'Cipher Modes Explained', url: 'https://www.tutorialspoint.com/cryptography/block_cipher_modes_of_operation.htm' }
      ]
    }
  },
  {
    id: 'stream-ciphers-rc4',
    name: 'Stream Ciphers and RC4',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit II',
    content: {
      introduction: 'Stream ciphers encrypt data one bit or byte at a time using a keystream, with RC4 being one of the most widely used stream ciphers.',
      definition: 'Stream ciphers generate a continuous keystream that is XORed with plaintext to produce ciphertext, processing data in real-time.',
      realWorldExample: 'RC4 was used in WEP wireless security and early SSL/TLS implementations, though it has since been deprecated due to security vulnerabilities.',
      realWorldUse: 'Applied in real-time communications, wireless security, and applications requiring low-latency encryption with minimal buffering.',
      importance: 'Provides efficient encryption for streaming data and demonstrates alternative approaches to block cipher design.',
      detailedExplanation: `Stream ciphers generate pseudorandom keystreams that are combined with plaintext using XOR operation. Advantages include speed, low memory requirements, and no padding needs. RC4 uses a variable-length key (40-2048 bits) to initialize a 256-byte state array through key scheduling algorithm (KSA). The pseudorandom generation algorithm (PRGA) produces keystream bytes by swapping array elements and outputting values. RC4 is simple and fast but has several weaknesses: biased keystream output, related key attacks, and predictable initial bytes. These vulnerabilities led to its deprecation in modern protocols. Other stream ciphers include ChaCha20 (used in modern TLS), Salsa20, and hardware-oriented ciphers like Trivium. Stream ciphers are particularly suitable for applications where data arrives continuously and block-based processing is impractical.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=yKuaGWgDzpE',
        'https://www.youtube.com/watch?v=O4xNJsQIO8k'
      ],
      externalLinks: [
        { title: 'Stream Ciphers', url: 'https://www.geeksforgeeks.org/stream-cipher/' },
        { title: 'RC4 Algorithm', url: 'https://www.tutorialspoint.com/cryptography/stream_ciphers.htm' }
      ]
    }
  }
];