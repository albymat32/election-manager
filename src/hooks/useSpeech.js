import { useState, useCallback, useEffect } from 'react';

/**
 * Custom hook for managing Web Speech API (TTS)
 */
export const useSpeech = (lang) => {
  const [speakingId, setSpeakingId] = useState(null);

  const stopSpeaking = useCallback(() => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    setSpeakingId(null);
  }, []);

  const speakText = useCallback((text, id) => {
    if (!window.speechSynthesis) return;
    
    stopSpeaking(); // Stop any ongoing speech

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-US';
    utterance.rate = 0.9; // Slightly slower for better accessibility
    
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);
    
    window.speechSynthesis.speak(utterance);
    setSpeakingId(id);
  }, [lang, stopSpeaking]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return { speakingId, speakText, stopSpeaking };
};
