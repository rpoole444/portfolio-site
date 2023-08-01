import React from "react";
import "./LandingPage.css";
import logo2 from "../assets/insta.png";
import logo3 from "../assets/github-mark.png";
import logo4 from "../assets/linked.png";
import trumpet1 from "../assets/TrumpetReid1.jpg";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"
import { useSpring } from '@react-spring/core'
import { animated } from "@react-spring/web"


const LandingPage = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push('/main-page')
  }

  const fadeInLogos = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 600
  })

  const fadeInSkillz = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 850
  })

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1100,
  })

  const hoverAnimation = {
    scale: 1.05,
    transition: { duration: 0.5 }
  }
  return (
    <div className="entrance-container">
      <animated.aside style={fadeInLogos} className="aside">
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
        <animated.section style={fadeInSkillz} className="icon-skillz-container">
          <i className="devicon-typescript-plain colored skillz"></i>
          <i className="devicon-react-original-wordmark colored skillz"></i>
          <i className="devicon-express-original-wordmark skillz"></i>
          <i className="devicon-postgresql-plain-wordmark skillz"></i>
        </animated.section>
      </animated.aside>
      <section className="main-section">
        <animated.section style={fadeInSkillz}className="info-section">
          <h1 className="main-title"> Reid Poole - Software Engineer</h1>
          <h2 className="sub-main-title"> Musician | Educator | Father | Husband</h2>
          <button class="full-rounded submit-button" onClick={() => handleClick()}>
          <span>Enter Site</span>
          <div class="border full-rounded"></div></button>
        
        </animated.section>
        <animated.div style={fadeIn}>
          <motion.img whileHover={hoverAnimation} className="reid-photo" src={trumpet1} alt="Reid Playing Trumpet" />
        </animated.div>
        {/* <img className="reid-photo"src={trumpet1} alt="Reid Playing Trumpet" /> */}
      </section>
    </div>
  );
};

export default LandingPage;
