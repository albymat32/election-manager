import { render, screen } from '@testing-library/react';
import App from '../src/App';
import { describe, it, expect } from 'vitest';

describe('App Accessibility and UI Tests', () => {
  it('renders the main title', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1, name: /Election Assistant/i });
    expect(heading).toBeDefined();
  });

  it('contains language selector', () => {
    render(<App />);
    const select = screen.getByRole('combobox', { name: /Select Language/i });
    expect(select).toBeDefined();
  });

  it('renders the High Contrast toggle button', () => {
    render(<App />);
    const toggleButton = screen.getByRole('button', { name: /Toggle High Contrast/i });
    expect(toggleButton).toBeDefined();
  });
});
