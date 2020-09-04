import React, { useState } from 'react';
import './Projects.scss';
import PersonalProject from '../../images/landing.png';
import GroupProject from '../../images/m2pDash.png';


function Projects() {

  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);


  console.log(toggle1)
  return(
    <div className='projects-container' id='section2'>
      <h1 className='projects-title'>Projects</h1>
      <section className='projects-box'>
        {!toggle1
        ? <div className="container">
          <p>Lynne and Lee E-Commerce Site</p>
          <img onClick={() => setToggle1(true)}  src={PersonalProject} alt="landing" className="image"/>
        </div>
        :<div className="modal-container">
          <p>I'm a modal for personal project</p>
          <img onClick={() => setToggle1(false)} className='exit-button' src='https://image.flaticon.com/icons/svg/149/149407.svg' alt='exit box'/>
        </div>}
        {!toggle2
        ? <div className="container">
            <p>Meal Planning Web Application</p>
            <img onClick={() => setToggle2(true)} src={GroupProject} alt="dashboard" className="image"/>
          </div>
        : <div className="modal-container">
            <p>I'm a modal for group project</p>
            <img onClick={() => setToggle2(false)} className='exit-button' src='https://image.flaticon.com/icons/svg/149/149407.svg' alt='exit box'/>
          </div>}
      </section>
    </div>
  )
}

export default Projects;