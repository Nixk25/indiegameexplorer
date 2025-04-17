import React from "react";
import FilterInput from "./FilterInput";
import { motion } from "motion/react";
type FilterInputsProps = {
  genres: string;
  setGenres: React.Dispatch<React.SetStateAction<string>>;
  tags: string;
  setTags: React.Dispatch<React.SetStateAction<string>>;
};

const FilterInputs = ({
  genres,
  setGenres,
  tags,
  setTags,
}: FilterInputsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(5px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(5px)" }}
      className="flex sm:gap-5 px-6 flex-col sm:flex-row"
    >
      <FilterInput
        placeholder="Genres (e.g. action,indie)"
        value={genres}
        onChange={(e) => setGenres(e.target.value)}
      />
      <FilterInput
        placeholder="Tags (e.g. multiplayer)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
    </motion.div>
  );
};

export default FilterInputs;
