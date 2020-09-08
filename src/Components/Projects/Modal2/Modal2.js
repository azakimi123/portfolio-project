import React, { useState } from 'react';
import cart from '../../../images/modal2/cart.png';
import dashboard from '../../../images/modal2/dashboard.png';
import planner from '../../../images/modal2/planner.png';
import recipe from '../../../images/modal2/recipe.png';
import search from '../../../images/modal2/search.png';
import './Modal2.scss';


function Modal2(props) {
  const [images, setImages] = useState([dashboard, planner, search, recipe, cart]);
  const [description, setDescription] = useState
  ([
    `When user is authenticated, dashboard displays user's saved mealplans from the database`,
    `Weekly mealplan view allows users to edit the meals for different days of the week`,
    `Users can search for recipes as requests are made to  third part API`,
    `Indivdual recipes can be viewed with a serving size calculator with ingredients and directions`,
    `The shopping cart displays a total of all ingredients needed to make the recipes added to the weekly meaplplan`
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
      <img className='exit-button' onClick={() => props.toggle2Fn(false)} src='https://image.flaticon.com/icons/svg/149/149407.svg' alt='exit box'/>
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

export default Modal2;