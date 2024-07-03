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
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        layout
        className="token-item"
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
            <div>

            <h3 className="name-field">
                {token.name} ({token.symbol})
            </h3>
            </div>

            <div className="address-field">
                <p className="token-address">{token.address}</p>
            </div>
        </Link>

        <span
            onClick={() => toggleFavorite(token.address)}
            className="material-symbols-outlined cursor-pointer fav-icon"
            style={{
                color: isFavorite ? "#f5b5ff" : "gray",
            }}
        >
            favorite
        </span>
    </motion.div>
);

export default TokenItem;
