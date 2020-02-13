import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

import TopBar from "../components/TopBar";
import Traject from "../components/Traject";
import ConfirmModal from "../components/ConfirmModal";

import mainBg from "../assets/img/main_bg.png";
import cardBackImg from "../assets/img/buttons/cardback_button.png";

const CardPage = ({ uiStore }) => {
  const cards = uiStore.cards;
  const uniqueCardId = uiStore.currentCard;

  const filteredCard = cards.filter(obj => {
    return obj.uniqueId === uniqueCardId;
  });

  //const foundCard = uiStore.findCard(uiStore.testId2);
  console.log("CURRENT", filteredCard);
  //console.log("CURRENT2", foundCard);

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
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;

const Main = styled.main`
  background: url(${mainBg});
`;

export default inject(`uiStore`)(observer(CardPage));
