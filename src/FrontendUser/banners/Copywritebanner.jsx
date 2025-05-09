import React from 'react'

const Copywritebanner = () => {
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
          fontSize: '2rem',
          marginBottom: '10px',
        },
        subheading: {
          color: '#8576FF',
          fontSize: '20px',
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
      <h1 style={styles.heading}>Copywrite Policy</h1>
      <p style={styles.subheading}>Authors grant Research Hub publication rights while retaining ownership and reuse rights with attribution</p>
    </div>
    </>
  )
}

export default Copywritebanner
