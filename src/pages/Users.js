import React, { useContext } from "react";
import EditUser from "../components/EditUser/editUser.component";
import Form from "../components/Form/form.component";
import Userlist from "../components/userList/userlist.component";

import { UserContext } from "../contexts/UserContext";

export default function Users() {
  const { users, isClicked, onClick, isEdit } = useContext(
    UserContext
  );

  // console.log(users);

  return (
    <>
      {users.length > 0 ? (
        <>
          <Userlist />
          <a
            onClick={onClick}
            style={{ marginTop: "2rem", marginRight: "2rem" }}
            className="btn-floating btn-large waves-effect waves-light cyan pulse right">
            <i className="material-icons">add</i>
          </a>
          {isClicked ? <Form /> : <div></div>}
          {isEdit ? <EditUser /> : <div></div>}
        </>
      ) : (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      )}
    </>
  );
}
