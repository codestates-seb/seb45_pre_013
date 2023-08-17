import {
  PageButton,
  Nav,
  PageEllipsis,
} from "@/styles/QuestionList/PaginationStyle";
import { useState } from "react";

function Pagination({ total, limit, page, setPage, setLimit }) {
  const numPages = Math.ceil(total / limit);
  const [currentPagecount, setCurrentPagecount] = useState(10);

  const limitChange = (e) => {
    const newLimit = e.target.innerHTML;
    setLimit(Number(newLimit));
    setCurrentPagecount(Number(newLimit));
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const minPage = Math.max(1, page - 2);
    const maxPage = Math.min(numPages, minPage + 4);

    for (let i = minPage; i <= maxPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <>
      <Nav>
        <div className="pageBtn">
          <PageButton onClick={() => setPage(page - 1)} disabled={page === 1}>
            Prev
          </PageButton>
          <PageButton onClick={() => setPage(1)} disabled={page <= 3}>
            {1}
          </PageButton>
          <PageEllipsis disabled={page <= 3}>...</PageEllipsis>
          {getPageNumbers().map((pageNum) => (
            <PageButton
              key={pageNum}
              onClick={() => setPage(pageNum)}
              aria-current={page === pageNum ? "page" : null}
            >
              {pageNum}
            </PageButton>
          ))}
          <PageEllipsis disabled={page >= numPages - 2}>...</PageEllipsis>
          <PageButton
            onClick={() => setPage(numPages)}
            disabled={page >= numPages - 2}
          >
            {numPages}
          </PageButton>
          <PageButton
            onClick={() => setPage(page + 1)}
            disabled={page === numPages}
          >
            Next
          </PageButton>
        </div>

        <div className="perPage">
          <PageButton
            className={currentPagecount === 10 ? "currentPagecount" : ""}
            onClick={limitChange}
          >
            15
          </PageButton>
          <PageButton
            className={currentPagecount === 20 ? "currentPagecount" : ""}
            onClick={limitChange}
          >
            30
          </PageButton>
          <PageButton
            className={currentPagecount === 30 ? "currentPagecount" : ""}
            onClick={limitChange}
          >
            50
          </PageButton>
          <p>per page</p>
        </div>
      </Nav>
    </>
  );
}

export default Pagination;
