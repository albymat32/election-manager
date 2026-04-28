import React, { useState } from 'react';
import { Volume2, VolumeX, Eye, Languages } from 'lucide-react';
import { translations } from './i18n/translations';
import { useSpeech } from './hooks/useSpeech';
import { useTheme } from './hooks/useTheme';
import VoterStatusForm from './components/VoterStatusForm';
import PracticeVoting from './components/PracticeVoting';
import BoothFinder from './components/BoothFinder';
import './index.css';

/**
 * Election Assistant Main Application
 * 
 * Improvements:
 * - Decoupled logic into custom hooks (useSpeech, useTheme)
 * - Extracted components for better maintainability
 * - Added feature-rich modules: Practice Voting and Booth Finder
 * - Enhanced mobile-first UX with glassmorphism and Android-friendly interactions
 */
function App() {
  const [lang, setLang] = useState('en');
  const { highContrast, toggleHighContrast } = useTheme();
  const { speakingId, speakText, stopSpeaking } = useSpeech(lang);
  
  const content = translations[lang];

  return (
    <div className="app-root">
      <header role="banner">
        <h1 className="animate-fade-in">{content.title}</h1>
        <div className="controls animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="btn-icon">
            <Languages size={20} className="text-muted" />
            <select 
              aria-label={content.langSelect}
              value={lang} 
              onChange={(e) => {
                setLang(e.target.value);
                stopSpeaking();
              }}
              className="select-lang"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
            </select>
          </div>
          <button 
            onClick={toggleHighContrast} 
            className="btn-icon" 
            aria-pressed={highContrast}
            title={content.highContrast}
          >
            <Eye size={24} className={highContrast ? 'icon-primary' : ''} />
          </button>
        </div>
      </header>

      <main className="container" role="main">
        {/* Registration Check Section */}
        <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <VoterStatusForm content={content} />
        </section>

        {/* Practice Voting Section - New Feature */}
        <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <PracticeVoting content={content} />
        </section>

        {/* Booth Finder Section - New Feature (Simulated Google Service) */}
        <section className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <BoothFinder content={content} />
        </section>

        {/* Educational Steps */}
        {content.steps.map((step, index) => {
          const Icon = step.icon;
          const isSpeaking = speakingId === step.id;
          
          return (
            <article 
              key={step.id} 
              className="card glass-card animate-fade-in" 
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              aria-labelledby={`step-title-${index}`}
            >
              <h2 id={`step-title-${index}`} className="card-title">
                <Icon size={28} className="icon-primary" />
                {step.title}
              </h2>
              <img src={step.image} alt={step.title} className="step-image" loading="lazy" />
              <p className="step-description">{step.description}</p>
              <button 
                className={`btn-primary ${isSpeaking ? 'btn-active' : ''}`}
                onClick={() => isSpeaking ? stopSpeaking() : speakText(`${step.title}. ${step.description}`, step.id)}
                aria-label={isSpeaking ? content.stopAudio : `${content.playAudio} for ${step.title}`}
              >
                {isSpeaking ? <VolumeX size={20} /> : <Volume2 size={20} />}
                {isSpeaking ? content.stopAudio : content.playAudio}
              </button>
            </article>
          );
        })}
      </main>
    </div>
  );
}

export default App;
