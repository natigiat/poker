import React from "react";
import "./card.css";

function Card(props) {
  console.log(props);

  return (
    <>
      {props.type === "front" ? (
        <div className="card" style={props.style}>
          asdf
        </div>
      ) : (
        <img className="back" src="/images/back.png" />
      )}
    </>
  );
}

export default Card;
