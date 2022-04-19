import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import i18next from "./i18n";

export default function Languages(lang) {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage("lang");
  }

  return (
    <LanguageContainer>
      <button onClick={() => handleClick("ar")}>Arabic</button>

      <button onClick={() => handleClick("chi")}>Chinese</button>

      <button onClick={() => handleClick("en")}>English</button>

      <button onClick={() => handleClick("de")}>German</button>

      <button onClick={() => handleClick("fr")}>French</button>

      <button onClick={() => handleClick("fa")}>Persian</button>

      <button onClick={() => handleClick("es")}>Spanish</button>

      <button onClick={() => handleClick("en")}>Turkish</button>

      <p>{t("Intro", "Greeting")}</p>
      <p>{t("Action, 1")}</p>
    </LanguageContainer>
  );
}
const LanguageContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
