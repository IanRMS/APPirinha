import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Category } from "./styles";
import { white } from "../../utils/colors";

function CategoryOption(props) {
  return (
    <Category onClick={props.nav}>
      <span>{props.title}</span>
      <FaRegArrowAltCircleRight color={white} size={26} />
    </Category>
  );
}

export default CategoryOption;
