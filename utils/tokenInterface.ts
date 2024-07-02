export interface Token {
    chainId: number;
    address: string;
    symbol: string;
    name: string;
    decimals: number;
    priceUSD: string;
    coinKey: string;
    logoURI: string;
}

export interface TokenListProps {
    tokens: Token[];
}

export interface TokenResponse {
    tokens: {
        [chainId: string]: Token[];
    };
}
