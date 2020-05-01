import styled from "styled-components";
import { background, clearBackground, white } from "../../utils/colors";

export const TabContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0px;
  right: 0px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  height: 64px;
  background: ${background};
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.4);
  padding: 0px 8px;
  justify-content: space-between;

  @media (min-width: 426px) {
    display: none;
  }
`;

export const TabItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  justify-content: center;
  align-items: center;
  width: 75px;
  background: ${(props) => (props.pathname ? clearBackground : background)};

  span {
    color: ${white};
    margin-top: 4px;
    font-size: 14px;
  }
`;
