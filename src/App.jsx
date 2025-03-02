import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="bg-black text-white font-sans">
      {/* Navbar */}
      <motion.nav 
        className="p-4 flex justify-between items-center container mx-auto fixed top-0 left-0 right-0 bg-black bg-opacity-90 z-50"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl font-bold text-[#ff8c32] cursor-pointer">My Portfolio</h1>
        <div className="space-x-6">
          <Link to="about" smooth className="cursor-pointer hover:text-[#ff8c32]">About</Link>
          <Link to="projects" smooth className="cursor-pointer hover:text-[#ff8c32]">Projects</Link>
          <Link to="skills" smooth className="cursor-pointer hover:text-[#ff8c32]">Skills</Link>
          <Link to="awards" smooth className="cursor-pointer hover:text-[#ff8c32]">Awards & Leadership</Link>
          <Link to="contact" smooth className="cursor-pointer hover:text-[#ff8c32]">Contact</Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        className="h-screen flex flex-col justify-center items-center text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold">Hey, I'm <span className="text-[#ff8c32]">[Your Name]</span></h2>
        <p className="text-lg mt-4 text-gray-300">Web Developer | AI Enthusiast</p>
        <motion.div 
          className="mt-6 flex space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a href="#contact" className="px-6 py-2 bg-[#ff8c32] text-black font-bold rounded-lg hover:bg-[#e07b2d] transition">Contact Me</a>
          <a href="#projects" className="px-6 py-2 border-2 border-[#ff8c32] text-[#ff8c32] font-bold rounded-lg hover:bg-[#ff8c32] hover:text-black transition">View Projects</a>
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <section id="projects" className="p-10 container mx-auto">
        <h3 className="text-3xl font-bold text-[#ff8c32]">Projects</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["RideEase", "LangEcho", "Smart Inventory System"].map((project, index) => (
            <motion.div 
              key={index} 
              className="p-4 bg-gray-800 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-bold">{project}</h4>
              <p className="text-gray-300">Brief description of {project}...</p>
              <a href="#" className="text-[#ff8c32] mt-2 inline-block hover:underline">Learn More</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="p-10 container mx-auto">
        <h3 className="text-3xl font-bold text-[#ff8c32]">Skills</h3>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
          {["React.js", "JavaScript", "Tailwind CSS", "Python", "SQL", "Django", "Redux Toolkit"].map((skill, index) => (
            <motion.div 
              key={index} 
              className="p-3 bg-gray-800 text-center rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10 container mx-auto text-center">
        <h3 className="text-3xl font-bold text-[#ff8c32]">Get in Touch</h3>
        <p className="text-gray-300 mt-2">Feel free to connect with me on GitHub & LinkedIn</p>
        <div className="flex justify-center gap-6 mt-4">
          <motion.a 
            href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-300 hover:text-[#ff8c32]"
          >
            <FaGithub size={30} />
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-300 hover:text-[#ff8c32]"
          >
            <FaLinkedin size={30} />
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default App;
