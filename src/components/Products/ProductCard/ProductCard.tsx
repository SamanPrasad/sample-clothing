import useNoImage from "@hooks/useNoImage";
import type { ProductType } from "@typings";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

type Props = {
  product: ProductType;
};

function ProductCard({ product }: Props) {
  const noImage = useNoImage();
  const [colorImage, setColorImage] = useState<string | null>(
    product.variants[0].images[0] ?? null,
  );
  const [currentSliderImage, setCurrentSliderImage] = useState<string | null>(
    colorImage,
  );
  const sliderRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sizesList = [
    ...new Set(
      product.variants.flatMap((item) => item.sizes).map((size) => size.size),
    ),
  ];
  const images = [
    ...new Set([
      ...product.variants.map((variant) => variant.images[0]),
      ...product.variants.flatMap((variant) => variant.images),
    ]),
  ];

  const increaseIndex = (index: number) => {
    return index == images.length - 1 ? 0 : index + 1;
  };

  const startSlideShow = () => {
    if (sliderRef.current) {
      clearInterval(sliderRef.current);
    }

    let index = increaseIndex(images.findIndex((image) => image == colorImage));

    setCurrentSliderImage(images[index]);
    index = increaseIndex(index);

    sliderRef.current = setInterval(() => {
      setCurrentSliderImage(images[index]);
      index = increaseIndex(index);
    }, 2000);
  };

  const endSlideShow = () => {
    sliderRef.current && clearInterval(sliderRef.current);
    setCurrentSliderImage(colorImage);
  };

  useEffect(() => {
    setCurrentSliderImage(colorImage);
  }, [colorImage]);

  return (
    <div className="product-card-wrapper">
      <div
        className="product-image-wrapper group border border-gray-300 relative overflow-hidden group rounded-lg w-full aspect-[0.6] bg-white"
        onMouseEnter={startSlideShow}
        onMouseLeave={endSlideShow}
      >
        <a href={`/products/${product.slug}`}>
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSliderImage}
              src={`/products/${currentSliderImage ? currentSliderImage + ".jpg" : noImage}`}
              alt=""
              className={clsx("w-full h-full object-cover")}
              initial={{ opacity: 0.3, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </a>
        <div className="product-sizes-wrapper -bottom-12 group-hover:bottom-0 transition-all duration-300 bg-white absolute w-full flex justify-between p-3">
          <div className="product-sizes-title">
            <span className="uppercase">size</span>
          </div>
          <div className="product-sizes-list z-50">
            <ul className="flex justify-end gap-1.5">
              {sizesList.map((size) => {
                return (
                  <li key={size} className="uppercase relative font-theme">
                    <a
                      href={`/products/${product.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={-1}
                      className="w-full h-full"
                    >
                      <span className="relative font-medium after:content-[''] after:absolute after:left-0 after:top-[85%] after:w-0 after:h-0.5 after:bg-black after:rounded-2xl hover:after:w-full after:transition-all after:duration-300 p-0">
                        {size}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div
          className={clsx(
            "images-pagination absolute scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 inset-y-0 w-2.5 right-0 px-2.5 flex flex-col justify-center items-center gap-2.5 transition-all duration-300",
          )}
        >
          {images.map((image) => (
            <div
              key={image}
              className={clsx(
                "w-2.5 rounded-3xl bg-black transition-all duration-300",
                image == currentSliderImage && "h-8",
                image != currentSliderImage && "h-2.5",
              )}
            ></div>
          ))}
        </div>
      </div>
      <div className="product-title py-2">
        <a href={`/products/${product.slug}`} target="_blank">
          <h3 className="font-theme text-sm font-light">{product.title}</h3>
        </a>
      </div>
      <div className="product-colors flex justify-start gap-2">
        {product.variants.map((variant) => {
          return (
            <div
              key={variant.color}
              className={clsx(
                "relative w-5 aspect-square rounded-3xl after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:border after:rounded-3xl after:transition-all after:duration-300",
                variant.images[0] != colorImage &&
                  "after:border-transparent after:scale-0",
                variant.images[0] == colorImage &&
                  "after:border-gray-600 after:scale-120 ",
              )}
              onClick={() => setColorImage(variant.images[0] ?? null)}
              title={variant.color}
            >
              <img
                src={`/products/${variant.images.length > 0 ? variant.images[0] + ".jpg" : noImage}`}
                className="w-full h-full rounded-3xl"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductCard;
