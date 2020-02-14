import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

import Location from "./Location";

const Traject = ({ uiStore }) => {
  let myFirstLocation = uiStore.currentFirstLocation;
  let myLocations = uiStore.currentLocations;

  return (
    <StyledSection id="traject">
      <StyledP>
        {myLocations.length === 0
          ? "Je kaartje is nog onderweg naar de eerste locatie!"
          : "Uw kaartje werd al op" +
            myLocations.length +
            "andere plaats binnen de Eurometropool beantwoord!"}
      </StyledP>

      <Location status="first" loc={myFirstLocation} />
      {myLocations.map(location => (
        <Location status="current" loc={location} />
      ))}
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
  margin-top: -2rem;

  & strong {
    color: #4c5384;
  }

  @media (min-width: 400px) {
    width: 32rem;
  }
`;

export default inject(`uiStore`)(observer(Traject));
