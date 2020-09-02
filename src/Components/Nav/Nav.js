import React, { Component } from 'react';
import './Nav.scss';
import Logo from '../../images/Logo.png';
import { Link, animateScroll as scroll } from "react-scroll";


class Nav extends Component {
  render() {
    return(
      <div className='nav'>
        <section className='nav-name'>
          <img className='nav-logo' src={Logo} alt='logo'/>
        </section>
        <section className='nav-links'>
          <Link to="section1" smooth={true} offset={-70} duration={1000}>
            <span>HOME</span>
          </Link>
          <Link to='section3' smooth={true} offset={-70} duration={1000}>
            <span>ABOUT</span>
          </Link>
          <Link to="section5" smooth={true} offset={-70} duration={1000}>
            <span>SKILLS</span>
          </Link>
          <Link to="section2" smooth={true} offset={-70} duration={1000}>
            <span>PROJECTS</span>
          </Link>
          <Link to='section4' smooth={true} offset={-70} duration={1000}>
            <span>CONTACT</span>
          </Link>
        </section>
      </div>
    )
  }
}

export default Nav;