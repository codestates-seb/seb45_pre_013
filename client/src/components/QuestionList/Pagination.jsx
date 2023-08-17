import { PageButton, Nav } from "@/styles/QuestionList/PaginationStyle";
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
