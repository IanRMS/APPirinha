import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { list_by_category } from "../../actions/cocktailsActions";
import {
  Container,
  Content,
  Header,
  Item,
  ItemImage,
  List,
  BackButton,
} from "./styles";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { lemon } from "../../utils/colors";

function CategoryItens() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { category, listByCategory } = useSelector(
    (state) => state.cocktailsReducer
  );

  useEffect(() => {
    dispatch(list_by_category(category));
  }, [dispatch, category]);
  return (
    <Container>
      <Content>
        <Header>
          <BackButton
            onClick={() => {
              history.goBack();
            }}
          >
            <FaRegArrowAltCircleLeft size={30} color={lemon} />
          </BackButton>
          <span>{category}</span>
        </Header>
        <List>
          {listByCategory &&
            listByCategory.map((item) => (
              <Item key={item.idDrink}>
                <ItemImage src={item.strDrinkThumb} />
                <span>{item.strDrink}</span>
              </Item>
            ))}
        </List>
      </Content>
    </Container>
  );
}

export default CategoryItens;
