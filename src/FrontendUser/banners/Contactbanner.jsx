import React from 'react';

const Contactbanner = () => {
  const styles = {
    container: {
      backgroundColor: '#F1EFEC',
      padding: '60px 20px',
      textAlign: 'center',
      minHeight: '200px',
      position: 'relative',
      fontFamily: 'Livvic, sans-serif',
      
    },
    heading: {
      color: '#8576FF',
      fontSize: '2.5rem',
      marginBottom: '10px',
    },
    subheading: {
      fontSize: '1.5rem',
      color: '#8576FF',
    },
  };

  if (window.innerWidth <= 768) {
    styles.heading.fontSize = '2rem';
    styles.subheading.fontSize = '1rem';
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <p style={styles.subheading}>We'd love to hear from you!</p>
    </div>
  );
};

export default Contactbanner;
