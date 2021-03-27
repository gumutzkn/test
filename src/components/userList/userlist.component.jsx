import React from "react";

const Userlist = ({ users, isClicked, setIsClicked }) => {
  const onClick = e => {
    let name = e.target.parentNode.parentNode.childNodes[0];
    let userName = e.target.parentNode.parentNode.childNodes[1];
    let email = e.target.parentNode.parentNode.childNodes[2];

    setIsClicked(true);
    console.log(e.target.parentNode.parentNode.childNodes[2]);
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
                  onClick={onClick}
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
};

export default Userlist;
