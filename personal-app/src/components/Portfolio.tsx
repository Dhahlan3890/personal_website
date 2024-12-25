import { useContext } from 'react';
import { ThemeContext } from '../App';

const Portfolio = () => {
  const { theme } = useContext(ThemeContext);
  const projects = [
    {
      title: "Singlish GPT",
      description: "Language Model for Sinhala in English Letters using mT5 with 92% accuracy",
      tech: "Python, Hugging Face, transformers, PyTorch",
      date: "July 2024"
    },
    {
      title: "CodeForgeAI",
      description: "Code generation tool from webpage screenshots with real-time previews",
      tech: "Python, Django, JavaScript, HTML/CSS, Gemini",
      date: "September 2024"
    },
    {
      title: "Third Eye Glove",
      description: "Wearable device for visually impaired using computer vision and ultrasonic sensors",
      tech: "Raspberry Pi, ATmega 328p, Python, OpenCV",
      date: "May 2024"
    },
    {
      title: "LipLexa",
      description: "AI-powered Lip Reading System with 70% improved accessibility",
      tech: "Python, TensorFlow, OpenCV, Matplotlib",
      date: "January 2024"
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
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
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
