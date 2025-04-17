import React from "react";
import { GameType } from "@/app/types/GameType";
import Game from "./Game";
import Loader from "../Loader";
const Games = ({
  games,
  isFetchingNextPage,
  loaderRef,
}: {
  games: GameType[];
  isFetchingNextPage: boolean;
  loaderRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div className="relative grid gap-5 sm:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(290px,_1fr))] p-4 place-items-center overflow-hidden  min-h-screen">
      {games.map((game: GameType) => (
        <Game key={game.id} game={game} />
      ))}

      {games.length === 0 && (
        <div className="col-span-full text-center py-10">No games found.</div>
      )}

      <div ref={loaderRef} className="py-8 flex justify-center">
        {isFetchingNextPage && <Loader />}
      </div>
    </div>
  );
};

export default Games;
