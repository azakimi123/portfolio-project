import React from 'react';
import FamilyPic from '../../images/family.jpg';
import './About.scss';

function About(){
  return(
    <div className='about-container' id='section3'>
      <h1>About</h1>
      <section className='about-box' >
        <img className='family-photo' src={FamilyPic} alt='family' />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </section>
    </div>
  )
}

export default About;