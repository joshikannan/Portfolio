import React, { useState } from "react";
// import Resume from "../assets/Joshikannan-Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Resume from "../assets/resumejk.pdf";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

const main = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", mr: 3 }}>
        <IconButton onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ mt: -4 }}>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
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
              {/* <li onClick="hideItems()">
                <a className="link" href={Resume} target="_blank">
                  Resume
                </a>
              </li> */}
            </div>
          </ul>
        </div>
        <div className="menuIcon" id="menu-icon">
          <FontAwesomeIcon
            id="barIcon"
            icon={faBars}
            onClick={toggleDrawer(true)}
          />
          <Drawer
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
            PaperProps={{
              sx: {
                width: 250,
                height: "auto", // set height to auto
                maxHeight: "90vh", // optional max height
                borderRadius: "8px", // optional rounded corners
              },
            }}
          >
            {list()}
          </Drawer>
        </div>
      </header>
    </>
  );
};

export default main;
