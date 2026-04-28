import React, { useState } from 'react';
import { Search, AlertCircle, CheckCircle2 } from 'lucide-react';

/**
 * VoterStatusForm Component
 * Handles input validation for Voter ID with production-grade security and UX.
 */
const VoterStatusForm = ({ content }) => {
  const [voterId, setVoterId] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleValidation = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    const sanitizedInput = voterId.trim().toUpperCase();

    if (!sanitizedInput) {
      setError(content.errEmpty);
      return;
    }

    const voterIdRegex = /^[A-Z]{3}[0-9]{7}$/;
    if (!voterIdRegex.test(sanitizedInput)) {
      setError(content.errFormat);
      return;
    }

    setLoading(true);
    // Simulate network delay for better feedback loop
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    setSuccess(true);
  };

  return (
    <div className="card glass-card">
      <h2 className="card-title">
        <Search size={28} className="icon-primary" />
        {content.checkStatusTitle}
      </h2>
      <form onSubmit={handleValidation} noValidate className="form-group">
        <div className="input-container">
          <label htmlFor="voter-id-input" className="label">
            {content.voterIdLabel}
          </label>
          <input
            id="voter-id-input"
            type="text"
            value={voterId}
            onChange={(e) => {
              setVoterId(e.target.value);
              if (error) setError('');
            }}
            placeholder={content.voterIdPlaceholder}
            aria-invalid={!!error}
            aria-describedby={error ? "voter-id-error" : undefined}
            className={`input ${error ? 'input-error' : ''}`}
            disabled={loading}
          />
          {error && (
            <span id="voter-id-error" className="error-message" role="alert">
              <AlertCircle size={18} />
              {error}
            </span>
          )}
        </div>
        <button 
          type="submit" 
          className={`btn-primary ${loading ? 'loading' : ''}`}
          disabled={loading}
        >
          {loading ? '...' : content.searchBtn}
        </button>
      </form>
      
      {success && (
        <div className="success-banner" role="status" aria-live="polite">
          <CheckCircle2 size={24} />
          {content.statusActive}
        </div>
      )}
    </div>
  );
};

export default VoterStatusForm;
