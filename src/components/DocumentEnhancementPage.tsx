import React, { useState } from 'react';

const DocumentEnhancementPage: React.FC = () => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [enhancedContent, setEnhancedContent] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPdfFile(e.target.files[0]);
      setEnhancedContent('');
      setError(null);
    }
  };

  const handleEnhance = async () => {
    if (!pdfFile) return;
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append('pdf', pdfFile);
      
      // Call a different endpoint for document enhancement
      const res = await fetch('http://localhost:5001/api/enhance-document', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.enhancedContent) {
        setEnhancedContent(data.enhancedContent);
      } else {
        setError(data.error || 'Failed to enhance document.');
      }
    } catch (err) {
      setError('Failed to enhance document.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Document Enhancement</h1>
      <p className="text-white/70 mb-8 text-center max-w-2xl">
        Upload your documents and get AI-powered enhancements: better formatting, improved clarity, and professional summaries.
      </p>
      
      <div className="bg-white/10 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-white/10 w-full max-w-2xl">
        <label className="mb-4 text-lg">Upload your document (PDF):</label>
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="mb-4 text-white"
          disabled={loading}
        />
        <button
          onClick={handleEnhance}
          disabled={!pdfFile || loading}
          className="px-8 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold shadow-lg hover:from-green-600 hover:to-blue-700 transition-all duration-200 text-lg disabled:opacity-50"
        >
          {loading ? 'Enhancing...' : 'Enhance Document'}
        </button>
        {error && <div className="text-red-400 mt-4">{error}</div>}
        
        {enhancedContent && (
          <div className="w-full mt-8">
            <h3 className="text-xl font-semibold mb-4">Enhanced Content:</h3>
            <div className="bg-black/60 rounded-lg p-4 max-h-96 overflow-y-auto">
              <pre className="text-white/90 whitespace-pre-wrap">{enhancedContent}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentEnhancementPage; 