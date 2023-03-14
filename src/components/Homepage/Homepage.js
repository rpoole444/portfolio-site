import React from "react";
import "./Homepage.css";

const Homepage = () => {
 
  return (
    <main className="homepage">
      <h1 className="homepage-title">Welcome To Reid Poole's Portfolio</h1>
      <article className="introduction-container">
        <h2 className="intro-title">Thanks for dropping by!</h2>
        <p className="intro">Allow Me to Introduce myself!</p>
        <p className="intro">I'm Reid Poole 👋</p>
        <p className="intro">
          This site is dedicated to my work as a Software Engineer and
          Developer!
        </p>
        <p className="intro">I am also a conservatory trained and New Orleans groomed professional musician,</p> 
        <p className="intro">I am an Educator and Life Long Learner</p> 
        <p className="intro">I am a runner, a joker, and a brewery and bbq tourist</p>
        <p className="intro">And, most importantly, I am a proud husband and father of 2!</p>
        <p className="intro">...Come on in!</p>
      </article>
      <section id="aboutMe" className="about-me">
        <article className="read-about">
          <p className="about-me-text">
            I'm a Frontend Engineer with expertise in Javascript, React.js, Router, HTML, and CSS. I also have Backend experience with building full-stack apps using Express.js, Knex.js, and PostgreSQL.
I'd also like to capture that I am a through-and-through musician that has a deep connection and experience in music. I've been performing full-time in New Orleans as well as on national and international tours for the past 13 years. I relate the language of music to code in many substantial ways that carry over very easily and intuitively. 
I am an Educator that has taught for more than 15 years, I've taught a spectrum of ages, from middle school to high school, and private lesson studios, but I'd like to highlight my experience in Higher Education as a professor of Music Industry at Dillard University. 
I'd like to share that I have experience in Tech and Software from being a digital archivist for the Louis Armstrong House Museum, based in Queens, NY, helping to develop the rich history of Louis Armstrong for easy user and fan access online. I'm especially proud of this because it includes my three passions of Software Development, Music, and Education!
          </p>
        </article>
      </section>
    </main>
  );
};

export default Homepage;
