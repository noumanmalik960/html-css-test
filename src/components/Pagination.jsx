import React from "react";
import {
  BiChevronLeft,
  BiChevronRight,
  BiChevronsLeft,
  BiChevronsRight,
} from "react-icons/bi";

function Pagination() {
  const [currPage, setCurrPage] = React.useState(1);
  const indexArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="pagination-wrapper">
      <BiChevronsLeft
        onClick={() => setCurrPage(1)}
        size={24}
        className="pag-icon"
      />
      <BiChevronLeft
        onClick={() => {
          if (currPage > 1) setCurrPage((prevPage) => prevPage - 1);
        }}
        size={24}
        className="pag-icon"
      />
      {indexArr.map((item, index) => (
        <span
          className={currPage == item ? "curr-page" : null}
          key={index}
          onClick={() => setCurrPage(item)}
        >
          {item}
        </span>
      ))}
      <BiChevronRight
        onClick={() => {
          if (currPage < 10) setCurrPage((prevPage) => prevPage + 1);
        }}
        size={24}
        className="pag-icon"
      />
      <BiChevronsRight
        onClick={() => setCurrPage(10)}
        size={24}
        className="pag-icon"
      />
    </div>
  );
}

export default Pagination;
