import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProduct, getSingleCart, removeFavorite, removeProduct, selectFavorite } from "../../redux/slices/cartSlice";

import "./Shoes.scss";
export const Shoes = ({ title, imageUrl, price, id }) => {
  const { favorites,products } = useSelector((state) => state.cart);
  const someFave = favorites.some((obj) => obj.id === id);
  const someProduct = products.some(obj=>obj.id === id)
  const dispatch = useDispatch();
  console.log(someProduct);
  const navigate = useNavigate()

  const addToFavorite = () => {
    if (someFave) {
      dispatch(removeFavorite(id));
    } else {
      const favorite = { title, imageUrl, price, id };
      dispatch(selectFavorite(favorite));
    }
  };
  const addToCart = () => {
    if(someProduct){
        dispatch(removeProduct(id))
    }else{
        const prduct = { title, imageUrl, price, id };
        dispatch(getProduct(prduct))
    }
  }


  return (
    <div className="shoes">
      <div onClick={addToFavorite}>
        <img
          src={someFave ? "img/liked.svg" : "img/unliked.svg"}
          alt=""
          className="shoes-love"
        />
      </div>

      <img src={imageUrl} alt="" className="shoes-img" />
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
