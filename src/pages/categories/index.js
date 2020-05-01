import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { get_categories } from "../../actions/cocktailsActions";
import { Container, Content } from "./styles";
import CategoryOption from "./category";

function Categories() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { categories } = useSelector((state) => state.cocktailsReducer);
  useEffect(() => {
    dispatch(get_categories());
  }, [dispatch]);
  return (
    <Container>
      <Content>
        {categories.map((item, i) => (
          <CategoryOption
            key={i}
            title={item.strCategory}
            nav={() =>
              history.push(`/category/${item.strCategory.toLowerCase()}`)
            }
          />
        ))}
      </Content>
    </Container>
  );
}

export default Categories;
