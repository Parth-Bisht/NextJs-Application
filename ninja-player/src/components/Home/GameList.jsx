import React, { useEffect, useState } from "react";
import Data from "@/shared/Data";

const GameList = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    setGames(Data.GameList);
  }, []);
  console.log(games);
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 mt-4">
      {games.map((item) => (
        <div className="flex flex-col items-center cursor-pointer">
          <img
            src={item.image}
            alt="game"
            width={45}
            height={45}
            className="hover:animate-bounce transition-all duration-150"
          />
          <h2 className="text-[14px] text-center">{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default GameList;
