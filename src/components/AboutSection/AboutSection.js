import React from "react";
import "../../App.css";
import MotionCard from "./MotionCard";

function AboutSection() {
  return (
    <div className="container-about" id="aboutMars">
      <div className="row-about">
        <div className="about-mars">
          <h2>Planet Mars Exploration</h2>
          <img src={require("../images/Mars.png")} alt="Planet Mars" />
        </div>

        <div className="about-mars-text">
          <MotionCard />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
