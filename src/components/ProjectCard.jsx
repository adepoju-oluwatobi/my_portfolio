import React, { useState } from 'react';
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
    name: "Intro Section",
    description: "A challenge by frontend mentor",
    image: "/intro_section.png"
  },
  {
    name: "Intro Section",
    description: "A challenge by frontend mentor",
    image: "/intro_section.png"
  },
  {
    name: "Intro Section",
    description: "A challenge by frontend mentor",
    image: "/intro_section.png"
  },
  {
    name: "Intro Section",
    description: "A challenge by frontend mentor",
    image: "/intro_section.png"
  },
  // Add more project objects here if needed
];

function ProjectCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  const backgroundGradient = {
    background: `radial-gradient(circle at center top, #292929 0%, #101010 50%)`,
    height: "100vh",
  };

  return (
    <div style={{ ...backgroundGradient, overflow: 'hidden' }}>
      <Header />
      <div className="project-container mt-10 text-white flex justify-center">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className='w-[350px]'>
              <img src={project.image} alt={project.name} />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
