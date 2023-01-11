import React from 'react'
import { Container,Row,Col,ListGroup,ListGroupItem} from 'reactstrap';
import logo from "../../assets/images/res-logo.png";

import '../../styles/footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className="logo footer_logo text-start">
              <img src={logo} alt="logo" />
              <h5 className='mt-1'>Tasty Treat</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, ratione!</p>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer_title'>Delivery time</h5>
            <ListGroup className='delivery_time-list' >
              <ListGroupItem className='delivery_time-item border-0 ps-0'>
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className='delivery_time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>

          <h5 className='footer_title'>Contact</h5>
            <ListGroup className='delivery_time-list' >
              <ListGroupItem className='delivery_time-item border-0 ps-0'>
                <span>Location : sr.nagar ,Hyderabad pin-500038,india</span> 
              </ListGroupItem>
              <ListGroupItem className='delivery_time-item border-0 ps-0'>
                <span>Phone : +91-8249607661</span> 
              </ListGroupItem>

              <ListGroupItem className='delivery_time-item border-0 ps-0'>
                <span>Email: 852tutukumar@gmail.com</span>
               
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className="footer_title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder='Enter Your Email' />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className='footer_data'>
          <Col lg="6" md="6">
            <p>Copyright - 2022, website made by Rajesh kumar Behera. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
