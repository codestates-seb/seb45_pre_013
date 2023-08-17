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

  return (
    <>
      <Nav>
        <div className="pageBtn">
          <PageButton onClick={() => setPage(page - 1)} disabled={page === 1}>
            Prev
          </PageButton>
          <PageButton onClick={() => setPage(1)} disabled={page === 1}>
            {1}
          </PageButton>
          <PageEllipsis disabled={page === 1}>...</PageEllipsis>
          {Array(numPages)
            .fill()
            .map((_, i) => (
              <PageButton
                key={i + 1}
                onClick={() => setPage(i + 1)}
                aria-current={page === i + 1 ? "page" : null}
              >
                {i + 1}
              </PageButton>
            ))}
          <PageEllipsis disabled={page === numPages}>...</PageEllipsis>
          <PageButton
            onClick={() => setPage(numPages)}
            disabled={page === numPages}
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
