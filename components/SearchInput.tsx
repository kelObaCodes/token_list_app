import React, { useEffect } from "react";
import { useRouter } from "next/router";
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
    const router = useRouter();

    useEffect(() => {
        // Start search term from the URL if present
        const initialSearchTerm = router.query.search || "";
        setSearchTerm(initialSearchTerm as string);

        const handleRouteChange = (url: string) => {
            const urlParams = new URLSearchParams(url.split("?")[1]);
            setSearchTerm(urlParams.get("search") || "");
        };

        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events, setSearchTerm]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);

        if (newSearchTerm) {
            // This will update the URL with the new search term
            router.push(
                {
                    pathname: router.pathname,
                    query: { ...router.query, search: newSearchTerm },
                },
                undefined,
                { shallow: true }
            );
        } else {
            // Clear the search parameter from the URL when search term is empty
            handleClearSearch();
        }
    };

    const handleClearSearch = () => {
        setSearchTerm("");
        const { search, ...rest } = router.query;
        router.push(
            {
                pathname: router.pathname,
                query: rest,
            },
            undefined,
            { shallow: true }
        );
    };

    return (
        <InputCover>
            <SearchInput
                type="text"
                placeholder="Search for Tokens"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <SearchIcon className="material-symbols-outlined">
                search
            </SearchIcon>
            <ClearSearch
                className="material-symbols-outlined"
                onClick={handleClearSearch}
            >
                close
            </ClearSearch>
        </InputCover>
    );
};

export default SearchBar;
