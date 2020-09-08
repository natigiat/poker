import React, { useState, useEffect } from "react";
import "./table.css";
import Settings from "./components/settings/settings";
import Player from "./components/player/player";
import Card from "./components/card/card";
import axios from "axios";
const { decks } = require("cards");
const deck = new decks.StandardDeck();

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

  const [gamesCards, setgamesCards] = useState({});

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

  const startGame = () => {
    deck.shuffleAll();

    setPlayer1({
      ...player1,
      cards: deck.draw(2),
      bid: 20,
      credits: player1.credits - 20,
    });
    setPlayer2({
      ...player2,
      bid: player2.bid,
      credits: player2.credits,
      cards: deck.draw(2),
      isActive: 1,
    });
    setgamesCards({
      ...gamesCards,
      1: deck.draw(1),
      2: deck.draw(1),
      3: deck.draw(1),
    });
  };

  // actions

  const allIn = async () => {
    // setPlayer1({
    //   ...player1,
    //   isActive: 1,
    // });
    // setPlayer2({ ...player2, bid: player2.credit, credits: 0 });
  };

  const fold = async () => {
    // setPlayer1({
    //   ...player1,
    //   isActive: 0,
    //   bid: player1.bid,
    //   credits: player1.credits,
    // });
    // setPlayer2({
    //   ...player2,
    //   bid: 0,
    //   credits: player2.credits - player1.bid,
    //   isActive: 0,
    // });
  };

  const call = async () => {
    console.log("call");
    let numberOfCardsOnTable = Object.keys(gamesCards).length;

    setPlayer1({
      ...player1,
      isActive: 1,
      bid: player1.bid,
      credits: player1.credits,
    });

    setPlayer2({
      ...player2,
      bid: player1.bid,
      credits: player2.credits - player1.bid,
      isActive: 0,
    });
    console.log({ player2 });
    if (numberOfCardsOnTable === 3) {
      setgamesCards({ ...gamesCards, 4: deck.draw(1) });
      computerRandomBid();
    } else if (numberOfCardsOnTable === 4) {
      setgamesCards({ ...gamesCards, 5: deck.draw(1) });
      computerRandomBid();
    } else if (numberOfCardsOnTable === 5) {
      calculateEndGame();
      return;
    }
  };

  const computerRandomBid = () => {
    let randReplayPlayer1 = Math.floor((Math.random() * 100 + 5) * 100);
    let randBid = Math.floor(Math.random() * player1.credits) + 1;
    console.log({ step: 1, player2 });
    setTimeout(() => {
      console.log(["player2"]);
      setPlayer1({
        ...player1,
        bid: player1.bid + randBid,
        credits: player1.credits - randBid,
        isActive: 0,
      });
      console.log({ step: 3, player2 });
      setPlayer2({
        ...player2,
        isActive: 1,
      });
    }, randReplayPlayer1);
  };

  const raise = async () => {
    console.log("raise");
  };

  const calculateEndGame = async () => {
    alert("calculateEndGame");
  };

  return (
    <div className="table">
      <div className="table-image">
        <div className="card-decks">
          <Card type={"back"} startGame={startGame} />

          {[...Array(Object.keys(gamesCards).length)].map((e, i) => (
            <Card
              type={"front"}
              cardNumber={`c${i + 1}`}
              index={i + 1}
              cardInfo={gamesCards}
            />
          ))}
        </div>

        <Player
          name={`${data?.name?.first}  ${data?.name?.last}`}
          position={players_positions[0]}
          picture={data?.picture?.thumbnail}
          player={player1}
        />

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
        player2={player2}
      />
    </div>
  );
}

export default Table;
