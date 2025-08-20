import { Topic } from '../syllabus';

export const computerNetworksUnit3: Topic[] = [
  {
    id: 'network-layer-services',
    name: 'Introduction to Network Layer: Network-Layer Services',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit III',
    content: {
      introduction: 'The network layer provides end-to-end communication services across multiple networks, handling routing, addressing, and packet forwarding functions.',
      definition: 'Network-layer services include logical addressing, routing, packet forwarding, fragmentation, and reassembly to enable communication across interconnected networks.',
      realWorldExample: 'Like the postal system routing mail from your house to any address worldwide through various post offices, the network layer routes data packets across the internet.',
      realWorldUse: 'Used in all internet communications, routing protocols, VPN connections, and any communication that crosses network boundaries.',
      importance: 'Network layer services enable global connectivity and form the foundation of the internet and all wide-area networking.',
      detailedExplanation: `
The network layer operates above the data link layer and provides services that enable communication between hosts across multiple networks. The primary service is connectionless packet delivery, where each packet is treated independently and routed based on its destination address. This approach provides flexibility and robustness, as packets can take different paths to reach their destination and the network can adapt to failures or congestion.

Key network layer services include logical addressing using hierarchical addresses like IP addresses that identify networks and hosts, routing services that determine the best path for packets to reach their destinations, packet forwarding where routers examine destination addresses and forward packets toward their destinations, and fragmentation and reassembly services that handle packets too large for the underlying network technologies. The network layer also provides error reporting through protocols like ICMP and supports quality of service mechanisms to handle different types of traffic with varying requirements for delay, bandwidth, and reliability.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=rL8RSFQG8do',
        'https://www.youtube.com/watch?v=FTUV0t6JaDA'
      ],
      externalLinks: [
        { title: 'Network Layer Functions', url: 'https://www.geeksforgeeks.org/network-layer-in-osi-model/' },
        { title: 'Network Layer Services', url: 'https://www.tutorialspoint.com/data_communication_computer_network/network_layer.htm' }
      ]
    }
  },
  {
    id: 'packet-switching',
    name: 'Packet Switching',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit III',
    content: {
      introduction: 'Packet switching is a method of data transmission where messages are broken into packets that are independently routed through the network.',
      definition: 'Packet switching divides data into small packets that are transmitted independently through the network, with each packet containing addressing information for routing.',
      realWorldExample: 'Like sending a large document by tearing it into pages, putting each page in a separate envelope with the destination address, and mailing them separately.',
      realWorldUse: 'Used in the internet, most modern data networks, email systems, and virtually all digital communication systems.',
      importance: 'Packet switching enables efficient network resource utilization and provides the foundation for modern internet communication.',
      detailedExplanation: `
Packet switching breaks messages into small, fixed or variable-sized packets that include both data and control information such as source and destination addresses, sequence numbers, and error detection codes. Each packet is treated as an independent entity and can take different routes through the network to reach its destination. Intermediate routers examine the destination address in each packet and forward it toward the destination based on their routing tables.

The advantages of packet switching include efficient bandwidth utilization since network links are shared among multiple communications, robustness because packets can be rerouted around failed links or congested areas, and scalability as the network can handle varying traffic loads dynamically. Packet switching also enables statistical multiplexing where network resources are shared among many users, leading to better overall utilization compared to circuit switching. However, packet switching introduces variable delays as packets may take different paths and experience different queuing delays, requires buffering at intermediate nodes, and needs mechanisms to handle packet loss, duplication, and out-of-order delivery.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=rL8RSFQG8do',
        'https://www.youtube.com/watch?v=FTUV0t6JaDA'
      ],
      externalLinks: [
        { title: 'Packet Switching', url: 'https://www.geeksforgeeks.org/packet-switching-and-delays-in-computer-network/' },
        { title: 'Switching Techniques', url: 'https://www.tutorialspoint.com/data_communication_computer_network/switching_techniques.htm' }
      ]
    }
  },
  {
    id: 'network-layer-performance',
    name: 'Network-Layer Performance',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit III',
    content: {
      introduction: 'Network-layer performance measures the efficiency and quality of packet delivery services across networks.',
      definition: 'Network performance metrics include throughput, delay, packet loss, and jitter that determine the quality of network service.',
      realWorldExample: 'Like measuring highway traffic flow by cars per hour, average travel time, and accident rates to assess road performance.',
      realWorldUse: 'Used in network monitoring, quality of service implementation, capacity planning, and troubleshooting network issues.',
      importance: 'Performance measurement is essential for maintaining network quality, optimizing resource usage, and meeting service level agreements.',
      detailedExplanation: `
Network-layer performance encompasses various metrics that quantify how effectively the network delivers packets from source to destination. The four primary performance metrics are throughput (the actual rate of successful data transmission), delay or latency (the time required for a packet to travel from source to destination), packet loss rate (the percentage of packets that fail to reach their destination), and jitter (the variation in packet arrival times). These metrics are interconnected and often involve trade-offs, such as increased throughput potentially leading to higher delays during congestion.

Performance optimization involves implementing various techniques including traffic engineering to distribute load efficiently across network paths, quality of service mechanisms to prioritize different types of traffic, congestion control algorithms to prevent network overload, and load balancing to distribute traffic across multiple paths or servers. Network administrators use performance monitoring tools to continuously measure these metrics and identify bottlenecks or degradation in service quality. Understanding performance characteristics is crucial for capacity planning, ensuring that networks can handle expected traffic loads while maintaining acceptable service levels for different applications and users.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=6G14NrjekLQ',
        'https://www.youtube.com/watch?v=QKfk7YFILws'
      ],
      externalLinks: [
        { title: 'Network Performance Metrics', url: 'https://www.cisco.com/c/en/us/support/docs/ip/ip-routed-protocols/13769-5.html' },
        { title: 'Network Performance Analysis', url: 'https://www.geeksforgeeks.org/network-performance-metrics/' }
      ]
    }
  },
  {
    id: 'ipv4-addresses',
    name: 'IPv4 Addresses',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit III',
    content: {
      introduction: 'IPv4 addresses are 32-bit numerical identifiers used to uniquely identify devices on IP networks.',
      definition: 'IPv4 addressing is a hierarchical addressing scheme using 32-bit addresses divided into network and host portions.',
      realWorldExample: 'Like postal addresses with country, state, city, and street components, IPv4 addresses have network and host parts for routing.',
      realWorldUse: 'Used in all internet communications, local networks, routing protocols, and network device configuration.',
      importance: 'IPv4 addressing forms the foundation of internet communication and enables global connectivity between billions of devices.',
      detailedExplanation: `
IPv4 addresses consist of 32 bits organized as four 8-bit octets, typically written in dotted decimal notation such as 192.168.1.100. Each octet can range from 0 to 255, providing approximately 4.3 billion possible addresses. IPv4 addresses are hierarchical, with the leftmost bits identifying the network and the rightmost bits identifying the host within that network. The boundary between network and host portions is determined by the subnet mask, which allows for flexible network sizing and efficient routing.

IPv4 addresses are classified into different classes (A, B, C, D, E) based on their intended use and network size. Class A addresses support large networks with many hosts, Class B addresses are for medium-sized networks, and Class C addresses are for smaller networks. Private address ranges (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) are reserved for internal use and are not routable on the public internet. Network Address Translation (NAT) allows multiple devices with private addresses to share public addresses, helping address the IPv4 address exhaustion problem. Subnetting techniques enable organizations to divide their allocated address space into smaller, more manageable subnetworks.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=ddM9AcreVqY',
        'https://www.youtube.com/watch?v=s_Ntt6eTn94'
      ],
      externalLinks: [
        { title: 'IPv4 Addressing', url: 'https://www.geeksforgeeks.org/what-is-ipv4/' },
        { title: 'IPv4 Address Classes', url: 'https://www.tutorialspoint.com/ipv4/ipv4_address_classes.htm' }
      ]
    }
  },
  {
    id: 'internet-protocol',
    name: 'Internet Protocol (IP)',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit III',
    content: {
      introduction: 'The Internet Protocol is the fundamental network-layer protocol responsible for addressing and routing packets across networks.',
      definition: 'IP is a connectionless, best-effort protocol that provides packet addressing, routing, and delivery services across interconnected networks.',
      realWorldExample: 'Like the postal service that routes mail between any two addresses worldwide without guaranteeing delivery time or order.',
      realWorldUse: 'Used as the foundation protocol for all internet communication, including web browsing, email, file transfer, and streaming.',
      importance: 'IP enables global internet connectivity and serves as the universal protocol for network communication across diverse technologies.',
      detailedExplanation: `
The Internet Protocol operates as a connectionless protocol, treating each packet independently without maintaining connection state information. IP packets (datagrams) contain headers with essential information including version number, header length, type of service, total length, identification, flags, fragment offset, time-to-live, protocol, header checksum, source address, and destination address. The protocol provides best-effort delivery, meaning it attempts to deliver packets but does not guarantee delivery, ordering, or error-free transmission.

IP includes mechanisms for fragmentation and reassembly to handle packets that exceed the maximum transmission unit of underlying networks. The time-to-live field prevents packets from circulating indefinitely by limiting the number of hops. Routing in IP networks relies on routing tables maintained by routers, which examine destination addresses and forward packets toward their destinations based on longest prefix matching. IP serves as the foundation for higher-layer protocols like TCP and UDP, which add reliability and other services on top of IP's basic packet delivery service. The protocol's simplicity and flexibility have enabled it to adapt to various network technologies and scale to support the global internet.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=YJGGYKAV4pA',
        'https://www.youtube.com/watch?v=e5DEVa9eSN0'
      ],
      externalLinks: [
        { title: 'Internet Protocol RFC', url: 'https://www.rfc-editor.org/rfc/rfc791.html' },
        { title: 'IP Protocol Overview', url: 'https://www.geeksforgeeks.org/internet-protocol-ip/' }
      ]
    }
  },
  {
    id: 'icmpv4',
    name: 'ICMPv4 (Internet Control Message Protocol)',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit III',
    content: {
      introduction: 'ICMP is a supporting protocol that provides error reporting and diagnostic capabilities for IPv4 networks.',
      definition: 'ICMPv4 is a network-layer protocol used to send error messages and operational information between network devices.',
      realWorldExample: 'Like a postal service sending notification letters when mail cannot be delivered or providing delivery confirmations.',
      realWorldUse: 'Used in network diagnostic tools like ping and traceroute, error reporting by routers, and network monitoring systems.',
      importance: 'ICMP is essential for network troubleshooting, error detection, and maintaining network reliability and performance.',
      detailedExplanation: `
ICMPv4 messages are encapsulated within IP packets and are generated automatically by network devices when they encounter problems processing IP packets or need to provide operational information. Common ICMP message types include Echo Request and Echo Reply used by ping utilities to test connectivity, Destination Unreachable messages indicating delivery failures, Time Exceeded messages sent when packet TTL expires, and Redirect messages informing hosts of better routing paths. Each ICMP message contains a type field, code field for additional specificity, checksum for error detection, and message-specific data.

Network administrators rely heavily on ICMP for diagnostic purposes and network management. The ping utility uses ICMP Echo Request and Reply messages to verify connectivity and measure round-trip times. Traceroute uses ICMP Time Exceeded messages to discover network paths and identify routing problems. Network monitoring tools analyze ICMP messages to detect network failures, performance issues, and security threats. However, ICMP can also be exploited for attacks such as ICMP flooding or information gathering, leading many organizations to implement ICMP filtering policies that block potentially dangerous ICMP traffic while preserving essential diagnostic functionality.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=1JA1alGlzpE',
        'https://www.youtube.com/watch?v=G05y9UKT69s'
      ],
      externalLinks: [
        { title: 'ICMP Protocol', url: 'https://www.geeksforgeeks.org/internet-control-message-protocol-icmp/' },
        { title: 'ICMP Message Types', url: 'https://www.iana.org/assignments/icmp-parameters/icmp-parameters.xhtml' }
      ]
    }
  },
  {
    id: 'mobile-ip',
    name: 'Mobile IP',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit III',
    content: {
      introduction: 'Mobile IP enables mobile devices to maintain network connectivity while changing locations across different networks.',
      definition: 'Mobile IP is a protocol that allows mobile nodes to move between networks while maintaining their network connections and IP addresses.',
      realWorldExample: 'Like forwarding mail from your permanent address to your current location when you travel, ensuring you receive mail anywhere.',
      realWorldUse: 'Used in cellular networks, WiFi roaming, satellite communications, and any scenario requiring seamless mobility.',
      importance: 'Mobile IP is crucial for supporting mobile computing, wireless communications, and maintaining connectivity in dynamic network environments.',
      detailedExplanation: `
Mobile IP addresses the fundamental problem that traditional IP assumes devices remain at fixed network locations, which conflicts with the need for mobile devices to move between networks while maintaining active connections. The protocol introduces concepts of home address (permanent IP address) and care-of address (temporary address at current location). When a mobile node moves to a foreign network, it obtains a care-of address and registers this with its home agent, which then tunnels packets destined for the home address to the care-of address.

The Mobile IP architecture involves three key entities: the mobile node (moving device), home agent (router in the home network), and foreign agent (router in the visited network). The registration process involves the mobile node discovering foreign agents, obtaining a care-of address, and registering with the home agent. Triangle routing occurs when packets from correspondents go through the home agent to reach the mobile node, while reverse tunneling may be used for packets from the mobile node. Mobile IP ensures transparency to higher-layer protocols and applications, enabling seamless mobility for services like VoIP, video conferencing, and real-time applications that require continuous connectivity despite network changes.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=QgKlnkEkTvA',
        'https://www.youtube.com/watch?v=8K2AvKhHmzY'
      ],
      externalLinks: [
        { title: 'Mobile IP Protocol', url: 'https://www.geeksforgeeks.org/mobile-ip-in-network-layer/' },
        { title: 'Mobile IP RFC', url: 'https://www.rfc-editor.org/rfc/rfc3344.html' }
      ]
    }
  },
  {
    id: 'routing-algorithms',
    name: 'Routing Algorithms',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit III',
    content: {
      introduction: 'Routing algorithms determine the best paths for forwarding packets through networks from source to destination.',
      definition: 'Routing algorithms are computational procedures used by routers to build routing tables and make packet forwarding decisions.',
      realWorldExample: 'Like GPS navigation systems calculating the best route between two locations considering traffic, distance, and road conditions.',
      realWorldUse: 'Used in internet routing protocols, network optimization, traffic engineering, and all packet forwarding decisions.',
      importance: 'Routing algorithms are fundamental to network operation, determining network performance, reliability, and efficiency.',
      detailedExplanation: `
Routing algorithms can be classified into several categories based on their characteristics and operation. Distance vector algorithms like Bellman-Ford (used in RIP) have each router maintain distances to all destinations and periodically exchange this information with neighbors. Link state algorithms like Dijkstra's algorithm (used in OSPF) require routers to maintain complete network topology and calculate shortest paths to all destinations. Path vector algorithms (used in BGP) maintain path information to prevent loops in inter-domain routing.

The choice of routing algorithm affects network performance, convergence time, scalability, and resource requirements. Static routing uses manually configured routes that do not change, while dynamic routing algorithms automatically adapt to network changes. Adaptive algorithms respond to current network conditions like congestion or failures, while non-adaptive algorithms use fixed metrics. Modern routing protocols often incorporate features like load balancing across multiple equal-cost paths, fast convergence mechanisms for quick adaptation to changes, policy-based routing for administrative control, and hierarchical routing for scalability in large networks. The effectiveness of routing algorithms directly impacts network performance, fault tolerance, and the ability to efficiently utilize network resources.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=rQGBTU5X3K0',
        'https://www.youtube.com/watch?v=GDme_Gck_Gk'
      ],
      externalLinks: [
        { title: 'Routing Algorithms', url: 'https://www.geeksforgeeks.org/types-of-routing-algorithm/' },
        { title: 'Routing Protocols', url: 'https://www.cisco.com/c/en/us/tech/ip/ip-routing/index.html' }
      ]
    }
  },
  {
    id: 'ipv6',
    name: 'IPv6 (Internet Protocol version 6)',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit III',
    content: {
      introduction: 'IPv6 is the next-generation Internet Protocol designed to replace IPv4 with expanded address space and enhanced features.',
      definition: 'IPv6 uses 128-bit addresses and provides improved addressing, security, and mobility features compared to IPv4.',
      realWorldExample: 'Like upgrading from a small town postal system to a global system that can handle addresses for every grain of sand on Earth.',
      realWorldUse: 'Used in modern internet infrastructure, mobile networks, IoT devices, and gradually replacing IPv4 in all network communications.',
      importance: 'IPv6 is essential for internet growth, addressing IPv4 exhaustion, and supporting the expanding number of connected devices.',
      detailedExplanation: `
IPv6 addresses consist of 128 bits, typically written as eight groups of four hexadecimal digits separated by colons, such as 2001:0db8:85a3:0000:0000:8a2e:0370:7334. This provides approximately 340 undecillion unique addresses, effectively eliminating address scarcity. IPv6 includes several address types: unicast addresses for one-to-one communication, multicast addresses for one-to-many communication, and anycast addresses for communication with the nearest member of a group. The hierarchical address structure enables efficient routing and address allocation.

IPv6 introduces several improvements over IPv4 including simplified header format for more efficient processing, built-in IPSec support for enhanced security, improved support for mobile devices through enhanced mobility features, better quality of service support through flow labeling, and elimination of NAT requirements enabling true end-to-end connectivity. The transition from IPv4 to IPv6 involves various coexistence mechanisms including dual-stack implementation (running both protocols), tunneling IPv6 over IPv4 networks, and translation between IPv6 and IPv4. IPv6 also includes features like stateless address autoconfiguration, neighbor discovery protocol, and improved multicast capabilities that enhance network operation and management.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=ThdO9beHhpA',
        'https://www.youtube.com/watch?v=oItwDXraK1M'
      ],
      externalLinks: [
        { title: 'IPv6 Overview', url: 'https://www.geeksforgeeks.org/what-is-ipv6/' },
        { title: 'IPv6 RFC', url: 'https://www.rfc-editor.org/rfc/rfc8200.html' }
      ]
    }
  },
  {
    id: 'unicast-routing-protocols',
    name: 'Unicast Routing Protocols',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit III',
    content: {
      introduction: 'Unicast routing protocols enable routers to automatically discover and maintain optimal paths for forwarding packets to specific destinations.',
      definition: 'Unicast routing protocols are algorithms and procedures used by routers to exchange routing information and build routing tables for forwarding packets to individual destinations.',
      realWorldExample: 'Internet routers use protocols like OSPF and BGP to automatically learn about network topology changes and update their routing tables to maintain connectivity.',
      realWorldUse: 'Used in internet backbone networks, enterprise networks, and ISP infrastructures to provide automatic route discovery and fault tolerance.',
      importance: 'Essential for maintaining connectivity in large networks and enabling automatic adaptation to network changes and failures.',
      detailedExplanation: `Unicast routing protocols can be classified into interior gateway protocols (IGPs) used within autonomous systems and exterior gateway protocols (EGPs) used between autonomous systems. IGPs include distance vector protocols like RIP that exchange routing tables with neighbors, and link state protocols like OSPF that maintain complete network topology databases. These protocols use various metrics such as hop count, bandwidth, delay, and cost to determine optimal paths.

The protocols handle network convergence when topology changes occur, ensuring that all routers eventually agree on the best paths to each destination. Modern routing protocols include features like load balancing across multiple equal-cost paths, fast convergence mechanisms, and support for different service types. BGP, the primary exterior gateway protocol, uses path vector algorithms and policy-based routing to handle inter-domain routing on the global internet, considering factors beyond simple metrics to implement routing policies and prevent routing loops.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=rQGBTU5X3K0',
        'https://www.youtube.com/watch?v=34_dRW42kYI'
      ],
      externalLinks: [
        { title: 'Routing Protocols Overview', url: 'https://www.geeksforgeeks.org/types-of-routing-protocols/' },
        { title: 'IGP vs EGP Protocols', url: 'https://www.cisco.com/c/en/us/tech/ip/ip-routing/index.html' }
      ]
    }
  },
  {
    id: 'ipv6-addressing',
    name: 'IPv6 Addressing',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit III',
    content: {
      introduction: 'IPv6 addressing provides a vastly expanded address space and improved addressing features compared to IPv4.',
      definition: 'IPv6 addressing uses 128-bit addresses written in hexadecimal notation, providing approximately 340 undecillion unique addresses with hierarchical structure and built-in features.',
      realWorldExample: 'Modern smartphones and IoT devices increasingly use IPv6 addresses like 2001:db8:85a3::8a2e:370:7334 for direct internet connectivity without NAT.',
      realWorldUse: 'Used in modern internet infrastructure, mobile networks, IoT deployments, and gradually replacing IPv4 in all network communications.',
      importance: 'Critical for internet growth, eliminating address scarcity, and supporting the massive number of connected devices in the modern world.',
      detailedExplanation: `IPv6 addresses are 128 bits long, typically written as eight groups of four hexadecimal digits separated by colons. The address space includes unicast addresses for one-to-one communication, multicast addresses for one-to-many communication, and anycast addresses for communication with the nearest member of a group. The hierarchical structure enables efficient routing aggregation and address allocation through regional internet registries.

IPv6 addressing includes several special address types such as loopback addresses, link-local addresses for local network communication, and unique local addresses for private networks. The protocol supports stateless address autoconfiguration, allowing devices to automatically generate their own addresses using network prefixes and interface identifiers. IPv6 also eliminates the need for NAT in most scenarios, enabling true end-to-end connectivity and simplifying network configuration while providing enhanced security and mobility features.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=ThdO9beHhpA',
        'https://www.youtube.com/watch?v=oItwDXraK1M'
      ],
      externalLinks: [
        { title: 'IPv6 Addressing', url: 'https://www.geeksforgeeks.org/what-is-ipv6/' },
        { title: 'IPv6 Address Types', url: 'https://www.cisco.com/c/en/us/tech/ip/ip-version-6-ipv6/index.html' }
      ]
    }
  },
  {
    id: 'ipv6-protocol',
    name: 'The IPv6 Protocol',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit III',
    content: {
      introduction: 'The IPv6 protocol provides enhanced features, improved performance, and better security compared to IPv4.',
      definition: 'IPv6 protocol is the next-generation internet protocol that provides expanded addressing, simplified header format, and built-in security and mobility features.',
      realWorldExample: 'Major websites like Google, Facebook, and Netflix support IPv6, providing faster and more efficient connectivity for users with IPv6-enabled internet connections.',
      realWorldUse: 'Used in modern internet infrastructure, data centers, mobile networks, and IoT deployments requiring large address spaces.',
      importance: 'Essential for the future of internet connectivity, supporting billions of devices and enabling new applications and services.',
      detailedExplanation: `The IPv6 protocol introduces a simplified 40-byte fixed header that improves processing efficiency compared to IPv4's variable-length header. The protocol eliminates header checksum calculations at each hop, reducing processing overhead, and uses extension headers for optional features, providing flexibility while maintaining efficiency. IPv6 includes built-in IPSec support for enhanced security, improved support for real-time applications through flow labeling, and better multicast capabilities.

Key improvements include elimination of broadcast traffic in favor of efficient multicast, built-in neighbor discovery protocol replacing ARP, and enhanced support for mobile devices through improved mobility features. The protocol supports jumbograms for efficient transmission of large payloads and includes mechanisms for smooth transition from IPv4 through dual-stack operation, tunneling, and translation techniques. IPv6 also provides better support for quality of service through traffic classes and flow labels, enabling improved performance for multimedia and real-time applications.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=ThdO9beHhpA',
        'https://www.youtube.com/watch?v=oItwDXraK1M'
      ],
      externalLinks: [
        { title: 'IPv6 Protocol Features', url: 'https://www.geeksforgeeks.org/what-is-ipv6/' },
        { title: 'IPv6 vs IPv4', url: 'https://www.cisco.com/c/en/us/tech/ip/ip-version-6-ipv6/index.html' }
      ]
    }
  }];

export default computerNetworksUnit3;