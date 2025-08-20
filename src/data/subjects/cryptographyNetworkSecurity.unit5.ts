import { Topic } from '../syllabus';

export const cryptographyNetworkSecurityUnit5: Topic[] = [
  {
    id: 'web-security',
    name: 'Web Security',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit V',
    content: {
      introduction: 'Web security encompasses the protection of websites, web applications, and web services from various cyber threats.',
      definition: 'Web security involves implementing measures to protect web-based systems from attacks, data breaches, and unauthorized access.',
      realWorldExample: 'E-commerce websites use web security measures to protect customer payment information and prevent fraud.',
      realWorldUse: 'Used in online banking, e-commerce, social media platforms, and any web-based application.',
      importance: 'Essential for protecting sensitive data, maintaining user trust, and preventing financial losses from cyber attacks.',
      detailedExplanation: `Web security includes multiple layers of protection: input validation to prevent injection attacks, output encoding to prevent XSS, secure session management, and HTTPS encryption. Common threats include SQL injection, cross-site scripting (XSS), cross-site request forgery (CSRF), and session hijacking. Security measures include web application firewalls (WAF), secure coding practices, regular security audits, and penetration testing. Web security is crucial for protecting user privacy and maintaining the integrity of web applications.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'Web Security', url: 'https://en.wikipedia.org/wiki/Web_security' },
        { title: 'OWASP Top Ten', url: 'https://owasp.org/www-project-top-ten/' }
      ]
    }
  },
  {
    id: 'ssl-tls',
    name: 'Secure Socket Layer and Transport Layer Security',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit V',
    content: {
      introduction: 'SSL/TLS protocols provide secure communication over networks by encrypting data between client and server.',
      definition: 'SSL (Secure Socket Layer) and TLS (Transport Layer Security) are cryptographic protocols designed to provide communications security over a computer network.',
      realWorldExample: 'When you visit a website with HTTPS, SSL/TLS encrypts your data to protect it from eavesdroppers.',
      realWorldUse: 'Used in secure web browsing, email, VPN connections, and any application requiring secure communication.',
      importance: 'SSL/TLS is fundamental to internet security, protecting sensitive data like passwords, credit card numbers, and personal information.',
      detailedExplanation: `SSL/TLS works through a handshake process where the client and server agree on encryption parameters and exchange keys. The protocol provides confidentiality (encryption), integrity (message authentication), and authenticity (server authentication). TLS has largely replaced SSL due to security vulnerabilities in older SSL versions. The protocol supports various cipher suites and can be configured for different security levels. Certificate authorities (CAs) issue digital certificates that verify server identity.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'Transport Layer Security', url: 'https://en.wikipedia.org/wiki/Transport_Layer_Security' },
        { title: 'SSL/TLS', url: 'https://en.wikipedia.org/wiki/Transport_Layer_Security' }
      ]
    }
  },
  {
    id: 'intruders',
    name: 'Intruders',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit V',
    content: {
      introduction: 'Intruders are unauthorized individuals or programs that attempt to gain access to computer systems and networks.',
      definition: 'An intruder is any entity that attempts to breach the security of a computer system or network without authorization.',
      realWorldExample: 'Hackers attempting to gain unauthorized access to a company\'s database to steal customer information.',
      realWorldUse: 'Understanding intruders helps in developing security measures and intrusion detection systems.',
      importance: 'Identifying and understanding intruder behavior is crucial for developing effective security defenses.',
      detailedExplanation: `Intruders can be classified into different types: masqueraders (outsiders who penetrate access controls), misfeasors (insiders who exceed their privileges), and clandestine users (insiders who seize supervisory control). Common intrusion techniques include password cracking, social engineering, exploiting software vulnerabilities, and denial-of-service attacks. Understanding intruder motivations and methods helps in developing appropriate security countermeasures and monitoring systems.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'Computer Intrusion', url: 'https://en.wikipedia.org/wiki/Computer_intrusion' },
        { title: 'Cyber Attack', url: 'https://en.wikipedia.org/wiki/Cyberattack' }
      ]
    }
  },
  {
    id: 'intrusion-detection',
    name: 'Intrusion Detection',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit V',
    content: {
      introduction: 'Intrusion detection systems monitor network and system activities to identify potential security threats.',
      definition: 'Intrusion detection is the process of monitoring and analyzing system events to detect signs of security violations.',
      realWorldExample: 'A security system that alerts administrators when it detects unusual login patterns or suspicious network traffic.',
      realWorldUse: 'Used in corporate networks, government systems, and any environment requiring security monitoring.',
      importance: 'Intrusion detection provides early warning of security breaches and helps minimize damage from attacks.',
      detailedExplanation: `Intrusion detection systems (IDS) can be network-based (NIDS) or host-based (HIDS). They use signature-based detection (matching known attack patterns) and anomaly-based detection (identifying unusual behavior). IDS can operate in passive mode (detection only) or active mode (detection and response). False positives and false negatives are common challenges. Integration with security information and event management (SIEM) systems provides comprehensive security monitoring.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'Intrusion Detection System', url: 'https://en.wikipedia.org/wiki/Intrusion_detection_system' },
        { title: 'Network Security Monitoring', url: 'https://en.wikipedia.org/wiki/Network_security_monitoring' }
      ]
    }
  },
  {
    id: 'password-management',
    name: 'Password Management',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit V',
    content: {
      introduction: 'Password management involves creating, storing, and protecting passwords to secure user accounts and systems.',
      definition: 'Password management encompasses policies, procedures, and technologies for handling passwords securely.',
      realWorldExample: 'Password managers like LastPass or 1Password help users create and store strong, unique passwords.',
      realWorldUse: 'Used in all systems requiring user authentication, from personal accounts to enterprise systems.',
      importance: 'Effective password management is crucial for preventing unauthorized access and protecting sensitive information.',
      detailedExplanation: `Password management includes creating strong passwords, secure storage, regular updates, and protection against attacks. Best practices include using complex passwords, avoiding reuse across accounts, and implementing multi-factor authentication. Password hashing and salting protect stored passwords. Password policies should balance security with usability. Modern approaches include passwordless authentication and biometric alternatives.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'Password Management', url: 'https://en.wikipedia.org/wiki/Password_manager' },
        { title: 'Password Policy', url: 'https://en.wikipedia.org/wiki/Password_policy' }
      ]
    }
  },
  {
    id: 'malicious-software',
    name: 'Malicious Software',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit V',
    content: {
      introduction: 'Malicious software (malware) is any software designed to harm computer systems or steal information.',
      definition: 'Malware includes viruses, worms, trojans, ransomware, spyware, and other harmful programs that can damage systems or compromise security.',
      realWorldExample: 'Ransomware like WannaCry that encrypts files and demands payment for decryption keys.',
      realWorldUse: 'Understanding malware helps in developing antivirus software and security defenses.',
      importance: 'Malware poses significant threats to individuals, businesses, and governments, making protection essential.',
      detailedExplanation: `Malware types include viruses (self-replicating programs), worms (network-spreading malware), trojans (disguised malicious programs), ransomware (encrypts files for ransom), and spyware (monitors user activity). Malware can be delivered through email attachments, malicious websites, infected software, or social engineering. Protection includes antivirus software, firewalls, user education, and regular system updates. Advanced persistent threats (APTs) use sophisticated malware for long-term espionage.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'Malware', url: 'https://en.wikipedia.org/wiki/Malware' },
        { title: 'Computer Virus', url: 'https://en.wikipedia.org/wiki/Computer_virus' }
      ]
    }
  },
  {
    id: 'firewalls',
    name: 'Firewalls',
    semester: 3,
    subject: 'Cryptography and Network Security',
    unit: 'Unit V',
    content: {
      introduction: 'Firewalls are network security devices that monitor and control incoming and outgoing network traffic.',
      definition: 'A firewall is a security system that acts as a barrier between a trusted network and untrusted networks, controlling access based on security rules.',
      realWorldExample: 'A corporate firewall that blocks unauthorized access to internal networks while allowing legitimate business traffic.',
      realWorldUse: 'Used in homes, businesses, and organizations to protect networks from external threats.',
      importance: 'Firewalls are fundamental network security components that provide the first line of defense against cyber attacks.',
      detailedExplanation: `Firewalls can be hardware-based (dedicated devices) or software-based (programs on computers). They use packet filtering, stateful inspection, and application-layer filtering to control traffic. Firewalls can be configured to block specific ports, protocols, or IP addresses. Next-generation firewalls (NGFW) include additional features like intrusion prevention, application awareness, and deep packet inspection. Firewall rules should follow the principle of least privilege, allowing only necessary traffic.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=WZqH6YqvZwE'],
      externalLinks: [
        { title: 'Firewall (Computing)', url: 'https://en.wikipedia.org/wiki/Firewall_(computing)' },
        { title: 'Network Security', url: 'https://en.wikipedia.org/wiki/Network_security' }
      ]
    }
  }
]; 