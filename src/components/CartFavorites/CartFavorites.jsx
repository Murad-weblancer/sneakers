import React, { useState } from "react";
import "./Favorites.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, removeFavorite, removeProduct } from "../../redux/slices/cartSlice";
import { getSingle } from "../../redux/slices/filterSlice";
import { useNavigate } from "react-router-dom";


export const CartFavorites = ({ title, imageUrl, price, id }) => {
  const { products } = useSelector((state) => state.cart);
  const someProduct = products.some(obj=>obj.id === id)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const addToCart = () => {
    if(someProduct){
        dispatch(removeProduct(id))
    }else{
        const prduct = { title, imageUrl, price, id };
        dispatch(getProduct(prduct))
    }
  }
  const goToSingle = () => {
    const prduct = { title, imageUrl, price, id };
    dispatch(getSingle(prduct))
    navigate('/single')
  }
  return (
    <div className="shoes">
      <div>
        <img src="img/liked.svg" alt="" className="shoes-love" onClick={()=>dispatch(removeFavorite(id))} />
      </div>

      <img src={imageUrl} alt="" className="shoes-img" onClick={goToSingle}/>
      <h3>{title}</h3>
      <div className="shoes-bottom">
        <div className="shoes-bottom-price">
          <span>ЦЕНА</span>
          <b>{price}</b>
        </div>
        <button onClick={addToCart}>
          <img src={someProduct ? 'img/btn-checked.svg':'img/btn-plus.svg'} alt="" />
        </button>
      </div>
    </div>
  );
};
