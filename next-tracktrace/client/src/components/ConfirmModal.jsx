import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

import backButtonImg from "../assets/img/buttons/modal_backbutton.png";
import confirmButtonImg from "../assets/img/buttons/modal_confirmbutton.png";
import continueButtonImg from "../assets/img/buttons/modal_continuebutton.png";
import sendButtonImg from "../assets/img/buttons/modal_sendbutton.png";
import sendInputImg from "../assets/img/modal_input.png";

const ConfirmModal = ({ uiStore }) => {
  return (
    <Backdrop>
      <StyledModal>
        <BackButton onClick={uiStore.handleToggleModal} />
        <div>
          <ModalTitle>Ben je zeker dat je je kaartje terug wil?</ModalTitle>
          <p>
            Vanaf dan haal je je kaartje uit de Eurometropool en is het niet
            meer mogelijk dat anderen je kaartje verder kunnen aanvullen.
          </p>
          <ConfirmButton>Ja, ik wil mijn kaartje terug</ConfirmButton>
          <ContinueButton onClick={uiStore.handleToggleModal}>
            Nee, stuur mijn kaartje verder
          </ContinueButton>
        </div>
        <div>
          <p>
            <strong>
              Wil je een melding ontvangen wanneer je kaartje helemaal rond is
              geweest?
            </strong>
          </p>
          <p>Vul hieronder je e-mailadres in en wij houden je op de hoogte!</p>
          <SendForm>
            <SendInput type="text" />
            <SendButton>Bevestig</SendButton>
          </SendForm>
        </div>
      </StyledModal>
    </Backdrop>
  );
};

const Backdrop = styled.section`
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
  width: 100%;
  height: 102%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 1rem;
  z-index: 3;
  margin-top: -2rem;
`;

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  border-radius: 3rem;
  padding: 2.5rem;
  margin: 1rem;
  width: 24rem;
  height: 82%;
  position: relative;

  & p {
    font-size: 1.4rem;
    margin: 1rem 0;
    color: #4e5587;
    font-weight: 600;
  }

  & div {
    width: 24rem;
  }

  @media (min-width: 400px) {
    width: 32rem;
  }
`;

const BackButton = styled.button`
  background: url(${backButtonImg});
  border: none;
  width: 4rem;
  height: 4rem;
  background-size: 100%;
  background-repeat: no-repeat;
  position: absolute;
  right: 2rem;
  top: 2rem;
`;

const Button = styled.button`
  font-family: Nunito;
  border: none;
  color: white;
  font-size: 1.4rem;
  width: 24rem;
  height: 4rem;
  font-weight: bold;
  margin-top: 1rem;
  &:focus {
    outline: none;
  }
`;

const ConfirmButton = styled(Button)`
  background: url(${confirmButtonImg});
  background-size: 100%;
  background-repeat: no-repeat;
  margin-top: 0;

  &:active {
    background-color: yellow;
  }
`;

const ContinueButton = styled(Button)`
  background: url(${continueButtonImg});
  background-size: 100%;
  background-repeat: no-repeat;
  color: #8089ce;
`;

const ModalTitle = styled.h2`
  width: 20.5rem;
  font-size: 2.2rem;
  color: #8089ce;
  font-weight: bold;
  line-height: 1.4;
`;

const SendForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SendInput = styled.input`
  border: none;
  background: url(${sendInputImg});
  background-size: 100%;
  background-repeat: no-repeat;
  width: 24rem;
  height: 4rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
  font-size: 1.6rem;

  &:focus {
    outline: none;
  }

  @media (min-width: 400px) {
    width: 30rem;
    height: 4rem;
  }
`;

const SendButton = styled.button`
  border: none;
  background: url(${sendButtonImg});
  background-size: 100%;
  background-repeat: no-repeat;
  width: 12rem;
  height: 4rem;
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  align-self: center;
  &:focus {
    outline: none;
  }
`;

export default inject(`uiStore`)(observer(ConfirmModal));
