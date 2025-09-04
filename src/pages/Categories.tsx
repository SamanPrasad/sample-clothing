import CategoryItem from "../components/Categories/CategoriesPageItem";
import { categories } from "../data/categories";

function Categories() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-[20vw] w-full relative">
        <h1 className="text-3xl md:text-5xl font-[Poppins] text-black uppercase font-bold tracking-widest">
          Categories
        </h1>
        <hr className="h-1 w-1/5 border-2 border-black mt-2.5" />
      </div>
      <div className="w-full flex flex-col items-center bg-white mt-5 mb-40 px-5">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,370px))] justify-center gap-x-10 gap-y-28">
          {categories.map((item) => (
            <CategoryItem data={item} />
          ))}
        </div>
        <div className="loadmore mt-16">
          <button className="uppercase w-xs border border-[#232323] py-3 font-bold text-[#232323] hover:bg-[#232323] hover:text-white cursor-pointer">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
