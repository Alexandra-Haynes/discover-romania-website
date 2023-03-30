import "./FactsStyles.css";
import { FactsData } from "./FactsData";
import CommentSection from "./CommentSection";

export const Facts = () => {
  return (
    <>
      <div className="facts">

        <ul>
          {FactsData.map((fact) => {
            return (
              <li key={fact.id} >
                <div className="factContainer">
                  <div className="description-text">
                    <h3>{fact.title}</h3>
                    <p> {fact.text} </p>
                  </div>

                  <div className="factsImage">
                    <img alt={fact.alt} src={fact.imageSrc} />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <CommentSection />
    </>
  );
};


