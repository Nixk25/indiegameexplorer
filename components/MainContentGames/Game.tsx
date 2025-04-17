import { GameType } from "@/app/types/GameType";
import React, { useState } from "react";
import TopPartGame from "./TopPartGame";
import MainImageGame from "./MainImageGame";
import BottomPartGame from "./BottomPartGame";
import GameDialog from "../GameDialog/GameDialog";
import { AnimatePresence, motion } from "motion/react";
const Game = ({ game }: { game: GameType }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, filter: "blur(5px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        className="flex flex-col h-[600px] sm:h-[700px] w-[300px] sm:w-[400px] border cursor-pointer origin-center"
        onClick={openDialog}
      >
        <TopPartGame game={game} />
        <MainImageGame game={game} />
        <BottomPartGame game={game} />
      </motion.div>
      <AnimatePresence>
        {isDialogOpen && <GameDialog game={game} closeDialog={closeDialog} />}
      </AnimatePresence>
    </>
  );
};

export default Game;
