import { useMemo, useState } from "react";
import { Token } from "../utils/tokenInterface";

const useSearchTokens = (tokens: Token[]) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredTokens = useMemo(() => {
        const searchTermLower = searchTerm.toLowerCase().trim();
        if (searchTermLower === "") {
            return tokens;
        } else {
            return tokens.filter(
                (token) =>
                    token.name.toLowerCase().includes(searchTermLower) ||
                    token.symbol.toLowerCase().includes(searchTermLower)
            );
        }
    }, [searchTerm, tokens]);

    return { searchTerm, setSearchTerm, filteredTokens };
};

export default useSearchTokens;
