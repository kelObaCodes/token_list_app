import React from "react";

import { Token } from "../utils/tokenInterface";

interface TokenDetailPageProps {
    token: Token;
}

const TokenDetail: React.FC<TokenDetailPageProps> = ({ token }) => {
    return (
        <div>
            <h1>{token.name}</h1>
            <img src={token.logoURI} alt={token.name} />
            <p>Address: {token.address}</p>
            <p>Chain Id: {token.chainId}</p>
            <p>Price: {token.priceUSD}$</p>
            <p>Decimal: {token.decimals}</p>
            <p>Key: {token.coinKey}</p>
        </div>
    );
};

export default TokenDetail;
