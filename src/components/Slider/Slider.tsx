import {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./Slider.css";
import { images, potraitImages } from "../../data/sliderImages";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import Loader from "../Loader/Loader";
import { ViewWidthContext } from "@context/ViewWidthProvider";

function Slider() {
  const [current, setCurrent] = useState(0);
  const [sliding, setStatus] = useState(false);
  const autoplayReference = useRef<ReturnType<typeof setTimeout> | null>(null);
  const width = useContext(ViewWidthContext);

  const slide = useCallback(
    (action: "next" | "prev") => {
      setStatus(true);
      const imagesCount = width > 768 ? images.length : potraitImages.length;
      if (action == "next") {
        setCurrent((prev) => (prev < imagesCount - 1 ? prev + 1 : 0));
      } else {
        setCurrent((prev) => (prev > 0 ? prev - 1 : imagesCount - 1));
      }
    },
    [images.length, width, potraitImages.length]
  );

  const resetAutoplay = useCallback(() => {
    if (autoplayReference.current) clearTimeout(autoplayReference.current);
    autoplayReference.current = setTimeout(() => {
      slide("next");
    }, 5000);
  }, [slide, width]);

  const manualNavigation = useCallback(
    (direction: "next" | "prev") => {
      resetAutoplay();
      setStatus(true);
      slide(direction);
    },
    [resetAutoplay, slide]
  );

  const navigators = useMemo(() => {
    return (width > 768 ? images : potraitImages).map((image, index) => (
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
  }, [images, potraitImages, current, width]);

  const handleSrc = () => {
    if (width <= 768 && potraitImages.length - 1 < current) {
      setCurrent(0);
      return potraitImages[0].src;
    } else if (width > 768 && images.length - 1 < current) {
      setCurrent(0);
      return images[0].src;
    }
    return (width > 768 ? images : potraitImages)[current].src;
  };

  useEffect(() => {
    resetAutoplay();
  }, [current, width]);

  if (width == 0) {
    return <Loader />;
  }

  return (
    <div className="w-full slider overflow-hidden group h-[130vw] md:h-[40vw] relative">
      <div className="sliders-container relative h-full">
        <img
          className={`slider-item current z-10 object-cover ${
            sliding ? "slide-fade" : ""
          }`}
          src={handleSrc()}
          onAnimationEnd={() => setStatus(false)}
        />
      </div>
      <div className="controllers absolute top-2/4 -translate-y-1/2 z-20 w-full flex justify-between px-4">
        <img
          src={arrowLeft}
          alt=""
          className="slider-arrow md:-translate-x-20"
          onClick={() => manualNavigation("prev")}
        />
        <img
          src={arrowRight}
          alt=""
          className="slider-arrow md:translate-x-20"
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
