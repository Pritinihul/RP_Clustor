import React, { useState } from 'react';
import Forauthorbanner from '../FrontendUser/banners/Forauthorbanner';

const TrackStatus = () => {
  const [paperId, setPaperId] = useState('');
  const [status, setStatus] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setStatus(null);

    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      setError('Please login to track paper status');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/api/paper-status/${paperId}/`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(data);
      } else {
        setError(data.error || 'Failed to fetch paper status');
      }
    } catch (error) {
      setError('Network error. Please try again.');
      console.error('Error tracking paper:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#ffff",
      padding: "20px",
    },
    box: {
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      maxWidth: "400px",
      width: "100%",
      textAlign: "center",
    },
    title: {
      marginBottom: "20px",
      fontSize: "20px",
      fontWeight: "bold",
      color: "#333",
    },
    label: {
      display: "block",
      textAlign: "left",
      marginBottom: "8px",
      fontSize: "16px",
      color: "#444",
    },
    input: {
      width: "100%",
      padding: "10px",
      fontSize: "16px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      marginBottom: "20px",
      boxSizing: "border-box",
    },
    button: {
      backgroundColor: "#2693d4",
      color: "#fff",
      border: "none",
      padding: "12px 20px",
      fontSize: "16px",
      borderRadius: "6px",
      cursor: "pointer",
      width: "100%",
      opacity: isLoading ? 0.7 : 1,
    },
    error: {
      color: 'red',
      marginBottom: '10px',
      textAlign: 'center',
    },
    status: {
      marginTop: '20px',
      padding: '15px',
      backgroundColor: '#f0f0f0',
      borderRadius: '6px',
      textAlign: 'left',
    }
  };

  return (
    <>
      <Forauthorbanner/>
      <div style={styles.container}>
        <div style={styles.box}>
          <h2 style={styles.title}>Track Paper Status</h2>
          {error && <div style={styles.error}>{error}</div>}
          <form onSubmit={handleSubmit}>
            <label style={styles.label} htmlFor="paperId">Paper ID</label>
            <input 
              type="text" 
              id="paperId" 
              style={styles.input}
              value={paperId}
              onChange={(e) => setPaperId(e.target.value)}
              required 
            />
            <button 
              type="submit" 
              style={styles.button}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'View Status'}
            </button>
          </form>
          
          {status && (
            <div style={styles.status}>
              <h3>Paper Status:</h3>
              <p>Title: {status.Paper_Title}</p>
              <p>Status: {status.Paper_Status}</p>
              {status.Acceptance_Date && <p>Acceptance Date: {status.Acceptance_Date}</p>}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TrackStatus;
