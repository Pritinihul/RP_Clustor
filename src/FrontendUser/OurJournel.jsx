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
    <div className="container-ouurnals" id="our-journals">
    <section className="our-journals">
      <h2 className="heading">Our Journals</h2>
      <p className="subheading">Explore Journals across Disciplines</p>
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
