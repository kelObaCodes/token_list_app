import React from "react";
import { Token } from "../utils/tokenInterface";
import TokenItem from "./TokenItem";
import { AnimatePresence } from "framer-motion";
import { NoTokens, NoTokensDescription, TokenListWrapper } from "./styles/TokenListStyle";
import Image from "next/image";
import tokenCat from "../public/images/cat.png";
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
                    <TokenListWrapper layout className="token-list">
                        {tokens.map((token, index) => (
                            <TokenItem
                                token={token}
                                isfavorite={favorites.includes(token.address)}
                                toggleFavorite={toggleFavorite}
                                key={`${token.address}-${index}`}
                            />
                        ))}
                    </TokenListWrapper>
                </AnimatePresence>
            ) : (
                <NoTokens>
                    <Image src={tokenCat} alt="coin cat" width={240} />
                    <NoTokensDescription>
                        No token present or someone might have it :)
                    </NoTokensDescription>
                </NoTokens>
            )}
        </>
    );
};

export default TokenList;
