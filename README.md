# Accessible Election Assistant

## 📌 Chosen Vertical
**Civic Technology & Digital Accessibility**
This project falls under the vertical of Civic Tech, focusing specifically on creating inclusive, accessible digital infrastructure. The goal is to ensure that marginalized groups—such as the uneducated, elderly, and specially-abled (visually, hearing, or physically impaired)—can exercise their democratic rights independently without being hindered by complex, text-heavy government portals.

## 🧠 Approach and Logic
The core philosophy behind this application is **Accessibility-First Design**. 

1. **Inclusivity over Complexity**: Instead of building a complex portal with deep navigation, the app presents a linear, easy-to-follow flow of the election process.
2. **Audio-Visual Learning**: Acknowledging that many citizens may not be literate or may have poor vision, the app relies heavily on high-contrast visual illustrations and Text-to-Speech capabilities rather than just written text.
3. **Zero-Friction Technology**: By utilizing built-in browser APIs (like the Web Speech API for Text-to-Speech), the application remains incredibly lightweight and fast. It avoids heavy external TTS libraries that would increase load times for users on slow mobile networks.
4. **Cloud-Native Deployment**: The app is containerized using Docker and Nginx, making it instantly deployable, scalable, and secure on modern serverless platforms like Google Cloud Run.

## ⚙️ How the Solution Works
- **Frontend Architecture**: The application is built as a Single Page Application (SPA) using React and Vite. It heavily utilizes vanilla CSS variables to manage visual themes seamlessly.
- **State Management**: The app maintains simple state for user preferences: Language selection (`en` or `hi`), High-Contrast mode toggle, and Audio playing status.
- **Text-to-Speech Engine**: Each step in the election process has a dedicated audio button. When clicked, it triggers the browser's native `SpeechSynthesis` API, reading the instructions aloud in the selected language.
- **Deployment Pipeline**: A multi-stage `Dockerfile` is used. Stage 1 utilizes `node:20-alpine` to compile the React code into static assets. Stage 2 uses an `nginx:alpine` image to serve those assets. A custom `nginx.conf` ensures SPA routing is handled correctly and exposes port `8080` (a requirement for Google Cloud Run).

## 🤔 Assumptions Made
While building this solution, the following assumptions were made:
1. **Device Capability**: It is assumed that the user (or the volunteer assisting them) has access to a smartphone, tablet, or PC with a modern web browser that supports the native Web Speech API for audio generation.
2. **Connectivity**: While the app is extremely lightweight, it assumes a basic level of internet connectivity is available to initially load the page and its assets.
3. **Language Scope**: English and Hindi are used as the proof-of-concept languages. It is assumed that the localized translation dictionary structure implemented in the code can be easily scaled by translators to include other regional dialects.
4. **Deployment Environment**: It is assumed the target deployment environment is Google Cloud Run, hence the explicit Nginx configuration to listen on port 8080 and the inclusion of a `.dockerignore` file to ensure clean, system-agnostic builds.
