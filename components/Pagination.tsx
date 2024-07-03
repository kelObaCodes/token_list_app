import React from "react";
import {
    PaginationContainer,
    RightPaginationButton,
    LeftPaginationButton,
} from "./styles/paginationStyles";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    handlePageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    handlePageChange,
}) => (
    <PaginationContainer>
        {currentPage > 1 && (
            <LeftPaginationButton
                onClick={() => handlePageChange(currentPage - 1)}
            >
                <span className="material-symbols-outlined">
                    chevron_backward
                </span>
                Previous
            </LeftPaginationButton>
        )}
        <span>
            Page {currentPage} of {totalPages}
        </span>
        {currentPage < totalPages && (
            <RightPaginationButton
                onClick={() => handlePageChange(currentPage + 1)}
            >
                Next
                <span className="material-symbols-outlined">
                    chevron_forward
                </span>
            </RightPaginationButton>
        )}
    </PaginationContainer>
);

export default Pagination;
