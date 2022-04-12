import React from "react";
import "../../App.css";
import { Button } from "../Button";

function NewsSection() {
  return (
    <div className="mars-news" id="blog">
      <div className="container-news">
        <h2>Marsian News</h2>
        <div className="cards">
          <div className="card-news">
            <a href="#">
              <img src={require("../images/news1.jpg")} alt="News" />
              <h3>Social life in space</h3>
            </a>
          </div>
          <div className="card-news">
            <a href="#">
              <img src={require("../images/news2.jpg")} alt="News" />
              <h3>Everything you need to know about your ship</h3>
            </a>
          </div>
          <div className="card-news">
            <a href="#">
              <img src={require("../images/news3.jpg")} alt="News" />
              <h3>10 reasons why you should take next ship to Mars</h3>
            </a>
          </div>
        </div>
        <Button>More News</Button>
      </div>
    </div>
  );
}

export default NewsSection;
