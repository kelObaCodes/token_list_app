import React from "react";
import { Token } from "../utils/tokenInterface";
import TokenItem from "./TokenItem";
import { motion, AnimatePresence } from "framer-motion";

interface TokenListProps {
    tokens: Token[];
    favorites: string[];
    toggleFavorite: (tokenAddress: string, tokenName: string) => void;
}

const TokenList: React.FC<TokenListProps> = ({
    tokens,
    favorites,
    toggleFavorite,
}) => (
    <AnimatePresence mode="wait" initial={false}>
        <motion.div layout className="token-list">
            {tokens.map((token, index) => (
                <TokenItem
                    token={token}
                    isfavorite={favorites.includes(token.address)}
                    toggleFavorite={toggleFavorite}
                    key={`${token.address}-${index}`}
                />
            ))}
        </motion.div>
    </AnimatePresence>
);

export default TokenList;
