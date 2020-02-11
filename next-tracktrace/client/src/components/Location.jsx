import React from "react";
import styled from "styled-components";

import imgKortrijk from "../assets/img/locations/kortrijk.png";
import imgRijsel from "../assets/img/locations/rijsel.png";
import imgUnknown from "../assets/img/locations/unknown-location.png";

const Location = ({ status, loc }) => {
  let imgSrc;
  // als locatie X is, toon dan de bijhorende img src
  if (loc === `Kortrijk`) {
    imgSrc = imgKortrijk;
  } else if (loc === `Rijsel`) {
    imgSrc = imgRijsel;
  } else {
    imgSrc = imgUnknown;
  }

  return (
    <StyledArticle>
      <Datum>DATUM</Datum>
      <LocDiv>
        <LocImg src={imgSrc} alt={loc} />
        <LocP>{loc}</LocP>
      </LocDiv>
      <HuisP>Cultuurhuis</HuisP>
      <EventP>Evenement</EventP>
    </StyledArticle>
  );
};

const StyledArticle = styled.article`
  display: grid;
  grid-template-columns: 15rem 15rem;
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    "datum ."
    "img huis"
    "img event"
    "img .";
  margin-bottom: 2rem;
`;

const Datum = styled.p`
  background-color: #7d86ca;
  grid-area: datum;
  width: 10rem;
  justify-self: center;
  text-align: center;
  padding: 0.5rem;
  margin-bottom: -1.5rem;
  z-index: 1;
  color: white;
`;

const LocDiv = styled.div`
  grid-area: img;
  position: relative;
  width: 15rem;
  height: 15rem;
`;

const LocImg = styled.img`
  width: 15rem;
  height: 15rem;
`;

const LocP = styled.p`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  font-family: "Aracne";
`;

const HuisP = styled.p`
  grid-area: huis;
  margin-left: 2rem;
  color: #4e5587;
`;

const EventP = styled.p`
  grid-area: event;
  margin-left: 2rem;
  color: #8089ce;
`;

export default Location;
