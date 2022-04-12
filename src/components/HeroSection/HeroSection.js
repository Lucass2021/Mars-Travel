import React from "react";
import "../../App.css";
import { Button } from "../Button";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="main-hero">
        <h1>Ma.,RS</h1>
        <img src={require("../images/Mars.png")} alt="Planet Mars" />
      </div>
      <div className="hero-text">
        <h3>
          Make your dream come true. <br></br> Enjoy Marsian trip.
        </h3>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Buy tickets &#8594;
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
