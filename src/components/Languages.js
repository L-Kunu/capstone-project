import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
const languages = {
  //ar: "Arabic",
  //chi: "Chinese",
  en: "English",
  de: "German",
  //fr: "French",
  //fa: "Persian",
  //es: "Spanish",
  // tr: "Turkish",
};

export default function Languages(lng) {
  const { t, i18n } = useTranslation();

  return (
    <LanguageContainer>
      <Greeting>{t("Greeting")}</Greeting>
      <CallToAction>{t("Action")}</CallToAction>
      {Object.entries(languages).map(([code, name]) => {
        return (
          <button onClick={() => i18n.changeLanguage(code)}>{name}</button>
        );
      })}
    </LanguageContainer>
  );
}
const LanguageContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  button {
    border: none;
    border-radius: 8px;
    color: #093764;
    padding: 8px 20px;
    background-color: #cfe8ef;
    font-size: 1.3rem;
  }
`;

const Greeting = styled.h1`
  color: #093764;
`;

const CallToAction = styled.h2`
  border: 1px solid #38b4cd;
  border-radius: 12px;
  color: #415a77;
  padding: 20px;
  margin-bottom: 60px;
  text-align: center;
`;
