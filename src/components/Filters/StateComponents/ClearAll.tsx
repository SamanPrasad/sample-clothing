type Props = {
  clearAll: () => void;
};

function ClearAll({ clearAll }: Props) {
  return (
    <button
      className="border border-theme-gray hover:bg-theme-gray hover:text-white rounded-sm font-theme text-sm cursor-pointer p-0 px-1.5"
      onClick={clearAll}
    >
      Clear All
    </button>
  );
}

export default ClearAll;
