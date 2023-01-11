import React from 'react'

// import pic from '../assets/images/location.png'

import Product from   '../component/ui/Product-card/ProductCard.jsx'
        
import { Container } from 'reactstrap'

const Cart = () => {
  return (
    
      <Container>
        {/* <div className='location_img'>
          <img src={pic} alt="location-img" className='w-100' />
        </div> */}

        <Product/>
      </Container>
    
  )
}

export default Cart
