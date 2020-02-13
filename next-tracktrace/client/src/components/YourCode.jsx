import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

const YourCode = ({ uiStore }) => {
  let myCode = uiStore.currentCode;
  console.log("MY CODE", myCode);

  return (
    <StyledDiv>
      <p>Je persoonlijke code:</p>
      <CodeP>{myCode}</CodeP>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  text-align: right;
  font-size: 1.4rem;
  align-self: flex-end;
`;

const CodeP = styled.p`
  font-weight: bold;
  font-size: 1.8rem;
`;

export default inject(`uiStore`)(observer(YourCode));
