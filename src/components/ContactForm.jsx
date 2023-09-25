import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import SendMsg from "../assets/send.svg";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., sending data to a server
    console.log(formData); // You can replace this with your submission logic
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }} // Initial animation values
      animate={{ opacity: 1, y: 0 }} // Animation when the form appears
      transition={{ duration: 0.5 }} // Animation duration
      onSubmit={handleSubmit}
      className="bg-opacity-0 flex flex-col gap-4 py-4"
    >
      <motion.input
        type="text"
        name="name"
        style={inputStyles}
        placeholder="Your name"
        value={formData.name}
        onChange={handleInputChange}
        className="border-b md:m-auto md:w-[80%]"
        initial={{ borderBottomColor: "#d6d6d6" }} // Initial styles
        whileFocus={{ borderBottomColor: "#007bff" }} // Styles on focus
        required
      />
      <motion.input
        type="email"
        name="email"
        style={inputStyles}
        placeholder="Your email"
        value={formData.email}
        onChange={handleInputChange}
        className="border-b md:m-auto md:w-[80%]"
        initial={{ borderBottomColor: "#d6d6d6" }}
        whileFocus={{ borderBottomColor: "#007bff" }}
        required
      />
      <motion.input
        type="text"
        name="message"
        style={inputStyles}
        placeholder="Message"
        value={formData.message}
        onChange={handleInputChange}
        className="border-b md:m-auto md:w-[80%]"
        initial={{ borderBottomColor: "#d6d6d6" }}
        whileFocus={{ borderBottomColor: "#007bff" }}
        required
      />
      <motion.button
        type="submit"
        className="px-6 py-4 rounded bg-[#303030] font-bold flex items-center justify-center gap-2 shadow-lg md:w-fit m-auto"
        initial={{ opacity: 0 }} // Initial button opacity
        animate={{ opacity: 1 }} // Button fade in animation
        transition={{ duration: 0.5, delay: 0.2 }} // Delay the button animation
      >
        <p>SEND MESSAGE</p>
        <img src={SendMsg} alt="" />
      </motion.button>
    </motion.form>
  );
}

const inputStyles = {
  backgroundColor: "transparent",
  borderBottomWidth: "0.1em",
  padding: "0.5rem",
  marginBottom: "30px",
  borderColor: "#d6d6d6",
  borderRadius: 0,
  outline: "none",
  transition: "border-color 0.3s ease",
};

export default ContactForm;
