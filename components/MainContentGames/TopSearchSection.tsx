import React from "react";
import FilterInputs from "../FilterInputs";
import FilterInput from "../FilterInput";
import { AnimatePresence } from "motion/react";
import { Filter } from "lucide-react";

type TopSearchSectionProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  genres: string;
  setGenres: React.Dispatch<React.SetStateAction<string>>;
  tags: string;
  setTags: React.Dispatch<React.SetStateAction<string>>;
  isFiltersVisible: boolean;
  setIsFiltersVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const TopSearchSection = (props: TopSearchSectionProps) => {
  const {
    search,
    setSearch,
    genres,
    setGenres,
    tags,
    setTags,
    isFiltersVisible,
    setIsFiltersVisible,
  } = props;
  return (
    <div className="sticky top-0  z-2 bg-background">
      <div className="flex ">
        <FilterInput
          placeholder="Search your game..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="border h-full py-[10px] border-l-0 px-3 cursor-pointer"
          onClick={() => setIsFiltersVisible(!isFiltersVisible)}
        >
          <Filter size={20} />
        </button>
      </div>
      <AnimatePresence>
        {isFiltersVisible && (
          <FilterInputs
            genres={genres}
            setGenres={setGenres}
            tags={tags}
            setTags={setTags}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default TopSearchSection;
