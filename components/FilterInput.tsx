import React from "react";

const FilterInput = ({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-2 mb-4 border border-black px-6 ring-0 focus-within:outline-0"
    />
  );
};

export default FilterInput;
