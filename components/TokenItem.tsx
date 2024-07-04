import React from "react";
import { Token } from "../utils/tokenInterface";
import Link from "next/link";
import {
    TokenItemWrapper,
    TokenImage,
    TokenName,
    TokenAddress,
    FavoriteIcon,
} from "./styles/TokenItemStyle";

interface TokenItemProps {
    token: Token;
    isfavorite: boolean;
    toggleFavorite: (tokenAddress: string, tokenName: string) => void;
}

const TokenItem: React.FC<TokenItemProps> = ({
    token,
    isfavorite,
    toggleFavorite,
}) => (
    <TokenItemWrapper
        animate={{
            scale: [1, 1.5, 1],
        }}
        exit={{ opacity: 1 }}
        initial={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        layout
        whileTap={{ scale: 0.9 }}
    >
        <Link href={`/token/${token.chainId}/${token.address}`}>
            {token.logoURI ? (
                <TokenImage src={token.logoURI} alt={token.name} />
            ) : (
                <TokenImage src="/bitcoin-logo.png" alt={token.name} />
            )}
            <TokenName>
                {token.name} ({token.symbol})
            </TokenName>
            <TokenAddress>{token.address}</TokenAddress>
        </Link>
        <FavoriteIcon
            onClick={() => toggleFavorite(token.address, token.name)}
            className={`material-symbols-outlined ${
                isfavorite ? "is-fav" : ""
            }`}>
            favorite
        </FavoriteIcon>
    </TokenItemWrapper>
);

export default TokenItem;
