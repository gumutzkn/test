import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../contexts/LangContext";

export default function Home() {
  const { lang } = useContext(LangContext);
  return (
    <div>
      <Link to="/users">
        {lang === "tr" ? "Kullanıcılar" : "Users"}
      </Link>
    </div>
  );
}
