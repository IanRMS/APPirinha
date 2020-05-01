import React from "react";
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

function Home() {
  const history = useHistory();
  return (
    <div>
      <Container>
        <Section>
          <Logo src={logo} alt="logo" />
          <DescContainer>
            <Desc>
              Appirinha é o principal portal de Coquetéis. <br></br> Pesquise
              pelo nome, categoria ou clique em ver um aleatório para conhecer
              um novo coquetel.
            </Desc>
          </DescContainer>
          <OptionsMobile>
            <Option mobile={true} onClick={() => history.push("/categories")}>
              <span>Categorias</span>
              <FaFilter size={24} color={white} />
            </Option>
            <Option mobile={true}>
              <span>Pesquisar pelo nome</span>
              <FaSearch size={24} color={white} />
            </Option>
            <Option mobile={true}>
              <span>Conhecer um novo</span>
              <FaGlassMartiniAlt size={24} color={white} />
            </Option>
          </OptionsMobile>
        </Section>
        <Options>
          <Option onClick={() => history.push("/categories")}>
            <span>Categorias</span>
            <FaFilter size={24} color={white} />
          </Option>
          <Option>
            <span>Pesquisar pelo nome</span>
            <FaSearch size={24} color={white} />
          </Option>
          <Option>
            <span>Conhecer um novo</span>
            <FaGlassMartiniAlt size={24} color={white} />
          </Option>
        </Options>
      </Container>
    </div>
  );
}

export default Home;
