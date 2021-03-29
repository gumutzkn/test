import React, { useContext, useEffect } from "react";
import { EditUserContext } from "../../contexts/EditUserContext";
import { LangContext } from "../../contexts/LangContext";

import { UserContext } from "../../contexts/UserContext";

export default function Userlist() {
  const { users, setIsClicked, setIsEdit } = useContext(UserContext);
  const { lang } = useContext(LangContext);

  const {
    setName,
    setUserName,
    setEmail,
    setCity,
    setNumber,
  } = useContext(EditUserContext);

  const editUser = id => {
    const selectedItem = users.find(item => item.id === id);

    setIsEdit(true);
    setIsClicked(false);
    setName(selectedItem.name);
    setUserName(selectedItem.username);
    setEmail(selectedItem.email);
    setCity(selectedItem.address.city);

    setNumber(id);
  };

  return (
    <>
      <h4>{lang === "tr" ? "Kullanıcılar" : "Users"}</h4>
      <table className="highlight">
        <thead>
          {lang === "tr" ? (
            <tr>
              <th>İsim</th>
              <th>Kullanıcı Adı</th>
              <th>Email</th>
            </tr>
          ) : (
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          )}
        </thead>

        <tbody>
          {users.length &&
            users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <a
                  onClick={() => editUser(user.id)}
                  style={{ marginTop: ".6rem" }}
                  className="btn-floating btn-small cyan">
                  <i className="material-icons">edit</i>
                </a>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
