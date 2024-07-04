import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_STAGING_BASE_URL;

import { Token, TokenResponse } from "../../utils/tokenInterface";

export const fetchTokens = async (): Promise<Token[]> => {
    const response = await axios.get<TokenResponse>(`${apiUrl}/tokens`);
    const tokens = Object.values(response.data.tokens).flat();
    return tokens;
};

export const fetchTokenDetails = async (params: any) => {
    const response = await axios.get(`${apiUrl}/token`, {
        params: { chain: params.chainId, token: params.address },
    });
    return response.data;
};
