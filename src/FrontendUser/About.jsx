import React from 'react'
import about from '../assets/about.png';

const About = () => {
  return (
  <>
   
   <section className="about-section" >
      <h2 className="about-title">About Us</h2>
      <div className="about-content">
      <div className="about-image">
          <img
            src={about}
            alt="Illustration about literature and arts"
            loading="lazy"
          />
        </div>
        <div className="about-text">
          <p>
            <strong>Our</strong> organization is a vibrant platform dedicated
            to the promotion and exploration of Literature, Philosophy,
            Linguistics, and the Arts. We believe in the power of words,
            ideas, language, and creativity to inspire change and foster
            understanding. In literature, we support creative writing,
            translations, and literary events that highlight diverse voices
            and narratives. Our work in philosophy encourages critical
            thinking and meaningful dialogue around fundamental human
            questions.
          </p>
        </div>
      </div>
    </section>
  </>

  )
}

export default About
