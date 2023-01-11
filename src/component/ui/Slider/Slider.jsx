

import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import ava01 from '../../../assets/images/ava-1.jpg'
import ava02 from '../../../assets/images/ava-2.jpg'
import ava03 from '../../../assets/images/ava-3.jpg'




const Slider = () => {
  return (
   <Carousel className='data'>
       <Carousel.Item className='carousel'>
        <div className='image'>
        <span><img
          className="d-block w-100 "
          src={ava01}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>John Doe</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption></span>
        </div>
      </Carousel.Item>
      <Carousel.Item>
       <div className='image'>
       <span>
       <img
          className="d-block w-100"
          src={ava02}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Ketty Perry</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
       </span>
       </div>
      </Carousel.Item>
      <Carousel.Item>
       <div className='image'>
       <span>
        <img
          className="d-block w-100"
          src={ava03}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Mitchell Marsh</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
        </span>
       </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
