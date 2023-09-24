import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from './Header';

const projects = [
  {
    name: 'Movie Box',
    description: 'An internship project from HNG. API fetched from TMDB.',
    image: '/movie_app.png',
  },
  {
    name: 'Fashion Store',
    description:
      `An Ecommerce website developed to sharpen my 
      skill on API fetching and ecommerce development.`,
    image: '/shoe_store.png',
  },
  {
    name: "Intro Section",
    description: "A challenge by frontend mentor",
    image: "/intro_section.png"
  },
  {
    name: 'Movie Box',
    description: 'An internship project from HNG. API fetched from TMDB.',
    image: '/movie_app.png',
  },
  {
    name: 'Fashion Store',
    description:
      `An Ecommerce website developed to sharpen my 
      skill on API fetching and ecommerce development.`,
    image: '/shoe_store.png',
  },
  {
    name: "Intro Section",
    description: "A challenge by frontend mentor",
    image: "/intro_section.png"
  },
  // Add more project objects here if needed
];

function ScrollDots({ activeIndex, onClickDot }) {
  return (
    <div className="scroll-dots">
      {projects.map((_, index) => (
        <span
          key={index}
          className={`scroll-dot ${activeIndex === index ? 'active' : ''}`}
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

  const projectContainer = {
    width: '100%', // Adjust the width as needed
    display: 'flex',
    overflowX: 'auto', // Enable horizontal scrolling
    scrollbarWidth: 'none', // Firefox
    WebkitOverflowScrolling: 'touch', // iOS
  };

  const projectCard = {
    flex: '0 0 auto', // Allow project cards to have their own width
    margin: '0 10px', // Add margin between project cards
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
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    margin: '0 5px',
    cursor: 'pointer',
    backgroundColor: 'gray', // Default dot color
    transition: 'background-color 0.3s ease',
  };

  const activeDotStyle = {
    backgroundColor: 'blue', // Active dot color
  };

  return (
    <div style={{ ...backgroundGradient, overflow: 'hidden' }}>
      {/* Apply the scrollbarStyle CSS */}
      <style>{scrollbarStyle}</style>
      <Header />
      <div className="project-container mt-10 text-white" style={projectContainer}>
        {projects.map((project, index) => (
          <div key={index} className="project-card" style={projectCard}>
            <div className='w-[350px]'>
              <img src={project.image} alt={project.name} />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <ScrollDots activeIndex={activeIndex} onClickDot={handleDotClick} />
    </div>
  );
}

export default ProjectCard;
