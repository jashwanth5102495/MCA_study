import { Topic } from '../syllabus';

export const cryptographyNetworkSecurityUnit3: Topic[] = [
  {
    id: 'fermats-eulers-theorem',
    name: "Fermat's and Euler's Theorem",
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit III',
    content: {
      introduction: 'Fermat’s and Euler’s theorems are fundamental results in number theory, crucial for modern cryptography, especially in public-key algorithms.',
      definition: "Fermat's Little Theorem states that if p is a prime and a is not divisible by p, then a^(p-1) ≡ 1 (mod p). Euler's Theorem generalizes this: if a and n are coprime, then a^φ(n) ≡ 1 (mod n), where φ(n) is Euler's totient function.",
      realWorldExample: 'These theorems are used in the RSA algorithm for encryption and decryption operations.',
      realWorldUse: 'Applied in public-key cryptography, digital signatures, and secure communications.',
      importance: 'They provide the mathematical foundation for the security of many cryptographic protocols.',
      detailedExplanation: `Fermat’s Little Theorem and Euler’s Theorem are used to simplify calculations in modular arithmetic, which is essential for cryptographic algorithms. In RSA, Euler’s Theorem ensures that encryption and decryption are inverses of each other. These theorems allow for efficient computation of large powers modulo n, which is a core operation in public-key cryptography.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=0Kx4Y9TVMGg'],
      externalLinks: [
        { title: "Fermat's Little Theorem", url: 'https://en.wikipedia.org/wiki/Fermat%27s_little_theorem' },
        { title: "Euler's Theorem", url: 'https://en.wikipedia.org/wiki/Euler%27s_theorem' }
      ]
    }
  },
  {
    id: 'chinese-remainder-theorem',
    name: 'The Chinese Remainder Theorem',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit III',
    content: {
      introduction: 'The Chinese Remainder Theorem (CRT) is a result in number theory that allows one to solve systems of simultaneous congruences with different moduli.',
      definition: 'CRT states that if one knows the remainders of the division of an integer by several pairwise coprime integers, one can determine uniquely the remainder of the division of that integer by the product of these integers.',
      realWorldExample: 'CRT is used in RSA decryption to speed up calculations by working modulo prime factors.',
      realWorldUse: 'Used in cryptographic algorithms, coding theory, and computer algebra systems.',
      importance: 'CRT enables efficient computation in modular arithmetic, which is vital for cryptographic performance.',
      detailedExplanation: `CRT allows large modular exponentiations to be broken into smaller, parallel computations, significantly improving efficiency. In RSA, CRT is used to optimize decryption and signing operations by reducing the size of the numbers involved.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=ru7mWZJlRQg'],
      externalLinks: [
        { title: 'Chinese Remainder Theorem', url: 'https://en.wikipedia.org/wiki/Chinese_remainder_theorem' }
      ]
    }
  },
  {
    id: 'rsa-algorithm',
    name: 'The RSA Algorithm',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit III',
    content: {
      introduction: 'RSA is a widely used public-key cryptosystem that enables secure data transmission and digital signatures.',
      definition: 'RSA (Rivest–Shamir–Adleman) is an asymmetric cryptographic algorithm based on the difficulty of factoring large integers.',
      realWorldExample: 'RSA is used in SSL/TLS for secure web browsing and in digital signature schemes.',
      realWorldUse: 'Used for secure key exchange, digital signatures, and data encryption.',
      importance: 'RSA is foundational to modern internet security and e-commerce.',
      detailedExplanation: `RSA involves key generation (choosing two large primes, computing modulus n, public and private exponents), encryption (c = m^e mod n), and decryption (m = c^d mod n). Its security relies on the computational difficulty of factoring n.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=wXB-V_Keiu8'],
      externalLinks: [
        { title: 'RSA Algorithm', url: 'https://en.wikipedia.org/wiki/RSA_(cryptosystem)' }
      ]
    }
  },
  {
    id: 'key-management',
    name: 'Key Management',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit III',
    content: {
      introduction: 'Key management refers to the processes and mechanisms used to handle cryptographic keys throughout their lifecycle.',
      definition: 'It includes key generation, distribution, storage, rotation, and destruction.',
      realWorldExample: 'Enterprises use key management systems (KMS) to securely manage encryption keys for cloud storage.',
      realWorldUse: 'Used in all cryptographic systems to ensure the security and integrity of keys.',
      importance: 'Proper key management is critical to maintaining the security of encrypted data.',
      detailedExplanation: `Key management involves secure generation, exchange, storage, and destruction of keys. Weaknesses in key management can compromise the entire cryptographic system. Automated KMS solutions are widely used in cloud and enterprise environments.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=6g6z1MGCG2E'],
      externalLinks: [
        { title: 'Key Management', url: 'https://en.wikipedia.org/wiki/Key_management' }
      ]
    }
  },
  {
    id: 'diffie-hellman-key-exchange',
    name: 'Diffie-Hellman Key Exchange',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit III',
    content: {
      introduction: 'Diffie-Hellman is a method for securely exchanging cryptographic keys over a public channel.',
      definition: 'It allows two parties to establish a shared secret key, used for symmetric encryption, without transmitting the key itself.',
      realWorldExample: 'Used in protocols like TLS to establish session keys for secure communication.',
      realWorldUse: 'Widely used in secure internet protocols and VPNs.',
      importance: 'It was the first practical method for public key exchange and remains fundamental to secure communications.',
      detailedExplanation: `Diffie-Hellman relies on the difficulty of computing discrete logarithms. Each party generates a private and public value, exchanges the public value, and computes the shared secret. Vulnerable to man-in-the-middle attacks if not authenticated.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=NmM9HA2MQGI'],
      externalLinks: [
        { title: 'Diffie-Hellman Key Exchange', url: 'https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange' }
      ]
    }
  },
  {
    id: 'elliptic-curve-arithmetic',
    name: 'Elliptic Curve Arithmetic',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit III',
    content: {
      introduction: 'Elliptic curve arithmetic is the mathematical foundation for elliptic curve cryptography (ECC).',
      definition: 'It involves operations (addition, doubling, scalar multiplication) on points defined by elliptic curve equations over finite fields.',
      realWorldExample: 'Used in ECC-based protocols for secure mobile communications and digital signatures.',
      realWorldUse: 'Applied in modern cryptographic systems for efficiency and security.',
      importance: 'ECC offers strong security with smaller key sizes compared to traditional algorithms like RSA.',
      detailedExplanation: `Elliptic curve arithmetic enables cryptographic operations that are computationally hard to reverse, such as the elliptic curve discrete logarithm problem. This underpins the security of ECC.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=3E7QWLyD8uE'],
      externalLinks: [
        { title: 'Elliptic Curve Arithmetic', url: 'https://en.wikipedia.org/wiki/Elliptic_curve_cryptography' }
      ]
    }
  },
  {
    id: 'elliptic-curve-cryptography',
    name: 'Elliptic Curve Cryptography',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit III',
    content: {
      introduction: 'Elliptic Curve Cryptography (ECC) is a public-key cryptography approach based on elliptic curve theory.',
      definition: 'ECC uses the algebraic structure of elliptic curves over finite fields to create secure cryptographic keys.',
      realWorldExample: 'ECC is used in Bitcoin, secure messaging apps, and modern SSL/TLS certificates.',
      realWorldUse: 'Used for encryption, digital signatures, and key exchange.',
      importance: 'ECC provides high security with smaller keys, making it efficient for mobile and IoT devices.',
      detailedExplanation: `ECC is based on the difficulty of the elliptic curve discrete logarithm problem. It enables secure, efficient cryptographic operations and is increasingly adopted in industry standards.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=3E7QWLyD8uE'],
      externalLinks: [
        { title: 'Elliptic Curve Cryptography', url: 'https://en.wikipedia.org/wiki/Elliptic_curve_cryptography' }
      ]
    }
  },
  {
    id: 'authentication-requirements',
    name: 'Authentication Requirements',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit III',
    content: {
      introduction: 'Authentication requirements define what is needed to verify the identity of users and systems in a secure environment.',
      definition: 'They include assurance of message source, integrity, and protection against replay and masquerade attacks.',
      realWorldExample: 'Multi-factor authentication in online banking ensures only authorized users access accounts.',
      realWorldUse: 'Used in all secure systems to prevent unauthorized access.',
      importance: 'Authentication is a cornerstone of information security.',
      detailedExplanation: `Authentication requirements include verifying the source of information, ensuring message integrity, and protecting against replay and impersonation. These are implemented through protocols and cryptographic techniques.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=3E7QWLyD8uE'],
      externalLinks: [
        { title: 'Authentication Requirements', url: 'https://en.wikipedia.org/wiki/Authentication' }
      ]
    }
  },
  {
    id: 'authentication-functions',
    name: 'Authentication Functions',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit III',
    content: {
      introduction: 'Authentication functions are cryptographic algorithms used to verify the authenticity of messages and users.',
      definition: 'They include message authentication codes (MACs), hash functions, and digital signatures.',
      realWorldExample: 'HMAC is used in API authentication to ensure message integrity and authenticity.',
      realWorldUse: 'Used in secure communications, software updates, and digital signatures.',
      importance: 'Authentication functions are essential for trust in digital systems.',
      detailedExplanation: `Authentication functions provide mechanisms to verify the origin and integrity of messages. They are implemented using cryptographic algorithms like MACs and hash functions.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=3E7QWLyD8uE'],
      externalLinks: [
        { title: 'Authentication Functions', url: 'https://en.wikipedia.org/wiki/Message_authentication_code' }
      ]
    }
  },
  {
    id: 'message-authentication-codes',
    name: 'Message Authentication Codes',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit III',
    content: {
      introduction: 'A Message Authentication Code (MAC) is a short piece of information used to authenticate a message and ensure its integrity.',
      definition: 'MACs are generated by applying a secret key to a message using a cryptographic algorithm.',
      realWorldExample: 'MACs are used in financial transactions to verify the authenticity of messages.',
      realWorldUse: 'Used in secure communications, payment systems, and software distribution.',
      importance: 'MACs protect against message tampering and forgery.',
      detailedExplanation: `A MAC is computed using a secret key and a message. The recipient, knowing the key, can verify the MAC to ensure the message was not altered. HMAC is a widely used MAC based on hash functions.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=3E7QWLyD8uE'],
      externalLinks: [
        { title: 'Message Authentication Code', url: 'https://en.wikipedia.org/wiki/Message_authentication_code' }
      ]
    }
  },
  {
    id: 'hash-functions',
    name: 'Hash Functions',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit III',
    content: {
      introduction: 'Hash functions are mathematical algorithms that map data of arbitrary size to a fixed-size output.',
      definition: 'A hash function takes an input and produces a fixed-size string, which is typically a digest that uniquely represents the input.',
      realWorldExample: 'SHA-256 is used in blockchain technology to secure transactions.',
      realWorldUse: 'Used in digital signatures, data integrity checks, and password storage.',
      importance: 'Hash functions are essential for data integrity and security in digital systems.',
      detailedExplanation: `Hash functions must be collision-resistant, preimage-resistant, and fast to compute. They are used in many cryptographic protocols to ensure data integrity and authenticity.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=3E7QWLyD8uE'],
      externalLinks: [
        { title: 'Hash Function', url: 'https://en.wikipedia.org/wiki/Hash_function' }
      ]
    }
  },
  {
    id: 'security-hash-functions-macs',
    name: 'Security of Hash Functions and MACs',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit III',
    content: {
      introduction: 'The security of hash functions and MACs is critical for the integrity and authenticity of digital information.',
      definition: 'Security properties include collision resistance, preimage resistance, and resistance to forgery.',
      realWorldExample: 'Attacks on weak hash functions (like MD5) have led to real-world security breaches.',
      realWorldUse: 'Used in all secure communication protocols and digital signature schemes.',
      importance: 'Weaknesses in hash functions or MACs can compromise entire security systems.',
      detailedExplanation: `Secure hash functions and MACs must resist various attacks, including collision, preimage, and length extension attacks. Regular updates and use of strong algorithms are necessary for maintaining security.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=3E7QWLyD8uE'],
      externalLinks: [
        { title: 'Security of Hash Functions', url: 'https://en.wikipedia.org/wiki/Cryptographic_hash_function' }
      ]
    }
  }
]; 