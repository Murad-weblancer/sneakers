import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartFavorites } from "../components/CartFavorites/CartFavorites";

export const Favorite = () => {
  const { favorites } = useSelector((state) => state.cart);
  return (
    <>
      <h1 style={{ marginTop: "40px" }}> Мои закладки </h1>
      {favorites.length > 0 ? (
        <div>
          <div className="shoes-wrapper">
            {favorites.map((obj, i) => (
              <CartFavorites key={i} {...obj} />
            ))}
          </div>
        </div>
      ) : (
        <div className="empty-favorite">
          <h1>Закладок нет </h1>
          <Link to='/'>
            <button>Вернуться назад</button>
          </Link>
        </div>
      )}
    </>
  );
};
