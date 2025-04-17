"use client";
import { useInfiniteQuery } from "@tanstack/react-query";

import { useState, useEffect, useRef, useCallback } from "react";
import Loader from "../Loader";
import TopSearchSection from "./TopSearchSection";
import Games from "./Games";

const GamesPage = () => {
  const [search, setSearch] = useState("");
  const [genres, setGenres] = useState("");
  const [tags, setTags] = useState("");
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [debouncedGenres, setDebouncedGenres] = useState("");
  const [debouncedTags, setDebouncedTags] = useState("");

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const API_KEY = process.env.NEXT_PUBLIC_RAWQ_API_KEY;
  const topSearchProps = {
    search,
    setSearch,
    genres,
    setGenres,
    tags,
    setTags,
    isFiltersVisible,
    setIsFiltersVisible,
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 300);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setDebouncedGenres(genres);
      setDebouncedTags(tags);
    }, 2000);

    return () => clearTimeout(timer);
  }, [search, genres, tags]);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useInfiniteQuery({
    queryKey: ["games", debouncedSearch, debouncedGenres, debouncedTags],
    queryFn: async ({ pageParam = 1 }) => {
      const url = new URL("https://api.rawg.io/api/games");
      url.searchParams.set("key", API_KEY || "");
      url.searchParams.set("page", String(pageParam));
      url.searchParams.set("page_size", "20");
      if (debouncedSearch) url.searchParams.set("search", debouncedSearch);
      if (debouncedGenres) url.searchParams.set("genres", debouncedGenres);
      if (debouncedTags) url.searchParams.set("tags", debouncedTags);
      const res = await fetch(url.toString());
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.next ? nextPage : undefined;
    },
    enabled: !!API_KEY,
  });

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry?.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: "0px 0px 400px 0px",
    });

    const currentLoaderRef = loaderRef.current;

    if (currentLoaderRef) observer.observe(currentLoaderRef);
    return () => {
      if (currentLoaderRef) observer.unobserve(currentLoaderRef);
    };
  }, [handleObserver]);

  if (status === "pending") return <Loader />;
  if (status === "error")
    return (
      <div className="text-center py-10 text-red-500">
        Something went wrong:{" "}
        {error instanceof Error ? error.message : "Unknown error"}
      </div>
    );

  const games = data.pages.flatMap((page) => page.results || []);

  return (
    <main className="relative">
      <TopSearchSection {...topSearchProps} />
      <Games
        games={games}
        isFetchingNextPage={isFetchingNextPage}
        loaderRef={loaderRef}
      />
    </main>
  );
};

export default GamesPage;
