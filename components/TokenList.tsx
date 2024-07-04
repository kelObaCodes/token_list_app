import React from "react";
import { Token } from "../utils/tokenInterface";
import TokenItem from "./TokenItem";
import { motion, AnimatePresence } from "framer-motion";
import { NoTokens } from "./styles/TokenListStyle";

interface TokenListProps {
    tokens: Token[];
    favorites: string[];
    toggleFavorite: (tokenAddress: string, tokenName: string) => void;
}

const TokenList: React.FC<TokenListProps> = ({
    tokens,
    favorites,
    toggleFavorite,
}) => {
    return (
        <>
            {tokens.length > 0 ? (
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
            ) : (
                <NoTokens>
                    <img height={200} src="/images/cat.png" />
                    <h4>No token present or someone might have it :)</h4>
                </NoTokens>
            )}
        </>
    );
};

export default TokenList;
