import React from 'react';
import './Footer.scss';


function Footer() {
  return(
    <div className='footer-container'>
      <section className='contact-info'>
        {/* <span>Aaron Zakimi</span> */}
        <span>Phone: (208) 243-2477</span>
        {/* <span>Provo, Utah</span> */}
        <span>Email: aaron.zakimi@gmail.com</span>
      </section>
    </div>
  )
}

export default Footer;