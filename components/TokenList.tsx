import React from "react";
import Link from "next/link";
import { TokenListProps } from "../utils/tokenInterface";

const TokenList: React.FC<TokenListProps> = ({ tokens }) => {
    return (
        <div>
            {tokens.map((token, index) => (
                <div key={`${token.address}-${index}`} className="token-row">
                    <img
                        src={token.logoURI}
                        alt={token.name}
                        width={30}
                        height={30}
                    />
                    <Link href={`/token/${token.chainId}/${token.address}`}>
                        {token.name} ({token.symbol})
                    </Link>
                    <p>{token.address}</p>
                </div>
            ))}
        </div>
    );
};

export default TokenList;
