import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Registerbanner from "./banners/Registerbanner";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: "",
    Password: "",
    Email: "",
    Mobile: "",
    Designation: "",
    Organization: "",
    Country: "India"
  });

  const [errors, setErrors] = useState({});
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

  const validate = (name, value) => {
    let err = "";

    if (name === "Name") {
      if (!/^[A-Za-z\s]+$/.test(value)) {
        err = "Name should only contain letters";
      }
    }

    if (name === "Email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        err = "Invalid email format";
      }
    }

    if (name === "Mobile") {
      if (!/^\d{10}$/.test(value)) {
        err = "Mobile number must be exactly 10 digits";
      }
    }

    if (name === "Country") {
      if (value.trim().toLowerCase() !== "india") {
        err = "Country must be 'India'";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "Name") {
      if (/[^A-Za-z\s]/.test(value)) {
        setErrors((prev) => ({
          ...prev,
          Name: "Name should only contain letters"
        }));
      } else {
        setErrors((prev) => ({ ...prev, Name: "" }));
      }
    }

    if (name === "Mobile") {
      if (value.length > 10) return; // Prevent more than 10 digits
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    validate(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    Object.entries(formData).forEach(([name, value]) => validate(name, value));
    const hasErrors = Object.values(errors).some((err) => err);
    if (hasErrors) {
      setError("Please fix the validation errors.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:8000/api/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful:", data);
        navigate("/login");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Registration failed");
      }
    } catch (error) {
      setError("Network error. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const styles = {
    container: {
      display: "flex",
      backgroundColor: "#f5f5f5",
      justifyContent: "center",
      alignItems: "center",
      padding: isMobile ? "10px" : "20px",

    },
    form: {
      backgroundColor: "#fff",
      padding: isMobile ? "20px" : "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: isMobile ? "100%" : "400px",
      boxSizing: "border-box",
    },
    inputGroup: {
      marginBottom: "15px"
    },
    label: {
      display: "block",
      marginBottom: "6px",
      fontWeight: "bold",
      fontSize: isMobile ? "14px" : "16px"
    },
    input: (name) => ({
      width: "100%",
      padding: "10px",
      fontSize: "14px",
      borderRadius: "5px",
      border: errors[name] ? "2px solid red" : "1px solid #ccc",
      boxSizing: "border-box"
    }),
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#8576FF",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
      marginTop: "10px"
    },
    loginText: {
      marginTop: "15px",
      fontSize: "14px",
      textAlign: "center"
    },
    errorText: {
      color: "red",
      fontSize: "12px",
      marginTop: "4px"
    }
  };

  return (
   <>
    <Registerbanner/>
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        {error && (
          <div style={{ color: "red", marginBottom: "15px", textAlign: "center" }}>
            {error}
          </div>
        )}
        {[
          { label: "Name", name: "Name" },
          { label: "Password", name: "Password", type: "password" },
          { label: "Email Id", name: "Email", type: "email" },
          { label: "Mobile No", name: "Mobile", type: "tel" },
          { label: "Designation", name: "Designation" },
          { label: "Organization", name: "Organization" },
          { label: "Country", name: "Country" }
        ].map(({ label, name, type = "text" }) => (
          <div key={name} style={styles.inputGroup}>
            <label style={styles.label}>{label}:</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              onPaste={
                name === "Name"
                  ? (e) => {
                      const pasted = e.clipboardData.getData("text");
                      if (/[^A-Za-z\s]/.test(pasted)) {
                        e.preventDefault();
                        setErrors((prev) => ({
                          ...prev,
                          Name: "Pasted value contains invalid characters"
                        }));
                      }
                    }
                  : undefined
              }
              style={styles.input(name)}
              required
              readOnly={name === "Country"}
            />
            {errors[name] && <div style={styles.errorText}>{errors[name]}</div>}
          </div>
        ))}
        <button
          type="submit"
          style={{
            ...styles.button,
            opacity: isLoading ? 0.7 : 1,
            cursor: isLoading ? "not-allowed" : "pointer"
          }}
          disabled={isLoading}
        >
          {isLoading ? "Registering..." : "Register"}
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
