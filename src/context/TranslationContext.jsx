import React, { createContext, useState, useContext } from "react";
import translations from "./translations"

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const t = (key) => {
    return key.split(".").reduce((acc, part) => acc?.[part], translations[language]) || key;
  };


  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
