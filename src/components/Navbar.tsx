/* src/components/Navbar.tsx */
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid #EAEAEA' : 'none',
        transition: 'var(--transition-smooth)',
        height: isScrolled ? '70px' : '90px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Link to="/" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px'
        }}>
          <img src={logo} alt="Bibliolinks Logo" style={{ height: '90px', width: 'auto' }} />
        </Link>

        <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem' }}>
          <Link 
            to="/about" 
            style={{ 
              fontSize: '0.9rem', 
              fontWeight: 600,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              color: isScrolled ? 'var(--Bibliolinks-black)' : 'var(--Bibliolinks-white)',
              padding: '5px 0',
              position: 'relative'
            }}
            className="nav-link"
          >
            À propos
          </Link>
        </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <button 
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ 
              display: 'none', 
              color: isScrolled ? 'var(--Bibliolinks-black)' : 'var(--Bibliolinks-white)',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          backgroundColor: 'white',
          padding: '2rem',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          textAlign: 'center'
        }}>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--Bibliolinks-black)', textDecoration: 'none', fontWeight: 600 }}>À propos</Link>
          <a href="mailto:jordanpandji@gmail.com" style={{ color: 'var(--Bibliolinks-cardinal)', textDecoration: 'none', fontWeight: 600 }}>Nous contacter</a>
        </div>
      )}

      <style>{`
        .navbar.scrolled .nav-link:hover { color: var(--Bibliolinks-cardinal) !important; }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--Bibliolinks-cardinal);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }
        
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
          .navbar { height: 60px !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
