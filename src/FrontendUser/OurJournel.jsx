import React from 'react'

const journals = [
    {
      title: "Journal of Philosophy",
      description:
        "Explore critical thought, logic, ethics and more in our leading philosophy journal.",
    },
    {
      title: "Linguistics Review",
      description:
        "Dive into syntax, semantics, and the structure of human language research.",
    },
    {
      title: "Cultural Studies",
      description:
        "Interdisciplinary research on identity media, and social narratives.",
    },
  ];

const OurJournel = () => {
  return (
    <>
    <div className="container-ouurnals" id='journals'>
     
    <section className="our-journals">
      <h2 className="heading">Our Journals</h2>
      <p className="subheading">Explore Journals across Disciplines</p>
       
        
<div class="container-search">
<div class="search-container">
  <input class="input" type="text" placeholder='Search Here'/>
  <svg viewBox="0 0 24 24" class="search__icon">
    <g>
      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
      </path>
    </g>
  </svg>
</div>

      </div>
      <div className="journal-list">
        {journals.map((journal, index) => (
          <div key={index} className="journal-card">
            <h3 className="journal-title">{journal.title}</h3>
            <p className="journal-description">{journal.description}</p>
            <button className="view-btn">View Journal</button>
          </div>
        ))}
      </div>
      <button className="more-btn">See More Journals</button>
    </section>
    </div>
    </>
  )
}

export default OurJournel
