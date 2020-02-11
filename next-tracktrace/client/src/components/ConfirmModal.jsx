import React from "react";
import styled from "styled-components";

const ConfirmModal = () => {
  return (
    <StyledModal>
      <button>TERUG</button>
      <div>
        <h2>Ben je zeker dat je je kaartje terug wil?</h2>
        <p>
          Vanaf dan haal je je kaartje uit de Eurometropool en is het niet meer
          mogelijk dat anderen je kaartje verder kunnen aanvullen.
        </p>
        <button>Ja, ik wil mijn kaartje terug</button>
        <button>Nee, stuur mijn kaartje verder</button>
      </div>
      <div>
        <p>
          Wil je een melding ontvangen wanneer je kaartje helemaal rond is
          geweest?
        </p>
        <p>Vul hieronder je e-mailadres in en wij houden je op de hoogte!</p>
        <input type="text" />
        <button>Bevestig</button>
      </div>
    </StyledModal>
  );
};

const StyledModal = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
`;

export default ConfirmModal;
