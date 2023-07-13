import React from "react";
import Skills_svg from "../assets/skills.svg";
const Skills = () => {
  return (
    <>
      <div id="about" className="skill-text">
        Technology I Know
      </div>
      <section className="skills">
        <div className="skillsList">
          <ul>
            <span>Front-end:</span>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>LESS</li>
            <li>Javascript</li>
            <li>Jquery</li>
          </ul>
        </div>
        <div className="skillsList">
          <ul>
            <span>Front-end Frameworks:</span>
            <li>React JS</li>
            <li>React Query</li>
            <li>Redux</li>
            <li>Styled Components</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>SyncFusion</li>
          </ul>
        </div>
        <div className="skillsList">
          <ul>
            <span>Back-end:</span>
            <li>JAVA</li>
            <li>DSA</li>
            <li>Node JS</li>
            <li>Express JS</li>
            <li>MySQl</li>
            <li>Mongo DB</li>
            <li>Firebase</li>
          </ul>
        </div>

        <div className="skillsList">
          <ul>
            <span>Technical Tools:</span>
            <li>Github</li>
            <li>Versal</li>
            <li>Hostinger</li>
            <li>Netlify</li>
            <li>Render</li>
            <li>Replit</li>
            <li>Codesandbox</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Skills;
