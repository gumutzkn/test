import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { v4 as uuidv4 } from "uuid";

import "./form.css";

export default function Form() {
  const { users, setUsers } = useContext(UserContext);
  const { register, handleSubmit, reset } = useForm();

  function onSubmit({ name, username, email, city }) {
    setUsers([
      ...users,
      { id: uuidv4(), name, username, email, address: { city } },
    ]);
    reset();
    console.log(name);
  }

  return (
    <div className="form">
      <h4>Add New User</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" required ref={register} />
        </div>

        <div className="input-field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            required
            ref={register}
          />
        </div>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required ref={register} />
        </div>

        <div className="input-field">
          <label htmlFor="city">City</label>
          <input type="text" name="city" ref={register} />
        </div>
        <button
          style={{ margin: "2rem 1rem" }}
          className="btn waves-effect cyan waves-light right"
          type="submit"
          name="action">
          Add
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
}
