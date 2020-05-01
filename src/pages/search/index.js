import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaRegArrowAltCircleLeft, FaRegFrown } from "react-icons/fa";

import {
  Container,
  Content,
  Header,
  Form,
  List,
  Item,
  ItemImage,
  NotFound,
} from "./styles";
import { yellow, gray } from "../../utils/colors";
import { search_drink } from "../../actions/cocktailsActions";

function Search() {
  const [search, setSearch] = useState("");
  const { searchList } = useSelector((state) => state.cocktailsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(searchList);
  }, [searchList]);

  function searchDrink(e) {
    e.preventDefault();
    dispatch(search_drink(search));
  }
  return (
    <Container>
      <Content>
        <Header>
          <Link to={"/"}>
            <FaRegArrowAltCircleLeft size={30} color={yellow} />
          </Link>
          <span>Search by the name</span>
        </Header>
        <Form onSubmit={searchDrink}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type the drink's name"
          />
          <button disabled={search === "" ? true : false} type="submit">
            Search
          </button>
        </Form>
        {searchList && (
          <List>
            {searchList.map((item) => (
              <Item key={item.idDrink}>
                <Link
                  style={{ display: "flex", alignItems: "center" }}
                  to={`/drink/${item.idDrink}`}
                >
                  <ItemImage src={item.strDrinkThumb} />
                  <span>{item.strDrink}</span>
                </Link>
              </Item>
            ))}
          </List>
        )}
        {!searchList && (
          <NotFound>
            <FaRegFrown size={190} color={gray} />
            <span>Nothing was found from you search</span>
          </NotFound>
        )}
      </Content>
    </Container>
  );
}

export default Search;
