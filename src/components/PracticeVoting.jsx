import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Fingerprint } from 'lucide-react';

const PracticeVoting = ({ content }) => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVote = async () => {
    if (hasVoted) return; // Prevent double voting
    if (!selectedCandidate) {
      setError(content.voteCastError);
      return;
    }

    setLoading(true);
    // Simulate secure voting processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setHasVoted(true);
    setError('');
  };

  return (
    <div className="card glass-card">
      <h2 className="card-title">
        <Fingerprint size={28} className="icon-primary" />
        {content.votingPracticeTitle}
      </h2>
      
      {!hasVoted ? (
        <div className="voting-container">
          <div className="candidates-list">
            {content.candidates.map((candidate) => (
              <button
                key={candidate.id}
                className={`candidate-card ${selectedCandidate === candidate.id ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedCandidate(candidate.id);
                  setError('');
                }}
                aria-pressed={selectedCandidate === candidate.id}
              >
                <div className="symbol">{candidate.symbol}</div>
                <div className="info">
                  <span className="name">{candidate.name}</span>
                  <span className="party">{candidate.party}</span>
                </div>
              </button>
            ))}
          </div>
          
          {error && (
            <span className="error-message" role="alert">
              <AlertCircle size={18} />
              {error}
            </span>
          )}

          <button 
            className={`btn-primary ${loading ? 'loading' : ''}`}
            onClick={handleVote}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Cast Practice Vote'}
          </button>
        </div>
      ) : (
        <div className="success-banner" role="status" aria-live="polite">
          <CheckCircle2 size={32} />
          <div>
            <p className="success-title">{content.voteCastSuccess}</p>
            <button className="btn-secondary" onClick={() => {setHasVoted(false); setSelectedCandidate(null);}}>
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PracticeVoting;
