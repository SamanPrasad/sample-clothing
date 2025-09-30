import clsx from "clsx";

type Props = {
  color: string;
  src: string;
  selected?: boolean;
  toggleSelect: () => void;
};

function ColorImage({ color, src, selected = false, toggleSelect }: Props) {
  return (
    <div
      title={color}
      className={clsx(
        "relative after:absolute after:top-0 after:left-0 after:scale-120 after:w-full after:aspect-square after:rounded-2xl after:border cursor-pointer",
        selected && "after:border-gray-800",
        !selected && "after:border-gray-300"
      )}
      onClick={toggleSelect}
    >
      <img
        src={src}
        className="relative w-7 aspect-square rounded-3xl object-cover object-top"
      />
    </div>
  );
}

export default ColorImage;
