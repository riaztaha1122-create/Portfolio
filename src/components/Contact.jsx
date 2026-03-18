import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Note: This is a demo integration)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-card glass">
          <div className="contact-info">
            <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
            <p className="contact-desc">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities and state-of-the-art collaborations.
            </p>
            
            <ul className="contact-details">
              <li>
                <span className="detail-icon">@</span>
                <div>
                  <h4>Email</h4>
                  <p>riaztaha1122@gmail.com</p>
                </div>
              </li>
              <li>
                <span className="detail-icon">ln</span>
                <div>
                  <h4>LinkedIn</h4>
                  <p><a href="https://www.linkedin.com/in/taha-riaz-b173193b8/" target="_blank" rel="noopener noreferrer">taha-riaz-b173193b8</a></p>
                </div>
              </li>
            </ul>
            
            <div className="social-actions" style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
              <a href="https://www.linkedin.com/in/taha-riaz-b173193b8/" target="_blank" className="glow-btn" style={{ textDecoration: 'none' }}>View LinkedIn Profile</a>
              <a href="mailto:riaztaha1122@gmail.com" className="secondary-btn" style={{ textDecoration: 'none' }}>Send Direct Email</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="John Doe" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder="john@example.com" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea 
                rows="5" 
                name="message" 
                placeholder="Tell me about your project..." 
                required 
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="glow-btn" style={{ width: '100%' }}>Send Message</button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-card {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          padding: 4rem;
          gap: 4rem;
        }

        .contact-info .section-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .contact-desc {
          font-size: 1.1rem;
          color: var(--text-dim);
          margin-bottom: 3rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .contact-details li {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .detail-icon {
          width: 50px;
          height: 50px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          color: var(--primary);
        }

        .contact-details h4 {
          font-size: 0.9rem;
          opacity: 0.6;
          margin-bottom: 0.2rem;
        }

        .contact-details p {
          font-weight: 600;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.9rem;
          font-weight: 600;
          opacity: 0.8;
        }

        .form-group input, 
        .form-group textarea {
          padding: 1rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          color: white;
          font-family: inherit;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus, 
        .form-group textarea:focus {
          outline: none;
          border-color: var(--secondary);
        }

        @media (max-width: 968px) {
          .contact-card {
            grid-template-columns: 1fr;
            padding: 2rem;
          }
          .contact-info .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
