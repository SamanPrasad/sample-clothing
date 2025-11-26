import useProductGroup from "@hooks/useProductGroup";
import CategoriesHomeItem from "./Category";
import Loader from "@components/Loader/Loader";

function CategoryList() {
  const { loading, groupItems } = useProductGroup("categories");

  if (loading) return <Loader />;

  return (
    <div className="w-full mt-10">
      <h1 className="text-center text-4xl font-bold uppercase text-theme-gray font-theme">
        categories
      </h1>
      <div className="w-full grid justify-items-center grid-cols-2 lg:grid-cols-4 gap-2.5 my-5 px-1.5">
        {groupItems.length > 0 &&
          groupItems.map((category, index) => (
            <CategoriesHomeItem key={index} data={category} />
          ))}
      </div>
    </div>
  );
}

export default CategoryList;
