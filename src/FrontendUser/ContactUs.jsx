
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add your submit logic here
  };

    const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
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
    <Contactbanner/>
     <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            style={styles.input}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Mobile_No:</label>
          <input
            type="tel"
            name="mobile"
            style={styles.input}
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>EmailID:</label>
          <input
            type="email"
            name="email"
            style={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Subject:</label>
          <input
            type="text"
            name="subject"
            style={styles.input}
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Message:</label>
          <textarea
            name="message"
            style={{ ...styles.input, height: "80px" }}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
    </>
  )
}

export default ContactUs
