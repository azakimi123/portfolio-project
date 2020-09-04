import React from 'react';
import './Projects.scss';
import PersonalProject from '../../images/landing.png';
import GroupProject from '../../images/m2pDash.png';


function Projects() {
  return(
    <div className='projects-container' id='section2'>
      <h1 className='projects-title'>Projects</h1>
      <section className='projects-box'>
        <div className="container">
          <p>Lynne and Lee E-Commerce Site</p>
          <img src={PersonalProject} alt="landing" className="image"/>
        </div>
        <div className="container">
        <p>Meal Planning Web Application</p>
         <img src={GroupProject} alt="dashboard" className="image"/>
        </div>
      </section>
    </div>
  )
}

export default Projects;