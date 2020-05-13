import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

import {
  Container,
  Content,
  Header,
  DrinkContent,
  Column,
  Property,
  PropertyTitle,
  DrinkImage,
  BackButton,
  IngredientsWrapper,
} from "./styles";
import { blue } from "../../utils/colors";
import { select_drink } from "../../actions/cocktailsActions";
import Loading from "../../components/loading";
import * as types from "../../actions/actionTypes";

function Drink() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading } = useSelector((state) => state.cocktailsReducer);
  const selectedDrink = useSelector((state) => state.cocktailsReducer.drink);
  let { drink } = useParams();
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    dispatch(select_drink(drink));
    setIngredients([]);
  }, [dispatch, drink]);

  useEffect(() => {
    if (selectedDrink) {
      for (let index = 1; index <= 15; index++) {
        if (selectedDrink["strIngredient" + index]) {
          setIngredients((ingredients) => [
            ...ingredients,
            selectedDrink["strIngredient" + index],
          ]);
        }
      }
    }
  }, [selectedDrink]);

  return (
    <Container>
      {loading && <Loading message="Loading drink..." />}
      {selectedDrink && (
        <Content>
          <Header>
            <BackButton
              onClick={() => {
                history.goBack();
                dispatch({ type: types.SELECT_DRINK, payload: null });
              }}
            >
              <FaRegArrowAltCircleLeft size={30} color={blue} />
            </BackButton>
            <span>{selectedDrink.strDrink}</span>
          </Header>
          <DrinkContent>
            <DrinkImage src={selectedDrink.strDrinkThumb} alt="thumb" />
            <Column>
              <Property>
                <PropertyTitle>Category:</PropertyTitle>
                <span>{selectedDrink.strCategory}</span>
              </Property>
              <Property>
                <PropertyTitle>Glass:</PropertyTitle>
                <span>{selectedDrink.strGlass}</span>
              </Property>
              <Property>
                <PropertyTitle>Type:</PropertyTitle>
                <span>{selectedDrink.strAlcoholic}</span>
              </Property>
              <Property style={{ flexDirection: "column" }}>
                <PropertyTitle>Instructions:</PropertyTitle>
                <span>{selectedDrink.strInstructions}</span>
              </Property>
              <Property style={{ flexDirection: "column" }}>
                <PropertyTitle>Ingredients:</PropertyTitle>
                <IngredientsWrapper>
                  {ingredients.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </IngredientsWrapper>
              </Property>
            </Column>
          </DrinkContent>
        </Content>
      )}
    </Container>
  );
}

export default Drink;
