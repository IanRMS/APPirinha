import styled from "styled-components";
import { background, blue, white } from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  background-color: ${background};
  justify-content: center;
  overflow-x: hidden;
`;

export const Content = styled.section`
  display: flex;
  width: 100%;
  max-width: 768px;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  margin-top: 40px;

  @media (max-width: 425px) {
    padding-bottom: 75px;
  }
`;

export const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid ${blue};
  padding: 8px 0px;
  display: flex;
  align-items: center;

  span {
    font-size: calc(100% + 1.3vw);
    color: ${blue};
    margin-left: 10px;
  }
`;

export const DrinkContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${white};

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    margin-left: 0px;
  }
`;

export const Property = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px 0px;

  span {
    font-size: 22px;
  }
`;

export const PropertyTitle = styled.span`
  margin-right: 5px;
  font-weight: bold;
  color: ${white};
`;

export const DrinkImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 520px;
  object-fit: cover;
  border-radius: 4px;
`;

export const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background: none;
  border: none;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    transform: scale(1.02);
  }
`;

export const IngredientsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 5px;
  user-select: none;

  > span {
    min-width: 80px;
    padding: 8px;
    min-height: 70px;
    margin: 5px;
    border-radius: 4px;
    background: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #424242;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
  }
`;
