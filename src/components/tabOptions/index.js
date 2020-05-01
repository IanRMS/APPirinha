import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { TabContainer, TabItem } from "./styles";
import { FaHome, FaFilter, FaSearch, FaGlassMartiniAlt } from "react-icons/fa";
import { white } from "../../utils/colors";
import { random_drink } from "../../actions/cocktailsActions";

function TabOptions() {
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
      <TabContainer>
        <TabItem onClick={() => history.push("/")}>
          <FaHome size={20} color={white} />
          <span>Home</span>
        </TabItem>
        <TabItem
          pathname={location.pathname === "/categories"}
          onClick={() => history.push("/categories")}
        >
          <FaFilter size={20} color={white} />
          <span>Categories</span>
        </TabItem>
        <TabItem
          pathname={location.pathname === "/search"}
          onClick={() => history.push("/search")}
        >
          <FaSearch size={20} color={white} />
          <span>Search</span>
        </TabItem>
        <TabItem onClick={() => handle_random()}>
          <FaGlassMartiniAlt size={20} color={white} />
          <span>Random</span>
        </TabItem>
      </TabContainer>
    );
  } else {
    return null;
  }
}

export default TabOptions;
