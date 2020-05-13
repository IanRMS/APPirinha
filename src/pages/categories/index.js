import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

import { get_categories, set_category } from "../../actions/cocktailsActions";
import { Container, Content, Header } from "./styles";
import CategoryOption from "./category";
import { pink } from "../../utils/colors";
import Loading from "../../components/loading";
import * as types from "../../actions/actionTypes";

function Categories() {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector(
    (state) => state.cocktailsReducer
  );
  useEffect(() => {
    dispatch(get_categories());
  }, [dispatch]);
  return (
    <Container>
      {loading ? (
        <Loading message="Loading categories" />
      ) : (
        <Content>
          <Header>
            <Link
              to={"/"}
              onClick={() =>
                dispatch({ type: types.LIST_CATEGORIES, payload: [] })
              }
            >
              <FaRegArrowAltCircleLeft size={30} color={pink} />
            </Link>
            <span>Categories</span>
          </Header>
          {categories.map((item, i) => (
            <CategoryOption
              action={() => dispatch(set_category(item.strCategory))}
              key={i}
              title={item.strCategory}
              nav="/categories/filter-category"
            />
          ))}
        </Content>
      )}
    </Container>
  );
}

export default Categories;
