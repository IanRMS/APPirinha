import styled from "styled-components";
import { background, lemon, white, clearBackground } from "../../utils/colors";
import backgroundImage from "../../utils/imgs/background.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background: ${background};
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  background-image: url(${backgroundImage});
  justify-content: center;
  align-items: center;
  /* border-right: 2px solid ${lemon}; */

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    border: none;
  }
`;

export const DescContainer = styled.div`
  width: 100%;
  min-width: 318px;
  max-width: 450px;
  text-align: center;
`;

export const Desc = styled.span`
  font-weight: "bold";
  color: ${white};
  font-size: calc(100% + 0.8vw);
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  background-color: ${clearBackground};
  padding: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 90%;
  max-width: 460px;
`;

export const Option = styled.button`
  margin: 15px 0px;
  width: 98%;
  max-width: ${(props) => (props.mobile ? 320 : 400)}px;
  height: 66px;
  background-color: ${clearBackground};
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 2px;
  transition: 0.3s;
  justify-content: space-between;
  outline: none;
  border: none;

  span {
    color: ${white};
    font-size: calc(100% + 0.6vw);
    font-family: "Dosis";
  }
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const OptionsMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;

  @media (min-width: 769px) {
    display: none;
  }
`;
