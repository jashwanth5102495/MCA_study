import { Topic } from '../syllabus';

export const databaseSystemsUnit4: Topic[] = [
  {
    id: 'introduction-transaction-processing',
    name: 'Introduction to Transaction Processing',
    semester: 2,
    subject: 'Database Management Systems',
    unit: 'Unit IV',
    content: {
      introduction: 'Transaction processing ensures that database operations maintain consistency and reliability, even in concurrent multi-user environments with potential system failures.',
      definition: 'Transaction processing is a method of organizing database operations into logical units that maintain database consistency and provide recovery capabilities.',
      realWorldExample: 'Banking system where transferring money between accounts requires multiple operations (debit one account, credit another) that must all succeed or all fail together.',
      realWorldUse: 'Financial systems, e-commerce platforms, reservation systems, and any application requiring reliable data consistency and concurrent user support.',
      importance: 'Transaction processing is fundamental to database reliability, enabling safe concurrent access and ensuring data integrity in mission-critical applications.',
      detailedExplanation: `
Transaction processing provides a framework for organizing database operations into logical units called transactions that maintain database consistency and provide recovery capabilities. A transaction represents a single logical operation that may consist of multiple database operations, such as reading data, performing calculations, and updating multiple records. The key principle is that all operations within a transaction must complete successfully, or none of them should have any effect on the database, ensuring that the database remains in a consistent state even if errors occur during processing.

The transaction processing system manages concurrent access to shared data by multiple users while maintaining data integrity and consistency. This involves coordinating the execution of multiple transactions, preventing conflicts between concurrent operations, and ensuring that each transaction sees a consistent view of the database. Transaction processing also provides recovery mechanisms that can restore the database to a consistent state after system failures, hardware problems, or software errors. Modern transaction processing systems support thousands of concurrent users and can process millions of transactions per day while maintaining strict consistency and reliability requirements.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=P80Js_qClUE',
        'https://www.youtube.com/watch?v=wHUOeXbZCYA'
      ],
      externalLinks: [
        { title: 'Transaction Processing in DBMS', url: 'https://www.geeksforgeeks.org/transaction-processing-in-dbms/' },
        { title: 'Database Transactions', url: 'https://www.tutorialspoint.com/dbms/dbms_transaction.htm' }
      ]
    }
  },
  {
    id: 'transaction-system-concepts',
    name: 'Transaction and System Concepts',
    semester: 2,
    subject: 'Database Management Systems',
    unit: 'Unit IV',
    content: {
      introduction: 'Transaction and system concepts define the fundamental principles and components that enable reliable database operations in multi-user environments.',
      definition: 'Transaction concepts include transaction states, operations, schedules, and system components like transaction manager, lock manager, and recovery manager.',
      realWorldExample: 'Online shopping system where placing an order involves checking inventory, updating stock levels, processing payment, and creating shipping records as one transaction.',
      realWorldUse: 'Database system design, transaction management, concurrency control implementation, and recovery system development.',
      importance: 'Understanding these concepts is essential for designing reliable database systems and implementing effective transaction management strategies.',
      detailedExplanation: `
Transaction concepts encompass the fundamental principles that govern how database operations are organized and managed. A transaction progresses through various states including active (currently executing), partially committed (completed execution but not yet committed), committed (successfully completed), failed (cannot proceed), and aborted (rolled back to initial state). Transaction operations include read and write operations on database items, as well as commit and abort operations that determine the final outcome of the transaction.

System concepts include the various components that work together to provide transaction processing capabilities. The transaction manager coordinates the execution of transactions and ensures that they follow proper protocols. The lock manager controls concurrent access to database items by granting and releasing locks according to specified protocols. The recovery manager maintains logs of database changes and provides mechanisms for restoring the database to a consistent state after failures. Buffer management handles the transfer of data between main memory and secondary storage, while the scheduler determines the order in which operations from different transactions are executed. Understanding these concepts is crucial for implementing robust transaction processing systems.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=wHUOeXbZCYA',
        'https://www.youtube.com/watch?v=P80Js_qClUE'
      ],
      externalLinks: [
        { title: 'Transaction States in DBMS', url: 'https://www.geeksforgeeks.org/transaction-states-in-dbms/' },
        { title: 'Database System Components', url: 'https://www.tutorialspoint.com/dbms/dbms_transaction.htm' }
      ]
    }
  },  {

    id: 'desirable-properties-transactions',
    name: 'Desirable Properties of Transactions',
    semester: 2,
    subject: 'Database Management Systems',
    unit: 'Unit IV',
    content: {
      introduction: 'The ACID properties (Atomicity, Consistency, Isolation, Durability) define the essential characteristics that transactions must possess to ensure reliable database operations.',
      definition: 'ACID properties ensure that transactions are atomic (all-or-nothing), consistent (maintain database integrity), isolated (independent execution), and durable (permanent once committed).',
      realWorldExample: 'ATM withdrawal transaction must be atomic (either dispense cash and debit account, or do neither), consistent (account balance rules), isolated (not affected by other transactions), and durable (permanent record).',
      realWorldUse: 'Database system design, transaction protocol implementation, system reliability assessment, and ensuring data integrity in critical applications.',
      importance: 'ACID properties are fundamental to transaction processing and provide the foundation for reliable database operations in concurrent environments.',
      detailedExplanation: `
Atomicity ensures that transactions are treated as indivisible units where either all operations within the transaction are completed successfully, or none of them have any effect on the database. This all-or-nothing property prevents partial updates that could leave the database in an inconsistent state. If any operation within a transaction fails, the entire transaction is aborted and all changes made by the transaction are undone, returning the database to its state before the transaction began.

Consistency requires that transactions transform the database from one consistent state to another consistent state, maintaining all database constraints and business rules. Isolation ensures that concurrent transactions do not interfere with each other, with each transaction appearing to execute in isolation even when multiple transactions are running simultaneously. Durability guarantees that once a transaction is committed, its effects are permanently stored in the database and will survive system failures, power outages, or other disruptions. Together, these properties provide a robust framework for reliable database operations that can handle the complexities of concurrent access and system failures while maintaining data integrity.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=GAe5oB742dw',
        'https://www.youtube.com/watch?v=P80Js_qClUE'
      ],
      externalLinks: [
        { title: 'ACID Properties in DBMS', url: 'https://www.geeksforgeeks.org/acid-properties-in-dbms/' },
        { title: 'Transaction Properties', url: 'https://www.tutorialspoint.com/dbms/dbms_transaction.htm' }
      ]
    }
  },
  {
    id: 'transaction-support-sql',
    name: 'Transaction Support in SQL',
    semester: 2,
    subject: 'Database Management Systems',
    unit: 'Unit IV',
    content: {
      introduction: 'SQL provides explicit transaction control commands that allow developers to define transaction boundaries and control transaction behavior.',
      definition: 'SQL transaction support includes BEGIN TRANSACTION, COMMIT, ROLLBACK, and SAVEPOINT commands for controlling transaction execution and recovery.',
      realWorldExample: 'SQL code using BEGIN TRANSACTION to start, multiple UPDATE statements for data changes, and COMMIT to make changes permanent, or ROLLBACK if errors occur.',
      realWorldUse: 'Application development, stored procedure implementation, batch processing, and ensuring data consistency in SQL-based database applications.',
      importance: 'Understanding SQL transaction commands is essential for developing reliable database applications that maintain data integrity and handle errors appropriately.',
      detailedExplanation: `
SQL provides explicit transaction control through several key commands that allow developers to define transaction boundaries and manage transaction execution. The BEGIN TRANSACTION command marks the start of a new transaction, after which all subsequent database operations are considered part of that transaction until it is either committed or rolled back. The COMMIT command makes all changes made during the transaction permanent, while the ROLLBACK command undoes all changes and returns the database to its state before the transaction began.

SAVEPOINT commands allow developers to create intermediate checkpoints within a transaction, enabling partial rollbacks to specific points rather than aborting the entire transaction. This is particularly useful for long transactions that perform multiple related operations, as it allows recovery from errors in later operations without losing the work done in earlier operations. SQL also supports implicit transaction behavior where each individual statement is automatically treated as a separate transaction unless explicit transaction control is used. Understanding these transaction control mechanisms is crucial for developing robust database applications that can handle complex business logic while maintaining data consistency and providing appropriate error recovery capabilities.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=HXV3zeQKqGY',
        'https://www.youtube.com/watch?v=P80Js_qClUE'
      ],
      externalLinks: [
        { title: 'SQL Transaction Control', url: 'https://www.geeksforgeeks.org/sql-transactions/' },
        { title: 'Transaction Commands in SQL', url: 'https://www.tutorialspoint.com/sql/sql-transactions.htm' }
      ]
    }
  },
  {
    id: 'two-phase-locking-techniques',
    name: 'Two-Phase Locking Techniques',
    semester: 2,
    subject: 'Database Management Systems',
    unit: 'Unit IV',
    content: {
      introduction: 'Two-phase locking is a concurrency control protocol that ensures serializability by requiring transactions to acquire all locks before releasing any locks.',
      definition: 'Two-phase locking protocol has a growing phase where locks are acquired and a shrinking phase where locks are released, ensuring conflict-serializable schedules.',
      realWorldExample: 'Banking system where a transfer transaction first acquires locks on both source and destination accounts (growing phase), then releases all locks after completion (shrinking phase).',
      realWorldUse: 'Concurrency control implementation, preventing data inconsistencies, ensuring transaction isolation, and maintaining database integrity in multi-user systems.',
      importance: 'Two-phase locking is fundamental to concurrency control and provides a practical method for ensuring that concurrent transactions produce consistent results.',
      detailedExplanation: `
Two-phase locking (2PL) is a concurrency control protocol that ensures serializability by dividing each transaction into two distinct phases. During the growing phase, a transaction can acquire locks on database items but cannot release any locks. Once the transaction begins releasing locks, it enters the shrinking phase and cannot acquire any new locks. This protocol prevents certain types of conflicts that could lead to non-serializable schedules, ensuring that the concurrent execution of transactions produces the same results as some serial execution.

The basic 2PL protocol can be enhanced with additional rules to provide stronger guarantees. Strict two-phase locking requires that all exclusive locks be held until the transaction commits or aborts, preventing cascading rollbacks and ensuring that uncommitted data is never read by other transactions. Rigorous two-phase locking extends this by requiring that all locks (both shared and exclusive) be held until transaction completion. While 2PL ensures serializability, it can lead to deadlocks when transactions wait for each other in circular patterns. Deadlock detection and resolution mechanisms are typically required in systems using 2PL protocols to handle these situations and maintain system progress.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=wHUOeXbZCYA',
        'https://www.youtube.com/watch?v=onkWXaXAgbY'
      ],
      externalLinks: [
        { title: 'Two Phase Locking in DBMS', url: 'https://www.geeksforgeeks.org/two-phase-locking-protocol/' },
        { title: 'Concurrency Control Protocols', url: 'https://www.tutorialspoint.com/dbms/dbms_concurrency_control.htm' }
      ]
    }
  },
  {
    id: 'timestamp-ordering-concurrency',
    name: 'Concurrency Control Based on Timestamp Ordering',
    semester: 2,
    subject: 'Database Management Systems',
    unit: 'Unit IV',
    content: {
      introduction: 'Timestamp ordering uses transaction timestamps to determine the order of conflicting operations, providing an alternative to locking for concurrency control.',
      definition: 'Timestamp ordering assigns unique timestamps to transactions and uses these to order conflicting operations, ensuring serializability without using locks.',
      realWorldExample: 'Online reservation system where earlier timestamp transactions get priority for seat selection, and later transactions are rejected or restarted if conflicts occur.',
      realWorldUse: 'Distributed database systems, real-time systems, deadlock-free concurrency control, and applications requiring predictable transaction ordering.',
      importance: 'Timestamp ordering provides deadlock-free concurrency control and is particularly useful in distributed systems where lock management is complex.',
      detailedExplanation: `
Timestamp ordering concurrency control assigns a unique timestamp to each transaction when it begins, typically based on the system clock or a logical counter. These timestamps determine the serialization order of transactions, with earlier timestamps having higher priority. When a transaction attempts to read or write a database item, the system checks whether this operation is consistent with the timestamp order. If a transaction tries to access an item that has been accessed by a transaction with a later timestamp, a conflict occurs and the transaction may need to be aborted and restarted.

The basic timestamp ordering protocol maintains read and write timestamps for each database item, tracking the timestamps of the most recent transactions that have read or written the item. When conflicts are detected, the protocol may abort and restart transactions to maintain the timestamp order. Thomas Write Rule is an optimization that allows certain write operations to be ignored rather than causing transaction aborts, improving system performance. Timestamp ordering eliminates the possibility of deadlocks since transactions never wait for each other, but it may result in more transaction restarts compared to locking protocols. This approach is particularly valuable in distributed database systems where coordinating locks across multiple sites is challenging.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=wHUOeXbZCYA',
        'https://www.youtube.com/watch?v=onkWXaXAgbY'
      ],
      externalLinks: [
        { title: 'Timestamp Ordering Protocol', url: 'https://www.geeksforgeeks.org/timestamp-ordering-protocols/' },
        { title: 'Timestamp Based Concurrency Control', url: 'https://www.tutorialspoint.com/dbms/dbms_concurrency_control.htm' }
      ]
    }
  },
  {
    id: 'recovery-concepts',
    name: 'Recovery Concepts',
    semester: 2,
    subject: 'Database Management Systems',
    unit: 'Unit IV',
    content: {
      introduction: 'Database recovery ensures that the database can be restored to a consistent state after various types of failures, maintaining data integrity and availability.',
      definition: 'Recovery concepts include failure types, recovery techniques, logging mechanisms, and checkpoint procedures that enable database restoration after system failures.',
      realWorldExample: 'E-commerce database recovering from power failure by using transaction logs to redo committed transactions and undo uncommitted transactions.',
      realWorldUse: 'Disaster recovery planning, system reliability assurance, data protection, and maintaining business continuity in database-dependent applications.',
      importance: 'Recovery mechanisms are essential for maintaining data integrity and ensuring that database systems can continue operating reliably despite various types of failures.',
      detailedExplanation: `
Database recovery addresses various types of failures that can affect database systems, including transaction failures due to logical errors or system calls, system failures such as power outages or operating system crashes, and media failures involving disk crashes or storage device problems. Each type of failure requires different recovery strategies and mechanisms. Transaction failures typically require rolling back the effects of the failed transaction, while system failures may require recovering the entire database to a consistent state using logged information.

Recovery mechanisms rely heavily on logging systems that record all database changes in a separate log file stored on stable storage. The log contains information about transaction starts, data modifications, and transaction commits or aborts, providing a complete history of database changes. Checkpoint procedures periodically force all modified data from memory buffers to disk storage and record checkpoint information in the log, reducing the amount of log processing required during recovery. Recovery algorithms use this logged information to implement redo operations that reapply committed changes and undo operations that remove the effects of uncommitted transactions, ensuring that the database is restored to a consistent state that reflects all committed transactions while eliminating the effects of any uncommitted work.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=wHUOeXbZCYA',
        'https://www.youtube.com/watch?v=P80Js_qClUE'
      ],
      externalLinks: [
        { title: 'Database Recovery in DBMS', url: 'https://www.geeksforgeeks.org/database-recovery-techniques-in-dbms/' },
        { title: 'Recovery Techniques', url: 'https://www.tutorialspoint.com/dbms/dbms_backup_recovery.htm' }
      ]
    }
  }
];