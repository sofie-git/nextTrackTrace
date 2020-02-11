import React from "react";
import styled from "styled-components";

import LanguageButtons from "./LanguageButtons";
import YourCode from "./YourCode";

const TopBar = () => {
  return (
    <StyledSection>
      <FlexDiv>
        <LanguageButtons />
        <YourCode />
      </FlexDiv>
      <Title>Volg hier je verstuurde kaartje!</Title>
      <p>Welkom op je persoonlijke track and trace pagina.</p>
      <p>
        Je kaartje legt momenteel een hele weg af. Blijf deze hier op de voet
        volgen of vraag je kaartje terug om alle antwoorden te bekijken.
      </p>
      <Button>Mijn kaartje herbekijken</Button>
      <Button>Meer info over CONNEXT</Button>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  background-color: #7d86ca;
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: bold;
  margin: 2rem 0;
`;

const Button = styled.button`
  color: white;
  font-size: 1.8rem;
  background-color: #5e669e;
  border: none;
  margin-top: 2rem;

  &:focus {
    outline: none;
  }
`;

export default TopBar;
