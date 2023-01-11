


import React from 'react'
import { ListGroupItem } from 'reactstrap'
import productImg from '../../../assets/images/product_01.1.jpg'

import '../../../styles/cartitem.css'; 

import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping_cart/cartSlice';

const Cartitem = ({item}) => {

    const {id,title,price,image01,quantity,totalPrice} = item;


    const dispatch = useDispatch()

    const incrementItem = ()=> {
        dispatch(cartActions.addItem({
            id,
            title,
            price,
            image01
        }))
    };

    const decrementItem =()=>{
        dispatch(cartActions.removeItem(id))
    };
    const deleteItem = ()=>{
        dispatch(cartActions.deleteItem(id))
    }
  return (
    <ListGroupItem   className="border-0 cart_item">
        <div className="cart_item-info d-flex gap-2 ">
            <img src={image01 } alt="product-img" />

            <div className='cart_product-info w-100 d-flex align-item-center gap-5  justify-content-between'>
                <div>
                 <h6 className='cart_product-title'>{title}</h6>

                    <p className='d-flex align-items-center gap-5 cart_product-price'>{quantity}x <span className='product_price'>
                        
                        <i class="bi bi-currency-rupee"></i>{totalPrice}</span>
                    
                    </p>
                    <div className='d-flex align-items-center justify-content-between increase_decrease-btn'>

                        <span className='increase_btn' onClick={incrementItem}>
                            <i class='ri-add-line'></i>
                        </span>
                        <span className='quantity'>{quantity}</span>
                        <span className='decrease_btn' onClick={decrementItem}>
                            <i class="ri-subtract-line"></i>
                        </span>
                    </div>
                </div> 

                <span className='delete_btn' onClick={deleteItem}><i class='ri-close-line'></i></span>
            </div>
        </div>
    </ListGroupItem>
  )
}

export default Cartitem
