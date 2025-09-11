import { type ReactElement } from "react";
import { Link, useLocation } from "react-router";

interface Props {
  currentPage: number;
  pagesCount: number;
  setCurrentPage: (pageNumber: number) => void;
}

function PageList({ currentPage, pagesCount, setCurrentPage }: Props) {
  const path = useLocation();

  const generateLinkElement = (page: number, isActive: boolean) => (
    <Link
      key={page}
      to={path.pathname + `?page=${page}`}
      className={`${
        isActive ? "font-bold text-[#363636] underline" : ""
      } mx-1 font-[Poppins] text-xs text-[#707070] hover:underline`}
      onClick={() => setCurrentPage(page)}
    >
      {page}
    </Link>
  );

  const generateSpanElement = (key: string, text: string) => (
    <span key={key} className="mx-1 font-[Poppins] text-xs text-[#707070]">
      {text}
    </span>
  );

  const generatePageNumbers = () => {
    const pageNumbersElements: ReactElement[] = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(pagesCount, currentPage + 2);

    //add 1 and start-ellipsis
    if (start > 1) {
      pageNumbersElements.push(generateLinkElement(1, currentPage == 1));
      if (start > 2)
        pageNumbersElements.push(generateSpanElement("start-ellipsis", "..."));
    }

    //pages loop
    for (let i = start; i <= end; i++) {
      pageNumbersElements.push(generateLinkElement(i, currentPage == i));
    }

    //add last page and end-ellipsis
    if (end < pagesCount) {
      if (end < pagesCount - 1)
        pageNumbersElements.push(generateSpanElement("end-ellipsis", "..."));
      pageNumbersElements.push(
        generateLinkElement(pagesCount, pagesCount == currentPage)
      );
    }

    return pageNumbersElements;
  };

  return (
    <div className="flex justify-center items-center gap-1.5">
      {currentPage > 1 && (
        <Link
          to={`${path.pathname}?page=${currentPage - 1}`}
          className="uppercase hover:underline font-bold text-xs text-[#363636] me-2"
          onClick={() =>
            setCurrentPage(currentPage - 1 <= 0 ? currentPage : currentPage - 1)
          }
        >
          Prev
        </Link>
      )}
      {generatePageNumbers()}
      {currentPage < pagesCount && (
        <Link
          to={`${path.pathname}?page=${currentPage + 1}`}
          className="uppercase hover:underline font-bold text-xs text-[#363636] ms-2"
          onClick={() =>
            setCurrentPage(
              currentPage + 1 > pagesCount ? currentPage : currentPage + 1
            )
          }
        >
          Next
        </Link>
      )}
    </div>
  );
}

export default PageList;
