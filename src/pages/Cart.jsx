import React from "react";
import { CartItem } from "../components/CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearProducts } from "../redux/slices/cartSlice";

export const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  if (products.length < 1) {
    return (
      <div className="empty-favorite">
        <h1>Покупок нет </h1>
        <Link to="/">
          <button>Вернуться назад</button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1> Мои покупки </h1>
      <div className="shoes-wrapper">
        {products.map((obj, i) => (
          <CartItem key={i} {...obj} />
        ))}
      </div>
      <h2 onClick={()=>dispatch(clearProducts())} style={{ cursor: "pointer" }}>Удалить Корзину</h2>
    </div>
  );
};
