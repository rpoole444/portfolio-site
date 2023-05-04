import React from "react";
import "./LandingPage.css";
import logo2 from "../assets/insta.png";
import logo3 from "../assets/github-mark.png";
import logo4 from "../assets/linked.png";
import trumpet1 from "../assets/TrumpetReid1.jpg";
import { useHistory } from "react-router-dom";


const LandingPage = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push('/main-page')
  }
  return (
    <div className="entrance-container">
      <aside className="aside">
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
        <section className="icon-skillz-container">
          <i className="devicon-typescript-plain colored skillz"></i>
          <i className="devicon-react-original-wordmark colored skillz"></i>
          <i className="devicon-express-original-wordmark skillz"></i>
          <i className="devicon-postgresql-plain-wordmark skillz"></i>
        </section>
      </aside>
      <section className="main-section">
        <section className="info-section">
          <h1 className="main-title"> Reid Poole - Software Engineer</h1>
          <h2 className="sub-main-title"> Musician | Educator | Father | Husband</h2>
          <button class="full-rounded" onClick={() => handleClick()}>
          <span>Enter Site</span>
          <div class="border full-rounded"></div></button>
         
        </section>
        <img className="reid-photo"src={trumpet1} alt="Reid Playing Trumpet" />
      </section>
    </div>
  );
};

export default LandingPage;
