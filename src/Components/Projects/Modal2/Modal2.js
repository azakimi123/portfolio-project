import React, { useState } from 'react';
import cart from '../../../images/modal2/cart.png';
import dashboard from '../../../images/modal2/dashboard.png';
import planner from '../../../images/modal2/planner.png';
import recipe from '../../../images/modal2/recipe.png';
import search from '../../../images/modal2/search.png';
import './Modal2.scss';

// import PersonalProject from '../../../images/landing.png';
// import shop from '../../../images/modal1/shop.png';
// import checkout from '../../../images/modal1/checkout.png';
// import admin from '../../../images/modal1/admin.png';
// import revenue from '../../../images/modal1/revenue.png';
// import items from '../../../images/modal1/items.png';


function Modal2(props) {

  const [images1, setImages1] = useState([dashboard, planner, search, recipe, cart]);
  const [description1, setDescription1] = useState
  ([
    `When user is authenticated, dashboard displays user's saved mealplans from the database`,
    `Weekly mealplan view allows users to edit the meals for different days of the week`,
    `Users can search for recipes as requests are made to a third party API`,
    `Indivdual recipes can be viewed with a serving size calculator with ingredients and directions`,
    `The shopping cart displays a total of all ingredients needed to make the recipes added to the weekly meal plan`
  ]);

  let [index1, setIndex1] = useState(0);

  const handleNext = () => {
    if(index1 >= 4) {
        setIndex1(0)
    } else {
        setIndex1(index1 += 1)
    }
}

const handleBack = () => {
    if(index1 <= 0) {
        setIndex1(4)
    } else {
        setIndex1(index1 -= 1)
    }
}

// console.log(index)
  return(
    <div className='modal-container1'>
      <h2>Meal Planning Application</h2>
        <div className='modal-box1'>
        <section className='project-display-box1'>
            <div className='project-display1' >
              <img src={images1[index1]} alt='personal project display' />
            </div>
          <p className='project-description1'>{description1[index1]}</p>
        </section>
        </div>
        <div className='project-btn1' >
          <img onClick={handleBack} className='back-btn1' src='https://image.flaticon.com/icons/svg/860/860790.svg' alt='forward'/>
          <img onClick={handleNext}  className='next-btn1' src='https://image.flaticon.com/icons/svg/860/860790.svg' alt='back'/>
        </div>
    </div>
  )
}

export default Modal2;


{/* <div className='modal-container2'>
<img className='exit-button2' onClick={() => props.toggle2Fn(false)} src='https://image.flaticon.com/icons/svg/149/149407.svg' alt='exit box'/>
<section className='project-display-box2'>
  <section className='project-display-container2'>
    <img className='project-display2' src={images[index]} alt='personal project display' />
  </section>
  <p className='project-description2'>{description[index]}</p>
  <div className='project-btn2' >
    <img onClick={handleBack} className='back-btn2' src='https://image.flaticon.com/icons/svg/860/860790.svg' alt='forward'/>
    <img onClick={handleNext}  className='next-btn2' src='https://image.flaticon.com/icons/svg/860/860790.svg' alt='back'/>
  </div>
</section>
</div> */}


// const [images, setImages] = useState([dashboard, planner, search, recipe, cart]);
// const [description, setDescription] = useState
// ([
//   `When user is authenticated, dashboard displays user's saved mealplans from the database`,
//   `Weekly mealplan view allows users to edit the meals for different days of the week`,
//   `Users can search for recipes as requests are made to a third party API`,
//   `Indivdual recipes can be viewed with a serving size calculator with ingredients and directions`,
//   `The shopping cart displays a total of all ingredients needed to make the recipes added to the weekly meaplplan`
// ]);