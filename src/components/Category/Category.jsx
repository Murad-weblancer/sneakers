import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { getCategory } from "../../redux/slices/filterSlice";
import "./Category.scss";
export const Category = () => {
  const listCategory = [ "All", "A", "B", "C", "D", "E", "F", "G"];
  const dispatch = useDispatch()
  const {categoryId} = useSelector(state=>state.filter)
  return (
    <ul className="category">
      {listCategory.map((obj, i) => (
        <li key={i} className={categoryId === i ? 'active' : ''} onClick={()=>dispatch(getCategory(i))} > {obj} </li>
      ))}
    </ul>
  );
};
