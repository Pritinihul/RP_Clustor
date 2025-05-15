import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Forauthorbanner from '../FrontendUser/banners/Forauthorbanner';

const Submitform = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [paperId, setPaperId] = useState(null);
  const [formData, setFormData] = useState({
    Paper_Title: '',
    Abstract: '',
    Keywords: '',
    Paper_Upload: null,
    Paper_Type: ''
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setPaperId(null); 

    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      navigate('/login');
      return;
    }
    let data = null;

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('Paper_Title', formData.Paper_Title);
      formDataToSend.append('Abstract', formData.Abstract);
      formDataToSend.append('Keywords', formData.Keywords);
      formDataToSend.append('Paper_Upload', formData.Paper_Upload);
      formDataToSend.append('Paper_Type', formData.Paper_Type);

      const response = await fetch('http://localhost:8000/api/submit-paper/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
        body: formDataToSend
      });

      data = await response.json(); // <-- Now sets outer-scoped variable

      if (response.status === 401) {
        localStorage.clear();
        navigate('/login');
        return;
      }

      if (response.ok) {
        setPaperId(data.Paper_Id); // Use it here safely
      } else {
        setError(data.error || 'Failed to submit paper');
      }
  
    } catch (error) {
      setError('Network error. Please try again.');
      console.error('Error submitting paper:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
      // const data = await response.json();

      
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
    errorText: {
      color: 'red',
      textAlign: 'center',
      marginBottom: '10px'
    },
    disabledButton: {
      backgroundColor: '#a99eee',
      cursor: 'not-allowed'
    }
  };

  return (
    <>
      <Forauthorbanner />
      <div style={styles.container}>
        <div style={styles.heading}>Submit Paper</div>
        {error && <div style={styles.errorText}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Paper Title</label>
            <input
              type="text"
              name="Paper_Title"
              value={formData.Paper_Title}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Abstract</label>
            <textarea
              name="Abstract"
              value={formData.Abstract}
              onChange={handleChange}
              style={styles.textarea}
              required
            ></textarea>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Keywords</label>
            <input
              type="text"
              name="Keywords"
              value={formData.Keywords}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Paper Type</label>
            <input
              type="text"
              name="Paper_Type"
              value={formData.Paper_Type}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Upload Paper</label>
            <input
              type="file"
              name="Paper_Upload"
              onChange={handleChange}
              style={styles.fileInput}
              accept=".pdf,.doc,.docx"
              required
            />
          </div>
          <button
            type="submit"
            style={{
              ...styles.submitButton,
              ...(isLoading ? styles.disabledButton : {})
            }}
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        {paperId && (
          <div style={{ textAlign: 'center', marginTop: '20px', color: 'green' }}>
            Paper submitted successfully! Your Paper ID is <strong>{paperId}</strong>.
          </div>
        )}
      </div>
    </>
  );
};

export default Submitform;
