import React, { useState } from 'react';
import PersonalProject from '../../../images/landing.png';
import shop from '../../../images/modal1/shop.png';
import checkout from '../../../images/modal1/checkout.png';
import admin from '../../../images/modal1/admin.png';
import revenue from '../../../images/modal1/revenue.png';
import items from '../../../images/modal1/items.png';
import './Modal1.scss';


function Modal1(props) {

  const [images, setImages] = useState([PersonalProject, shop, checkout, admin, revenue, items]);
  const [description, setDescription] = useState
  ([
    `Responsive design for different screen sizes`,
    `Product display was sytled useing Sass and image containers.  The cart was managed through Redux.`,
    `Checkout had secure payment methods provided by Stripe.`,
    `Site allowed admin login capabilities to manage products in the shop and to observe shop stats.`,
    `Revenue data was collected from the database to display in Chart.js for the admin.`,
    `Data for most popular items sold was collected from the database and displayed in Chart.js for the admin.`
  ]);

  let [index, setIndex] = useState(0);

  const handleNext = () => {
    if(index >= 4) {
        setIndex(0)
    } else {
        setIndex(index += 1)
    }
}

const handleBack = () => {
    if(index <= 0) {
        setIndex(4)
    } else {
        setIndex(index -= 1)
    }
}

  return(
    <div className='modal-container'>
      <img className='exit-button' onClick={() => props.toggle1Fn(false)} src='https://image.flaticon.com/icons/svg/149/149407.svg' alt='exit box'/>
      <section className='project-display-box'>
        <img className='project-display' src={images[index]} alt='personal project display' />
        <p className='project-description'>{description[index]}</p>
      </section>
      <div className='project-btn' >
        <img onClick={handleBack} className='back-btn' src='https://image.flaticon.com/icons/svg/860/860790.svg' alt='forward'/>
        <img onClick={handleNext}  className='next-btn' src='https://image.flaticon.com/icons/svg/860/860790.svg' alt='back'/>
      </div>
    </div>
  )
}

export default Modal1;