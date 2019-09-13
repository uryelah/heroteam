import React from "react";
import NavbarLinkRow from "./NavbarLinkRow";
import Logo from "./Logo"
import FormArea from "./FormArea";

function Navbar(props) {
  let {page} = props;
  return (
    <div id="navbar" style={{ boxShadow: "0 2px 0 0 var(--conpass-glacier)" }}>
      <Logo />
      <NavbarLinkRow />
      {page === "landing" ? <FormArea /> : <spam>Logout</spam>}  
    </div>
  );
}

export default Navbar;