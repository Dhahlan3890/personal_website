import { useContext, useEffect } from 'react';
import { ThemeContext } from '../App';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const { theme } = useContext(ThemeContext);
  const projects = [
    {
      title: "Database Agent: Natural Language to SQL Conversational AI",
      description: "NLP-to-SQL agent using CrewAI/LangChain for fast, accurate query generation.",
      tech: "Python, CrewAI, LangChain, Gemini API, SQLAlchemy",
      date: "January 2025",
      link: "https://github.com/Dhahlan3890/database_agent"
    },
    {
      title: "Assistant Android App: Intelligent Productivity Assistant",
      description: "Android app with voice commands, task management, and offline support.",
      tech: "Java/Kotlin, Android SDK, SQLite, Voice Recognition APIs",
      date: "2024",
      link: "https://github.com/yourusername/assistant_android_app"
    },
    {
      title: "fyp: Fruit Freshness Analysis and Nutrition Insights (Flutter App)",
      description: "App for fruit freshness classification and nutrition insights using ML/LLM.",
      tech: "Flutter, Dart, FastAPI, TensorFlow/PyTorch, LLM APIs, Flutter Vision",
      date: "2025",
      link: "https://github.com/Dhahlan3890/freshness_detection_mobile_app"
    },
    {
      title: "Third Eye Glove for the Visually Impaired",
      description: "Wearable glove for obstacle detection using vision and sensors.",
      tech: "Raspberry Pi, ATmega 328p, Computer Vision, Ultrasonic Sensors, Python, OpenCV",
      date: "May 2024",
      link: "https://github.com/Dhahlan3890/Third_Eye_for_Blind.git"
    },
    {
      title: "EduZone: An Innovative E-learning Platform",
      description: "E-learning platform for courses/projects with React and Django.",
      tech: "React, Python, Django, JWT, Machine Learning",
      date: "July 2024",
      link: "https://eduzoneit.netlify.app/"
    },
    {
      title: "Election Helper: RAG-Powered Political Analysis Platform",
      description: "RAG pipeline for political PDF analysis and advanced Q&A/chat.",
      tech: "Python, LangChain, Google GenAI, RAG, RAGAs, TruLens, Streamlit, ChromaDB, FAISS, PyPDF2",
      date: "September 2024",
      link: "https://sparkmakers.streamlit.app/"
    },
    {
      title: "CodeForgeAI: Code Generation from Webpage Screenshots",
      description: "AI app converting screenshots to HTML/CSS with real-time preview.",
      tech: "Python, Django, React, Gemini API, Generative AI",
      date: "September 2024",
      link: "https://codeforgeai.netlify.app/"
    },
    {
      title: "Singlish GPT: Sinhala Language Model in English Letters",
      description: "mT5-based model for Singlish text generation (82% accuracy).",
      tech: "Python, Hugging Face, PyTorch, LangChain, Google Gemma",
      date: "July 2024",
      link: "https://huggingface.co/spaces/Dhahlan2000/Chitti-v2"
    },
    {
      title: "DeChatIn: Multi-Modal Conversational AI Platform",
      description: "Multi-modal chatbot with text/voice, advanced prompting, and memory.",
      tech: "Python, Streamlit, Google Gemma, Hugging Face, gTTS, SpeechRecognition, WebSockets, Asyncio",
      date: "January 2025",
      link: "https://dechatin.streamlit.app/"
    },
    {
      title: "Trading Helper Agent: Stock Analysis Assistant",
      description: "Conversational agent for stock data, news, and analytics.",
      tech: "Python, Hugging Face, LangChain, PyTorch, Streamlit, YFinance",
      date: "January 2025",
      link: "https://huggingface.co/spaces/Dhahlan2000/trade-master"
    },
    {
      title: "LipLexa: AI-powered Lip Reading System for Videos",
      description: "Lip reading app with TensorFlow/OpenCV for accessibility.",
      tech: "Python, TensorFlow, OpenCV, Matplotlib",
      date: "January 2024",
      link: ""
    },
    {
      title: "Intrusion Detection System using Machine Learning",
      description: "ML-based IDS for real-time network intrusion detection.",
      tech: "Python, scikit-learn, TensorFlow, Flask/Django, pandas, numpy, SQL",
      date: "July 2024",
      link: ""
    },
    {
      title: "GloSign: Empowering Deaf Communication",
      description: "Sign language translator with 96% gesture recognition accuracy.",
      tech: "Python, C++, Arduino, ML",
      date: "February 2024",
      link: ""
    },
    {
      title: "WeedSense: Automated Weed Removal",
      description: "Automated weed detection using SVM (93% accuracy).",
      tech: "Python, Arduino, ML, Sensors",
      date: "February 2024",
      link: ""
    },
    {
      title: "GestureGear: Hand-Gesture Controlled Car Racing Game",
      description: "Real-time hand tracking and gesture-based game control.",
      tech: "Python, OpenCV, Mediapipe, Matplotlib",
      date: "January 2024",
      link: ""
    },
    {
      title: "Supply Chain Management System",
      description: "Comprehensive system modeling real-world supply chains.",
      tech: "SQL, NoSQL, Visual Paradigm",
      date: "August 2023",
      link: ""
    },
    {
      title: "SecurePass: Password Strength Prediction Algorithm",
      description: "Password strength prediction using Pandas and TF-IDF.",
      tech: "Python, Pandas, Numpy, Tf-Idf, NLP",
      date: "June 2023",
      link: ""
    }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="portfolio" className="py-16" ref={ref}>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Projects
      </motion.h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            className={`border rounded-lg p-6 ${
              theme === 'dark' 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200'
            } shadow-md transition-colors duration-300 hover:border-blue-500`}
          >
            <h3 className="text-xl font-semibold mb-2">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                {project.title}
              </a>
            </h3>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
              {project.description}
            </p>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              Tech: {project.tech}
            </p>
            <motion.p 
              className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} mt-2`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {project.date}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;
