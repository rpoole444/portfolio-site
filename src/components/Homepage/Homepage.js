import React from "react";
import "./Homepage.css";
import computer from "../assets/computer.png"
import trumpet from "../assets/trumpet.png"

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
        <section className="images-container">
          <img className="computer-icon" src={computer} alt="computer" />
          <img className="computer-icon" src={trumpet} alt="trumpet" />
        </section>
        <p className="intro">Additionally, I am a conservatory trained and professional New Orleans Musician</p> 
        <p className="intro">I am a passionate Educator and Life Long Learner</p> 
        <p className="intro">I am a runner, a joker, and a brewery and bbq tourist</p>
        <p className="intro">Most importantly, I am a proud husband and father of 2!</p>
        <p className="intro">...Come on in!</p>
      </article>


      <section id="aboutMe" className="about-me">
        <article className="read-about">
          <h3>Software Development Experience</h3>
          <p className="about-me-text">
            My expertise lies within Javascript, React.js, Router, HTML, and CSS. I also have Backend experience with building full-stack apps using Express.js, Knex.js, and PostgreSQL.
          </p>
          <p className="about-me-text">I am a through-and-through musician that has a deep connection and experience in music. I've been performing full-time in New Orleans as well as on national and international tours for the past 13 years. I relate the language of music to code in many substantial ways that carry over very easily and intuitively. 
          </p>
          <p className="about-me-text">I am an Educator that has taught for more than 15 years to a spectrum of ages, from middle school to high school, and private lesson studios, but I'd like to highlight my experience in Higher Education as a professor of Music Industry at Dillard University. 
          </p>
          <p className="about-me-text">Finally, I'd like to share that I have experience in Tech and Software from being a digital archivist for the Louis Armstrong House Museum, based in Queens, NY, helping to develop the rich history of Louis Armstrong for easy user and fan access online. I'm especially proud of this because it includes my three passions of Software Development, Music, and Education!
          </p>
          <p className="about-me-text link">Check out the Louis Armstrong House Museum Digital Collection here: <a href="https://collections.louisarmstronghouse.org/">LAHM</a></p>
        </article>
      </section>
      <section id="work" className="work-container">
        <section className="project-container">
          <h2 className="proj-title">Grant Guru</h2>
          <section className="project-info">
            <iframe  title="grantGuru" frameBorder="0" className="giphy-embed grant-guru"></iframe>
            <section>
              <article className="proj-description">
                <p className="description-text">
                Grant Guru  is an application that allows a user to explore a database full of Scholarship and grant applications to Help students find fincial aid with ease!  Upon submition of the form, queries are sent to our backend where they filter the array of scholarships to fit the parameters and send us the filtered scholarships.A user is able to add and delete scholarships to and from their saved window. The app incorporates a responsive layout and will change its structure to fit both large and mobile displays. 
                </p>
              </article>
              <a href="https://github.com/jheidepriem/fitLit-tracker" target="_blank" rel="noreferrer">
                <button className="proj-buttons">Repo</button>
              </a>
            </section>
          </section>
        </section>
        <section className="project-container">
          <h2 className="proj-title">Shelf Life</h2>
          <section className="project-info">
            <iframe src="https://giphy.com/embed/yKym67WoKt3AIQ38UH"  title="shelfLife" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            <section>
              <article className="proj-description">
                <p className="description-text">
                  Do you have a hard time picking out the right book to read? Well look no further, Shelf Life is here to help! This App is a book recomendation app where you are able to look at a database of books referred by the Creators and add the book to your favorites based on your interest and the recomendation! Further more, you are able to search the New York Times top 100 best sellers and add your recommendation to the recommendation database.
                </p>
              </article>
              <a href="https://github.com/rpoole444/shelf-life-FE" target="_blank" rel="noreferrer">
                <button className="proj-buttons">Repo</button>
              </a>
              <a href="https://shelf-life-k0fgat1zg-rpoole444.vercel.app/" target="_blank" rel="noreferrer">
                <button className="proj-buttons">Visit Site</button>
              </a>
            </section>
          </section>
        </section>
        <section className="project-container">
          <h2 className="proj-title">Ceaseless Cinemas</h2>
          <section className="project-info">
            <iframe title="ceaselessCinema" frameBorder="0" className="giphy-embed ceaseless-cinema" allowFullScreen></iframe>
            <section>
              <article className="proj-description">
                <p className="description-text">
                If you're interested in the latest films, Ceaseless Cinema is here for you! You can search through all of the films and find their trailers and film details such as, runtime, release date, budge, revenue, description, and their official trailer.
                </p>
              </article>
              <a href="https://github.com/rpoole444/rancidTomatillos" target="_blank" rel="noreferrer">
                <button className="proj-buttons">Repo</button>
              </a>
              <a href="https://rancid-tomatillos-tau.vercel.app/" target="_blank" rel="noreferrer">
                <button className="proj-buttons">Visit Site</button>
              </a>
            </section>
          </section>
        </section>
        <section className="project-container">
          <h2 className="proj-title">Fit Lit</h2>
          <section className="project-info">
            <iframe title="fitLit" frameBorder="0" className="giphy-embed fit-lit"></iframe>
            <section>
              <article className="proj-description">
                <p className="description-text">
                The purpose of our app, Fit Lit, is to store and display a user's data, such as sleep, hydration, and activity (think steps) for the latest day and week including comparisons to the average of all users for each topic. The user is able to add their own data for a given date and all of the data will be updated with the new additional data included
                </p>
              </article>
              <a href="https://github.com/jheidepriem/fitLit-tracker" target="_blank" rel="noreferrer">
                <button className="proj-buttons">Repo</button>
              </a>
            </section>
          </section>
        </section>
        <section className="project-container">
          <h2 className="proj-title">Artist Archive</h2>
          <section className="project-info">
            <iframe title="artistArchive" frameBorder="0" className="giphy-embed artist-archive" allowFullScreen></iframe>
            <section className="description-buttons">
              <article className="proj-description">
                <p className="description-text">
                  Artist Archive aims to inspire the uninspired ear! This fullstack app contains a special collection of Incredible musical artists from many differing genres. Look through the Archive and find new and exciting music artists! Each artist's click takes you to a description and an inspiring music video of the Artist. But wait, if a user finds an artist that resonates with them, you can collect your favorites into private favorites collections! Don't waste another moment and find the deployed site below!!
                </p>
              </article>
              <a href="https://github.com/rpoole444/ArtistArchive-FE" target="_blank" rel="noreferrer">
                <button className="proj-buttons">Repo</button>
              </a>
              <a href="https://artist-archive-fe.herokuapp.com/" target="_blank" rel="noreferrer">
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
