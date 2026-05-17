/* src/components/SearchBar.tsx */
import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ searchTerm, onSearchChange }) => {
  return (
    <div style={{ 
      width: '90%',
      maxWidth: '800px', 
      margin: '-40px auto 4rem', 
      position: 'relative', 
      zIndex: 10
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: '1rem 2rem',
          borderRadius: 'var(--border-radius-lg)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          border: '1px solid rgba(140, 21, 21, 0.1)',
        }}
      >
        <Search size={24} style={{ color: 'var(--Bibliolinks-cardinal)', marginRight: '1.5rem' }} />
        <input
          type="text"
          placeholder="Rechercher une bibliothèque, un domaine ou un sujet..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          style={{
            flex: 1,
            border: 'none',
            fontSize: '1.2rem',
            outline: 'none',
            fontFamily: 'inherit',
            color: 'var(--Bibliolinks-black)',
          }}
        />
      </motion.div>
    </div>
  );
};

export default SearchBar;
