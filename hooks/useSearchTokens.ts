import { useMemo, useState } from "react";
import { Token } from "../utils/tokenInterface";

const useSearchTokens = (tokens: Token[], currentTab:string, favorites: string[]) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredTokens = useMemo(() => {
        const searchTermLower = searchTerm.toLowerCase().trim();
        const filtered = currentTab === "all" ? tokens : tokens.filter(token => favorites.includes(token.address));
        if (searchTermLower === "") {
            return filtered;
        } else {
            return filtered.filter(
                (token) =>
                    token.name.toLowerCase().includes(searchTermLower) ||
                    token.symbol.toLowerCase().includes(searchTermLower)
            );
        }
    }, [searchTerm, tokens, currentTab, favorites]);

    return { searchTerm, setSearchTerm, filteredTokens };
};

export default useSearchTokens;
