


import React from 'react'

import { ListGroup } from 'reactstrap';  
import Cartitem from './Cartitem';
import { Link } from 'react-router-dom';
import '../../../styles/shopping_cart.css';

import { useDispatch, useSelector } from 'react-redux';
import '../../../styles/shopping_cart.css';

import { cartUiActions } from '../../../store/shopping_cart/cartUiSlice';



const Carts = () => {

    const dispatch= useDispatch();
    const cartProducts = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state => state.cart.totalAmount)

    const toggleCart =()=>{
        dispatch(cartUiActions.toggle())
    };

  return (
    
    <div className="cart_container">
        <ListGroup className='cart'>
            <div className='cart_close'>
                <span onClick={toggleCart}>
                    <i class='ri-close-fill'></i>
                </span>
            </div>

            <div className='cart_item-list'>

            {
                cartProducts.length === 0 ? <h5 className='text-center mt-5'>No item added to the cart</h5> : cartProducts.map((item,index) => (<Cartitem item={item} key={index } />))
            }

                
                
            </div>

            <div className='cart_bottom d-flex align-items-center justify-content-between'>
                <h6>Subtotal amount : <span><i class="bi bi-currency-rupee"></i>{totalAmount}</span></h6>
                <button className='cart-buttom-click'><Link to='/cart'> CheckOut</Link></button>
            </div>
        </ListGroup>
    </div>
  )
}

export default Carts
