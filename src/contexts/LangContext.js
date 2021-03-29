import React, { createContext, useState } from "react";

export const LangContext = createContext();

export default function LangContextProvider(props) {
  const [lang, setLang] = useState("en");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {props.children}
    </LangContext.Provider>
  );
}
