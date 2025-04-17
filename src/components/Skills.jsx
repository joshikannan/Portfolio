import React from "react";
import Skills_svg from "../assets/skills.svg";
import { Box, Typography, Grid, Chip, Stack, Paper } from "@mui/material";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaLess,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
  FaDatabase,
  FaCode,
  FaTools,
  FaJava,
  FaDocker,
  FaBitbucket,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";

import {
  SiTypescript,
  SiJquery,
  SiReactquery,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  // SiSyncfusion,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiNetlify,
  SiReplit,
  SiCodesandbox,
  SiThealgorithms,
  SiNotion,
} from "react-icons/si";
import { DatabaseOutlined, JavaOutlined } from "@ant-design/icons";
import { PiLadderSimpleBold } from "react-icons/pi";

const Skills = () => {
  const skillsData = [
    {
      category: "Front-end",
      skills: [
        { label: "HTML5", icon: <FaHtml5 color="#e44d26" /> },
        { label: "CSS 3", icon: <FaCss3Alt color="#1572b6" /> },
        { label: "SASS", icon: <FaSass color="#cd6799" /> },
        { label: "LESS", icon: <FaLess color="#1d365d" /> },
        { label: "JavaScript", icon: <FaJs color="#f0db4f" /> },
        { label: "TypeScript", icon: <SiTypescript color="#3178c6" /> },
        { label: "jQuery", icon: <SiJquery color="#0769ad" /> },
      ],
    },
    {
      category: "Front-end Frameworks",
      skills: [
        { label: "React JS", icon: <FaReact color="#61dafb" /> },
        { label: "TanStack Query", icon: <SiReactquery color="#FF4154" /> },
        { label: "Redux", icon: <SiRedux color="#764abc" /> },
        {
          label: "Styled Components",
          icon: <SiStyledcomponents color="#db7093" />,
        },
        { label: "Bootstrap", icon: <FaBootstrap color="#7952b3" /> },
        { label: "Tailwind", icon: <SiTailwindcss color="#38bdf8" /> },
      ],
    },
    {
      category: "Back-end",
      skills: [
        { label: "Node JS", icon: <FaNodeJs color="#68a063" /> },
        { label: "Express JS", icon: <FaNodeJs color="#000000" /> },
        { label: "Mongo DB", icon: <SiMongodb color="#4db33d" /> },
        { label: "JAVA", icon: <FaJava color="#ff5722" /> },
        { label: "DSA", icon: <SiThealgorithms color="#03a9f4" /> },

        { label: "Golang", icon: <FaGolang color="#00758f" /> },

        { label: "Firebase", icon: <SiFirebase color="#ff5722" /> },
      ],
    },
    {
      category: "Technical Tools",
      skills: [
        { label: "GitHub", icon: <FaGithub /> },
        {
          label: "Bitbucket",
          icon: <FaBitbucket color="#64b5f6" />,
        },
        { label: "Notion", icon: <SiNotion color="#010101" /> },
        { label: "Docker", icon: <FaDocker color="#007BFF" /> },
        { label: "Versal", icon: <FaTools color="#4db33d" /> },
        {
          label: "Hostinger",
          icon: <PiLadderSimpleBold color="#673ab7" />,
        },
        { label: "Netlify", icon: <SiNetlify color="#00C7B7" /> },
        { label: "Render", icon: <FaTools color="#03A9F4" /> },
        { label: "Replit", icon: <SiReplit color="#f26207" /> },
      ],
    },
  ];

  return (
    <>
      <div id="about" className="skill-text" style={{ marginTop: "-50px" }}>
        Technology I Know
      </div>
      <Box sx={{ width: "100%" }}>
        {/* Section Title */}

        {/* Skills Grid */}
        <Grid
          container
          spacing={3}
          sx={{
            width: "100%",
          }}
        >
          {skillsData.map((section, index) => (
            <Grid item xs={12} key={index} spacing={2} sx={{ mt: 5 }}>
              <Typography
                className="p-color"
                variant="h6"
                sx={{
                  mb: 5,
                  fontWeight: "bold",
                  textAlign: {
                    xs: "left", // or "start"
                    md: "center",
                  },
                }}
              >
                {section.category}
              </Typography>

              <Paper elevation={3} sx={{ p: 2, borderRadius: "16px" }}>
                <Grid
                  container
                  spacing={2}
                  justifyContent="center" // Center the chips horizontally
                >
                  {section.skills.map((skill, i) => (
                    <Grid item xs="auto" key={i}>
                      <Chip
                        icon={skill.icon}
                        label={skill.label}
                        sx={{
                          fontSize: "0.95rem",
                          px: 2,
                          py: 1.5,
                          height: "48px",
                          backgroundColor: "#f5f5f5",
                          "& .MuiChip-icon": {
                            fontSize: "1.4rem",
                          },
                          "&:hover": {
                            backgroundColor: "#e0f7fa",
                          },
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/*
      <section className="skills">
        <div className="skillsList">
          <ul>
            <span>Front-end:</span>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>LESS</li>
            <li>Javascript</li>
            <li>Typescript</li>
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
      </section> */}
    </>
  );
};

export default Skills;
