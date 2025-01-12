// import React from 'react';

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
      <div className="mt-8 text-center">
        <a 
          href="https://www.overleaf.com/download/project/660ca0af81184cab2c4f7a7b/build/19459573225-9065cb10e6bf1ed9/output/output.pdf?compileGroup=standard&clsiserverid=clsi-pre-emp-n2d-b-f-8k2d&enable_pdf_caching=true&popupDownload=true"  // Replace this with the correct path to your CV file
          download
          className="bg-blue-500 text-white py-2 px-6 rounded-md text-lg hover:bg-blue-600"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default About;
