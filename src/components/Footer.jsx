import React from "react";
import Resume from "../assets/resumejk.pdf";

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
            href="https://www.linkedin.com/in/joshikannan-neelanarayanan/"
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
