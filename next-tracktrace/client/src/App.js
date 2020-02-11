import React from "react";
import styled from "styled-components";

import TopBar from "./components/TopBar";
import Traject from "./components/Traject";
import ConfirmModal from "./components/ConfirmModal";

import mainBg from "./assets/img/main_bg.png";

function App() {
  // showPopUp() {
  //   console.log("show the confirmation pop-up");
  // }

  let showPopUp = false;

  return (
    <Main>
      <TopBar />
      <Traject />
      <FixedButton>Ik wil mijn kaartje terug</FixedButton>
      {showPopUp === true ? <ConfirmModal /> : console.log("NEWP")}
    </Main>
  );
}

const FixedButton = styled.button`
  color: white;
  position: fixed;
  bottom: 0;
  background-color: #5e669e;
  border: none;
  width: 100%;
  height: 4rem;
  z-index: 2;

  &:focus {
    outline: none;
  }

  &:active {
    background-color: purple;
  }
`;

const Main = styled.main`
  background: url(${mainBg});
`;

export default App;
