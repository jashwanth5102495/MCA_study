import { javaOOPUnit1 } from './subjects/javaOOP.unit1';
import { javaOOPUnit2 } from './subjects/javaOOP.unit2';
import { javaOOPUnit3 } from './subjects/javaOOP.unit3';
import { javaOOPUnit4 } from './subjects/javaOOP.unit4';
import { dataStructuresUnit1 } from './subjects/dataStructures.unit1';
import { dataStructuresUnit2 } from './subjects/dataStructures.unit2';
import { dataStructuresUnit3 } from './subjects/dataStructures.unit3';
import { dataStructuresUnit4 } from './subjects/dataStructures.unit4';
import { computerOrgUnit1 } from './subjects/computerOrg.unit1';
import { computerOrgUnit2 } from './subjects/computerOrg.unit2';
import { computerOrgUnit3 } from './subjects/computerOrg.unit3';
import { computerOrgUnit4 } from './subjects/computerOrg.unit4';
import { operatingSystemsUnit1 } from './subjects/operatingSystems.unit1';
import { operatingSystemsUnit2 } from './subjects/operatingSystems.unit2';
import { operatingSystemsUnit3 } from './subjects/operatingSystems.unit3';
import { operatingSystemsUnit4 } from './subjects/operatingSystems.unit4';
import { databaseSystemsUnit1 } from './subjects/databaseSystems.unit1';
import { databaseSystemsUnit2 } from './subjects/databaseSystems.unit2';
import { databaseSystemsUnit3 } from './subjects/databaseSystems.unit3';
import { databaseSystemsUnit4 } from './subjects/databaseSystems.unit4';
import { computerNetworksUnit1 } from './subjects/computerNetworks.unit1';
import { computerNetworksUnit2 } from './subjects/computerNetworks.unit2';
import { computerNetworksUnit3 } from './subjects/computerNetworks.unit3';
import { computerNetworksUnit4 } from './subjects/computerNetworks.unit4';
import { designAnalysisAlgorithmsUnit1 } from './subjects/designAnalysisAlgorithms.unit1';
import { designAnalysisAlgorithmsUnit2 } from './subjects/designAnalysisAlgorithms.unit2';
import { designAnalysisAlgorithmsUnit3 } from './subjects/designAnalysisAlgorithms.unit3';
import { designAnalysisAlgorithmsUnit4 } from './subjects/designAnalysisAlgorithms.unit4';
import { artificialIntelligenceUnit1 } from './subjects/artificialIntelligence.unit1';
import { artificialIntelligenceUnit2 } from './subjects/artificialIntelligence.unit2';
import { artificialIntelligenceUnit3 } from './subjects/artificialIntelligence.unit3';
import { artificialIntelligenceUnit4 } from './subjects/artificialIntelligence.unit4';
import { cryptographyNetworkSecurityUnit1 } from './subjects/cryptographyNetworkSecurity.unit1';
import { webProgrammingUnit1 } from './subjects/webProgramming.unit1';
import { webProgrammingUnit2 } from './subjects/webProgramming.unit2';
import { webProgrammingUnit3 } from './subjects/webProgramming.unit3';
import { webProgrammingUnit4 } from './subjects/webProgramming.unit4';
import { webProgrammingUnit5 } from './subjects/webProgramming.unit5';
import { researchMethodologyUnit1 } from './subjects/researchMethodology.unit1';
import { researchMethodologyUnit2 } from './subjects/researchMethodology.unit2';
import { researchMethodologyUnit3 } from './subjects/researchMethodology.unit3';
import { researchMethodologyUnit4 } from './subjects/researchMethodology.unit4';
import { researchMethodologyUnit5 } from './subjects/researchMethodology.unit5';
import { quantitativeTeachingResearchAptitudeUnit1 } from './subjects/quantitativeTeachingResearchAptitude.unit1';
import { quantitativeTeachingResearchAptitudeUnit2 } from './subjects/quantitativeTeachingResearchAptitude.unit2';
import { quantitativeTeachingResearchAptitudeUnit3 } from './subjects/quantitativeTeachingResearchAptitude.unit3';
import { quantitativeTeachingResearchAptitudeUnit4 } from './subjects/quantitativeTeachingResearchAptitude.unit4';
import { quantitativeTeachingResearchAptitudeUnit5 } from './subjects/quantitativeTeachingResearchAptitude.unit5';
import { bigDataUnit1 } from './subjects/bigData.unit1';
import { bigDataUnit2 } from './subjects/bigData.unit2';
import { bigDataUnit3 } from './subjects/bigData.unit3';
import { bigDataUnit4 } from './subjects/bigData.unit4';
import { bigDataUnit5 } from './subjects/bigData.unit5';
import { machineLearningUnit1 } from './subjects/machineLearning.unit1';
import { machineLearningUnit2 } from './subjects/machineLearning.unit2';
import { machineLearningUnit3 } from './subjects/machineLearning.unit3';
import { machineLearningUnit4 } from './subjects/machineLearning.unit4';
import { machineLearningUnit5 } from './subjects/machineLearning.unit5';
import { cloudComputingUnit1 } from './subjects/cloudComputing.unit1';
import { cloudComputingUnit2 } from './subjects/cloudComputing.unit2';
import { cloudComputingUnit3 } from './subjects/cloudComputing.unit3';
import { cloudComputingUnit4 } from './subjects/cloudComputing.unit4';
import { cloudComputingUnit5 } from './subjects/cloudComputing.unit5';
import { cryptographyNetworkSecurityUnit2 } from './subjects/cryptographyNetworkSecurity.unit2';
import { cryptographyNetworkSecurityUnit3 } from './subjects/cryptographyNetworkSecurity.unit3';
import { cryptographyNetworkSecurityUnit4 } from './subjects/cryptographyNetworkSecurity.unit4';
import { cryptographyNetworkSecurityUnit5 } from './subjects/cryptographyNetworkSecurity.unit5';

export interface Topic {
  id: string;
  name: string;
  semester: number;
  subject: string;
  unit?: string; // Added unit field
  content: {
    introduction: string;
    definition: string;
    realWorldExample: string;
    realWorldUse: string;
    importance: string;
    detailedExplanation: string;
    youtubeLinks: string[];
    externalLinks: { title: string; url: string }[];
    images?: { data: string; description: string; filename: string }[];
    sampleProgram?: string;
    diagram?: string;
    diagramDescription?: string;
  };
}

export interface Subject {
  id: string;
  name: string;
  semester: number;
  topics: Topic[];
  showAlert?: boolean;
  alertMessage?: string;
}

