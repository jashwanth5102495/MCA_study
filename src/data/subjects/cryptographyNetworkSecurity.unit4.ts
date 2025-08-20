import { Topic } from '../syllabus';

export const cryptographyNetworkSecurityUnit4: Topic[] = [
  {
    id: 'digital-signatures',
    name: 'Digital Signatures',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit IV',
    content: {
      introduction: 'Digital signatures provide a way to verify the authenticity and integrity of digital messages or documents.',
      definition: 'A digital signature is a cryptographic value that is calculated from the data and a secret key known only by the signer.',
      realWorldExample: 'Digital signatures are used in software distribution to verify the source and integrity of files.',
      realWorldUse: 'Used in electronic contracts, secure email, and blockchain transactions.',
      importance: 'They ensure non-repudiation, authenticity, and integrity in digital communications.',
      detailedExplanation: `Digital signatures use asymmetric cryptography. The sender signs a message with their private key, and the recipient verifies it with the sender’s public key. This process ensures the message was not altered and was sent by the claimed sender.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=GSIDS_lvRv4'],
      externalLinks: [
        { title: 'Digital Signature', url: 'https://en.wikipedia.org/wiki/Digital_signature' }
      ]
    }
  },
  {
    id: 'authentication-protocols',
    name: 'Authentication Protocols',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit IV',
    content: {
      introduction: 'Authentication protocols are standardized procedures for verifying the identity of users and systems.',
      definition: 'They use cryptographic techniques to ensure secure communication and prevent unauthorized access.',
      realWorldExample: 'Kerberos is a widely used authentication protocol in enterprise networks.',
      realWorldUse: 'Used in network security, secure login systems, and distributed computing.',
      importance: 'Authentication protocols are essential for secure access control and data protection.',
      detailedExplanation: `Authentication protocols define how parties prove their identities to each other. They use cryptographic methods like challenge-response, digital signatures, and certificates to prevent impersonation and replay attacks.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=GSIDS_lvRv4'],
      externalLinks: [
        { title: 'Authentication Protocol', url: 'https://en.wikipedia.org/wiki/Authentication_protocol' }
      ]
    }
  },
  {
    id: 'digital-signature-standard',
    name: 'Digital Signature Standard',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit IV',
    content: {
      introduction: 'The Digital Signature Standard (DSS) is a federal standard for digital signatures.',
      definition: 'DSS specifies algorithms for generating and verifying digital signatures, such as DSA, RSA, and ECDSA.',
      realWorldExample: 'DSS is used in government and financial sectors for secure document signing.',
      realWorldUse: 'Used in secure communications, document management, and compliance systems.',
      importance: 'DSS ensures interoperability and security in digital signature implementations.',
      detailedExplanation: `DSS defines the requirements for digital signature algorithms, including key generation, signature creation, and verification. It is widely adopted in secure systems and regulatory frameworks.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=GSIDS_lvRv4'],
      externalLinks: [
        { title: 'Digital Signature Standard', url: 'https://en.wikipedia.org/wiki/Digital_Signature_Standard' }
      ]
    }
  },
  {
    id: 'kerberos',
    name: 'Kerberos',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit IV',
    content: {
      introduction: 'Kerberos is a network authentication protocol designed to provide strong authentication for client-server applications.',
      definition: 'It uses secret-key cryptography and a trusted third party to authenticate users and services.',
      realWorldExample: 'Kerberos is used in Microsoft Active Directory for secure user authentication.',
      realWorldUse: 'Used in enterprise networks, single sign-on systems, and secure communications.',
      importance: 'Kerberos enhances security by preventing password replay and impersonation attacks.',
      detailedExplanation: `Kerberos uses tickets and symmetric key cryptography to authenticate users to services. It relies on a Key Distribution Center (KDC) to issue tickets that prove identity without transmitting passwords over the network.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=GSIDS_lvRv4'],
      externalLinks: [
        { title: 'Kerberos', url: 'https://en.wikipedia.org/wiki/Kerberos_(protocol)' }
      ]
    }
  },
  {
    id: 'x509-authentication-service',
    name: 'X.509 Authentication Service',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit IV',
    content: {
      introduction: 'X.509 is a standard defining the format of public key certificates used in authentication.',
      definition: 'X.509 certificates bind a public key to an identity and are used in many security protocols.',
      realWorldExample: 'SSL/TLS uses X.509 certificates to authenticate websites and encrypt communications.',
      realWorldUse: 'Used in web security, email encryption, and VPNs.',
      importance: 'X.509 enables trust and secure communication over untrusted networks.',
      detailedExplanation: `X.509 certificates are issued by Certificate Authorities (CAs) and contain information about the key, identity, and digital signature. They are essential for establishing secure connections and verifying identities online.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=GSIDS_lvRv4'],
      externalLinks: [
        { title: 'X.509', url: 'https://en.wikipedia.org/wiki/X.509' }
      ]
    }
  },
  {
    id: 'public-key-infrastructure',
    name: 'Public-Key Infrastructure',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit IV',
    content: {
      introduction: 'Public-Key Infrastructure (PKI) is a framework for managing digital certificates and public-key encryption.',
      definition: 'PKI enables secure electronic transfer of information through the use of public and private cryptographic key pairs.',
      realWorldExample: 'PKI is used in secure email, VPNs, and e-commerce transactions.',
      realWorldUse: 'Used in digital signatures, secure communications, and identity management.',
      importance: 'PKI provides the foundation for trust and security in digital communications.',
      detailedExplanation: `PKI includes Certificate Authorities, registration authorities, and certificate management systems. It supports authentication, confidentiality, integrity, and non-repudiation in digital transactions.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=GSIDS_lvRv4'],
      externalLinks: [
        { title: 'Public-Key Infrastructure', url: 'https://en.wikipedia.org/wiki/Public_key_infrastructure' }
      ]
    }
  },
  {
    id: 'ip-security-overview',
    name: 'IP Security Overview',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit IV',
    content: {
      introduction: 'IP Security (IPsec) is a suite of protocols for securing internet protocol (IP) communications.',
      definition: 'IPsec provides authentication, integrity, and confidentiality at the IP layer.',
      realWorldExample: 'IPsec is used in VPNs to secure data transmitted over public networks.',
      realWorldUse: 'Used in site-to-site and remote access VPNs, secure communications, and network security.',
      importance: 'IPsec is essential for protecting data in transit over untrusted networks.',
      detailedExplanation: `IPsec uses protocols like Authentication Header (AH) and Encapsulating Security Payload (ESP) to secure IP packets. It supports various encryption and authentication algorithms for flexible security policies.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=GSIDS_lvRv4'],
      externalLinks: [
        { title: 'IPsec', url: 'https://en.wikipedia.org/wiki/IPsec' }
      ]
    }
  },
  {
    id: 'ip-security-architecture',
    name: 'IP Security Architecture',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit IV',
    content: {
      introduction: 'IPsec architecture defines the framework and components for implementing IP security.',
      definition: 'It includes protocols, security associations, and key management mechanisms.',
      realWorldExample: 'Organizations use IPsec architecture to design secure network infrastructures.',
      realWorldUse: 'Used in enterprise networks, VPNs, and secure communications.',
      importance: 'A well-designed IPsec architecture ensures robust and scalable network security.',
      detailedExplanation: `IPsec architecture consists of security associations, key management, and protocols like AH and ESP. It supports both transport and tunnel modes for flexible deployment.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=GSIDS_lvRv4'],
      externalLinks: [
        { title: 'IPsec Architecture', url: 'https://en.wikipedia.org/wiki/IPsec' }
      ]
    }
  },
  {
    id: 'authentication-header',
    name: 'Authentication Header',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit IV',
    content: {
      introduction: 'Authentication Header (AH) is an IPsec protocol that provides connectionless integrity and data origin authentication.',
      definition: 'AH protects against replay attacks and ensures that data has not been tampered with in transit.',
      realWorldExample: 'AH is used in secure VPNs to authenticate IP packets.',
      realWorldUse: 'Used in network security, VPNs, and secure communications.',
      importance: 'AH is crucial for verifying the authenticity and integrity of IP packets.',
      detailedExplanation: `AH adds a header to IP packets containing authentication information. It does not provide encryption, only authentication and integrity.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=GSIDS_lvRv4'],
      externalLinks: [
        { title: 'Authentication Header', url: 'https://en.wikipedia.org/wiki/IPsec#Authentication_Header_(AH)' }
      ]
    }
  },
  {
    id: 'encapsulating-security-payload',
    name: 'Encapsulating Security Payload',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit IV',
    content: {
      introduction: 'Encapsulating Security Payload (ESP) is an IPsec protocol that provides confidentiality, integrity, and authentication.',
      definition: 'ESP encrypts and/or authenticates IP packets to protect data in transit.',
      realWorldExample: 'ESP is used in VPNs to encrypt data between remote sites.',
      realWorldUse: 'Used in secure communications, VPNs, and network security.',
      importance: 'ESP ensures that data remains confidential and unaltered during transmission.',
      detailedExplanation: `ESP adds a header and trailer to IP packets, providing encryption and optional authentication. It supports various encryption algorithms for flexible security.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=GSIDS_lvRv4'],
      externalLinks: [
        { title: 'Encapsulating Security Payload', url: 'https://en.wikipedia.org/wiki/IPsec#Encapsulating_Security_Payload_(ESP)' }
      ]
    }
  },
  {
    id: 'combining-security-associations',
    name: 'Combining Security Associations',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit IV',
    content: {
      introduction: 'Security associations (SAs) are agreements on security parameters between network entities in IPsec.',
      definition: 'Combining SAs allows for layered security by applying multiple security protocols to the same data.',
      realWorldExample: 'A VPN may use both AH and ESP in combination for enhanced security.',
      realWorldUse: 'Used in complex network security architectures and VPNs.',
      importance: 'Combining SAs provides flexibility and stronger security in network communications.',
      detailedExplanation: `Multiple SAs can be combined in transport or tunnel mode to provide authentication, integrity, and confidentiality. This allows organizations to tailor security to their needs.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=GSIDS_lvRv4'],
      externalLinks: [
        { title: 'Security Association', url: 'https://en.wikipedia.org/wiki/Security_association' }
      ]
    }
  },
  {
    id: 'key-management',
    name: 'Key Management',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit IV',
    content: {
      introduction: 'Key management in IPsec involves the secure generation, distribution, and handling of cryptographic keys.',
      definition: 'It ensures that only authorized parties can access and use cryptographic keys for secure communication.',
      realWorldExample: 'Internet Key Exchange (IKE) is used in IPsec to automate key management.',
      realWorldUse: 'Used in VPNs, secure communications, and network security.',
      importance: 'Effective key management is essential for maintaining the security of IPsec communications.',
      detailedExplanation: `Key management protocols like IKE negotiate and establish security associations, exchange keys, and periodically refresh them to maintain security.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=GSIDS_lvRv4'],
      externalLinks: [
        { title: 'Key Management', url: 'https://en.wikipedia.org/wiki/Internet_Key_Exchange' }
      ]
    }
  }
]; 