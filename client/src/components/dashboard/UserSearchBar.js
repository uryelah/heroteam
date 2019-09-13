import React from "react";
import UserList from "./UserList";
import UserRecContainer from "./UserRecContainer";

function UserSearchBar() {
  return (
    <div id="userSearch">
        User Search bar
    <input type="text">
    </input>
    <UserList flexDir="column"/>
    <UserRecContainer/>
    </div>
  );
}

export default UserSearchBar;