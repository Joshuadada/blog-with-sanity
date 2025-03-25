import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-8">
      <button
        className="px-2 sm:px-4 py-1 sm:py-2 sm:mx-2 text-xs sm:text-sm md:text-base bg-gray-200 rounded disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <span className="px-2 sm:px-4 py-1 sm:py-2 mx-2 text-xs sm:text-sm md:text-base">Page {currentPage} of {totalPages}</span>

      <button
        className="px-2 sm:px-4 py-1 sm:py-2 sm:mx-2 text-xs sm:text-sm md:text-base bg-gray-200 rounded disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
