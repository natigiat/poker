import React from "react";
import "./player.css";

function Player(props) {
  console.log(props);

  return (
    <div
      className="player"
      style={{ top: props.position.top, left: props.position.left }}
    >
      <img className="player-image" src={props.picture} />
      <div className="player-box">
        <div className="name">{props.name}</div>
        <div className="credits">{props.credits}</div>
        <img className="player-coins" src={"/images/coins.png"} />
      </div>
    </div>
  );
}

export default Player;
