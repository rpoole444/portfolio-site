import React from "react";
import "./Homepage.css";
import fitLitGif from "../assets/gitLitGif1.gif"
import artistArchiveGif2 from "../assets/artistArchiveGif2.gif"
import ceaselessCinemaGif from "../assets/ceaselessCinema1.gif"
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
        <p className="intro">I am also a conservatory trained and New Orleans professional musician,</p> 
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
      <section id="work" className="work-container">
        <section className="project-container">
          <h2 className="proj-title">Artist Archive</h2>
          <section className="project-info">
            <iframe src={artistArchiveGif2} title="artistArchive" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            <section className="description-buttons">
              <article className="proj-description">Artist Archive aims to inspire the uninspired ear!  This website contains a special collection of Incredible musical artist from many differing genres.  Look through the Archive and find new and exciting musical artists!  Each artist click takes you to a description and an inspiring musical video of the Artist.  But wait, if a user finds an artists that resonate with them, you can collect your favorites into a private favorites collections!  Don't waste another moment and find the deployed site below!!</article>
              <a href="https://github.com/rpoole444/ArtistArchive-FE">
                <button className="proj-buttons">Repo</button>
              </a>
              <a href="https://artist-archive-fe.herokuapp.com/">
                <button className="proj-buttons">Visit Site</button>
              </a>
            </section>
          </section>
        </section>
        <section className="project-container">
          <h2 className="proj-title">Shelf Life</h2>
          <section className="project-info">
            <iframe src="https://giphy.com/embed/yKym67WoKt3AIQ38UH"  title="shelfLife" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            <section>
              <article className="proj-description">Do you have a hard time picking out the right book to read? Well look no further, Shelf Life is here to help! This App is a book recomendation app where you are able to look at a database of books referred by the Creators and add the book to your favorites based on your interest and the recomendation! Further more, you are able to search the New York Times top 100 best sellers and add your recommendation to the recommendation database.</article>
              <a href="https://github.com/rpoole444/shelf-life-FE">
                <button className="proj-buttons">Repo</button>
              </a>
              <a href="https://shelf-life-k0fgat1zg-rpoole444.vercel.app/">
                <button className="proj-buttons">Visit Site</button>
              </a>
            </section>
          </section>
        </section>
        <section className="project-container">
          <h2 className="proj-title">Fit Lit</h2>
          <section className="project-info">
            <iframe src={fitLitGif} title="fitLit" frameBorder="0" className="giphy-embed fit-lit"></iframe>
            <section>
              <article className="proj-description">The purpose of this app is to display a user's data, such as sleep, hydration and activity for the latest day and week including comparisions to the average of all user's for each topic. The user is able to add their own data for a given date.</article>
              <a href="https://github.com/jheidepriem/fitLit-tracker">
                <button className="proj-buttons">Repo</button>
              </a>
            </section>
          </section>
        </section>
        <section className="project-container">
          <h2 className="proj-title">Ceaseless Cinemas</h2>
          <section className="project-info">
            <iframe src={ceaselessCinemaGif} title="ceaselessCinema" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            <section>
              <article className="proj-description">If you're interested in the latest films, Ceaseless Cinema is here for you! You can search through all of the films and find their trailers and film details such as, runtime, release date, budge, revenue, description, and their official trailer.</article>
              <a href="https://github.com/rpoole444/rancidTomatillos">
                <button className="proj-buttons">Repo</button>
              </a>
              <a href="https://rancid-tomatillos-tau.vercel.app/">
                <button className="proj-buttons">Visit Site</button>
              </a>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Homepage;
