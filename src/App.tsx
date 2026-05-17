/* src/App.tsx */
import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LibraryCard from './components/LibraryCard';
import SearchBar from './components/SearchBar';
import About from './pages/About';
import { libraries } from './data/libraries';
import { motion, AnimatePresence } from 'framer-motion';
import './styles/global.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLibraries = useMemo(() => {
    return libraries.filter(lib => 
      lib.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lib.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lib.category.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  return (
    <main>
      <Hero />
      
      <section style={{ padding: '0 0 100px 0', backgroundColor: 'var(--bg-secondary)', minHeight: '600px' }}>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        
        <div className="container">
          <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--Bibliolinks-cardinal)', marginBottom: '1rem' }}>
              {searchTerm ? 'Résultats de recherche' : 'Ressources Mondiales'}
            </h2>
            <h1 style={{ fontSize: '3rem', color: 'var(--Bibliolinks-black)' }}>
              {searchTerm ? `${filteredLibraries.length} bibliothèques trouvées` : 'Bibliothèques Numériques Ouvertes'}
            </h1>
          </div>

          <motion.div 
            layout
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
              gap: '2rem' 
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredLibraries.map(lib => (
                <motion.div
                  key={lib.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <LibraryCard library={lib} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              marginTop: '6rem', 
              padding: '4rem', 
              backgroundColor: 'var(--Bibliolinks-white)', 
              borderRadius: 'var(--border-radius-md)',
              border: '1px solid rgba(140, 21, 21, 0.1)',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}
          >
            <h2 style={{ fontSize: '2rem', color: 'var(--Bibliolinks-black)', marginBottom: '1.5rem' }}>
              Contribuez à l'Expansion du Savoir
            </h2>
            <p style={{ maxWidth: '700px', margin: '0 auto 2rem', color: 'var(--Bibliolinks-grey-cool)', fontSize: '1.1rem' }}>
              Vous connaissez une bibliothèque numérique gratuite de haute qualité qui ne figure pas encore sur notre portail ? Aidez-nous à enrichir ce hub académique au profit de la communauté mondiale.
            </p>
            <a 
              href="mailto:jordanpandji@gmail.com" 
              style={{ 
                display: 'inline-block',
                backgroundColor: 'var(--Bibliolinks-cardinal)', 
                color: 'white', 
                padding: '1rem 2.5rem', 
                borderRadius: 'var(--border-radius-sm)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              Nous Contacter
            </a>
          </motion.div>

          {filteredLibraries.length === 0 && (
            <div style={{ textAlign: 'center', padding: '100px 0' }}>
              <h2 style={{ color: 'var(--Bibliolinks-grey-cool)' }}>Aucune bibliothèque ne correspond à votre recherche.</h2>
              <button 
                onClick={() => setSearchTerm('')}
                style={{ color: 'var(--Bibliolinks-cardinal)', marginTop: '1rem', fontWeight: 700, textDecoration: 'underline' }}
              >
                Réinitialiser la recherche
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ padding: '2rem 0', textAlign: 'center', display: 'none' }} className="mobile-only-back-to-top">
      <button 
        onClick={scrollToTop}
        style={{
          backgroundColor: 'var(--Bibliolinks-cardinal)',
          color: 'white',
          padding: '0.8rem 1.5rem',
          borderRadius: 'var(--border-radius-sm)',
          fontWeight: 700,
          textTransform: 'uppercase',
          fontSize: '0.8rem',
          letterSpacing: '1px'
        }}
      >
        Retour en haut
      </button>
      <style>{`
        @media (max-width: 768px) {
          .mobile-only-back-to-top { display: block !important; }
        }
      `}</style>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <BackToTopButton />
      <footer 
        className="main-footer"
        style={{ backgroundColor: 'var(--Bibliolinks-cardinal)', color: 'white' }}
      >
        <div className="container">
          <div className="footer-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexWrap: 'wrap', gap: '3rem' }}>
            <div style={{ flex: '1 1 300px' }}>
              <h2 style={{ color: 'white', marginBottom: '1.5rem', borderBottom: '2px solid rgba(255,255,255,0.3)', display: 'inline-block', paddingBottom: '0.5rem' }}>Bibliolinks Academic Hub</h2>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>
                Démocratiser l'accès au savoir académique à travers le monde. Inspiré par l'excellence et l'ouverture.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div>
                <h4 style={{ marginBottom: '1.5rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800 }}>Navigation</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>
                  <li><a href="/" style={{ borderBottom: '1px solid transparent' }}>Accueil</a></li>
                  <li><a href="/about" style={{ borderBottom: '1px solid transparent' }}>À propos</a></li>
                </ul>
              </div>
              <div>
                <h4 style={{ marginBottom: '1.5rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800 }}>Contact</h4>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>
                  <a href="mailto:jordanpandji@gmail.com" style={{ color: 'white', textDecoration: 'underline' }}>
                    jordanpandji@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', textAlign: 'center' }}>
            © 2026 Bibliolinks Academic Hub. Toutes les marques appartiennent à leurs propriétaires respectifs.
          </div>
        </div>
        <style>{`
          .main-footer { padding: 80px 0; }
          .footer-content { flex-direction: column; }
          @media (min-width: 768px) {
            .footer-content { flex-direction: row; }
          }
          @media (max-width: 768px) {
            .main-footer { padding: 20px 0; }
          }
        `}</style>
      </footer>
    </Router>
  );
};

export default App;
