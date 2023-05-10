import React from "react";
// import deepam_img from "../assets/deepam_img.png";

const Freelance = () => {
  return (
    <div className="free">
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
    </div>
  );
};

export default Freelance;
