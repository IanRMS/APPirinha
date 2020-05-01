import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
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
} from "./styles";
import { blue } from "../../utils/colors";
import { useSelector, useDispatch } from "react-redux";
import { select_drink } from "../../actions/cocktailsActions";

function Drink() {
  const dispatch = useDispatch();
  const history = useHistory();
  const selectedDrink = useSelector((state) => state.cocktailsReducer.drink);
  let { drink } = useParams();

  useEffect(() => {
    dispatch(select_drink(drink));
  }, [dispatch, drink]);
  return (
    <Container>
      {selectedDrink && (
        <Content>
          <Header>
            <BackButton onClick={() => history.goBack()}>
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
              <Property>
                <PropertyTitle>Instructions:</PropertyTitle>
                <span>{selectedDrink.strInstructions}</span>
              </Property>
            </Column>
          </DrinkContent>
        </Content>
      )}
    </Container>
  );
}

export default Drink;
