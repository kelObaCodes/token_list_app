import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
    PaginationContainer,
    RightPaginationButton,
    LeftPaginationButton,
    ChevIconForward,
    ChevIconBack,
    PageText
} from "./styles/PaginationStyle";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    handlePageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    handlePageChange,
}) => {
    const router = useRouter();

    useEffect(() => {
        // This action is to initialize currentPage from the URL if present
        const initialPage = router.query.page ? Number(router.query.page) : 1;
        if (initialPage !== currentPage) {
            handlePageChange(initialPage);
        }
    }, [router.query.page, currentPage, handlePageChange]);

    const changePage = (newPage: number) => {
        router.push(
            {
                pathname: router.pathname,
                query: { ...router.query, page: newPage },
            },
            undefined,
            { shallow: true }
        );
    };

    return (
        <PaginationContainer>
            {currentPage > 1 && (
                <LeftPaginationButton
                    onClick={() => changePage(currentPage - 1)}
                >
                    <ChevIconBack className="material-symbols-outlined">
                        chevron_backward
                    </ChevIconBack>
                    Prev
                </LeftPaginationButton>
            )}
            <PageText>
                Page {currentPage} of {totalPages}
            </PageText>
            {currentPage < totalPages && (
                <RightPaginationButton
                    onClick={() => changePage(currentPage + 1)}
                >
                    Next
                    <ChevIconForward className="material-symbols-outlined">
                        chevron_forward
                    </ChevIconForward>
                </RightPaginationButton>
            )}
        </PaginationContainer>
    );
};

export default Pagination;
