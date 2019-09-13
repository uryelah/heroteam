import React from "react";
import UserList from "./UserList";

function UserRecContainer() {
  return (
    <div id="userRec">
        user recommendations
    <UserList flexDir="row"/>
    </div>
  );
}

export default UserRecContainer;