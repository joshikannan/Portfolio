import React from "react";
import Resume from "../assets/Joshikannan-Resume.pdf";
import Profile from "../assets/profile.svg";

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
              blank="true"
              href="mailto:joshikannan99@gmail.com"
            >
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
            <a
              className="c-l"
              blank="true"
              href="https://github.com/joshikannan"
            >
              Github
            </a>{" "}
            /
            <a className="c-l" blank="true" href={Resume}>
              Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
