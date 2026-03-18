import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-content"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="greeting"
          >
            Hello, I am
          </motion.p>
          <h1 className="name">Taha <span className="gradient-text">Riaz</span></h1>
          <h2 className="title">Professional Full-Stack Developer</h2>
          <p className="description">
            Crafting state-of-the-art digital experiences with cutting-edge technology and a passion for minimalist, premium design.
          </p>

          <div className="hero-btns">
            <button className="glow-btn">View My Work</button>
            <button className="secondary-btn">Let's Talk</button>
          </div>
        </motion.div>
      </div>

      {/* Background Blobs for depth */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>


    </section>
  );
};

export default Hero;
