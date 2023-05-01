import React from "react";
import "./LandingPage.css";
import logo2 from "../assets/insta.png";
import logo3 from "../assets/github-mark.png";
import logo4 from "../assets/linked.png";
import emailImg from "../assets/email.png";
import Header from "../Header/Header";

const LandingPage = () => {
  return (
    <div className="entrance-container">
      <aside className="aside">
        <section className="icon-skillz-container">
          <i className="devicon-typescript-plain colored skillz"></i>
          <i className="devicon-react-original-wordmark colored skillz"></i>
          <i className="devicon-express-original-wordmark skillz"></i>
          <i className="devicon-postgresql-plain-wordmark skillz"></i>
        </section>
        <section className="social-logos">
          <a
            href="https://www.instagram.com/reid_poole_music/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="logo-side" src={logo2} alt="instagram-logo" />
          </a>
          <a
            href="https://github.com/rpoole444"
            target="_blank"
            rel="noreferrer"
          >
            <img className="logo-side" src={logo3} alt="github-logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/reid-poole/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="logo-side" src={logo4} alt="linked-in-logo" />
          </a>
        </section>
      </aside>
      <img src={emailImg} className="email-icon" />
    </div>
  );
};

export default LandingPage;
