import React from 'react'
import Forauthorbanner from '../FrontendUser/banners/Forauthorbanner';

const TrackStatus = () => {
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
  },
};

  return (
    <>
    <Forauthorbanner/>
      <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>Track Paper Status</h2>
        <label style={styles.label} htmlFor="paperId">Paper ID</label>
        <input type="text" id="paperId" style={styles.input} />
        <button style={styles.button}>View Status</button>
      </div>
    </div>
    </>
  )
}

export default TrackStatus
