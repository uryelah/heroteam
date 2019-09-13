import React from "react";
import StaffList from "./StaffList";

function HackathonInfoContainer(props) {
  return (
    <div class="Hackathon">
        <h2>Hackathon Title</h2>
        <button>Expand</button>
        <h3>Descricao</h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div>
        <StaffList type="Mentor"/>
        <h3>Memembers</h3>
        <ul>
            <li>Mentor1</li>
            <li>Mentor2</li>
            <li>Mentor3</li>
        </ul>
        </div>
        <div>
        <h3>Jurados</h3>
        <ul>
            <li>jurado1</li>
            <li>jurado2</li>
            <li>jurado3</li>
        </ul>
        </div>
        
    </div>
  );
}

export default HackathonInfoContainer;