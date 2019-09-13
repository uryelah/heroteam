import React from "react";
import DASHBOARD from "./testStates"

function FormArea() {
  const handleSubmit = e => {
    alert(DASHBOARD)
  }
  return (
    <form id="nav-form" onSubmit={handleSubmit}>
        <input type="email"/>
        <input type="text"/>
        <button>Login</button>
    </form>
  );
}

export default FormArea;


