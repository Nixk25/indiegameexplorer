import React from "react";
import { GameType } from "@/app/types/GameType";
import DialogLeft from "./DialogLeft";
import DialogRight from "./DialogRight";

const DialogContent = ({ game }: { game: GameType }) => {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      <DialogLeft game={game} />

      <DialogRight game={game} />
    </div>
  );
};

export default DialogContent;
