import styled from "styled-components";
import { background, clearBackground, white, pink } from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  background-color: ${background};
  justify-content: center;
  align-items: flex-start;
`;

export const Header = styled.div`
  margin-top: 40px;
  width: 90%;
  border-bottom: 1px solid ${pink};
  padding: 8px 0px;
  margin-bottom: 10px;

  span {
    font-size: calc(100% + 1.3vw);
    color: ${pink};
    margin-left: 10px;
  }
`;

export const Category = styled.button`
  outline: none;
  border: none;
  border-radius: 3px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${clearBackground};
  flex-direction: row;
  margin: 10px;
  padding: 12px;
  cursor: pointer;
  transition: 0.3s;
  width: 180px;
  height: 150px;

  @media (max-width: 375px) {
    width: 145px;
    height: 145px;
    margin: 5px;
  }

  span {
    color: ${white};
    font-size: calc(100% + 0.6vw);
    font-weight: 700;
  }

  :hover {
    transform: scale(1.06);
    background: ${pink};
  }
`;

export const Content = styled.section`
  display: flex;
  width: 100%;
  max-width: 768px;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 425px) {
    padding-bottom: 70px;
  }
`;
