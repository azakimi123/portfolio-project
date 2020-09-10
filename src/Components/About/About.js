import React from 'react';
import FamilyPic from '../../images/family_pic.JPG';
import './About.scss';

function About(){
  return(
    <div className='about-container' id='section3'>
      <h1>About</h1>
      <section className='about-box' >
        <img className='family-photo' src={FamilyPic} alt='family' />
        <p>I am a former Special Education Teacher turned web developer.  I have a passion for advocating for inclusion and diversity.  Continual learning is is my mindset, and I hope to share new found knowledge with others while gaining insightful feedback from others.  Orignially from Hawaii, now living in Utah I have finally got used to the snow.  I enjoy spending time with my family and having thoughtful conversations over good food.</p>
      </section>
    </div>
  )
}

export default About;