import { createContext, useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

type Theme = 'light' | 'dark';
export const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({ theme: 'light', toggleTheme: () => {} });

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 ${
        theme === 'dark' ? 'bg-gray-800/80' : 'bg-white/80'
      } backdrop-blur-sm shadow-sm z-50`}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-8">
            {['home', 'about', 'portfolio', 'contact'].map((section, index) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative ${
                  theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                } capitalize`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100 
                }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {section}
                <motion.div 
                  className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                    theme === 'dark' ? 'bg-white' : 'bg-gray-900'
                  }`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </div>
          <motion.button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${
              theme === 'dark' ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'
            }`}
            whileHover={{ 
              scale: 1.1,
              rotate: 180,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    return savedTheme || 'dark';
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} min-h-screen transition-colors duration-200`}>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4">
          <Home />
          <About />
          <Portfolio />
          <Contact />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
