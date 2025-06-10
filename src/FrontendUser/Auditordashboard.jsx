import React from "react";
import { FaFileAlt, FaFolderOpen, FaPen, FaScroll, FaUserAlt } from "react-icons/fa";

const navItems = [
  {
    icon: <FaFileAlt />,
    label: "View Submitted Papers"
  },
  {
    icon: <FaFolderOpen />,
    label: "Access Paper Details"
  },
  {
    icon: <FaPen />,
    label: "Review Paper Content",
    subtext: "Accept/Reject | Feedback"
  },
  {
    icon: <FaScroll />,
    label: "View Paper History",
    subtext: "All actions taken"
  },
  {
    icon: <FaUserAlt />,
    label: "View Author Info",
    subtext: "(limited)"
  }
];

const AuditorDashboard = () => {
  // Sample data for tables and charts
  const papersAwaitingReview = [
    { title: "Deep Learning for Image Recognition", authors: "A. Smith, B. Jones" },
    { title: "Quantum Computing Advancements", authors: "C. Brown" },
    { title: "Renewable Energy Solutions", authors: "D. Wilson, E. Davis" },
  ];

  return (
    <div className="app">
      <style jsx>{`
        :root {
          --primary-color: #283e51;
          --secondary-color: #4a90e2;
          --accent-color: #f5c518;
          --error-color: #e74c3c;
          --bg-color: #f0f2f5;
          --text-color: #2c3e50;
          --sidebar-width: 260px;
          --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          --radius: 12px;
          --gap: 25px;
          --padding: 20px;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: var(--font-family);
          background-color: var(--bg-color);
        }

        .app {
          display: flex;
          min-height: 100vh;
          font-family: var(--font-family);
        }

        .sidebar {
          background: linear-gradient(180deg, var(--primary-color) 0%, #485563 100%);
          color: white;
          padding: 30px 20px;
          width: var(--sidebar-width);
          height: 100%;
        }

        .heading {
          font-size: 20px;
          margin-bottom: 30px;
          text-align: center;
        }

        .nav-list {
          list-style: none;
          padding: 0;
        }

        .nav-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 10px;
          margin-bottom: 12px;
          border-radius: 8px;
          background-color: #34495e;
          cursor: pointer;
          transition: background 0.3s ease;
          font-size: 14px;
        }

        .nav-item:hover {
          background-color: #2c3e50;
        }

        .icon {
          font-size: 18px;
          margin-top: 2px;
        }

        .subtext {
          font-size: 12px;
          color: #ccc;
        }

        .main {
          flex: 1;
          padding: 30px;
        }

        .main-heading {
          font-size: 26px;
          margin-bottom: 30px;
          color: var(--text-color);
        }

        .card-section {
          display: flex;
          flex-wrap: wrap;
          gap: var(--gap);
          margin-bottom: var(--gap);
        }

        .card {
          background-color: white;
          padding: var(--padding);
          border-radius: var(--radius);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          flex: 1 1 300px;
          transition: transform 0.2s ease;
        }

        .chart-card {
          background-color: white;
          padding: var(--padding);
          border-radius: var(--radius);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          flex: 1 1 300px;
          text-align: center;
          transition: transform 0.2s ease;
        }

        .card-title {
          font-size: 18px;
          margin-bottom: 15px;
          color: var(--text-color);
        }

        .table {
          width: 100%;
          border-collapse: collapse;
        }

        .table th,
        .table td {
          padding: 8px;
          border-bottom: 1px solid #eee;
        }

        .table th {
          background-color: #f5f5f5;
        }

        .line-chart {
          height: 200px;
          background: linear-gradient(to right, #e0eafc, #cfdef3);
          border-radius: var(--radius);
        }

        .pie-chart {
          width: 120px;
          height: 120px;
          background: conic-gradient(
            var(--secondary-color) 0% 60%,
            var(--accent-color) 60% 85%,
            var(--error-color) 85% 100%
          );
          border-radius: 50%;
          margin: auto;
          margin-bottom: 15px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          margin-bottom: 6px;
        }

        .legend-color {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: inline-block;
          margin-right: 8px;
        }

        @media (max-width: 768px) {
          .app {
            flex-direction: column;
          }

          .sidebar {
            width: 100%;
            border-right: none;
            border-bottom: 1px solid #ddd;
          }

          .card-section {
            flex-direction: column;
          }
        }
      `}</style>

      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="heading">🛡️ AUDITOR DASHBOARD</h2>
        <ul className="nav-list">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="nav-item"
              onClick={() => console.log(`Clicked: ${item.label}`)}
            >
              <span className="icon">{item.icon}</span>
              <span>
                {item.label}
                {item.subtext && (
                  <>
                    <br />
                    <small className="subtext">{item.subtext}</small>
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main">
        <h1 className="main-heading">📊 Dashboard Overview</h1>

        {/* Section 1 - Cards */}
        <section className="card-section">
          {/* Card 1: Papers Awaiting Review */}
          <div className="card">
            <h2 className="card-title">📄 Papers Awaiting Review</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Paper Title</th>
                  <th>Authors</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {papersAwaitingReview.map((paper, idx) => (
                  <tr key={idx}>
                    <td>{paper.title}</td>
                    <td>{paper.authors}</td>
                    <td>Awaiting Review</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Card 2: Review Outcomes */}
          <div className="chart-card">
            <h2 className="card-title">📈 Review Outcomes</h2>
            <div className="pie-chart"></div>
            <ul>
              <li className="legend-item">
                <span className="legend-color" style={{ backgroundColor: '#4caf50' }}></span>
                Accepted
              </li>
              <li className="legend-item">
                <span className="legend-color" style={{ backgroundColor: '#4a90e2' }}></span>
                Awaiting
              </li>
              <li className="legend-item">
                <span className="legend-color" style={{ backgroundColor: '#e74c3c' }}></span>
                Rejected
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2 - Submissions Over Time */}
        <section className="card-section">
          <div className="card">
            <h2 className="card-title">📅 Submissions Over Time</h2>
            <div className="line-chart"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AuditorDashboard;