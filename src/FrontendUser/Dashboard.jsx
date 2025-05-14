import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Assuming you have a Navbar component

const Dashboard = () => {
  const navigate = useNavigate();

 const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: "20px",
      minHeight: "100vh",
      backgroundColor: "#f0f2f5",
      fontFamily: "Arial, sans-serif",
      flexWrap: "wrap",
      
    },
    panel: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      padding: "20px",
      margin: "10px",
      flex: "1",
      minWidth: "280px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    },
    leftPanel: {
      flexBasis: "25%",
    },
    centerPanel: {
      flexBasis: "45%",
      textAlign: "center",
    },
    rightPanel: {
      flexBasis: "25%",
    },
    heading: {
      fontSize: "24px",
      color: "#333",
      marginBottom: "10px",
    },
    detail: {
      margin: "8px 0",
      fontSize: "16px",
      color: "#555",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "10px",
    },
    th: {
      backgroundColor: "#8576FF",
      color: "#fff",
      padding: "8px",
      textAlign: "left",
      fontSize: "14px",
    },
    td: {
      padding: "8px",
      borderBottom: "1px solid #ccc",
      fontSize: "14px",
    },
    profileImg: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      marginBottom: "10px",
    },
    editButton: {
      backgroundColor: "#8576FF",
      color: "#fff",
      padding: "10px 15px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "10px",
      fontSize: "14px",
    },
    activityList: {
      textAlign: "left",
      padding: "10px",
      fontSize: "15px",
    },
    activityItem: {
      marginBottom: "8px",
      borderBottom: "1px solid #eee",
      paddingBottom: "6px",
    },
  };

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('auth');
    if (!isAuthenticated) {
      navigate('/login'); // 🚫 Redirect if not logged in
    }
  }, [navigate]);

  return (
    <>
    <Navbar />
     <div style={styles.container}>
      {/* LEFT PANEL */}
      <div style={{ ...styles.panel, ...styles.leftPanel }}>
        <h3 style={styles.heading}>User Info</h3>
        <p style={styles.detail}><strong>Status:</strong> Active</p>
        <p style={styles.detail}><strong>User ID:</strong> #USR00123</p>
        <h4 style={{ ...styles.heading, fontSize: "20px" }}>Submitted Papers</h4>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Title</th>
              <th style={styles.th}>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Philosophy of Mind</td>
              <td style={styles.td}>2025-04-10</td>
            </tr>
            <tr>
              <td style={styles.td}>Modern Literature</td>
              <td style={styles.td}>2025-03-22</td>
            </tr>
            <tr>
              <td style={styles.td}>Linguistics Theory</td>
              <td style={styles.td}>2025-02-15</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* CENTER PANEL */}
      <div style={{ ...styles.panel, ...styles.centerPanel }}>
        <h2 style={styles.heading}>Welcome to Your Dashboard</h2>
        <p style={styles.detail}>
          Manage your journal submissions, notifications, and account settings here.
        </p>
        <h4 style={{ ...styles.heading, fontSize: "20px", textAlign: "left" }}>Recent Activity</h4>
        <div style={styles.activityList}>
          <div style={styles.activityItem}>✅ Submitted “Philosophy of Mind” on 10th April</div>
          <div style={styles.activityItem}>📝 Updated profile info on 1st April</div>
          <div style={styles.activityItem}>📄 Viewed feedback on “Modern Literature”</div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div style={{ ...styles.panel, ...styles.rightPanel }}>
        <h3 style={styles.heading}>Profile</h3>
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          style={styles.profileImg}
        />
        <p style={styles.detail}><strong>Name:</strong> Jane Doe</p>
        <p style={styles.detail}><strong>Email:</strong> jane@example.com</p>
        <p style={styles.detail}><strong>Role:</strong> Researcher</p>
        <button style={styles.editButton}>Edit Profile</button>
      </div>
    </div>
    </>
  )
};

export default Dashboard;
