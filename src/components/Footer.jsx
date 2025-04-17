import React from "react";
import Resume from "../assets/Joshikannan_Full-stack_Resume.pdf";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="contact-links">
          {/* <a
            className="c-l"
            target="_blank"
            href="mailto:joshikannan9977@gmail.com"
          >
            Email
          </a>{" "}
          | */}
          <a
            className="c-l"
            target="_blank"
            href="https://www.linkedin.com/in/joshi-kannan/"
          >
            Linked In
          </a>{" "}
          |
          <a
            className="c-l"
            target="_blank"
            href="https://github.com/joshikannan"
          >
            Github
          </a>{" "}
          |
          <a className="c-l" target="_blank" href={Resume}>
            Resume
          </a>
        </div>
        <div style={{ color: "lightgray" }}>
          © 2025 joshikannan All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
