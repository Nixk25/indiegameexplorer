import { GameType } from "@/app/types/GameType";
import React from "react";

const DialogTop = ({
  game,
  closeDialog,
}: {
  game: GameType;
  closeDialog: () => void;
}) => {
  return (
    <div className="flex justify-between items-start">
      <h2 className="text-2xl leading-[1] font-bold">{game.name}</h2>
      <button
        onClick={(e) => {
          e.stopPropagation();
          closeDialog();
        }}
        className="text-gray-500 hover:text-gray-700 text-xl font-bold cursor-pointer"
      >
        &times;
      </button>
    </div>
  );
};

export default DialogTop;
