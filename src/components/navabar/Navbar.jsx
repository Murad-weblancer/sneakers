import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from '../Search/Search'
import './Navbar.scss'
import { useSelector } from "react-redux";
export const Navbar = () => {
  const {totalPrice} = useSelector(state=>state.cart)
  return (
    <nav className='navbar'>
      <Link to='/'>
        <div className='navbar-logo'> 
          <img src="img/logo.png" alt="" />
          <div className='navbar-span'>
              <h1>REACT SNEAKERS</h1>
              <span>Магазин лучших кроссовок</span>
          </div>
        </div>
      </Link>
      <Search/>
      <div className='navbar-right'>

        <Link to='/cart'>
            <img src="img/cart.svg" alt="" />
        </Link>
            <span>{totalPrice} руб.</span>
          <Link to='/favorite'>
            <img src="img/heart.svg" alt="" />
          </Link>
      </div>
    </nav>
  )
}
