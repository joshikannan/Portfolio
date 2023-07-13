import React from "react";
import college_img from "../assets/college.jpeg";
import food_img from "../assets/food.jpeg";
import digital_img from "../assets/digital.jpeg";
import banking_img from "../assets/virtual-banking.jpeg";
import image_gen from "../assets/AI_img_gen.png";
import chat_img from "../assets/AI_chat.png";
import summarize_img from "../assets/AI_Summarise.png";
import Dashboard from "../assets/Dashboard.png";
import social_img from "../assets/social_img.png";
import youtube_img from "../assets/Youtube_img.png";
import Three_js_img from "../assets/Three_js.png";
import keeper_img from "../assets/keeper_img.png";
import Netflix_Img from "../assets/Netflix_Img.png";
import deepam_img from "../assets/deepam_img.png";
const AllProjects = () => {
  return (
    <>
      <div className="skip" id="work">
        Skip to the good part ,<p>" here’s my work ↓"</p>
      </div>
      {/* Freelance project */}
      <h1 className="p-color">Freelance Project</h1>
      <section className="deepam">
        <div className="deepamImg">
          <a href="https://deepamengineering.in/" target="_blank">
            <img src={deepam_img} />{" "}
          </a>
        </div>
        <div className="deepamText">
          <h2 className="deepamhead">Deepam Enginnering</h2>
          <p className="profile-text">
            Achieved a 500% increase in client revenue by designing and
            developing a new website and improving the user experience,
            resulting in a significant impact on the client's business and
            enhanced visibility of their work.
          </p>
          <a href="https://deepamengineering.in/" target="_blank">
            <button className="deepambtn">Take a look</button>
          </a>
        </div>
      </section>
      {/* Open Ai */}
      <h1 className="p-color">OPEN AI Projects</h1>
      <div className="project-align">
        <div className="projects">
          <a href="https://reliable-narwhal-96d0bc.netlify.app" target="_blank">
            <div className="project-info">
              <span className="p-head">AI_Image_Generator</span>
              <div className="p-l">
                <span>Open AI</span> | <span>mangoose</span> | |
                <span>React JS</span> |<span>Cloudinary</span>| |
                <span>Express JS</span> | <span>Nodemon</span> |{" "}
                <span>Tailwind CSS</span>
              </div>
            </div>
            <div className="project-img">
              <img src={image_gen} />
            </div>
          </a>
        </div>
        <div className="projects">
          <a
            id="work"
            href="https://candid-kataifi-3ecea2.netlify.app"
            target="_blank"
          >
            <div className="project-info">
              <span className="p-head">AI_Chat_GPt</span>
              <div className="p-l">
                <span>Open AI</span> | <span>Express</span> |{" "}
                <span>Nodemon</span>| |<span>dotenv</span> |<span>cors</span>
              </div>
            </div>
            <div className="project-img">
              <img src={chat_img} />
            </div>
          </a>
        </div>
        <div className="projects">
          <a
            id="work"
            href=" https://gleeful-salamander-0fc302.netlify.app"
            target="_blank"
          >
            <div className="project-info">
              <span className="p-head">AI_Summarize</span>
              <div className="p-l">
                <span>React</span> | <span>Redux</span> |{" "}
                <span>Redux Toolkit</span> | <span>Cors</span>
              </div>
            </div>
            <div className="project-img">
              <img src={summarize_img} />
            </div>
          </a>
        </div>
      </div>
      <h1 className="projects-gap p-color">React Projects</h1>
      <div className="project-align">
        <div className="projects">
          <a
            id="work"
            href="https://joshikannan.github.io/Admin_Dashboard_React_syncfusion/"
            target="_blank"
          >
            <div className="project-info">
              <span className="p-head">Admin Dashboard</span>
              <div className="p-l">
                <span>Syncfusion</span> | <span>Router</span> |{" "}
                <span>Tailwind</span> | <span>Calender</span> |{" "}
                <span>Kanban</span> | <span>color_picker</span>
              </div>
            </div>
            <div className="project-img">
              <img src={Dashboard} />
            </div>
          </a>
        </div>
        <div className="projects">
          <a id="work" href="https://hr9zww-3000.csb.app/" target="_blank">
            <div className="project-info">
              <span className="p-head">Social Media</span>
              <div className="p-l">
                <span>React</span> | <span>SASS</span> |{" "}
                <span>Material UI</span> | <span>Router</span>
              </div>
            </div>
            <div className="project-img">
              <img src={social_img} />
            </div>
          </a>
        </div>
        <div className="projects">
          <a id="work" href="https://h8jw29-3000.csb.app/" target="_blank">
            <div className="project-info">
              <span className="p-head">Youtube Clone</span>
              <div className="p-l">
                <span>React</span> | <span>Styled_Components</span> |{" "}
                <span>Material UI</span> | <span>Router_Dom</span>
              </div>
            </div>
            <div className="project-img">
              <img src={youtube_img} />
            </div>
          </a>
        </div>
        <div className="projects">
          <a id="work" target="_blank" href="https://e8zn98-5173.csb.app/">
            <div className="project-info">
              <span className="p-head">Portfolio on Three JS</span>
              <div className="p-l">
                <span>React</span> | <span>Vite</span>| <span>Three JS</span>|{" "}
                <span>Timeline Component</span>| <span>Three Fiber</span>
              </div>
            </div>
            <div className="project-img">
              <img src={Three_js_img} />
            </div>
          </a>
        </div>
        <div className="projects">
          <a id="work" target="_blank" href="https://q1h5sn-3000.csb.app/">
            <div className="project-info">
              <span className="p-head">Keeper - Notes Taking</span>
              <div className="p-l">
                <span>Html</span> | <span>CSS</span> | <span>Javascript</span> |{" "}
                <span>React</span>
              </div>
            </div>
            <div className="project-img">
              <img src={keeper_img} />
            </div>
          </a>
        </div>
        <div className="projects">
          <a
            id="work"
            target="_blank"
            href="https://netflix.joshikannan.repl.co/"
          >
            <div className="project-info">
              <span className="p-head">Netflix Clone</span>
              <div className="p-l">
                <span>HTML</span> | <span>CSS</span> | <span>JavaScript</span> |{" "}
                <span>API</span>
              </div>
            </div>
            <div className="project-img">
              <img src={Netflix_Img} />
            </div>
          </a>
        </div>
      </div>
      <h1 className="projects-gap p-color">HTML & CSS Projects</h1>
      <div className="project-align">
        <div className="projects">
          <a
            id="work"
            href="https://joshikannan.github.io/Restaurant-Html-Css/"
            target="_blank"
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
            target="_blank"
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
            target="_blank"
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
            target="_blank"
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
