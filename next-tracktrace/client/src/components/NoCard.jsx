import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
//import { Link } from "react-router-dom";

const NoCard = ({ uiStore }) => {
  const [inputId, setInputId] = useState("4Hq8AC-W");

  return (
    <Main>
      <StyledText>
        Voer hier de unieke code in die je kreeg bij één van de CONNEXT
        installaties:
      </StyledText>
      <StyledInput type="text" onChange={e => setInputId(e.target.value)} />
      <StyledLink href={inputId}>Zoek!</StyledLink>
    </Main>
  );
};

const Main = styled.main`
  background-color: #8089ce;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.p`
  color: white;
  font-weight: bold;
  font-size: 1.8rem;
  width: 28rem;
  line-height: 1.4;
`;

const StyledInput = styled.input`
  width: 18rem;
  text-align: center;
  border: none;
  font-size: 2rem;
  height: 4rem;
  margin: 2rem 0;
  padding: 0 1rem;
  color: #5e669e;

  &:focus {
    outline: none;
  }
`;

const StyledLink = styled.a`
  width: 18rem;
  color: white;
  font-weight: bold;
  text-align: center;
`;

export default inject(`uiStore`)(observer(NoCard));
