import React from "react";
import styled from "styled-components";

import Location from "./Location";

const Traject = () => {
  // TODO: functie die checkt hoeveel locaties er uit de data gehaald zijn
  // en dan de mankerende aantal locaties als "unknown" componenten zetten

  return (
    <StyledSection id="traject">
      <StyledP>
        Uw kaartje werd al op <strong>1 andere plaats</strong> binnen de
        Eurometropool beantwoord!
      </StyledP>
      <Location status="passed" loc="Kortrijk" />
      <Location status="current" loc="Rijsel" />
      <Location status="unknown" loc="" />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 2rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledP = styled.p`
  text-align: center;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #8089ce;

  & strong {
    color: #4c5384;
  }

  @media (min-width: 400px) {
    width: 32rem;
  }
`;

export default Traject;
