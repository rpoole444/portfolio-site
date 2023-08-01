import React from "react";
import "./Homepage.css";
import ReidBeach from "../assets/ReidBeach.jpg";
import pictureReid from "../assets/TrumpetReid2.jpg";
import ContactForm from "../ContactForm/ContactForm";

const Homepage = () => {
  return (
    <main className="homepage" id="home">
      <h1 className="homepage-title">Welcome To Reid Poole's Portfolio</h1>
      <article className="introduction-container">
        <h2 className="intro">
          My site is dedicated to my work as a Software Engineer and Developer!
        </h2>
        <section className="images-container">
          <img className="computer-icon" src={ReidBeach} alt="computer" />
          <img className="computer-icon" src={pictureReid} alt="trumpet" />
        </section>
          <a
            href="https://docs.google.com/document/d/1CNteHIPiknUZhz6h1OpUYTilBPr_m1SUuJb5u3t1llo/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="proj-buttons">Take A Look at My Resume!</button>
          </a>
      </article>
      <section id="aboutMe" className="about-me">
        <article className="read-about">
          <h3>Software Development Experience</h3>
          <p className="about-me-text">
            I am Reid Poole, a Software Engineer with a rhythm. My journey through music and education has led me to the world of technology, creating a harmonic intersection of creativity, teaching, and programming.
          </p>
          <p className="about-me-text">
            Diving into software development with the same passion I have for music, I have gained proficiency in various technologies, including JavaScript, React.js, TypeScript, Express.js, AWS(Cognito, Lambda), PostgreSQL and DynamoDB, among others. With over 2000 hours of coding under my belt, I can confidently orchestrate full-stack applications that deliver seamless and engaging web experiences.
          </p>
          <p className="about-me-text">
            For 13 years, I've been hitting high notes as a full-time musician, performing both locally in New Orleans and on national and international tours. I don't just play music; I breathe music. It's this deep-rooted bond with musical language that lends a unique rhythm to my code, adding a layer of creativity, intuition, and structure to my software development practices.
          </p>
          <p className="about-me-text">
            Teaching has been another key motif in my symphony of experiences. For over 15 years, I have been inspiring students across various age levels, from middle school to university. As a former professor in the Music Industry at Dillard University, I have had the privilege of sharing my knowledge and passion with the next generation of creatives.
          </p>
          <p className="about-me-text">
            One of the grand crescendos in my career was serving as a digital archivist for the Louis Armstrong House Museum, where my love for software development, music, and education harmonized in a beautiful opus. Through this role, I had the unique opportunity to bring the rich history of Louis Armstrong closer to fans and users worldwide. Check out the Louis Armstrong House Museum Digital Collection here:{" "}
            <a
              className="link"
              href="https://collections.louisarmstronghouse.org/"
            >
              LAHM
            </a>
          </p>
          <p className="about-me-text">
            Off the stage and away from the keyboard, I am an avid runner and a connoisseur of breweries and BBQ joints. At the end of the day, my favorite role is being a loving husband and a proud father of two amazing kids.
          </p>
          <p className="about-me-text">
            With a score composed of empathy, creativity, and a deep understanding of human connection, I approach software development with a unique melody. Whether I'm leading a cross-functional team or supporting one, my goal is always to inspire, innovate, and impact, one line of code (or note) at a time. Welcome to the symphony of my life. Let's Create together.
          </p>
        </article>
      </section>
      <section id="work" className="work-container">
        <h2>Personal and Professional Projects</h2>
        <section className="project-container">
          <h2 className="proj-title">Fiction Fountain</h2>
          <section className="project-info">
            <iframe
              title="fictionFountain"
              frameBorder="0"
              className="giphy-embed fiction-fountain"
            ></iframe>
            <section>
              <article className="proj-description">
                <p className="description-text">
                  Fiction Fountain is an application that allows a user to
                  generate a bedtime of story-time Story based on a prompt
                  directed to the Openai Chatbot, additionally users are able to
                  generated a picture! On load you can choose to generate a
                  story or a picture, and then you are taken to a page with an
                  input where you can add a prompt for the bot to generate a
                  story. Upon submition of the prompt you are taken to a screen
                  to view the generated story or image. The app incorporates a
                  responsive layout and will change its structure to fit both
                  large and mobile displays. It was built using functional React
                  Hooks, Typescript, controlled form pattern, React Router.
                </p>
              </article>
              <section className="proj-button-container">
                <a
                  href="https://github.com/rpoole444/fiction-fountain-fe"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="proj-buttons">Repo</button>
                </a>
                <a
                  href="https://fiction-fountain-fe.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="proj-buttons">Visit Site</button>
                </a>
              </section>
            </section>
          </section>
        </section>
        <section className="project-container">
          <h2 className="proj-title">Shelf Life</h2>
          <section className="project-info">
            <iframe
              src="https://giphy.com/embed/yKym67WoKt3AIQ38UH"
              title="shelfLife"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            ></iframe>
            <section>
              <article className="proj-description">
                <p className="description-text">
                  Do you have a hard time picking out the right book to read?
                  Well look no further, Shelf Life is here to help! This App is
                  a book recomendation app where you are able to look at a
                  database of books referred by the Creators and add the book to
                  your favorites based on your interest and the recomendation!
                  Further more, you are able to search the New York Times top
                  100 best sellers and add your recommendation to the
                  recommendation database.
                </p>
              </article>
              <section className="proj-button-container">
                <a
                  href="https://github.com/rpoole444/shelf-life-FE"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="proj-buttons">Repo</button>
                </a>
                <a
                  href="https://shelf-life-k0fgat1zg-rpoole444.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="proj-buttons">Visit Site</button>
                </a>
              </section>
            </section>
          </section>
        </section>
        <section className="project-container">
          <h2 className="proj-title">Ceaseless Cinemas</h2>
          <section className="project-info">
            <iframe
              title="ceaselessCinema"
              frameBorder="0"
              className="giphy-embed ceaseless-cinema"
              allowFullScreen
            ></iframe>
            <section>
              <article className="proj-description">
                <p className="description-text">
                  If you're interested in the latest films, Ceaseless Cinema is
                  here for you! You can search through all of the films and find
                  their trailers and film details such as, runtime, release
                  date, budge, revenue, description, and their official trailer.
                </p>
              </article>
              <section className="proj-button-container">
                <a
                  href="https://github.com/rpoole444/rancidTomatillos"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="proj-buttons">Repo</button>
                </a>
                <a
                  href="https://rancid-tomatillos-tau.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="proj-buttons">Visit Site</button>
                </a>
              </section>
            </section>
          </section>
        </section>
        <section className="project-container">
          <h2 className="proj-title">Artist Archive</h2>
          <section className="project-info">
            <iframe
              title="artistArchive"
              frameBorder="0"
              className="giphy-embed artist-archive"
              allowFullScreen
            ></iframe>
            <section className="description-buttons">
              <article className="proj-description">
                <p className="description-text">
                  Artist Archive aims to inspire the uninspired ear! This
                  fullstack app contains a special collection of Incredible
                  musical artists from many differing genres. Look through the
                  Archive and find new and exciting music artists! Each artist's
                  click takes you to a description and an inspiring music video
                  of the Artist. But wait, if a user finds an artist that
                  resonates with them, you can collect your favorites into
                  private favorites collections! Don't waste another moment and
                  find the deployed site below!!
                </p>
              </article>
              <section className="proj-button-container">
                <a
                  href="https://github.com/rpoole444/ArtistArchive-FE"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="proj-buttons">Repo</button>
                </a>
                <a
                  href="https://artist-archive-fe.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="proj-buttons">Visit Site</button>
                </a>
              </section>
            </section>
          </section>
        </section>
        <section className="project-container">
          <h2 className="proj-title">Grant Guru</h2>
          <section className="project-info">
            <iframe
              title="grantGuru"
              frameBorder="0"
              className="giphy-embed grant-guru"
            ></iframe>
            <section>
              <article className="proj-description">
                <p className="description-text">
                  Grant Guru is an application that allows a user to explore a
                  database full of Scholarship and grant applications to Help
                  students find fincial aid with ease! Upon submition of the
                  form, queries are sent to our backend where they filter the
                  array of scholarships to fit the parameters and send us the
                  filtered scholarships.A user is able to add and delete
                  scholarships to and from their saved window. The app
                  incorporates a responsive layout and will change its structure
                  to fit both large and mobile displays.
                </p>
              </article>
              <section className="proj-button-container">
                <a
                  href="https://github.com/grant-guru/grant-guru-fe"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="proj-buttons">Repo</button>
                </a>
                <a
                  href="https://grant-guru-fe.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="proj-buttons">Visit Site</button>
                </a>
              </section>
            </section>
          </section>
        </section>
        <section className="project-container">
          <h2 className="proj-title">NYT Top Stories</h2>
          <section className="project-info">
            <iframe
              title="NytTopStories"
              frameBorder="0"
              className="giphy-embed nyt-top-stories"
            ></iframe>
            <section>
              <article className="proj-description">
                <p className="description-text">
                  New York Times Top Stories, is an application that allows a
                  user to explore the New York Times daily Top Stories all in
                  one application! Using the NYTs Top Stories API, On Load
                  you'll be taken to the home page and the news will be set to
                  the "Home" category, and you'll see all of the top stories
                  from NYT's Home page. From there a user is able to scroll
                  through the articles. A user is able to change the category
                  and the news articles will switch to the relevant category.
                  Additionally, form any category a user is able to filter
                  through the titles of the news for keywords. The app
                  incorporates a responsive layout and will change its structure
                  to fit both large and mobile displays. It was built using
                  functional React Hooks, Controlled form pattern, React Router.
                </p>
              </article>
              <section className="proj-button-container">
                <a
                  href="https://github.com/rpoole444/nyt-top-stories"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="proj-buttons">Repo</button>
                </a>
                <a
                  href="https://nyt-top-stories.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="proj-buttons">Visit Site</button>
                </a>
              </section>
            </section>
          </section>
        </section>
        <section className="project-container">
          <h2 className="proj-title">Fit Lit</h2>
          <section className="project-info">
            <iframe
              title="fitLit"
              frameBorder="0"
              className="giphy-embed fit-lit"
            ></iframe>
            <section>
              <article className="proj-description">
                <p className="description-text">
                  The purpose of our app, Fit Lit, is to store and display a
                  user's data, such as sleep, hydration, and activity (think
                  steps) for the latest day and week including comparisons to
                  the average of all users for each topic. The user is able to
                  add their own data for a given date and all of the data will
                  be updated with the new additional data included
                </p>
              </article>
              <section className="proj-button-container">
                <a
                  href="https://github.com/jheidepriem/fitLit-tracker"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="proj-buttons">Repo</button>
                </a>
              </section>
            </section>
          </section>
        </section>
      </section>
      <h2 id="skills" className="technologies-title">
        Technologies
      </h2>
      <div className="scroll-wrapper">
        <section className="skills-container">
          <i className="devicon-javascript-plain colored skill-icon"></i>
          <i className="devicon-typescript-plain colored skill-icon"></i>
          <i className="devicon-react-original-wordmark colored skill-icon"></i>
          <i className="devicon-redux-plain colored skill-icon"></i>
          <i className="devicon-html5-plain-wordmark colored skill-icon"></i>
          <i className="devicon-css3-plain-wordmark colored skill-icon"></i>
          <i className="devicon-express-original-wordmark skill-icon"></i>
          <i className="devicon-postgresql-plain-wordmark skill-icon"></i>
          <i className="devicon-nodejs-plain colored skill-icon"></i>
        </section>
      </div>
      <h2 id="music" className="technologies-title">
        Music
      </h2>

      <section className="music-container">
        <article className="">
          <h3>Music and Me ...</h3>
          <p className="about-me-text">
            Reid Poole, originally from Fountain, Colorado, has called New
            Orleans home for over eight years. A versatile musician, Reid leads
            several bands, including Dinosaurchestra, The Hi-Fi Swingtet, the
            New Orleans Night Owls, and the Reid Poole Quintet. When not
            fronting a band, Reid is a sought-after sideman for numerous local
            acts such as the Panorama Brass Band, The New Orleans Cottonmouth
            Kings, Trumpet Mafia, Big Fun Brass Band, Fritzel's All-Stars, The
            Dukes, and The Essentials.
          </p>
          <p className="about-me-text">
            With a proficiency in various styles, Reid moves seamlessly between
            Blues, Traditional New Orleans Brass Band and Jazz, Swing, Bebop,
            and more. He holds a Bachelor's degree in Music Education and Jazz
            Performance from the University of Northern Colorado and a Master's
            degree in Jazz and Contemporary Media from the Eastman School of
            Music. During his final year at Eastman, Reid joined the Glenn
            Miller Orchestra's trumpet section, touring across the US, Japan,
            and Canada. Following the tour and completion of his Master's
            degree, Reid settled in New Orleans, performing with talented
            musicians at renowned venues like the Spotted Cat Music Club,
            d.b.a., the Royal Frenchmen Hotel, Fritzel's, the Creole Queen and
            the Natchez Paddleboats, and Snug Harbor.
          </p>
          <p className="about-me-text">
            A firm believer in giving back, Reid teaches at the New Orleans Jazz
            Orchestra Music Program (formerly the Irvin Mayfield School of Music
            - “Jazz Ambassador’s Ensemble”), the Louisiana Academy for
            Performing Arts (LAAPA), and Dillard University's Music Industry
            Department. He also maintains a private lesson studio, mentoring
            dedicated students of all ages.
          </p>
        </article>
        <section className="music-website-container">
          <a href="https://www.reidpoole.com/" target="_blank" rel="noreferrer">
            <button className="website-widget">Personal Music Website</button>
          </a>
          <a
            href="https://www.dinosaurchestraneworleans.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="website-widget">
              DinosAurchestra's Website
            </button>
          </a>
        </section>
        <h3>Music Videos</h3>
        <section className="music-video-container">
          <div className="video-wrapper music-videos">
            <div
              className="fb-video"
              data-href="https://www.facebook.com/DinosaurchestraMusic/videos/2592232031030345/"
              data-width="420"
              data-show-text="false"
            ></div>
          </div>
          <div className="video-wrapper music-videos">
            <div
              className="fb-video"
              data-href="https://www.facebook.com/DinosaurchestraMusic/videos/3175890235970230/"
              data-width="420"
              data-show-text="false"
            ></div>
          </div>
          <div className="video-wrapper music-videos">
            <div
              className="fb-video"
              data-href="https://www.facebook.com/DinosaurchestraMusic/videos/234786244291217/"
              data-width="420"
              data-show-text="false"
            ></div>
          </div>
        </section>
      </section>
      <section id="contact" className="contact-container">
        <ContactForm />
      </section>
    </main>
  );
};

export default Homepage;
