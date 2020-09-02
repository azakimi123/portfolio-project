import React from 'react';
import './Skills.scss';


function Skills(){
  return(
    <div className='skills-container' id='section5'> 
      <section className='skills-icon-container'>
        <div>
          <img className='skills-icon' src='https://image.flaticon.com/icons/svg/226/226269.svg' alt='HTML'/>
          <p>HTML5</p>
        </div>
        <div>
          <img className='skills-icon' src='https://image.flaticon.com/icons/svg/732/732190.svg' alt='CSS3'/>
          <p>CSS3</p>
        </div>
        <div>
          <img className='skills-icon' src='https://image.flaticon.com/icons/svg/919/919828.svg' alt='JavaScript'/>
          <p>JavaScript</p>
        </div>
        <div>
          <img className='skills-icon' src='https://image.flaticon.com/icons/svg/919/919851.svg' alt='React'/>
          <p>React</p>
        </div>
        <div>
          <img className='skills-icon' src='https://image.flaticon.com/icons/svg/919/919825.svg' alt='Node.js'/>
          <p>Node.js</p>
        </div>
        <div>
          <img className='skills-icon' src='https://cdn.worldvectorlogo.com/logos/redux.svg' alt='Redux'/>
          <p>Redux</p>
        </div>
        <div>
          <img className='skills-icon' src='https://image.flaticon.com/icons/svg/919/919831.svg' alt='Sass'/>
          <p>Sass</p>
        </div>
      </section>
      <section className='skills-icon-container2'>
        <div>
          <img className='skills-icon' src='https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/thumb/expressjslogo.png' alt='Express.js'/>
          <p>Express.js</p>
        </div>
        <div>
          <img className='skills-icon' src='https://iconape.com/wp-content/files/ni/64759/png/git-icon.png' alt='Git'/>
          <p>Git</p>
        </div>
        <div>
          <img className='skills-icon' src='https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' alt='PostgreSQL'/>
          <p>PostgreSQL</p>
        </div>
        <div>
          <img className='skills-icon' src='https://repository-images.githubusercontent.com/1272424/d1995000-0ab7-11ea-8ed3-04a082c36b0d' alt='Nodemailer'/>
          <p>Nodemailer</p>
        </div>
        <div>
          <img className='skills-icon' src='https://b.stripecdn.com/site-srv/assets/img/v3/jobs_v2/thumbnails/stripe-c7f91cf715df9fb9d2198e47de6fc3016a82795e.jpg' alt='Stripe'/>
          <p>Stripe</p>
        </div>
        <div>
          <img className='skills-icon2' src='https://www.chartjs.org/img/chartjs-logo.svg' alt='Chart.js'/>
          <p>Chart.js</p>
        </div>
      </section>
    </div>
  )
}

export default Skills;