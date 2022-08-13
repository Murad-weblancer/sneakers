import { getValue } from "../../redux/slices/filterSlice";
import debounce from "lodash.debounce";
import React, { useRef, useCallback,useState } from "react";
import { useDispatch } from "react-redux";
import "./Search.scss";
export const Search = () => {
  const [value, setValue] = useState("");
  const valueRef = useRef();
  const dispatch = useDispatch();

  const deleteValue = () => {
    setValue("");
    dispatch(getValue(''))
    valueRef.current.focus();
  };

  const delaySearchValue = useCallback(
    debounce((str)=>{
        return dispatch(getValue(str))
    },500),[]
  )

  const onChangeValue = (e) => {
    setValue(e.target.value)
    delaySearchValue(e.target.value)
  }
  return (
    <div className="search">
      <input
      ref={valueRef}
        type="text"
        placeholder="Посик обуви"
        className="search-input"
        value={value}
        onChange={onChangeValue}
      />
      {value && (
        <img
          onClick={deleteValue}
          src="img/btn-remove.svg"
          alt=""
          width={20}
          className="search-img"
        />
      )}     
    </div>
  );
};
