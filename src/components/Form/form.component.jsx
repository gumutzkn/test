import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { v4 as uuidv4 } from "uuid";

import "./form.css";
import { LangContext } from "../../contexts/LangContext";
import useUnsavedChangesWarning from "../../hook/useUnsavedChangesWarning";

export default function Form() {
  const { users, setUsers } = useContext(UserContext);
  const { lang } = useContext(LangContext);
  const { register, handleSubmit, reset } = useForm();

  const [Prompt, setDirty, setPristine] = useUnsavedChangesWarning();

  function onSubmit({ name, username, email, city }) {
    setUsers([
      ...users,
      { id: uuidv4(), name, username, email, address: { city } },
    ]);
    reset();
  }

  return (
    <div className="form">
      <h4>
        {lang === "tr" ? "Yeni Kullanıcı Ekle" : "Add New User"}
      </h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-field">
          <label htmlFor="name">
            {lang === "tr" ? "İsim" : "Name"}
          </label>
          <input
            onChange={() => setDirty()}
            type="text"
            name="name"
            required
            ref={register}
          />
        </div>

        <div className="input-field">
          <label htmlFor="username">
            {lang === "tr" ? "Kullanıcı Adı" : "Username"}
          </label>
          <input
            type="text"
            name="username"
            required
            ref={register}
            onChange={() => setDirty()}
          />
        </div>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            onChange={() => setDirty()}
            type="email"
            name="email"
            required
            ref={register}
          />
        </div>

        <div className="input-field">
          <label htmlFor="city">
            {lang === "tr" ? "Şehir" : "City"}
          </label>
          <input
            onChange={() => setDirty()}
            type="text"
            name="city"
            ref={register}
          />
        </div>
        <button
          style={{ margin: "2rem 1rem" }}
          className="btn waves-effect cyan waves-light right"
          type="submit"
          onClick={() => setPristine()}
          name="action">
          Add
          <i className="material-icons right">send</i>
        </button>
      </form>
      {Prompt}
    </div>
  );
}
