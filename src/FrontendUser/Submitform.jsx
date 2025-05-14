import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Forauthorbanner from '../FrontendUser/banners/Forauthorbanner';

const Submitform = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    keywords: '',
    researchPaper: '',
    file: null,
    messageToReviewer: ''
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

    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      navigate('/login');
      return;
    }

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await fetch('http://localhost:8000/api/submit-paper/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
        body: formDataToSend
      });

      if (response.status === 401) {
        localStorage.clear();
        navigate('/login');
        return;
      }

      const data = await response.json();

      if (response.ok) {
        navigate('/dashboard');
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
      <Forauthorbanner/>
      <div style={styles.container}>
        <div style={styles.heading}>Submit Paper</div>
        {error && <div style={styles.errorText}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              style={styles.textarea}
              required
            ></textarea>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Keywords</label>
            <input
              type="text"
              name="keywords"
              value={formData.keywords}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Research Paper</label>
            <input
              type="text"
              name="researchPaper"
              value={formData.researchPaper}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Upload File</label>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              style={styles.fileInput}
              accept=".pdf,.doc,.docx"
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Message to Reviewer</label>
            <textarea
              name="messageToReviewer"
              value={formData.messageToReviewer}
              onChange={handleChange}
              style={{...styles.textarea, ...styles.reviewer}}
              required
            ></textarea>
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
      </div>
    </>
  );
};

export default Submitform;
