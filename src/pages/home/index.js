import React from "react";
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

function Home() {
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
            <Option mobile={true}>
              <span>Categorias</span>
            </Option>
            <Option mobile={true}>
              <span>Pesquisar pelo nome</span>
            </Option>
            <Option mobile={true}>
              <span>Conhecer um novo</span>
            </Option>
          </OptionsMobile>
        </Section>
        <Options>
          <Option>
            <span>Categorias</span>
          </Option>
          <Option>
            <span>Pesquisar pelo nome</span>
          </Option>
          <Option>
            <span>Conhecer um novo</span>
          </Option>
        </Options>
      </Container>
    </div>
  );
}

export default Home;
