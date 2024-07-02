import React from "react";
import { Token } from "../utils/tokenInterface";
import TokenItem from "./TokenItem";

interface TokenListProps {
    tokens: Token[];
    favorites: string[];
    toggleFavorite: (tokenAddress: string) => void;
}

const TokenList: React.FC<TokenListProps> = ({ tokens, favorites, toggleFavorite }) => (
    <div className="token-list">
        {tokens.map((token, index) => (
            <TokenItem
                token={token}
                isFavorite={favorites.includes(token.address)}
                toggleFavorite={toggleFavorite}
                key={`${token.address}-${index}`}
            />
        ))}
    </div>
);

export default TokenList;

