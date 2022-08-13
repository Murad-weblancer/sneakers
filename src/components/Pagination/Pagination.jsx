import React from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from "react-redux";
import { getPage } from '../../redux/slices/filterSlice';
import './Pagination.scss'

import './Pagination'
export const Pagination = () => {
    const dispatch = useDispatch()
    const {page} = useSelector(state=>state.filter)
  return (
    <ReactPaginate
    className='root'
    breakLabel="..."
    nextLabel=">"
    onPageChange={e=>dispatch(getPage(e.selected+1))}
    pageRangeDisplayed={5}
    pageCount={10}
    previousLabel="<"
    forcePage={page-1}
    renderOnZeroPageCount={null}
  />
  )
}
