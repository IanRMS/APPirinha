import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { get_categories, set_category } from "../../actions/cocktailsActions";
import { Container, Content, Header } from "./styles";
import CategoryOption from "./category";
import { pink } from "../../utils/colors";

function Categories() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.cocktailsReducer);
  useEffect(() => {
    dispatch(get_categories());
  }, [dispatch]);
  return (
    <Container>
      <Content>
        <Header>
          <Link to={"/"}>
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
    </Container>
  );
}

export default Categories;
