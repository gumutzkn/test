import React, { useContext } from "react";
import { LangContext } from "../../contexts/LangContext";

import "./lang.css";

export default function Lang() {
  const { lang, setLang } = useContext(LangContext);

  function selectLang(e) {
    setLang(e.target.value);
  }

  return (
    <select onChange={selectLang} className="lang browser-default">
      <option defaultValue="disabled" disabled>
        {lang === "tr" ? "Dil Seçiniz" : "Choose Your Language"}
      </option>
      <option value="en">
        {lang === "tr" ? "İngilizce" : "English"}
      </option>
      <option value="tr">
        {lang === "tr" ? "Türkçe" : "Turkish"}
      </option>
    </select>
  );
}
