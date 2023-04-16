import React from "react";
import "./Homepage.css";
import computer from "../assets/computer.png"
import pictureReid from "../assets/TrumpetReid2.jpg"

const Homepage = () => {
 
  return (
    <main className="homepage">
      <h1 className="homepage-title">Welcome To Reid Poole's Portfolio</h1>
      <article className="introduction-container">
        <p className="intro-title">Allow Me to Introduce myself!</p>
        <p className="intro">I'm Reid Poole 👋</p>
        <article className="intro">
          This site is dedicated to my work as a Software Engineer and
          Developer!
        </article>
        <section className="images-container">
          {/* <img className="computer-icon" src={computer} alt="computer" /> */}
          <img className="computer-icon" src={pictureReid} alt="trumpet" />
        </section>
        <article className="intro">
        Additionally, I am a conservatory trained and professional New Orleans Musician.
        I am a passionate Educator and Life Long Learner.
        I am a runner, a joker, and a brewery and bbq tourist.
        Most importantly, I am a proud husband and father of 2!
        ...Come on in!
        </article>
      </article>


      <section id="aboutMe" className="about-me">
        <article className="read-about">
          <h3>Software Development Experience</h3>
          <p className="about-me-text">
            I am a versatile software developer with a strong foundation in JavaScript, React.js, Router, HTML, and CSS. My backend expertise lies in building full-stack applications using Express.js, Knex.js, and PostgreSQL, enabling me to create seamless web experiences.
          </p>
          <p className="about-me-text">
          What sets me apart is my deep connection to music and its language, which I seamlessly relate to code. As a professional musician with 13 years of full-time performance experience in New Orleans and on national and international tours, I have honed my intuition and creativity, allowing me to approach software development from a unique perspective.
          </p>
          <p className="about-me-text">
           I am also a passionate educator with over 15 years of teaching experience, spanning middle school to higher education. My work as a professor of the Music Industry at Dillard University demonstrates my dedication to sharing knowledge and inspiring the next generation.
          </p>
          <p className="about-me-text">
            One of my proudest achievements combines my three passions—software development, music, and education—through my role as a digital archivist for the Louis Armstrong House Museum in Queens, NY. I had the privilege of helping to develop an accessible online platform for fans and users to explore the rich history of Louis Armstrong.
          </p>
          <p className="about-me-text">
            Check out the Louis Armstrong House Museum Digital Collection here: <a className="link" href="https://collections.louisarmstronghouse.org/">LAHM</a>
          </p>
          <p className="about-me-text">
            On a personal note, I am an avid runner, a witty jokester, and a devoted enthusiast of breweries and BBQ joints. Above all, I am a loving husband and proud father of two beautiful children.
          </p>
          <p className="about-me-text">
            My unique background and love for music, education, and technology enable me to approach software development with empathy, creativity, and a deep understanding of human connection, making me a valuable addition to any team.
          </p>
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
              <a href="https://github.com/grant-guru/grant-guru-fe" target="_blank" rel="noreferrer">
                <button className="proj-buttons">Repo</button>
              </a>
              <a href="https://grant-guru-fe.vercel.app/" target="_blank" rel="noreferrer">
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
