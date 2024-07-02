import React, { useState, useMemo } from "react";
import TokenList from "./TokenList";
import { Token } from "../utils/tokenInterface";

interface OverviewPageProps {
    tokens: Token[];
}

const Overview: React.FC<OverviewPageProps> = ({ tokens }) => {
    const [searchTerm, setSearchTerm] = useState("");

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

    return (
        <div>
            <h1>Token Information</h1>
            <input
                type="text"
                placeholder="Search Tokens"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <TokenList tokens={filteredTokens} />
        </div>
    );
};

export default Overview;
