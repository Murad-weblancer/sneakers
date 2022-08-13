import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Category } from "../components/Category/Category";
import { Pagination } from "../components/Pagination/Pagination";
import { Shoes } from "../components/Shoes/Shoes";
import { Skeleton } from "../components/Skeleton/Skeleton";
import { fetchShoes } from "../redux/slices/shoesSlice";
import qs from "qs";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();
  const { items,status } = useSelector((state) => state.shoes);
  const {categoryId,searchValue,page} = useSelector(state=>state.filter)
  const navigate = useNavigate()

  useEffect(() => {
    const axiosShoes = async () => {
      dispatch(fetchShoes({
        categoryId,
        searchValue,
        page
      }));
    };
    axiosShoes();
  }, [categoryId,searchValue,page]);

  useEffect(()=>{
    const urlShoes = qs.stringify({
      categoryId,searchValue,page
    })
    navigate(`?${urlShoes}`)
  },[categoryId,searchValue,page])
  return (
    <>
    <Category/>
      <div className="shoes-wrapper">

        {
          status ?<Skeleton/>: (
            items.map((obj, i) => (
              <Shoes key={i} {...obj} />
            ))
          )
        }


      </div>
      <Pagination/>
    </>
  );
};
