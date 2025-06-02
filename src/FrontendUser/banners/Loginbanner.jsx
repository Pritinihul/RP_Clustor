import React from 'react'

const Loginbanner = () => {
     const styles = {
    container: {
      backgroundColor: '#F1EFEC',
       padding: '40px 0px',
      textAlign: 'center',
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
    <>
    <div style={styles.container}>
      <h1 style={styles.heading}>Login </h1>
    </div>
    </>
  )
}

export default Loginbanner
