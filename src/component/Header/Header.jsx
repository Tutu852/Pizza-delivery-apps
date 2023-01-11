import React ,{useRef,useEffect} from 'react'

import { Container } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import { NavLink , Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { cartUiActions } from '../../store/shopping_cart/cartUiSlice';


import '../../styles/header.css'


const nav_Links =[
  {
    display:'Home',
    path : '/home'
  },
  {
    display:'Food',
    path : '/food'
  },
  {
    display:'Cart',
    path : '/cart'
  },
  {
    display:'Contacts',
    path : '/contacts'
  },
   
]

const Header = () => {

  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity );

  const dispatch = useDispatch()

  const togglemenu = ()=> menuRef.current.classList.toggle('show_menu');

  const toggleCart = ()=>{
    dispatch(cartUiActions.toggle())
  }; 

  useEffect(()=>{

    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('header_shrink');
      }else{
        headerRef.current.classList.remove('header_shrink');
      }
     
    })
 
  },[])

  
  return (
    <header className='header' ref={headerRef} > 
    {/* container we can write on header classname also  */}
      <Container > 
        <div className='nav_wrapper d-flex align-items-center justify-content-between'>
          <div className='logo'>
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>

        {/* ===== menu =====*/}
  
      <div className="navigation" ref={menuRef} onClick={togglemenu}>
        <div className="menu d-flex align-items-center gap-5 ">

          {
            nav_Links.map((item,index)=>(
              <NavLink
              
              to={item.path} key={index} 
              
              className={navlass => 
                navlass.isActive ? "active_menu" : "" }
              
              >{item.display}</NavLink>
            ))
          }
          </div>
        </div>

          {/* =======nav right icons ========*/}

          <div className='nav_right d-flex align-items-center gap-4'>
            <span className="cart_icon" onClick={toggleCart}>
              <i class="ri-shopping-basket-line"></i>
              <span className="cart_badge">{totalQuantity}</span>
            </span>
              <span className="user">
                <Link to='/login'><i class='ri-user-line'></i></Link>
              </span>
              <span className="mobile_menu" onClick={togglemenu}>
                  <i class="ri-menu-line"></i>
              </span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header

