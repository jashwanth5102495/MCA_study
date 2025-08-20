import { Topic } from '../syllabus';

export const computerNetworksUnit4: Topic[] = [
  {
    id: 'transport-layer-introduction',
    name: 'Introduction to Transport Layer: Introduction',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit IV',
    content: {
      introduction: 'The transport layer provides end-to-end communication services between applications, handling reliability, flow control, and error recovery.',
      definition: 'The transport layer provides process-to-process communication services, including reliable data transfer, flow control, and multiplexing of multiple applications.',
      realWorldExample: 'Like a shipping company that ensures packages are delivered reliably from sender to recipient, handling lost packages and delivery confirmation.',
      realWorldUse: 'Used in all internet applications, web browsing, email, file transfer, and any application requiring reliable data communication.',
      importance: 'The transport layer bridges the gap between network services and application requirements, providing essential reliability and flow control.',
      detailedExplanation: `
The transport layer operates above the network layer and provides communication services directly to application processes. While the network layer provides host-to-host communication, the transport layer extends this to process-to-process communication, allowing multiple applications on the same host to communicate simultaneously with applications on remote hosts. The transport layer handles the complexities of unreliable network service and presents a more reliable interface to applications.

Key transport layer functions include multiplexing and demultiplexing to allow multiple applications to share network services, connection management for connection-oriented protocols, reliable data transfer through error detection and recovery mechanisms, flow control to prevent overwhelming the receiver, and congestion control to prevent network overload. The transport layer also provides different service models ranging from simple unreliable datagram service to fully reliable connection-oriented service, allowing applications to choose the level of service that best matches their requirements.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Vdc8TCESIg8',
        'https://www.youtube.com/watch?v=rL8RSFQG8do'
      ],
      externalLinks: [
        { title: 'Transport Layer', url: 'https://www.geeksforgeeks.org/transport-layer/' },
        { title: 'Transport Layer Functions', url: 'https://www.tutorialspoint.com/data_communication_computer_network/transport_layer.htm' }
      ]
    }
  },
  {
    id: 'transport-layer-protocols',
    name: 'Transport-Layer Protocols',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit IV',
    content: {
      introduction: 'Transport layer protocols provide different levels of service to applications, from simple unreliable delivery to fully reliable connection-oriented communication.',
      definition: 'Transport layer protocols include UDP for simple unreliable datagram service and TCP for reliable connection-oriented communication with flow and congestion control.',
      realWorldExample: 'UDP is like sending postcards (fast but no delivery guarantee), while TCP is like registered mail (slower but guaranteed delivery with tracking).',
      realWorldUse: 'TCP used for web browsing, email, file transfer; UDP used for streaming media, online gaming, and DNS queries.',
      importance: 'Different transport protocols enable applications to choose the appropriate level of service for their specific requirements.',
      detailedExplanation: `
Transport layer protocols provide different service models to meet varying application requirements. Connection-oriented protocols like TCP establish a logical connection between communicating processes before data transfer begins, maintain state information about the connection, and provide reliable data delivery with error recovery and flow control. This approach is suitable for applications that require guaranteed data delivery and can tolerate the additional overhead and latency.

Connectionless protocols like UDP provide a simple datagram service without establishing connections or maintaining state information. Each datagram is treated independently, and the protocol provides minimal services beyond basic error detection. This approach offers lower overhead and latency but places the burden of reliability and flow control on the application. The choice between connection-oriented and connectionless protocols depends on application requirements for reliability, performance, and complexity. Many modern applications use a combination of both protocols, with TCP for control information and UDP for time-sensitive data.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Vdc8TCESIg8',
        'https://www.youtube.com/watch?v=rL8RSFQG8do'
      ],
      externalLinks: [
        { title: 'TCP vs UDP', url: 'https://www.geeksforgeeks.org/differences-between-tcp-and-udp/' },
        { title: 'Transport Protocols', url: 'https://www.tutorialspoint.com/data_communication_computer_network/transport_protocols.htm' }
      ]
    }
  },
  {
    id: 'udp-protocol',
    name: 'UDP (User Datagram Protocol)',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit IV',
    content: {
      introduction: 'UDP is a simple, connectionless transport protocol that provides fast, unreliable data transmission.',
      definition: 'UDP is a lightweight transport protocol that sends datagrams without establishing connections or guaranteeing delivery.',
      realWorldExample: 'Like sending postcards - quick to send but no guarantee of delivery or order of arrival.',
      realWorldUse: 'Used in DNS queries, video streaming, online gaming, and applications requiring speed over reliability.',
      importance: 'UDP enables fast communication for time-sensitive applications where speed is more important than reliability.',
      detailedExplanation: `UDP operates as a connectionless protocol, meaning it sends data without establishing a connection or maintaining state information about the communication. Each UDP datagram is treated independently and contains only essential header information including source port, destination port, length, and checksum. This minimal overhead makes UDP faster than TCP but provides no guarantees about delivery, ordering, or error recovery.

The simplicity of UDP makes it ideal for applications that can tolerate some data loss but require low latency, such as real-time video streaming, online gaming, and DNS lookups. UDP supports both unicast and multicast communication, enabling efficient one-to-many data distribution. Applications using UDP must implement their own reliability mechanisms if needed, such as acknowledgments, retransmissions, and flow control. Despite its limitations, UDP's efficiency and speed make it essential for many network applications where performance is critical.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=Sp1hO5B7jhY',
        'https://www.youtube.com/watch?v=1LYqtkgtSPU'
      ],
      externalLinks: [
        { title: 'UDP Protocol', url: 'https://www.geeksforgeeks.org/user-datagram-protocol-udp/' },
        { title: 'UDP vs TCP', url: 'https://www.tutorialspoint.com/udp-vs-tcp' }
      ]
    }
  },
  {
    id: 'tcp-services',
    name: 'TCP Services',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit IV',
    content: {
      introduction: 'TCP provides reliable, connection-oriented communication services with error detection, flow control, and congestion control.',
      definition: 'TCP services include reliable data delivery, connection management, flow control, error detection and correction, and congestion control.',
      realWorldExample: 'Like registered mail service that guarantees delivery, provides tracking, and ensures proper ordering.',
      realWorldUse: 'Used in web browsing, email, file transfer, and any application requiring reliable data transmission.',
      importance: 'TCP services ensure reliable communication, making it the foundation for most internet applications.',
      detailedExplanation: `TCP provides comprehensive communication services that ensure reliable data transmission between applications. The connection-oriented nature means TCP establishes a virtual connection before data transfer and maintains state information throughout the communication. TCP guarantees that data arrives in the correct order, without duplication, and without errors through sequence numbers, acknowledgments, and retransmission mechanisms. Flow control prevents fast senders from overwhelming slow receivers using a sliding window mechanism that adjusts the transmission rate based on receiver capacity. Error detection uses checksums to identify corrupted data, while automatic repeat request protocols handle retransmission of lost or corrupted segments. Congestion control algorithms help prevent network congestion and ensure fair bandwidth sharing among multiple connections.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=4IMc3CaMhyY'],
      externalLinks: [{ title: 'TCP Services', url: 'https://www.geeksforgeeks.org/services-provided-by-tcp/' }]
    }
  },
  {
    id: 'www',
    name: 'World Wide Web (WWW)',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit IV',
    content: {
      introduction: 'The World Wide Web is a global information system that uses HTTP protocol to access and share documents over the internet.',
      definition: 'WWW is an application-layer service that provides a distributed hypermedia system for accessing and sharing information using web browsers and servers.',
      realWorldExample: 'Like a global library where you can instantly access books, articles, and multimedia from anywhere in the world.',
      realWorldUse: 'Used for web browsing, online shopping, social media, education, entertainment, and most internet-based services.',
      importance: 'WWW revolutionized information access and communication, becoming the primary interface for internet services.',
      detailedExplanation: `The World Wide Web operates on a client-server architecture where web browsers request resources from web servers using HTTP protocol. Web pages are written in HTML and can include multimedia content, scripts, and links to other resources. URLs provide a standardized way to identify and locate web resources. The web uses a hypertext system where documents contain links to other documents, creating an interconnected information space. Web technologies include HTML for content structure, CSS for presentation, JavaScript for interactivity, and various server-side technologies for dynamic content generation. HTTP protocol defines how browsers and servers communicate, including request methods, status codes, and headers.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=J8hzJxb0rpc'],
      externalLinks: [{ title: 'World Wide Web', url: 'https://www.geeksforgeeks.org/world-wide-web-www/' }]
    }
  },
  {
    id: 'email',
    name: 'Electronic Mail (EMAIL)',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit IV',
    content: {
      introduction: 'Email is an electronic messaging system that enables users to send and receive messages over computer networks.',
      definition: 'Email is an application-layer service that provides store-and-forward messaging using protocols like SMTP, POP3, and IMAP.',
      realWorldExample: 'Like traditional postal mail but delivered electronically with features for attachments, forwarding, and instant delivery.',
      realWorldUse: 'Used for personal communication, business correspondence, marketing, notifications, and automated system messages.',
      importance: 'Email remains one of the most important internet applications for communication and information exchange.',
      detailedExplanation: `Email systems consist of mail user agents for composing and reading messages, mail transfer agents for routing messages between servers, and mail delivery agents for final delivery to user mailboxes. SMTP handles message transmission between servers, while POP3 and IMAP protocols enable clients to retrieve messages from servers. Email addresses follow the format user@domain, where the domain part is used for routing messages to the appropriate mail server. MIME enables email to carry various content types including text, images, audio, and attachments. Modern email systems include features like spam filtering, virus scanning, encryption for security, and integration with calendars and contact management.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=x28ciavQ4mI'],
      externalLinks: [{ title: 'Email Systems', url: 'https://www.geeksforgeeks.org/e-mail-electronic-mail/' }]
    }
  },
  {
    id: 'dns',
    name: 'Domain Name System (DNS)',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit IV',
    content: {
      introduction: 'DNS is a hierarchical naming system that translates human-readable domain names into IP addresses.',
      definition: 'DNS is a distributed database system that provides name resolution services, mapping domain names to IP addresses and other resource records.',
      realWorldExample: 'Like a phone book that translates names into phone numbers, DNS translates website names into IP addresses.',
      realWorldUse: 'Used in all internet communications, web browsing, email delivery, and any service requiring name resolution.',
      importance: 'DNS is essential for internet usability, allowing users to access resources using memorable names instead of numeric IP addresses.',
      detailedExplanation: `DNS operates as a hierarchical, distributed database system with multiple levels including root servers, top-level domain servers, and authoritative name servers. The DNS namespace is organized as an inverted tree with the root at the top, followed by top-level domains, second-level domains, and subdomains. DNS resolution involves recursive queries where resolvers contact multiple servers to obtain the final answer. DNS records include various types such as A records for IPv4 addresses, AAAA records for IPv6 addresses, MX records for mail servers, and CNAME records for aliases. DNS caching improves performance by storing frequently accessed records at various levels including local resolvers, ISP servers, and client systems.`,
      youtubeLinks: ['https://www.youtube.com/watch?v=mpQZVYPuDGU'],
      externalLinks: [{ title: 'DNS System', url: 'https://www.geeksforgeeks.org/domain-name-system-dns-in-application-layer/' }]
    }
  },
  {
    id: 'tcp-features',
    name: 'TCP Features',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit IV',
    content: {
      introduction: 'TCP features include connection establishment, reliable delivery, flow control, and congestion management mechanisms.',
      definition: 'TCP features encompass the specific mechanisms and characteristics that enable reliable, ordered, and error-checked data transmission.',
      realWorldExample: 'Like a telephone conversation with confirmation of connection, clear communication, and automatic volume adjustment.',
      realWorldUse: 'Implemented in all TCP-based applications including web servers, email clients, and file transfer systems.',
      importance: 'TCP features ensure robust communication that can handle network problems and varying conditions.',
      detailedExplanation: `TCP incorporates numerous features that distinguish it from simpler transport protocols. Connection establishment uses a three-way handshake to synchronize sequence numbers and establish communication parameters. The reliable delivery mechanism uses sequence numbers to order data and acknowledgments to confirm receipt, with automatic retransmission of lost segments. TCP maintains a sliding window for efficient data transmission while respecting receiver buffer limitations. Additional TCP features include duplicate detection to handle retransmitted segments, connection termination procedures to gracefully close connections, and various timer mechanisms to handle different timeout scenarios. TCP also implements sophisticated algorithms for round-trip time estimation, congestion window management, and fast retransmit/fast recovery procedures. The protocol includes options for performance enhancement such as window scaling, selective acknowledgments, and timestamp options. These features work together to provide a robust communication service that adapts to varying network conditions while maintaining reliability and efficiency.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=4IMc3CaMhyY',
        'https://www.youtube.com/watch?v=F27PLin3TV0'
      ],
      externalLinks: [
        { title: 'TCP Features', url: 'https://www.geeksforgeeks.org/features-of-tcp/' },
        { title: 'TCP Characteristics', url: 'https://www.tutorialspoint.com/tcp-ip/tcp_ip_transport_layer.htm' }
      ]
    }
  },
  {
    id: 'tcp-connection',
    name: 'A TCP Connection',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit IV',
    content: {
      introduction: 'TCP connections provide reliable, full-duplex communication channels between applications using connection establishment and termination procedures.',
      definition: 'A TCP connection is a virtual communication path established between two endpoints using three-way handshake and terminated using connection teardown procedures.',
      realWorldExample: 'Like making a phone call - dial, wait for answer, talk, then hang up when finished.',
      realWorldUse: 'Used in all TCP-based applications for establishing reliable communication sessions between clients and servers.',
      importance: 'TCP connections ensure both parties are ready to communicate and provide a framework for reliable data exchange.',
      detailedExplanation: `TCP connection establishment uses a three-way handshake procedure to synchronize sequence numbers and establish communication parameters. The client sends a SYN segment with an initial sequence number, the server responds with SYN-ACK containing its own sequence number and acknowledgment of the client's sequence number, and the client completes the handshake with an ACK segment. This process ensures both parties are ready to communicate and have agreed on starting sequence numbers. Connection termination typically uses a four-way handshake where each direction of the connection is closed independently. When an application finishes sending data, it sends a FIN segment, which is acknowledged by the receiver. The receiver then sends its own FIN when ready to close its direction, which is acknowledged by the original sender. This graceful termination ensures all data is properly transmitted and received. TCP also handles abnormal termination scenarios using RST segments for immediate connection reset. Connection state management tracks the various phases of connection lifecycle, ensuring proper protocol operation and resource management.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=F27PLin3TV0',
        'https://www.youtube.com/watch?v=4IMc3CaMhyY'
      ],
      externalLinks: [
        { title: 'TCP Connection', url: 'https://www.geeksforgeeks.org/tcp-connection-establishment/' },
        { title: 'TCP Handshake', url: 'https://www.tutorialspoint.com/tcp-ip/tcp_ip_transport_layer.htm' }
      ]
    }
  },
  {
    id: 'tcp-congestion-control',
    name: 'TCP Congestion Control',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit IV',
    content: {
      introduction: 'TCP congestion control prevents network overload by regulating the rate at which data is sent into the network.',
      definition: 'TCP congestion control algorithms adjust transmission rates to prevent network congestion and ensure fair bandwidth sharing among users.',
      realWorldExample: 'Like traffic lights and speed limits that regulate car flow to prevent highway congestion.',
      realWorldUse: 'Implemented in TCP, network routers, and traffic management systems to maintain network performance.',
      importance: 'Congestion control prevents network collapse and ensures fair resource allocation among competing users.',
      detailedExplanation: `TCP congestion control algorithms monitor network conditions and adjust transmission rates to prevent congestion collapse. TCP implements several congestion control mechanisms including slow start, which gradually increases the transmission rate to probe available bandwidth, congestion avoidance, which maintains transmission rates near the optimal level, and fast retransmit/fast recovery, which quickly responds to isolated packet losses without entering slow start. The congestion window (cwnd) represents the amount of unacknowledged data that can be in transit, and it's adjusted based on network feedback. When congestion is detected through packet loss or explicit congestion notification, the sender reduces its transmission rate. Modern congestion control algorithms like CUBIC, BBR, and Reno use different approaches to balance throughput, fairness, and responsiveness. Network-assisted congestion control involves routers providing explicit feedback about congestion conditions, while end-to-end approaches rely solely on endpoint observations. Effective congestion control is crucial for maintaining network stability and performance as traffic loads vary.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=kY-pUxBAWXs',
        'https://www.youtube.com/watch?v=4IMc3CaMhyY'
      ],
      externalLinks: [
        { title: 'TCP Congestion Control', url: 'https://www.geeksforgeeks.org/congestion-control-in-computer-networks/' },
        { title: 'Congestion Control Algorithms', url: 'https://www.tutorialspoint.com/tcp-congestion-control' }
      ]
    }
  },
  {
    id: 'flow-control',
    name: 'Flow Control',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit IV',
    content: {
      introduction: 'Flow control manages the rate of data transmission between sender and receiver to prevent buffer overflow.',
      definition: 'Flow control mechanisms ensure that fast senders do not overwhelm slow receivers by regulating data transmission rates.',
      realWorldExample: 'Like a water valve that controls flow rate to prevent a bucket from overflowing.',
      realWorldUse: 'Used in TCP connections, serial communications, and any system where sender and receiver speeds differ.',
      importance: 'Flow control prevents data loss due to buffer overflow and ensures efficient communication between devices with different processing speeds.',
      detailedExplanation: `Flow control addresses the problem of speed mismatch between sender and receiver by providing mechanisms to regulate data transmission rates. TCP implements flow control using a sliding window protocol where the receiver advertises its available buffer space through the window size field in TCP headers. The sender cannot transmit more data than the receiver can buffer, preventing overflow and ensuring reliable delivery. The sliding window mechanism allows for efficient data transmission by permitting multiple outstanding segments while respecting receiver limitations. As the receiver processes data and frees buffer space, it updates the advertised window size, allowing the sender to transmit additional data. Window scaling options enable larger window sizes for high-bandwidth, high-delay networks. Flow control also handles zero window situations where the receiver's buffer is full, using window probes to detect when space becomes available. Proper flow control implementation ensures optimal throughput while preventing data loss due to receiver buffer overflow.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=4IMc3CaMhyY',
        'https://www.youtube.com/watch?v=F27PLin3TV0'
      ],
      externalLinks: [
        { title: 'Flow Control', url: 'https://www.geeksforgeeks.org/flow-control-in-data-link-layer/' },
        { title: 'TCP Flow Control', url: 'https://www.tutorialspoint.com/tcp-flow-control' }
      ]
    }
  },
  {
    id: 'error-control',
    name: 'Error Control',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit IV',
    content: {
      introduction: 'Error control mechanisms detect and correct transmission errors to ensure reliable data communication.',
      definition: 'Error control includes error detection, error correction, and retransmission mechanisms to handle data corruption during transmission.',
      realWorldExample: 'Like spell-check in word processing that detects errors and suggests corrections.',
      realWorldUse: 'Used in all reliable communication systems including TCP, wireless networks, and storage systems.',
      importance: 'Error control ensures data integrity and reliability in the presence of transmission errors and network failures.',
      detailedExplanation: `Error control encompasses various techniques to handle transmission errors and ensure data integrity. Error detection uses checksums, cyclic redundancy checks (CRC), or hash functions to identify corrupted data. When errors are detected, error control mechanisms can either request retransmission of corrupted data (ARQ - Automatic Repeat Request) or attempt to correct errors using forward error correction (FEC) techniques. TCP implements error control through checksums for error detection and automatic retransmission for error recovery. Sequence numbers enable detection of lost, duplicated, or out-of-order segments. Acknowledgment mechanisms confirm successful receipt of data, while timeout and retransmission procedures handle lost segments. Selective acknowledgment (SACK) options allow receivers to acknowledge non-contiguous data blocks, improving retransmission efficiency. Error control also includes mechanisms for handling corrupted acknowledgments and managing retransmission timers. The combination of these techniques ensures reliable data delivery despite the unreliable nature of underlying network infrastructure.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=4IMc3CaMhyY',
        'https://www.youtube.com/watch?v=iantor_BWkI'
      ],
      externalLinks: [
        { title: 'Error Control', url: 'https://www.geeksforgeeks.org/error-control-in-data-link-layer/' },
        { title: 'TCP Error Control', url: 'https://www.tutorialspoint.com/tcp-error-control' }
      ]
    }
  },
  {
    id: 'qos-flow-control',
    name: 'Quality of Service: Flow Control to Improve QoS',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit IV',
    content: {
      introduction: 'QoS flow control mechanisms manage network traffic to provide differentiated service levels and improve overall network performance.',
      definition: 'QoS flow control uses traffic shaping, policing, and scheduling techniques to ensure that critical applications receive adequate network resources.',
      realWorldExample: 'Like express lanes on highways that provide priority service for emergency vehicles while managing regular traffic flow.',
      realWorldUse: 'Used in VoIP systems, video conferencing, streaming services, and enterprise networks requiring guaranteed performance.',
      importance: 'QoS flow control ensures critical applications maintain acceptable performance levels while efficiently utilizing network resources.',
      detailedExplanation: `QoS flow control implements various mechanisms to manage network traffic and provide differentiated service levels. Traffic shaping smooths traffic flows by buffering packets and releasing them at controlled rates, reducing burstiness and improving network utilization. Traffic policing monitors traffic flows and drops or marks packets that exceed specified rates, enforcing service level agreements. Queue management techniques like weighted fair queuing (WFQ) and class-based queuing (CBQ) allocate bandwidth among different traffic classes based on priority and service requirements. Flow control mechanisms work in conjunction with admission control policies that limit the number of flows admitted to the network to prevent overload. Advanced QoS implementations include integrated services (IntServ) that provide per-flow guarantees through resource reservation, and differentiated services (DiffServ) that classify packets into service classes for scalable QoS deployment. These mechanisms enable networks to provide predictable performance for real-time applications while maintaining efficient utilization of network resources.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=yHP0nKbwYQE',
        'https://www.youtube.com/watch?v=1WPdGAvbp-0'
      ],
      externalLinks: [
        { title: 'QoS Flow Control', url: 'https://www.geeksforgeeks.org/quality-of-service-qos-in-computer-networks/' },
        { title: 'Traffic Shaping', url: 'https://www.cisco.com/c/en/us/tech/ip/quality-of-service-qos/index.html' }
      ]
    }
  },
  {
    id: 'integrated-services',
    name: 'Integrated Services',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit IV',
    content: {
      introduction: 'Integrated Services (IntServ) provides per-flow QoS guarantees through resource reservation and admission control mechanisms.',
      definition: 'IntServ is a QoS architecture that reserves network resources for individual flows to provide guaranteed service levels.',
      realWorldExample: 'Like reserving a specific table at a restaurant to guarantee service quality for your dining experience.',
      realWorldUse: 'Used in real-time applications, multimedia streaming, and critical business applications requiring guaranteed performance.',
      importance: 'IntServ enables predictable network performance for applications with strict QoS requirements.',
      detailedExplanation: `Integrated Services architecture provides QoS guarantees through resource reservation using the Resource Reservation Protocol (RSVP). The model defines service classes including guaranteed service for applications requiring firm delay bounds, controlled load service for applications needing performance similar to unloaded networks, and best effort service for traditional applications. RSVP enables applications to request specific QoS parameters and reserves resources along the network path. Each router maintains per-flow state information and performs admission control to ensure that accepting new flows will not violate existing guarantees. The architecture includes traffic specification (TSpec) to describe flow characteristics, service specification (RSpec) to define required service levels, and admission control algorithms to determine if resources are available. While IntServ provides strong QoS guarantees, it faces scalability challenges in large networks due to per-flow state maintenance and signaling overhead. Modern implementations often combine IntServ with DiffServ to provide end-to-end QoS while maintaining scalability in core networks.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=yHP0nKbwYQE',
        'https://www.youtube.com/watch?v=1WPdGAvbp-0'
      ],
      externalLinks: [
        { title: 'Integrated Services', url: 'https://www.geeksforgeeks.org/integrated-services-intserv/' },
        { title: 'RSVP Protocol', url: 'https://www.cisco.com/c/en/us/tech/ip/resource-reservation-protocol-rsvp/index.html' }
      ]
    }
  },
  {
    id: 'cryptography-introduction',
    name: 'Cryptography and Network Security: Introduction',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit IV',
    content: {
      introduction: 'Cryptography provides the mathematical foundation for securing network communications through encryption, authentication, and integrity protection.',
      definition: 'Cryptography is the science of securing information through mathematical techniques that transform data into forms that are unintelligible to unauthorized users.',
      realWorldExample: 'Like using secret codes during wartime to protect sensitive military communications from enemy interception.',
      realWorldUse: 'Used in HTTPS websites, online banking, secure messaging, VPNs, and all forms of secure digital communication.',
      importance: 'Cryptography is essential for protecting sensitive data, ensuring privacy, and maintaining trust in digital communications.',
      detailedExplanation: `Cryptography encompasses various techniques for protecting information including symmetric encryption where the same key is used for encryption and decryption, asymmetric encryption using public-private key pairs, and hash functions for data integrity verification. The field addresses fundamental security objectives including confidentiality (preventing unauthorized access to information), integrity (ensuring data has not been modified), authentication (verifying the identity of communicating parties), and non-repudiation (preventing denial of actions). Modern cryptographic systems rely on mathematical problems that are computationally difficult to solve without proper keys, such as factoring large numbers or computing discrete logarithms. Cryptographic protocols combine multiple techniques to provide comprehensive security services, such as SSL/TLS for web security, IPSec for VPN connections, and various protocols for secure email and messaging. The strength of cryptographic systems depends on key management, algorithm selection, and proper implementation, making cryptography both a mathematical and engineering discipline essential for network security.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=jhXCTbFnK8o',
        'https://www.youtube.com/watch?v=2aHkqB2-46k'
      ],
      externalLinks: [
        { title: 'Cryptography Basics', url: 'https://www.geeksforgeeks.org/cryptography-introduction/' },
        { title: 'Network Security', url: 'https://www.tutorialspoint.com/cryptography/index.htm' }
      ]
    }
  },
  {
    id: 'confidentiality',
    name: 'Confidentiality',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit IV',
    content: {
      introduction: 'Confidentiality ensures that information is accessible only to authorized parties and protected from unauthorized disclosure.',
      definition: 'Confidentiality is a security principle that prevents unauthorized access to sensitive information through encryption and access control mechanisms.',
      realWorldExample: 'Like sealing a letter in an envelope so only the intended recipient can read its contents.',
      realWorldUse: 'Used in secure communications, data storage, financial transactions, and any scenario requiring information privacy.',
      importance: 'Confidentiality protects sensitive data, maintains privacy, and prevents unauthorized access to critical information.',
      detailedExplanation: `Confidentiality is achieved through various cryptographic techniques, primarily encryption algorithms that transform plaintext into ciphertext using cryptographic keys. Symmetric encryption algorithms like AES use the same key for encryption and decryption, providing efficient protection for large amounts of data. Asymmetric encryption algorithms like RSA use public-private key pairs, enabling secure communication without prior key exchange. The strength of confidentiality protection depends on the encryption algorithm, key length, and key management practices. Modern systems often use hybrid approaches that combine symmetric and asymmetric encryption to balance security and performance. Confidentiality also involves access control mechanisms that restrict who can access encrypted data and under what circumstances. Key management is crucial for maintaining confidentiality, including secure key generation, distribution, storage, and revocation procedures. Additional techniques like steganography can hide the existence of sensitive information, while secure deletion ensures that confidential data cannot be recovered after it is no longer needed.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=jhXCTbFnK8o',
        'https://www.youtube.com/watch?v=2aHkqB2-46k'
      ],
      externalLinks: [
        { title: 'Data Confidentiality', url: 'https://www.geeksforgeeks.org/confidentiality-integrity-and-availability-cia/' },
        { title: 'Encryption Methods', url: 'https://www.tutorialspoint.com/cryptography/data_encryption_standard.htm' }
      ]
    }
  },
  {
    id: 'other-aspects-security',
    name: 'Other Aspects of Security',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit IV',
    content: {
      introduction: 'Network security encompasses multiple aspects beyond confidentiality, including integrity, authentication, authorization, and availability.',
      definition: 'Security aspects include integrity (data accuracy), authentication (identity verification), authorization (access control), non-repudiation (action accountability), and availability (service accessibility).',
      realWorldExample: 'Like a bank that not only keeps your money safe (confidentiality) but also verifies your identity (authentication), tracks transactions (integrity), and ensures services are always available.',
      realWorldUse: 'Used in comprehensive security systems, enterprise networks, online services, and any system requiring multi-layered protection.',
      importance: 'Multiple security aspects work together to provide comprehensive protection against various types of attacks and threats.',
      detailedExplanation: `Network security requires addressing multiple interconnected aspects to provide comprehensive protection. Integrity ensures that data has not been modified during transmission or storage, typically achieved through hash functions and digital signatures. Authentication verifies the identity of users, devices, or systems, using techniques like passwords, certificates, or biometric verification. Authorization determines what authenticated entities are allowed to do, implementing access control policies and permissions. Non-repudiation prevents parties from denying their actions, using digital signatures and audit trails to provide proof of transactions or communications. Availability ensures that systems and services remain accessible to authorized users, requiring protection against denial-of-service attacks and implementation of redundancy and fault tolerance. Additional security aspects include accountability through logging and monitoring, privacy protection through data minimization and anonymization techniques, and resilience through incident response and recovery procedures. Modern security frameworks integrate these aspects into comprehensive security architectures that address threats at multiple layers, from physical security to application-level protection.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=jhXCTbFnK8o',
        'https://www.youtube.com/watch?v=2aHkqB2-46k'
      ],
      externalLinks: [
        { title: 'Network Security Principles', url: 'https://www.geeksforgeeks.org/network-security/' },
        { title: 'CIA Triad', url: 'https://www.tutorialspoint.com/information_security_cyber_law/information_security_overview.htm' }
      ]
    }
  }
];

export default computerNetworksUnit4;