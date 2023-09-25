import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "./Header";
import Github from "../assets/github.png";
import Linkedin from "../assets/linkedin-logo.png";
import { motion, AnimatePresence } from "framer-motion";

const linkedinLink = "https://www.linkedin.com/in/oluwatobi-adepoju-4a242898/";
const githubLink = "https://github.com/adepoju-oluwatobi";

const projects = [
  {
    name: "Movie Box",
    description: "An internship project from HNG. API fetched from TMDB.",
    image: "/movie_app.png",
    vite: "/vite.svg",
    react: "/react.svg",
    link: "https://zuri-stage-two.vercel.app/",
  },
  {
    name: "Fashion Store",
    description: `An Ecommerce website developed to sharpen my 
      skill on API fetching and ecommerce development.`,
    image: "/shoe_store.png",
    link: "https://shoe-store-livid.vercel.app/"
  },
  {
    name: "Intro Section",
    description: "A challenge by frontend mentor",
    image: "/intro_section.png",
    link: "https://intro-section-with-dropdown-navigation-ruby.vercel.app/"
  },
  // Add more project objects here if needed
];

function ScrollDots({ activeIndex, onClickDot }) {
  return (
    <div className="scroll-dots">
      {projects.map((_, index) => (
        <span
          key={index}
          className={`scroll-dot ${activeIndex === index ? "active" : ""}`}
          onClick={() => onClickDot(index)}
        />
      ))}
    </div>
  );
}

function ProjectCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  const backgroundGradient = {
    background: `radial-gradient(circle at center top, #292929 0%, #101010 50%)`,
    height: "100vh",
  };
  const fontFamily = {
    fontFamily: "Skranji, cursive",
  };

  const projectContainer = {
    width: "100%", // Adjust the width as needed
    display: "flex",
    padding: "20px",
    overflowX: "auto", // Enable horizontal scrolling
    scrollbarWidth: "none", // Firefox
    WebkitOverflowScrolling: "touch", // iOS
  };

  const projectCard = {
    flex: "0 0 auto", // Allow project cards to have their own width
    margin: "0 20px", // Add margin between project cards
    background: "#131313",
    borderRadius: "30px",
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
    // Scroll to the selected project card (You can implement this using scrollIntoView)
  };

  // CSS for hiding the scrollbar
  const scrollbarStyle = `
    ::-webkit-scrollbar {
      display: none; /* Remove scrollbar for Chrome/Safari/Edge */
    }
  `;

  const dotStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    margin: "0 5px",
    cursor: "pointer",
    backgroundColor: "gray", // Default dot color
    transition: "background-color 0.3s ease",
  };

  const activeDotStyle = {
    backgroundColor: "blue", // Active dot color
  };

  // Define animation variants
  const projectCardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const linkVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 20,
    },
  };

  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
  // Define animation variants for the image
  const imageVariants = {
    hover: {
      scale: isMobile ? 1 : 1.1, // Apply the hover effect only on non-mobile devices
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div style={{ ...backgroundGradient, overflow: "hidden" }}>
      {/* Apply the scrollbarStyle CSS */}
      <style>{scrollbarStyle}</style>
      <Header />
      <div
        className="project-container mt-[25%] md:mt-[10%] text-white "
        style={projectContainer}
      >
        {projects.map((project, index) => (
         <motion.div
         // Wrap the image with a motion.div for animations
         whileHover={isMobile ? undefined : "hover"} // Apply the hover animation conditionally
         variants={imageVariants}
       >
          <motion.div
            key={index}
            className="project-card cursor-pointer"
            style={projectCard}
            initial="hidden"
            animate="visible"
            variants={projectCardVariants}
          >
           <a href={project.link} target="_blank">
           <div className="w-[300px]">
              <img src={project.image} alt={project.name} />
              <div className="p-4">
                <h3 className="font-bold" style={fontFamily}>
                  {project.name}
                </h3>
                <p className="font-thin text-sm">{project.description}</p>
                <div className="flex gap-2 mt-4">
                  <img src={project.vite} className="w-5" alt="" />
                  <img src={project.react} className="w-5" alt="" />
                </div>
                {/* <img src={project.stack[1]} alt="" /> */}
              </div>
            </div>
           </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <ScrollDots activeIndex={activeIndex} onClickDot={handleDotClick} />
      <section className="flex md:flex-col gap-5 mt-[5%] md:gap-8 md:mt-[-1%] ml-10 mb-4">
        <motion.a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={linkVariants}
          className="hover:scale-110" // Add the hover effect here
        >
          <img className="w-5" src={Github} alt="GitHub" />
        </motion.a>

        <motion.a
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={linkVariants}
          className="hover:scale-110" // Add the hover effect here
        >
          <img className="w-5" src={Linkedin} alt="LinkedIn" />
        </motion.a>
      </section>
    </div>
  );
}

const inputStyles = {
  backgroundColor: "transparent",
  borderBottomWidth: "0.1em",
  padding: "0.5rem",
  borderColor: "#d6d6d6",
  borderRadius: 0,
  outline: "none",
  transition: "border-color 0.3s ease",
};

export default ProjectCard;
