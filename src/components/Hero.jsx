import React from "react";
import Profile from "../assets/profile.svg";
import Resume from "../assets/resumejk.pdf";

const Hero = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home-img">
          <img src={Profile} />{" "}
        </div>
        <div className="home-text">
          <h2 className="profile-text">
            Hey, I'm Joshikannan, A Developer by self-learning. I like to think
            of myself as a Full-Stack developer who can develop the product from
            scratch to make people life better.
          </h2>
          <div className="contact-links">
            <a
              className="c-l"
              target="_blank"
              href="mailto:joshikannan9977@gmail.com"
            >
              Email
            </a>
            |
            <a
              className="c-l"
              blank="true"
              target="_blank"
              href="https://www.linkedin.com/in/joshikannan-neelanarayanan/"
            >
              Linked In
            </a>{" "}
            |
            <a
              className="c-l"
              blank="true"
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
        </div>
      </section>
    </>
  );
};

export default Hero;
