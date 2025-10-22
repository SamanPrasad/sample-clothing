import { INITIAL_PER_PAGE } from "@constants";
import { useEffect, useState } from "react";

function useSavePerPage() {
  const [perPage, setPerPage] = useState(() => {
    const pageValue = localStorage.getItem("perpage");
    return pageValue ? parseInt(pageValue) : INITIAL_PER_PAGE;
  });

  useEffect(() => {
    localStorage.setItem("perpage", perPage.toString());
  }, [perPage]);

  return { perPage, setPerPage };
}

export default useSavePerPage;
