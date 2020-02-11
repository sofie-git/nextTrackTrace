import React from "react";
import styled from "styled-components";

const YourCode = () => {
  return (
    <StyledDiv>
      <p>Je persoonlijke code:</p>
      <CodeP>Ae73B8</CodeP>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  text-align: right;
  font-size: 1.4rem;
`;

const CodeP = styled.p`
  font-weight: bold;
  font-size: 1.8rem;
`;

export default YourCode;
