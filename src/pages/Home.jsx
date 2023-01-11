import React from 'react';
import { useState,useEffect } from 'react';

// import Helmat from '../component/Helmat/Helmat.js'
import {Container,Row,Col ,ListGroup,ListGroupItem} from 'reactstrap';


import heroImg from '../assets/images/hero.png';

import {Link} from 'react-router-dom';

import '../styles/hero-section.css';
import Category from '../component/ui/Category/Category';
// import Allfoods from '../pages/Allfoods'

import '../styles/home.css';

import featureImg01 from '../assets/images/service-01.png';
import featureImg02 from '../assets/images/service-02.png';
import featureImg03 from '../assets/images/service-03.png';

import products from '../assets/fake-data/product.js'

import foodCategoryImg3 from '../assets/images/bread.png';
import foodCategoryImg1 from '../assets/images/hamburger.png';
import foodCategoryImg2 from '../assets/images/pizza.png';

import ProductCard from '../component/ui/Product-card/ProductCard.jsx';


import whyImg from '../assets/images/location.png';


import networkImg from '../assets/images/network.png';

import TestimonialSlider from '../../src/component/ui/Slider/Slider.jsx'



const featureData =[
  {
    title:'Quick Delivery',
    imgUrl:featureImg01,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, veritatis?'
  },
  {
    title:'Super Dine In',
    imgUrl:featureImg02,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, veritatis?'
  },
  {
    title:'Easy Pick Up',
    imgUrl:featureImg03,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, veritatis?'
  },
]





