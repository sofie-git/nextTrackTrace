import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

import Location from "./Location";

const Traject = ({ uiStore }) => {
  let myTheme = uiStore.currentTheme;
  console.log("MY THEME", myTheme);

  let myLocations = uiStore.currentLocations;
  console.log("MY LOCATIONS", myLocations);

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

export default inject(`uiStore`)(observer(Traject));
