import React from "react";
import NavbarLinkRow from "./NavbarLinkRow";
import Logo from "./Logo"
import FormArea from "./FormArea";

function Navbar() {
  return (
    <div id="navbar" style={{ boxShadow: "0 2px 0 0 var(--conpass-glacier)" }}>
      <Logo />
      <NavbarLinkRow />
      <FormArea />
    </div>
  );
}

export default Navbar;