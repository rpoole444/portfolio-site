import React from "react";
import "./Homepage.css";

const Homepage = () => {
 
  return (
    <main className="homepage">
      <article className="introduction-container">
        <h2 className="intro-title">Thanks for dropping by!</h2>
        <p className="intro">Allow Me to Introduce myself!</p>
        <p className="intro">I'm Reid Poole 👋</p>
        <p className="intro">
          This site is dedicated to my work as a Software Engineer and
          Developer!
        </p>
        <p className="intro">...Come on in!</p>
      </article>
      <button className="homepage-button">Learn More</button>
    </main>
  );
};

export default Homepage;
