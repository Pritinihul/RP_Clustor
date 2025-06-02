import React, { useState } from 'react';
import axios from 'axios';

const OurJournel = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [journals, setJournals] = useState([]);

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      try {
        if (searchTerm.trim() === '') {
          setJournals([]);
          return;
        }
        const response = await axios.get(`http://localhost:8000/api/search-papers/?q=${searchTerm}`);
        setJournals(response.data);
      } catch (error) {
        console.error('Error fetching journals:', error);
      }
    }
  };

  return (
    <div className="container-ouurnals" id="journals">
      <section className="our-journals">
        <h2 className="heading">Our Journals</h2>
        <p className="subheading">Explore Journals across Disciplines</p>

        <div className="container-search">
          <div className="search-container">
            <input
              className="input"
              type="text"
              placeholder="Search Here"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <svg viewBox="0 0 24 24" className="search__icon">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
              </g>
            </svg>
          </div>
        </div>

        <div className="journal-list">
          {journals.length > 0 ? (
            journals.map((journal, index) => (
              <div key={index} className="journal-card">
                <h3 className="journal-title">{journal.Paper_Title}</h3>
                <p className="journal-description">{journal.Abstract || journal.Keywords}</p>
                <a
                  href={`http://localhost:8000${journal.Paper_Upload}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="view-btn">View Journal</button>
                </a>
              </div>
            ))
          ) : (
            <p style={{ marginTop: '1rem' }}>No journals found.</p>
          )}
        </div>

        <button className="more-btn">See More Journals</button>
      </section>
    </div>
  );
};

export default OurJournel;
