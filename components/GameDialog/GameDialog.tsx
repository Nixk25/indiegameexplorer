import { GameType } from "@/app/types/GameType";
import React, { useEffect, useRef } from "react";
import DialogTop from "./DialogTop";
import DialogContent from "./DialogContent";
import { motion } from "motion/react";
const GameDialog = ({
  game,
  closeDialog,
}: {
  game: GameType;
  closeDialog: () => void;
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDialog();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        closeDialog();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    document.addEventListener("mousedown", handleClickOutside);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = originalOverflow;
    };
  }, [closeDialog]);
  return (
    <div className="fixed inset-0 bg-black/50 z-[100000] w-full h-full">
      <motion.div
        initial={{ opacity: 0, filter: "blur(5px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(5px)" }}
        ref={dialogRef}
        className="fixed top-1/2 left-1/2 -translate-1/2  bg-opacity-50 z-50 flex items-center justify-center p-4 w-[90%] leading-[1]  "
      >
        <div className="bg-white  w-full overflow-y-auto">
          <div className="p-6">
            <DialogTop game={game} closeDialog={closeDialog} />
            <DialogContent game={game} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GameDialog;
