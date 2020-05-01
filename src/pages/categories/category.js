import React from "react";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Category } from "./styles";
import { white } from "../../utils/colors";

function CategoryOption(props) {
  return (
    <Link to={props.nav}>
      <Category onClick={props.action}>
        <span>{props.title}</span>
        <FaRegArrowAltCircleRight color={white} size={26} />
      </Category>
    </Link>
  );
}

export default CategoryOption;
