import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: "",
    Password: "",
    Email: "",
    Mobile: "",
    Designation: "",
    Organization: "",
    Country: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      console.log('Sending data:', JSON.stringify(formData, null, 2)); // Add this line here

      const response = await fetch('http://localhost:8000/api/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          },
          
        
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful:', data);
        navigate('/login'); // Redirect to login page
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Registration failed');
      }
    } catch (error) {
      setError('Network error. Please try again.');
      console.error('Error:', error);
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
      padding: isMobile ? "10px" : "20px",
      backgroundColor: "#f0f0f0",
    },
    form: {
      backgroundColor: "#fff",
      padding: isMobile ? "20px" : "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: isMobile ? "100%" : "400px",
      boxSizing: "border-box",
      marginTop:"60px"
    },
    inputGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "6px",
      fontWeight: "bold",
      fontSize: isMobile ? "14px" : "16px",
    },
    input: {
      width: "100%",
      padding: "10px",
      fontSize: "14px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      boxSizing: "border-box",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#8576FF",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
      marginTop: "10px",
    },
    loginText: {
      marginTop: "15px",
      fontSize: "14px",
      textAlign: "center",
    },
  };

  return (
    <>
      <div style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>
          {error && (
            <div style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>
              {error}
            </div>
          )}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Name:</label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password:</label>
            <input
              type="password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Id:</label>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Mobile No:</label>
            <input
              type="tel"
              name="Mobile"
              value={formData.Mobile}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Designation:</label>
            <input
              type="text"
              name="Designation"
              value={formData.Designation}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Organization:</label>
            <input
              type="text"
              name="Organization"
              value={formData.Organization}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Country:</label>
            <input
              type="text"
              name="Country"
              value={formData.Country}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <button 
            type="submit" 
            style={{
              ...styles.button,
              opacity: isLoading ? 0.7 : 1,
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }} 
            disabled={isLoading}
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>
          <p style={styles.loginText}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
