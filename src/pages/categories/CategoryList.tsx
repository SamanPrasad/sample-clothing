import GroupItemCardList from "@components/Groups/GroupItemCardList";
import { useState } from "react";
import Loader from "@components/Loader/Loader";
import useProductGroup from "@hooks/useProductGroup";

function CategoryList() {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 1;
  const { loading, groupItems } = useProductGroup(
    "categories",
    currentPage,
    perPage
  );

  if (loading && groupItems.length == 0) {
    return <Loader />;
  }

  return (
    <GroupItemCardList
      groupItems={groupItems}
      groupTitle="Categories"
      setCurrentPage={setCurrentPage}
    />
  );
}

export default CategoryList;
