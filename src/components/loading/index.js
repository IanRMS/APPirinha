import React from "react";
import { LoadingContainer } from "./styles";

function Loading({ message }) {
  return (
    <LoadingContainer>
      <span>{message || "Loading request..."}</span>
    </LoadingContainer>
  );
}

export default Loading;
