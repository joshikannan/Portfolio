import React from "react";
// import Resume from "../assets/Joshikannan-Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Resume from "../assets/latest.pdf";

const main = () => {
  return (
    <>
      <header>
        <a href="#home" className="logo">
          JK
        </a>
        <div className="main">
          <ul className="navbar">
            <div className="navIcon" id="navIcon">
              <li onClick="hideItems()">
                <a className="link" href="#about">
                  Skills
                </a>
              </li>
              <li onClick="hideItems()">
                <a className="link" href="#work">
                  Projects
                </a>{" "}
              </li>
              <li onClick="hideItems()">
                <a className="link" href={Resume} target="_blank">
                  Resume
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div className="menuIcon" id="menu-icon">
          <FontAwesomeIcon id="barIcon" icon={faBars} />
        </div>
      </header>
    </>
  );
};

export default main;
