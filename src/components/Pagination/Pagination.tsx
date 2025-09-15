import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import ShowingRange from "./ShowingRange";
import ProgressBar from "./ProgressBar";
import PageList from "./PageList";

interface Props {
  perPage: number;
  pagesCount: number;
  total: number;
}

function Pagination({ perPage, pagesCount, total }: Props) {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const pageParam = searchParams.get("page");
    if (pageParam) {
      const parsePageParam = parseInt(pageParam);
      const page =
        parsePageParam <= 0 || Number.isNaN(parsePageParam)
          ? 1
          : parsePageParam > pagesCount
          ? pagesCount
          : parsePageParam;
      setCurrentPage(page);
    }
  }, [perPage]);

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
