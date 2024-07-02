import React, { useEffect, useState } from "react";

import { Token } from "../utils/tokenInterface";

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
        <div>
            <h1>{token.name}</h1>
            <img src={token.logoURI} alt={token.name} />
            <p>Address: {token.address}</p>
            <p>Chain Id: {token.chainId}</p>
            <p>Price: {token.priceUSD}$</p>
            <p>Decimal: {token.decimals}</p>
            <p>Key: {token.coinKey}</p>
            <button onClick={handleFavoriteClick}>
                {isFavorite ? "Unmark Favorite" : "Mark as Favorite"}
            </button>
        </div>
    );
};

export default TokenDetail;
