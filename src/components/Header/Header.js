import React from "react";
import "./Header.css"
import logo from "./music-maker-app.png"
import logo2 from "./insta.png"
import logo3 from "./github-mark.png"
import logo4 from "./linked.png"

const Header = () => {
  return (
    <header>
      <div className="list-container">
        <img src={logo} alt="computer" className="logo" />
        <a>About Me</a>
        <a>Work</a>
        <a>Skills & Tools</a>
        <a>Music</a>
        <a>Contact</a>
        <a href="https://www.instagram.com/reid_poole_music/" target="_blank" rel="noreferrer">
          <img className="logo-side" src={logo2} alt="instagram-logo"/>
        </a>
        <a href="https://github.com/rpoole444" target="_blank" rel="noreferrer">
          <img className="logo-side" src={logo3} alt="github-logo" />
        </a>
        <a href="https://www.linkedin.com/in/reid-poole/" target="_blank" rel="noreferrer">
          <img className="logo-side" src={logo4} alt="linked-in-logo" />
        </a>
      </div>
      <h1 className="homepage-title">Welcome To Reid Poole's Portfolio</h1>

    </header>
  )
}

export default Header