import { api } from "@api/axiosClient";
import { useViewWidth } from "@hooks/useViewWidth";
import type { SliderImageType } from "@typings";
import clsx from "clsx";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import styles from "./Slider.module.css";
import Loader from "@components/Loader/Loader";
import arrowLeft from "@assets/icons/arrow-left.svg";
import arrowRight from "@assets/icons/arrow-right.svg";
import Navigators from "./Navigators";

function Slider() {
  const [sliderImages, setSliderImages] = useState<SliderImageType[]>([]);
  const { width, isWidthLoading } = useViewWidth();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const slide = useCallback(
    (action: "prev" | "next") => {
      setCurrentImageIndex((prev) =>
        action == "next"
          ? currentImageIndex == sliderImages.length - 1
            ? 0
            : prev + 1
          : currentImageIndex == 0
            ? sliderImages.length - 1
            : prev - 1,
      );
    },
    [currentImageIndex, sliderImages, setCurrentImageIndex],
  );

  const resetAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
    }
    autoplayRef.current = setTimeout(() => {
      slide("next");
    }, 4000);
  }, [slide]);

  useEffect(() => {
    const abortController = new AbortController();
    api
      .get(`/sliders?type=${width > 768 ? "landscape" : "potrait"}`, {
        signal: abortController.signal,
      })
      .then((response) => {
        setSliderImages(response.data);
      })
      .catch((err) => console.log("Slider error", err))
      .finally(() => {
        if (!abortController.signal.aborted) setIsLoading(false);
      });

    return () => abortController.abort();
  }, [width]);

  useEffect(() => {
    resetAutoplay();
  }, [currentImageIndex]);

  useEffect(() => {
    if (sliderImages.length > 0) setCurrentImageIndex(0);
  }, [sliderImages]);

  if (width == 0 || isLoading || isWidthLoading) {
    return <Loader />;
  }

  return (
    <div className={clsx("relative group w-full h-[100vh]")}>
      <div
        className={clsx("slider-images-wrapper w-full h-full overflow-hidden")}
      >
        <img
          key={currentImageIndex}
          src={`/slider/${sliderImages.length > 0 ? sliderImages[currentImageIndex].slug : "image-not-found.png"}`}
          alt=""
          className={clsx("w-full h-full object-cover", styles["slide-fade"])}
        />
      </div>
      <div
        className={clsx(
          "navigation-arrows absolute top-1/2 -translate-y-1/2 inset-x-2.5 flex justify-between",
        )}
      >
        <div
          className={clsx(
            "min-h-8 h-[8vw] md:h-15 rounded-4xl md:opacity-0 group-hover:opacity-100 group-hover:translate-x-0 bg-[#d4d4d4] md:bg-transparent md:-translate-x-20 overflow-hidden",
            styles["slider-arrow"],
          )}
          onClick={() => slide("prev")}
        >
          <img src={arrowLeft} alt="" className="w-full h-full" />
        </div>
        <div
          className={clsx(
            "min-h-8 h-[8vw] md:h-15 rounded-4xl md:opacity-0 group-hover:opacity-100 group-hover:translate-x-0 bg-[#d4d4d4] md:bg-transparent md:translate-x-20 overflow-hidden",
            styles["slider-arrow"],
          )}
          onClick={() => slide("next")}
        >
          <img src={arrowRight} alt="" className="w-full h-full" />
        </div>
      </div>
      <Navigators
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        sliderImages={sliderImages}
      />
    </div>
  );
}

export default Slider;

export const MemoizedSlider = memo(Slider);
