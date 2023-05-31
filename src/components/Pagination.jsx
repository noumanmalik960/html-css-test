import React, { useState } from "react";
import {
  BiChevronLeft,
  BiChevronRight,
  BiChevronsLeft,
  BiChevronsRight,
} from "react-icons/bi";

function Pagination() {
  const [currPage, setCurrPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (pageNumber) => {
    setCurrPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currPage > 1) {
      setCurrPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currPage < totalPages) {
      setCurrPage((prevPage) => prevPage + 1);
    }
  };

  const handleFirstPage = () => {
    setCurrPage(1);
  };

  const handleLastPage = () => {
    setCurrPage(totalPages);
  };

  const renderPageNumbers = () => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    return pageNumbers.map((pageNumber) => (
      <span
        key={pageNumber}
        className={currPage === pageNumber ? "curr-page" : null}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </span>
    ));
  };

  return (
    <div className="pagination-wrapper">
      <BiChevronsLeft
        onClick={handleFirstPage}
        size={24}
        className="pag-icon"
      />
      <BiChevronLeft onClick={handlePrevPage} size={24} className="pag-icon" />
      {renderPageNumbers()}
      <BiChevronRight onClick={handleNextPage} size={24} className="pag-icon" />
      <BiChevronsRight
        onClick={handleLastPage}
        size={24}
        className="pag-icon"
      />
    </div>
  );
}

export default Pagination;
