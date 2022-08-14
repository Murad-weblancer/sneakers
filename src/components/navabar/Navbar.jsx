import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Search } from "../Search/Search";
import "./Navbar.scss";
import { useSelector } from "react-redux";
export const Navbar = () => {
  const { totalPrice, products, favorites } = useSelector(
    (state) => state.cart
  );
  const loaction = useLocation();
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="navbar-logo">
          <img src="img/logo.png" alt="" />
          <div className="navbar-span">
            <h1>REACT SNEAKERS</h1>
            <span>Магазин лучших кроссовок</span>
          </div>
        </div>
      </Link>
      <Search />
      <div className="navbar-right">
        {loaction.pathname !==
          "/cart" ?(
            <>
              <div className="navbar-right-cart">
                <Link to="/cart">
                  <img src="img/cart.svg" alt="" />
                </Link>
                <span>{products.length}</span>
              </div>
              <span>{totalPrice} руб.</span>
            </>
          ):null}

        <div className="navbar-right-favorite">
          <Link to="/favorite">
            <img src="img/heart.svg" alt="" />
          </Link>
          <span>{favorites.length}</span>
        </div>
      </div>
    </nav>
  );
};
