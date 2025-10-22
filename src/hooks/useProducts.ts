import { api } from "@api/axiosClient";
import type { ProductType } from "@typings";
import { useEffect, useState } from "react";

function useProducts(pageNumber: number, perPage: number) {
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const [total, setTotal] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    api
      .get(`/products?page=${pageNumber}&perPage=${perPage}`, {
        signal: abortController.signal,
      })
      .then((response) => {
        const { products, numberOfPages, total } = response.data;
        setProducts(products);
        setTotal(total);
        setNumberOfPages(numberOfPages);
      })
      .catch((err) => {
        console.log("useProducts Error", err);
      })
      .finally(() => {
        if (!abortController.signal.aborted) setLoading(false);
      });

    return () => abortController.abort();
  }, [pageNumber, perPage]);

  return { products, numberOfPages, total, loading };
}

export default useProducts;
