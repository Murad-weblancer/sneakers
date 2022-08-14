import { some } from "lodash";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, removeFavorite, removeProduct, selectFavorite } from "../redux/slices/cartSlice";

export const SinglePage = () => {
  const { singlePage } = useSelector((state) => state.filter);
  const { favorites,products } = useSelector((state) => state.cart);
  const somefave = favorites.some(obj=>obj.id === singlePage.id)
  const someproduct = products.some(obj=>obj.id === singlePage.id)
  const dispatch = useDispatch()

  const addToFavorite = () => {
    if(somefave){
      dispatch(removeFavorite(singlePage.id))
    }else{
      dispatch(selectFavorite(singlePage))
    }
  }
  const addProducts = () => {
    if(someproduct){
      dispatch(removeProduct(singlePage.id))
    }else{
      dispatch(getProduct(singlePage))
    }
  }


  return (
    <div>
      <h1>О Кроссовках</h1>
      <div className="shoes">
        <div>
          <img src={somefave ? "img/liked.svg" : "img/unliked.svg"} onClick={addToFavorite} alt="" className="shoes-love" />
        </div>

        <img src={singlePage.imageUrl} alt="" className="shoes-img" />
        <h3>{singlePage.title}</h3>
        <div className="shoes-bottom">
          <div className="shoes-bottom-price">
            <span>ЦЕНА</span>
            <b>{singlePage.price}</b>
          </div>
          <button>
            <img src={someproduct ? 'img/btn-checked.svg': 'img/btn-plus.svg'} alt="" onClick={addProducts} />
          </button>
        </div>
      </div>
    </div>
  );
};
