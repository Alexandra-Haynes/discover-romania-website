import React from "react";
import "./HeroStyles.css";

const Hero = (props) => {
  return (
    <>
      <div className="hero">
        <img alt="Hero img" src={props.heroSrc} className={props.heroImg} />

        <div className="hero-text-container">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <div className="quick-info tooltip">
            Quick Info
            <div className="tooltip-text">
              <a href="https://travel.state.gov/content/travel/en/international-travel.html">
                International Travel
              </a>
              <br />
              <a href="https://romaniatourism.com/travel-advisory.html">
                Travel Advisory
              </a>
              <br />
              <a href="https://www.mae.ro/en/node/2035"> Romanian Visa</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
