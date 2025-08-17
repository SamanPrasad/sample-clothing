import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./Slider.css";
import { images } from "../../data/sliderImages";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

function Slider() {
  const [current, setCurrent] = useState(0);
  const [sliding, setStatus] = useState(false);
  const autoplayReference = useRef<number | null>(null);

  const slide = useCallback(
    (action: "next" | "prev") => {
      setStatus(true);
      const imagesCount = images.length;
      if (action == "next") {
        setCurrent((prev) => (prev < imagesCount - 1 ? prev + 1 : 0));
      } else {
        setCurrent((prev) => (prev > 0 ? prev - 1 : imagesCount - 1));
      }
    },
    [images.length]
  );

  const resetAutoplay = useCallback(() => {
    if (autoplayReference.current) clearTimeout(autoplayReference.current);
    autoplayReference.current = setTimeout(() => {
      slide("next");
    }, 5000);
  }, [slide]);

  const manualNavigation = useCallback(
    (direction: "next" | "prev") => {
      resetAutoplay();
      setStatus(true);
      slide(direction);
    },
    [resetAutoplay, slide]
  );

  const navigators = useMemo(() => {
    return images.map((image, index) => (
      <div
        key={image.id}
        className={`navigate-item h-4 aspect-square rounded-2xl border-1 border-gray-500 cursor-pointer ${
          index == current ? "bg-gray-500" : ""
        }`}
        onClick={() => {
          setStatus(true);
          resetAutoplay();
          setCurrent(index);
        }}
      ></div>
    ));
  }, [images, current]);

  useEffect(() => {
    resetAutoplay();
  }, [current]);

  return (
    <div className="slider overflow-hidden group h-[40vw] relative hidden lg:block">
      <div className="sliders-container relative h-full">
        <img
          className={`slider-item current z-10 object-cover ${
            sliding ? "slide-fade" : ""
          }`}
          src={images[current].src}
          onAnimationEnd={() => setStatus(false)}
        />
      </div>
      <div className="controllers absolute top-2/4 -translate-y-1/2 z-20 w-full flex justify-between px-4">
        <img
          src={arrowLeft}
          alt=""
          className="slider-arrow -translate-x-20"
          onClick={() => manualNavigation("prev")}
        />
        <img
          src={arrowRight}
          alt=""
          className="slider-arrow translate-x-20"
          onClick={() => manualNavigation("next")}
        />
      </div>
      <div className="navigators absolute flex justify-center gap-5 bottom-10 w-full z-30">
        {navigators}
      </div>
    </div>
  );
}

export default Slider;

export const MemoizedSlider = memo(Slider);
