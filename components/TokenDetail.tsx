import React, { useEffect, useState } from "react";
import { Token } from "../utils/tokenInterface";
import {
    TokenDetailWrapper,
    TokenImage,
    TokenName,
    TokenInfo,
    FavoriteButton,
} from "./styles/TokenDetailStyle";

interface TokenDetailPageProps {
    token: Token;
}

const TokenDetail: React.FC<TokenDetailPageProps> = ({ token }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        setIsFavorite(favorites.includes(token.address));
    }, [token.address]);

    const handleFavoriteClick = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        if (favorites.includes(token.address)) {
            localStorage.setItem(
                "favorites",
                JSON.stringify(
                    favorites.filter((addr: string) => addr !== token.address)
                )
            );
            setIsFavorite(false);
        } else {
            favorites.push(token.address);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            setIsFavorite(true);
        }
    };

    return (
        <TokenDetailWrapper>
            <TokenName>{token.name}</TokenName>
            <TokenImage src={token.logoURI} alt={token.name} />
            <TokenInfo>Address: {token.address}</TokenInfo>
            <TokenInfo>Chain Id: {token.chainId}</TokenInfo>
            <TokenInfo>Price: {token.priceUSD}$</TokenInfo>
            <TokenInfo>Decimal: {token.decimals}</TokenInfo>
            <TokenInfo>Key: {token.coinKey}</TokenInfo>
            <FavoriteButton
                onClick={handleFavoriteClick}
                isFavorite={isFavorite}
            >
                {isFavorite ? "Unmark Favorite" : "Mark as Favorite"}
            </FavoriteButton>
        </TokenDetailWrapper>
    );
};

export default TokenDetail;
