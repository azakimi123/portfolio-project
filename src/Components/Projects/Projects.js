import React, { useState } from 'react';
import './Projects.scss';
import PersonalProject from '../../images/landing.png';
import GroupProject from '../../images/m2pDash.png';
import Modal1 from './Modal1/Modal1';
import Modal2 from './Modal2/Modal2';


function Projects() {

  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);


  console.log(toggle1)
  return(
    <div className='projects-container' id='section2'>
      {toggle1 ? <h1 className='projects-title'>Lynne and Lee E-Commerce Site</h1> : toggle2 ? <h1 className='projects-title'>Meal Planning Web Application</h1> : <h1 className='projects-title'>Projects</h1>}
      {/* {toggle1 || toggle2 ? null : <h1 className='projects-title'>Projects</h1>} */}
      <section className='projects-box'>
        {!toggle1
        ? <div className="container">
            <div class="tooltip">Lynne and Lee E-Commerce Site
              <a href='https://github.com/azakimi123/personal-project-lynne-and-lee' target='_blank'><span class="tooltiptext">GitHub Repo</span></a>
            </div>
          <img onClick={() => setToggle1(true)}  src={PersonalProject} alt="landing" className="image"/>
        </div>
        :<div className="modal-container">
          <Modal1 className='modal1' toggle1Fn={setToggle1}/>
        </div>}
        {!toggle2
        ? <div className="container">
            <div class="tooltip">Meal Planning Web App
              <a href='https://github.com/wr2-cooking-app/cooking-app' target='_blank'><span class="tooltiptext">GitHub Repo</span></a>
            </div>
              <img onClick={() => setToggle2(true)} src={GroupProject} alt="dashboard" className="image"/>
            </div>
        : <div className="modal-container">
            <Modal2 className='modal2'  toggle2Fn={setToggle2}/>
          </div>}
      </section>
    </div>
  )
}

export default Projects;