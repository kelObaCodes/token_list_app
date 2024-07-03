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
    isFavorite: boolean;
    toggleFavorite: (tokenAddress: string, tokenName: string) => void;
}

const TokenItem: React.FC<TokenItemProps> = ({
    token,
    isFavorite,
    toggleFavorite,
}) => (
    <TokenItemWrapper
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        layout
    >
        <Link href={`/token/${token.chainId}/${token.address}`}>
            <div>
                {token.logoURI ? (
                    <TokenImage src={token.logoURI} alt={token.name} />
                ) : (
                    <TokenImage src="/bitcoin-logo.png" alt={token.name} />
                )}
            </div>
            <TokenName>
                {token.name} ({token.symbol})
            </TokenName>
            <TokenAddress>{token.address}</TokenAddress>
        </Link>
        <FavoriteIcon
            onClick={() => toggleFavorite(token.address, token.name)}
            isFavorite={isFavorite}
            className="material-symbols-outlined cursor-pointer"
        >
            favorite
        </FavoriteIcon>
    </TokenItemWrapper>
);

export default TokenItem;
