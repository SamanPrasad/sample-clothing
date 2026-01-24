import Loader from "@components/Loader/Loader";
import useProduct from "@hooks/useProduct";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import type { SizeType, VariantType } from "@typings";
import ProductDetails from "./ProductDetails";
import { useScrollUp } from "@context/ScrollUpProvider";
import ProductImages from "@components/Singles/Product/Images/ProductImages";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

function Product() {
  const { productId } = useParams();
  const [selectedVariant, setSelectedVariant] = useState<VariantType | null>(
    null,
  );
  const [selectedSize, setSelectedSize] = useState<SizeType | null>(null);
  const [selectedQuanity, setSelectedQuantity] = useState(1);
  const { product, isLoading } = useProduct(productId);
  useScrollUp(selectedVariant);

  const getImages = useCallback(() => {
    return selectedVariant ? selectedVariant.images : [];
  }, [selectedVariant, product]);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setSelectedSize(
        product.variants[0].sizes.find((size) => size.availableStock > 0) ||
          null,
      );
    }
  }, [product]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-5 mt-10">
      <section className="p-2.5 lg:col-span-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedVariant?.color}
            initial={{ y: -20, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0.5, transition: { duration: 0.1 } }}
            transition={{ duration: 0.2 }}
          >
            <ProductImages images={getImages()} />
          </motion.div>
        </AnimatePresence>
      </section>
      <section className="py-1 px-8 lg:col-span-2 sticky top-0 h-fit">
        <ProductDetails
          product={product}
          selectedVariant={selectedVariant}
          selectedSize={selectedSize}
          selectedQuantity={selectedQuanity}
          setVariant={setSelectedVariant}
          setSize={setSelectedSize}
          setQuantity={setSelectedQuantity}
        />
      </section>
    </div>
  );
}

export default Product;
