import React from "react";
import Resume from "../assets/Joshikannan-Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const main = () => {
  return (
    <>
      <header>
        <a href="#home" className="logo">
          JK
        </a>
        <div className="main">
          <ul className="navbar">
            <div className="navIcon">
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#work">WORK</a>{" "}
              </li>
              <li>
                <a blank="true" href={Resume}>
                  RESUME
                </a>
              </li>
            </div>
            <div className="menuIcon" id="menu-icon">
              <FontAwesomeIcon id="barIcon" icon={faBars} />
            </div>
          </ul>
        </div>
      </header>
    </>
  );
};

export default main;
