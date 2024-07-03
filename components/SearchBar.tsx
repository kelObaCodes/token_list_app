import React from "react";

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => (
    <div className="input-cover">
        <input
            type="text"
            placeholder="Search for Tokens"
            value={searchTerm}
            className="search-bar"
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span
            className="clear-search cursor-pointer"
            onClick={() => setSearchTerm("")}
        >
            x
        </span>
    </div>
);

export default SearchBar;
