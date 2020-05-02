import React, { useEffect, useState } from "react";
import { FaSearch, FaFilter, FaGlassMartiniAlt } from "react-icons/fa";
import { useHistory } from "react-router";
import {
  Container,
  Section,
  Logo,
  Options,
  Desc,
  DescContainer,
  Option,
  OptionsMobile,
} from "./styles";
import logo from "../../utils/imgs/logo.png";
import { white } from "../../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { random_drink } from "../../actions/cocktailsActions";

function Home() {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { randomId } = useSelector((state) => state.cocktailsReducer);

  function handle_random() {
    setSelected(true);
    dispatch(random_drink());
  }

  useEffect(() => {
    if (randomId && selected) history.push(`/drink/${randomId}`);
  }, [randomId, history, selected]);

  return (
    <div>
      <Container>
        <Section>
          <Logo src={logo} alt="logo" />
          <DescContainer>
            <Desc>
              Appirinha é o principal portal de Drinks. <br></br> Pesquise pelo
              nome, categoria ou clique em ver um aleatório para conhecer um
              novo coquetel.
            </Desc>
          </DescContainer>
          <OptionsMobile>
            <Option mobile={true} onClick={() => history.push("/categories")}>
              <span>Categories</span>
              <FaFilter size={24} color={white} />
            </Option>
            <Option mobile={true} onClick={() => history.push("/search")}>
              <span>Search by the name</span>
              <FaSearch size={24} color={white} />
            </Option>
            <Option mobile={true} onClick={() => handle_random()}>
              <span>Pick a random drink</span>
              <FaGlassMartiniAlt size={24} color={white} />
            </Option>
          </OptionsMobile>
        </Section>
        <Options>
          <Option onClick={() => history.push("/categories")}>
            <span>Categories</span>
            <FaFilter size={24} color={white} />
          </Option>
          <Option onClick={() => history.push("/search")}>
            <span>Search by the name</span>
            <FaSearch size={24} color={white} />
          </Option>
          <Option onClick={() => handle_random()}>
            <span>Pick a random drink</span>
            <FaGlassMartiniAlt size={24} color={white} />
          </Option>
        </Options>
      </Container>
    </div>
  );
}

export default Home;
