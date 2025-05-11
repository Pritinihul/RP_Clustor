import React from 'react'
import Forauthorbanner from '../FrontendUser/banners/Forauthorbanner';

const Submitform = () => {
  const styles = {
  container: {
    maxWidth: '500px',
    margin: '15px auto',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f2f2f2',
    fontFamily: 'Livvic, sans-serif',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '30px',
    color: '#8576FF',
    padding: '10px 0',
    borderRadius: '5px',
    fontWeight: 'bold',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    fontWeight: '600',
    color: '#333',
  },
  input: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
    
  },
  textarea: {
    padding: '8px',
    height: '80px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  reviewer:{
    height: '50px',
  },
  fileInput: {
    padding: '8px',
    backgroundColor: '#ddd',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  submitButton: {
    marginTop: '15px',
    backgroundColor: '#6a5acd',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '50%',
    display: 'block',
    margin: '0 auto',
  },
};
  return (
   <>
   <Forauthorbanner/>
     <div style={styles.container}>
      <div style={styles.heading}>Submit Paper</div>
      <form>
        <div style={styles.formGroup}>
          <label style={styles.label}>Title</label>
          <input type="text" style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Description</label>
          <textarea style={styles.textarea}></textarea>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Keyword</label>
          <input type="text" style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Research Paper</label>
          <input type="text" style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Upload File</label>
          <input type="file" style={styles.fileInput} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Message to Reviewer</label>
          <input type="text" style={styles.reviewer} />
        </div>
        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>
   </>
  )
}

export default Submitform
