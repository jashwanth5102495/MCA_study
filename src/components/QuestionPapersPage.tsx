import React from 'react';
import { ExternalLink, Download, Eye, FileText } from 'lucide-react';
import { Layout } from './Layout';

// Hardcoded sample list of question paper PDFs (replace with your actual filenames)
const questionPapers = [
  'MCA_Sem1_2021.pdf',
  'MCA_Sem1_2022.pdf',
  'MCA_Sem2_2021.pdf',
  'MCA_Sem2_2022.pdf',
  'MCA_Sem3_2021.pdf',
  'MCA_Sem3_2022.pdf',
  // Add more as needed
];

interface QuestionPapersPageProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const QuestionPapersPage: React.FC<QuestionPapersPageProps> = ({ isDark, toggleTheme }) => {
  return (
    <Layout 
      isDark={isDark} 
      toggleTheme={toggleTheme} 
      showNavigation={false}
      showBackButton={true}
      backButtonText="Back to Menu"
    >
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-blue-500/20 rounded-full">
              <FileText className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">MCA Question Papers</h1>
          </div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Access previous year question papers to prepare for your exams
          </p>
        </div>

        {/* More Question Papers Button */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 bg-green-500/20 rounded-full">
                <ExternalLink className="w-6 h-6 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Need More Question Papers?</h2>
            </div>
            <p className="text-white/80 mb-6">
              Access a comprehensive collection of MCA question papers from CIMS B-School, Bangalore
            </p>
            <a
              href="https://www.cimsbschool.org/question-papers-mca/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <ExternalLink className="w-5 h-5" />
              For More Question Papers Click Here
            </a>
          </div>
        </div>

        {/* Question Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {questionPapers.map((filename) => (
            <div key={filename} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:bg-white/15 transition-all duration-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <FileText className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-semibold text-lg text-white/90 break-all">
                  {filename.replace('.pdf', '').replace(/_/g, ' ')}
                </h3>
              </div>
              
              <div className="flex gap-3">
                <a
                  href={`/MCA/${filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium transition-all duration-200 transform hover:scale-105"
                  download
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
                <a
                  href={`/MCA/${filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white font-medium transition-all duration-200 transform hover:scale-105"
                >
                  <Eye className="w-4 h-4" />
                  View
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-12 text-center">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.cimsbschool.org/question-papers-mca/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl transition-all duration-200 transform hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                CIMS B-School MCA Papers
              </a>
              <a
                href="https://www.indiabix.com/online-test/computer-science/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl transition-all duration-200 transform hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                Online Practice Tests
              </a>
              <a
                href="https://www.geeksforgeeks.org/computer-science-projects/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white rounded-xl transition-all duration-200 transform hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                GeeksforGeeks Resources
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QuestionPapersPage; 