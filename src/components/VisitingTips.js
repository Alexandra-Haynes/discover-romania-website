import { VisitingTipsData } from "./VisitingTipsData";
import "./VisitingTipsStyles.css";
import React from "react";

const VisitingTips = () => {
  
  const handleSlideLeft = () => {
    let slider = document.querySelector(".cards-container");
    slider.scrollLeft = slider.scrollLeft - 400;
  };
  const handleSlideRight = () => {
    let slider = document.querySelector(".cards-container");
    slider.scrollLeft = slider.scrollLeft + 400;
  };
  
  
  

  return (
    <>
      <div className="tips-body">
        <h1>Tips for a success trip</h1>
        <div className="cards-container">
          <div className="slider-icons" >
            <i
              className="fa-solid fa-chevron-left"
              onClick={handleSlideLeft}
            ></i>

            <i
              className="fa-solid fa-chevron-right"
              onClick={handleSlideRight}
            ></i>
          </div>

          <ul>
            {VisitingTipsData.map((card) => {
              return (
                <li key={card.id} className="card">
                  <i className={card.icon}></i>
                  <h3> {card.title} </h3>
                  <p> {card.description} </p>
                  <h5> {card.number}</h5>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default VisitingTips;
