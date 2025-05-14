import React from 'react'
import about from '../assets/about.png';
import { useNavigate } from 'react-router-dom';
import OurJournel from './OurJournel';

const HomePage = () => {
   const navigate = useNavigate();
  return (
    <>
 
    <div className="page-wrapper" id='home'>
      <div className="overlay">
        <div className="container">
          <h1 className="title">Research Paper</h1>
          <p className="subtitle">
            Illuminating the Intersections of Language, Thought,
            Creativity, and Culture
          </p>
          <p className="description">
            From Ancient Artifacts to Modern Masterpieces: Your Gateway to a World of Authentic History and <em>Art</em>
          </p>
          <div className="button-group">
            <button className="btn" onClick={() => navigate('/submitform')}>Submit Paper</button>
            <button className="btn" onClick={() => navigate('/status')}>Track Paper</button>
            <button className="btn">Plagiarism</button>
          </div>
        </div>
      </div>
    </div>
    


    <section className="about-section"  id="about">
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


    <OurJournel/>
    </>
  )
}

export default HomePage
