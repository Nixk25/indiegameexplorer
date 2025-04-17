import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "./get-query-client";
import GamesPage from "@/components/MainContentGames/GamesPage";

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["games"],
    queryFn: async () => {
      const res = await fetch(
        `https://api.rawg.io/api/games?key=${process.env.RAWQ_API_KEY}`
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GamesPage />
    </HydrationBoundary>
  );
}
