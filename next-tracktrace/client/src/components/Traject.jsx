import React from "react";
import styled from "styled-components";

import Location from "./Location";

const Traject = () => {
  // TODO: functie die checkt hoeveel locaties er uit de data gehaald zijn
  // en dan de mankerende aantal locaties als "unknown" componenten zetten

  return (
    <StyledSection>
      <StyledP>
        Uw kaartje werd al op 1 andere plaats binnen de Eurometropool
        beantwoord!
      </StyledP>
      <FlexDiv>
        <Location status="passed" loc="Kortrijk" />
        <Location status="current" loc="Rijsel" />
        <Location status="unknown" loc="" />
      </FlexDiv>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 2rem 2rem 4rem;
  background-color: #f5f5f5;
`;

const StyledP = styled.p`
  font-weight: 600;
  margin-bottom: 2rem;

  @media (min-width: 400px) {
    width: 32rem;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Traject;
