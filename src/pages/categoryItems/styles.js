import styled from "styled-components";
import { background, lemon, white, clearBackground } from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  background-color: ${background};
  justify-content: center;
  align-items: center;
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
  margin-top: 40px;
`;
export const BackButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  transition: 0.3s;

  :hover {
    transform: scale(1.1);
  }
`;

export const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid ${lemon};
  padding: 8px 0px;

  span {
    font-size: calc(100% + 1.3vw);
    color: ${lemon};
    margin-left: 10px;
  }
`;

export const List = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;

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
