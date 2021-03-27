import React, { useState, useEffect } from "react";
import Form from "../components/Form/form.component";
import Userlist from "../components/userList/userlist.component";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(data => data.json())
      .then(user => {
        console.log(user);
        setUsers(user);
      });
  }, []);

  console.log(users);

  const onClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      {users.length > 0 ? (
        <>
          <Userlist
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            users={users}
          />
          <a
            onClick={onClick}
            style={{ marginTop: "2rem", marginRight: "2rem" }}
            className="btn-floating btn-large waves-effect waves-light cyan pulse right">
            <i className="material-icons">add</i>
          </a>
          {isClicked ? (
            <Form users={users} setUsers={setUsers} />
          ) : (
            <div></div>
          )}
        </>
      ) : (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      )}
    </>
  );
};

export default Users;
