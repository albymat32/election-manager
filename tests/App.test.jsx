import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../src/App';
import { describe, it, expect, vi } from 'vitest';

// Mock Web Speech API
window.speechSynthesis = {
  speak: vi.fn(),
  cancel: vi.fn(),
  getVoices: vi.fn(() => []),
};

describe('Election Assistant Production Suite', () => {
  it('renders the main app and basic components', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
    expect(screen.getByPlaceholderText(/e.g., ABC1234567/i)).toBeDefined();
    expect(screen.getByText(/Practice Your Vote/i)).toBeDefined();
  });

  it('validates Voter ID correctly', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/e.g., ABC1234567/i);
    const button = screen.getByRole('button', { name: /Check Status/i });

    // Test empty
    fireEvent.click(button);
    expect(await screen.findByText(/Voter ID cannot be empty/i)).toBeDefined();

    // Test invalid format
    fireEvent.change(input, { target: { value: '123ABC4567' } });
    fireEvent.click(button);
    expect(await screen.findByText(/Invalid format/i)).toBeDefined();

    // Test valid format
    fireEvent.change(input, { target: { value: 'ABC1234567' } });
    fireEvent.click(button);
    
    // Check for success message after simulation delay
    await waitFor(() => {
      expect(screen.getByText(/Registration Active/i)).toBeDefined();
    }, { timeout: 2000 });
  });

  it('handles practice voting selection', async () => {
    render(<App />);
    const candidateBtn = screen.getByText(/Candidate A/i);
    fireEvent.click(candidateBtn);
    
    const voteBtn = screen.getByRole('button', { name: /Cast Practice Vote/i });
    fireEvent.click(voteBtn);

    await waitFor(() => {
      expect(screen.getByText(/practice vote has been cast successfully/i)).toBeDefined();
    }, { timeout: 2000 });
  });

  it('toggles high contrast mode', () => {
    render(<App />);
    const toggleBtn = screen.getByRole('button', { name: /Toggle High Contrast/i });
    fireEvent.click(toggleBtn);
    expect(document.body.getAttribute('data-theme')).toBe('high-contrast');
  });
});
