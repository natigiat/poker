import React from "react";
import "./player.css";

function Player(props) {
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

  return (
    <div className="player" style={props.position}>
      <img
        className={"player-image " + (props.player.isActive ? "active" : "")}
        src={props.picture}
      />
      {props.player.bid ? (
        <div className="bid">
          <img className="player-coins" src={"/images/coin.png"} />
          <div>{props.player.bid}</div>
        </div>
      ) : (
        ""
      )}
      <div className="player-box">
        <div className="name">{props.name}</div>
        <div className="credits">{props.player.credits}</div>
        <img className="player-coins" src={"/images/coins.png"} />
      </div>
      {props.name === "You" ? (
        props.player.cards.map((card) => {
          return (
            <div className="card">
              <div className="crad-number">{card.rank.shortName}</div>
              <div className="crad-shape">
                {stringToCardIcon(card.suit.name)}
              </div>
            </div>
          );
        })
      ) : (
        <div className="card-player-wrapper">
          {props.player.cards.map((card) => {
            return <img src="/images/back.png" />;
          })}
        </div>
      )}
    </div>
  );
}

export default Player;
