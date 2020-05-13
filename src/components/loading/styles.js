import styled from "styled-components";

export const LoadingContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  flex-direction: column;

  > span {
    color: #fafafa;
    font-size: 28px;
    margin-top: 15px;
  }
`;
