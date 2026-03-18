import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "FinTech Dashboard",
      desc: "A sleek, dark-themed dashboard for managing digital assets with real-time updates.",
      tags: ["React", "Vite", "Framer Motion"],
      image: "/project_thumbnail_1.png"
    },
    {
      title: "E-Commerce Experience",
      desc: "Premium shopping platform with dynamic transitions and luxury aesthetic.",
      tags: ["Next.js", "Tailwind", "GSAP"],
      image: "/project_thumbnail_2.png"
    },
    {
      title: "AI Creative Tool",
      desc: "Interface for controlling AI generation models with intuitive sliders and presets.",
      tags: ["Python", "React", "Three.js"],
      image: "/project_thumbnail_3.png"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">A collection of my recent state-of-the-art work.</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="project-card glass"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default Projects;
