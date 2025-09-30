import { colors } from "@data/colors";
import clsx from "clsx";

type Props = {
  color: string;
  available?: boolean;
  selected?: boolean;
  toggleSelect?: () => void;
};

function ColorButton({
  color,
  available = false,
  selected = false,
  toggleSelect = () => {},
}: Props) {
  return (
    <div
      title={color}
      className={clsx(
        "relative w-8 aspect-square rounded-4xl my-0.5",
        color == "white" && "border border-gray-500",
        available && "opacity-100 cursor-pointer",
        !available && "opacity-40",
        selected &&
          "after:absolute after:w-full after:scale-110 after:rounded-4xl after:border after:border-black after:aspect-square"
      )}
      style={{
        backgroundColor: colors.find((item) => item.color == color)?.code,
      }}
      onClick={toggleSelect}
    ></div>
  );
}

export default ColorButton;
