import React from "react";
// import Resume from "../assets/Joshikannan-Resume.pdf";
import Resume from "../assets/latest.pdf";

const Footer = () => {
  return (
    <>
      <footer>
        <div>© 2023 joshikannan All Rights Reserved</div>
        <div className="contact-links">
          <a
            className="c-l"
            target="_blank"
            href="mailto:joshikannan9977@gmail.com"
          >
            Email
          </a>{" "}
          /
          <a
            className="c-l"
            target="_blank"
            href="https://www.linkedin.com/in/joshi-kanan-1366b724a/"
          >
            Linked In
          </a>{" "}
          /
          <a
            className="c-l"
            target="_blank"
            href="https://github.com/joshikannan"
          >
            Github
          </a>{" "}
          /
          <a className="c-l" target="_blank" href={Resume}>
            Resume
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
