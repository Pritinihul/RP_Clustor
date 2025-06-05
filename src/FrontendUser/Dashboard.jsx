import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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
        'Content-Type': 'application/json',
      },
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

  const pieData = [
    {
      name: 'Accepted',
      value: userData?.papers_count?.accepted || 0,
      color: '#ccfbf1',
    },
    {
      name: 'Pending',
      value: userData?.papers_count?.pending || 0,
      color: '#fef9c3',
    },
    {
      name: 'Rejected',
      value: userData?.papers_count?.rejected || 0,
      color: '#fde2e4',
    },
  ];

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: '#0f172a', color: '#fff', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
        <nav style={{ fontSize: '24px', fontWeight: 'bold', padding: '10px 0', borderBottom: '1px solid #1e293b', margin: '35px auto' }}>
          📊 Dashboard Panel
        </nav>

        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', gap: '20px', flexWrap: 'wrap' }}>
          {/* LEFT SECTION */}
          <div style={{ flex: 2, minWidth: '300px' }}>
            {/* STATS */}
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              {[
                { label: 'Total Papers', value: userData?.papers_count?.total || 0, color: '#dbeafe' },
                { label: 'Pending', value: userData?.papers_count?.pending || 0, color: '#fef9c3' },
                { label: 'Accepted', value: userData?.papers_count?.accepted || 0, color: '#ccfbf1' },
                { label: 'Rejected', value: userData?.papers_count?.rejected || 0, color: '#fde2e4' },
              ].map((item, idx) => (
                <div key={idx} style={{
                  backgroundColor: '#1e293b',
                  padding: '20px',
                  borderRadius: '12px',
                  flex: 1,
                  minWidth: '140px',
                  textAlign: 'left',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#cbd5e1' }}>
                    <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: item.color }}></span>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '22px', fontWeight: 'bold', marginTop: '5px' }}>{item.value}</div>
                </div>
              ))}
            </div>

            {/* PAPERS TABLE */}
            <div style={{ marginTop: '30px', backgroundColor: '#1e293b', borderRadius: '12px', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <h3>Submitted Papers</h3>
              </div>
              <table style={{ width: '100%', color: '#fff', fontSize: '14px', borderCollapse: 'collapse' }}>
                <thead style={{ backgroundColor: '#334155' }}>
                  <tr>
                    <th style={{ padding: '10px', textAlign: 'left' }}>Title</th>
                    <th style={{ padding: '10px', textAlign: 'left' }}>Status</th>
                    <th style={{ padding: '10px', textAlign: 'left' }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {userData?.papers?.length > 0 ? (
                    userData.papers.map((paper, index) => (
                      <tr key={index} style={{ borderTop: '1px solid #475569' }}>
                        <td style={{ padding: '10px' }}>{paper.Paper_Title}</td>
                        <td style={{ padding: '10px' }}>
                          <span style={{
                            backgroundColor:
                              paper.Paper_Status === 'Accepted' ? '#ccfbf1' :
                                paper.Paper_Status === 'Pending' ? '#fef9c3' :
                                  '#fde2e4',
                            color: '#0f172a',
                            padding: '4px 10px',
                            borderRadius: '12px',
                            fontWeight: 'bold',
                            fontSize: '12px'
                          }}>{paper.Paper_Status}</span>
                        </td>
                        <td style={{ padding: '10px' }}>{new Date(paper.Submission_Date).toLocaleDateString()}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td style={{ padding: '10px' }} colSpan="3">No papers submitted yet</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* PIE CHART */}
            <div style={{ marginTop: '30px', backgroundColor: '#1e293b', borderRadius: '12px', padding: '20px' }}>
              <h3>Status Distribution</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                    {pieData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* PROFILE CARD */}
            <div style={{ backgroundColor: '#1e293b', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <img src={userData?.profileImage || "https://via.placeholder.com/101"} alt="profile"
                style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '10px' }} />
              <h3 style={{ margin: 0 }}>{userData?.Name || "Loading..."}</h3>
              <p style={{ color: '#94a3b8', marginTop: '4px' }}>{userData?.Designation || "Researcher"}</p>
              <div style={{ textAlign: 'left', marginTop: '15px', fontSize: '14px' }}>
                <div style={{ marginBottom: '6px' }}><b>Email:</b> {userData?.EmailId}</div>
                <div style={{ marginBottom: '6px' }}><b>Role:</b> {userData?.Designation || 'Researcher'}</div>
              </div>
              <button style={{
                marginTop: '15px',
                backgroundColor: '#8b5cf6',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                cursor: 'pointer'
              }}>Edit Profile</button>
            </div>

            {/* ACTIVITY */}
            <div style={{ backgroundColor: '#1e293b', borderRadius: '12px', padding: '20px' }}>
              <h4 style={{ marginBottom: '10px' }}>Recent Activities</h4>
              <div style={{ fontSize: '14px', marginBottom: '8px' }}>
                <span style={{ color: '#99f6e4' }}>●</span> New paper submitted <span style={{ color: '#64748b' }}> - 2 hours ago</span>
              </div>
              <div style={{ fontSize: '14px', marginBottom: '8px' }}>
                <span style={{ color: '#86efac' }}>●</span> Paper accepted <span style={{ color: '#64748b' }}> - 3 days ago</span>
              </div>
              <div style={{ fontSize: '14px' }}>
                <span style={{ color: '#fbcfe8' }}>●</span> Received reviewer comment <span style={{ color: '#64748b' }}> - 1 week ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
