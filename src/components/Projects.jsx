import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Authentication Page",
      desc: "A secure and elegant login/signup interface with modern validation and smooth state transitions.",
      tags: ["React", "CSS Modules", "Framer Motion"],
      image: "/auth_page.png",
      link: "https://login-signup-page-blue.vercel.app/"
    },
    {
      title: "Weather app",
      desc: "Dynamic weather forecasting application providing real-time data with a beautiful, responsive UI.",
      tags: ["JavaScript", "OpenWeather API", "Vanilla CSS"],
      image: "/weather_app.png",
      link: "https://weather-application-9idh.vercel.app/"
    },
    {
      title: "Diet Bot",
      desc: "An intelligent nutrition assistant that helps users track their diet and provides healthy recommendations.",
      tags: ["React", "AI Integration", "Tailwind"],
      image: "/diet_bot.png",
      link: "https://diet-plan-bot-f9x7.vercel.app/"
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
                <div className="project-tags" style={{ marginBottom: '1.5rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-btn"
                  style={{ display: 'inline-block', width: '100%', textAlign: 'center', textDecoration: 'none' }}
                >
                  Visit Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default Projects;
