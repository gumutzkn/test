import React, { useContext, useEffect } from "react";
import { EditUserContext } from "../../contexts/EditUserContext";

import { UserContext } from "../../contexts/UserContext";

export default function Userlist() {
  const { users, setUsers, setIsClicked, setIsEdit } = useContext(
    UserContext
  );

  const {
    setName,
    setUserName,
    setEmail,
    setCity,
    setNumber,
  } = useContext(EditUserContext);

  const editUser = id => {
    const selectedItem = users.find(item => item.id === id);

    console.log(selectedItem);

    setIsEdit(true);
    setIsClicked(false);
    setName(selectedItem.name);
    setUserName(selectedItem.username);
    setEmail(selectedItem.email);
    setNumber(id);
    setCity(selectedItem.address.city);
  };

  return (
    <>
      <h4>Users</h4>
      <table className="highlight">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
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
