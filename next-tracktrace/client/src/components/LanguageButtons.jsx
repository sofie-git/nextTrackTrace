import React from "react";
import styled from "styled-components";

const LanguageButtons = () => {
  return (
    <div>
      <LangButton>NL</LangButton>
      <LangButton>FR</LangButton>
    </div>
  );
};

const LangButton = styled.button`
  color: white;
`;

export default LanguageButtons;
