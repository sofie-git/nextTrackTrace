import React from "react";
import styled from "styled-components";
import ScrollIntoView from "react-scroll-into-view";

// import LanguageButtons from "./LanguageButtons";
import YourCode from "./YourCode";
import bekijkButtonImg from "../assets/img/buttons/bekijk_button.png";
import connextButtonImg from "../assets/img/buttons/connext_button.png";
import headerBg from "../assets/img/header_bg.png";
import pijltjeImg from "../assets/img/wit_pijltje.png";

const TopBar = ({ myCode }) => {
  //console.log("Mijn CODE:", myCode);
  return (
    <StyledSection>
      <YourCode />
      <Title>Volg hier je verstuurde kaartje!</Title>
      <SubTitle>Welkom op je persoonlijke track and trace pagina.</SubTitle>
      <Text>
        Je kaartje legt momenteel een hele weg af. Blijf deze hier op de voet
        volgen of vraag je kaartje terug om alle antwoorden te bekijken.
      </Text>
      <BekijkButton>Mijn kaartje herbekijken</BekijkButton>
      <ConnextButton>Meer info over CONNEXT</ConnextButton>
      <ScrollIntoView selector="#traject">
        <PijltjeButton />
      </ScrollIntoView>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  background: url(${headerBg});
  background-repeat: repeat-x;
  height: 50rem;
  color: white;
  padding: 2rem 2rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.1;
  width: 28rem;
  margin-top: 1.5rem;

  @media (min-width: 400px) {
    width: 32rem;
  }
`;

const SubTitle = styled.p`
  opacity: 0.6;
  font-size: 2rem;
  font-weight: bold;
  width: 28rem;
  line-height: 1.2;
  margin: 2.5rem 0 1rem;

  @media (min-width: 400px) {
    margin-bottom: 1rem;
    width: 32rem;
  }
`;

const Text = styled.p`
  width: 28rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  line-height: 1.6;

  @media (min-width: 400px) {
    width: 32rem;
  }
`;

const Button = styled.button`
  font-family: Nunito;
  color: white;
  font-size: 1.6rem;
  border: none;
  margin-top: 1rem;
  font-weight: bold;
  width: 24rem;
  height: 4.7rem;

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

const PijltjeButton = styled.button`
  background: url(${pijltjeImg});
  background-size: 100%;
  background-repeat: no-repeat;
  width: 2rem;
  height: 3rem;
  border: none;
  margin-top: 1rem;

  &:focus {
    outline: none;
  }
`;

export default TopBar;
