import React from "react";
import styled from "styled-components";

import imgKortrijk from "../assets/img/locations/kortrijk.png";
import imgRijsel from "../assets/img/locations/rijsel.png";
import imgUnknown from "../assets/img/locations/unknown-location.gif";
import datumImg from "../assets/img/locations/datum_bg.png";
import vertLineImg from "../assets/img/locations/trajectline_vertical.png";

const Location = ({ status, loc }) => {
  let imgSrc;
  // als locatie X is, toon dan de bijhorende img src
  if (status === `first`) {
    imgSrc = imgKortrijk;
  } else if (status === `passed`) {
    imgSrc = imgRijsel;
  } else if (status === `unknown`) {
    imgSrc = imgUnknown;
  }

  return (
    <StyledArticle>
      {status !== "unknown" ? <Line></Line> : ""}
      {status !== "unknown" ? <Datum>28 Januari</Datum> : ""}
      <LocDiv>
        <LocImg src={imgSrc} alt={loc} />
        {status === `first` ? <LocP>Startplaats</LocP> : ""}
      </LocDiv>
      {status !== "unknown" ? <HuisP>{loc}</HuisP> : ""}
      {/* {status !== "unknown" ? <EventP>BUMP festival</EventP> : ""} */}
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
  margin-bottom: 3rem;
  position: relative;
`;

const Datum = styled.p`
  grid-area: datum;
  background: url(${datumImg});
  background-size: 100%;
  background-repeat: no-repeat;
  width: 11rem;
  height: 2.5rem;
  justify-self: center;
  text-align: center;
  padding: 0.7rem;
  margin-bottom: -2rem;
  z-index: 1;
  color: white;
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: bold;
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
  font-weight: bold;
`;

const EventP = styled.p`
  grid-area: event;
  margin-left: 2rem;
  color: #8089ce;
  margin-top: 1rem;
`;

const Line = styled.div`
  position: absolute;
  background: url(${vertLineImg});
  background-size: 100%;
  background-repeat: no-repeat;
  width: 1.2rem;
  height: 25rem;
  top: 50%;
  left: 6.9rem;
`;

export default Location;
