import React from "react";
import styled from "styled-components";

import TopBar from "./components/TopBar";
import Traject from "./components/Traject";
import ConfirmModal from "./components/ConfirmModal";

function App() {
  // showPopUp() {
  //   console.log("show the confirmation pop-up");
  // }

  return (
    <main>
      <TopBar />
      <Traject />
      <FixedButton>Ik wil mijn kaartje terug</FixedButton>
      <ConfirmModal />
    </main>
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

  &:focus {
    outline: none;
  }

  &:active {
    background-color: purple;
  }
`;

export default App;
