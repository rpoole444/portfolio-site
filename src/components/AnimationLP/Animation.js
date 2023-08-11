import React, { useState, useEffect } from "react";
import trumpetImage from "../assets/trumpet.png";
import computerImage from "../assets/programming.png"
import "./Animation.css"

function Animation() {
  const [angle, setAngle] = useState(0);

  useEffect(()=> {
    const interval = setInterval(() => {
      setAngle((prevAngle) => {
        const newAngle = prevAngle + 25;
        return newAngle > 360 ? 0 : newAngle;
      })
    }, 1250)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="animation-container">
      <img
      src={trumpetImage}
      alt="Trumpet"
      className="animate-object"
      id="trumpet"
      style={{ transform: `rotate(${angle}deg)`}}
      />
      <img
      src={computerImage}
      alt="Computer"
      className="animate-object"
      id="computer"
      style={{ transform: `rotate(-${angle}deg)`}}
      />
    </div>
  )
}

export default Animation