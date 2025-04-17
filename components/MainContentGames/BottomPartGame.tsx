import React from "react";
import { Star } from "lucide-react";
import { GameType } from "@/app/types/GameType";
const BottomPartGame = ({ game }: { game: GameType }) => {
  return (
    <div className="flex justify-between items-center p-2">
      <div className="flex gap-1 items-center">
        <Star size={20} />
        <span>{game.rating}</span>
      </div>
      <span>{new Date(game.released).toLocaleDateString()}</span>
    </div>
  );
};

export default BottomPartGame;
