import React, { useState } from "react";
import Contactbanner from "./banners/Contactbanner";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Name Validation
    if (name === "name") {
      const regex = /^[A-Za-z\s]*$/;
      if (!regex.test(value)) {
        setErrors(prev => ({ ...prev, name: "Name must contain only letters" }));
      } else {
        setErrors(prev => ({ ...prev, name: "" }));
      }
    }

    // Email Validation
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors(prev => ({ ...prev, email: "Enter a valid email address" }));
      } else {
        setErrors(prev => ({ ...prev, email: "" }));
      }
    }

    // Mobile Validation
    if (name === "mobile") {
      const digitOnly = value.replace(/\D/g, "");
      if (digitOnly.length > 10) return; // Prevent more than 10 digits
      if (digitOnly.length < 10) {
        setErrors(prev => ({ ...prev, mobile: "Mobile number must be 10 digits" }));
      } else {
        setErrors(prev => ({ ...prev, mobile: "" }));
      }
      setFormData(prev => ({ ...prev, mobile: digitOnly }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.name || errors.email || errors.mobile) {
      alert("Please fix the errors before submitting.");
      return;
    }

    console.log("Form submitted:", formData);
    // Add your submit logic here
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      padding: "20px",
      backgroundColor: "#f5f5f5",
      fontWeight: "bold",
    },
    form: {
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      width: "100%",
      maxWidth: "500px",
      boxSizing: "border-box",
    },
    inputGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "6px",
      fontSize: "15px",
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "14px",
      boxSizing: "border-box",
    },
    inputError: {
      border: "1px solid red",
      backgroundColor: "#ffe6e6",
    },
    errorText: {
      color: "red",
      fontSize: "13px",
      marginTop: "4px"
    },
    button: {
      backgroundColor: "#8576FF",
      color: "#fff",
      padding: "10px 20px",
      fontSize: "16px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      width: "100%",
    },
  };

  return (
    <>
      <Contactbanner />
      <div style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form} noValidate>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                ...styles.input,
                ...(errors.name ? styles.inputError : {})
              }}
              required
            />
            {errors.name && <div style={styles.errorText}>{errors.name}</div>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Mobile No:</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              style={{
                ...styles.input,
                ...(errors.mobile ? styles.inputError : {})
              }}
              maxLength="10"
              required
            />
            {errors.mobile && <div style={styles.errorText}>{errors.mobile}</div>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email ID:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                ...styles.input,
                ...(errors.email ? styles.inputError : {})
              }}
              required
            />
            {errors.email && <div style={styles.errorText}>{errors.email}</div>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Subject:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{ ...styles.input, height: "80px" }}
              required
            ></textarea>
          </div>

          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
