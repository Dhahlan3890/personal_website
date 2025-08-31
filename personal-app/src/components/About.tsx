import { motion, useAnimation } from 'framer-motion';
import { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../App';
import { useInView } from 'framer-motion';

const About = () => {
  const { theme } = useContext(ThemeContext);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
        staggerChildren: 0.2
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
    <motion.section 
      id="about" 
      className="py-16"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.h2 
        className={`text-3xl font-bold mb-8 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}
        variants={itemVariants}
      >
        About Me
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          className="education"
          variants={itemVariants}
        >
          <motion.h3 
            className={`text-2xl font-semibold mb-4 ${
              theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
            }`}
            variants={itemVariants}
          >
            Education
          </motion.h3>
          <motion.div 
            className="mb-6 p-4 rounded-lg border hover:border-blue-500 transition-colors duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
          >
            <h4 className={`font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
              University of Ruhuna, Sri Lanka
            </h4>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
              Bachelor of Science in Engineering (Honors) - Electrical and Information
            </p>
            <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
              March 2021 - Present
            </p>
          </motion.div>
          <motion.div 
            className="p-4 rounded-lg border hover:border-blue-500 transition-colors duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
          >
            <h4 className={`font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
              Zahira College, Kalmunai
            </h4>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
              GCE Advanced Level and GCE Ordinary Level
            </p>
            <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
              January 2017 - August 2019
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="skills"
          variants={itemVariants}
        >
          <motion.h3 
            className={`text-2xl font-semibold mb-4 ${
              theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
            }`}
            variants={itemVariants}
          >
            Skills
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={containerVariants}
          >
            {[
              {
                title: "Programming Languages",
                skills: "Python, JavaScript"
              },
              {
                title: "ML/DL Frameworks",
                skills: "PyTorch, TensorFlow, Keras, Scikit-learn, Hugging Face Transformers"
              },
              {
                title: "Agentic AI / LLMs",
                skills: "LangChain, Transformers, RAG, reasoning/planning systems"
              },
              {
                title: "Computer Vision & Multimodal AI",
                skills: "OpenCV, YOLO, CLIP, VLMs, audio processing (Librosa, torchaudio)"
              },
              {
                title: "MLOps & Deployment",
                skills: "Docker, Kubernetes, MLflow, AWS SageMaker, Vertex AI, CI/CD"
              },
              {
                title: "Cloud Platforms",
                skills: "AWS, GCP, Azure"
              },
              {
                title: "Big Data / Pipelines",
                skills: "Spark, Hadoop, Apache Kafka"
              },
              {
                title: "Other Tools",
                skills: "Git, REST APIs, FastAPI/Flask, ReactJS, NextJS"
              },
              {
                title: "Soft Skills",
                skills: "Effective Communication, Problem Solving, Team Collaboration, Adaptability, Time Management"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-lg border hover:border-blue-500 transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <h4 className={`font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                  {category.title}
                </h4>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  {category.skills}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
