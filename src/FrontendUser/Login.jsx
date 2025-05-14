import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


 // Update the handleSubmit function to properly store tokens and redirect
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setError("");

  try {
    console.log('Sending data:', JSON.stringify(formData, null, 2));

    const response = await fetch('http://localhost:8000/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    
    if (response.ok) {
      // Store tokens in localStorage
      localStorage.setItem('accessToken', data.tokens.access);
      localStorage.setItem('refreshToken', data.tokens.refresh);
      localStorage.setItem('authorData', JSON.stringify(data.author_data));
      
      console.log('Login successful:', data);
      navigate('/dashboard'); // Consider redirecting to dashboard instead of home
    } else {
      setError(data.error || 'Login failed');
    }
  } catch (error) {
    setError('Network error. Please try again.');
    console.error('Error:', error);
  } finally {
    setIsLoading(false);
  }
};


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);

    // Dummy login check (replace with API call later)
    if (formData.username === "admin" && formData.password === "12345") {
      localStorage.setItem("auth", "true"); // Save auth flag
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      alert("Invalid credentials");
    }
  };


  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      padding: "20px",
      backgroundColor: "#f0f0f0",
    },
    form: {
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
      boxSizing: "border-box",

      marginTop: "60px"

    },
    inputGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "6px",
      fontWeight: "bold",
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

      marginTop: "10px",
      opacity: isLoading ? 0.7 : 1,
      cursor: isLoading ? 'not-allowed' : 'pointer'
    },
    registerText: {
      marginTop: "15px",
      fontSize: "14px",
      textAlign: "center",

      cursor: "pointer",

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
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              name="Email"
              style={styles.input}
              value={formData.Email}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password:</label>
            <input
              type="password"
              name="Password"
              style={styles.input}
              value={formData.Password}
              onChange={handleChange}
              required
            />
          </div>
          <button 
            type="submit" 
            style={styles.button}
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
          <p style={styles.registerText}>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>

<>
    <div style={styles.container}>
      <h2>Default Id & Password</h2> <br />
<h2>Id :- admin</h2>
<h2>Password :- 12345</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Username:</label>
          <input
            type="text"
            name="username"
            style={styles.input}
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            name="password"
            style={styles.input}
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Login</button>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </form>
    </div>

    </>
  );
};

export default Login;
