import React from "react";

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
    <div className="pagination">
        {currentPage > 1 && (
            <button onClick={() => handlePageChange(currentPage - 1)}>
                Previous
            </button>
        )}
        <span>
            Page {currentPage} of {totalPages}
        </span>
        {currentPage < totalPages && (
            <button onClick={() => handlePageChange(currentPage + 1)}>
                Next
            </button>
        )}
    </div>
);

export default Pagination;
