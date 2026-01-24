import { api } from "@api/axiosClient";
import type { ProductType } from "@typings";
import { useEffect, useState } from "react";

function useProduct(productId: string | undefined, dependencies: any[] = []) {
  const [product, setProduct] = useState<null | ProductType>(null);
  const [isLoading, setLoadingStatus] = useState<boolean>(true);

  useEffect(() => {
    if (!productId) {
      return;
    }
    const abortController = new AbortController();
    setLoadingStatus(true);

    api
      .get(`/products/${productId}`)
      .then((response) => {
        console.log("response", response);
        setProduct(response.data);
      })
      .catch((err) => {
        console.log("useProduct error" + err);
      })
      .finally(() => {
        if (!abortController.signal.aborted) setLoadingStatus(false);
      });

    return () => abortController.abort();
  }, [productId, ...dependencies]);
  return { product, isLoading };
}

export default useProduct;
