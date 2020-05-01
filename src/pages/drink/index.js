import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
} from "./styles";
import { blue } from "../../utils/colors";
import { useSelector, useDispatch } from "react-redux";
import { select_drink } from "../../actions/cocktailsActions";

function Drink() {
  const dispatch = useDispatch();
  const selectedDrink = useSelector((state) => state.cocktailsReducer.drink);
  const { category } = useSelector((state) => state.cocktailsReducer);
  let { drink } = useParams();

  useEffect(() => {
    dispatch(select_drink(drink));
  }, [dispatch, drink]);
  return (
    <Container>
      {selectedDrink && (
        <Content>
          <Header>
            <Link to={category ? "/categories/filter-category" : "/categories"}>
              <FaRegArrowAltCircleLeft size={30} color={blue} />
            </Link>
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
                <PropertyTitle>Is alcoholic?:</PropertyTitle>
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
