import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { FaHome, FaFilter, FaSearch, FaGlassMartiniAlt } from "react-icons/fa";

import { NavContainer, NavOption } from "./styles";
import { black, clearBackground } from "../../utils/colors";
import { random_drink } from "../../actions/cocktailsActions";

function NavOptions() {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const [selected, setSelected] = useState(false);
  const { randomId } = useSelector((state) => state.cocktailsReducer);

  function handle_random() {
    setSelected(true);
    dispatch(random_drink());
  }

  useEffect(() => {
    if (randomId && selected) history.push(`/drink/${randomId}`);
  }, [randomId, history, selected]);

  if (location.pathname !== "/") {
    return (
      <NavContainer>
        <NavOption onClick={() => history.push("/")}>
          <FaHome size={24} color={clearBackground} />
        </NavOption>
        <NavOption
          onClick={() => history.push("/categories")}
          disabled={location.pathname === "/categories"}
        >
          <FaFilter
            size={24}
            color={
              location.pathname === "/categories" ? black : clearBackground
            }
          />
        </NavOption>
        <NavOption
          onClick={() => history.push("/search")}
          disabled={location.pathname === "/search"}
        >
          <FaSearch
            size={24}
            color={location.pathname === "/search" ? black : clearBackground}
          />
        </NavOption>
        <NavOption onClick={() => handle_random()}>
          <FaGlassMartiniAlt size={24} color={clearBackground} />
        </NavOption>
      </NavContainer>
    );
  } else {
    return null;
  }
}

export default NavOptions;
