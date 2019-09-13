import React from "react";
import NavBar from "../NavBar";
import UserSearchBar from "./UserSearchBar";
import Chat from "./Chat";
import InviteContainer from "./InviteContainer";
import TeamContainer from "./TeamContainer";
import UserCard from "./UserCard";
import HackathonInfoContainer from "./HackathonInfoContainer";

function Dashboard() {
  return (
    <div id="hero">
        <NavBar page="dashboard"/>
        DASHBOARD
        <div id="dashboardRight">
        <UserSearchBar/>
        <InviteContainer/>
        </div>
        <div id="dashboardLeft">
            <UserCard view="flex"/>
            <TeamContainer/>
        </div>
        <HackathonInfoContainer/>
        <Chat type="General"/>
    </div>
  );
}

export default Dashboard;