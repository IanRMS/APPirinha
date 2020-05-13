import React from "react";
import { LoadingContainer } from "./styles";
import { FaGlassMartini } from "react-icons/fa";

function Loading({ message }) {
  return (
    <LoadingContainer>
      <FaGlassMartini color="#fafafa" size={56} />
      <span>{message || "Loading request..."}</span>
    </LoadingContainer>
  );
}

export default Loading;
