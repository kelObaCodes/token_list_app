import React, { useEffect } from "react";
import { Token } from "../utils/tokenInterface";
import useSearchTokens from "../hooks/useSearchTokens";
import usePagination from "../hooks/usePagination";
import useFavorites from "../hooks/useFavourites";
import SearchBar from "./SearchBar";
import TokenList from "./TokenList";
import Pagination from "./Pagination";

interface OverviewPageProps {
    tokens: Token[];
}

const Overview: React.FC<OverviewPageProps> = ({ tokens }) => {
    const tokensPerPage = 50;

    const { searchTerm, setSearchTerm, filteredTokens } =
        useSearchTokens(tokens);
    const { currentPage, totalPages, currentTokens, handlePageChange } =
        usePagination(filteredTokens, tokensPerPage);
    const { favorites, handleToggleFavorite } = useFavorites();

    useEffect(() => {
        handlePageChange(1);
    }, [searchTerm]);

    const sortedTokens = [...currentTokens].sort((a, b) => {
        if (favorites.includes(a.address) && !favorites.includes(b.address))
            return -1;
        if (!favorites.includes(a.address) && favorites.includes(b.address))
            return 1;
        return 0;
    });

    return (
        <div>
            <h1>Token Information</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <TokenList
                tokens={sortedTokens}
                favorites={favorites}
                toggleFavorite={handleToggleFavorite}
            />
            {!searchTerm && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePageChange={handlePageChange}
                />
            )}
        </div>
    );
};

export default Overview;
