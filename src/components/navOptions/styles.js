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
  position: relative;

  > span {
    position: absolute;
    font-size: 17px;
    left: 54px;
    color: #fafafa;
    opacity: 0;
    overflow: hidden;
    transition: 180ms ease-in-out;
    width: 100px;
    height: 48px;
    text-align: left;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      left: -105px;
      text-align: right;
    }
  }

  :hover {
    transform: scale(1.1);
    > span {
      opacity: 1;
    }
  }
`;
