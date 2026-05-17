/* src/pages/About.tsx */
import React from 'react';
import { motion } from 'framer-motion';
import { Book, Globe, Shield, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div style={{ paddingTop: '90px' }}>
      {/* Header Section */}
      <section style={{ backgroundColor: 'var(--Bibliolinks-cardinal)', color: 'white', padding: '100px 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '1.5rem', opacity: 0.8 }}>
              Notre Mission
            </h2>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', maxWidth: '900px', lineHeight: 1.1 }}>
              Démocratiser l'accès au savoir universel pour chaque esprit curieux.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission Description */}
      <section style={{ padding: '100px 0', backgroundColor: 'var(--Bibliolinks-beige)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <img 
              src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1000&auto=format&fit=crop" 
              alt="Bibliothèque"
              style={{ 
                width: '100%', 
                aspectRatio: '16/9', 
                objectFit: 'cover',
                borderRadius: 'var(--border-radius-md)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }} 
            />
            <div style={{ 
              position: 'absolute', 
              bottom: '-1rem', 
              right: '-1rem', 
              backgroundColor: 'var(--Bibliolinks-cardinal)', 
              color: 'white', 
              padding: '1.5rem',
              borderRadius: 'var(--border-radius-sm)'
            }}>
              <span style={{ fontSize: '2rem', fontWeight: 800 }}>25+</span><br />
              <span style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.7rem' }}>Partenaires Archivistes</span>
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--Bibliolinks-black)' }}>L'Origine du Projet</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--Bibliolinks-grey-cool)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Le <strong>Bibliolinks Academic Hub</strong> est né d'une vision simple mais puissante : le savoir ne devrait pas être une ressource réservée à une élite, mais un bien commun accessible à tous, sans barrière géographique ou financière.
            </p>
            <p style={{ fontSize: '1.2rem', color: 'var(--Bibliolinks-grey-cool)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Notre mission est de <strong>centraliser les meilleures bibliothèques numériques gratuites</strong> du monde entier. En regroupant ces archives fragmentées sur une plateforme unique, nous offrons aux chercheurs et aux étudiants une porte d'entrée structurée et rapide vers des millions de manuscrits, d'articles scientifiques et d'œuvres littéraires.
            </p>
            <p style={{ fontSize: '1.2rem', color: 'var(--Bibliolinks-grey-cool)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Inspirés par l'excellence et l'ouverture d'esprit des plus grandes institutions académiques, nous agissons comme un canal d'accès privilégié, une passerelle moderne vers la connaissance mondiale.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--Bibliolinks-black)' }}>Nos Piliers Fondamentaux</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
            {[
              { icon: <Globe size={32} />, title: "Universalité", desc: "Un accès sans frontières aux manuscrits, thèses et œuvres littéraires mondiales." },
              { icon: <Shield size={32} />, title: "Intégrité", desc: "Une sélection rigoureuse de sources vérifiées et académiquement reconnues." },
              { icon: <Users size={32} />, title: "Accessibilité", desc: "Une interface intuitive et performante adaptée à tous les dispositifs numériques." },
              { icon: <Book size={32} />, title: "Éducation", desc: "Soutenir la recherche et l'apprentissage continu à tous les niveaux de la société." }
            ].map((pillar, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ color: 'var(--Bibliolinks-cardinal)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                  {pillar.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{pillar.title}</h3>
                <p style={{ color: 'var(--Bibliolinks-grey-cool)' }}>{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--Bibliolinks-black)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Une question ou une proposition ?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--Bibliolinks-sandstone)' }}>Nous sommes à votre écoute pour toute collaboration ou information.</p>
          <a 
            href="mailto:jordanpandji@gmail.com"
            style={{ 
              display: 'inline-block',
              padding: '1rem 3rem',
              backgroundColor: 'var(--Bibliolinks-cardinal)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: 'var(--border-radius-md)',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'var(--transition-fast)'
            }}
          >
            Nous contacter
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
