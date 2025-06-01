
import React from 'react'

const Registerbanner = () => {
     const styles = {
    container: {
     backgroundColor: '#F1EFEC',
      padding: '35px 0px',
      textAlign: 'center',
      position: 'relative',
      fontFamily: 'Livvic, sans-serif',
    },
    heading: {
      color: '#8576FF',
      fontSize: '2.5rem',
      marginBottom: '10px',
    },
  };

  if (window.innerWidth <= 768) {
    styles.heading.fontSize = '2rem';
    styles.subheading.fontSize = '1rem';
  }
  return (
    <>
    <div style={styles.container}>
      <h1 style={styles.heading}>Sign Up </h1>
    </div>
    </>
  )
}

export default Registerbanner
