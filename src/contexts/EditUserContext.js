import React, { createContext, useState } from "react";

export const EditUserContext = createContext();

export default function EditUserContextProvider(props) {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState();

  return (
    <EditUserContext.Provider
      value={{
        name,
        number,
        username,
        email,
        city,
        setCity,
        setName,
        setUserName,
        setEmail,
        setNumber,
      }}>
      {props.children}
    </EditUserContext.Provider>
  );
}
