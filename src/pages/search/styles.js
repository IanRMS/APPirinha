import styled from "styled-components";
import {
  background,
  yellow,
  lemon,
  clearBackground,
  white,
  gray,
} from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: ${background};
  justify-content: center;
  align-items: flex-start;
`;

export const Content = styled.section`
  display: flex;
  width: 100%;
  max-width: 768px;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  margin-top: 80px;
`;

export const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid ${yellow};
  padding: 8px 0px;

  span {
    font-size: calc(100% + 1.3vw);
    color: ${yellow};
    margin-left: 10px;
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  input {
    width: 100%;
    max-width: 400px;
    height: 52px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 10px 0px 0px 10px;
    padding: 0 24px;
    font-weight: 700;
    font-size: 22px;
    outline: none;
    border: none;
  }

  button {
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    border-radius: 0px 10px 10px 0px;
    border: none;
    outline: none;
    background: ${yellow};
    margin-left: 5px;
    font-size: 22px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.3s;

    :hover {
      transform: scale(1.02);
      background: ${lemon};
    }
  }
`;

export const List = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  width: 48%;
  min-width: 250px;
  max-width: 334px;
  margin: 10px;
  padding: 10px;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
  background-color: ${clearBackground};
  span {
    color: ${white};
    font-size: calc(100% + 0.3vw);
  }
  :hover {
    transform: scale(1.03);

    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 767px) {
    width: 95%;
    margin: 10px 0px;
    max-width: 620px;
  }
`;

export const ItemImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 2px;
  margin-right: 10px;
`;

export const NotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;

  span {
    font-size: calc(100% + 1.6vw);
    color: ${gray};
    margin-top: 5px;
    font-weight: 700;
  }
`;
