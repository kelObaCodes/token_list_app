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
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        layout
        whileTap={{ scale: 0.9 }}
    >
        <Link href={`/token/${token.chainId}/${token.address}`}>
            {token.logoURI ? (
                <TokenImage src={token.logoURI} alt={token.name} />
            ) : (
                <TokenImage src="/images/bitcoin-logo.png" alt={token.name} />
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
            }`}
        >
            favorite
        </FavoriteIcon>
    </TokenItemWrapper>
);

export default TokenItem;
