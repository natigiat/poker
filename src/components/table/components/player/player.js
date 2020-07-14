import React from "react";
import "./player.css";

function Player(props) {
  console.log({ props });

  const nameTosymbole = async (suit) => {
    console.log(suit);
    return "good";
  };

  return (
    <div
      className="player"
      style={{ top: props.position.top, left: props.position.left }}
    >
      <img
        className={"player-image " + (props.player.isActive ? "active" : "")}
        src={props.picture}
      />
      {props.player.bid ? (
        <div className="bid">
          <img className="player-coins" src={"/images/coin.png"} />
          <div className="">{props.player.bid}</div>
        </div>
      ) : (
        ""
      )}
      <div className="player-box">
        <div className="name">{props.name}</div>
        <div className="credits">{props.player.credits}</div>
        <img className="player-coins" src={"/images/coins.png"} />
      </div>
      {props.player.cards.map((card) => {
        return (
          <div className="card">
            <div className="crad-number">{card.rank.shortName}</div>
            <div className="crad-shape">{card.suit.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Player;
