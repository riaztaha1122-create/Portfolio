import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="about-image"
          >
            <div className="about-image-wrapper glass">
              <img src="/profile_pic.jpeg" alt="Riaz Taha" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
              <div className="hud-element" style={{ top: '10px', left: '10px', width: '30px', height: '30px', borderRight: 'none', borderBottom: 'none' }}></div>
              <div className="hud-element" style={{ top: '10px', right: '10px', width: '30px', height: '30px', borderLeft: 'none', borderBottom: 'none' }}></div>
              <div className="hud-element" style={{ bottom: '10px', left: '10px', width: '30px', height: '30px', borderRight: 'none', borderTop: 'none' }}></div>
              <div className="hud-element" style={{ bottom: '10px', right: '10px', width: '30px', height: '30px', borderLeft: 'none', borderTop: 'none' }}></div>
              <div className="hud-element" style={{ top: '20%', left: '5%', width: '10%', height: '1px', opacity: 0.5 }}></div>
              <div className="hud-element" style={{ bottom: '20%', right: '5%', width: '10%', height: '1px', opacity: 0.5 }}></div>
            </div>
            <div className="experience-badge border-glass">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
            <p className="about-desc">
              I am a passionate Full-Stack Developer based in the digital world. I specialize in building high-performance, visually stunning web applications that push the boundaries of modern design.
            </p>
            <p className="about-desc">
              With a strong foundation in both front-end and back-end technologies, I bridge the gap between complex functionality and seamless user experience. My goal is to create products that are not just usable, but delightful.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <h4 className="gradient-text">20+</h4>
                <p>Projects Done</p>
              </div>
              <div className="stat-item">
                <h4 className="gradient-text">15+</h4>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h4 className="gradient-text">10+</h4>
                <p>Awards Won</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default About;
