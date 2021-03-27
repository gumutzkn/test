import React from "react";
import { useForm } from "react-hook-form";

import "./form.css";

const Form = ({ users, setUsers }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = ({ name, username, email, city }) => {
    setUsers([...users, { name, username, email, city }]);
    reset();
    console.log(name);
  };

  return (
    <div className="form">
      <h4>User Detail Form</h4>
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
          Save
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};

export default Form;
