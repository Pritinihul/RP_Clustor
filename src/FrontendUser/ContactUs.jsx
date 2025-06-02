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
    mobile: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Name Validation
    if (name === "name") {
      const regex = /^[A-Za-z\s]*$/;
      if (!regex.test(value)) {
        setErrors((prev) => ({ ...prev, name: "Name must contain only letters" }));
      } else {
        setErrors((prev) => ({ ...prev, name: "" }));
      }
    }

    // Email Validation
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors((prev) => ({ ...prev, email: "Enter a valid email address" }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }

    // Mobile Validation
    if (name === "mobile") {
      const digitOnly = value.replace(/\D/g, "");
      if (digitOnly.length > 10) return; // Prevent more than 10 digits
      if (digitOnly.length < 10) {
        setErrors((prev) => ({ ...prev, mobile: "Mobile number must be 10 digits" }));
      } else {
        setErrors((prev) => ({ ...prev, mobile: "" }));
      }
      setFormData((prev) => ({ ...prev, mobile: digitOnly }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      Name: formData.name,
      PhoneNo: formData.mobile,
      EmailId: formData.email,
      Subject: formData.subject,
      Message: formData.message,
    };

    try {
      const response = await fetch("http://localhost:8000/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Your message has been submitted successfully!");
        setFormData({
          name: "",
          mobile: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({
          name: "",
          email: "",
          mobile: "",
        });
      } else {
        alert("Submission failed. Please check the form or try again.");
        console.error(data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      padding: "20px",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
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
    errorText: {
      color: "red",
      fontSize: "12px",
      marginTop: "4px",
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
            {errors.name && <p style={styles.errorText}>{errors.name}</p>}
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Mobile No:</label>
            <input
              type="tel"
              name="mobile"
              style={styles.input}
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            {errors.mobile && <p style={styles.errorText}>{errors.mobile}</p>}
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email ID:</label>
            <input
              type="email"
              name="email"
              style={styles.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p style={styles.errorText}>{errors.email}</p>}
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
          <button type="submit" style={styles.button} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
