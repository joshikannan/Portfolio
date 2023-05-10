import React from "react";
import college_img from "../assets/college.jpeg";
import food_img from "../assets/food.jpeg";
import digital_img from "../assets/digital.jpeg";
import banking_img from "../assets/virtual-banking.jpeg";

const AllProjects = () => {
  return (
    <>
      <div className="skip">
        Skip to the good part,
        <p>here’s my work ↓</p>
      </div>
      <div className="project-align">
        <div className="projects">
          <a
            id="work"
            href="https://joshikannan.github.io/Restaurant-Html-Css/"
            blank="true"
          >
            <div className="project-info">
              <span className="p-head">Restraunt Website</span>
              <div className="p-l">
                <span>HTML</span> | <span>CSS</span> |{" "}
                <span>Dark/Light mode</span>| |<span>css-variables</span>
              </div>
            </div>
            <div className="project-img">
              <img src={food_img} />
            </div>
          </a>
        </div>
        <div className="projects">
          <a
            id="work"
            href="https://joshikannan.github.io/Virtual-Banking-Bootstrap/"
            blank="true"
          >
            <div className="project-info">
              <span className="p-head">Virtual Banking</span>
              <div className="p-l">
                <span>HTML</span> | <span>CSS</span> | <span>Bootstrap</span> |{" "}
                <span>Responsive</span>
              </div>
            </div>
            <div className="project-img">
              <img src={banking_img} />
            </div>
          </a>
        </div>
        <div className="projects">
          <a
            id="work"
            href="https://joshikannan.github.io/Digital-Html-Css/"
            blank="true"
          >
            <div className="project-info">
              <span className="p-head">Digital Website</span>
              <div className="p-l">
                <span>HTML</span> | <span>CSS</span> | <span>Responsive</span> |{" "}
                <span>css-variables</span>
              </div>
            </div>
            <div className="project-img">
              <img src={digital_img} />
            </div>
          </a>
        </div>
        <div className="projects">
          <a
            id="work"
            blank="true"
            href="https://joshikannan.github.io/college-html-css/"
          >
            <div className="project-info">
              <span className="p-head">College website</span>
              <div className="p-l">
                <span>HTML</span> | <span>CSS</span>
              </div>
            </div>
            <div className="project-img">
              <img src={college_img} />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default AllProjects;
