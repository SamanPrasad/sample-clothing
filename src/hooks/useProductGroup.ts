import { api } from "@api/axiosClient";
import type { GroupItem } from "@typings";
import { useEffect, useState } from "react";

function useProductGroup(
  groupType: "categories" | "collections",
  currentPage?: number,
  perPage?: number
) {
  const [loading, setLoading] = useState(true);
  const [groupItems, setGroupItems] = useState<GroupItem[]>([]);

  useEffect(() => {
    setLoading(true);
    const abortController = new AbortController();
    api
      .get(
        `/product-groups?type=${groupType}${
          currentPage && perPage
            ? "&page=" + currentPage + "&perpage=" + perPage
            : ""
        }`,
        { signal: abortController.signal }
      )
      .then((response) => {
        setGroupItems([...groupItems, ...response.data]);
      })
      .catch((err) => console.log("Error...", err))
      .finally(() => {
        if (!abortController.signal.aborted) setLoading(false);
      });

    return () => abortController.abort();
  }, [perPage, currentPage]);

  return { loading, groupItems, groupType };
}

export default useProductGroup;
