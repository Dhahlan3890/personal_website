// import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center">


        
        <svg id='text' width="369" height="121" viewBox="0 0 369 121" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="369" height="121" fill="none"/>
        <path d="M62.6797 79.0527C57.35 76.8127 51.9705 74.4987 46.013 74.7194C35.967 75.0915 27.1205 83.125 29.3464 93.8305C30.8571 101.096 39.7977 105.202 45.5686 99.7749C50.3374 95.29 52.8327 87.8133 54.7908 82.0527C58.7935 70.2773 61.4721 58.7466 63.9575 46.5527C65.0356 41.2634 66.0311 35.9526 66.7908 30.6083C67.1067 28.3861 67.8706 26.0216 67.1797 23.8861C66.8353 22.8216 65.9055 25.7636 65.5686 26.8305C61.0389 41.1747 57.9408 57.7842 60.013 72.8305C60.6114 77.1754 63.5129 92.4258 70.013 93.3861C76.3799 94.3266 82.8373 67.1148 83.6797 64.6083C86.4034 56.5037 93.2225 42.8058 92.9019 33.8305C92.7429 29.3766 89.339 42.02 88.013 46.2749C85.3879 54.699 82.7719 63.7144 81.8464 72.5527C80.0435 89.7697 87.9925 81.6008 97.5686 78.6083C103.802 76.6604 105.991 77.4045 109.735 82.7749C112.227 86.3492 111.865 92.5608 115.846 94.3305C120.966 96.606 131.388 80.9276 133.124 78.7194C135.519 75.6732 143.071 68.2825 139.235 68.8305C135.228 69.4029 133.693 75.0132 132.346 78.8305C126.219 96.2038 146.437 80.2952 149.791 76.9416C151.484 75.2482 155.074 70.0067 155.346 72.3861C155.835 76.6647 154.295 80.9715 154.457 85.2749C154.674 90.9886 155.921 98.3723 162.346 90.5527C170.3 80.8732 179.888 62.3696 184.902 52.6638C185.344 51.8084 201.167 20.7221 203.124 13.2194C205.88 2.65578 193.183 32.6855 189.013 42.7749C182.712 58.0213 175.899 75.4857 171.735 91.7194C166.116 113.627 179.69 89.2515 182.235 85.6083C182.752 84.8678 190.971 71.4467 194.902 74.8305C198.573 77.9908 195.051 95.4714 204.013 94.0527C213.738 92.5133 223.66 75.6699 226.68 70.6083C230.158 64.7776 242.904 40.0143 243.902 29.9416C244.725 21.6342 234.854 44.2458 232.569 52.2749C230.497 59.5499 225.947 76.7356 231.68 85.2749C238.005 94.6977 253.16 83.7998 258.069 79.6083C260.979 77.1235 266.541 73.3532 264.513 70.1083C262.999 67.685 259.587 73.3992 258.18 75.8861C253.625 83.9324 253.82 93.1562 265.346 87.4416C273.131 83.582 276.332 78.4672 280.346 71.4416C282.028 68.4992 279.964 78.241 280.346 81.6083C281.662 93.1976 290.475 82.165 295.346 79.2749C307.658 71.9717 325.062 74.5484 338.68 75.0527" stroke="url(#paint0_linear_1_2)" stroke-width="8" stroke-linecap="round"/>
        <defs>
        <linearGradient id="paint0_linear_1_2" x1="28.6797" y1="18.0527" x2="338.68" y2="120.053" gradientUnits="userSpaceOnUse">
        <stop stop-color="#9E1BD1"/>
        <stop offset="1" stop-color="#180DBD" stop-opacity="0.87"/>
        </linearGradient>
        </defs>
        </svg>


      <p className="text-xl mb-4">I'm Ahamed Dhahlan, a Machine Learning Engineer</p>
      <p className="text-lg text-gray-600 max-w-2xl text-center">
        Dynamic ML Engineer skilled in Python, TensorFlow, and scikit-learn with hands-on 
        experience in building language models, real-time code generation tools, and assistive devices.
      </p>
      <div className="mt-8 text-center">
        <a 
          href="https://drive.google.com/file/d/1EQDnQsiMutaajEMKDwOGGDmfjnT7ajr6/view?usp=drive_link"  // Replace this with the correct path to your CV file
          download
          className="bg-blue-500 text-white dark:bg-blue-700 dark:text-gray-200 py-2 px-6 rounded-md text-lg hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors duration-300"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Home;