export const syllabusData: Subject[] = [
  // SEMESTER 1
  {
    id: 'art-of-programming',
    name: 'The Art of Programming',
    semester: 1,
    topics: [
      {
        id: 'algorithms',
        name: 'Algorithms',
        semester: 1,
        subject: 'The Art of Programming',
        content: {
          introduction: 'Algorithms are the backbone of computer science, providing a step-by-step method for solving problems and performing tasks.',
          definition: 'An algorithm is a finite sequence of well-defined instructions, typically used to solve a class of specific problems or perform a computation.',
          realWorldExample: 'A recipe for baking a cake is an algorithm: it gives you a list of steps to follow to achieve a result.',
          realWorldUse: 'Algorithms are used in search engines (like Google), navigation apps (like Google Maps), banking systems, and more.',
          importance: 'Algorithms allow us to automate tasks, solve problems efficiently, and are essential for programming and software development.',
          detailedExplanation: 'Algorithms can be simple (like adding two numbers) or complex (like sorting a million records). They are evaluated based on correctness, efficiency (time and space complexity), and clarity. Good algorithms make programs faster and more reliable.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=8hly31xKli0',
            'https://www.youtube.com/watch?v=0IAPZzGSbME'
          ],
          externalLinks: [
            { title: 'Introduction to Algorithms - MIT OpenCourseWare', url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/' },
            { title: 'Algorithm - Wikipedia', url: 'https://en.wikipedia.org/wiki/Algorithm' }
          ],
          sampleProgram: "// Example: Find the maximum number in an array\n#include <stdio.h>\nint find_max(int arr[], int n) {\n    int max = arr[0];\n    for (int i = 1; i < n; i++) {\n        if (arr[i] > max) max = arr[i];\n    }\n    return max;\n}\nint main() {\n    int arr[] = {1, 5, 3, 9, 2};\n    int n = 5;\n    printf(\"Max: %d\\n\", find_max(arr, n));\n    return 0;\n}",
          diagram: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flowchart.png/400px-Flowchart.png',
          diagramDescription: 'A flowchart showing the steps of finding the maximum number in a list: [Start] → [Set max = first number] → [For each number: Is number > max? Yes → set max = number] → [End: Output max]'
        }
      },
      {
        id: 'asymptotic-notation',
        name: 'Asymptotic Notation',
        semester: 1,
        subject: 'The Art of Programming',
        content: {
          introduction: 'Asymptotic notation describes the growth rate of algorithms as input size approaches infinity.',
          definition: 'Mathematical notation used to describe the running time of an algorithm when the input tends towards a particular value or infinity.',
          realWorldExample: 'Analyzing how Facebook\'s news feed algorithm scales with millions of users.',
          realWorldUse: 'Performance analysis, algorithm comparison, system optimization',
          importance: 'Essential for comparing algorithms and predicting performance at scale.',
          detailedExplanation: 'Big O notation (O), Omega notation (Ω), and Theta notation (Θ) are used to classify algorithms according to how their running time or space requirements grow as the input size grows.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=__vX2sjlpXU',
            'https://www.youtube.com/watch?v=A03oI0znAoc'
          ],
          externalLinks: [
            { title: 'Big O Cheat Sheet', url: 'https://www.bigocheatsheet.com/' },
            { title: 'Khan Academy - Asymptotic Notation', url: 'https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation' }
          ]
        }
      },
      {
        id: 'fibonacci',
        name: 'Fibonacci',
        semester: 1,
        subject: 'The Art of Programming',
        content: {
          introduction: 'The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones.',
          definition: 'A sequence where F(0) = 0, F(1) = 1, and F(n) = F(n-1) + F(n-2) for n > 1.',
          realWorldExample: 'Fibonacci numbers appear in nature - flower petals, pinecones, and spiral shells.',
          realWorldUse: 'Algorithm optimization, mathematical modeling, financial markets analysis',
          importance: 'Demonstrates recursion, dynamic programming, and mathematical sequences in programming.',
          detailedExplanation: 'The Fibonacci sequence showcases different algorithmic approaches: naive recursion (exponential time), memoization (linear time), and iterative approaches (linear time, constant space).',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=kkgeVrdE0KM',
            'https://www.youtube.com/watch?v=Qk0zUZW-U_M'
          ],
          externalLinks: [
            { title: 'Fibonacci in Nature', url: 'https://www.mathsisfun.com/numbers/nature-golden-ratio-fibonacci.html' },
            { title: 'Dynamic Programming - Fibonacci', url: 'https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/' }
          ],
          sampleProgram: `// Iterative approach - O(n) time, O(1) space
function fibonacci(n) {
  if (n <= 1) return n;
  
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

// Recursive with memoization - O(n) time, O(n) space
function fibonacciMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}`
        }
  },
      // --- UNIT I ---
  {
        id: 'role-of-algorithms',
        name: 'The Role of Algorithms in Computing',
    semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit I',
        content: {
          introduction: 'Algorithms are fundamental to computing, providing the logical steps needed to solve problems and automate tasks in computer systems.',
          definition: 'In computing, an algorithm is a precise set of instructions that tells a computer how to perform a specific task or solve a particular problem.',
          realWorldExample: 'When you search for a contact in your phone, an algorithm determines how the search is performed and how quickly you get results.',
          realWorldUse: 'Used in software applications, operating systems, data processing, artificial intelligence, and more to automate and optimize tasks.',
          importance: 'Algorithms enable computers to process data, make decisions, and perform complex operations efficiently and accurately. They are the building blocks of all computer programs.',
          detailedExplanation: 'Algorithms in computing are not just about mathematics—they are about logical thinking and problem-solving. Every software application, from a simple calculator to a complex AI system, relies on algorithms to function. The efficiency and effectiveness of a computer system often depend on the quality of its algorithms. Understanding algorithms helps programmers write better code and optimize system performance.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=8hly31xKli0', // Neso Academy - What is an Algorithm?
            'https://www.youtube.com/watch?v=0IAPZzGSbME' // Gate Smashers - Algorithms Introduction
          ],
          externalLinks: [
            { title: 'What is an Algorithm? (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/fundamentals-of-algorithms/' },
            { title: 'Algorithms in Computer Science (TutorialsPoint)', url: 'https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_introduction.htm' }
          ],
          sampleProgram: "// Example: Simple search in a list\n#include <stdio.h>\nint search(int arr[], int n, int item) {\n    for (int i = 0; i < n; i++) {\n        if (arr[i] == item) return 1;\n    }\n    return 0;\n}\nint main() {\n    int arr[] = {1, 2, 3, 4};\n    int n = 4, item = 3;\n    if (search(arr, n, item))\n        printf(\"Found\\n\");\n    else\n        printf(\"Not Found\\n\");\n    return 0;\n}",
          diagram: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flowchart.png/400px-Flowchart.png',
          diagramDescription: 'Flowchart showing the steps of searching for an item in a list: [Start] → [For each item: Is item = target? Yes → Found, No → Next] → [End]'
        }
      },
      {
        id: 'algorithms-as-technology',
        name: 'Algorithms as a Technology',
    semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit I',
        content: {
          introduction: 'Algorithms are not just theoretical concepts—they are practical technologies that power modern computing and digital systems.',
          definition: 'Algorithms as a technology refers to the application of algorithmic logic and processes to solve real-world problems using computers and software.',
          realWorldExample: 'Google\'s search engine uses complex algorithms to deliver the most relevant results to users in milliseconds.',
          realWorldUse: 'Used in e-commerce recommendations, fraud detection in banking, route optimization in logistics, and more.',
          importance: 'Algorithms drive innovation and efficiency in technology, enabling automation, data analysis, and intelligent decision-making across industries.',
          detailedExplanation: 'As technology, algorithms are implemented in hardware and software to automate tasks, analyze data, and solve complex problems. They are embedded in everything from smartphones to self-driving cars. The effectiveness of technology solutions often depends on the quality and efficiency of the underlying algorithms. Understanding algorithms as a technology helps bridge the gap between theory and practical application.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=6hfOvs8pY1k',
            'https://www.youtube.com/watch?v=8hly31xKli0'
          ],
          externalLinks: [
            { title: 'How Google Search Works', url: 'https://www.google.com/search/howsearchworks/algorithms/' },
            { title: 'Algorithms in Everyday Life (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/algorithms-in-real-life/' }
          ],
          sampleProgram: "// Example: Simple recommendation logic\n#include <stdio.h>\nvoid recommend(int user_history[], int n, int items[], int m) {\n    for (int i = 0; i < m; i++) {\n        int found = 0;\n        for (int j = 0; j < n; j++) {\n            if (items[i] == user_history[j]) { found = 1; break; }\n        }\n        if (!found) printf(\"Recommend: %d\\n\", items[i]);\n    }\n}\nint main() {\n    int user_history[] = {1, 2};\n    int items[] = {1, 2, 3, 4};\n    recommend(user_history, 2, items, 4);\n    return 0;\n}",
          diagram: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Block_Diagram.svg/400px-Block_Diagram.svg.png',
          diagramDescription: 'Block diagram showing data input → algorithm processing → actionable output (e.g., user query → search algorithm → search results)'
        }
      },
      {
        id: 'analyzing-algorithms',
        name: 'Analyzing Algorithms',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit I',
        content: {
          introduction: 'Analyzing algorithms helps us understand their efficiency and effectiveness in solving problems.',
          definition: 'Algorithm analysis is the process of determining the computational complexity of algorithms, focusing on time and space requirements.',
          realWorldExample: 'Comparing the time taken by different sorting algorithms (like Bubble Sort vs. Quick Sort) for large datasets.',
          realWorldUse: 'Used in software development to choose the most efficient algorithm for a given task, such as searching, sorting, or data processing.',
          importance: 'Analysis ensures that programs run efficiently, saving time and resources, especially for large-scale applications.',
          detailedExplanation: 'Algorithm analysis involves evaluating the best, average, and worst-case scenarios for time and space usage. It uses mathematical tools like Big O notation to describe performance. This helps developers select or design algorithms that are optimal for their needs.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=0IAPZzGSbME', // Gate Smashers - Analyzing Algorithms
            'https://www.youtube.com/watch?v=8hly31xKli0' // Neso Academy - Algorithm Analysis
          ],
          externalLinks: [
            { title: 'Algorithm Analysis (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/' },
            { title: 'Algorithm Analysis (TutorialsPoint)', url: 'https://www.tutorialspoint.com/data_structures_algorithms/algorithm_analysis.htm' }
          ],
          sampleProgram: "// Example: Compare time for two sorts (pseudo-code, as C does not have built-in timing)\n#include <stdio.h>\nvoid bubbleSort(int arr[], int n) {\n    for (int i = 0; i < n-1; i++)\n        for (int j = 0; j < n-i-1; j++)\n            if (arr[j] > arr[j+1]) { int t = arr[j]; arr[j] = arr[j+1]; arr[j+1] = t; }\n}\nint main() {\n    int arr[] = {5, 2, 9, 1};\n    int n = 4;\n    bubbleSort(arr, n);\n    for (int i = 0; i < n; i++) printf(\"%d \", arr[i]);\n    return 0;\n}",
          diagram: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Bar_chart_example.svg/400px-Bar_chart_example.svg.png',
          diagramDescription: 'Bar chart comparing time taken by different algorithms for the same input size.'
        }
      },
      {
        id: 'designing-algorithms',
        name: 'Designing Algorithms',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit I',
        content: {
          introduction: 'Designing algorithms is the creative process of developing step-by-step solutions to problems.',
          definition: 'Algorithm design is the process of defining a clear, logical sequence of steps to solve a specific problem.',
          realWorldExample: 'Designing an algorithm to recommend friends on a social media platform based on mutual connections.',
          realWorldUse: 'Used in developing new software features, optimizing existing systems, and solving unique business challenges.',
          importance: 'Good algorithm design leads to efficient, maintainable, and scalable software solutions.',
          detailedExplanation: 'Algorithm design involves understanding the problem, breaking it into smaller parts, and creating a logical sequence of steps. Common strategies include divide and conquer, greedy methods, and dynamic programming. Testing and refining are key parts of the design process.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=ndqKpGq1hCw', // Jenny's Lectures - Algorithm Design
            'https://www.youtube.com/watch?v=0IAPZzGSbME' // Gate Smashers - Designing Algorithms
          ],
          externalLinks: [
            { title: 'Algorithm Design Techniques', url: 'https://www.geeksforgeeks.org/algorithm-design-techniques/' },
            { title: 'Algorithm Design (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Algorithm_design' }
          ],
          sampleProgram: "// Example: Greedy algorithm for coin change\n#include <stdio.h>\nvoid min_coins(int coins[], int n, int amount) {\n    int count = 0;\n    for (int i = 0; i < n; i++) {\n        while (amount >= coins[i]) {\n            amount -= coins[i];\n            count++;\n        }\n    }\n    printf(\"Min coins: %d\\n\", count);\n}\nint main() {\n    int coins[] = {5, 2, 1};\n    int n = 3, amount = 11;\n    min_coins(coins, n, amount);\n    return 0;\n}",
          diagram: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Algorithm_Flowchart.svg/400px-Algorithm_Flowchart.svg.png',
          diagramDescription: 'Flowchart showing the steps of designing an algorithm: [Understand Problem] → [Break Down] → [Design Steps] → [Test] → [Refine]'
        }
      },
      {
        id: 'growth-of-functions',
        name: 'Growth of Functions',
    semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit I',
        content: {
          introduction: 'Growth of functions describes how the output of an algorithm increases as the input size grows.',
          definition: 'It is a mathematical way to express the rate at which an algorithm\'s resource consumption (time/space) increases with input size.',
          realWorldExample: 'Comparing how the time to process 10 vs. 10,000 records changes for different algorithms.',
          realWorldUse: 'Used in performance analysis and predicting scalability of software systems.',
          importance: 'Understanding growth helps in choosing algorithms that remain efficient as data size increases.',
          detailedExplanation: 'Growth of functions is often described using Big O notation (e.g., O(1), O(n), O(n^2)). It helps developers predict how algorithms will perform as input size increases, which is crucial for large-scale applications.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=V6mKVRU1evU', // Neso Academy - Growth of Functions
            'https://www.youtube.com/watch?v=0IAPZzGSbME' // Gate Smashers - Growth of Functions
          ],
          externalLinks: [
            { title: 'Growth of Functions (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/growth-functions/' },
            { title: 'Big O Notation (Khan Academy)', url: 'https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation' }
          ],
          sampleProgram: "// Example: O(n) vs O(n^2)\n#include <stdio.h>\nvoid linear(int n) { for (int i = 0; i < n; i++) {} }\nvoid quadratic(int n) { for (int i = 0; i < n; i++) for (int j = 0; j < n; j++) {} }\nint main() { linear(10); quadratic(10); return 0; }",
          diagram: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Comparison_computational_complexity.png/600px-Comparison_computational_complexity.png',
          diagramDescription: 'Graph showing different growth rates: linear, quadratic, exponential.'
        }
      },
      {
        id: 'standard-notations',
        name: 'Standard Notations and Common Functions',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit I',
        content: {
          introduction: 'Standard notations like Big O, Omega, and Theta are used to describe algorithm efficiency.',
          definition: 'Big O (O), Omega (Ω), and Theta (Θ) notations mathematically express upper, lower, and tight bounds of algorithm performance.',
          realWorldExample: 'Describing the efficiency of searching a sorted list as O(log n) using binary search.',
          realWorldUse: 'Used in textbooks, research papers, and technical interviews to communicate algorithm efficiency.',
          importance: 'Standard notations provide a universal language for comparing and analyzing algorithms.',
          detailedExplanation: 'Big O gives the worst-case scenario, Omega the best-case, and Theta the average-case. Common functions include constant, linear, quadratic, and logarithmic growth.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=V6mKVRU1evU', // Neso Academy - Standard Notations
            'https://www.youtube.com/watch?v=0IAPZzGSbME' // Gate Smashers - Notations and Functions
          ],
          externalLinks: [
            { title: 'Big O, Omega, Theta (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/analysis-of-algorithms-set-2-asymptotic-analysis/' },
            { title: 'Common Functions (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Time_complexity#Common_time_complexities' }
          ],
          sampleProgram: "// No code required for notations table",
          diagram: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Comparison_computational_complexity.png/600px-Comparison_computational_complexity.png',
          diagramDescription: 'Table showing different notations and their meanings.'
        }
      },
      {
        id: 'exchange-values',
        name: 'Exchanging the Values of Two Variables',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit I',
        content: {
          introduction: 'Exchanging values is a fundamental operation in programming, often used in sorting and swapping tasks.',
          definition: 'It is the process of swapping the values stored in two variables.',
          realWorldExample: 'Swapping the positions of two players in a game leaderboard.',
          realWorldUse: 'Used in sorting algorithms, memory management, and data manipulation.',
          importance: 'Swapping is essential for many algorithms, especially those involving rearrangement of data.',
          detailedExplanation: 'The classic way to exchange values uses a temporary variable, but it can also be done using arithmetic or bitwise operations.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=0IAPZzGSbME', // Gate Smashers - Swapping Variables
            'https://www.youtube.com/watch?v=8hly31xKli0' // Neso Academy - Swapping in Algorithms
          ],
          externalLinks: [
            { title: 'Swap Variables (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/swap-two-numbers-without-using-temporary-variable/' }
          ],
          sampleProgram: "// Swap using a temp variable\n#include <stdio.h>\nint main() {\n    int a = 5, b = 10, temp;\n    temp = a;\n    a = b;\n    b = temp;\n    printf(\"a = %d, b = %d\\n\", a, b);\n    return 0;\n}",
          diagram: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flowchart.png/400px-Flowchart.png',
          diagramDescription: 'Diagram showing two boxes (variables) with arrows indicating the swap.'
        }
      },
      {
        id: 'counting',
        name: 'Counting',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit I',
        content: {
          introduction: 'Counting is a basic algorithmic operation used to determine the number of items in a collection.',
          definition: 'Counting means iterating through a collection and incrementing a counter for each item.',
          realWorldExample: 'Counting the number of unread emails in your inbox.',
          realWorldUse: 'Used in statistics, data analysis, and reporting features in software.',
          importance: 'Counting is foundational for many algorithms, such as frequency analysis and data aggregation.',
          detailedExplanation: 'A simple loop can be used to count items. More advanced counting algorithms are used in data mining and analytics.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=0IAPZzGSbME', // Gate Smashers - Counting Algorithms
            'https://www.youtube.com/watch?v=8hly31xKli0' // Neso Academy - Counting in Algorithms
          ],
          externalLinks: [
            { title: 'Counting Algorithms (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/counting-sort/' }
          ],
          sampleProgram: "// Count items in an array\n#include <stdio.h>\nint main() {\n    int arr[] = {1, 2, 3, 4};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    printf(\"Count: %d\\n\", n);\n    return 0;\n}",
          diagram: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Bar_chart_example.svg/400px-Bar_chart_example.svg.png',
          diagramDescription: 'Flowchart showing a loop incrementing a counter.'
        }
      },
      {
        id: 'summation',
        name: 'Summation of a Set of Numbers',
    semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit I',
        content: {
          introduction: 'Summation is the process of adding a sequence of numbers to find their total.',
          definition: 'It is the operation of calculating the sum of a set of numbers, often using a loop or mathematical formula.',
          realWorldExample: 'Calculating the total marks obtained by a student in all subjects.',
          realWorldUse: 'Used in financial calculations, statistics, and data processing.',
          importance: 'Summation is a core operation in mathematics, programming, and data analysis.',
          detailedExplanation: 'Summation can be performed using a simple loop or using built-in functions. For large datasets, efficient summation algorithms are important.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=0IAPZzGSbME', // Gate Smashers - Summation Algorithms
            'https://www.youtube.com/watch?v=8hly31xKli0' // Neso Academy - Summation in Algorithms
          ],
          externalLinks: [
            { title: 'Sum of Numbers (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/python-program-to-find-sum-of-array/' }
          ],
          sampleProgram: "// Sum an array\n#include <stdio.h>\nint main() {\n    int arr[] = {1, 2, 3, 4};\n    int n = 4, sum = 0;\n    for (int i = 0; i < n; i++) sum += arr[i];\n    printf(\"Sum: %d\\n\", sum);\n    return 0;\n}",
          diagram: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sigma_sum.svg/400px-Sigma_sum.svg.png',
          diagramDescription: 'Diagram showing numbers being added together to form a total.'
        }
      },
      {
        id: 'factorial-computation',
        name: 'Factorial Computation',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit I',
        content: {
          introduction: 'Factorial computation is a classic example of recursion and iteration in programming.',
          definition: 'The factorial of a number n (written as n!) is the product of all positive integers less than or equal to n.',
          realWorldExample: 'Calculating the number of ways to arrange books on a shelf.',
          realWorldUse: 'Used in probability, statistics, and combinatorics.',
          importance: 'Factorials are essential for solving problems involving permutations and combinations.',
          detailedExplanation: 'Factorials can be computed using loops or recursion. Efficient computation is important for large values of n.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=0IAPZzGSbME', // Gate Smashers - Factorial Computation
            'https://www.youtube.com/watch?v=8hly31xKli0' // Neso Academy - Factorial in Algorithms
          ],
          externalLinks: [
            { title: 'Factorial Program (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/python-program-to-find-factorial-of-a-number/' }
          ],
          sampleProgram: "// Factorial using recursion\n#include <stdio.h>\nint factorial(int n) {\n    if (n == 0) return 1;\n    else return n * factorial(n-1);\n}\nint main() {\n    int n = 5;\n    printf(\"Factorial: %d\\n\", factorial(n));\n    return 0;\n}",
          diagram: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Factorial_tree_4.png/400px-Factorial_tree_4.png',
          diagramDescription: 'Recursive tree showing calls for factorial(4).'
        }
      },
      {
        id: 'fibonacci-sequence',
        name: 'Generating the Fibonacci Sequence',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit I',
        content: {
          introduction: 'The Fibonacci sequence is a series where each number is the sum of the two preceding ones.',
          definition: 'F(n) = F(n-1) + F(n-2), with F(0) = 0 and F(1) = 1.',
          realWorldExample: 'Fibonacci numbers appear in nature, such as the arrangement of leaves on a stem.',
          realWorldUse: 'Used in computer algorithms, financial models, and nature studies.',
          importance: 'Understanding Fibonacci helps in learning recursion and dynamic programming.',
          detailedExplanation: 'The sequence can be generated using loops or recursion. Efficient algorithms are needed for large n.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=0IAPZzGSbME', // Gate Smashers - Fibonacci Sequence
            'https://www.youtube.com/watch?v=8hly31xKli0' // Neso Academy - Fibonacci in Algorithms
          ],
          externalLinks: [
            { title: 'Fibonacci Sequence (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/' }
          ],
          sampleProgram: "// Fibonacci using iteration\n#include <stdio.h>\nvoid fibonacci(int n) {\n    int a = 0, b = 1, c;\n    for (int i = 0; i < n; i++) {\n        printf(\"%d \", a);\n        c = a + b;\n        a = b;\n        b = c;\n    }\n}\nint main() {\n    fibonacci(10);\n    return 0;\n}",
          diagram: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Fibonacci_spiral_34.svg/400px-Fibonacci_spiral_34.svg.png',
          diagramDescription: 'Diagram showing the sequence: 0, 1, 1, 2, 3, 5, 8, ...'
        }
      },
      {
        id: 'reverse-digits',
        name: 'Reversing the Digits of an Integer',
    semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit I',
        content: {
          introduction: 'Reversing digits is a common operation in number manipulation and data processing.',
          definition: 'It is the process of rearranging the digits of an integer in reverse order.',
          realWorldExample: 'Reversing a phone number for data entry validation.',
          realWorldUse: 'Used in cryptography, data validation, and digital signal processing.',
          importance: 'Reversing digits is a building block for more complex algorithms.',
          detailedExplanation: 'The process involves extracting digits one by one and constructing the reversed number.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=0IAPZzGSbME', // Gate Smashers - Reversing Digits
            'https://www.youtube.com/watch?v=8hly31xKli0' // Neso Academy - Reverse Digits in Algorithms
          ],
          externalLinks: [
            { title: 'Reverse Digits (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/write-a-program-to-reverse-digits-of-a-number/' }
          ],
          sampleProgram: "// Reverse digits\n#include <stdio.h>\nint reverse(int n) {\n    int rev = 0;\n    while (n > 0) {\n        rev = rev * 10 + n % 10;\n        n /= 10;\n    }\n    return rev;\n}\nint main() {\n    int n = 1234;\n    printf(\"Reverse: %d\\n\", reverse(n));\n    return 0;\n}",
          diagram: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flowchart.png/400px-Flowchart.png',
          diagramDescription: 'Diagram showing the reversal of 1234 to 4321.'
        }
      },
      {
        id: 'base-conversion',
        name: 'Base Conversion',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit I',
        content: {
          introduction: 'Base conversion is the process of changing a number from one base to another (e.g., decimal to binary).',
          definition: 'It involves dividing the number by the new base and recording the remainders.',
          realWorldExample: 'Converting a decimal number to binary for computer processing.',
          realWorldUse: 'Used in computer systems, digital electronics, and data encoding.',
          importance: 'Base conversion is essential for understanding how computers represent and process data.',
          detailedExplanation: 'The process can be done manually or using built-in programming functions. Understanding the logic helps in low-level programming.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=0IAPZzGSbME', // Gate Smashers - Base Conversion
            'https://www.youtube.com/watch?v=8hly31xKli0' // Neso Academy - Base Conversion in Algorithms
          ],
          externalLinks: [
            { title: 'Base Conversion (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/program-for-decimal-to-binary-conversion/' }
          ],
          sampleProgram: "// Decimal to binary\n#include <stdio.h>\nvoid dec_to_bin(int n) {\n    int bin[32], i = 0;\n    while (n > 0) { bin[i++] = n % 2; n /= 2; }\n    for (int j = i-1; j >= 0; j--) printf(\"%d\", bin[j]);\n}\nint main() {\n    dec_to_bin(10);\n    return 0;\n}",
          diagram: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sigma_sum.svg/400px-Sigma_sum.svg.png',
          diagramDescription: 'Diagram showing conversion from decimal 10 to binary 1010.'
        }
      },
      {
        id: 'char-to-number',
        name: 'Character to Number Conversion',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit I',
        content: {
          introduction: 'Character to number conversion is used to process and analyze text data in programming.',
          definition: 'It is the process of converting a character (like "A") to its corresponding numeric code (like ASCII value 65).',
          realWorldExample: 'Encrypting messages by converting characters to numbers.',
          realWorldUse: 'Used in cryptography, data encoding, and text processing.',
          importance: 'Understanding this conversion is key for low-level programming and data security.',
          detailedExplanation: 'Programming languages provide functions to convert characters to their numeric codes and vice versa.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=0IAPZzGSbME', // Gate Smashers - Char to Number Conversion
            'https://www.youtube.com/watch?v=8hly31xKli0' // Neso Academy - Char to Number in Algorithms
          ],
          externalLinks: [
            { title: 'Char to ASCII (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/python-program-to-find-ascii-value-of-character/' }
          ],
          sampleProgram: "// Char to ASCII\n#include <stdio.h>\nint main() {\n    char c = 'A';\n    printf(\"ASCII: %d\\n\", c);\n    return 0;\n}",
          diagram: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ASCII-Table-wide.svg/400px-ASCII-Table-wide.svg.png',
          diagramDescription: 'Diagram showing character "A" mapped to number 65.'
        }
      },
      // --- UNIT II ---
      {
        id: 'c-programming-getting-started',
        name: 'C Programming: Getting Started',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit II',
        content: {
          introduction: 'C is a foundational programming language that has influenced many modern languages. It is known for its efficiency and control over system resources.',
          definition: 'C is a general-purpose, procedural programming language developed in the early 1970s by Dennis Ritchie at Bell Labs.',
          realWorldExample: 'The Linux operating system kernel is written in C, demonstrating its power and efficiency for system-level programming.',
          realWorldUse: 'C is used in operating systems, embedded systems, compilers, and performance-critical applications.',
          importance: 'Learning C provides a strong foundation for understanding how computers work at a low level and makes it easier to learn other languages like C++, Java, and Python.',
          detailedExplanation: 'C offers low-level memory access, a simple set of keywords, and a clean style, making it suitable for system programming like operating system or compiler development. It is portable and efficient, but requires careful management of memory and resources.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=irqbmMNs2Bo', // Neso Academy - C Programming Introduction
            'https://www.youtube.com/watch?v=ZSPZob_1TOk' // Jenny's Lectures - C Programming Basics
          ],
          externalLinks: [
            { title: 'GeeksforGeeks: C Programming Language', url: 'https://www.geeksforgeeks.org/c-programming-language/' },
            { title: 'TutorialsPoint: C Programming', url: 'https://www.tutorialspoint.com/cprogramming/index.htm' }
          ],
          sampleProgram: '#include <stdio.h>\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Block diagram showing the flow of a simple C program.'
        }
      },
      {
        id: 'variables-arithmetic-expressions',
        name: 'Variables and Arithmetic Expressions',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit II',
        content: {
          introduction: 'Variables store data values, and arithmetic expressions allow you to perform calculations in C programs.',
          definition: 'A variable is a named storage location for data. Arithmetic expressions use operators like +, -, *, /, and % to compute values.',
          realWorldExample: 'Calculating the total price in a shopping cart using variables for item prices and quantities.',
          realWorldUse: 'Used in all programs that require data storage and calculations, such as billing systems, games, and scientific applications.',
          importance: 'Understanding variables and expressions is fundamental to programming and problem-solving in C.',
          detailedExplanation: 'Variables must be declared with a type before use. Arithmetic expressions follow operator precedence and associativity rules. C supports integer, floating-point, and character variables.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=EjavYOFoJJ0', // CodeWithHarry - Variables in C
            'https://www.youtube.com/watch?v=V0sg84Ue5g8' // Gate Smashers - Arithmetic Operators in C
          ],
          externalLinks: [
            { title: 'Variables in C (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/variables-in-c/' },
            { title: 'Arithmetic Operators in C (TutorialsPoint)', url: 'https://www.tutorialspoint.com/cprogramming/c_arithmetic_operators.htm' }
          ],
          sampleProgram: '#include <stdio.h>\nint main() {\n    int a = 5, b = 3;\n    int sum = a + b;\n    printf("Sum: %d\\n", sum);\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Diagram showing variables a, b, and their sum.'
        }
      },
      {
        id: 'standard-input-output',
        name: 'Standard Input and Output',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit II',
        content: {
          introduction: 'Standard input and output functions allow programs to interact with users by reading input and displaying output.',
          definition: 'Standard input (stdin) is used to read data, and standard output (stdout) is used to display data. In C, scanf() reads input and printf() displays output.',
          realWorldExample: 'A calculator program that asks the user for two numbers and prints the result.',
          realWorldUse: 'Used in all interactive programs, command-line tools, and data processing applications.',
          importance: 'Input and output are essential for user interaction and data communication in programs.',
          detailedExplanation: 'C provides functions like printf(), scanf(), getchar(), and putchar() for I/O. Data can be read from the keyboard and written to the screen or files.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=Jv2uxzhPFl4', // Jenny's Lectures - Input and Output in C
            'https://www.youtube.com/watch?v=5rgy6zt9u0g' // Gate Smashers - printf and scanf
          ],
          externalLinks: [
            { title: 'Input and Output in C (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/input-output-system-calls-c-create-open-close-read-write/' },
            { title: 'C Input/Output (TutorialsPoint)', url: 'https://www.tutorialspoint.com/cprogramming/c_input_output.htm' }
          ],
          sampleProgram: '#include <stdio.h>\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    printf("You entered: %d\\n", num);\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'I/O diagram: user input → program → output.'
        }
      },
      {
        id: 'formatted-output-printf',
        name: 'Formatted Output - printf',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit II',
        content: {
          introduction: 'The printf() function is used to display formatted output in C programs.',
          definition: 'printf() is a standard library function that prints formatted text to the standard output (screen).',
          realWorldExample: 'Printing a table of student marks with aligned columns.',
          realWorldUse: 'Used in all programs that need to display data in a readable format.',
          importance: 'Formatted output improves the clarity and usability of program results.',
          detailedExplanation: 'printf() supports format specifiers like %d, %f, %c, and %s for integers, floats, characters, and strings. You can control width, precision, and alignment.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=5rgy6zt9u0g', // Gate Smashers - printf in C
            'https://www.youtube.com/watch?v=Jv2uxzhPFl4' // Jenny's Lectures - printf and scanf
          ],
          externalLinks: [
            { title: 'printf in C (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/printf-in-c/' },
            { title: 'C printf() (TutorialsPoint)', url: 'https://www.tutorialspoint.com/c_standard_library/c_function_printf.htm' }
          ],
          sampleProgram: '#include <stdio.h>\nint main() {\n    int age = 20;\n    printf("I am %d years old.\\n", age);\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Block showing printf() formatting output.'
        }
      },
      {
        id: 'variable-length-argument-list',
        name: 'Variable Length Argument List',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit II',
        content: {
          introduction: 'Some C functions can accept a variable number of arguments, such as printf().',
          definition: 'A variable length argument list allows a function to accept an indefinite number of arguments, using stdarg.h macros.',
          realWorldExample: 'printf() can print any number of values, e.g., printf("%d %d", a, b);',
          realWorldUse: 'Used in functions that need to handle flexible input, like logging or formatting functions.',
          importance: 'Provides flexibility and reusability in function design.',
          detailedExplanation: 'The stdarg.h header provides va_list, va_start, va_arg, and va_end macros to access variable arguments. Care must be taken to handle types and counts correctly.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=5rgy6zt9u0g', // Gate Smashers - printf in C (shows varargs)
            'https://www.youtube.com/watch?v=Jv2uxzhPFl4' // Jenny's Lectures - printf and scanf
          ],
          externalLinks: [
            { title: 'Variable Arguments in C (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/variable-length-arguments-in-c/' },
            { title: 'C Variable Arguments (TutorialsPoint)', url: 'https://www.tutorialspoint.com/cprogramming/c_variable_arguments.htm' }
          ],
          sampleProgram: '#include <stdio.h>\n#include <stdarg.h>\nvoid printNumbers(int count, ...) {\n    va_list args;\n    va_start(args, count);\n    for (int i = 0; i < count; i++) {\n        int num = va_arg(args, int);\n        printf("%d ", num);\n    }\n    va_end(args);\n    printf("\\n");\n}\nint main() {\n    printNumbers(3, 10, 20, 30);\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Ellipsis representing variable arguments.'
        }
      },
      {
        id: 'formatted-input-scanf',
        name: 'Formatted Input - scanf',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit II',
        content: {
          introduction: 'The scanf() function is used to read formatted input from the user in C programs.',
          definition: 'scanf() is a standard library function that reads formatted data from standard input (keyboard).',
          realWorldExample: 'Reading a user\'s age and name from the keyboard.',
          realWorldUse: 'Used in interactive programs, data entry forms, and command-line tools.',
          importance: 'Formatted input allows programs to accept and process user data.',
          detailedExplanation: 'scanf() uses format specifiers like %d, %f, %c, and %s to read integers, floats, characters, and strings. It requires the address of variables (&).',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=Jv2uxzhPFl4', // Jenny's Lectures - scanf in C
            'https://www.youtube.com/watch?v=5rgy6zt9u0g' // Gate Smashers - scanf in C
          ],
          externalLinks: [
            { title: 'scanf in C (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/scanf-in-c/' },
            { title: 'C scanf() (TutorialsPoint)', url: 'https://www.tutorialspoint.com/c_standard_library/c_function_scanf.htm' }
          ],
          sampleProgram: '#include <stdio.h>\nint main() {\n    int age;\n    printf("Enter your age: ");\n    scanf("%d", &age);\n    printf("You are %d years old.\\n", age);\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Block showing scanf() reading input.'
        }
      },
      {
        id: 'statements-blocks',
        name: 'Statements and Blocks',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit II',
        content: {
          introduction: 'Statements are individual instructions, and blocks are groups of statements enclosed in braces {}.',
          definition: 'A statement is a single line of code. A block is a set of statements grouped together with curly braces.',
          realWorldExample: 'A block of code inside an if statement or a loop.',
          realWorldUse: 'Used in all control structures, functions, and program logic.',
          importance: 'Blocks allow grouping of statements for structured and readable code.',
          detailedExplanation: 'Blocks define the scope of variables and control flow. Nested blocks are common in C programs.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=EjavYOFoJJ0', // CodeWithHarry - Statements in C
            'https://www.youtube.com/watch?v=Jv2uxzhPFl4' // Jenny's Lectures - Blocks in C
          ],
          externalLinks: [
            { title: 'Blocks in C (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/block-in-c/' },
            { title: 'C Statements (TutorialsPoint)', url: 'https://www.tutorialspoint.com/cprogramming/c_statements.htm' }
          ],
          sampleProgram: '#include <stdio.h>\nint main() {\n    int x = 10;\n    if (x > 5) {\n        printf("x is greater than 5\\n");\n    }\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Braces showing a code block.'
        }
      },
      {
        id: 'if-else-switch',
        name: 'If-Else, Else-If, Switch',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit II',
        content: {
          introduction: 'Conditional statements control the flow of execution based on conditions.',
          definition: 'if-else and else-if are used for branching. switch is used for multi-way branching based on variable values.',
          realWorldExample: 'A program that prints different messages based on the user\'s grade.',
          realWorldUse: 'Used in decision-making, menu-driven programs, and state machines.',
          importance: 'Conditional logic is essential for dynamic and interactive programs.',
          detailedExplanation: 'if-else checks conditions in sequence. switch evaluates an expression and jumps to matching case labels. Both improve code clarity and control.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=V0sg84Ue5g8', // Gate Smashers - if-else in C
            'https://www.youtube.com/watch?v=Jv2uxzhPFl4' // Jenny's Lectures - switch in C
          ],
          externalLinks: [
            { title: 'if-else in C (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/decision-making-c-cpp/' },
            { title: 'switch Statement (TutorialsPoint)', url: 'https://www.tutorialspoint.com/cprogramming/c_switch_statement.htm' }
          ],
          sampleProgram: '#include <stdio.h>\nint main() {\n    int grade = 85;\n    if (grade >= 90)\n        printf("A\\n");\n    else if (grade >= 80)\n        printf("B\\n");\n    else\n        printf("C\\n");\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Decision diamond for if-else and switch.'
        }
      },
      {
        id: 'loops-break-continue-goto',
        name: 'Loops: While, For, Do While, Break, Continue, Goto, Labels',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit II',
        content: {
          introduction: 'Loops allow repeated execution of code blocks. break, continue, goto, and labels control loop flow.',
          definition: 'while, for, and do-while are loop constructs. break exits a loop, continue skips to the next iteration, goto jumps to a label.',
          realWorldExample: 'Printing numbers from 1 to 10 using a for loop.',
          realWorldUse: 'Used in all repetitive tasks, data processing, and automation.',
          importance: 'Loops and control statements are essential for efficient and flexible programs.',
          detailedExplanation: 'while checks the condition before each iteration. do-while checks after. for is concise for counting loops. break and continue alter loop flow. goto is rarely used.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=V0sg84Ue5g8', // Gate Smashers - Loops in C
            'https://www.youtube.com/watch?v=Jv2uxzhPFl4' // Jenny's Lectures - Loops in C
          ],
          externalLinks: [
            { title: 'Loops in C (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/loops-in-c-and-cpp/' },
            { title: 'C Loops (TutorialsPoint)', url: 'https://www.tutorialspoint.com/cprogramming/c_loops.htm' }
          ],
          sampleProgram: '#include <stdio.h>\nint main() {\n    for (int i = 1; i <= 10; i++) {\n        printf("%d ", i);\n    }\n    printf("\\n");\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Loop arrow showing repeated execution.'
        }
      },
      {
        id: 'pointers-address',
        name: 'Pointers and Address',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit II',
        content: {
          introduction: 'Pointers store memory addresses and enable dynamic memory management in C.',
          definition: 'A pointer is a variable that stores the address of another variable.',
          realWorldExample: 'Dynamic memory allocation using malloc() returns a pointer to the allocated memory.',
          realWorldUse: 'Used in arrays, strings, dynamic memory, and data structures like linked lists.',
          importance: 'Pointers provide flexibility and efficiency, but require careful handling to avoid errors.',
          detailedExplanation: 'Pointers are declared with *. The & operator gets the address, and * dereferences the pointer. Pointer arithmetic is possible.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=zuegQmMdy8M', // Neso Academy - Pointers in C
            'https://www.youtube.com/watch?v=DTxHyVn0ODg' // Gate Smashers - Pointers in C
          ],
          externalLinks: [
            { title: 'Pointers in C (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/pointers-in-c-and-cpp/' },
            { title: 'C Pointers (TutorialsPoint)', url: 'https://www.tutorialspoint.com/cprogramming/c_pointers.htm' }
          ],
          sampleProgram: '#include <stdio.h>\nint main() {\n    int x = 10;\n    int *p = &x;\n    printf("Address: %p, Value: %d\\n", p, *p);\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Pointer arrow from variable to address.'
        }
      },
      {
        id: 'pointers-function-arguments',
        name: 'Pointers and Function Arguments',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit II',
        content: {
          introduction: 'Pointers can be used to pass arguments by reference to functions.',
          definition: 'Passing a pointer to a function allows the function to modify the original variable.',
          realWorldExample: 'A function that swaps two numbers using pointers.',
          realWorldUse: 'Used in sorting algorithms, data structures, and memory management.',
          importance: 'Enables efficient data manipulation and sharing between functions.',
          detailedExplanation: 'Function parameters can be pointers. Changes made to the pointed data affect the original variable.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=DTxHyVn0ODg', // Gate Smashers - Pointers as Function Arguments
            'https://www.youtube.com/watch?v=zuegQmMdy8M' // Neso Academy - Pointers in C
          ],
          externalLinks: [
            { title: 'Pointers as Function Arguments (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/passing-pointer-to-function-in-c/' },
            { title: 'C Function Arguments (TutorialsPoint)', url: 'https://www.tutorialspoint.com/cprogramming/c_function_arguments.htm' }
          ],
          sampleProgram: '#include <stdio.h>\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\nint main() {\n    int x = 5, y = 10;\n    swap(&x, &y);\n    printf("x = %d, y = %d\\n", x, y);\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Pointer passing to function.'
        }
      },
      {
        id: 'multidimensional-array',
        name: 'Multidimensional Array',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit II',
        content: {
          introduction: 'Multidimensional arrays store data in a grid or table format.',
          definition: 'A multidimensional array is an array of arrays, commonly used for matrices.',
          realWorldExample: 'A 2D array representing a chessboard or a matrix.',
          realWorldUse: 'Used in scientific computing, games, and data analysis.',
          importance: 'Allows efficient storage and manipulation of tabular data.',
          detailedExplanation: 'Declared as int arr[3][4];. Accessed with two indices: arr[i][j]. Memory is stored in row-major order.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=KJgsSFOSQv0', // Neso Academy - Multidimensional Arrays
            'https://www.youtube.com/watch?v=irqbmMNs2Bo' // Gate Smashers - Multidimensional Arrays
          ],
          externalLinks: [
            { title: 'Multidimensional Arrays (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/multidimensional-arrays-c-cpp/' },
            { title: 'C Multidimensional Arrays (TutorialsPoint)', url: 'https://www.tutorialspoint.com/cprogramming/c_multi_dimensional_arrays.htm' }
          ],
          sampleProgram: '#include <stdio.h>\nint main() {\n    int arr[2][3] = {{1,2,3},{4,5,6}};\n    for (int i = 0; i < 2; i++) {\n        for (int j = 0; j < 3; j++) {\n            printf("%d ", arr[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Grid showing a 2D array.'
        }
      },
      {
        id: 'pointer-array-init',
        name: 'Initialization of Pointer Arrays',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit II',
        content: {
          introduction: 'Pointer arrays allow you to store addresses of multiple variables or arrays.',
          definition: 'An array of pointers is a collection of memory addresses, each pointing to a variable or array.',
          realWorldExample: 'An array of strings (char *argv[]) in command-line arguments.',
          realWorldUse: 'Used in dynamic data structures, string manipulation, and function pointers.',
          importance: 'Enables flexible and efficient data management.',
          detailedExplanation: 'Declared as int *arr[5];. Each element can point to an int variable or array. Useful for jagged arrays and dynamic memory.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=zuegQmMdy8M', // Neso Academy - Array of Pointers
            'https://www.youtube.com/watch?v=DTxHyVn0ODg' // Gate Smashers - Array of Pointers
          ],
          externalLinks: [
            { title: 'Array of Pointers (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/array-of-pointers-in-c-cpp/' },
            { title: 'C Array of Pointers (TutorialsPoint)', url: 'https://www.tutorialspoint.com/cprogramming/c_pointer_to_an_array.htm' }
          ],
          sampleProgram: '#include <stdio.h>\nint main() {\n    int a = 10, b = 20, c = 30;\n    int *arr[3] = {&a, &b, &c};\n    for (int i = 0; i < 3; i++) {\n        printf("%d ", *arr[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Pointer array pointing to variables.'
        }
      },
      {
        id: 'command-line-arguments',
        name: 'Command Line Arguments',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit II',
        content: {
          introduction: 'Command line arguments allow users to pass information to programs when they are executed.',
          definition: 'Arguments provided after the program name in the terminal, accessible via main(int argc, char *argv[]).',
          realWorldExample: 'Running ./a.out input.txt output.txt to specify input and output files.',
          realWorldUse: 'Used in all command-line tools, scripts, and automation.',
          importance: 'Enables flexible and dynamic program execution.',
          detailedExplanation: 'argc is the argument count, argv is an array of argument strings. Arguments are parsed and used in the program.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=KJgsSFOSQv0', // Neso Academy - Command Line Arguments
            'https://www.youtube.com/watch?v=irqbmMNs2Bo' // Gate Smashers - Command Line Arguments
          ],
          externalLinks: [
            { title: 'Command Line Arguments (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/command-line-arguments-in-c-cpp/' },
            { title: 'C Command Line Arguments (TutorialsPoint)', url: 'https://www.tutorialspoint.com/cprogramming/c_command_line_arguments.htm' }
          ],
          sampleProgram: '#include <stdio.h>\nint main(int argc, char *argv[]) {\n    printf("Number of arguments: %d\\n", argc);\n    for (int i = 0; i < argc; i++) {\n        printf("Argument %d: %s\\n", i, argv[i]);\n    }\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Terminal showing command line arguments.'
        }
      },
      // --- UNIT III ---
      {
        id: 'square-root-smallest-divisor',
        name: 'Finding the Square Root and Smallest Divisor of an Integer',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit III',
        content: {
          introduction: 'Finding the square root and smallest divisor of an integer are fundamental operations in mathematics and programming.',
          definition: 'The square root of a number is a value that, when multiplied by itself, gives the number. The smallest divisor is the smallest integer greater than 1 that divides the number exactly.',
          realWorldExample: 'Calculating the square root is used in geometry and physics. Finding divisors is used in cryptography and number theory.',
          realWorldUse: 'Used in scientific calculations, cryptography, and optimization problems.',
          importance: 'Understanding these operations helps in solving complex mathematical and computational problems.',
          detailedExplanation: 'The square root can be found using iterative methods like the Babylonian method. The smallest divisor can be found by checking divisibility from 2 up to the square root of the number.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=VYt1k9eR5b4',
            'https://www.youtube.com/watch?v=8hly31xKli0'
          ],
          externalLinks: [
            { title: 'Square Root in C (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/c-program-for-square-root-of-a-number/' },
            { title: 'Smallest Divisor (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/smallest-divisor-greater-than-1-of-a-number/' }
          ],
          sampleProgram: '#include <stdio.h>\n#include <math.h>\nint main() {\n    int n = 36;\n    printf("Square root: %.2f\\n", sqrt(n));\n    int divisor = 2;\n    while (n % divisor != 0) divisor++;\n    printf("Smallest divisor: %d\\n", divisor);\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Flowchart for finding square root and smallest divisor.'
        }
      },
      {
        id: 'gcd-two-integers',
        name: 'Greatest Common Divisor (GCD) of Two Integers',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit III',
        content: {
          introduction: 'The GCD is the largest integer that divides two numbers without leaving a remainder.',
          definition: 'GCD(a, b) is the greatest integer that divides both a and b exactly.',
          realWorldExample: 'Used in simplifying fractions and cryptographic algorithms like RSA.',
          realWorldUse: 'Used in mathematics, cryptography, and computer science.',
          importance: 'Helps in reducing fractions and finding common factors in algorithms.',
          detailedExplanation: 'The Euclidean algorithm is an efficient way to compute the GCD by repeated division.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=JUzYl1TYMcU',
            'https://www.youtube.com/watch?v=0IAPZzGSbME'
          ],
          externalLinks: [
            { title: 'GCD in C (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/c-program-find-gcd-hcf-two-numbers/' }
          ],
          sampleProgram: '#include <stdio.h>\nint gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }\nint main() {\n    int a = 36, b = 60;\n    printf("GCD: %d\\n", gcd(a, b));\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Euclidean algorithm flowchart.'
        }
      },
      {
        id: 'generating-prime-numbers',
        name: 'Generating Prime Numbers',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit III',
        content: {
          introduction: 'Prime numbers are numbers greater than 1 that have no divisors other than 1 and themselves.',
          definition: 'A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.',
          realWorldExample: 'Prime numbers are used in cryptography, such as RSA encryption, to secure data.',
          realWorldUse: 'Used in cryptography, hashing algorithms, and random number generation.',
          importance: 'Understanding prime numbers is essential for number theory, cryptography, and algorithm design.',
          detailedExplanation: 'To generate prime numbers, algorithms like the Sieve of Eratosthenes or trial division are used. The Sieve of Eratosthenes is efficient for generating all primes up to a certain limit by iteratively marking the multiples of each prime starting from 2. Trial division checks divisibility for each number up to its square root. Prime numbers play a crucial role in public-key cryptography, where the difficulty of factoring large numbers into primes ensures security. Efficient prime generation is also important in randomized algorithms and hash functions. Understanding the distribution and properties of primes helps in optimizing algorithms for large-scale computations. Efficient prime generation is crucial in cryptography, as the security of public-key systems like RSA depends on the computational difficulty of factoring large numbers.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=0OlgUuXnK2A',
            'https://www.youtube.com/watch?v=0IAPZzGSbME'
          ],
          externalLinks: [
            { title: 'Prime Numbers in C (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/c-program-to-print-all-prime-numbers-between-1-to-n/' }
          ],
          sampleProgram: '#include <stdio.h>\nint isPrime(int n) {\n    if (n <= 1) return 0;\n    for (int i = 2; i * i <= n; i++)\n        if (n % i == 0) return 0;\n    return 1;\n}\nint main() {\n    for (int i = 2; i <= 50; i++)\n        if (isPrime(i)) printf("%d ", i);\n    printf("\\n");\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Sieve of Eratosthenes diagram.'
        }
      },
      {
        id: 'computing-prime-factors',
        name: 'Computing the Prime Factors of an Integer',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit III',
        content: {
          introduction: 'Prime factorization is the process of breaking down a number into its basic building blocks—prime numbers.',
          definition: 'The prime factors of an integer are the set of prime numbers that multiply together to give the original number.',
          realWorldExample: 'Prime factorization is used in cryptography, such as RSA encryption, where the security relies on the difficulty of factoring large numbers.',
          realWorldUse: 'Used in cryptography, number theory, and simplifying fractions in mathematics.',
          importance: 'Prime factorization is fundamental to many algorithms in computer science and mathematics, especially in security and data integrity.',
          detailedExplanation: 'To compute the prime factors of an integer, start by dividing the number by the smallest prime (2) and continue dividing by primes in ascending order until the number becomes 1. Each time a division is exact, record the prime and divide the number by it. This process is repeated for each prime. The efficiency of prime factorization is crucial in cryptography, as the security of public-key systems like RSA depends on the computational difficulty of factoring large numbers. In addition, prime factorization is used in finding the greatest common divisor (GCD), least common multiple (LCM), and in various algorithms for data compression and error detection. Understanding the distribution and properties of prime factors helps in optimizing algorithms for large-scale computations and in solving complex mathematical problems.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=0OlgUuXnK2A',
            'https://www.youtube.com/watch?v=0IAPZzGSbME'
          ],
          externalLinks: [
            { title: 'Prime Factorization in C (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/print-all-prime-factors-of-a-given-number/' }
          ],
          sampleProgram: '#include <stdio.h>\nvoid primeFactors(int n) {\n    for (int i = 2; i * i <= n; i++) {\n        while (n % i == 0) {\n            printf("%d ", i);\n            n /= i;\n        }\n    }\n    if (n > 1) printf("%d", n);\n}\nint main() {\n    int n = 60;\n    printf("Prime factors: ");\n    primeFactors(n);\n    printf("\\n");\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Factor tree diagram for prime factorization.'
        }
      },
      {
        id: 'pseudo-random-numbers',
        name: 'Generation of Pseudo Random Numbers',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit III',
        content: {
          introduction: 'Pseudo random numbers are numbers generated by algorithms that simulate randomness.',
          definition: 'A pseudo random number is a number that appears random but is generated by a deterministic process, typically an algorithm.',
          realWorldExample: 'Random numbers are used in games for dice rolls, shuffling cards, and generating unpredictable events.',
          realWorldUse: 'Used in simulations, cryptography, games, statistical sampling, and randomized algorithms.',
          importance: 'Pseudo random number generation is crucial for testing, simulations, cryptography, and any application requiring unpredictability.',
          detailedExplanation: 'Computers cannot generate truly random numbers without external input, so they use algorithms called pseudo random number generators (PRNGs). A common PRNG is the Linear Congruential Generator (LCG), which uses a recurrence relation to produce a sequence of numbers. The sequence is determined by an initial value called the seed. While the numbers appear random, they are completely determined by the seed and the algorithm. For most applications, PRNGs are sufficient, but for cryptographic purposes, more secure generators are needed. Understanding how PRNGs work helps in choosing the right generator for a given application and in avoiding predictable patterns in sensitive applications.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=0IAPZzGSbME',
            'https://www.youtube.com/watch?v=8hly31xKli0'
          ],
          externalLinks: [
            { title: 'Random Number Generation in C (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/generating-random-number-in-c-cpp/' }
          ],
          sampleProgram: '#include <stdio.h>\n#include <stdlib.h>\n#include <time.h>\nint main() {\n    srand(time(0)); // Seed the random number generator\n    for (int i = 0; i < 5; i++) {\n        printf("%d ", rand());\n    }\n    printf("\\n");\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Block diagram showing seed input to PRNG and random number output.'
        }
      },
      {
        id: 'large-power',
        name: 'Raising a Number to a Large Power',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit III',
        content: {
          introduction: 'Raising a number to a large power is a common operation in mathematics, cryptography, and scientific computing.',
          definition: 'Exponentiation is the process of multiplying a number by itself a specified number of times.',
          realWorldExample: 'Calculating compound interest or encrypting data using modular exponentiation in cryptography.',
          realWorldUse: 'Used in cryptography (RSA), scientific calculations, and algorithms involving repeated multiplication.',
          importance: 'Efficient exponentiation is crucial for performance in cryptography and scientific applications.',
          detailedExplanation: 'The naive approach to exponentiation multiplies the base by itself exponent times, which is O(n). A more efficient method is exponentiation by squaring, which reduces the time complexity to O(log n). This method works by recursively breaking down the exponentiation into smaller problems. For very large numbers, modular exponentiation is used to keep the results within manageable limits. Understanding efficient exponentiation is important for optimizing algorithms and ensuring security in cryptographic systems.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=0IAPZzGSbME',
            'https://www.youtube.com/watch?v=8hly31xKli0'
          ],
          externalLinks: [
            { title: 'Modular Exponentiation (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/modular-exponentiation-power-in-modular-arithmetic/' }
          ],
          sampleProgram: '#include <stdio.h>\nlong long power(int base, int exp) {\n    long long result = 1;\n    while (exp > 0) {\n        if (exp % 2 == 1) result *= base;\n        base *= base;\n        exp /= 2;\n    }\n    return result;\n}\nint main() {\n    int base = 2, exp = 10;\n    printf("%lld\\n", power(base, exp));\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Tree diagram showing exponentiation by squaring.'
        }
      },
      {
        id: 'nth-fibonacci',
        name: 'Computing the nth Fibonacci Number',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit III',
        content: {
          introduction: 'The nth Fibonacci number is the value at position n in the Fibonacci sequence, where each number is the sum of the two preceding ones.',
          definition: 'F(n) = F(n-1) + F(n-2), with F(0) = 0 and F(1) = 1.',
          realWorldExample: 'Fibonacci numbers are used in financial modeling, computer algorithms, and nature (e.g., branching in trees).',
          realWorldUse: 'Used in dynamic programming, algorithm analysis, and mathematical modeling.',
          importance: 'Efficient computation of Fibonacci numbers is important for performance in algorithms and simulations.',
          detailedExplanation: 'The naive recursive approach to computing Fibonacci numbers is exponential in time. More efficient methods include using iteration or dynamic programming (memoization) to reduce the time complexity to O(n). For very large n, matrix exponentiation or Binet\'s formula can be used. Understanding these methods helps in optimizing algorithms and solving related problems in computer science and mathematics.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=0IAPZzGSbME',
            'https://www.youtube.com/watch?v=8hly31xKli0'
          ],
          externalLinks: [
            { title: 'Fibonacci Number in C (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/' }
          ],
          sampleProgram: '#include <stdio.h>\nint fibonacci(int n) {\n    if (n <= 1) return n;\n    int a = 0, b = 1, c;\n    for (int i = 2; i <= n; i++) {\n        c = a + b;\n        a = b;\n        b = c;\n    }\n    return b;\n}\nint main() {\n    int n = 10;\n    printf("%d\\n", fibonacci(n));\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Diagram showing the recursive structure of Fibonacci computation.'
        }
      },
      // Array Techniques
      {
        id: 'array-order-reversal',
        name: 'Array Order Reversal',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit III',
        content: {
          introduction: 'Reversing the order of elements in an array is a common operation in programming and data processing.',
          definition: 'Array order reversal means rearranging the elements of an array so that the first element becomes the last, the second becomes the second last, and so on.',
          realWorldExample: 'Reversing a list of recent transactions to display the most recent first.',
          realWorldUse: 'Used in data processing, undo operations, and algorithm design.',
          importance: 'Array reversal is a building block for more complex algorithms, such as palindrome checking and data structure manipulation.',
          detailedExplanation: 'To reverse an array, swap the first and last elements, then the second and second last, and so on, until the middle of the array is reached. This can be done in-place with O(n) time and O(1) space. Array reversal is used in stack operations, undo features, and in algorithms that require data to be processed in reverse order. Understanding array manipulation is fundamental for mastering data structures and algorithms.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=Qk0zUZW-U_M',
            'https://www.youtube.com/watch?v=8hly31xKli0'
          ],
          externalLinks: [
            { title: 'Reverse Array in C (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/' }
          ],
          sampleProgram: '#include <stdio.h>\nvoid reverse(int arr[], int n) {\n    for (int i = 0; i < n/2; i++) {\n        int temp = arr[i];\n        arr[i] = arr[n-1-i];\n        arr[n-1-i] = temp;\n    }\n}\nint main() {\n    int arr[] = {1,2,3,4,5};\n    int n = 5;\n    reverse(arr, n);\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Diagram showing array before and after reversal.'
        }
      },
      {
        id: 'array-counting-histogramming',
        name: 'Array Counting or Histogramming',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit III',
        content: {
          introduction: 'Histogramming is the process of counting the frequency of each value in an array.',
          definition: 'Array counting or histogramming means creating a frequency distribution of the elements in an array.',
          realWorldExample: 'Counting the number of students who scored each grade in a class.',
          realWorldUse: 'Used in statistics, data analysis, and image processing.',
          importance: 'Histogramming is essential for understanding data distributions and for algorithms like counting sort.',
          detailedExplanation: 'To create a histogram, initialize a count array and increment the count for each value in the input array. This is used in counting sort, data analysis, and for visualizing data distributions. Histogramming is also used in image processing to analyze pixel intensity distributions. Understanding how to efficiently count and summarize data is a key skill in programming and data science.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=0IAPZzGSbME',
            'https://www.youtube.com/watch?v=8hly31xKli0'
          ],
          externalLinks: [
            { title: 'Histogram in C (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/counting-sort/' }
          ],
          sampleProgram: '#include <stdio.h>\nint main() {\n    int arr[] = {1,2,2,3,3,3,4};\n    int count[5] = {0};\n    for (int i = 0; i < 7; i++) count[arr[i]]++;\n    for (int i = 1; i <= 4; i++) printf("%d: %d\\n", i, count[i]);\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Bar chart showing frequency of array elements.'
        }
      },
      {
        id: 'finding-maximum-number',
        name: 'Finding the Maximum Number in a Set',
    semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit III',
        content: {
          introduction: 'Finding the maximum value in a set is a basic operation in programming and data analysis.',
          definition: 'The maximum number is the largest value in a set of numbers.',
          realWorldExample: 'Finding the highest score in a class or the maximum temperature in a week.',
          realWorldUse: 'Used in statistics, data analysis, and optimization problems.',
          importance: 'Identifying the maximum value is essential for decision making and optimization.',
          detailedExplanation: 'To find the maximum, iterate through the array and keep track of the largest value seen so far. This operation is O(n) and is used in algorithms like selection sort, heap operations, and in finding peaks in data. Understanding how to efficiently search for extrema is important for algorithm design and data processing.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=0IAPZzGSbME',
            'https://www.youtube.com/watch?v=8hly31xKli0'
          ],
          externalLinks: [
            { title: 'Find Maximum in Array (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/c-program-find-largest-element-array/' }
          ],
          sampleProgram: '#include <stdio.h>\nint main() {\n    int arr[] = {1, 5, 3, 9, 2};\n    int n = 5, max = arr[0];\n    for (int i = 1; i < n; i++)\n        if (arr[i] > max) max = arr[i];\n    printf("Max: %d\\n", max);\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Diagram showing array and maximum value.'
        }
      },
      {
        id: 'removal-duplicates-ordered-array',
        name: 'Removal of Duplicates from an Ordered Array',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit III',
        content: {
          introduction: 'Removing duplicates from a sorted array is a common data cleaning operation.',
          definition: 'Duplicate removal means eliminating repeated values so that each element appears only once.',
          realWorldExample: 'Cleaning up a contact list to remove repeated phone numbers.',
          realWorldUse: 'Used in data cleaning, database management, and set operations.',
          importance: 'Ensures data integrity and reduces redundancy in storage and processing.',
          detailedExplanation: 'In a sorted array, duplicates are adjacent. Iterate through the array, copying unique elements to a new array or shifting them in place. This operation is O(n) and is used in set operations, database queries, and data preprocessing. Efficient duplicate removal is important for optimizing storage and ensuring accurate results in data analysis.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=0IAPZzGSbME',
            'https://www.youtube.com/watch?v=8hly31xKli0'
          ],
          externalLinks: [
            { title: 'Remove Duplicates in Array (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/remove-duplicates-sorted-array/' }
          ],
          sampleProgram: '#include <stdio.h>\nint removeDuplicates(int arr[], int n) {\n    if (n == 0) return 0;\n    int j = 0;\n    for (int i = 1; i < n; i++)\n        if (arr[i] != arr[j]) arr[++j] = arr[i];\n    return j + 1;\n}\nint main() {\n    int arr[] = {1,2,2,3,3,4};\n    int n = removeDuplicates(arr, 6);\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Diagram showing ordered array before and after duplicate removal.'
        }
      },
      {
        id: 'partitioning-array',
        name: 'Partitioning an Array',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit III',
        content: {
          introduction: 'Partitioning divides an array into two or more segments based on a condition.',
          definition: 'Array partitioning rearranges elements so that those satisfying a condition come before or after others.',
          realWorldExample: 'Partitioning students by pass/fail status in an exam.',
          realWorldUse: 'Used in quicksort, data analysis, and grouping operations.',
          importance: 'Partitioning is a key step in many sorting and selection algorithms.',
          detailedExplanation: 'The partition process is central to quicksort. Choose a pivot and rearrange the array so that elements less than the pivot come before it and greater elements come after. Partitioning is also used in grouping data and in algorithms that require separation of elements based on a property. Efficient partitioning improves the performance of sorting and selection algorithms.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=0IAPZzGSbME',
            'https://www.youtube.com/watch?v=8hly31xKli0'
          ],
          externalLinks: [
            { title: 'Partition in Array (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/partition-process-of-quicksort/' }
          ],
          sampleProgram: '#include <stdio.h>\nvoid partition(int arr[], int n, int pivot) {\n    int i = 0, j = n - 1;\n    while (i < j) {\n        while (arr[i] < pivot) i++;\n        while (arr[j] >= pivot) j--;\n        if (i < j) { int t = arr[i]; arr[i] = arr[j]; arr[j] = t; }\n    }\n}\nint main() {\n    int arr[] = {9, 3, 4, 8, 2};\n    partition(arr, 5, 5);\n    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Diagram showing array partitioned around a pivot.'
        }
      },
      {
        id: 'finding-kth-smallest',
        name: 'Finding the kth Smallest Element',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit III',
        content: {
          introduction: 'Finding the kth smallest element is a selection problem in arrays and lists.',
          definition: 'The kth smallest element is the value that would be at position k if the array were sorted.',
          realWorldExample: 'Finding the median (k = n/2) in a dataset.',
          realWorldUse: 'Used in statistics, order statistics, and selection algorithms.',
          importance: 'Efficient selection is important for data analysis and algorithm optimization.',
          detailedExplanation: 'The naive approach is to sort the array and pick the kth element. More efficient algorithms like QuickSelect use partitioning to find the kth smallest in expected O(n) time. This is used in median finding, percentile calculations, and in algorithms that require order statistics. Understanding selection algorithms is important for optimizing performance in large datasets.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=0IAPZzGSbME',
            'https://www.youtube.com/watch?v=8hly31xKli0'
          ],
          externalLinks: [
            { title: 'kth Smallest Element (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array/' }
          ],
          sampleProgram: '#include <stdio.h>\nvoid sort(int arr[], int n) {\n    for (int i = 0; i < n-1; i++)\n        for (int j = 0; j < n-i-1; j++)\n            if (arr[j] > arr[j+1]) { int t = arr[j]; arr[j] = arr[j+1]; arr[j+1] = t; }\n}\nint main() {\n    int arr[] = {7, 10, 4, 3, 20, 15};\n    int n = 6, k = 3;\n    sort(arr, n);\n    printf("%d\n", arr[k-1]);\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Diagram showing sorted array and kth element.'
        }
      },
      {
        id: 'matrix-multiplication',
        name: 'Multiplication of Two Matrices',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit III',
        content: {
          introduction: 'Matrix multiplication is a fundamental operation in mathematics and computer science.',
          definition: 'The product of two matrices is a new matrix where each element is the sum of products of corresponding elements from the rows and columns.',
          realWorldExample: 'Used in graphics transformations, scientific computing, and neural networks.',
          realWorldUse: 'Used in computer graphics, scientific simulations, and machine learning.',
          importance: 'Matrix multiplication is essential for linear algebra, data transformations, and algorithm design.',
          detailedExplanation: 'To multiply two matrices, iterate over the rows of the first and columns of the second, summing the products of corresponding elements. The operation is O(n^3) for naive implementation, but faster algorithms exist for large matrices. Matrix multiplication is used in graphics pipelines, solving systems of equations, and in deep learning. Understanding efficient matrix operations is crucial for high-performance computing.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=0IAPZzGSbME',
            'https://www.youtube.com/watch?v=8hly31xKli0'
          ],
          externalLinks: [
            { title: 'Matrix Multiplication in C (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/c-program-multiply-two-matrices/' }
          ],
          sampleProgram: '#include <stdio.h>\nint main() {\n    int a[2][2] = {{1,2},{3,4}}, b[2][2] = {{5,6},{7,8}}, c[2][2];\n    for (int i = 0; i < 2; i++)\n        for (int j = 0; j < 2; j++) {\n            c[i][j] = 0;\n            for (int k = 0; k < 2; k++)\n                c[i][j] += a[i][k] * b[k][j];\n        }\n    for (int i = 0; i < 2; i++) {\n        for (int j = 0; j < 2; j++) printf("%d ", c[i][j]);\n        printf("\\n");\n    }\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Diagram showing two matrices and their product.'
        }
      },
      // --- UNIT IV ---
      {
        id: 'two-way-merge',
        name: 'The Two-Way Merge',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit IV',
        content: {
          introduction: 'The two-way merge is a fundamental operation in sorting and combining data, where two sorted lists are merged into a single sorted list.',
          definition: 'Two-way merge is the process of combining two sorted arrays or lists into one sorted array or list.',
          realWorldExample: 'Merging two sorted lists of customer orders from different branches into a single master list.',
          realWorldUse: 'Used in merge sort algorithms, database management, and data integration tasks.',
          importance: 'Efficient merging is crucial for large-scale data processing, external sorting, and is a building block for more complex algorithms.',
          detailedExplanation: 'The two-way merge algorithm works by comparing the smallest elements of each list and repeatedly selecting the smaller one to add to the result. This continues until all elements from both lists are merged. The process is linear in the total number of elements, making it very efficient. Two-way merge is the core of the merge sort algorithm, which is widely used for sorting large datasets, especially when data does not fit into memory. Understanding merging is also important for database operations like joins and for combining search results from multiple sources.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=JSceec-wEyw',
            'https://www.youtube.com/watch?v=es2T6KY45cA'
          ],
          externalLinks: [
            { title: 'Merge Sort (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/merge-sort/' }
          ],
          sampleProgram: '#include <stdio.h>\nvoid merge(int a[], int n, int b[], int m, int c[]) {\n    int i=0, j=0, k=0;\n    while(i<n && j<m)\n        c[k++] = (a[i] < b[j]) ? a[i++] : b[j++];\n    while(i<n) c[k++] = a[i++];\n    while(j<m) c[k++] = b[j++];\n}\nint main() {\n    int a[] = {1,3,5}, b[] = {2,4,6}, c[6];\n    merge(a,3,b,3,c);\n    for(int i=0;i<6;i++) printf("%d ",c[i]);\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Diagram showing two sorted arrays being merged into a single sorted array.'
        }
      },
      // Sorting
      {
        id: 'sorting-selection',
        name: 'Sorting by Selection',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit IV',
        content: {
          introduction: 'Selection sort is a simple comparison-based sorting algorithm.',
          definition: 'Sorting by selection repeatedly selects the smallest (or largest) element from the unsorted part and moves it to the sorted part.',
          realWorldExample: 'Arranging books on a shelf by repeatedly picking the smallest book and placing it at the beginning.',
          realWorldUse: 'Used in small datasets, educational tools, and situations where memory writes are costly.',
          importance: 'It is easy to understand and implement, and is useful for teaching sorting concepts.',
          detailedExplanation: 'Selection sort divides the array into a sorted and unsorted region. It repeatedly finds the minimum element from the unsorted region and swaps it with the first unsorted element. This process continues until the array is sorted. Although not efficient for large datasets (O(n²) time complexity), it performs well for small lists and is notable for making the minimum possible number of swaps.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=Ns4TPTC8whw',
            'https://www.youtube.com/watch?v=GUDLRan2DWM'
          ],
          externalLinks: [
            { title: 'Selection Sort (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/selection-sort/' }
          ],
          sampleProgram: '#include <stdio.h>\nvoid selectionSort(int arr[], int n) {\n    for(int i=0;i<n-1;i++) {\n        int min=i;\n        for(int j=i+1;j<n;j++)\n            if(arr[j]<arr[min]) min=j;\n        int t=arr[i]; arr[i]=arr[min]; arr[min]=t;\n    }\n}\nint main() {\n    int arr[]={64,25,12,22,11}, n=5;\n    selectionSort(arr,n);\n    for(int i=0;i<n;i++) printf("%d ",arr[i]);\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Diagram showing repeated selection and swapping of the minimum element.'
        }
      },
      {
        id: 'sorting-exchange',
        name: 'Sorting by Exchange',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit IV',
        content: {
          introduction: 'Sorting by exchange refers to algorithms that sort by repeatedly exchanging adjacent elements.',
          definition: 'It is a sorting method where elements are compared and swapped if they are in the wrong order.',
          realWorldExample: 'Bubble sort is a classic example, like repeatedly passing through a list of numbers and swapping out-of-order pairs.',
          realWorldUse: 'Used in teaching, small datasets, and nearly sorted data.',
          importance: 'It is simple to implement and understand, and is useful for educational purposes.',
          detailedExplanation: 'The most common exchange sort is bubble sort. It works by repeatedly stepping through the list, comparing adjacent elements, and swapping them if they are in the wrong order. This process is repeated until the list is sorted. While inefficient for large datasets (O(n²)), it is stable and can be optimized for nearly sorted data.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=Jdtq5uKz-w4',
            'https://www.youtube.com/watch?v=8Kp-8OGwphY'
          ],
          externalLinks: [
            { title: 'Bubble Sort (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/bubble-sort/' }
          ],
          sampleProgram: '#include <stdio.h>\nvoid bubbleSort(int arr[], int n) {\n    for(int i=0;i<n-1;i++)\n        for(int j=0;j<n-i-1;j++)\n            if(arr[j]>arr[j+1]) {\n                int t=arr[j]; arr[j]=arr[j+1]; arr[j+1]=t;\n            }\n}\nint main() {\n    int arr[]={5,1,4,2,8}, n=5;\n    bubbleSort(arr,n);\n    for(int i=0;i<n;i++) printf("%d ",arr[i]);\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Diagram showing adjacent elements being swapped in each pass.'
        }
      },
      {
        id: 'sorting-insertion',
        name: 'Sorting by Insertion',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit IV',
        content: {
          introduction: 'Insertion sort is a simple algorithm that builds the sorted array one item at a time.',
          definition: 'Sorting by insertion inserts each new element into its correct position in the already sorted part of the array.',
          realWorldExample: 'Sorting playing cards in your hand by inserting each new card into the correct position.',
          realWorldUse: 'Used for small datasets, nearly sorted data, and as a subroutine in more complex algorithms.',
          importance: 'It is efficient for small or nearly sorted datasets and is stable.',
          detailedExplanation: 'Insertion sort iterates through the array, and for each element, it finds the correct position in the sorted part and inserts it there, shifting other elements as needed. It is efficient for small or nearly sorted datasets (O(n²) worst case, O(n) best case for nearly sorted data).',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=JU767SDMDvA',
            'https://www.youtube.com/watch?v=OGzPmgsI-pQ'
          ],
          externalLinks: [
            { title: 'Insertion Sort (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/insertion-sort/' }
          ],
          sampleProgram: '#include <stdio.h>\nvoid insertionSort(int arr[], int n) {\n    for(int i=1;i<n;i++) {\n        int key=arr[i],j=i-1;\n        while(j>=0 && arr[j]>key)\n            arr[j+1]=arr[j--];\n        arr[j+1]=key;\n    }\n}\nint main() {\n    int arr[]={12,11,13,5,6}, n=5;\n    insertionSort(arr,n);\n    for(int i=0;i<n;i++) printf("%d ",arr[i]);\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Diagram showing elements being inserted into their correct position.'
        }
      },
      {
        id: 'sorting-diminishing-increment',
        name: 'Sorting by Diminishing Increment',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit IV',
        content: {
          introduction: 'This refers to Shell sort, which sorts elements far apart and reduces the gap over time.',
          definition: 'Sorting by diminishing increment sorts elements at a certain gap and gradually reduces the gap to perform insertion sort.',
          realWorldExample: 'Organizing books on a shelf by first sorting every 5th book, then every 2nd, then adjacent books.',
          realWorldUse: 'Used in practical sorting of medium-sized arrays.',
          importance: 'Shell sort improves on insertion sort by moving elements over larger gaps, reducing the total number of movements.',
          detailedExplanation: 'Shell sort starts by sorting elements far apart, then progressively reducing the gap between elements to be compared. This allows elements to move closer to their final position faster. The final pass is a standard insertion sort, but by then, the array is almost sorted, making it efficient.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=SHcPqUe2l5g',
            'https://www.youtube.com/watch?v=9iTDiF5L4jI'
          ],
          externalLinks: [
            { title: 'Shell Sort (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/shellsort/' }
          ],
          sampleProgram: '#include <stdio.h>\nvoid shellSort(int arr[], int n) {\n    for(int gap=n/2;gap>0;gap/=2)\n        for(int i=gap;i<n;i++) {\n            int temp=arr[i],j;\n            for(j=i;j>=gap && arr[j-gap]>temp;j-=gap)\n                arr[j]=arr[j-gap];\n            arr[j]=temp;\n        }\n}\nint main() {\n    int arr[]={12,34,54,2,3}, n=5;\n    shellSort(arr,n);\n    for(int i=0;i<n;i++) printf("%d ",arr[i]);\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Diagram showing sorting with decreasing gaps.'
        }
      },
      {
        id: 'sorting-partitioning',
        name: 'Sorting by Partitioning',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit IV',
        content: {
          introduction: 'Partitioning is a key step in quicksort and other divide-and-conquer algorithms.',
          definition: 'Sorting by partitioning divides the array into two parts based on a pivot, then sorts each part recursively.',
          realWorldExample: 'Quicksort algorithm used in standard libraries.',
          realWorldUse: 'Used in efficient sorting of large datasets.',
          importance: 'Partitioning enables fast, in-place sorting with average-case O(n log n) performance.',
          detailedExplanation: 'The partitioning process selects a pivot and rearranges the array so that all elements less than the pivot come before it, and all greater elements come after. This is the basis of quicksort, which recursively sorts the partitions. Partitioning is efficient and forms the backbone of many high-performance sorting algorithms.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=COk73cpQbFQ',
            'https://www.youtube.com/watch?v=Hoixgm4-P4M'
          ],
          externalLinks: [
            { title: 'Quick Sort (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/quick-sort/' }
          ],
          sampleProgram: '#include <stdio.h>\nvoid quickSort(int arr[], int low, int high) {\n    if(low<high) {\n        int pivot=arr[high],i=low-1;\n        for(int j=low;j<high;j++)\n            if(arr[j]<pivot) {\n                i++; int t=arr[i]; arr[i]=arr[j]; arr[j]=t;\n            }\n        int t=arr[i+1]; arr[i+1]=arr[high]; arr[high]=t;\n        int pi=i+1;\n        quickSort(arr,low,pi-1); quickSort(arr,pi+1,high);\n    }\n}\nint main() {\n    int arr[]={10,7,8,9,1,5}, n=6;\n    quickSort(arr,0,n-1);\n    for(int i=0;i<n;i++) printf("%d ",arr[i]);\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Diagram showing partitioning around a pivot.'
        }
      },
      // Searching
      {
        id: 'binary-search',
        name: 'Binary Search',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit IV',
        content: {
          introduction: 'Binary search is an efficient algorithm for finding an item in a sorted array.',
          definition: 'It repeatedly divides the search interval in half, comparing the target value to the middle element.',
          realWorldExample: 'Looking up a word in a dictionary.',
          realWorldUse: 'Used in searching databases, libraries, and in programming libraries.',
          importance: 'Binary search is much faster than linear search for large, sorted datasets (O(log n) time).',
          detailedExplanation: 'Binary search works by comparing the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated, and the search continues on the remaining half. This process repeats until the target is found or the interval is empty.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=GU7DpgHINWQ',
            'https://www.youtube.com/watch?v=6z2HK4o7Sb8'
          ],
          externalLinks: [
            { title: 'Binary Search (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/binary-search/' }
          ],
          sampleProgram: '#include <stdio.h>\nint binarySearch(int arr[], int n, int x) {\n    int l=0, r=n-1;\n    while(l<=r) {\n        int m=l+(r-l)/2;\n        if(arr[m]==x) return m;\n        if(arr[m]<x) l=m+1;\n        else r=m-1;\n    }\n    return -1;\n}\nint main() {\n    int arr[]={2,3,4,10,40}, n=5;\n    int res=binarySearch(arr,n,10);\n    if(res!=-1) printf("Found at %d",res);\n    else printf("Not found");\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Diagram showing the search interval halving at each step.'
        }
      },
      {
        id: 'hash-search',
        name: 'Hash Search',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit IV',
        content: {
          introduction: 'Hash search uses a hash function to map keys to positions in a table for fast lookup.',
          definition: 'Hashing is a technique to convert a range of key values into a range of indexes of an array.',
          realWorldExample: 'Storing and retrieving passwords in a database.',
          realWorldUse: 'Used in hash tables, dictionaries, and caches.',
          importance: 'Hash search provides constant time average-case lookup, making it ideal for large datasets.',
          detailedExplanation: 'Hash search uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found. Collisions are handled using techniques like chaining or open addressing. Hashing is widely used in databases, compilers, and caching systems for fast data retrieval.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=shs0KM3wKv8',
            'https://www.youtube.com/watch?v=2Ti5yvumFTU'
          ],
          externalLinks: [
            { title: 'Hashing (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/hashing-data-structure/' }
          ],
          sampleProgram: '#include <stdio.h>\n#define SIZE 10\nint hash(int key) { return key % SIZE; }\nint main() {\n    int table[SIZE]={0}, keys[]={23,43,13,27};\n    for(int i=0;i<4;i++) table[hash(keys[i])]=keys[i];\n    for(int i=0;i<SIZE;i++) printf("%d ",table[i]);\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Diagram showing keys being mapped to hash table slots.'
        }
      },
      // Text processing and Pattern searching
      {
        id: 'text-line-length',
        name: 'Text Line Length Adjustment',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit IV',
        content: {
          introduction: 'Adjusting text line length is important for formatting text in documents and displays.',
          definition: 'It involves breaking or joining lines so that each line fits within a specified width.',
          realWorldExample: 'Word processors automatically wrap text to fit the page width.',
          realWorldUse: 'Used in text editors, word processors, and typesetting systems.',
          importance: 'Proper line length improves readability and aesthetics of text.',
          detailedExplanation: 'Line length adjustment algorithms break text into lines that fit within a given width, considering word boundaries and hyphenation. Advanced algorithms also minimize raggedness and optimize for justified text. This is essential for creating readable and visually appealing documents.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=6Qk5vU2kA5w',
            'https://www.youtube.com/watch?v=8hly31xKli0'
          ],
          externalLinks: [
            { title: 'Text Justification (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/text-justification/' }
          ],
          sampleProgram: '// Simple text wrapping is usually done in higher-level languages, but you can simulate it in C by printing words until a line limit is reached.',
          diagram: '',
          diagramDescription: 'Diagram showing text being wrapped to fit within a box.'
        }
      },
      {
        id: 'text-justification',
        name: 'Left and Right Justification of Text',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit IV',
        content: {
          introduction: 'Justification aligns text to the left, right, or both margins.',
          definition: 'Left justification aligns text to the left margin; right justification aligns to the right margin.',
          realWorldExample: 'Newspapers and books use justified text for neat appearance.',
          realWorldUse: 'Used in publishing, word processing, and web design.',
          importance: 'Justification improves the visual structure and readability of text.',
          detailedExplanation: 'Left justification is the default in most systems. Right justification pads the left side with spaces. Full justification adjusts spacing between words so that both margins are aligned. Algorithms for justification must handle word spacing and hyphenation.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=6Qk5vU2kA5w',
            'https://www.youtube.com/watch?v=8hly31xKli0'
          ],
          externalLinks: [
            { title: 'Text Justification (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/text-justification/' }
          ],
          sampleProgram: '// Text justification is complex in C; typically, you would use printf with width specifiers for simple alignment.',
          diagram: '',
          diagramDescription: 'Diagram showing left, right, and fully justified text blocks.'
        }
      },
      {
        id: 'keyword-searching',
        name: 'Keyword Searching in Text',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit IV',
        content: {
          introduction: 'Keyword searching finds occurrences of a word or phrase in a body of text.',
          definition: 'It is the process of scanning text to locate specific keywords.',
          realWorldExample: 'Using Ctrl+F to find a word in a document.',
          realWorldUse: 'Used in search engines, text editors, and data mining.',
          importance: 'Enables fast information retrieval from large text datasets.',
          detailedExplanation: 'Simple keyword search scans the text for exact matches. More advanced algorithms (like KMP or Boyer-Moore) improve efficiency for large texts. Keyword search is foundational for search engines, plagiarism detection, and data analysis.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=GTJr8OvyEVQ',
            'https://www.youtube.com/watch?v=8hly31xKli0'
          ],
          externalLinks: [
            { title: 'Pattern Searching (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/searching-for-patterns-set-1-naive-pattern-searching/' }
          ],
          sampleProgram: '#include <stdio.h>\n#include <string.h>\nint main() {\n    char text[] = "hello world", pattern[] = "world";\n    if(strstr(text, pattern)) printf("Found");\n    else printf("Not found");\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Diagram showing a keyword being matched in a block of text.'
        }
      },
      {
        id: 'text-line-editing',
        name: 'Text Line Editing',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit IV',
        content: {
          introduction: 'Text line editing allows users to modify, insert, or delete lines in a text.',
          definition: 'It is the process of editing text at the line level.',
          realWorldExample: 'Editing a line in a code editor.',
          realWorldUse: 'Used in text editors, IDEs, and command-line tools.',
          importance: 'Enables efficient text manipulation and correction.',
          detailedExplanation: 'Line editing operations include inserting, deleting, copying, and moving lines. Efficient line editing is essential for user-friendly text editors and for processing large files.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=6Qk5vU2kA5w',
            'https://www.youtube.com/watch?v=8hly31xKli0'
          ],
          externalLinks: [
            { title: 'Text Editors (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/text-editors/' }
          ],
          sampleProgram: '// Line editing is typically done interactively, but you can simulate it by manipulating arrays of strings in C.',
          diagram: '',
          diagramDescription: 'Diagram showing lines being inserted, deleted, or modified.'
        }
      },
      {
        id: 'linear-pattern-search',
        name: 'Linear Pattern Search',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit IV',
        content: {
          introduction: 'Linear pattern search is the simplest method for finding a pattern in text.',
          definition: 'It checks for the pattern at every position in the text.',
          realWorldExample: 'Finding a substring in a paragraph.',
          realWorldUse: 'Used in simple search tools and as a base for more advanced algorithms.',
          importance: 'It is easy to implement and works well for small texts.',
          detailedExplanation: 'The algorithm slides the pattern over the text one by one and checks for a match at each position. It is inefficient for large texts (O(mn) time), but is the basis for more advanced algorithms.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=GTJr8OvyEVQ',
            'https://www.youtube.com/watch?v=8hly31xKli0'
          ],
          externalLinks: [
            { title: 'Naive Pattern Searching (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/searching-for-patterns-set-1-naive-pattern-searching/' }
          ],
          sampleProgram: '#include <stdio.h>\n#include <string.h>\nvoid search(char* pat, char* txt) {\n    int M = strlen(pat), N = strlen(txt);\n    for (int i = 0; i <= N - M; i++) {\n        int j;\n        for (j = 0; j < M; j++)\n            if (txt[i + j] != pat[j]) break;\n        if (j == M) printf("Pattern found at index %d\\n", i);\n    }\n}\nint main() {\n    char txt[] = "AABAACAADAABAABA", pat[] = "AABA";\n    search(pat, txt);\n    return 0;\n}',
          diagram: '',
          diagramDescription: 'Diagram showing the pattern sliding over the text.'
        }
      },
      {
        id: 'sublinear-pattern-search',
        name: 'Sublinear Pattern Search',
        semester: 1,
        subject: 'The Art of Programming',
        unit: 'Unit IV',
        content: {
          introduction: 'Sublinear pattern search algorithms find patterns faster than linear time in some cases.',
          definition: 'These algorithms skip sections of the text, reducing the number of comparisons.',
          realWorldExample: 'Boyer-Moore algorithm used in text editors and search engines.',
          realWorldUse: 'Used in high-performance search tools and large-scale text processing.',
          importance: 'Enables fast searching in large texts, improving user experience and efficiency.',
          detailedExplanation: 'Sublinear algorithms like Boyer-Moore preprocess the pattern and use information about mismatches to skip sections of the text, often achieving better than O(n) performance in practice. They are widely used in search engines, text editors, and DNA sequence analysis.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=4XsYuHbXZUk',
            'https://www.youtube.com/watch?v=8hly31xKli0'
          ],
          externalLinks: [
            { title: 'Boyer Moore Algorithm (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/boyer-moore-algorithm-for-pattern-searching/' }
          ],
          sampleProgram: '// Boyer-Moore is complex; see GeeksforGeeks for a full C implementation.',
          diagram: '',
          diagramDescription: 'Diagram showing the pattern skipping ahead in the text.'
        }
      },
    ]
  },
  {
    id: 'discrete-mathematics',
    name: 'Discrete Mathematics',
    semester: 1,
    showAlert: true,
    alertMessage: 'Refer to class notes for this subject.',
    topics: [
      {
        id: 'set-theory',
        name: 'Set Theory',
        semester: 1,
        subject: 'Discrete Mathematics',
        content: {
          introduction: 'Set theory is the mathematical study of collections of objects.',
          definition: 'A set is a collection of distinct objects, considered as an object in its own right.',
          realWorldExample: 'Database queries use set operations like union, intersection, and difference.',
          realWorldUse: 'Database design, logic programming, mathematical proofs',
          importance: 'Foundation for modern mathematics and computer science.',
          detailedExplanation: 'Set theory provides the foundation for mathematics and computer science. It includes concepts like union, intersection, complement, and Cartesian products.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=yCwnAcieLTQ'
          ],
          externalLinks: [
            { title: 'Set Theory Basics', url: 'https://www.mathsisfun.com/sets/' }
          ]
        }
      }
    ]
  },
  {
    id: 'computer-organization',
    name: 'Computer Organization and Architecture',
    semester: 1,
    showAlert: true,
    alertMessage: 'Important: This site does not contain circuit diagrams. Students should also practice drawing circuit diagrams and refer to the provided YouTube and article links for visual explanations.',
    topics: [
      ...computerOrgUnit1,
      ...computerOrgUnit2,
      ...computerOrgUnit3,
      ...computerOrgUnit4,
      // ... (other units, e.g., ...computerOrgUnit2, if you add them later)
    ]
  },
  {
    id: 'theory-of-computation',
    name: 'Theory of Computation',
    semester: 1,
    showAlert: true,
    alertMessage: 'Refer to class notes for this subject.',
    topics: [
      {
        id: 'finite-automata',
        name: 'Finite Automata',
        semester: 1,
        subject: 'Theory of Computation',
        content: {
          introduction: 'Finite automata are abstract machines used in computer science to model computation.',
          definition: 'A finite automaton is a mathematical model of computation that describes abstract machines.',
          realWorldExample: 'Text editors use finite automata for syntax highlighting and pattern matching.',
          realWorldUse: 'Compiler design, pattern matching, protocol verification',
          importance: 'Foundation for formal language theory and compiler construction.',
          detailedExplanation: 'Finite automata include deterministic (DFA) and non-deterministic (NFA) variants, used to recognize regular languages.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=40i4PKpM0cI'
          ],
          externalLinks: [
            { title: 'Finite Automata Tutorial', url: 'https://www.geeksforgeeks.org/introduction-of-finite-automata/' }
          ]
        }
      }
    ]
  },
  {
    id: 'java-oop',
    name: 'Object-Oriented Programming (Java)',
    semester: 1,
    topics: [
      ...javaOOPUnit1,
      ...javaOOPUnit2,
      ...javaOOPUnit3,
      ...javaOOPUnit4,
    ]
  },
  {
    id: 'data-structures',
    name: 'Data Structures',
    semester: 1,
    topics: [
      ...dataStructuresUnit1,
      ...dataStructuresUnit2,
      ...dataStructuresUnit3,
      ...dataStructuresUnit4,
    ]
  },
  {
    id: 'operating-systems',
    name: 'Operating Systems',
    semester: 2,
    topics: [
      ...operatingSystemsUnit1,
      ...operatingSystemsUnit2,
      ...operatingSystemsUnit3,
      ...operatingSystemsUnit4
    ]
  },
  {
    id: 'database-management-systems',
    name: 'Database Management Systems',
    semester: 2,
    topics: [
      ...databaseSystemsUnit1,
      ...databaseSystemsUnit2,
      ...databaseSystemsUnit3,
      ...databaseSystemsUnit4
    ]
  },
  {
    id: 'computer-networks',
    name: 'Computer Networks',
    semester: 2,
    topics: [
      ...computerNetworksUnit1,
      ...computerNetworksUnit2,
      ...computerNetworksUnit3,
      ...computerNetworksUnit4
    ]
  },
  {
    id: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    semester: 2,
    topics: [
      ...artificialIntelligenceUnit1,
      ...artificialIntelligenceUnit2,
      ...artificialIntelligenceUnit3,
      ...artificialIntelligenceUnit4
    ]
  },
  {
    id: 'software-engineering',
    name: 'Software Engineering',
    semester: 2,
    topics: [
      {
        id: 'sdlc',
        name: 'Software Development Life Cycle',
        semester: 2,
        subject: 'Software Engineering',
        content: {
          introduction: 'SDLC is a systematic process for developing software applications from conception to deployment and maintenance.',
          definition: 'A framework that defines the sequence of activities performed during software development to ensure quality and efficiency.',
          realWorldExample: 'Companies like Microsoft and Google follow structured SDLC processes to develop and release software products.',
          realWorldUse: 'Used in all software development projects to ensure systematic development and quality assurance.',
          importance: 'Provides structure, reduces risks, improves quality, and ensures timely delivery of software projects.',
          detailedExplanation: 'SDLC phases include planning, analysis, design, implementation, testing, deployment, and maintenance, with various models like Waterfall, Agile, and DevOps.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=G-6djI4IcNI'
          ],
          externalLinks: [
            { title: 'Software Development Life Cycle', url: 'https://www.geeksforgeeks.org/software-development-life-cycle-sdlc/' }
          ]
        }
      },
      {
        id: 'software-testing',
        name: 'Software Testing',
        semester: 2,
        subject: 'Software Engineering',
        content: {
          introduction: 'Software testing is the process of evaluating software to ensure it meets requirements and functions correctly.',
          definition: 'A systematic process of checking software for bugs, errors, and compliance with specified requirements.',
          realWorldExample: 'Before releasing a mobile app, companies test it on different devices to ensure it works properly for all users.',
          realWorldUse: 'Used in all software development to ensure quality, reliability, and user satisfaction.',
          importance: 'Critical for delivering bug-free software, maintaining user trust, and reducing maintenance costs.',
          detailedExplanation: 'Includes various testing types like unit testing, integration testing, system testing, and acceptance testing, using both manual and automated approaches.',
          youtubeLinks: [
            'https://www.youtube.com/watch?v=u6QfIXgjwGQ'
          ],
          externalLinks: [
            { title: 'Software Testing Tutorial', url: 'https://www.geeksforgeeks.org/software-testing-basics/' }
          ]
        }
      }
    ]
  },
  {
    id: 'design-analysis-algorithms',
    name: 'The Design and Analysis of Algorithms',
    semester: 2,
    topics: [
      ...designAnalysisAlgorithmsUnit1,
      ...designAnalysisAlgorithmsUnit2,
      ...designAnalysisAlgorithmsUnit3,
      ...designAnalysisAlgorithmsUnit4
    ]
  },

  // SEMESTER 3
  {
    id: 'big-data',
    name: 'Big Data',
    semester: 3,
    topics: [
      ...bigDataUnit1,
      ...bigDataUnit2,
      ...bigDataUnit3,
      ...bigDataUnit4,
      ...bigDataUnit5
    ]
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    semester: 3,
    topics: [
      ...machineLearningUnit1,
      ...machineLearningUnit2,
      ...machineLearningUnit3,
      ...machineLearningUnit4,
      ...machineLearningUnit5
    ]
  },
  {
    id: 'cryptography-network-security',
    name: 'Cryptography and Network Security',
    semester: 3,
    topics: [
      ...cryptographyNetworkSecurityUnit1,
      ...cryptographyNetworkSecurityUnit2,
      ...cryptographyNetworkSecurityUnit3,
      ...cryptographyNetworkSecurityUnit4,
      ...cryptographyNetworkSecurityUnit5
    ]
  },
  {
    id: 'web-programming',
    name: 'Web Programming',
    semester: 3,
    topics: [
      ...webProgrammingUnit1,
      ...webProgrammingUnit2,
      ...webProgrammingUnit3,
      ...webProgrammingUnit4,
      ...webProgrammingUnit5
    ]
  },
  {
    id: 'research-methodology',
    name: 'Research Methodology',
    semester: 3,
    topics: [
      ...researchMethodologyUnit1,
      ...researchMethodologyUnit2,
      ...researchMethodologyUnit3,
      ...researchMethodologyUnit4,
      ...researchMethodologyUnit5
    ]
  },
  {
    id: 'quantitative-teaching-research-aptitude',
    name: 'Quantitative, Teaching and Research Aptitude',
    semester: 3,
    topics: [
      ...quantitativeTeachingResearchAptitudeUnit1,
      ...quantitativeTeachingResearchAptitudeUnit2,
      ...quantitativeTeachingResearchAptitudeUnit3,
      ...quantitativeTeachingResearchAptitudeUnit4,
      ...quantitativeTeachingResearchAptitudeUnit5
    ]
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing',
    semester: 3,
    topics: [
      ...cloudComputingUnit1,
      ...cloudComputingUnit2,
      ...cloudComputingUnit3,
      ...cloudComputingUnit4,
      ...cloudComputingUnit5
    ]
  }
];

