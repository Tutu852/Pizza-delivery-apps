import React from 'react'
import { Routes,Route,Navigate} from 'react-router-dom';

import Home from '../pages/Home'
import Allfood from '../pages/Allfoods'
import FoodDetails from '../pages/FoodDetails'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Contacts from '../pages/Contacts'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Routers = () => {
  return (
   <Routes>
        <Route path= '/' element={<Navigate to='/home'/>}/>
        <Route path= '/home' element={<Home/>}/>
        <Route path= '/food' element={<Allfood/>}/>
        <Route path= '/foodid' element={<FoodDetails/>}/>
        <Route path= '/cart' element={<Cart/>}/>
        <Route path= '/checkout' element={<Checkout/>}/>
        <Route path= '/login' element={<Login/>}/>
        <Route path= '/register' element={<Register/>}/>
        <Route path= '/contacts' element={<Contacts/>}/>

   </Routes>
  )
}

export default Routers
