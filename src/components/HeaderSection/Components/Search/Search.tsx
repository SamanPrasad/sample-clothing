import SearchIcon from "./SearchIcon";

function Search() {
  return (
    <div className="border-b-black dark:border-b-white border-b-1 flex justify-between h-full w-full duration-700">
      <input
        className="focus:outline-none w-full font-[Poppins] text-xs text-gray-700 dark:text-white placeholder-gray-700 dark:placeholder-white duration-700"
        type="text"
        placeholder="Search"
      />
      <div className="w-8">
        <SearchIcon />
      </div>
    </div>
  );
}

export default Search;
