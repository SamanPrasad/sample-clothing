import Category from "../components/Categories/Category";
import { categories } from "../data/categories";

function Categories() {
  return (
    <div>
      <div className="title h-[20vw] w-full relative">
        <h1 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-3xl md:text-5xl font-[Poppins] text-black uppercase font-bold tracking-widest">
          Categories
        </h1>
        <hr className="h-1 w-1/5 border-2 border-black absolute left-1/2 top-2/3 -translate-x-1/2" />
      </div>
      <div className="categories flex flex-col items-center h-[200vh] bg-white mt-5">
        <div className="categories-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-28 px-4 ">
          {categories.map((item) => (
            <Category data={item} />
          ))}
        </div>
        <div className="loadmore mt-28">
          <button className="uppercase w-xs border border-[#232323] py-3 font-bold text-[#232323] hover:bg-[#232323] hover:text-white cursor-pointer">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
