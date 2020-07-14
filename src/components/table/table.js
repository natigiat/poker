import React, { useState, useEffect } from "react";
import "./table.css";
import Settings from "./components/settings/settings";
import Player from "./components/player/player";
import Card from "./components/card/card";
import axios from "axios";
const { decks } = require("cards");

function Table() {
  const [data, setData] = useState({});
  const [player1, setPlayer1] = useState({
    cards: [],
    credits: 1000,
    bid: 0,
    isActive: 0,
  });
  const [player2, setPlayer2] = useState({
    cards: [],
    credits: 1000,
    bid: 0,
    isActive: 0,
  });

  const players = 1;

  const players_positions = [
    { top: 180, left: -28 },
    { top: 367, left: 50 },
    { top: 489, left: 307 },
    { top: 488, left: 585 },
    { top: 391, left: 800 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://randomuser.me/api/");
      setData(result.data.results[0]);
    };

    fetchData();
  }, []);

  const startGame = async () => {
    const deck = new decks.StandardDeck();
    deck.shuffleAll();

    setPlayer1({
      ...player1,
      cards: deck.draw(2),
      bid: 20,
      credits: player1.credits - 20,
    });
    setPlayer2({ ...player2, cards: deck.draw(2), isActive: 1 });
  };

  // actions

  const allIn = async () => {
    console.log("allIn");
  };

  const fold = async () => {
    console.log("fold");
  };

  const call = async () => {
    console.log("call");
    setPlayer2({
      ...player2,
      bid: player1.bid,
      credits: player2.credits - player1.bid,
      isActive: 0,
    });
    setPlayer1({ ...player1, isActive: 1 });
  };

  const raise = async () => {
    console.log("raise");
  };

  return (
    <div className="table">
      <div className="table-image">
        <Card type={"back"} startGame={startGame} />
        {[...Array(players)].map((e, i) => (
          <Player
            name={`${data?.name?.first}  ${data?.name?.last}`}
            position={players_positions[i]}
            picture={data?.picture?.thumbnail}
            player={player1}
          />
        ))}

        <Player
          name={`You`}
          position={players_positions[3]}
          picture={
            "https://thumbs.dreamstime.com/b/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144849704.jpg"
          }
          player={player2}
        />
      </div>

      <Settings
        allIn={allIn}
        fold={fold}
        call={call}
        raise={raise}
        player1={player1}
      />
    </div>
  );
}

export default Table;
