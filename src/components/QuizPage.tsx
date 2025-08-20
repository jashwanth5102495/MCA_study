import React, { useState, useEffect } from 'react';
import { Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Question {
  id: number;
  type: 'mcq' | 'coding' | 'matching';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
  code?: string;
  matchingPairs?: { left: string; right: string }[];
}

const QuizPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  const allQuestions: Question[] = [
    // Multiple Choice Questions
    {
      id: 1,
      type: 'mcq',
      question: 'What is the time complexity of binary search?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
      correctAnswer: 'O(log n)',
      explanation: 'Binary search divides the search space in half with each iteration, resulting in logarithmic time complexity.'
    },
    {
      id: 2,
      type: 'mcq',
      question: 'Which data structure follows LIFO principle?',
      options: ['Queue', 'Stack', 'Tree', 'Graph'],
      correctAnswer: 'Stack',
      explanation: 'Stack follows Last In First Out (LIFO) principle where the last element added is the first to be removed.'
    },
    {
      id: 3,
      type: 'mcq',
      question: 'What is the primary purpose of DNS?',
      options: ['To encrypt data', 'To translate domain names to IP addresses', 'To compress files', 'To create backups'],
      correctAnswer: 'To translate domain names to IP addresses',
      explanation: 'DNS (Domain Name System) translates human-readable domain names into IP addresses.'
    },
    {
      id: 4,
      type: 'mcq',
      question: 'Which sorting algorithm has the best average-case time complexity?',
      options: ['Bubble Sort', 'Quick Sort', 'Selection Sort', 'Insertion Sort'],
      correctAnswer: 'Quick Sort',
      explanation: 'Quick Sort has an average-case time complexity of O(n log n), which is optimal for comparison-based sorting.'
    },
    {
      id: 5,
      type: 'mcq',
      question: 'What does API stand for?',
      options: ['Application Programming Interface', 'Advanced Programming Interface', 'Automated Program Interface', 'Application Process Interface'],
      correctAnswer: 'Application Programming Interface',
      explanation: 'API stands for Application Programming Interface, which allows different software applications to communicate.'
    },
    {
      id: 6,
      type: 'mcq',
      question: 'Which protocol is used for secure web browsing?',
      options: ['HTTP', 'HTTPS', 'FTP', 'SMTP'],
      correctAnswer: 'HTTPS',
      explanation: 'HTTPS (HTTP Secure) encrypts data between the browser and server for secure communication.'
    },
    {
      id: 7,
      type: 'mcq',
      question: 'What is the main advantage of using a hash table?',
      options: ['Constant time search', 'Ordered data storage', 'Memory efficiency', 'Easy implementation'],
      correctAnswer: 'Constant time search',
      explanation: 'Hash tables provide average O(1) time complexity for search, insert, and delete operations.'
    },
    {
      id: 8,
      type: 'mcq',
      question: 'Which programming paradigm focuses on objects?',
      options: ['Procedural', 'Object-Oriented', 'Functional', 'Logical'],
      correctAnswer: 'Object-Oriented',
      explanation: 'Object-Oriented Programming focuses on objects that contain data and code.'
    },
    {
      id: 9,
      type: 'mcq',
      question: 'What is the purpose of a firewall?',
      options: ['To speed up internet', 'To block unauthorized access', 'To compress data', 'To encrypt files'],
      correctAnswer: 'To block unauthorized access',
      explanation: 'A firewall acts as a barrier between trusted and untrusted networks, blocking unauthorized access.'
    },
    {
      id: 10,
      type: 'mcq',
      question: 'Which database type is best for complex queries?',
      options: ['NoSQL', 'Relational', 'Graph', 'Document'],
      correctAnswer: 'Relational',
      explanation: 'Relational databases excel at complex queries with their structured schema and SQL capabilities.'
    },

    // Coding Questions
    {
      id: 11,
      type: 'coding',
      question: 'Write a function to reverse a string in JavaScript.',
      code: 'function reverseString(str) {\n  // Your code here\n}',
      correctAnswer: 'return str.split("").reverse().join("");',
      explanation: 'Split the string into array, reverse it, then join back to string.'
    },
    {
      id: 12,
      type: 'coding',
      question: 'Write a function to find the factorial of a number in Python.',
      code: 'def factorial(n):\n    # Your code here',
      correctAnswer: 'return 1 if n <= 1 else n * factorial(n-1)',
      explanation: 'Use recursion: base case for 0 or 1, otherwise multiply n by factorial of n-1.'
    },
    {
      id: 13,
      type: 'coding',
      question: 'Write a function to check if a number is prime in Java.',
      code: 'public boolean isPrime(int n) {\n    // Your code here\n}',
      correctAnswer: 'if (n <= 1) return false;\nfor (int i = 2; i <= Math.sqrt(n); i++)\n    if (n % i == 0) return false;\nreturn true;',
      explanation: 'Check divisibility from 2 to square root of n for efficiency.'
    },
    {
      id: 14,
      type: 'coding',
      question: 'Write a function to find the maximum element in an array in C++.',
      code: 'int findMax(int arr[], int size) {\n    // Your code here\n}',
      correctAnswer: 'int max = arr[0];\nfor (int i = 1; i < size; i++)\n    if (arr[i] > max) max = arr[i];\nreturn max;',
      explanation: 'Initialize max with first element, then compare with each element.'
    },
    {
      id: 15,
      type: 'coding',
      question: 'Write a function to check if a string is palindrome in Python.',
      code: 'def isPalindrome(s):\n    # Your code here',
      correctAnswer: 'return s == s[::-1]',
      explanation: 'Compare string with its reverse using slice notation.'
    },

    // Matching Question
    {
      id: 16,
      type: 'matching',
      question: 'Match the following programming languages with their primary use case:',
      matchingPairs: [
        { left: 'Python', right: 'Data Science & AI' },
        { left: 'JavaScript', right: 'Web Development' },
        { left: 'Java', right: 'Enterprise Applications' },
        { left: 'C++', right: 'System Programming' },
        { left: 'SQL', right: 'Database Management' }
      ],
      correctAnswer: ['Python-Data Science & AI', 'JavaScript-Web Development', 'Java-Enterprise Applications', 'C++-System Programming', 'SQL-Database Management'],
      explanation: 'Each language has evolved for specific domains and use cases.'
    }
  ];

  useEffect(() => {
    // Randomly select questions
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    const selected = [
      ...shuffled.filter(q => q.type === 'mcq').slice(0, 5),
      ...shuffled.filter(q => q.type === 'coding').slice(0, 5),
      ...shuffled.filter(q => q.type === 'matching').slice(0, 1)
    ];
    setSelectedQuestions(selected);
    setLoading(false);
  }, []);

  const handleAnswer = (answer: any) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
  };

  const handleNext = () => {
    if (currentQuestion < selectedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    selectedQuestions.forEach((question, index) => {
      const userAnswer = answers[index];
      if (question.type === 'mcq' && userAnswer === question.correctAnswer) {
        totalScore += 2;
      } else if (question.type === 'coding' && userAnswer === question.correctAnswer) {
        totalScore += 3;
      } else if (question.type === 'matching') {
        const correctMatches = Array.isArray(question.correctAnswer) ? question.correctAnswer : [];
        const userMatches = Array.isArray(userAnswer) ? userAnswer : [];
        const correctCount = userMatches.filter(match => correctMatches.includes(match)).length;
        totalScore += (correctCount * 2);
      }
    });
    setScore(totalScore);
  };

  const getCurrentQuestion = () => selectedQuestions[currentQuestion];

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-xl">Loading Quiz...</div>
      </div>
    );
  }

  if (showResults) {
    const maxScore = (5 * 2) + (5 * 3) + (5 * 2); // 5 MCQs * 2 + 5 Coding * 3 + 1 Matching * 10
    const percentage = Math.round((score / maxScore) * 100);
    
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center py-12 px-4">
        <div className="w-full max-w-2xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="mb-6 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Quiz Results</h1>
        <div className="bg-white/10 rounded-2xl p-8 shadow-lg border border-white/10 w-full max-w-2xl">
          <div className="text-center mb-6">
            <div className="text-6xl font-bold text-blue-400 mb-2">{score}/{maxScore}</div>
            <div className="text-2xl text-white/80">{percentage}%</div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Multiple Choice Questions:</span>
              <span>{(score / 2).toFixed(1)}/5</span>
            </div>
            <div className="flex justify-between">
              <span>Coding Questions:</span>
              <span>{(score / 3).toFixed(1)}/5</span>
            </div>
            <div className="flex justify-between">
              <span>Matching Question:</span>
              <span>{(score / 10).toFixed(1)}/1</span>
            </div>
          </div>

          <button
            onClick={() => window.location.reload()}
            className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
          >
            Take Another Quiz
          </button>
        </div>
      </div>
    );
  }

  const question = getCurrentQuestion();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <Home className="w-5 h-5" />
          <span>Back to Home</span>
        </button>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Computer Science Quiz</h1>
      
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white/10 rounded-2xl p-8 shadow-lg border border-white/10">
          <div className="flex justify-between items-center mb-6">
            <div className="text-lg">Question {currentQuestion + 1} of {selectedQuestions.length}</div>
            <div className="text-lg">Score: {score}</div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
            
            {question.type === 'mcq' && (
              <div className="space-y-3">
                {question.options?.map((option, index) => (
                  <label key={index} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name={`question-${currentQuestion}`}
                      value={option}
                      checked={answers[currentQuestion] === option}
                      onChange={(e) => handleAnswer(e.target.value)}
                      className="text-blue-500"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            )}

            {question.type === 'coding' && (
              <div className="space-y-4">
                <div className="bg-black/60 rounded-lg p-4">
                  <pre className="text-green-400">{question.code}</pre>
                </div>
                <textarea
                  value={answers[currentQuestion] || ''}
                  onChange={(e) => handleAnswer(e.target.value)}
                  placeholder="Write your answer here..."
                  className="w-full h-32 bg-black/60 rounded-lg p-4 text-white border border-white/20 focus:outline-none focus:border-blue-400"
                />
              </div>
            )}

            {question.type === 'matching' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Left Column:</h3>
                    {question.matchingPairs?.map((pair, index) => (
                      <div key={index} className="mb-2">{pair.left}</div>
                    ))}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Right Column:</h3>
                    {question.matchingPairs?.map((pair, index) => (
                      <div key={index} className="mb-2">{pair.right}</div>
                    ))}
                  </div>
                </div>
                <textarea
                  value={answers[currentQuestion] || ''}
                  onChange={(e) => handleAnswer(e.target.value)}
                  placeholder="Write your matches in format: Left-Right, Left-Right..."
                  className="w-full h-32 bg-black/60 rounded-lg p-4 text-white border border-white/20 focus:outline-none focus:border-blue-400"
                />
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="px-6 py-2 rounded-full bg-gray-600 text-white font-semibold disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
            >
              {currentQuestion === selectedQuestions.length - 1 ? 'Submit Quiz' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage; 