import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import sliderStyles from "./Slider.module.css";
import arrowLeft from "@assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import Loader from "../Loader/Loader";
import { useViewWidth } from "@hooks/useViewWidth";
import clsx from "clsx";
import { api } from "@api/axiosClient";
import type { SliderImageType } from "@typings";

function Slider() {
  const [current, setCurrent] = useState(0);
  const [sliding, setSlidingStatus] = useState(false);
  const [sliderImages, setSliderImages] = useState<SliderImageType[]>([]);
  const [loading, setLoading] = useState(true);
  const autoplayReference = useRef<ReturnType<typeof setTimeout> | null>(null);
  const width = useViewWidth();

  const slide = useCallback(
    (action: "next" | "prev") => {
      setSlidingStatus(true);
      const imagesCount = sliderImages.length;
      if (action == "next") {
        setCurrent((prev) => (prev < imagesCount - 1 ? prev + 1 : 0));
      } else {
        setCurrent((prev) => (prev > 0 ? prev - 1 : imagesCount - 1));
      }
    },
    [sliderImages.length]
  );

  const resetAutoplay = useCallback(() => {
    if (autoplayReference.current) clearTimeout(autoplayReference.current);
    autoplayReference.current = setTimeout(() => {
      slide("next");
    }, import.meta.env.VITE_SLIDER_TIME);
  }, [slide, width]);

  const manualNavigation = useCallback(
    (direction: "next" | "prev") => {
      resetAutoplay();
      setSlidingStatus(true);
      slide(direction);
    },
    [resetAutoplay, slide]
  );

  const navigators = useMemo(() => {
    return sliderImages.map((image, index) => (
      <div
        key={image.id}
        className={`${
          sliderStyles["navigate-item"]
        } h-4 aspect-square rounded-2xl border-1 border-gray-500 cursor-pointer ${
          index == current ? "bg-gray-500" : ""
        }`}
        onClick={() => {
          setSlidingStatus(true);
          resetAutoplay();
          setCurrent(index);
        }}
      ></div>
    ));
  }, [sliderImages, current, width]);

  useEffect(() => {
    setLoading(true);
    const abortController = new AbortController();
    api
      .get(`/sliders?type=${width > 768 ? "landscape" : "potrait"}`, {
        signal: abortController.signal,
      })
      .then((response) => {
        console.log("Slidersssss....");
        setSliderImages(response.data);
      })
      .catch((err) => console.log("Slider error", err))
      .finally(() => {
        if (!abortController.signal.aborted) setLoading(false);
      });

    return () => abortController.abort();
  }, [width]);

  useEffect(() => {
    resetAutoplay();
  }, [current, width, sliderImages]);

  if (width == 0 || loading) {
    return <Loader />;
  }

  return (
    <div className="w-full overflow-hidden group h-[130vw] md:h-[40vw] relative">
      <div className="relative h-full">
        <img
          className={`${
            sliderStyles["slider-item"]
          } current z-10 object-cover ${
            sliding ? sliderStyles["slide-fade"] : ""
          }`}
          src={`/slider/${
            sliderImages.length > 0
              ? sliderImages[current].slug
              : "image-not-found.png"
          }`}
          onAnimationEnd={() => setSlidingStatus(false)}
        />
      </div>
      <div className="absolute top-2/4 -translate-y-1/2 z-20 w-full flex justify-between px-4">
        <img
          src={arrowLeft}
          alt=""
          className={clsx(
            "min-h-8 h-[8vw] md:h-15 rounded-4xl md:opacity-0 group-hover:opacity-100 group-hover:translate-x-0 bg-[#d4d4d4] md:bg-transparent md:-translate-x-20",
            sliderStyles["slider-arrow"]
          )}
          onClick={() => manualNavigation("prev")}
        />
        <img
          src={arrowRight}
          alt=""
          className={clsx(
            "min-h-8 h-[8vw] md:h-15 rounded-4xl md:opacity-0 group-hover:opacity-100 group-hover:translate-x-0 bg-[#d4d4d4] md:bg-transparent md:translate-x-20",
            sliderStyles["slider-arrow"]
          )}
          onClick={() => manualNavigation("next")}
        />
      </div>
      <div className="absolute flex justify-center gap-5 bottom-10 w-full z-30">
        {navigators}
      </div>
    </div>
  );
}

export default Slider;

export const MemoizedSlider = memo(Slider);
