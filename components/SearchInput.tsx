import React from "react";
import {
    InputCover,
    SearchInput,
    SearchIcon,
    ClearSearch,
} from "./styles/SearchInputStyle";

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
    return (
        <InputCover>
            <SearchInput
                type="text"
                placeholder="Search for Tokens"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon className="material-symbols-outlined">
                search
            </SearchIcon>
            <ClearSearch
                className="material-symbols-outlined"
                onClick={() => setSearchTerm("")}
            >
                close
            </ClearSearch>
        </InputCover>
    );
};

export default SearchBar;
