import React from "react";

const Pagination = ({
  totalJops,
  jopsPerPage,
  setCurrentJobPage,
  currentJobPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalJops.length / jopsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentJobPage(page)}
          className={currentJobPage == page ? "active" : ""}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
