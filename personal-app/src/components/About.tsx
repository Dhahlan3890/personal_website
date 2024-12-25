import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="education">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <div className="mb-6">
            <h4 className="font-semibold">University of Ruhuna, Sri Lanka</h4>
            <p>Bachelor of Science in Engineering (Honors) - Electrical and Information</p>
            <p className="text-gray-600">March 2021 - Present</p>
          </div>
          <div>
            <h4 className="font-semibold">Zahira College, Kalmunai</h4>
            <p>GCE Advanced Level and GCE Ordinary Level</p>
            <p className="text-gray-600">January 2017 - August 2019</p>
          </div>
        </div>

        <div className="skills">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold">Programming Languages</h4>
              <p>C, C++, Python, JavaScript</p>
            </div>
            <div>
              <h4 className="font-semibold">ML Libraries</h4>
              <p>TensorFlow, PyTorch, scikit-learn</p>
            </div>
            <div>
              <h4 className="font-semibold">Web Development</h4>
              <p>HTML, CSS, React.js, Node.js, Django</p>
            </div>
            <div>
              <h4 className="font-semibold">Databases</h4>
              <p>MySQL, MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
