import { Topic } from '../syllabus';

export const computerNetworksUnit2: Topic[] = [
  {
    id: 'data-link-layer-protocols',
    name: 'Data Link Control: Data-Link Layer Protocols',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit II',
    content: {
      introduction: 'Data-link layer protocols manage reliable communication between adjacent nodes, handling framing, error control, and flow control functions.',
      definition: 'Data-link layer protocols provide node-to-node communication services including framing, error detection and correction, and flow control between directly connected devices.',
      realWorldExample: 'Ethernet protocol managing communication between your computer and network switch, ensuring frames are properly formatted and delivered without errors.',
      realWorldUse: 'Used in all local area networks, point-to-point connections, and any direct communication link between network devices.',
      importance: 'Data-link protocols form the foundation for reliable local network communication and enable higher-layer protocols to function effectively.',
      detailedExplanation: `
Data-link layer protocols operate between the physical layer and network layer, providing essential services for reliable communication between adjacent nodes. These protocols handle framing, which involves organizing the bit stream from the physical layer into discrete frames with clear boundaries. Frame synchronization ensures that the receiver can identify where each frame begins and ends, typically using special bit patterns or character sequences as delimiters.

Error control mechanisms detect and potentially correct transmission errors, using techniques such as checksums, CRC codes, or more sophisticated error correction codes. Flow control prevents a fast sender from overwhelming a slow receiver by regulating the rate of frame transmission. Many data-link protocols implement automatic repeat request (ARQ) schemes, where the receiver acknowledges correctly received frames and the sender retransmits frames that are lost or corrupted. These protocols must also handle issues such as duplicate frame detection, sequence numbering, and timeout management to ensure reliable and efficient communication between directly connected devices.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=7bsQP9sKHrs',
        'https://www.youtube.com/watch?v=UrG7RTWIJak'
      ],
      externalLinks: [
        { title: 'Data Link Layer Protocols', url: 'https://www.geeksforgeeks.org/data-link-layer/' },
        { title: 'DLL Protocol Functions', url: 'https://www.tutorialspoint.com/data_communication_computer_network/data_link_layer.htm' }
      ]
    }
  },
  {
    id: 'hdlc-protocol',
    name: 'HDLC',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit II',
    content: {
      introduction: 'HDLC (High-Level Data Link Control) is a bit-oriented protocol that provides reliable data transmission with comprehensive error and flow control mechanisms.',
      definition: 'HDLC is a standardized data-link protocol that uses bit-oriented framing and provides reliable, full-duplex communication with error detection, correction, and flow control.',
      realWorldExample: 'HDLC is used in point-to-point connections such as leased lines between routers, providing reliable data transmission for wide area network connections.',
      realWorldUse: 'Used in WAN connections, point-to-point links, satellite communications, and as the basis for other protocols like PPP and Frame Relay.',
      importance: 'HDLC provides a robust foundation for reliable data transmission and has influenced the design of many other data-link protocols.',
      detailedExplanation: `
HDLC uses a standardized frame format with flag sequences (01111110) to mark frame boundaries, address fields to identify stations, control fields to specify frame types and sequence numbers, and frame check sequences for error detection. The protocol supports three types of stations: primary stations that control the link, secondary stations that respond to primary stations, and combined stations that can act as both primary and secondary. HDLC operates in three modes: Normal Response Mode where secondary stations can only respond to primary stations, Asynchronous Response Mode where secondary stations can initiate transmission, and Asynchronous Balanced Mode where both stations have equal status.

The protocol implements sophisticated error and flow control mechanisms using sequence numbers and acknowledgments. Go-Back-N ARQ ensures that frames are delivered in order and without duplication, while selective repeat ARQ allows for more efficient retransmission of only the frames that were lost or corrupted. HDLC also includes provisions for link setup and teardown, configuration negotiation, and various operational modes. The bit-stuffing technique prevents flag sequences from appearing in the data portion of frames, ensuring reliable frame synchronization. HDLC's comprehensive feature set and reliability have made it the foundation for many other data-link protocols used in modern networking.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=7bsQP9sKHrs',
        'https://www.youtube.com/watch?v=UrG7RTWIJak'
      ],
      externalLinks: [
        { title: 'HDLC Protocol', url: 'https://www.geeksforgeeks.org/high-level-data-link-control-hdlc/' },
        { title: 'HDLC Frame Format', url: 'https://www.tutorialspoint.com/data_communication_computer_network/hdlc.htm' }
      ]
    }
  },
  {
    id: 'point-to-point-ppp',
    name: 'Point-To-Point (PPP)',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit II',
    content: {
      introduction: 'PPP (Point-to-Point Protocol) provides a standard method for transporting multi-protocol datagrams over point-to-point links with authentication and configuration capabilities.',
      definition: 'PPP is a data-link protocol designed for point-to-point connections that supports multiple network protocols, authentication, and automatic configuration of network parameters.',
      realWorldExample: 'PPP is used in dial-up internet connections and DSL connections, handling user authentication and establishing IP connectivity to internet service providers.',
      realWorldUse: 'Used in dial-up connections, DSL, cellular data connections, and any point-to-point link requiring multi-protocol support and authentication.',
      importance: 'PPP provides essential services for internet connectivity and has been fundamental to the growth of internet access technologies.',
      detailedExplanation: `
PPP consists of three main components: a method for encapsulating multi-protocol datagrams, a Link Control Protocol (LCP) for establishing and configuring the data-link connection, and a family of Network Control Protocols (NCPs) for configuring different network-layer protocols. The encapsulation method allows PPP to carry various types of network-layer packets, including IP, IPX, and AppleTalk, making it suitable for diverse networking environments.

LCP handles link establishment, configuration negotiation, link quality monitoring, and link termination. It negotiates options such as maximum receive unit size, authentication protocols, and compression methods. Authentication protocols supported by PPP include Password Authentication Protocol (PAP) and Challenge Handshake Authentication Protocol (CHAP), which provide security for dial-up and other point-to-point connections. NCPs configure specific network-layer protocols, with IPCP (Internet Protocol Control Protocol) being the most commonly used for IP configuration. PPP's flexibility and comprehensive feature set have made it the standard choice for point-to-point connections in various networking scenarios.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=7bsQP9sKHrs',
        'https://www.youtube.com/watch?v=UrG7RTWIJak'
      ],
      externalLinks: [
        { title: 'Point-to-Point Protocol', url: 'https://www.geeksforgeeks.org/ppp-full-form/' },
        { title: 'PPP Configuration', url: 'https://www.tutorialspoint.com/data_communication_computer_network/point_to_point_protocol.htm' }
      ]
    }
  },
  {
    id: 'aloha-protocol',
    name: 'Media Access Control (MAC): ALOHA',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit II',
    content: {
      introduction: 'ALOHA is a pioneering medium access control protocol that allows multiple stations to share a common communication channel through random access methods.',
      definition: 'ALOHA is a random access protocol where stations transmit data whenever they have it, with collisions resolved through retransmission after random delays.',
      realWorldExample: 'Early packet radio networks used ALOHA protocol, similar to people in a room talking whenever they want, with conflicts resolved by waiting and trying again.',
      realWorldUse: 'Used in early packet radio systems, satellite communications, and as the foundation for more advanced random access protocols.',
      importance: 'ALOHA introduced the concept of random access and collision resolution, forming the basis for modern wireless and Ethernet protocols.',
      detailedExplanation: `
Pure ALOHA allows stations to transmit frames at any time without checking if the channel is busy, leading to a simple but inefficient protocol. When two or more stations transmit simultaneously, their frames collide and become corrupted. Stations detect collisions by not receiving acknowledgments within a specified timeout period and then retransmit after a random delay to reduce the probability of repeated collisions. The maximum theoretical throughput of pure ALOHA is approximately 18.4% of the channel capacity due to the high collision rate.

Slotted ALOHA improves efficiency by dividing time into discrete slots and requiring all transmissions to begin at slot boundaries. This synchronization reduces the collision window by half, increasing the maximum theoretical throughput to approximately 36.8%. Both versions of ALOHA use exponential backoff algorithms where the retransmission delay increases exponentially with the number of consecutive collisions, helping to reduce network congestion during high traffic periods. Despite its low efficiency, ALOHA's simplicity and the insights it provided into random access protocols have made it historically significant in the development of modern networking protocols.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=k8JkjZjoan0',
        'https://www.youtube.com/watch?v=7bsQP9sKHrs'
      ],
      externalLinks: [
        { title: 'ALOHA Protocol', url: 'https://www.geeksforgeeks.org/aloha-in-computer-network/' },
        { title: 'Pure and Slotted ALOHA', url: 'https://www.tutorialspoint.com/data_communication_computer_network/aloha.htm' }
      ]
    }
  },
  {
    id: 'csma-protocol',
    name: 'CSMA',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit II',
    content: {
      introduction: 'CSMA (Carrier Sense Multiple Access) improves upon ALOHA by having stations listen to the channel before transmitting, reducing collision probability.',
      definition: 'CSMA is a medium access control protocol where stations sense the carrier signal before transmitting to avoid collisions with ongoing transmissions.',
      realWorldExample: 'Like people in a conversation who listen before speaking to avoid interrupting others, CSMA stations check if the channel is busy before transmitting.',
      realWorldUse: 'Used as the foundation for Ethernet and WiFi protocols, and in various shared medium communication systems.',
      importance: 'CSMA significantly improves channel utilization compared to ALOHA and forms the basis for most modern shared medium access protocols.',
      detailedExplanation: `
CSMA operates on the principle of "listen before talk," where stations monitor the communication channel to detect ongoing transmissions before attempting to send their own data. If the channel is sensed as busy, the station defers its transmission until the channel becomes idle. However, due to propagation delays, collisions can still occur when two stations sense an idle channel simultaneously and begin transmitting, with their signals colliding somewhere in the network.

Three main variants of CSMA exist: 1-persistent CSMA where stations transmit immediately when the channel becomes idle, non-persistent CSMA where stations wait a random time before sensing again if the channel is busy, and p-persistent CSMA where stations transmit with probability p when the channel becomes idle. Each variant offers different trade-offs between delay and collision probability. The hidden terminal problem occurs when stations cannot hear each other directly but can interfere at a common receiver, while the exposed terminal problem occurs when stations unnecessarily defer transmission due to hearing transmissions that would not actually cause interference.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=k8JkjZjoan0',
        'https://www.youtube.com/watch?v=7bsQP9sKHrs'
      ],
      externalLinks: [
        { title: 'CSMA Protocol', url: 'https://www.geeksforgeeks.org/carrier-sense-multiple-access-csma/' },
        { title: 'CSMA Variants', url: 'https://www.tutorialspoint.com/data_communication_computer_network/csma.htm' }
      ]
    }
  },
  {
    id: 'csma-cd',
    name: 'CSMA/CD',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit II',
    content: {
      introduction: 'CSMA/CD (Carrier Sense Multiple Access with Collision Detection) enhances CSMA by detecting collisions during transmission and stopping immediately to minimize wasted bandwidth.',
      definition: 'CSMA/CD is a medium access protocol that senses the carrier before transmission and detects collisions during transmission, stopping immediately when collisions occur.',
      realWorldExample: 'Traditional Ethernet networks use CSMA/CD, where devices listen before transmitting and stop immediately if they detect their signal is colliding with another transmission.',
      realWorldUse: 'Used in traditional Ethernet networks, coaxial cable networks, and shared medium wired networks.',
      importance: 'CSMA/CD was fundamental to early Ethernet success and demonstrates important principles of collision detection and recovery.',
      detailedExplanation: `
CSMA/CD combines carrier sensing with collision detection to improve network efficiency. Stations monitor the channel while transmitting and can detect collisions by comparing the transmitted signal with the signal actually present on the medium. When a collision is detected, the transmitting station immediately stops sending data and transmits a jam signal to ensure all stations are aware of the collision. This immediate cessation of transmission minimizes the time wasted on corrupted frames.

After detecting a collision, stations use a binary exponential backoff algorithm to determine when to retry transmission. The backoff time is chosen randomly from an interval that doubles with each successive collision, helping to reduce the probability of repeated collisions. The minimum frame size in CSMA/CD networks is determined by the round-trip propagation delay, ensuring that collisions can be detected before the entire frame is transmitted. While CSMA/CD was crucial for early Ethernet networks, modern switched Ethernet networks operate in full-duplex mode and do not require collision detection since each link is a separate collision domain.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=k8JkjZjoan0',
        'https://www.youtube.com/watch?v=7bsQP9sKHrs'
      ],
      externalLinks: [
        { title: 'CSMA/CD Protocol', url: 'https://www.geeksforgeeks.org/collision-detection-csmacd/' },
        { title: 'Ethernet CSMA/CD', url: 'https://www.tutorialspoint.com/data_communication_computer_network/csmacd.htm' }
      ]
    }
  },
  {
    id: 'csma-ca',
    name: 'CSMA/CA',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit II',
    content: {
      introduction: 'CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) prevents collisions in wireless networks where collision detection is not feasible.',
      definition: 'CSMA/CA is a medium access protocol that uses carrier sensing and collision avoidance techniques, including random backoff and optional RTS/CTS handshaking.',
      realWorldExample: 'WiFi networks use CSMA/CA where devices wait random times before transmitting and use acknowledgments to confirm successful transmission since wireless collisions cannot be detected.',
      realWorldUse: 'Used in WiFi (802.11) networks, wireless LANs, and other wireless communication systems where collision detection is not possible.',
      importance: 'CSMA/CA enables efficient wireless communication and is fundamental to modern WiFi and wireless networking technologies.',
      detailedExplanation: `
CSMA/CA addresses the challenges of wireless communication where collision detection is not feasible due to the hidden terminal problem and signal attenuation. Instead of detecting collisions, the protocol attempts to avoid them through several mechanisms. Stations use carrier sensing to check if the medium is idle, but they also implement a random backoff period before transmission to reduce the probability of simultaneous transmissions from multiple stations.

The protocol includes an optional RTS/CTS (Request to Send/Clear to Send) handshake mechanism for larger frames. A station sends a short RTS frame to reserve the medium, and the destination responds with a CTS frame if the medium is available. This handshake helps address the hidden terminal problem by informing nearby stations about the upcoming transmission. CSMA/CA also uses acknowledgment frames to confirm successful reception, as the sender cannot detect collisions directly. The Distributed Coordination Function (DCF) in WiFi implements CSMA/CA with additional features such as Network Allocation Vector (NAV) for virtual carrier sensing and exponential backoff for collision resolution.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=k8JkjZjoan0',
        'https://www.youtube.com/watch?v=7bsQP9sKHrs'
      ],
      externalLinks: [
        { title: 'CSMA/CA Protocol', url: 'https://www.geeksforgeeks.org/collision-avoidance-in-wireless-networks/' },
        { title: 'WiFi CSMA/CA', url: 'https://www.tutorialspoint.com/data_communication_computer_network/csmaca.htm' }
      ]
    }
  },
  {
    id: 'reservation-protocols',
    name: 'Reservation',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit II',
    content: {
      introduction: 'Reservation protocols allow stations to reserve transmission slots in advance, providing guaranteed access to the communication medium.',
      definition: 'Reservation protocols enable stations to request and reserve specific time slots or bandwidth for transmission, ensuring collision-free access to shared media.',
      realWorldExample: 'Like reserving a conference room for a meeting, stations can reserve network transmission time to ensure their data gets sent without interference.',
      realWorldUse: 'Used in satellite communications, cellular networks, and high-performance networks requiring guaranteed bandwidth and low latency.',
      importance: 'Reservation protocols provide predictable performance and are essential for real-time applications and quality of service guarantees.',
      detailedExplanation: `
Reservation protocols operate by dividing time into frames consisting of reservation slots and data transmission slots. During the reservation phase, stations compete for the right to reserve data slots using contention-based methods such as slotted ALOHA. Once a station successfully makes a reservation, it is guaranteed collision-free access to the reserved data slots in subsequent frames. This approach combines the flexibility of random access for reservations with the efficiency of scheduled access for data transmission.

The reservation process typically involves stations sending short reservation requests during designated reservation periods. These requests specify the amount of bandwidth or number of slots needed for data transmission. A central controller or distributed algorithm manages the reservation process and informs all stations about the reservation schedule. Reservation protocols are particularly effective for applications with predictable traffic patterns or quality of service requirements, as they can provide guaranteed bandwidth and bounded delay. However, they may be less efficient for sporadic traffic patterns due to the overhead of the reservation process.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=k8JkjZjoan0',
        'https://www.youtube.com/watch?v=7bsQP9sKHrs'
      ],
      externalLinks: [
        { title: 'Reservation Protocols', url: 'https://www.geeksforgeeks.org/reservation-protocol/' },
        { title: 'MAC Reservation Methods', url: 'https://www.tutorialspoint.com/data_communication_computer_network/reservation.htm' }
      ]
    }
  },
  {
    id: 'polling-protocols',
    name: 'Polling',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit II',
    content: {
      introduction: 'Polling protocols use a centralized approach where a master station sequentially queries slave stations to determine if they have data to transmit.',
      definition: 'Polling is a medium access control method where a central controller sequentially asks each station if it has data to transmit, eliminating collisions through centralized coordination.',
      realWorldExample: 'Like a teacher calling on students one by one to answer questions, a polling system asks each network device in turn if it needs to send data.',
      realWorldUse: 'Used in mainframe terminal systems, industrial control networks, and centralized communication systems requiring orderly access control.',
      importance: 'Polling provides collision-free access and predictable performance, making it suitable for applications requiring deterministic behavior.',
      detailedExplanation: `
Polling protocols eliminate collisions by using a centralized master station that maintains control over medium access. The master station sends poll messages to each slave station in a predetermined sequence, asking if the station has data to transmit. If a slave station has data, it responds with its transmission; otherwise, it sends a negative acknowledgment or remains silent. This approach ensures that only one station transmits at a time, completely eliminating the possibility of collisions.

The polling sequence can be implemented using various strategies such as round-robin polling where each station is polled in turn, priority-based polling where higher-priority stations are polled more frequently, or adaptive polling where the polling frequency is adjusted based on each station's traffic patterns. Polling protocols provide excellent performance predictability and can guarantee maximum access delays, making them suitable for real-time applications. However, they suffer from the overhead of poll messages and the potential for the master station to become a single point of failure. The efficiency of polling depends on the ratio of data transmission time to polling overhead.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=k8JkjZjoan0',
        'https://www.youtube.com/watch?v=7bsQP9sKHrs'
      ],
      externalLinks: [
        { title: 'Polling Protocol', url: 'https://www.geeksforgeeks.org/polling-in-computer-network/' },
        { title: 'Centralized MAC Protocols', url: 'https://www.tutorialspoint.com/data_communication_computer_network/polling.htm' }
      ]
    }
  },
  {
    id: 'token-passing',
    name: 'Token Passing',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit II',
    content: {
      introduction: 'Token passing protocols use a special control frame called a token to regulate access to the shared medium in a distributed manner.',
      definition: 'Token passing is a medium access control method where a special token frame circulates among stations, and only the station holding the token can transmit data.',
      realWorldExample: 'Like passing a talking stick in a meeting where only the person holding the stick can speak, token passing ensures orderly network access.',
      realWorldUse: 'Used in Token Ring networks, FDDI (Fiber Distributed Data Interface), and industrial networks requiring deterministic access control.',
      importance: 'Token passing provides collision-free access with distributed control and predictable performance characteristics.',
      detailedExplanation: `
Token passing protocols operate by circulating a special control frame called a token around the network in a predetermined order. When a station receives the token and has data to transmit, it captures the token, sends its data, and then releases the token to the next station in the sequence. If a station has no data to transmit, it immediately passes the token to the next station. This mechanism ensures that only one station can transmit at any given time, completely eliminating collisions.

The token passing sequence can be implemented in various network topologies, with ring topology being the most common. In a token ring network, stations are logically arranged in a ring, and the token circulates continuously around the ring. Token passing protocols include mechanisms for token recovery in case the token is lost or corrupted, priority schemes for handling different classes of traffic, and procedures for adding or removing stations from the network. The protocol provides excellent performance predictability and fairness, as each station gets equal opportunity to access the medium. However, the token circulation overhead and the complexity of token management can reduce efficiency, especially when many stations have no data to transmit.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=k8JkjZjoan0',
        'https://www.youtube.com/watch?v=7bsQP9sKHrs'
      ],
      externalLinks: [
        { title: 'Token Passing Protocol', url: 'https://www.geeksforgeeks.org/token-ring/' },
        { title: 'Token Ring Networks', url: 'https://www.tutorialspoint.com/data_communication_computer_network/token_passing.htm' }
      ]
    }
  },
  {
    id: 'fdma',
    name: 'FDMA',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit II',
    content: {
      introduction: 'FDMA (Frequency Division Multiple Access) divides the available frequency spectrum into separate channels, allowing multiple users to communicate simultaneously.',
      definition: 'FDMA is a channel access method where the available frequency band is divided into multiple non-overlapping frequency channels, each assigned to a different user.',
      realWorldExample: 'Like different radio stations broadcasting on different frequencies (FM 101.1, 102.5, etc.), FDMA assigns different frequency bands to different users.',
      realWorldUse: 'Used in analog cellular systems, radio broadcasting, satellite communications, and traditional telephone systems.',
      importance: 'FDMA provides simple, interference-free communication and was fundamental to early wireless and telecommunications systems.',
      detailedExplanation: `
FDMA allocates the total available frequency spectrum into multiple narrow frequency bands, with each user assigned a dedicated frequency channel for the duration of their communication session. This approach ensures that users do not interfere with each other as long as they stay within their assigned frequency bands and adequate guard bands separate adjacent channels. The simplicity of FDMA makes it easy to implement and manage, as each user operates independently within their allocated frequency range.

The main advantages of FDMA include its simplicity, the absence of complex coordination protocols, and the ability to provide continuous access to assigned users. However, FDMA has several limitations including inefficient spectrum utilization when users are not actively transmitting, the need for guard bands between channels to prevent interference, and the requirement for precise frequency control to maintain channel separation. FDMA was widely used in first-generation analog cellular systems but has largely been replaced by more efficient multiple access techniques in modern digital communication systems. Despite its limitations, FDMA remains useful in applications where simplicity is more important than spectral efficiency.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=k8JkjZjoan0',
        'https://www.youtube.com/watch?v=7bsQP9sKHrs'
      ],
      externalLinks: [
        { title: 'FDMA Explained', url: 'https://www.geeksforgeeks.org/frequency-division-multiple-access-fdma/' },
        { title: 'Multiple Access Techniques', url: 'https://www.tutorialspoint.com/data_communication_computer_network/fdma.htm' }
      ]
    }
  },
  {
    id: 'tdma',
    name: 'TDMA',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit II',
    content: {
      introduction: 'TDMA (Time Division Multiple Access) allows multiple users to share the same frequency channel by dividing time into discrete slots assigned to different users.',
      definition: 'TDMA is a channel access method where users share the same frequency band by transmitting in different time slots within a repeating time frame.',
      realWorldExample: 'Like people taking turns to use a single telephone line, TDMA gives each user a specific time slot to transmit on the shared frequency channel.',
      realWorldUse: 'Used in GSM cellular systems, satellite communications, digital cordless phones, and various wireless communication systems.',
      importance: 'TDMA provides efficient spectrum utilization and enables digital communication with multiple users sharing the same frequency.',
      detailedExplanation: `
TDMA organizes communication into repeating time frames, with each frame divided into multiple time slots. Each user is assigned one or more time slots within each frame and can only transmit during their allocated slots. All users share the same frequency band, but they are separated in time rather than frequency. This approach requires precise time synchronization among all users to prevent interference between adjacent time slots.

The advantages of TDMA include efficient spectrum utilization since the entire frequency band is available to each user during their time slot, the ability to support digital communication with advanced features such as encryption and error correction, and flexibility in allocating different numbers of time slots to users with varying bandwidth requirements. TDMA also enables features such as handoff between base stations and power control to optimize battery life in mobile devices. However, TDMA requires complex synchronization mechanisms, guard times between slots to account for timing variations, and sophisticated scheduling algorithms to manage slot assignments. The protocol is widely used in second-generation digital cellular systems and continues to be important in various wireless communication applications.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=k8JkjZjoan0',
        'https://www.youtube.com/watch?v=7bsQP9sKHrs'
      ],
      externalLinks: [
        { title: 'TDMA Protocol', url: 'https://www.geeksforgeeks.org/time-division-multiple-access-tdma/' },
        { title: 'TDMA in Cellular Systems', url: 'https://www.tutorialspoint.com/data_communication_computer_network/tdma.htm' }
      ]
    }
  },
  {
    id: 'cdma',
    name: 'CDMA',
    semester: 2,
    subject: 'Computer Networks',
    unit: 'Unit II',
    content: {
      introduction: 'CDMA (Code Division Multiple Access) allows multiple users to share the same frequency and time by using unique spreading codes to separate their transmissions.',
      definition: 'CDMA is a channel access method where multiple users transmit simultaneously on the same frequency using unique orthogonal codes to distinguish their signals.',
      realWorldExample: 'Like multiple conversations in different languages happening simultaneously in the same room, CDMA users transmit at the same time using different codes.',
      realWorldUse: 'Used in 3G cellular systems (UMTS, CDMA2000), GPS systems, WiFi, and various spread spectrum communication applications.',
      importance: 'CDMA provides excellent spectrum efficiency, security, and capacity, making it fundamental to modern wireless communication systems.',
      detailedExplanation: `
CDMA uses spread spectrum technology where each user is assigned a unique spreading code that is used to encode their data before transmission. The spreading code has a much higher rate than the data rate, causing the signal to occupy a much wider bandwidth than necessary for the data alone. At the receiver, the same spreading code is used to despread the signal and recover the original data. Signals from other users appear as noise because they use different, ideally orthogonal spreading codes.

The key advantages of CDMA include its ability to support many simultaneous users on the same frequency, inherent security due to the spreading codes, resistance to interference and jamming, and soft capacity limits where performance degrades gradually as more users are added rather than having hard blocking. CDMA also enables advanced features such as soft handoff where a mobile device can communicate with multiple base stations simultaneously, and power control to minimize interference. However, CDMA requires sophisticated signal processing, precise power control to prevent the near-far problem where strong signals overwhelm weak ones, and complex code management to maintain orthogonality among users. Despite its complexity, CDMA has become the foundation for many modern wireless communication systems due to its superior capacity and performance characteristics.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=k8JkjZjoan0',
        'https://www.youtube.com/watch?v=7bsQP9sKHrs'
      ],
      externalLinks: [
        { title: 'CDMA Technology', url: 'https://www.geeksforgeeks.org/code-division-multiple-access-cdma/' },
        { title: 'Spread Spectrum CDMA', url: 'https://www.tutorialspoint.com/data_communication_computer_network/cdma.htm' }
      ]
    }
  }
];

export default computerNetworksUnit2;