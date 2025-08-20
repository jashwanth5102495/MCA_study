import React, { useState } from 'react';

const VirtualTeacherPage: React.FC = () => {
  const [chat, setChat] = useState<{ question: string; answer: string }[]>([]);
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setError(null);
    const userQuestion = question;
    setQuestion('');
    try {
      const res = await fetch('http://localhost:5001/api/ask-teacher', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userQuestion }),
      });
      const data = await res.json();
      if (data.answer) {
        setChat((prev) => [
          ...prev,
          { question: userQuestion, answer: data.answer },
        ]);
      } else {
        setError(data.error || 'Failed to get answer.');
      }
    } catch (err) {
      setError('Failed to get answer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Virtual Teacher (A.I.)</h1>
      <p className="text-white/70 mb-8 text-center max-w-2xl">
        Ask your AI teacher anything! Get help with any subject, concept, or problem. Your personal tutor is here to help you learn.
      </p>
      
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
        <div className="bg-white/10 rounded-2xl p-6 shadow-lg border border-white/10 w-full mb-6">
          <div className="mb-2 text-lg font-semibold">Ask your AI teacher anything:</div>
          <div className="flex gap-2 mt-4">
            <input
              type="text"
              value={question}
              onChange={e => setQuestion(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleAsk()}
              className="flex-1 px-4 py-2 rounded-lg bg-black/60 text-white border border-white/20 focus:outline-none"
              placeholder="Ask about any subject, concept, or problem..."
              disabled={loading}
            />
            <button
              onClick={handleAsk}
              disabled={loading || !question.trim()}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-base disabled:opacity-50"
            >
              {loading ? 'Thinking...' : 'Ask'}
            </button>
          </div>
          {error && <div className="text-red-400 mt-4">{error}</div>}
        </div>
        <div className="w-full max-w-2xl space-y-4">
          {chat.map((item, idx) => (
            <div key={idx} className="bg-white/5 rounded-xl p-4">
              <div className="text-blue-300 font-semibold">Q: {item.question}</div>
              <div className="text-white/90 mt-2">A: {item.answer}</div>
            </div>
          ))}
          {loading && <div className="text-white/70">AI teacher is thinking...</div>}
        </div>
      </div>
    </div>
  );
};

export default VirtualTeacherPage; 