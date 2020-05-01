import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_categories, set_category } from "../../actions/cocktailsActions";
import { Container, Content } from "./styles";
import CategoryOption from "./category";

function Categories() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.cocktailsReducer);
  useEffect(() => {
    dispatch(get_categories());
  }, [dispatch]);
  return (
    <Container>
      <Content>
        {categories.map((item, i) => (
          <CategoryOption
            action={() => dispatch(set_category(item.strCategory))}
            key={i}
            title={item.strCategory}
            nav="/categories/filter-category"
          />
        ))}
      </Content>
    </Container>
  );
}

export default Categories;
