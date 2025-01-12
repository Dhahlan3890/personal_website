import { useContext } from 'react';
import { ThemeContext } from '../App';

const Portfolio = () => {
  const { theme } = useContext(ThemeContext);
  const projects = [
    {
      title: "Singlish GPT",
      description: "Language Model for Sinhala in English Letters using mT5 with 92% accuracy",
      tech: "Python, Hugging Face, transformers, PyTorch, Aksharamukha, Google Gemma",
      date: "July 2024",
      link: "https://huggingface.co/spaces/Dhahlan2000/Chitti-v2"
    },
    {
      title: "DeChatIn",
      description: "AI-Powered Chatbot for Conversational and Voice Interactions",
      tech: "Python, Streamlit, Google Gemma, Huggingface Transformers, Google Text-to-Speech (TTS), NLP, Generative AI",
      date: "January 2025",
      link: "https://dechatin.streamlit.app/"
    },
    {
      title: "CodeForgeAI",
      description: "Code generation tool from webpage screenshots with real-time previews",
      tech: "Python, Django, React, Gemini, Generative AI",
      date: "September 2024",
      link: "https://codeforgeai.netlify.app/"
    },
    {
      title: "EduZone: An Innovative E-learning Platform",
      description: "Developed an e-learning platform for courses and projects using React and Django.",
      tech: "React, Python, Django, JWT token, Machine Learning",
      date: "July 2024",
      link: "https://eduzoneit.netlify.app/"
    },
    {
      title: "Trading Helper Agent",
      description: "Conversational assistant for stock analysis with tools for fetching stock data and news.",
      tech: "Python, Hugging Face Transformers, Langchain Agent, PyTorch, Streamlit, YFinance",
      date: "January 2025",
      link: "https://huggingface.co/spaces/Dhahlan2000/trade-master"
    },
    {
      title: "Third Eye Glove for the Visually Impaired",
      description: "Wearable glove for blind individuals using computer vision and ultrasonic sensors.",
      tech: "Raspberry Pi, ATmega 328p, Computer Vision, Image Processing, Ultrasonic Sensors, Python, OpenCV",
      date: "May 2024",
      link: "#"
    },
    {
      title: "LipLexa: AI-powered Lip Reading System for Videos",
      description: "Created a state-of-the-art lip reading application with TensorFlow and OpenCV; increased accessibility for hearing impaired by 70% and achieved 40% faster processing speeds.",
      tech: "Python, TensorFlow, OpenCV, Matplotlib",
      date: "January 2024",
      link: "https://github.com/Dhahlan3890/LipLexa"
    },
    {
      title: "Intrusion Detection System using Machine Learning: Enhancing Network Security",
      description: "Trained an advanced Intrusion Detection System (IDS) to detect and mitigate network intrusions, providing real-time monitoring and alerting capabilities.",
      tech: "Python, scikit-learn, TensorFlow, Flask/Django, pandas, numpy, SQL",
      date: "July 2024",
      link: "#"
    },
    {
      title: "GloSign: Empowering Deaf Communication",
      description: "Developed a sign language translator achieving 96% accuracy in gesture recognition, facilitating communication for the deaf.",
      tech: "Python, C++, Arduino, ML",
      date: "February 2024",
      link: "#"
    },
    {
      title: "WeedSense: Automated Weed Removal",
      description: "Achieved 93% accuracy in automated weed detection using SVM classification on preprocessed image data.",
      tech: "Python, Arduino, ML, Sensors",
      date: "February 2024",
      link: "https://github.com/Dhahlan3890/WeedSense"
    },
    {
      title: "GestureGear: Hand-Gesture Controlled Car Racing Game",
      description: "Engineered an advanced real-time hand tracking and gesture recognition system, achieving a 40% increase in user interaction accuracy and elevating overall gameplay experience.",
      tech: "Python, OpenCV, Mediapipe, Matplotlib",
      date: "January 2024",
      link: "https://github.com/Dhahlan3890/GestureGear"
    },
    {
      title: "Supply chain management system: A Comprehensive Real World Supply Chain",
      description: "Developed an advanced management system that mirrors the complexities and dynamics of real supply chains.",
      tech: "SQL, NoSQL, Visual Paradigm",
      date: "August 2023",
      link: "https://github.com/Dhahlan3890/Database_Project"
    },
    {
      title: "SecurePass: An Advanced Password Strength Prediction Algorithm",
      description: "Developed a robust password strength prediction algorithm leveraging Pandas for data manipulation and TF-IDF for feature extraction.",
      tech: "Python, Pandas, Numpy, Tf-Idf, NLP",
      date: "June 2023",
      link: "https://github.com/Dhahlan3890/Password_strength_prediction"
    }
  ];

  return (
    <section id="portfolio" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`border rounded-lg p-6 ${
              theme === 'dark' 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200'
            } shadow-md`}
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
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} mt-2`}>
              {project.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
