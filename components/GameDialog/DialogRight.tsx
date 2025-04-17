import { GameType } from "@/app/types/GameType";
import React from "react";

const DialogRight = ({ game }: { game: GameType }) => {
  return (
    <div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Rating</h3>
        <div className="flex items-center">
          <span className="text-2xl font-bold">{game.rating}</span>
          <span className="text-gray-500 ml-2">/ 5</span>
          <span className="ml-2 text-sm text-gray-500">
            ({game.ratings_count} rating)
          </span>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Platforms</h3>
        <div className="flex flex-wrap gap-2">
          {game.platforms?.map((platform) => (
            <span
              key={platform.platform.id}
              className="bg-accent px-2 py-1 text-xs"
            >
              {platform.platform.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DialogRight;
