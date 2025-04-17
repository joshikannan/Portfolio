import React, { useState, useEffect } from "react";
import { backdropClasses, Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Zoom in={show}>
      <Fab
        size="medium"
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
          color: "white",
          backgroundColor: "#e37b66",
          "&:hover": {
            backgroundColor: "#e37b66",
          },
        }}
        aria-label="scroll back to top"
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
