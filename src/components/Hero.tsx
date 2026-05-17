/* src/components/Hero.tsx */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1497633762265-9d176840742d?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2000&auto=format&fit=crop'
];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      style={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--Bibliolinks-black)'
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url("${images[index]}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.8,
            zIndex: 1
          }}
        />
      </AnimatePresence>

      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(46, 45, 41, 0.4) 0%, rgba(46, 45, 41, 0.8) 100%)',
          zIndex: 2
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 3, textAlign: 'center', color: 'white' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 style={{ 
            fontSize: '1.2rem', 
            textTransform: 'uppercase', 
            letterSpacing: '4px', 
            marginBottom: '1.5rem',
            color: 'var(--Bibliolinks-sandstone)',
            fontWeight: 600
          }}>
            Le Portail du Savoir Universel
          </h2>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 10vw, 5rem)', 
            maxWidth: '1000px', 
            margin: '0 auto 2rem',
            lineHeight: 1
          }}>
            Accédez gratuitement au <span style={{ color: 'var(--Bibliolinks-white)' }}>savoir mondial</span>.
          </h1>
          <p style={{ 
            fontSize: '1.4rem', 
            maxWidth: '700px', 
            margin: '0 auto 3rem',
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: 300
          }}>
            Une plateforme académique centralisant les bibliothèques numériques les plus prestigieuses pour une éducation sans frontières.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
