import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

import TopBar from "../components/TopBar";
import Traject from "../components/Traject";
import ConfirmModal from "../components/ConfirmModal";

import mainBg from "../assets/img/main_bg.png";
import cardBackImg from "../assets/img/buttons/cardback_button.png";

const CardPage = ({ uiStore, match }) => {
  const urlId = match.params.cardId;
  console.log("URL ID: ", urlId);

  const myCard = uiStore.findCard(urlId);
  console.log("MY CARD BY URL ID: ", myCard);

  return (
    <Main>
      <TopBar />
      <Traject />
      <FixedButton onClick={uiStore.handleToggleModal}>
        Ik wil mijn kaartje terug
      </FixedButton>
      {uiStore.showModal === true ? <ConfirmModal /> : ""}
    </Main>
  );
};

const FixedButton = styled.button`
  background: url(${cardBackImg});
  background-repeat: repeat-x;
  color: white;
  position: fixed;
  bottom: 0;
  border: none;
  width: 100%;
  height: 5rem;
  z-index: 2;
  font-size: 1.6rem;
  font-family: Nunito;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;

const Main = styled.main`
  background: url(${mainBg});
`;

export default inject(`uiStore`)(observer(CardPage));
