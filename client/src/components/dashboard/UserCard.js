import React from "react";

function UserCard(props) {
  return (
    <div className={props.view ? "myUserCard" : "userCard"} >
        User Card
        <p>Name</p>
        <p>Hability</p>
        <p>Team</p>
    </div>
  );
}

export default UserCard;