import React from "react";
import UserList from "./UserList";
import Chat from "./Chat";

function TeamContainer() {
    let chatOpen = false;
    const chatHandler = () => {
        chatOpen = !chatOpen
    }
  return (
    <div id="userSearch">
    Team
    Members
    <p>Name</p>
    <UserList flexDir="column"/>
    <button onClick={chatHandler}>Team Chat</button>
    {
        chatOpen ? 
        <Chat type="Team"/>
        : null
    }
    <button>Docs</button>
    <button>Project</button>
    <button>Trello</button>
    </div>
  );
}

export default TeamContainer;