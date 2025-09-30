type Props = {
  size: string;
  available: boolean;
  selected?: boolean;
  toggleSelect?: () => void;
};

function SizeButton({
  size,
  selected = false,
  available,
  toggleSelect = () => {},
}: Props) {
  return (
    <div
      className={`w-10 border text-center my-1.5 ${
        available
          ? "cursor-pointer hover:bg-theme-gray hover:border-theme-gray hover:text-white duration-200"
          : "cursor-context-menu opacity-50"
      }
        ${
          selected
            ? "bg-theme-gray border-theme-gray text-white"
            : "border-gray-400"
        }
        `}
      onClick={toggleSelect}
    >
      <span className="text-center">{size}</span>
    </div>
  );
}

export default SizeButton;
