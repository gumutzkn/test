import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export default function UserContextProvider(props) {
  const [users, setUsers] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(data => data.json())
      .then(user => setUsers(user));
  }, []);

  function onClick() {
    setIsClicked(!isClicked);
    setIsEdit(false);
  }

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        isClicked,
        setIsClicked,
        onClick,
        isEdit,
        setIsEdit,
      }}>
      {props.children}
    </UserContext.Provider>
  );
}
