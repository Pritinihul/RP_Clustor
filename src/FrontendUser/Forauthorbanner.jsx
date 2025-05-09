import React from 'react'

const Forauthorbanner = () => {
    const styles = {
        container: {
          backgroundColor: '#ffff',
          padding: '60px 20px',
          textAlign: 'center',
          minHeight: '200px',
          position: 'relative',
          fontFamily: 'Arial, sans-serif',
        },
        heading: {
          color: '#8576FF',
          fontSize: '2.5rem',
          marginBottom: '10px',
        },
        subheading: {
          color: '#8576FF',
          fontSize: '30px',
        },
        footerText: {
          position: 'absolute',
          bottom: '10px',
          width: '100%',
          fontSize: '0.85rem',
          color: '#000',
        },
      };
    
      // Responsive styles using a simple window width check (not ideal for full responsiveness but works for basics)
      if (window.innerWidth <= 768) {
        styles.heading.fontSize = '2rem';
        styles.subheading.fontSize = '1rem';
      }
  return (
    <>
       <div style={styles.container}>
      <h1 style={styles.heading}>For Authors</h1>
      <p style={styles.subheading}>Explore Journals across Disciplines</p>
      <div style={styles.footerText}>Copyright Form</div>
    </div>
    </>
  )
}

export default Forauthorbanner
