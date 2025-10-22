import { api } from "@api/axiosClient";
import type { VariantType } from "@typings";
import { useEffect, useState } from "react";

function useVariants() {
  const [variants, setVariants] = useState<VariantType[]>([]);

  useEffect(() => {
    const abortController = new AbortController();
    api
      .get("/variants", { signal: abortController.signal })
      .then((response) => {
        setVariants(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => abortController.abort();
  }, []);

  return variants;
}

export default useVariants;
