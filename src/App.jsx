import React from "react";
import Header from "./components/Header";
import Github from "./assets/github.png";
import Linkedin from './assets/linkedin-logo.png'
import Twitter from './assets/twitter.png'

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

  return (
    <div style={backgroundGradient}>
      <Header />
      <section className="text-white flex flex-col justify-center items-center gap-2 h-[70vh]">
        <p className="text-[#bebebe] ml-[-150px]">I AM</p>
        <h1 className="font-bold text-[44px]" style={fontFamily}>
          OLUWATOBI
        </h1>
        <p className="text-[#bebebe] ml-[50px]">A FRONTEND DEVELOPER</p>
      </section>

      <section className="flex flex-col gap-8 ml-6">
        <a href={githubLink} target="_blank">
        <img className="w-5" src={Github} alt="" />
        </a>

       <a href={linkedinLink} target="_blank">
       <img className="w-5" src={Linkedin} alt="" />
       </a>
      </section>
    </div>
  );
}

export default App;
