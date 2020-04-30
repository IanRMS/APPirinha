import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { get_categories } from "../../actions/cocktailsActions";

function Categories() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_categories());
  }, [dispatch]);
  return (
    <div>
      <h1>Categories</h1>
    </div>
  );
}

export default Categories;