// Helper functions for search and navigation
export const getAllTopics = (): Topic[] => {
  // Import here to avoid circular dependency
  try {
    const { getAllSubjectsWithModifications } = require('../utils/dataManager');
    return getAllSubjectsWithModifications().reduce((acc: Topic[], subject: Subject) => [...acc, ...subject.topics], [] as Topic[]);
  } catch {
    // Fallback to original data if dataManager is not available
    return syllabusData.reduce((acc, subject) => [...acc, ...subject.topics], [] as Topic[]);
  }
};

export const getSubjectsBySemester = (semester: number): Subject[] => {
  try {
    const { getAllSubjectsWithModifications } = require('../utils/dataManager');
    return getAllSubjectsWithModifications().filter((subject: Subject) => subject.semester === semester);
  } catch {
    // Fallback to original data if dataManager is not available
    return syllabusData.filter(subject => subject.semester === semester);
  }
};

// Enhanced getTopicById with backend integration
export const getTopicById = (topicId: string): Topic | undefined => {
  try {
    // Use synchronous version for immediate return
    const { getTopicSync } = require('../utils/dataManager');
    let topic = getTopicSync(topicId);
    
    // If no topic found in localStorage, check original data
    if (!topic) {
      topic = getAllTopics().find(t => t.id === topicId);
    }
    
    // Async background update from backend to ensure we have latest data
    import('../utils/dataManager').then(({ getTopic }) => {
      getTopic(topicId).then(updatedTopic => {
        if (updatedTopic) {
          const currentTopicStr = JSON.stringify(topic);
          const updatedTopicStr = JSON.stringify(updatedTopic);
          
          // Only dispatch update if content actually changed
          if (currentTopicStr !== updatedTopicStr) {
            console.log(`🔄 Backend data differs from local for topic: ${topicId}`);
            
            // Update localStorage with backend data
            const { saveStoredData, getStoredData } = require('../utils/dataManager');
            const storedData = getStoredData();
            storedData.topics[topicId] = updatedTopic;
            storedData.lastUpdated = new Date().toISOString();
            saveStoredData(storedData);
            
            // Dispatch multiple events to ensure all components update
            const events = [
              new CustomEvent('topicUpdated', { detail: { topicId, topic: updatedTopic } }),
              new CustomEvent('topicChanged', { detail: { topicId, topic: updatedTopic } }),
              new CustomEvent('contentUpdated', { detail: { topicId, topic: updatedTopic } })
            ];
            
            events.forEach(event => {
              window.dispatchEvent(event);
            });
            
            console.log(`✅ Topic ${topicId} updated from backend and events dispatched`);
          }
        }
      }).catch(error => {
        console.warn(`⚠️ Could not fetch topic ${topicId} from backend:`, error.message);
      });
    });
    
    return topic;
  } catch (error) {
    console.error('Error in getTopicById:', error);
    // Fallback to original data if dataManager is not available
    return getAllTopics().find(topic => topic.id === topicId);
  }
};

export const getSubjectById = (subjectId: string): Subject | undefined => {
  try {
    // Use synchronous version for immediate return
    const { getSubjectTopicsSync } = require('../utils/dataManager');
    const subject = syllabusData.find(subject => subject.id === subjectId);
    
    if (subject) {
      return {
        ...subject,
        topics: getSubjectTopicsSync(subject.id)
      };
    }
    
    return subject;
  } catch {
    // Fallback to original data if dataManager is not available
    return syllabusData.find(subject => subject.id === subjectId);
  }
};