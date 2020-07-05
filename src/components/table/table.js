import React, { useState, useEffect } from "react";
import "./table.css";
import Settings from "./components/settings/settings";
import Player from "./components/player/player";
import Card from "./components/card/card";
import axios from "axios";

function Table() {
  const [data, setData] = useState({});
  const players = 5;

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

  return (
    <div className="table">
      <div className="table-image">
        <Card type={"back"} />
        {[...Array(players)].map((e, i) => (
          <Player
            name={`${data?.name?.first}  ${data?.name?.last}`}
            credits={22}
            position={players_positions[i]}
            picture={data?.picture?.thumbnail}
          />
        ))}
      </div>

      <Settings />
    </div>
  );
}

export default Table;
