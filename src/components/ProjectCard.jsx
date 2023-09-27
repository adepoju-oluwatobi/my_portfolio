import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "./Header";
import Github from "../assets/github.png";
import Linkedin from "../assets/linkedin-logo.png";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const linkedinLink = "https://www.linkedin.com/in/oluwatobi-adepoju-4a242898/";
const githubLink = "https://github.com/adepoju-oluwatobi";

const projects = [
  {
    name: "Movie Box",
    tag: "Entertainment",
    description: `A web App to search for movies. It displays the year it was made,
    the genre, the maker of the movie and the ability to see a thriler about the movie`,
    image: "/movie_app.png",
    vite: "/vite.svg",
    react: "/react.svg",
    tailwind: "/tailwind.png",
    link: "https://zuri-stage-two.vercel.app/",
    libraries: [
      "axios",
      "react-router",
      "react-slick",
      "slick-carousel",
      "react-youtube",
    ],
  },
  {
    name: "Fashion Store",
    tag: "Ecommerce",
    description: `An Ecommerce website developed to sharpen my 
      skill on API fetching and ecommerce development. It displays 
      some fashion items`,
    image: "/shoe_store.png",
    link: "https://shoe-store-livid.vercel.app/",
    vite: "/vite.svg",
    react: "/react.svg",
    tailwind: "/tailwind.png",
  },
  {
    name: "Intro Section",
    description: `A challenge by frontend mentor. It was created using Vite + React
    and tailwind css. This project test my skills on positioning and responsivity.`,
    image: "/intro_section.png",
    link: "https://intro-section-with-dropdown-navigation-ruby.vercel.app/",
    vite: "/vite.svg",
    react: "/react.svg",
    tailwind: "/tailwind.png",
  },
  {
    name: "Honeyland Coperative Website",
    description:
      "This is a portal for Honeyland cooperative society that is integated with mongodb, node js and express. The backend was handled by a backend developer",
    image: "/honeyland.png",
    link: "https://honeyland-cooperative-portal.vercel.app/",
    vite: "/vite.svg",
    react: "/react.svg",
    tailwind: "/tailwind.png",
  },
  {
    name: "Patricia Clone",
    description: `A Clone of the original patricia website. This project was 
    made with react and tailwind css. It test my skill on positioning and mordern design`,
    image: "/patricia.png",
    link: "https://patricia-clone.vercel.app/",
    vite: "/vite.svg",
    react: "/react.svg",
    tailwind: "/tailwind.png",
  },
  {
    name: "Rating Component",
    description:
      `A challenge by frontend mentor to build  component for rating. I used 
      useState to achive the solution. Users can select a ratings for a product.`,
    image: "/ratings.png",
    link: "https://06-interactive-rating-component.vercel.app/",
    vite: "/vite.svg",
    react: "/react.svg",
    tailwind: "/tailwind.png",
  },
  {
    name: "Card Component",
    description:
      "A challenge by frontend mentor to polish my skill on css flexbox",
    image: "/four-card.png",
    link: "https://four-card-feature-section-beta-pink.vercel.app/",
    vite: "/vite.svg",
    react: "/react.svg",
    tailwind: "/tailwind.png",
  },
  {
    name: "My Portfolio Website",
    description:
      "One of the portfolio website I developed during the course of learning javascript",
    image: "/portfolio.png",
    link: "https://my-portfolio-vite-coral.vercel.app/",
    vite: "/vite.svg",
    react: "/react.svg",
    tailwind: "/tailwind.png",
  },
];
function ProjectCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: 0 }); // Animate the first card
  }, [controls]);
  


  const backgroundGradient = {
    background: `radial-gradient(circle at center top, #292929 0%, #101010 50%)`,
    height: "auto",
  };
  const fontFamily = {
    fontFamily: "Skranji, cursive",
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
        duration: 0.1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div style={{ ...backgroundGradient, overflow: "hidden" }}>
      <Header />
      <motion.div
  className="text-white mt-[25%] md:mt-[5%] grid grid-cols-1 md:grid-cols-4 py-2"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }, // Adjust the stagger delay as needed
  }}
  controls={controls}
>
        {projects.map((project, index) => (
         <a href={project.link} target="_blank" key={index}>
         <motion.div
           className="py-4 mb-4"
           variants={{
             hidden: { x: -1000 }, // Move the card to the left of the screen
             visible: { x: 0 }, // Bring the card back to its original position
           }}
           whileHover={{ scale: 1.1 }} // Enlarge the card by 10% on hover
         >
            <div className="w-[300px] md:w-[400px] md:h-[600px] m-auto bg-[#181818] shadow-2xl rounded-[30px]">
              <img src={project.image} alt="" />
              <div className="px-8 py-6">
                <p style={fontFamily} className="text-xl">
                  {project.name}
                </p>
                <p className="text-xs md:text-sm text-[#989898]">{project.description}</p>
                <div className="flex items-center mt-4 gap-2">
                  <img className="w-6" src={project.vite} alt="" />
                  <img className="w-6" src={project.react} alt="" />
                  <img
                    className="w-6 rounded-full"
                    src={project.tailwind}
                    alt=""
                  />
                 <a href={project.link} target="_blank">
                 <button className="text-white text-xs px-6 py-2 rounded bg-[#303030] shadow-2xl font-bold md:w-fit">
                    View site
                  </button>
                 </a>
                </div>
                {/* <div>
            <p>{project.libraries}</p>
           </div> */}
              </div>
            </div>
          </motion.div>
         </a>
        ))}
     {/**end */} </motion.div>

      <section className="flex md:flex-col gap-5 mt-[5%] md:gap-8 md:mt-[-1%] ml-10 mb-4">
        <motion.a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={linkVariants}
          className="hover:scale-110"
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
          className="hover:scale-110"
        >
          <img className="w-5" src={Linkedin} alt="LinkedIn" />
        </motion.a>
      </section>
    </div>
  );
}
export default ProjectCard;
