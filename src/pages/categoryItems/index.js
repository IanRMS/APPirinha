import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listByCategory } from "../../actions/cocktailsActions";

function CategoryItens() {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.cocktailsReducer);

  useEffect(() => {
    dispatch(listByCategory(category));
  }, [dispatch, category]);
  return <h1>{category}</h1>;
}

export default CategoryItens;
