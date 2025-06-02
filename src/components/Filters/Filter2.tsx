import React, { useState, useRef, useEffect } from "react";

type FilterKey = "DFS < KFS" | "DFS > KFS";
const filters: FilterKey[] = ["DFS < KFS", "DFS > KFS"];

interface Filter2Props {
  selectedFilter: FilterKey;
  setSelectedFilter: React.Dispatch<React.SetStateAction<FilterKey>>;
}

const Filter2: React.FC<Filter2Props> = ({ selectedFilter, setSelectedFilter }) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null); // Reference container that includes both button and dropdown

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // No need to add `filterOpen` here

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-1 relative w-full md:w-auto mb-4">
      <div ref={filterRef} className="relative w-full sm:w-44">
        <button
          type="button"
          className="w-full border border-blue-500 rounded-md px-4 py-2 text-sm flex justify-between items-center bg-white"
          onClick={() => setFilterOpen(!filterOpen)}
          aria-haspopup="listbox"
          aria-expanded={filterOpen}
        >
          <span className="truncate">{selectedFilter}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 ml-2 text-blue-600"
            fill="none"
            viewBox="0 0 22 20"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-3.586L3.293 6.707A1 1 0 013 6V4z"
            />
          </svg>
        </button>

        {filterOpen && (
          <ul
            className="absolute bg-white shadow-md rounded-md mt-1 w-full z-10 max-h-40 overflow-auto"
            role="listbox"
          >
            {filters.map((filter) => (
              <li
                key={filter}
                role="option"
                aria-selected={selectedFilter === filter}
                onClick={() => {
                  setSelectedFilter(filter);
                  setFilterOpen(false);
                }}
                className={`px-4 py-2 cursor-pointer text-sm hover:bg-gray-100 ${
                  selectedFilter === filter ? "bg-indigo-100 font-semibold" : ""
                }`}
              >
                {filter}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Filter2;
