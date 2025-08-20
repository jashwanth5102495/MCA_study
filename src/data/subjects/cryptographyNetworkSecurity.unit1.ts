import { Topic } from '../syllabus';

export const cryptographyNetworkSecurityUnit1: Topic[] = [
  {
    id: 'security-trends',
    name: 'Security Trends',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit I',
    content: {
      introduction: 'Security trends reflect the evolving landscape of cyber threats and the corresponding security measures developed to counter them.',
      definition: 'Security trends are patterns and developments in cybersecurity threats, technologies, and practices that shape how organizations protect their digital assets.',
      realWorldExample: 'The rise of ransomware attacks like WannaCry led to increased focus on backup strategies and zero-trust security models in organizations worldwide.',
      realWorldUse: 'Used in strategic security planning, threat assessment, technology adoption decisions, and cybersecurity investment priorities.',
      importance: 'Understanding security trends helps organizations anticipate threats, allocate resources effectively, and implement proactive security measures.',
      detailedExplanation: `Current security trends include the shift from perimeter-based to zero-trust security models, increased focus on cloud security due to widespread cloud adoption, rise of AI-powered security tools and AI-based attacks, growing importance of privacy regulations like GDPR and CCPA, emergence of quantum computing threats to current cryptographic systems, increased sophistication of social engineering attacks, growth in IoT security challenges, and the evolution of ransomware-as-a-service models. Organizations must stay informed about these trends to maintain effective security postures. The COVID-19 pandemic accelerated remote work adoption, creating new security challenges and driving trends toward secure remote access solutions, endpoint security, and cloud-based security services.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=jhXCTbFnK8o',
        'https://www.youtube.com/watch?v=2aHkqB2-46k'
      ],
      externalLinks: [
        { title: 'Cybersecurity Trends', url: 'https://www.cisco.com/c/en/us/products/security/cybersecurity-trends.html' },
        { title: 'Security Threat Landscape', url: 'https://www.sans.org/white-papers/' }
      ]
    }
  },
  {
    id: 'osi-security-architecture',
    name: 'The OSI Security Architecture',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit I',
    content: {
      introduction: 'The OSI Security Architecture provides a systematic framework for understanding and implementing security measures across network layers.',
      definition: 'OSI Security Architecture (X.800) defines security services, mechanisms, and attacks in the context of the seven-layer OSI reference model.',
      realWorldExample: 'Enterprise networks implement security at multiple OSI layers: firewalls at network layer, SSL/TLS at transport layer, and application-level authentication.',
      realWorldUse: 'Applied in network security design, security protocol development, and creating layered defense strategies.',
      importance: 'Provides structured approach to network security, ensuring comprehensive protection across all communication layers.',
      detailedExplanation: `The OSI Security Architecture defines three key concepts: Security Attacks (threats to information security), Security Services (services that enhance security), and Security Mechanisms (techniques used to implement security services). Security attacks include passive attacks (eavesdropping, traffic analysis) and active attacks (masquerade, replay, modification, denial of service). Security services include authentication, access control, data confidentiality, data integrity, and non-repudiation. Security mechanisms include encipherment, digital signatures, access controls, data integrity mechanisms, authentication exchange, traffic padding, routing control, and notarization. The architecture emphasizes that security should be implemented at multiple layers for defense in depth.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2aHkqB2-46k',
        'https://www.youtube.com/watch?v=jhXCTbFnK8o'
      ],
      externalLinks: [
        { title: 'OSI Security Architecture', url: 'https://www.geeksforgeeks.org/osi-security-architecture/' },
        { title: 'Network Security Models', url: 'https://www.tutorialspoint.com/cryptography/cryptography_network_security_model.htm' }
      ]
    }
  },
  {
    id: 'security-attacks',
    name: 'Security Attacks',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit I',
    content: {
      introduction: 'Security attacks are deliberate attempts to circumvent security measures and gain unauthorized access to systems or information.',
      definition: 'Security attacks are actions that compromise the security of information systems by exploiting vulnerabilities to violate security policies.',
      realWorldExample: 'The 2017 Equifax breach involved attackers exploiting a web application vulnerability to access personal data of 147 million people.',
      realWorldUse: 'Understanding attacks helps in threat modeling, security assessment, incident response planning, and defensive strategy development.',
      importance: 'Knowledge of attack types is essential for implementing appropriate countermeasures and building resilient security systems.',
      detailedExplanation: `Security attacks are classified into passive and active attacks. Passive attacks include eavesdropping (intercepting communications) and traffic analysis (analyzing communication patterns without accessing content). These attacks are difficult to detect but can be prevented through encryption. Active attacks include masquerade (impersonating another entity), replay (retransmitting captured data), modification of messages (altering transmitted data), and denial of service (preventing legitimate access to resources). Active attacks are easier to detect but harder to prevent. Other classifications include insider vs. outsider attacks, targeted vs. opportunistic attacks, and automated vs. manual attacks. Modern attacks often combine multiple techniques and may involve advanced persistent threats (APTs) that remain undetected for extended periods.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2aHkqB2-46k',
        'https://www.youtube.com/watch?v=jhXCTbFnK8o'
      ],
      externalLinks: [
        { title: 'Types of Security Attacks', url: 'https://www.geeksforgeeks.org/types-of-security-attacks/' },
        { title: 'Cyber Attack Classifications', url: 'https://www.sans.org/white-papers/36240/' }
      ]
    }
  },
  {
    id: 'security-services',
    name: 'Security Services',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit I',
    content: {
      introduction: 'Security services are fundamental capabilities that protect information systems against various threats and ensure secure communication.',
      definition: 'Security services are processing or communication services that enhance the security of data processing systems and information transfers.',
      realWorldExample: 'Online banking systems implement multiple security services: authentication (user login), confidentiality (encrypted transactions), and integrity (tamper detection).',
      realWorldUse: 'Applied in secure system design, security requirement analysis, and implementation of comprehensive security solutions.',
      importance: 'Security services form the foundation of secure systems by addressing fundamental security requirements and threats.',
      detailedExplanation: `The five primary security services are: Authentication ensures the identity of communicating parties and the source of data. Access Control prevents unauthorized use of resources by controlling who can access what resources under what conditions. Data Confidentiality protects data from unauthorized disclosure through encryption and access controls. Data Integrity ensures that data has not been altered in an unauthorized manner, detecting modifications, insertions, deletions, or replays. Non-repudiation prevents denial of previous commitments or actions, providing proof of origin or delivery. These services can be implemented at different layers of the network stack and often work together to provide comprehensive security. For example, digital signatures provide both authentication and non-repudiation, while encrypted channels provide both confidentiality and integrity.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2aHkqB2-46k',
        'https://www.youtube.com/watch?v=jhXCTbFnK8o'
      ],
      externalLinks: [
        { title: 'Security Services Overview', url: 'https://www.geeksforgeeks.org/security-services-in-network-security/' },
        { title: 'Information Security Services', url: 'https://www.tutorialspoint.com/cryptography/information_security_services.htm' }
      ]
    }
  },
  {
    id: 'security-mechanisms',
    name: 'Security Mechanisms',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit I',
    content: {
      introduction: 'Security mechanisms are specific techniques and tools used to implement security services and protect against security attacks.',
      definition: 'Security mechanisms are technical methods and procedures designed to detect, prevent, or recover from security attacks and implement security services.',
      realWorldExample: 'HTTPS websites use multiple security mechanisms: encryption (confidentiality), digital certificates (authentication), and hash functions (integrity).',
      realWorldUse: 'Applied in security system implementation, protocol design, and creating technical solutions for security requirements.',
      importance: 'Security mechanisms provide the technical foundation for implementing security policies and protecting information systems.',
      detailedExplanation: `Security mechanisms include: Encipherment (encryption/decryption) for confidentiality and some authentication. Digital Signatures for authentication, integrity, and non-repudiation. Access Controls for preventing unauthorized access to resources. Data Integrity mechanisms like checksums and hash functions. Authentication Exchange protocols for verifying identities. Traffic Padding to prevent traffic analysis attacks. Routing Control to ensure messages take secure paths. Notarization by trusted third parties for non-repudiation. These mechanisms can be specific (designed for particular security services) or pervasive (applicable across multiple services). Modern implementations often combine multiple mechanisms, such as TLS using encryption, digital certificates, and hash functions together. The choice of mechanisms depends on security requirements, performance constraints, and threat models.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2aHkqB2-46k',
        'https://www.youtube.com/watch?v=jhXCTbFnK8o'
      ],
      externalLinks: [
        { title: 'Security Mechanisms', url: 'https://www.geeksforgeeks.org/security-mechanisms/' },
        { title: 'Cryptographic Mechanisms', url: 'https://www.tutorialspoint.com/cryptography/cryptography_security_mechanisms.htm' }
      ]
    }
  },
  {
    id: 'network-security-model',
    name: 'A Model for Network Security',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit I',
    content: {
      introduction: 'A network security model provides a systematic framework for understanding and implementing security in networked environments.',
      definition: 'A network security model is a conceptual framework that describes the components, relationships, and processes involved in securing network communications.',
      realWorldExample: 'Corporate VPNs implement a network security model with secure tunnels, authentication servers, and encrypted communications between remote workers and company resources.',
      realWorldUse: 'Applied in security architecture design, threat modeling, security policy development, and network security implementation.',
      importance: 'Provides structured approach to network security, ensuring comprehensive protection and systematic security implementation.',
      detailedExplanation: `A typical network security model includes four key components: Sender and Receiver (communicating parties), Security-related transformation (encryption, authentication), Secret information (keys, passwords), and Trusted third party (certificate authorities, key distribution centers). The model describes how these components interact to provide secure communication. The process typically involves: 1) Sender applies security transformation using secret information, 2) Secure message is transmitted over potentially insecure channel, 3) Receiver applies reverse transformation using corresponding secret information, 4) Trusted third party may facilitate key exchange or authentication. The model must address key management, trust establishment, and security protocol design. Modern implementations include additional components like security gateways, intrusion detection systems, and security management systems.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=2aHkqB2-46k',
        'https://www.youtube.com/watch?v=jhXCTbFnK8o'
      ],
      externalLinks: [
        { title: 'Network Security Model', url: 'https://www.geeksforgeeks.org/network-security-model/' },
        { title: 'Security Architecture', url: 'https://www.tutorialspoint.com/cryptography/cryptography_network_security_model.htm' }
      ]
    }
  },
  {
    id: 'symmetric-ciphers',
    name: 'Symmetric Ciphers',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit I',
    content: {
      introduction: 'Symmetric ciphers use the same key for both encryption and decryption, providing efficient cryptographic protection for data.',
      definition: 'Symmetric ciphers are cryptographic algorithms that use identical keys for encryption and decryption operations.',
      realWorldExample: 'AES encryption in WiFi WPA2/WPA3 protocols uses symmetric ciphers to secure wireless communications between devices and access points.',
      realWorldUse: 'Applied in data encryption, secure communications, file protection, and any scenario requiring fast, efficient cryptographic operations.',
      importance: 'Forms the backbone of modern cryptography due to efficiency and speed, essential for protecting large amounts of data.',
      detailedExplanation: `Symmetric ciphers are characterized by using the same key for encryption and decryption. Key advantages include high speed and efficiency, making them suitable for encrypting large amounts of data. The main challenge is secure key distribution and management. Types include stream ciphers (encrypt one bit/byte at a time) and block ciphers (encrypt fixed-size blocks). Common algorithms include AES (Advanced Encryption Standard), DES (Data Encryption Standard), and RC4. Security depends on key secrecy and algorithm strength. Key management involves secure generation, distribution, storage, and destruction of keys. Modern applications often use hybrid systems combining symmetric ciphers for data encryption with asymmetric ciphers for key exchange. Performance considerations include encryption speed, memory requirements, and hardware implementation efficiency.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=O4xNJsQIO8k',
        'https://www.youtube.com/watch?v=NmM9HA2MQGI'
      ],
      externalLinks: [
        { title: 'Symmetric Encryption', url: 'https://www.geeksforgeeks.org/symmetric-encryption-cryptography/' },
        { title: 'Symmetric Key Cryptography', url: 'https://www.tutorialspoint.com/cryptography/symmetric_encryption.htm' }
      ]
    }
  },
  {
    id: 'classical-encryption-techniques',
    name: 'Classical Encryption Techniques',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit I',
    content: {
      introduction: 'Classical encryption techniques are historical cryptographic methods that laid the foundation for modern cryptography.',
      definition: 'Classical encryption techniques are traditional cryptographic methods developed before the computer age, primarily using manual or mechanical processes.',
      realWorldExample: 'The Caesar cipher was used by Julius Caesar to encrypt military communications, shifting each letter by a fixed number of positions in the alphabet.',
      realWorldUse: 'Studied for understanding cryptographic principles, educational purposes, and as building blocks for modern encryption algorithms.',
      importance: 'Provides foundation for understanding cryptographic concepts and the evolution of encryption techniques.',
      detailedExplanation: `Classical encryption techniques include substitution ciphers (replace plaintext characters with other characters) and transposition ciphers (rearrange plaintext characters). Substitution ciphers include Caesar cipher (shift cipher), monoalphabetic substitution (one-to-one character mapping), and polyalphabetic substitution (multiple substitution alphabets). Transposition ciphers include rail fence cipher and columnar transposition. These techniques are vulnerable to frequency analysis, pattern recognition, and brute force attacks due to limited key space and predictable patterns. However, they demonstrate fundamental cryptographic principles like confusion (obscuring relationship between plaintext and ciphertext) and diffusion (spreading plaintext influence across ciphertext). Modern cryptography builds on these concepts while addressing their weaknesses through complex algorithms, large key spaces, and mathematical foundations.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=sMOZf4GN3oc',
        'https://www.youtube.com/watch?v=O4xNJsQIO8k'
      ],
      externalLinks: [
        { title: 'Classical Ciphers', url: 'https://www.geeksforgeeks.org/classical-cipher-techniques/' },
        { title: 'Historical Cryptography', url: 'https://www.tutorialspoint.com/cryptography/traditional_ciphers.htm' }
      ]
    }
  },
  {
    id: 'symmetric-cipher-model',
    name: 'Symmetric Cipher Model',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit I',
    content: {
      introduction: 'The symmetric cipher model describes the components and processes involved in symmetric key cryptographic systems.',
      definition: 'The symmetric cipher model is a framework that defines the elements and operations of symmetric key encryption and decryption systems.',
      realWorldExample: 'File encryption software follows the symmetric cipher model: user provides password (key), software encrypts file (plaintext to ciphertext), and decrypts using same password.',
      realWorldUse: 'Applied in cryptographic system design, security analysis, and understanding encryption/decryption processes.',
      importance: 'Provides systematic understanding of symmetric cryptography components and their relationships.',
      detailedExplanation: `The symmetric cipher model consists of five components: Plaintext (original message), Encryption algorithm (mathematical function for encryption), Secret key (shared key known to sender and receiver), Ciphertext (encrypted message), and Decryption algorithm (reverse of encryption algorithm). The process involves: 1) Sender uses encryption algorithm and secret key to convert plaintext to ciphertext, 2) Ciphertext is transmitted over insecure channel, 3) Receiver uses decryption algorithm and same secret key to recover plaintext. Security requirements include: algorithm should be strong enough that ciphertext provides no information about plaintext without the key, and the key must remain secret. The model assumes the algorithm is known (Kerckhoffs's principle) and security depends solely on key secrecy. Key management is critical for practical implementation.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=O4xNJsQIO8k',
        'https://www.youtube.com/watch?v=NmM9HA2MQGI'
      ],
      externalLinks: [
        { title: 'Symmetric Cipher Model', url: 'https://www.geeksforgeeks.org/symmetric-encryption-cryptography/' },
        { title: 'Cryptographic Models', url: 'https://www.tutorialspoint.com/cryptography/symmetric_encryption.htm' }
      ]
    }
  },
  {
    id: 'substitution-techniques',
    name: 'Substitution Techniques',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit I',
    content: {
      introduction: 'Substitution techniques replace plaintext characters with other characters according to predetermined rules or mappings.',
      definition: 'Substitution techniques are cryptographic methods that systematically replace each character or group of characters in plaintext with corresponding characters in ciphertext.',
      realWorldExample: 'The Enigma machine used by Germany in WWII employed complex substitution techniques with rotating wheels to encrypt military communications.',
      realWorldUse: 'Applied in historical cryptography, educational examples, and as components of modern encryption algorithms.',
      importance: 'Demonstrates fundamental cryptographic principles and serves as building blocks for more complex encryption methods.',
      detailedExplanation: `Substitution techniques include: Monoalphabetic substitution uses a single substitution alphabet throughout the message (e.g., Caesar cipher, simple substitution cipher). Polyalphabetic substitution uses multiple substitution alphabets, changing the substitution rule during encryption (e.g., Vigenère cipher, Playfair cipher). Homophonic substitution maps each plaintext character to multiple possible ciphertext characters to flatten frequency distribution. Polygram substitution operates on groups of characters rather than individual characters. Weaknesses include vulnerability to frequency analysis (especially monoalphabetic), pattern recognition, and statistical attacks. Strengths include simplicity and historical significance. Modern applications use substitution as one component in complex algorithms like AES, which uses sophisticated substitution boxes (S-boxes) combined with other operations.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=sMOZf4GN3oc',
        'https://www.youtube.com/watch?v=O4xNJsQIO8k'
      ],
      externalLinks: [
        { title: 'Substitution Ciphers', url: 'https://www.geeksforgeeks.org/substitution-cipher/' },
        { title: 'Classical Substitution', url: 'https://www.tutorialspoint.com/cryptography/traditional_ciphers.htm' }
      ]
    }
  },
  {
    id: 'transposition-techniques',
    name: 'Transposition Techniques',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit I',
    content: {
      introduction: 'Transposition techniques rearrange the order of characters in plaintext according to specific patterns or algorithms.',
      definition: 'Transposition techniques are cryptographic methods that encrypt plaintext by systematically rearranging the positions of characters without changing the characters themselves.',
      realWorldExample: 'Military communications have used columnar transposition where messages are written in rows and read in columns according to a key-determined order.',
      realWorldUse: 'Applied in classical cryptography, educational demonstrations, and as components of modern block cipher algorithms.',
      importance: 'Provides diffusion in cryptographic systems and demonstrates how character rearrangement can obscure message content.',
      detailedExplanation: `Transposition techniques include: Rail Fence cipher arranges plaintext in a zigzag pattern across multiple rails and reads off the ciphertext row by row. Columnar transposition writes plaintext in rows of a rectangle and reads columns in an order determined by a keyword. Block transposition divides plaintext into blocks and rearranges characters within each block. Route cipher writes plaintext into a geometric figure and reads it out using a different route. Advantages include preserving character frequency (making frequency analysis ineffective) and providing diffusion. Disadvantages include vulnerability to anagramming attacks and pattern analysis. Modern applications use transposition as part of complex algorithms, such as the permutation operations in DES. Transposition is often combined with substitution to create stronger ciphers that provide both confusion and diffusion.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=sMOZf4GN3oc',
        'https://www.youtube.com/watch?v=O4xNJsQIO8k'
      ],
      externalLinks: [
        { title: 'Transposition Ciphers', url: 'https://www.geeksforgeeks.org/transposition-cipher/' },
        { title: 'Classical Transposition', url: 'https://www.tutorialspoint.com/cryptography/traditional_ciphers.htm' }
      ]
    }
  },
  {
    id: 'steganography',
    name: 'Steganography',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit I',
    content: {
      introduction: 'Steganography is the practice of hiding information within other non-secret data or physical media to avoid detection.',
      definition: 'Steganography is the art and science of concealing messages or information within other seemingly innocent data, images, or media.',
      realWorldExample: 'Digital images can hide secret messages in the least significant bits of pixel values, making the hidden data invisible to casual observation.',
      realWorldUse: 'Applied in covert communications, digital watermarking, copyright protection, and secure information transmission.',
      importance: 'Provides additional layer of security by hiding the existence of secret communication, complementing traditional encryption.',
      detailedExplanation: `Steganography differs from cryptography: cryptography scrambles data to make it unreadable, while steganography hides data to make it undetectable. Types include: Image steganography (hiding data in digital images), Audio steganography (concealing information in sound files), Video steganography (embedding data in video streams), and Text steganography (hiding messages in text documents). Techniques include LSB (Least Significant Bit) insertion, spread spectrum methods, and statistical steganography. Requirements include imperceptibility (hidden data should not be detectable), capacity (amount of data that can be hidden), and robustness (resistance to detection and removal). Applications include digital watermarking for copyright protection, covert communication channels, and data exfiltration. Detection methods (steganalysis) use statistical analysis, visual inspection, and specialized tools to identify hidden data.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=TWEXCYQKyDc',
        'https://www.youtube.com/watch?v=O4xNJsQIO8k'
      ],
      externalLinks: [
        { title: 'Steganography Techniques', url: 'https://www.geeksforgeeks.org/steganography/' },
        { title: 'Digital Steganography', url: 'https://www.tutorialspoint.com/cryptography/cryptography_steganography.htm' }
      ]
    }
  }
];