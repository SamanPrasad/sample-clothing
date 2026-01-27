import type { SliderImageType } from "@typings";
import { type PropsWithChildren } from "react";
import styles from "./Slider.module.css";
import type { SetStateFuncType } from "types/utils";
import clsx from "clsx";

type Props = PropsWithChildren<{
  sliderImages: SliderImageType[];
  currentImageIndex: number;
  setCurrentImageIndex: SetStateFuncType<number>;
}>;

function Navigators({
  sliderImages,
  currentImageIndex,
  setCurrentImageIndex,
}: Props) {
  return (
    <div
      className={clsx(
        "pagination-dots absolute bottom-10 w-full flex justify-center gap-5",
      )}
    >
      {sliderImages.map((image, index) => (
        <div
          key={image.id}
          className={clsx(
            "h-4 aspect-square rounded-2xl border-1 border-gray-500 cursor-pointer",
            styles["navigate-item"],
            index == currentImageIndex ? "bg-gray-500" : "",
          )}
          onClick={() => {
            setCurrentImageIndex(index);
          }}
        ></div>
      ))}
    </div>
  );
}

export default Navigators;
