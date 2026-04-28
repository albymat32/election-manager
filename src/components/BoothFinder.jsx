import React, { useState } from 'react';
import { MapPin, Navigation, Search } from 'lucide-react';

const BoothFinder = ({ content }) => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    // Simulate API call to Google Places/Maps
    await new Promise(resolve => setTimeout(resolve, 1200));
    setResult({
      name: "Government Primary School, Sector 4",
      address: "123 Civic Center, New Delhi, 110001",
      distance: "0.8 km away",
      mapUrl: "https://www.google.com/maps/embed/v1/place?key=MOCK_KEY&q=Government+Primary+School+Sector+4"
    });
    setLoading(false);
  };

  return (
    <div className="card glass-card">
      <h2 className="card-title">
        <MapPin size={28} className="icon-primary" />
        {content.findBoothTitle}
      </h2>

      <form onSubmit={handleSearch} className="form-group">
        <div className="input-container">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={content.findBoothPlaceholder}
            className="input"
            disabled={loading}
          />
        </div>
        <button type="submit" className={`btn-primary ${loading ? 'loading' : ''}`} disabled={loading}>
          <Search size={18} />
          {loading ? '...' : content.findBoothBtn}
        </button>
      </form>

      {result && (
        <div className="booth-result animate-fade-in">
          <div className="booth-info">
            <h3>{result.name}</h3>
            <p>{result.address}</p>
            <span className="distance">{result.distance}</span>
          </div>
          <div className="map-mockup">
            <div className="map-overlay">
              <Navigation size={48} className="nav-icon" />
              <p>Google Maps Integration Mockup</p>
            </div>
          </div>
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(result.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Open in Google Maps
          </a>
        </div>
      )}
    </div>
  );
};

export default BoothFinder;
