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
import { Stack, Box, Typography, Button, Grid } from "@mui/material";
import nearleport from "../assets/nearleport.png";

const AllProjects = () => {
  return (
    <>
      <div className="skip" id="work">
        Skip to the good part ,<p>" here’s my work ↓"</p>
      </div>
      {/* Freelance project */}

      <h1 className="p-color">Live Products</h1>

      <section className="deepam">
        <Stack
          sx={{
            flexDirection: {
              xs: "column", // mobile
              md: "row", // medium screens and up
            },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
            padding: "20px",
            borderRadius: "20px",
            backgroundColor: "#d2d2d23d",
          }}
        >
          {/* Image Section */}
          <Box
            component="a"
            href="https://foil-single-ea6.notion.site/My-Works-63cf148340fe4c0eb70206e9ccb57c60"
            target="_blank"
            rel="noopener"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: {
                xs: "100%",
                md: "40%",
              },
            }}
          >
            <Box
              component="img"
              src={nearleport}
              alt="Deepam Engineering"
              sx={{
                maxWidth: "100%",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Box>

          {/* Text Section */}
          <Box
            sx={{
              textAlign: {
                xs: "center",
                md: "left",
              },
              width: {
                xs: "100%",
                md: "50%",
              },
            }}
          >
            <Typography variant="h4" sx={{ mb: 2 }}>
              Nearle Technology
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              At Nearle Technology, I designed and developed multiple
              business-critical web applications including a Smart Saloon App,
              an Order Delivery System with real-time tracking, and a Deals &
              Discounts platform. These solutions streamlined operations,
              improved customer engagement, and enhanced revenue generation for
              businesses by modernizing user experiences and backend workflows.
            </Typography>
            <Button
              className="p-color"
              variant="contained"
              href="https://foil-single-ea6.notion.site/My-Works-63cf148340fe4c0eb70206e9ccb57c60"
              target="_blank"
              sx={{
                backgroundColor: "#db6f5a ",
                "&:hover": {
                  backgroundColor: "#db6f5c",
                },
              }}
            >
              Take a look
            </Button>
          </Box>
        </Stack>
      </section>
      <h1 className="p-color">Freelance project</h1>

      <section className="deepam">
        <Stack
          sx={{
            flexDirection: {
              xs: "column", // mobile
              md: "row", // medium screens and up
            },
            alignItems: "center",
            justifyContent: "space-between",

            gap: 4,
            p: 2,
            padding: "20px",
            borderRadius: "20px",
            backgroundColor: "#d2d2d23d",
          }}
        >
          {/* Image Section */}
          <Box
            component="a"
            href="https://deepamengineering.in/"
            target="_blank"
            rel="noopener"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: {
                xs: "100%",
                md: "40%",
              },
            }}
          >
            <Box
              component="img"
              src={deepam_img}
              alt="Deepam Engineering"
              sx={{
                maxWidth: "100%",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Box>

          {/* Text Section */}
          <Box
            sx={{
              textAlign: {
                xs: "center",
                md: "left",
              },
              width: {
                xs: "100%",
                md: "50%",
              },
            }}
          >
            <Typography variant="h4" sx={{ mb: 2 }}>
              Deepam Engineering
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Designed and developed a modern, responsive website for Deepam
              Engineering, significantly enhancing user experience and digital
              presence, leading to increased client engagement and improved
              business visibility.
            </Typography>
            <Button
              className="p-color"
              variant="contained"
              href="https://deepamengineering.in/"
              target="_blank"
              sx={{
                backgroundColor: "#db6f5a ",
                "&:hover": {
                  backgroundColor: "#db6f5c",
                },
              }}
            >
              Take a look
            </Button>
          </Box>
        </Stack>
      </section>
      {/* Open Ai */}
      <h1 className="p-color">OPEN AI Projects</h1>
      <div className="project-align">
        {/* <div className="projects">
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
        </div> */}

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
              <img style={{}} src={summarize_img} />
            </div>
          </a>
        </div>
        <div className="projects">
          <a
            id="work"
            target="_blank"
            // href="https://netflix.joshikannan.repl.co/"
            href="https://joshikannan.github.io/Netflix_demo/"
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
          {/* <a id="work" href="https://hr9zww-3000.csb.app/" target="_blank"> */}
          <a
            id="work"
            href="https://react-socialmedis.netlify.app/"
            target="_blank"
          >
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
          <a
            id="work"
            href="https://youtube-cloneeeeee.netlify.app/"
            target="_blank"
          >
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
        {/* <div className="projects">
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
        </div> */}
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
