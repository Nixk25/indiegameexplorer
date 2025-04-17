import { GameType } from "@/app/types/GameType";
import React from "react";

const TopPartGame = ({ game }: { game: GameType }) => {
  return (
    <>
      <h2 className="text-2xl px-2">{game.name}</h2>
      <div className="flex gap-x-2 gap-y-1  items-center px-2 flex-wrap my-2">
        {game?.platforms?.map(({ platform }) => (
          <span className="bg-accent p-2 text-xs" key={platform.id}>
            {platform.name}
          </span>
        ))}
      </div>
    </>
  );
};

export default TopPartGame;
