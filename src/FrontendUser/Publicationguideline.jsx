import React from 'react'
import Forauthorbanner from '../FrontendUser/banners/Forauthorbanner';


const Publicationguideline = () => {
  const styles = {
    container: {
      backgroundColor: '#ffff',
      padding: '40px 20px',
      textAlign: 'left',
      minHeight: '100vh',
     
      color: '#000',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      textAlign: 'center',
      color: '#8576FF',
      fontSize: '2rem',
      marginBottom: '30px',
    },
    list: {
      maxWidth: '800px',
      margin: '0 auto',
      fontSize: '1.1rem',
      lineHeight: '1.8',
    },
    '@media (maxWidth: 768px)': {
      heading: {
        fontSize: '1.6rem',
      },
      list: {
        fontSize: '1rem',
        padding: '0 10px',
      },
    },
  };
  return (
    <>
    
    <Forauthorbanner/>
     <div style={styles.container}>
      <h2 style={styles.heading}>Publication Guidelines</h2>
      <ol style={styles.list}>
        <li>Originality: Only submit original, unpublished work. No plagiarism.</li>
        <li>Formatting: Follow the provided template (font, margins, references, etc.).</li>
        <li>Authorship: List only those who contributed significantly.</li>
        <li>Abstract: Must clearly summarize objectives, methods, results, and conclusions.</li>
        <li>References: Cite all sources properly using the specified citation style.</li>
        <li>Ethics: Research must comply with ethical standards.</li>
        <li>Peer Review: Papers will be peer-reviewed; revisions may be required.</li>
        <li>Language: Use clear, professional English.</li>
        <li>Submission: Upload via the portal; complete all required fields.</li>
        <li>Copyright: Authors must agree to copyright transfer/license terms.</li>
      </ol>
    </div>
    
    </>
  )
}

export default Publicationguideline
