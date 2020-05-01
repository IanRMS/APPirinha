import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { list_by_category } from "../../actions/cocktailsActions";
import { Container, Content, Header, Item, ItemImage, List } from "./styles";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { lemon } from "../../utils/colors";

function CategoryItens() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { category, listByCategory } = useSelector(
    (state) => state.cocktailsReducer
  );

  useEffect(() => {
    if (!category) {
      history.push("/categories");
    }
  }, [category, history]);

  useEffect(() => {
    dispatch(list_by_category(category));
  }, [dispatch, category]);
  return (
    <Container>
      <Content>
        <Header>
          <Link to={"/categories"}>
            <FaRegArrowAltCircleLeft size={30} color={lemon} />
          </Link>
          <span>{category}</span>
        </Header>
        <List>
          {listByCategory &&
            listByCategory.map((item) => (
              <Item key={item.idDrink}>
                <Link
                  style={{ display: "flex", alignItems: "center" }}
                  to={`/drink/${item.idDrink}`}
                >
                  <ItemImage src={item.strDrinkThumb} />
                  <span>{item.strDrink}</span>
                </Link>
              </Item>
            ))}
        </List>
      </Content>
    </Container>
  );
}

export default CategoryItens;
