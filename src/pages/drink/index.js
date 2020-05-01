import React from "react";
import { Link } from "react-router-dom";
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
import { useSelector } from "react-redux";

function Drink() {
  const { drink } = useSelector((state) => state.cocktailsReducer);
  return (
    <Container>
      <Content>
        <Header>
          <Link to="/categories/filter-category">
            <FaRegArrowAltCircleLeft size={30} color={blue} />
          </Link>
          <span>{drink.strDrink}</span>
        </Header>
        <DrinkContent>
          <DrinkImage src={drink.strDrinkThumb} alt="thumb" />
          <Column>
            <Property>
              <PropertyTitle>Category:</PropertyTitle>
              <span>{drink.strCategory}</span>
            </Property>
            <Property>
              <PropertyTitle>Glass:</PropertyTitle>
              <span>{drink.strGlass}</span>
            </Property>
            <Property>
              <PropertyTitle>Is alcoholic?:</PropertyTitle>
              <span>{drink.strAlcoholic}</span>
            </Property>
            <Property>
              <PropertyTitle>Instructions:</PropertyTitle>
              <span>{drink.strInstructions}</span>
            </Property>
          </Column>
        </DrinkContent>
      </Content>
    </Container>
  );
}

export default Drink;
