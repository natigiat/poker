import React from "react";
import "./card.css";

const stringToCardIcon = (name) => {
  switch (name) {
    case "hearts":
      return <img src="/images/1.png"></img>;
      break;

    case "diamonds":
      return <img src="/images/3.png"></img>;
      break;

    case "clubs":
      return <img src="/images/4.png"></img>;
      break;

    case "spades":
      return <img src="/images/2.png"></img>;
      break;
  }
};

function Card(props) {
  console.log(props);

  return (
    <>
      {props.type === "front" ? (
        <div
          className={"card-table front " + props.cardNumber}
          style={props.style}
        >
          <div className="crad-number">
            {props.cardInfo[0]?.rank?.shortName}
          </div>
          <div className="crad-shape">
            {stringToCardIcon(props.cardInfo[0]?.suit?.name)}
          </div>
        </div>
      ) : (
        <img
          onClick={props.startGame}
          className={props.type}
          src="/images/back.png"
        />
      )}
    </>
  );
}

export default Card;
