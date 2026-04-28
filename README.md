# 🗳️ Accessible Election Assistant

A production-grade, mobile-first web application designed to guide voters—especially those with limited literacy or disabilities—through the election process.

## 🚀 Key Features

- **Inclusive Design**: Multi-language support (English/Hindi) with integrated Text-to-Speech (TTS) for non-literate users.
- **Voter ID Verification**: Secure, regex-based validation for voter registration status.
- **Practice Voting**: A simulated voting module to familiarize users with electronic voting machines (EVM).
- **Booth Finder**: Simulated Google Maps integration to help users find their nearest polling station.
- **A11y Optimized**: High-contrast mode, ARIA labels, and keyboard-friendly navigation.
- **Premium UX**: Glassmorphism aesthetic with smooth animations and Android-optimized tap targets.

## 🛠️ Tech Stack

- **Core**: React 18, Vite
- **Styling**: Vanilla CSS (Modern CSS variables, Flexbox/Grid)
- **Icons**: Lucide React
- **Services**: Web Speech API (TTS), Simulated Google Maps/Places API
- **Testing**: Vitest, React Testing Library

## 🛡️ Security & Reliability

- **Input Sanitization**: All user inputs are trimmed and validated via strict regular expressions to prevent injection.
- **State Integrity**: React-controlled components ensure UI state remains consistent with internal logic.
- **Error Boundaries**: Robust error handling for async operations and browser API failures.
- **Aria-Live Regions**: Provides real-time feedback to screen readers for status changes (success/error).

## 🌍 Google Services Integration

1.  **Web Speech API**: Leverages the native Chrome/Android speech engine for high-quality localized voice guidance.
2.  **Booth Finder (Mock)**: Simulates the integration of Google Maps JavaScript API and Google Places API to provide location-based search functionality for polling booths.

## 📦 Setup & Installation

1.  **Clone the repository**
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run in development**:
    ```bash
    npm run dev
    ```
4.  **Run tests**:
    ```bash
    npm test
    ```

## 🧪 Testing Approach

The project uses **Vitest** for unit and integration testing. We focus on:
- **Validation Logic**: Ensuring edge cases in Voter ID formats are handled.
- **User Flow**: Verifying the practice voting and search functionality.
- **Accessibility**: Testing ARIA state transitions and theme toggling.

---
**Developed with ❤️ for a more inclusive democracy.**
