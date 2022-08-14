import React from 'react'
import { decriment, increment, removeFavorite, removeProduct, selectFavorite } from '../../redux/slices/cartSlice';
import { useDispatch, useSelector } from "react-redux";
import { getSingle } from '../../redux/slices/filterSlice';
import { useNavigate } from "react-router-dom";

export const CartItem = ({ title, imageUrl, price, id }) => {
    const { favorites, products } = useSelector((state) => state.cart);
    const countProduct = products.find(obj=>obj.id === id)
    const someFave = favorites.some((obj) => obj.id === id);
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const addToFavorite = () => {
        if (someFave) {
          dispatch(removeFavorite(id));
        } else {
          const favorite = { title, imageUrl, price, id };
          dispatch(selectFavorite(favorite));
        }
      };

      const goToSingle = () => {
        const favorite = { title, imageUrl, price, id };
        dispatch(getSingle(favorite))
        navigate('/single')
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

      <img src="img/btn-remove.svg" alt="" className='remove' onClick={()=>dispatch(removeProduct(id))} />

      <img src={imageUrl} alt="" className="shoes-img" onClick={goToSingle} />
      <h3>{title}</h3>
      <div className="shoes-bottom">
        <div className="shoes-bottom-price">
          <span>ЦЕНА</span>
          <b>{price}</b>
        </div>
        <div className='shoes-bottom-count'>
                <span className='minus' onClick={()=>dispatch(decriment(id))}>-</span>
                <span>{countProduct.count  }</span>
                <span className='plus' onClick={()=>dispatch(increment(id))}>+</span>
        </div>
      </div>
    </div>
  )
}
