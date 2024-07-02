import { useMemo, useState } from "react";
import { Token } from "../utils/tokenInterface";

const usePagination = (tokens: Token[], tokensPerPage: number) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = useMemo(() => Math.ceil(tokens.length / tokensPerPage), [
        tokens.length,
        tokensPerPage,
    ]);

    const currentTokens = useMemo(() => {
        const startIdx = (currentPage - 1) * tokensPerPage;
        return tokens.slice(startIdx, startIdx + tokensPerPage);
    }, [currentPage, tokens, tokensPerPage]);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    return { currentPage, totalPages, currentTokens, handlePageChange };
};

export default usePagination;
