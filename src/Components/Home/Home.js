import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';
import title1 from '../../images/title1.png';
import title2 from '../../images/webDev.png';
import './Home.scss';


function Home(props){
   let t1 = useRef(null);
   let t2 = useRef(null);


   useEffect( () => {
     t1Fn()
     t2Fn()
   }, [])

   const t1Fn = () => {
    TweenMax.to(
      t1,
      3,
      {
        opacity: 1,
        x: 58,
        ease: Power3.easeOut
      }
    )
   }

   const t2Fn = () => {
    TweenMax.to(
      t2,
      3,
      {
        opacity: 1,
        x: 70,
        ease: Power3.easeOut
      }
    )
   }
    return(
        <div className='home-cointainer' id='section1'>
          <div className='home-box'>
              <div className='main-container'  >
                <p 
                  ref={el => {t1 = el}}
                  className='main-title1'
                  >Aloha, I'm Aaron Zakimi</p>
                <p
                  ref={el => {t2 = el}}
                  className='main-title2'
                  >Passionate About Learning & Teaching</p>
              </div>
              <section className='home-icons-section'>
                <section>
                  <a href='https://github.com/azakimi123' target='_blank'>
                  <img className='home-icons' src='https://image.flaticon.com/icons/svg/2111/2111432.svg' alt='github'/>
                  </a>
                  <p>GitHub</p>
                </section>
                <section>
                  <a href='https://www.linkedin.com/in/aaron-zakimi/' target='_blank'>
                  <img className='home-icons' src='https://image.flaticon.com/icons/svg/2111/2111532.svg' alt='linkedin'/>
                  </a>
                  <p>Linkedin</p>
                </section>
                <section>
                  <a href='https://drive.google.com/file/d/1mIO9bqJlxQONP5KFFMOeva23D7u_WQi8/view?usp=sharing' target='_blank'>
                  <img className='home-icons' src='https://image.flaticon.com/icons/svg/942/942799.svg' alt='resume'/>
                  </a>
                  <p>Resume</p>
                </section>
              </section>
          </div>
        </div>
    )
}

export default Home;


{/* <div className='main-container'  >
<img 
  ref={el => {t1 = el}} 
  className='main-title1' src={title1} alt='full stack' />
<img 
ref={el => {t2 = el}}
className='main-title2' src={title2} alt='web dev'/>
</div> */}