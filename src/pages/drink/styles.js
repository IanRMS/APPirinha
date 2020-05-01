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
  padding-top: 20px;
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
`;

export const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid ${blue};
  padding: 8px 0px;

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
  margin-top: 10px;

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
