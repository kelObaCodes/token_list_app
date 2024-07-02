import React from "react";
import Link from "next/link";
import { Token } from "../utils/tokenInterface";
interface TokenListProps {
    token: Token;
    isFavorite: boolean;
    toggleFavorite: (tokenName: string, tokenAddress: string) => void;
}

interface TokenListProps {
    token: Token;
}

const TokenList: React.FC<TokenListProps> = ({
    token,
    isFavorite,
    toggleFavorite,
}) => {
    return (
        <div className="token-column">
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
                            src="/logo.png"
                            alt={token.name}
                            width={130}
                            height={130}
                        />
                    )}
                </div>
                <h3 className="token-name">
                    {token.name} ({token.symbol})
                </h3>

                <p>{token.chainId}</p>
                <p className="address-field">{token.address}</p>
            </Link>
            <span
                onClick={() => toggleFavorite(token.name, token.address)}
                className="material-symbols-outlined"
                style={{
                    color: isFavorite ? "red" : "gray",
                }}
            >
                favorite
            </span>
        </div>
    );
};

export default TokenList;
