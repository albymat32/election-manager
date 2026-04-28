import { useState, useEffect } from 'react';

/**
 * Custom hook for managing themes (High Contrast)
 */
export const useTheme = () => {
  const [highContrast, setHighContrast] = useState(() => {
    return localStorage.getItem('theme') === 'high-contrast';
  });

  useEffect(() => {
    const theme = highContrast ? 'high-contrast' : 'default';
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [highContrast]);

  const toggleHighContrast = () => setHighContrast(prev => !prev);

  return { highContrast, toggleHighContrast };
};
