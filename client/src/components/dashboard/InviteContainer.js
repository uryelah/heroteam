import React from "react";
import Invites from "./Invites";

let testInvites = [1,2,3]

function InviteContainer(props) {
  return (
    <div id="InviteContainer">
        Invites
        {testInvites.map((u, i) => {
        return <Invites key={i} name={props.name}/>
    })} 
    </div>
  );
}

export default InviteContainer;