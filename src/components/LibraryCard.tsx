/* src/components/LibraryCard.tsx */
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';
import type { Library } from '../data/libraries';

interface Props {
  library: Library;
}

const LibraryCard: React.FC<Props> = ({ library }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      style={{
        backgroundColor: 'white',
        borderRadius: 'var(--border-radius-md)',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        border: '1px solid #EAEAEA',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'var(--transition-smooth)'
      }}
    >
      <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
        <img 
          src={library.image} 
          alt={library.name} 
          loading="lazy"
          fetchpriority="low"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{ 
          position: 'absolute', 
          top: '0.8rem', 
          right: '0.8rem', 
          backgroundColor: 'rgba(140, 21, 21, 0.9)', 
          color: 'white',
          padding: '0.3rem 0.6rem',
          fontSize: '0.75rem',
          fontWeight: 700,
          borderRadius: 'var(--border-radius-sm)',
          backdropFilter: 'blur(4px)'
        }}>
          {library.stats}
        </div>
      </div>

      <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          {library.category.map(cat => (
            <span key={cat} style={{ 
              fontSize: '0.7rem', 
              textTransform: 'uppercase', 
              letterSpacing: '1px', 
              color: 'var(--Bibliolinks-grey-cool)',
              fontWeight: 700,
              padding: '2px 8px',
              backgroundColor: '#F5F5F5',
              borderRadius: '4px'
            }}>
              {cat}
            </span>
          ))}
        </div>
        
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--Bibliolinks-black)' }}>
          {library.name}
        </h3>
        
        <p style={{ fontSize: '0.95rem', color: 'var(--Bibliolinks-grey-warm)', marginBottom: '2rem', flexGrow: 1 }}>
          {library.description}
        </p>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button 
            onClick={() => window.open(library.url, '_blank')}
            style={{
              backgroundColor: 'var(--Bibliolinks-cardinal)',
              color: 'white',
              padding: '0.8rem 1.2rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flex: 1,
              justifyContent: 'center'
            }}
          >
            Explorer <ExternalLink size={14} />
          </button>
          <button style={{
            border: '1px solid #EAEAEA',
            color: 'var(--Bibliolinks-black)',
            padding: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <BookOpen size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default LibraryCard;
