import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Chatbot />
      <footer style={{ padding: '2rem', textAlign: 'center', opacity: 0.5 }}>
        &copy; {new Date().getFullYear()} - Professional Portfolio. Created with Passion.
      </footer>
    </div>
  );
}

export default App;
