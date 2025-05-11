import React from 'react'

const Forauthorbanner = () => {
    const styles = {
        container: {
          backgroundColor: '#F1EFEC',
          padding: '60px 20px',
          textAlign: 'center',
          minHeight: '100px',
          position: 'relative',
          fontFamily: 'Livvic, sans-serif',
        },
        heading: {
          color: '#8576FF',
          fontSize: '30px',
          marginBottom: '0px',
        },
        subheading: {
          color: '#8576FF',
          fontSize: '20px',
        },
      };
    
      // Responsive styles using a simple window width check (not ideal for full responsiveness but works for basics)
      if (window.innerWidth <= 768) {
        styles.heading.fontSize = '2rem';
        styles.subheading.fontSize = '20px';
      }
  return (
    <>
       <div style={styles.container}>
      <h1 style={styles.heading}>For Authors</h1>
      <p style={styles.subheading}>Explore Journals across Disciplines</p>
    </div>
    </>
  )
}

export default Forauthorbanner
