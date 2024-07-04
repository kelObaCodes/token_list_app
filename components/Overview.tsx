import React, { useEffect, useState } from "react";
import { Token } from "../utils/tokenInterface";
import useSearchTokens from "../hooks/useSearchTokens";
import usePagination from "../hooks/usePagination";
import useFavorites from "../hooks/useFavourites";
import SearchBar from "./SearchInput";
import TokenList from "./TokenList";
import Pagination from "./Pagination";
import CustomNotification from "./CustomNotification";
import Tabs from "./Tabs";
import { useRouter } from "next/router";
import {
    TokenContainer
} from "./styles/OverviewStyle";
interface OverviewPageProps {
    tokens: Token[];
}

const Overview: React.FC<OverviewPageProps> = ({ tokens }) => {
    const router = useRouter();
    const tokensPerPage = 50;
    const [notificationMessage, setNotificationMessage] = useState<string>("");
    const [notificationKey, setNotificationKey] = useState<string>("");
    const [currentTab, setCurrentTab] = useState<"all" | "favorites">("all");
    const { favorites, handleToggleFavorite } = useFavorites(
        (message: string) => {
            setNotificationMessage(message);
            setNotificationKey(Date.now().toString());
        }
    );
    const { searchTerm, setSearchTerm, filteredTokens } = useSearchTokens(
        tokens,
        currentTab,
        favorites
    );

    const { currentPage, totalPages, currentTokens, handlePageChange } =
        usePagination(filteredTokens, tokensPerPage);

    useEffect(() => {

            setSearchTerm("");
            const { search, ...rest } = router.query;
            router.push(
                {
                    pathname: router.pathname,
                    query: "",
                },
                undefined,
                { shallow: true }
            );
   
    }, [currentTab]);

    const sortedTokens = [...currentTokens].sort((a, b) => {
        if (favorites.includes(a.address) && !favorites.includes(b.address))
            return -1;
        if (!favorites.includes(a.address) && favorites.includes(b.address))
            return 1;
        return 0;
    });

    const handleTabChange = (tab: "all" | "favorites") => {
        setCurrentTab(tab);
    };

    return (
        <TokenContainer>
            <h1>LI.Fi Tokens</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Tabs currentTab={currentTab} handleTabChange={handleTabChange} />
            <CustomNotification
                message={notificationMessage}
                keyProp={notificationKey}
            />
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
        </TokenContainer>
    );
};

export default Overview;
