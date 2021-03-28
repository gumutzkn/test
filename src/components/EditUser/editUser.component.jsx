import React, { useContext } from "react";
import { EditUserContext } from "../../contexts/EditUserContext";
import { UserContext } from "../../contexts/UserContext";

import "./edituser.css";

export default function EditUser() {
  const { users } = useContext(UserContext);
  const {
    name,
    username,
    email,
    city,
    number,
    setName,
    setUserName,
    setEmail,
    setCity,
  } = useContext(EditUserContext);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleUserNameChange(e) {
    setUserName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    const selectedUser = users.find(item => item.id === number);

    selectedUser.email = e.target.value;
  }

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  function handleChangedUser(e) {
    e.preventDefault();
    // console.log("target hit");
    // const selectedUser = users.find(item => item.id === number);
    users.forEach(user => {
      if (user.id === number) {
        console.log((user.name = ""));
        user.name = "";
      }
    });

    // selectedUser.name = "";
  }

  return (
    <div className="edit">
      <h4>Edit User</h4>
      <form onSubmit={handleChangedUser}>
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleNameChange}
            type="text"
            name="name"
            value={name}
            required
          />
        </div>

        <div className="input-field">
          <label htmlFor="username">Username</label>
          <input
            onChange={handleUserNameChange}
            type="text"
            name="username"
            value={username}
            required
          />
        </div>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleEmailChange}
            type="email"
            name="email"
            value={email}
            required
          />
        </div>

        <div className="input-field">
          <label htmlFor="city">City</label>
          <input
            onChange={handleCityChange}
            type="text"
            name="city"
            value={city}
          />
        </div>
        <button
          style={{ margin: "2rem 1rem" }}
          className="btn waves-effect cyan waves-light right"
          type="submit"
          name="action">
          Save
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
}
