import React from "react";

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => (
    <input
        type="text"
        placeholder="Search Tokens"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
    />
);

export default SearchBar;
