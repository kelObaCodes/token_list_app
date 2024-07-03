import React from "react";
import { Token } from "../utils/tokenInterface";
import TokenItem from "./TokenItem";
import { motion, AnimatePresence } from "framer-motion";

interface TokenListProps {
    tokens: Token[];
    favorites: string[];
    toggleFavorite: (tokenAddress: string) => void;
}

const TokenList: React.FC<TokenListProps> = ({
    tokens,
    favorites,
    toggleFavorite,
}) => (
    <motion.div layout className="token-list">
        <AnimatePresence>
            {tokens.map((token, index) => (
                <TokenItem
                    token={token}
                    isFavorite={favorites.includes(token.address)}
                    toggleFavorite={toggleFavorite}
                    key={`${token.address}-${index}`}
                />
            ))}
        </AnimatePresence>
    </motion.div>
);

export default TokenList;
