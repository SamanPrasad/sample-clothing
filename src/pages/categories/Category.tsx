import ItemsGroup from "@components/ItemsGroup/ItemsGroup";
import type { Response } from "@typings";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import { getCategory } from "../../api/category";

function Category() {
  const { categorySlug } = useParams();
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<Response | null>(null);
  const [perPage] = useState(5);

  useEffect(() => {
    setData(
      getCategory(categorySlug!, searchParams.get("page") ?? "1", perPage)
    );
  }, [searchParams, perPage, categorySlug]);
  return (
    <div>
      <ItemsGroup data={data} perPage={perPage} />
    </div>
  );
}

export default Category;
