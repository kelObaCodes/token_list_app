import React from "react";
import { Token } from "../utils/tokenInterface";
import Link from "next/link";
import { motion } from "framer-motion";
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
    <motion.div
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        layout
        className={`token-item ${isFavorite ? "favorite" : ""}`}
    >
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
            className="material-symbols-outlined cursor-pointer fav-icon"
            style={{
                color: isFavorite ? "red" : "gray",
            }}
        >
            favorite
        </span>
    </motion.div>
);

export default TokenItem;
