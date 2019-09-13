import React from "react";
import UserCard from "./UserCard";
let userTestArray = [1,3,6,5,3,23,5]

function UserList(props) {
    let {flexDir} = props;
  return (
    <ul style={{display: "flex", flexDirection: flexDir}}>
    {userTestArray.map((u, i) => {
        return <li style={{width:"10px"}} key={i} className="userLink">user<UserCard/></li>
    })} 
    </ul>
  );
}

export default UserList;