import React, { useEffect, useState } from "react";
import { Token } from "../utils/tokenInterface";
import useSearchTokens from "../hooks/useSearchTokens";
import usePagination from "../hooks/usePagination";
import useFavorites from "../hooks/useFavourites";
import SearchBar from "./SearchInput";
import TokenList from "./TokenList";
import Pagination from "./Pagination";
import CustomNotification from "./CustomNotification";

interface OverviewPageProps {
    tokens: Token[];
}

const Overview: React.FC<OverviewPageProps> = ({ tokens }) => {
    const tokensPerPage = 50;
    const [notificationMessage, setNotificationMessage] = useState<string>("");
    const [notificationKey, setNotificationKey] = useState<string>("");

    const { searchTerm, setSearchTerm, filteredTokens } = useSearchTokens(tokens);
    const { currentPage, totalPages, currentTokens, handlePageChange } = usePagination(filteredTokens, tokensPerPage);
    const { favorites, handleToggleFavorite } = useFavorites((message: string,) => {
        setNotificationMessage(message);
        setNotificationKey(Date.now().toString());
    });

    useEffect(() => {
        handlePageChange(1);
    }, [searchTerm]);

    const sortedTokens = [...currentTokens].sort((a, b) => {
        if (favorites.includes(a.address) && !favorites.includes(b.address)) return -1;
        if (!favorites.includes(a.address) && favorites.includes(b.address)) return 1;
        return 0;
    });

    return (
        <div>
            <h1>Token Information</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <CustomNotification message={notificationMessage} keyProp={notificationKey} />
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
