import React from 'react'
// import food from '../assets/images/network.png';
import Category from '../../src/component/ui/Category/Category.jsx'

import { Container } from 'reactstrap';

const Allfoods = () => {
  return (
    <Container>
      {/* <div className='food_img'>
        <img src={food} alt="" className='w-100'/>
      </div> */}

      <Category/>
    </Container>
  )
}

export default Allfoods

