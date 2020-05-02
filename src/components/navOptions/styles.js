import styled from "styled-components";
import { blue, gray } from "../../utils/colors";

export const NavContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    top: 20px;
    left: 16px;
  }

  @media (max-width: 425px) {
    display: none;
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 16px;
  }
`;

export const NavOption = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background: ${(props) => (props.disabled ? gray : blue)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.4);
  transition: 0.3s;
  margin: 10px 0px;
  width: 48px;
  height: 48px;

  :hover {
    transform: scale(1.1);
  }
`;