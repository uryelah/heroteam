import React from "react";

function StaffList(props) {
    let {type} = props
  return (
    <React.Fragment>
    <h3>{type}</h3>
    <ul class="chatWindow">
        <li>{type}1</li>
        <li>{type}1</li>
        <li>{type}1</li>
    </ul>           
    </React.Fragment>
  );
}

export default StaffList;