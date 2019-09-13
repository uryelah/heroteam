import React from "react";

function Invites(props) {
    let {name} = props;
  return (
    <div class="InviteContainer">
        Invite {name}
    </div>
  );
}

export default Invites;