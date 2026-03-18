import { motion } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Layers, 
  Palette, 
  Database, 
  Zap 
} from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: "React", level: 95, icon: "react" },
    { name: "Node.js", level: 88, icon: "nodejs" },
    { name: "TypeScript", level: 85, icon: "ts" },
    { name: "UI/UX Design", level: 90, icon: "figma" },
    { name: "PostgreSQL", level: 80, icon: "postgres" },
    { name: "Vite", level: 92, icon: "vite" }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
            <p className="skills-desc">
              I leverage a diverse toolkit of modern technologies to build fast, scalable, and beautiful applications.
            </p>
            <div className="skill-icons-grid">
               {skills.map((skill, i) => (
                 <div key={i} className="skill-icon glass" title={skill.name}>
                   <div className="icon-inner">
                     <img 
                       src={`https://skillicons.dev/icons?i=${skill.icon}`} 
                       alt={skill.name} 
                       style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                     />
                   </div>
                 </div>
               ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="skills-bars"
          >
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-bar-wrapper">
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="progress-bg">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="progress-fill"
                    style={{ background: index % 2 === 0 ? 'var(--primary)' : 'var(--secondary)' }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default Skills;
