// pages/index.tsx
import React, { useState, useEffect, useMemo } from "react";
import TokenList from "./TokenList";
import { Token } from "../utils/tokenInterface";

interface OverviewPageProps {
    tokens: Token[];
}

const Overview: React.FC<OverviewPageProps> = ({ tokens }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [favorites, setFavorites] = useState<string[]>([]);
    const tokensPerPage = 50;

    const filteredTokens = useMemo(() => {
        const searchTermLower = searchTerm.toLowerCase().trim();
        if (searchTermLower === "") {
            return tokens;
        } else {
            return tokens.filter(
                (token) =>
                    token.name.toLowerCase().includes(searchTermLower) ||
                    token.symbol.toLowerCase().includes(searchTermLower)
            );
        }
    }, [searchTerm, tokens]);

    const totalPages = useMemo(
        () => Math.ceil(filteredTokens.length / tokensPerPage),
        [filteredTokens]
    );


    const currentTokens = useMemo(() => {
        const startIdx = (currentPage - 1) * tokensPerPage;
        return filteredTokens.slice(startIdx, startIdx + tokensPerPage);
    }, [currentPage, filteredTokens]);

    const handleToggleFavorite = (tokenName:string, tokenAddress: string) => {
        let updatedFavorites;
        if (favorites.includes(tokenAddress)) {
            updatedFavorites = favorites.filter(fav => fav !== tokenAddress);
        } else {
            updatedFavorites = [...favorites, tokenAddress];
        }
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        // Reset to first page whenever the search term changes (i might change this to retain current context)
        setCurrentPage(1);
    }, [searchTerm]);

    useEffect(() => {
        setFavorites(JSON.parse(localStorage.getItem("favorites") || "[]"));
    }, []);

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
            <input
                type="text"
                placeholder="Search Tokens"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="token-list">

            {sortedTokens.map((token, index) => (
                <TokenList
                token={token}
                isFavorite={favorites.includes(token.address)}
                toggleFavorite={handleToggleFavorite}
                key={`${token.address}-${index}`}
            />
            ))}
            </div>


            {!searchTerm && (
                <div className="pagination">
                    {currentPage > 1 && (
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            Previous
                        </button>
                    )}
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    {currentPage < totalPages && (
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            Next
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Overview;
