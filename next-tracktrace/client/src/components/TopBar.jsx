import React from "react";
import styled from "styled-components";

import LanguageButtons from "./LanguageButtons";
import YourCode from "./YourCode";
import bekijkButtonImg from "../assets/img/buttons/bekijk_button.png";
import connextButtonImg from "../assets/img/buttons/connext_button.png";

const TopBar = () => {
  return (
    <StyledSection>
      <FlexDiv>
        <LanguageButtons />
        <YourCode />
      </FlexDiv>
      <Title>Volg hier je verstuurde kaartje!</Title>
      <SubTitle>Welkom op je persoonlijke track and trace pagina.</SubTitle>
      <Text>
        Je kaartje legt momenteel een hele weg af. Blijf deze hier op de voet
        volgen of vraag je kaartje terug om alle antwoorden te bekijken.
      </Text>
      <BekijkButton>Mijn kaartje herbekijken</BekijkButton>
      <ConnextButton>Meer info over CONNEXT</ConnextButton>
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
  font-size: 3.2rem;
  font-weight: bold;
  margin: 3rem 0 1rem;
  line-height: 1.1;
  width: 28rem;

  @media (min-width: 400px) {
    width: 32rem;
  }
`;

const SubTitle = styled.p`
  opacity: 0.6;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  width: 28rem;

  @media (min-width: 400px) {
    width: 32rem;
  }
`;

const Text = styled.p`
  width: 28rem;
  margin-bottom: 2rem;

  @media (min-width: 400px) {
    width: 32rem;
  }
`;

const Button = styled.button`
  color: white;
  font-size: 1.6rem;
  border: none;
  margin-top: 1rem;
  font-weight: bold;
  width: 26rem;
  height: 5rem;

  &:focus {
    outline: none;
  }
`;

const BekijkButton = styled(Button)`
  background: url(${bekijkButtonImg});
  background-size: 100%;
  background-repeat: no-repeat;
`;

const ConnextButton = styled(Button)`
  background: url(${connextButtonImg});
  background-size: 100%;
  background-repeat: no-repeat;
`;

export default TopBar;
