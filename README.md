# GeminiClone 🤖

A fully functional clone of Google's Gemini AI interface built with React and Vite. This project replicates the sleek design and interactive features of Google's AI chatbot, providing users with an intuitive conversational AI experience.

## ✨ Features

- **Chat Interface**: Clean and intuitive chat UI similar to Google Gemini
- **Real-time Messaging**: Instant message display with typing indicators
- **AI Integration**: Connect with Google's Gemini API for intelligent responses
- **Conversation History**: Persistent chat history and session management
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between dark and light modes
- **Message Formatting**: Support for markdown, code blocks, and rich text
- **File Upload**: Upload images and documents for AI analysis
- **Voice Input**: Speech-to-text functionality for hands-free interaction
- **Export Conversations**: Save chat history as text or PDF files

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have:
- Node.js (version 16 or higher)
- npm, yarn, or pnpm package manager
- Google Gemini API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ItsMeYash777/GeminiClone.git
cd GeminiClone
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Add your API configuration to `.env.local`:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_API_URL=https://generativelanguage.googleapis.com/v1beta
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open your browser and navigate to `http://localhost:5173` to see the application.

## 🛠️ Built With

- **[React](https://reactjs.org/)** - JavaScript library for building user interfaces
- **[Vite](https://vitejs.dev/)** - Next generation frontend build tool
- **[Google Gemini API](https://ai.google.dev/)** - Google's generative AI API
- **[CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)** - Modern styling and animations
- **[Axios](https://axios-http.com/)** - Promise-based HTTP client
- **[React Markdown](https://github.com/remarkjs/react-markdown)** - Markdown component for React
- **[React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)** - Code syntax highlighting

## 📁 Project Structure

```
GeminiClone/
├── public/                 # Static assets
│   ├── icons/             # App icons and favicons
│   └── images/            # Static images
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── Chat/         # Chat interface components
│   │   │   ├── ChatContainer.jsx
│   │   │   ├── MessageBubble.jsx
│   │   │   ├── InputArea.jsx
│   │   │   └── TypingIndicator.jsx
│   │   ├── Sidebar/      # Sidebar components
│   │   │   ├── Sidebar.jsx
│   │   │   ├── ChatHistory.jsx
│   │   │   └── Settings.jsx
│   │   ├── UI/           # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── ThemeToggle.jsx
│   │   └── Layout/       # Layout components
│   ├── hooks/            # Custom React hooks
│   │   ├── useChat.js
│   │   ├── useTheme.js
│   │   └── useLocalStorage.js
│   ├── services/         # API services
│   │   ├── geminiAPI.js
│   │   └── apiUtils.js
│   ├── utils/            # Utility functions
│   │   ├── formatters.js
│   │   ├── constants.js
│   │   └── helpers.js
│   ├── styles/           # CSS files
│   │   ├── globals.css
│   │   ├── components.css
│   │   └── themes.css
│   ├── contexts/         # React contexts
│   │   ├── ThemeContext.js
│   │   └── ChatContext.js
│   ├── App.jsx           # Main App component
│   └── main.jsx          # Entry point
├── .env.example          # Environment variables template
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Google Gemini API Configuration
VITE_GEMINI_API_KEY=your_api_key_here
VITE_API_URL=https://generativelanguage.googleapis.com/v1beta

# App Configuration
VITE_APP_NAME=GeminiClone
VITE_MAX_TOKENS=1000
VITE_TEMPERATURE=0.7
```

### Getting Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key to your `.env.local` file

## 🎨 Key Components

### Chat Interface
- **MessageBubble**: Individual message display with user/AI differentiation
- **InputArea**: Text input with send button and file upload
- **TypingIndicator**: Shows when AI is generating response
- **ChatContainer**: Main chat area with scroll management

### Sidebar
- **ChatHistory**: List of previous conversations
- **NewChat**: Start new conversation button
- **Settings**: Theme toggle and preferences

### AI Integration
- **Gemini API**: Real-time communication with Google's AI
- **Response Formatting**: Markdown rendering and code highlighting
- **Error Handling**: Graceful handling of API errors and rate limits

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

### Code Style

This project follows modern React best practices:
- Functional components with hooks
- Custom hooks for reusable logic
- Context API for state management
- CSS modules for styling
- ESLint and Prettier for code quality

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel --prod
```

3. Add environment variables in Vercel dashboard

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify
3. Configure environment variables in Netlify settings

### Deploy to Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Initialize Firebase:
```bash
firebase init hosting
```

3. Build and deploy:
```bash
npm run build
firebase deploy
```

## 🔒 Security & Privacy

- **API Key Security**: Environment variables used for sensitive data
- **Input Sanitization**: User inputs are sanitized before API calls
- **Rate Limiting**: Implemented to prevent API abuse
- **Local Storage**: Chat history stored locally on user's device
- **No Data Collection**: No personal data sent to external servers

## 📱 Responsive Design

Optimized for all screen sizes:
- **Mobile**: Collapsible sidebar, touch-friendly interface
- **Tablet**: Adaptive layout with proper spacing
- **Desktop**: Full sidebar, multi-column layout
- **Large Screens**: Optimized for wide displays

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow React best practices and hooks patterns
- Maintain consistent code formatting with Prettier
- Write meaningful commit messages
- Test across different devices and browsers
- Ensure accessibility standards are met

## 🐛 Known Issues

- Rate limiting may occur with high API usage
- File upload size limited by browser constraints
- Voice input requires HTTPS in production

## 📈 Future Enhancements

- [ ] Multi-language support
- [ ] Voice output (text-to-speech)
- [ ] Advanced file analysis capabilities
- [ ] Conversation sharing functionality
- [ ] Custom AI model integration
- [ ] Plugin system for extensions
- [ ] Collaborative chat rooms
- [ ] Advanced search in chat history

## 🔄 API Rate Limits

Be aware of Google Gemini API limits:
- Free tier: 60 requests per minute
- Paid tier: Higher limits available
- Implement proper error handling for rate limit responses

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚖️ Disclaimer

This is an educational project created to demonstrate React development skills. It is not affiliated with Google or the official Gemini product. Please respect Google's terms of service when using their APIs.

## 📞 Contact

**Yash** - [@ItsMeYash777](https://github.com/ItsMeYash777)

Project Link: [https://github.com/ItsMeYash777/GeminiClone](https://github.com/ItsMeYash777/GeminiClone)

## 🙏 Acknowledgments

- [Google](https://google.com/) for the Gemini AI API
- [React Team](https://reactjs.org/) for the amazing library
- [Vite Team](https://vitejs.dev/) for the excellent build tool
- The open-source community for various libraries and inspiration

---

⭐ If you found this project helpful, please give it a star on GitHub!

🤖 *"The future is built on conversations with AI"*
