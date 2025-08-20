import { Topic } from '../syllabus';

export const databaseSystemsUnit3: Topic[] = [
  {
    id: 'relational-model-concepts',
    name: 'Relational Model Concepts',
    semester: 2,
    subject: 'Database Management Systems',
    unit: 'Unit III',
    content: {
      introduction: 'The relational model provides a mathematical foundation for database systems using tables, rows, and columns to represent and manipulate data.',
      definition: 'The relational model organizes data into relations (tables) with tuples (rows) and attributes (columns), providing a simple yet powerful framework for data management.',
      realWorldExample: 'A student database with tables for Students, Courses, and Enrollments, where each table has rows representing individual records and columns representing data attributes.',
      realWorldUse: 'Foundation for most commercial database systems, SQL databases, data warehousing, and business intelligence applications.',
      importance: 'The relational model revolutionized database management by providing a simple, mathematically sound approach that supports complex queries and data integrity.',
      detailedExplanation: `
The relational model, introduced by Edgar Codd in 1970, represents data as a collection of relations, where each relation is a table consisting of rows and columns. Each row, called a tuple, represents a single entity or record, while each column, called an attribute, represents a property or characteristic of that entity. The model is based on mathematical set theory and predicate logic, providing a solid theoretical foundation for database operations and ensuring that operations on relations produce predictable results.

Key concepts of the relational model include domains, which define the set of allowable values for each attribute, and the requirement that each tuple in a relation must be unique. Relations have no inherent ordering of tuples or attributes, and each attribute must be atomic, meaning it cannot be further subdivided. The model supports various operations for manipulating relations, including selection, projection, join, and set operations, which form the basis for query languages like SQL. This mathematical foundation enables database systems to optimize queries automatically and ensures that complex operations can be performed reliably and efficiently.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=NvrpuBAMddw',
        'https://www.youtube.com/watch?v=OqjJjpjDRLc'
      ],
      externalLinks: [
        { title: 'Relational Model in DBMS', url: 'https://www.geeksforgeeks.org/relational-model-in-dbms/' },
        { title: 'Relational Database Concepts', url: 'https://www.tutorialspoint.com/dbms/dbms_relational_model.htm' }
      ]
    }
  },
  {
    id: 'relational-constraints-schemas',
    name: 'Relational Model Constraints and Relational Database Schemas',
    semester: 2,
    subject: 'Database Management Systems',
    unit: 'Unit III',
    content: {
      introduction: 'Relational constraints ensure data integrity and consistency by defining rules that must be satisfied by all data in the database.',
      definition: 'Relational constraints are rules that restrict the values that can be stored in relations, including domain constraints, key constraints, and referential integrity constraints.',
      realWorldExample: 'A student database where student IDs must be unique (key constraint), grades must be between A-F (domain constraint), and course enrollments must reference valid courses (referential integrity).',
      realWorldUse: 'Maintaining data quality, preventing invalid data entry, ensuring business rule compliance, and supporting database integrity in enterprise applications.',
      importance: 'Constraints are essential for maintaining data accuracy, preventing inconsistencies, and ensuring that the database accurately reflects real-world business rules.',
      detailedExplanation: `
Relational constraints serve as guardians of data integrity, ensuring that only valid data can be stored in the database. Domain constraints specify the allowable values for each attribute, such as requiring that age values be positive integers or that email addresses follow a specific format. Key constraints ensure that each tuple in a relation can be uniquely identified, with primary keys providing the main identification mechanism and candidate keys offering alternative unique identifiers. These constraints prevent duplicate records and enable efficient data retrieval and relationship establishment.

Referential integrity constraints maintain consistency between related tables by ensuring that foreign key values in one table correspond to valid primary key values in another table. This prevents orphaned records and maintains the logical connections between entities. Entity integrity constraints require that primary key values cannot be null, ensuring that every tuple can be uniquely identified. Additional constraints may include check constraints that enforce specific business rules, such as ensuring that order dates are not in the future or that salary values fall within acceptable ranges. Together, these constraints create a robust framework that maintains data quality and supports reliable database operations.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=OqjJjpjDRLc',
        'https://www.youtube.com/watch?v=NvrpuBAMddw'
      ],
      externalLinks: [
        { title: 'Relational Constraints', url: 'https://www.geeksforgeeks.org/constraints-in-dbms/' },
        { title: 'Database Integrity Constraints', url: 'https://www.tutorialspoint.com/dbms/dbms_constraints.htm' }
      ]
    }
  },  
{
    id: 'update-operations-transactions',
    name: 'Update Operations, Transactions and Dealing with Constraint Violations',
    semester: 2,
    subject: 'Database Management Systems',
    unit: 'Unit III',
    content: {
      introduction: 'Update operations modify database content while transactions ensure that changes maintain consistency and handle constraint violations appropriately.',
      definition: 'Update operations include insert, delete, and modify operations on relations, while transactions group operations to maintain database consistency and handle constraint violations.',
      realWorldExample: 'Transferring money between bank accounts requires updating two account balances as a single transaction, with rollback if any constraint is violated.',
      realWorldUse: 'Data maintenance, business process automation, ensuring data consistency, and handling complex multi-step operations in database applications.',
      importance: 'Proper handling of updates and transactions is crucial for maintaining data integrity and ensuring reliable database operations in concurrent environments.',
      detailedExplanation: `
Update operations in relational databases include insertion of new tuples, deletion of existing tuples, and modification of attribute values within existing tuples. Each type of operation must be carefully validated against all applicable constraints before being committed to the database. Insert operations must ensure that new tuples satisfy domain constraints, key constraints, and referential integrity requirements. Delete operations must consider the impact on referential integrity, as removing a tuple that is referenced by foreign keys in other relations could create orphaned records.

Transactions provide a mechanism for grouping multiple operations into a single logical unit that either succeeds completely or fails completely, maintaining database consistency even in the presence of system failures or constraint violations. When constraint violations occur during transaction execution, the database system must decide whether to reject the entire transaction, attempt to repair the violation, or defer constraint checking until transaction completion. Different strategies include immediate constraint checking, deferred constraint checking, and cascading actions such as cascade delete or cascade update that automatically propagate changes to maintain referential integrity. Understanding these mechanisms is essential for designing robust database applications that handle complex business scenarios reliably.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=P80Js_qClUE',
        'https://www.youtube.com/watch?v=OqjJjpjDRLc'
      ],
      externalLinks: [
        { title: 'Database Transactions', url: 'https://www.geeksforgeeks.org/acid-properties-in-dbms/' },
        { title: 'Update Operations in DBMS', url: 'https://www.tutorialspoint.com/dbms/dbms_transaction.htm' }
      ]
    }
  },
  {
    id: 'unary-relational-operations',
    name: 'Unary Relational Operations: SELECT and PROJECT',
    semester: 2,
    subject: 'Database Management Systems',
    unit: 'Unit III',
    content: {
      introduction: 'Unary relational operations work on a single relation to filter rows (SELECT) or columns (PROJECT), forming the foundation of query processing.',
      definition: 'SELECT operation filters tuples based on specified conditions, while PROJECT operation extracts specific attributes from a relation, both operating on single relations.',
      realWorldExample: 'SELECT operation to find all students with GPA above 3.5, and PROJECT operation to extract only student names and majors from the student table.',
      realWorldUse: 'Query optimization, data filtering, report generation, and building complex queries by combining basic operations in database applications.',
      importance: 'These fundamental operations form the building blocks for more complex queries and are essential for understanding relational algebra and SQL.',
      detailedExplanation: `
The SELECT operation, denoted by the sigma symbol in relational algebra, filters tuples from a relation based on specified selection conditions. The operation examines each tuple in the relation and includes only those tuples that satisfy the given predicate in the result. Selection conditions can involve comparisons using operators such as equals, less than, greater than, and can be combined using logical operators like AND, OR, and NOT. The SELECT operation does not change the schema of the relation, meaning the resulting relation has the same attributes as the original relation, but potentially fewer tuples.

The PROJECT operation, denoted by the pi symbol in relational algebra, extracts specified attributes from a relation while eliminating duplicates from the result. This operation effectively creates a vertical subset of the original relation by selecting only the desired columns. The PROJECT operation may result in fewer tuples than the original relation if duplicate combinations of the selected attributes exist, as relational algebra requires that all tuples in a relation be unique. Both SELECT and PROJECT operations are fundamental to query processing and can be combined with other operations to create complex queries that extract precisely the information needed from database relations.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=kxLcXILIL2s',
        'https://www.youtube.com/watch?v=NvrpuBAMddw'
      ],
      externalLinks: [
        { title: 'Relational Algebra Operations', url: 'https://www.geeksforgeeks.org/relational-algebra-in-dbms/' },
        { title: 'SELECT and PROJECT Operations', url: 'https://www.tutorialspoint.com/dbms/dbms_relational_algebra.htm' }
      ]
    }
  },  {
    id
: 'set-theory-operations',
    name: 'Relational Algebra Operations from SET Theory',
    semester: 2,
    subject: 'Database Management Systems',
    unit: 'Unit III',
    content: {
      introduction: 'Set theory operations in relational algebra include union, intersection, and difference, allowing combination and comparison of relations with compatible schemas.',
      definition: 'Set operations combine two relations with the same schema using union (all tuples), intersection (common tuples), and difference (tuples in first but not second).',
      realWorldExample: 'Finding all students who are either in computer science or mathematics (union), students in both programs (intersection), or CS students not in math (difference).',
      realWorldUse: 'Data integration, comparative analysis, report generation, and combining results from multiple queries in database applications.',
      importance: 'Set operations enable powerful data analysis capabilities and are fundamental to understanding how relations can be combined and compared.',
      detailedExplanation: `
Set theory operations in relational algebra require that the operand relations be union-compatible, meaning they must have the same number of attributes with corresponding attributes having compatible domains. The UNION operation combines tuples from two relations, including all tuples that appear in either relation while eliminating duplicates. This operation is useful for combining data from multiple sources or creating comprehensive result sets that include all relevant information from different relations.

The INTERSECTION operation returns only tuples that appear in both operand relations, making it useful for finding common elements or overlapping data between different datasets. The DIFFERENCE operation returns tuples that appear in the first relation but not in the second, enabling queries that identify unique elements or exceptions. These operations follow the mathematical properties of set theory, including commutativity for union and intersection, and associativity for union and intersection operations. Understanding these operations is crucial for writing complex queries that require combining or comparing data from multiple relations in meaningful ways.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=kxLcXILIL2s',
        'https://www.youtube.com/watch?v=NvrpuBAMddw'
      ],
      externalLinks: [
        { title: 'Set Operations in Relational Algebra', url: 'https://www.geeksforgeeks.org/set-operations-in-relational-algebra/' },
        { title: 'Union, Intersection, Difference', url: 'https://www.tutorialspoint.com/dbms/dbms_relational_algebra.htm' }
      ]
    }
  },
  {
    id: 'binary-relational-operations',
    name: 'Binary Relational Operations: JOIN and DIVISION',
    semester: 2,
    subject: 'Database Management Systems',
    unit: 'Unit III',
    content: {
      introduction: 'Binary relational operations combine information from two relations, with JOIN operations connecting related data and DIVISION finding comprehensive relationships.',
      definition: 'JOIN operations combine tuples from two relations based on common attributes, while DIVISION finds tuples in one relation that are associated with all tuples in another relation.',
      realWorldExample: 'JOIN operation to combine student and enrollment data showing which students are enrolled in which courses, DIVISION to find students enrolled in all required courses.',
      realWorldUse: 'Data integration, relationship analysis, comprehensive reporting, and complex query processing in relational database applications.',
      importance: 'These operations are essential for extracting meaningful information from normalized databases where related data is stored in separate tables.',
      detailedExplanation: `
JOIN operations are among the most important and frequently used operations in relational databases, enabling the combination of related information stored in separate relations. The most common types include INNER JOIN, which returns only tuples that have matching values in both relations, and OUTER JOIN variants (LEFT, RIGHT, FULL) that preserve tuples from one or both relations even when no match exists. The join condition specifies how tuples from the two relations should be matched, typically based on equality of values in related attributes such as foreign key to primary key relationships.

The DIVISION operation is less commonly used but provides powerful functionality for finding comprehensive relationships between entities. Division finds tuples in the dividend relation that are associated with all tuples in the divisor relation, making it useful for queries like finding customers who have purchased all products in a specific category or students who have completed all required courses. The operation is conceptually the inverse of the Cartesian product and requires careful understanding of the relationship between the operand relations. While DIVISION is not directly supported in SQL, it can be implemented using combinations of other operations such as NOT EXISTS or double negation patterns.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=kxLcXILIL2s',
        'https://www.youtube.com/watch?v=9yeOJ0ZMUYw'
      ],
      externalLinks: [
        { title: 'JOIN Operations in DBMS', url: 'https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/' },
        { title: 'Division Operation', url: 'https://www.tutorialspoint.com/dbms/dbms_relational_algebra.htm' }
      ]
    }
  },  {

    id: 'additional-relational-operations',
    name: 'Additional Relational Operations',
    semester: 2,
    subject: 'Database Management Systems',
    unit: 'Unit III',
    content: {
      introduction: 'Additional relational operations extend basic algebra with aggregate functions, grouping, sorting, and other advanced capabilities for comprehensive data analysis.',
      definition: 'Extended relational operations include aggregate functions (COUNT, SUM, AVG), grouping operations, sorting, and assignment operations that enhance query capabilities.',
      realWorldExample: 'Calculating average student GPA by major (grouping with aggregation), sorting employees by salary, or counting the number of orders per customer.',
      realWorldUse: 'Statistical analysis, reporting, data summarization, and business intelligence applications in database systems.',
      importance: 'These operations bridge the gap between theoretical relational algebra and practical database query requirements in real-world applications.',
      detailedExplanation: `
Additional relational operations extend the basic relational algebra to support more complex data analysis and reporting requirements. Aggregate functions such as COUNT, SUM, AVERAGE, MIN, and MAX operate on collections of values to produce summary statistics. These functions can be applied to entire relations or to groups of tuples that share common attribute values. The GROUP BY operation partitions tuples into groups based on specified attributes, allowing aggregate functions to be applied separately to each group.

Sorting operations arrange tuples in a specified order based on one or more attributes, supporting both ascending and descending order specifications. The assignment operation allows the result of relational algebra expressions to be stored in relation variables for later use. Additional operations may include renaming operations that change attribute names, extended projection that can include computed attributes, and various forms of outer joins that preserve information from relations even when join conditions are not satisfied. These extended operations make relational algebra more practical for real-world database applications while maintaining the mathematical rigor of the basic model.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=kxLcXILIL2s',
        'https://www.youtube.com/watch?v=9yeOJ0ZMUYw'
      ],
      externalLinks: [
        { title: 'Extended Relational Operations', url: 'https://www.geeksforgeeks.org/extended-operators-in-relational-algebra/' },
        { title: 'Aggregate Functions in DBMS', url: 'https://www.tutorialspoint.com/dbms/dbms_relational_algebra.htm' }
      ]
    }
  },
  {
    id: 'sql-data-definition-types',
    name: 'SQL Data Definition and Data Types',
    semester: 2,
    subject: 'Database Management Systems',
    unit: 'Unit III',
    content: {
      introduction: 'SQL Data Definition Language (DDL) provides commands for creating and modifying database structures, with various data types supporting different kinds of information.',
      definition: 'SQL DDL includes CREATE, ALTER, and DROP statements for managing database objects, with data types like INTEGER, VARCHAR, DATE defining attribute characteristics.',
      realWorldExample: 'Creating a student table with INTEGER student_id, VARCHAR name, DATE birth_date, and DECIMAL gpa columns using CREATE TABLE statement.',
      realWorldUse: 'Database schema creation, table structure modification, data type specification, and database object management in SQL-based systems.',
      importance: 'DDL forms the foundation for database structure definition and is essential for creating and maintaining database schemas in SQL systems.',
      detailedExplanation: `
SQL Data Definition Language provides the fundamental commands for creating and managing database structures. The CREATE statement is used to create new database objects such as tables, indexes, views, and schemas. When creating tables, each column must be assigned a data type that determines what kind of values can be stored and how much storage space is required. Common data types include numeric types like INTEGER, DECIMAL, and FLOAT for numbers, character types like CHAR and VARCHAR for text, and temporal types like DATE, TIME, and TIMESTAMP for date and time values.

Data type selection is crucial for ensuring data integrity, optimizing storage efficiency, and supporting appropriate operations on the data. Each data type has specific characteristics such as size limits, precision requirements, and supported operations. For example, VARCHAR types require length specifications and support string operations, while DATE types support temporal arithmetic and formatting functions. The ALTER statement allows modification of existing database structures, such as adding new columns, changing data types, or modifying constraints. The DROP statement removes database objects when they are no longer needed. Understanding these DDL commands and data types is essential for effective database design and administration.
      `,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=HXV3zeQKqGY',
        'https://www.youtube.com/watch?v=7S_tz1z_5bA'
      ],
      externalLinks: [
        { title: 'SQL Data Types', url: 'https://www.geeksforgeeks.org/sql-data-types/' },
        { title: 'DDL Commands in SQL', url: 'https://www.tutorialspoint.com/sql/sql-syntax.htm' }
      ]
    }
  }
];