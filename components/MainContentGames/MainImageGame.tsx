import { GameType } from "@/app/types/GameType";
import Image from "next/image";
import React from "react";

const MainImageGame = ({ game }: { game: GameType }) => {
  return (
    <div className="relative h-full w-full">
      {game.background_image ? (
        <Image
          src={game.background_image}
          alt={game.name}
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      ) : (
        <div className="w-full h-full bg-gray-300 flex items-center justify-center text-sm">
          No image
        </div>
      )}
    </div>
  );
};

export default MainImageGame;