const Home = () => {
 
const [category,setCategory] = useState('ALL');
const [allProducts,setAllProducts] = useState(products);

const [hotPizza,setHotPizza] =useState([]);

useEffect(()=>{
  const filterPizza = products.filter(item => item.category === 'Pizza');
  const slicePizza = filterPizza.slice(0,4)
  setHotPizza(slicePizza)
},[])

useEffect(()=>{
 
  if(category === 'ALL') {
    setAllProducts(products);
  }
  if(category === 'BURGER'){
    const filteredProducts = products.filter(item=>item.category === 'Burger')

    setAllProducts(filteredProducts)
  }
  if(category === 'PIZZA'){
    const filteredProducts = products.filter(item=>item.category === 'Pizza')

    setAllProducts(filteredProducts)
  }
  if(category === 'BREAD'){
    const filteredProducts = products.filter(item=>item.category === 'Bread')

    setAllProducts(filteredProducts)
  }
  

},[ category ])

  return (
     <div title='Home'>
      <section>
        <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='hero_content'>
              <h5 className='mt-2'>Easy Way to make an order</h5>
              <h1 className='mt-4 hero_title' >
              <span>HUNGRY?</span>Just wait <br/> food at <span> your door</span> 
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consectetur fugiat eligendi facere numquam labore voluptate ipsa nam. Blanditiis, provident.</p>

              <div className='hero_btns d-flex align-items-center gap-5 mt-4'>
                <button className='order_btn d-flex align-items-center justify-content-between'>Order now <i className='ri-arrow-right-s-line'></i> </button>

                <button className='all_food btn btn-danger' ><Link to='/food'>See all foods</Link></button>
              </div>
              
              <div className=' hero_service d-flex align-items-center gap-5 mt-5'>
                <p className='d-felx align-items-center gap-2'><span className='shipping_icon'><i class="ri-car-line"></i></span>No Shipping charge</p>

                <p className='d-felx align-items-center gap-2'><span className='shipping_icon' > <i class="ri-shield-check-line"></i></span>100% secure checkout</p>
              </div>

            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className='hero_img'>
              <img src={heroImg} alt="hero-img" className='w-100' />
            </div>
          </Col>
        </Row>
        </Container>
      </section>

     <section>
        <Category/>
     </section>

     <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center '>
            <h5 className='feature_subtitle '>What we serve</h5>
            <h2 className='fearure_title'>Just sit back at home</h2>
            <h2 className='feature_title'>We will <span>take care</span></h2>

            <p className='mb-1 mt-4 feature_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sunt.</p>

            <p className='feature_text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, vero!</p>
          </Col>

          {
            featureData.map((item,index)=>(
              <Col lg='4' md='6'  key={index} className='mt-5'>
                <div className='feature_item text-center px-5 py-3'>
                    <img src={item.imgUrl} alt="feature_img" className='w-25 mb-3'/>
                    <h5 className='fw-bold mb-3'>{item.title}</h5>
                    <p>{item.desc}</p>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
     </section>

     <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2>Popular Foods</h2>
          </Col>

          <Col lg='12' className='food_category d-flex align-item-center justify-content-center gap-5 '>

            <button className={`all_btn  ${(category) === 'ALL' ? 'foodBtnActive' : ''}`} onClick={()=>setCategory('ALL')} >All</button>


            <button className={`d-flex align-items-center gap-2 ${category==='BURGER' ? 'foodBtnActive' : ''}`} 
            onClick={()=>setCategory('BURGER')}><img src={foodCategoryImg1} alt="" />Burger</button>


            <button className={`d-flex align-items-center gap-2 ${category==='PIZZA' ? 'foodBtnActive' : ''}`} 
          
            onClick={()=>setCategory('PIZZA')}><img src={foodCategoryImg2} alt="" />Pizza</button>


            <button className={`d-flex align-items-center gap-2 ${category==='BREAD' ? 'foodBtnActive' : ''}`}  onClick={()=>setCategory('BREAD')}><img src={foodCategoryImg3} alt="" />Bread</button>
          </Col>
          
        
          
          {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}

        </Row>
      </Container>
     </section>

     <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <img src={whyImg} alt="why-tasty-treat" className='w-100' />
          </Col>


          <Col lg='6' md='6'>
            <div className='why-tasty-treat mt-5'>
              <h2 className='tasty_treat_title mb-4'> Why <span>Tasty Treat?</span></h2>
              <p className='tasty_treat_desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit velit maiores nostrum necessitatibus dignissimos? Odio, eligendi? In, nam. Natus, a! Dolores cupiditate, dolore corrupti quam omnis numquam! Hic, quisquam odit?</p>

              <ListGroup className='mt-5'>
                <ListGroupItem className='border-0 ps-0'>
                  <p className=' choose_us-title d-flex align-item-center gap-2'>
                    <i class='ri-checkbox-circle-line'></i>
                  Fresh and Tasty foods</p>
                  <p className='choose_us-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, possimus.</p>
                </ListGroupItem>


                <ListGroupItem className='border-0 ps-0'>
                  <p className=' choose_us-title d-flex align-item-center gap-2'>
                    <i class='ri-checkbox-circle-line'></i>
                  Quality support foods</p>
                  <p className='choose_us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, optio.
                  </p>
                </ListGroupItem>


                <ListGroupItem className='border-0 ps-0'>
                  <p className=' choose_us-title d-flex align-item-center gap-2'>
                    <i class='ri-checkbox-circle-line'></i>
                  Order from any location{" "}
                  
                  </p>
                  <p className='choose_us-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, deserunt.</p>
                </ListGroupItem>
                
              </ListGroup>
            </div>
          </Col>  
        </Row>
      </Container>
     </section>

     <section className='pt-0'>
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-3' >
            <h2>hot Pizza</h2>
          </Col>

            {
              hotPizza.map(item => (
                <Col lg='3' md='4' key={item.id}>
                  <ProductCard item={item}/>
                </Col>
              ))
            }

        </Row>
      </Container>
     </section>

     <section>
      <Container>
        <Row className='mt-5'>
          
          <Col lg='6' md='6'>
            <div className='testimonial '>
              <h5 className='testimonial_subtitle mb-4'>Testimonial</h5>
              <h2 className='testimonial_title mb-4'>What Our <span>customers</span>are saying</h2>
              <p className='testimonia_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo tempora sit deserunt vel dolorum quis praesentium cupiditate sequi earum?</p>

              <TestimonialSlider/>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <img src={networkImg} alt=" testimonial-img" className='w-100 ' />
          </Col>
        </Row>
      </Container>
     </section>
     </div>
  )
}

export default Home
