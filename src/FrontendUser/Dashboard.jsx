import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
        navigate('/login');
        return;
    }

    fetch('http://localhost:8000/api/dashboard/', {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.status === 401) {
            localStorage.clear();
            navigate('/login');
            return;
        }
        return response.json();
    })
    .then(data => {
        if (data) {
            setUserData({
                ...data.author,
                papers: data.papers,
                papers_count: data.papers_count
            });
        }
    })
    .catch(error => console.error('Error fetching dashboard data:', error));
}, [navigate]);

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

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        {/* LEFT PANEL */}
        <div style={{ ...styles.panel, ...styles.leftPanel }}>
          <h3 style={styles.heading}>User Info</h3>
          <div style={styles.stats}>
            <h4 style={{ ...styles.heading, fontSize: "20px" }}>Statistics</h4>
            <p style={styles.detail}><strong>Total Papers:</strong> {userData?.papers_count?.total || 0}</p>
            <p style={styles.detail}><strong>Pending:</strong> {userData?.papers_count?.pending || 0}</p>
            <p style={styles.detail}><strong>Accepted:</strong> {userData?.papers_count?.accepted || 0}</p>
            <p style={styles.detail}><strong>Rejected:</strong> {userData?.papers_count?.rejected || 0}</p>
          </div>
          
          <h4 style={{ ...styles.heading, fontSize: "20px" }}>Submitted Papers</h4>
          <table style={styles.table}>
    <thead>
        <tr>
            <th style={styles.th}>Title</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Date</th>
        </tr>
    </thead>
    <tbody>
        {userData?.papers?.length > 0 ? (
            userData.papers.map((paper, index) => (
                <tr key={paper.Paper_Id}>
                    <td style={styles.td}>{paper.Paper_Title}</td>
                    <td style={styles.td}>{paper.Paper_Status}</td>
                    <td style={styles.td}>{new Date(paper.Submission_Date).toLocaleDateString()}</td>
                </tr>
            ))
        ) : (
            <tr>
                <td style={styles.td} colSpan="3">No papers submitted yet</td>
            </tr>
        )}
    </tbody>
</table>
        </div>

        {/* RIGHT PANEL */}
        <div style={{ ...styles.panel, ...styles.rightPanel }}>
          <h3 style={styles.heading}>Profile</h3>
          <img
            src={userData?.profileImage || "https://via.placeholder.com/100"}
            alt="Profile"
            style={styles.profileImg}
          />
          <p style={styles.detail}><strong>Name:</strong> {userData?.Name || 'Loading...'}</p>
          <p style={styles.detail}><strong>Email:</strong> {userData?.EmailId || 'Loading...'}</p>
          <p style={styles.detail}><strong>Role:</strong> {userData?.Designation || 'Researcher'}</p>
          <button style={styles.editButton}>Edit Profile</button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
