import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";

function ContactMe() {
    const backgroundGradient = {
      background: `radial-gradient(circle at center top, #292929 0%, #101010 50%)`,
      height: "auto",
    };
  
    const fontFamily = {
      fontFamily: "Skranji, cursive",
    };
  
    // Animation variants
    const containerVariants = {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -50 },
    };
  
    const textVariants = {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
    };
  
    return (
      <motion.div
        style={backgroundGradient}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={containerVariants}
      >
        <Header />
        <motion.main
          className="text-white py-4 px-8 text-center pt-[30%] md:pt-[8%] flex flex-col md:flex-row md:h-[90vh] md:justify-center md:items-center w-[90%]  m-auto gap-20"
          variants={containerVariants}
        >
          <section className="md:w-[50%]">
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={textVariants}
            >
              <p style={fontFamily} className="font-bold text-3xl text-[#d6d6d6]">
                CONTACT
              </p>
              <p className="text-[#a1a1a1] m-auto font-thin mt-8 leading-8 md:w-[40ch]">
                Whether you are interested in networking, or career advice, or
                want to have a casual conversation. I look forward to
                communicating with you and learning from our interactions!
              </p>
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={textVariants}
              className="mt-10"
            >
              <p style={fontFamily} className="font-bold text-2xl">
                Address
              </p>
              <p className="font-thin mt-2">Lagos, Nigeria</p>
            </motion.div>
  
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={textVariants}
              className="mt-10"
            >
              <p style={fontFamily} className="font-bold text-2xl">
                Email
              </p>
              <p className="font-thin mt-2">kunletobi4@gmail.com</p>
            </motion.div>
          </section>
  
          <section className="md:w-[500px] md:bg-[#202020] bg-opacity-10 md:p-[50px] rounded-lg">
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={textVariants}
            >
              <p style={fontFamily} className="font-bold text-2xl md:text-3xl text-[#d6d6d6]">
                CONTACT FORM
              </p>
              <ContactForm />
            </motion.div>
          </section>
        </motion.main>
      </motion.div>
    );
  }
  
export default ContactMe;