import React from "react";
import styled from "styled-components";

import LangNlImg from "../assets/img/buttons/nl_button.png";
import LangFrImg from "../assets/img/buttons/fr_button.png";

const LanguageButtons = () => {
  return (
    <div>
      <LangNL>NL</LangNL>
      <LangFR>FR</LangFR>
    </div>
  );
};

const LangButton = styled.button`
  color: white;
  width: 6rem;
  height: 4rem;
  border: none;
  font-family: "Aracne";
  font-size: 2.2rem;

  &:focus {
    outline: none;
  }
`;

const LangNL = styled(LangButton)`
  background: url(${LangNlImg});
  background-size: 100%;
  background-repeat: no-repeat;
`;

const LangFR = styled(LangButton)`
  background: url(${LangFrImg});
  background-size: 100%;
  background-repeat: no-repeat;
`;

export default LanguageButtons;
