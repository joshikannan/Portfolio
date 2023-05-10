import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div>© 2023 joshikannan All Rights Reserved</div>
        <div className="contact-links">
          <a className="c-l" blank="true" href="mailto:joshikannan99@gmail.com">
            Email
          </a>{" "}
          /
          <a
            className="c-l"
            blank="true"
            href="https://www.linkedin.com/in/joshi-kanan-1366b724a/"
          >
            Linked In
          </a>{" "}
          /
          <a className="c-l" blank="true" href="https://github.com/joshikannan">
            Github
          </a>{" "}
          /
          <a
            className="c-l"
            blank="true"
            href="./assests/Joshikannan-Resume.pdf"
          >
            Resume
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
