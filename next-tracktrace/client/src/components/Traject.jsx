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
      <Location status="passed" loc="Kortrijk" />
      <Location status="current" loc="Rijsel" />
      <Location status="unknown" loc="" />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 2rem;
`;

const StyledP = styled.p`
  font-weight: bold;
  margin-bottom: 2rem;
`;

export default Traject;
