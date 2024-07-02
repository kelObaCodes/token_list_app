import axios from "axios";

const BASE_URL = "https://li.quest/v1";

import { Token, TokenResponse } from "../../utils/tokenInterface";

export const fetchTokens = async (): Promise<Token[]> => {
    const response = await axios.get<TokenResponse>(`${BASE_URL}/tokens`);
    const tokens = Object.values(response.data.tokens).flat();
    return tokens;
};

export const fetchTokenDetails = async (params: any) => {
    const response = await axios.get(`${BASE_URL}/token`, {
      params: {chain: params.chainId, token: params.address}
    });
    return response.data;
  };