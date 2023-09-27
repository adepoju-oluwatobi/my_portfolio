import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Github from "./assets/github.png";
import Linkedin from "./assets/linkedin-logo.png";
import { motion, AnimatePresence } from "framer-motion";

const linkedinLink = 'https://www.linkedin.com/in/oluwatobi-adepoju-4a242898/';
const githubLink = 'https://github.com/adepoju-oluwatobi';

function App() {
  const backgroundGradient = {
    background: `radial-gradient(circle at center top, #292929 0%, #101010 50%)`,
    height: "100vh",
  };
  const fontFamily = {
    fontFamily: "Skranji, cursive",
  };

  // Initial loading state
  const [isLoading, setIsLoading] = useState(true);
  // Initial greetings in different languages
  const greetings = [
    "Hello",
    "Hola",
    "Bonjour",
    "Ciao",
    "Konnichiwa",
    "你好(nǐ hǎo)"
  ];
  // Index to keep track of the currently displayed greeting
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    // Function to cycle through greetings while loading
    const cycleGreetings = () => {
      setGreetingIndex((prevIndex) =>
        prevIndex === greetings.length - 1 ? 0 : prevIndex + 1
      );
    };

    // Start cycling greetings at an interval
    const intervalId = setInterval(cycleGreetings, 1000);

    // Simulate loading for a few seconds
    setTimeout(() => {
      setIsLoading(false);
      clearInterval(intervalId); // Stop cycling greetings
    }, 6000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={backgroundGradient}>
      <Header />
      <section className="text-white flex flex-col justify-center items-center gap-2 md:gap-0 h-[90vh]">
        <AnimatePresence>
          {isLoading ? (
            <motion.p
              key={greetings[greetingIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="font-bold text-[32px]"
              style={fontFamily}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {greetings[greetingIndex]}
            </motion.p>
          ) : (
            <>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="text-[#bebebe] ml-[-150px] md:ml-[-250px] font-thin"
                transition={{ duration: 1, ease: "easeOut" }}
              >
                I AM
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="font-bold text-[44px] md:text-[120px]"
                style={fontFamily}
                transition={{ duration: 2, ease: "easeInOut" }} // Adjust the duration and easing
              >
                OLUWATOBI
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="text-[#bebebe] ml-[50px] md:ml-[250px] font-thin"
                transition={{ duration: 1, ease: "easeOut" }} // Adjust the duration and easing
              >
                A FRONTEND DEVELOPER
              </motion.p>
            </>
          )}
        </AnimatePresence>
      </section>

      <section className="flex flex-col mt-[-15%] md:mt-[-3%] gap-8 ml-6">
  <motion.a
    href={githubLink}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="hover:scale-110 flex items-center gap-2"
  >
    <img className="w-5" src={Github} alt="GitHub" />
    {/* <button className="text-white text-xs px-6 py-2 rounded bg-[#303030] font-bold shadow-lg md:w-fit">Github</button> */}
  </motion.a>

  <motion.a
    href={linkedinLink}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="hover:scale-110 flex items-center gap-2"
  >
    <img className="w-5" src={Linkedin} alt="LinkedIn" />
    {/* <button className="text-white text-xs px-6 py-2 rounded bg-[#303030] font-bold shadow-lg md:w-fit">
      Connect
      </button> */}
  </motion.a>
</section>

    </div>
  );
}

export default App;
