import React, { Component } from 'react';
import './Nav.scss';
import { Link, animateScroll as scroll } from "react-scroll";


class Nav extends Component {
  render() {
    return(
      <div className='nav'>
        <section className='nav-name'>
          <span>AARON ZAKIMI</span>
        </section>
        <section className='nav-links'>
          <Link to="section1" smooth={true} offset={-70} duration={1000}>
            HOME
          </Link>
          <Link to='section3' smooth={true} offset={-70} duration={1000}>
            ABOUT
          </Link>
          <Link to="section2" smooth={true} offset={-70} duration={1000}>
            WORK
          </Link>
          <Link to='section4' smooth={true} offset={-70} duration={1000}>
            CONTACT
          </Link>
        </section>
      </div>
    )
  }
}

export default Nav;