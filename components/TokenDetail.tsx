import React, { useEffect, useState } from "react";
import { Token } from "../utils/tokenInterface";
import {
    TokenDetailWrapper,
    TokenImage,
    TokenName,
    TokenInfo,
    FavoriteButton,
    TokenTitle,
    FavIcon
} from "./styles/TokenDetailStyle";
import Image from "next/image";

interface TokenDetailPageProps {
    token: Token;
}

const TokenDetail: React.FC<TokenDetailPageProps> = ({ token }) => {
    const [isfavorite, setIsFavorite] = useState(false);

  
    useEffect(() => {
        // Get the list of favorite tokens from local storage
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    
        setIsFavorite(favorites.includes(token.address));
    }, [token.address]);


    const handleFavoriteClick = () => {
        // Get the list of favorite tokens from local storage
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        if (favorites.includes(token.address)) {
            // If the token is already a favorite, remove it from the list
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
            {token.logoURI ? (
                // Display token image if available
                <TokenImage src={token.logoURI} alt={token.name} />
            ) : (
                // This image displays if above is not available
                <Image
                src={"/images/bitcoin-logo.png"}
                alt={token.name}
                width={200}
                height={200}
            />
            )}
             
            <TokenTitle> Address: </TokenTitle>
            <TokenInfo>{token.address}</TokenInfo>
            <TokenTitle> Chain Id: </TokenTitle>
            <TokenInfo> {token.chainId}</TokenInfo>
            <TokenTitle> Price: </TokenTitle>
            <TokenInfo>{token.priceUSD}$</TokenInfo>
            <TokenTitle> Decimal: </TokenTitle>
            <TokenInfo> {token.decimals}</TokenInfo>
            <TokenTitle> Key: </TokenTitle>
            <TokenInfo>{token.coinKey}</TokenInfo>
            <FavoriteButton
                onClick={handleFavoriteClick}
                className={`pushable ${isfavorite ? "is-fav" : ""}`}
            >
                <FavIcon
                    className={` ${isfavorite ? "is-fav-hover" : "inactive-btn"}`}
                >
                    {" "}
                    {isfavorite ? "remove as favorite" : "add as favorite"}
                </FavIcon>
            </FavoriteButton>
        </TokenDetailWrapper>
    );
};

export default TokenDetail;
