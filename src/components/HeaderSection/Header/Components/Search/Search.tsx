import SearchIcon from "./SearchIcon";

function Search() {
  return (
    <div className="border-b-black border-b-1 flex justify-between h-full w-full">
      <input
        className="focus:outline-none w-full font-[Poppins] text-xs text-gray-700 placeholder-gray-700"
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
