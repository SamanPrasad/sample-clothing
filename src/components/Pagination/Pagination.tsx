import { type Dispatch, type SetStateAction } from "react";
import ShowingRange from "./ShowingRange";
import ProgressBar from "./ProgressBar";
import PageList from "./PageList";

interface Props {
  perPage: number;
  pagesCount: number;
  total: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

function Pagination({
  perPage,
  pagesCount,
  total,
  currentPage,
  setCurrentPage,
}: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <ShowingRange currentPage={currentPage} perPage={perPage} total={total} />
      <div className="w-[200px] h-1 mt-2.5 mb-4">
        <ProgressBar currentPage={currentPage} pagesCount={pagesCount} />
      </div>
      <div className="flex justify-center">
        <PageList
          currentPage={currentPage}
          pagesCount={pagesCount}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default Pagination;
