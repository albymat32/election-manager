import { UserCheck, Calendar, Info, HelpingHand } from 'lucide-react';

export const translations = {
  en: {
    title: "Election Assistant",
    highContrast: "Toggle High Contrast",
    playAudio: "Read Aloud",
    stopAudio: "Stop Reading",
    langSelect: "Select Language",
    checkStatusTitle: "Check Registration Status",
    voterIdLabel: "Voter ID Number",
    voterIdPlaceholder: "e.g., ABC1234567",
    searchBtn: "Check Status",
    errEmpty: "Voter ID cannot be empty.",
    errFormat: "Invalid format. Must be 3 uppercase letters followed by 7 numbers.",
    statusActive: "Registration Active! You are eligible to vote.",
    findBoothTitle: "Find Your Polling Booth",
    findBoothPlaceholder: "Enter your area or pincode",
    findBoothBtn: "Search Booth",
    votingPracticeTitle: "Practice Your Vote",
    voteCastSuccess: "Your practice vote has been cast successfully!",
    voteCastError: "Please select a candidate before casting your vote.",
    steps: [
      {
        id: 'registration',
        icon: UserCheck,
        title: "Step 1: Voter Registration",
        description: "To vote, you must first register. Bring your ID card to the local registration office or register online. Make sure your name is on the voter list.",
        image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 'timeline',
        icon: Calendar,
        title: "Step 2: Know the Dates",
        description: "Elections happen on a specific day. Check the calendar for Election Day. Polls usually open early in the morning and close in the evening.",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 'voting',
        icon: Info,
        title: "Step 3: How to Vote",
        description: "Go to your assigned polling booth. Show your ID, get verified, and use the electronic voting machine (EVM) to cast your vote secretly.",
        image: "https://images.unsplash.com/photo-1494172892981-ce47ca685ecd?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 'assistance',
        icon: HelpingHand,
        title: "Special Assistance",
        description: "If you cannot walk or see well, special helpers and ramps are available at the booth. You have the right to request assistance.",
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=400&q=80"
      }
    ],
    candidates: [
      { id: 1, name: "Candidate A", symbol: "☀", party: "Party Sun" },
      { id: 2, name: "Candidate B", symbol: "⭐", party: "Party Star" },
      { id: 3, name: "Candidate C", symbol: "🌙", party: "Party Moon" },
      { id: 4, name: "NOTA", symbol: "✖", party: "None of the Above" }
    ]
  },
  hi: {
    title: "चुनाव सहायक (Election Assistant)",
    highContrast: "उच्च कंट्रास्ट",
    playAudio: "जोर से पढ़ें",
    stopAudio: "पढ़ना बंद करें",
    langSelect: "भाषा चुनें",
    checkStatusTitle: "पंजीकरण स्थिति जांचें",
    voterIdLabel: "मतदाता पहचान पत्र संख्या",
    voterIdPlaceholder: "उदाहरण: ABC1234567",
    searchBtn: "स्थिति जांचें",
    errEmpty: "मतदाता आईडी खाली नहीं हो सकती।",
    errFormat: "अमान्य प्रारूप। 3 अंग्रेजी अक्षर और 7 अंक होने चाहिए।",
    statusActive: "पंजीकरण सक्रिय है! आप वोट देने के पात्र हैं।",
    findBoothTitle: "अपना मतदान केंद्र खोजें",
    findBoothPlaceholder: "अपना क्षेत्र या पिनकोड दर्ज करें",
    findBoothBtn: "बूथ खोजें",
    votingPracticeTitle: "अपने वोट का अभ्यास करें",
    voteCastSuccess: "आपका अभ्यास वोट सफलतापूर्वक डाल दिया गया है!",
    voteCastError: "वोट डालने से पहले कृपया एक उम्मीदवार चुनें।",
    steps: [
      {
        id: 'registration',
        icon: UserCheck,
        title: "कदम 1: मतदाता पंजीकरण",
        description: "वोट देने के लिए, आपको पहले पंजीकरण करना होगा। अपना आईडी कार्ड स्थानीय कार्यालय ले जाएं। सुनिश्चित करें कि आपका नाम सूची में है।",
        image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 'timeline',
        icon: Calendar,
        title: "कदम 2: तारीखें जानें",
        description: "चुनाव एक विशिष्ट दिन पर होते हैं। चुनाव के दिन के लिए कैलेंडर देखें। मतदान आमतौर पर सुबह जल्दी शुरू होता है।",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 'voting',
        icon: Info,
        title: "कदम 3: वोट कैसे करें",
        description: "अपने मतदान केंद्र पर जाएं। अपनी आईडी दिखाएं और गुप्त रूप से अपना वोट डालने के लिए इलेक्ट्रॉनिक वोटिंग मशीन (EVM) का उपयोग करें।",
        image: "https://images.unsplash.com/photo-1494172892981-ce47ca685ecd?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 'assistance',
        icon: HelpingHand,
        title: "विशेष सहायता",
        description: "यदि आप चल या देख नहीं सकते हैं, तो बूथ पर विशेष सहायक और रैंप उपलब्ध हैं। आप सहायता मांगने का अधिकार रखते हैं।",
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=400&q=80"
      }
    ],
    candidates: [
      { id: 1, name: "उम्मीदवार क", symbol: "☀", party: "पार्टी सन" },
      { id: 2, name: "उम्मीदवार ख", symbol: "⭐", party: "पार्टी स्टार" },
      { id: 3, name: "उम्मीदवार ग", symbol: "🌙", party: "पार्टी मून" },
      { id: 4, name: "नोटा (NOTA)", symbol: "✖", party: "इनमें से कोई नहीं" }
    ]
  }
};
