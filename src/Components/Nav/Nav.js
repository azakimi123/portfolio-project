import React, { useState } from 'react';
import './Nav.scss';
import Logo from '../../images/Logo.png';
import { Link, animateScroll as scroll } from "react-scroll";
import menuIcon from '../../images/menu_icon.svg';


function Nav(){
  let [dropdownToggle, setDropdownToggle] = useState(false);


  const handleToggle = () => {
      setDropdownToggle(!dropdownToggle)
  }

  console.log(dropdownToggle)
    return(
      <div>
      <div className='nav'>
        <section className='nav-name'>
          <Link to="section1" smooth={true} offset={-70} duration={1000}>
           <img className='nav-logo' src={Logo} alt='logo'/>
          </Link>
        </section>
        <section className='nav-links'>
          <Link to="section1" smooth={true} offset={-70} duration={1000}>
            <span>HOME</span>
          </Link>
          <Link to='section3' smooth={true} offset={0} duration={1000}>
            <span>ABOUT</span>
          </Link>
          <Link to="section5" smooth={true} offset={-85} duration={1000}>
            <span>SKILLS</span>
          </Link>
          <Link to="section2" smooth={true} offset={-70} duration={1000}>
            <span>PROJECTS</span>
          </Link>
          <Link to='section4' smooth={true} offset={-85} duration={1000}>
            <span>CONTACT</span>
          </Link>
        </section>
      </div>
      <div className='nav-mobile'>
        <Link to="section1" smooth={true} offset={-70} duration={1000}>
         <img className='nav-logo' src={Logo} alt='logo'/>
        </Link>
        <img className='menu-button' src={menuIcon} alt='menu button' onClick={handleToggle} />
        {dropdownToggle
                ? (
                        <ul>
                            <Link to="section1" smooth={true} offset={-70} duration={1000} onClick={handleToggle}>
                                <li>HOME</li>
                            </Link>
                            <Link to='section3' smooth={true} offset={0} duration={1000} onClick={handleToggle}>
                                <li>ABOUT</li>
                            </Link>
                            <Link to="section5" smooth={true} offset={-85} duration={1000} onClick={handleToggle}>
                                <li>SKILLS</li>
                            </Link>
                            <Link to="section2" smooth={true} offset={-70} duration={1000} onClick={handleToggle}>
                                <li>PROJECTS</li>
                            </Link>
                             <Link to='section4' smooth={true} offset={-85} duration={1000} onClick={handleToggle}>
                                <li>CONTACT</li>
                            </Link>
                        </ul>
                )     
                : null
                }
      </div>
    </div>
    )
}

export default Nav;