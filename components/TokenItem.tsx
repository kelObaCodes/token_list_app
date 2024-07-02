import React from "react";
import { Token } from "../utils/tokenInterface";
import Link from "next/link";

interface TokenItemProps {
    token: Token;
    isFavorite: boolean;
    toggleFavorite: (tokenAddress: string) => void;
}

const TokenItem: React.FC<TokenItemProps> = ({
    token,
    isFavorite,
    toggleFavorite,
}) => (
    <div className={`token-item ${isFavorite ? "favorite" : ""}`}>
        <Link href={`/token/${token.chainId}/${token.address}`}>
            <div>
                {token.logoURI ? (
                    <img
                        src={token.logoURI}
                        alt={token.name}
                        width={130}
                        height={130}
                    />
                ) : (
                    <img
                        src="/bitcoin-logo.png"
                        alt={token.name}
                        width={130}
                        height={130}
                    />
                )}
            </div>
            {token.name} ({token.symbol})<p>{token.chainId}</p>
            <p className="token-address">{token.address}</p>
        </Link>

        <span
            onClick={() => toggleFavorite(token.address)}
            className="material-symbols-outlined"
            style={{
                color: isFavorite ? "red" : "gray",
            }}
        >
            favorite
        </span>
    </div>
);

export default TokenItem;
