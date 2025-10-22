import useProductGroup from "@hooks/useProductGroup";
import CategoriesHomeItem from "./Category";
import Loader from "@components/Loader/Loader";

function CategoryList() {
  const { loading, groupItems } = useProductGroup("categories");

  if (loading) return <Loader />;

  return (
    <div className="w-full grid justify-items-center grid-cols-2 lg:grid-cols-4 gap-2.5 my-5">
      {groupItems.length > 0 &&
        groupItems.map((category, index) => (
          <CategoriesHomeItem key={index} data={category} />
        ))}
    </div>
  );
}

export default CategoryList;
