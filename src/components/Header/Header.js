import React from "react";
import "./Header.css"
import logo from "../assets/music-maker-app.png"
import logo2 from "../assets/insta.png"
import logo3 from "../assets/github-mark.png"
import logo4 from "../assets/linked.png"
import { Route, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="list-container">
        <NavLink to="/" >
          <img src={logo} alt="computer" className="logo" />
        </NavLink>
        <a href="#aboutMe">
          <button className="button">About Me</button>
        </a>
        <a href="#work">
          <button className="button">Work</button>
        </a>
        <a href="#skills"></a>
        <button className="button">Skills & Tools</button>
        <a href="#music"></a>
        <button className="button">Music</button>
        <a href="#contact"></a>
        <button className="button">Contact</button>
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
    </header>
  )
}

export default Header