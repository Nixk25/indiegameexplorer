import React from "react";
import Image from "next/image";
import { GameType } from "@/app/types/GameType";
const DialogLeft = ({ game }: { game: GameType }) => {
  return (
    <div>
      <div className="relative w-full h-max">
        <Image
          src={game.background_image}
          alt={game.name}
          className="w-full h-full object-cover "
          width={300}
          height={300}
        />
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500">
          Released: {new Date(game.released).toLocaleDateString()}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {game.genres?.map((genre) => (
            <span key={genre.id} className="bg-accent px-2 py-1  text-xs">
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DialogLeft;
