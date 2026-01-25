import { type PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  images: string[];
}>;

function ProductImages({ images }: Props) {
  if (images.length == 0) {
    return <img src="/products/image-not-found.png" alt="image-not-found" />;
  }

  return (
    <div className="grid grid-cols-2 gap-2.5">
      {images.map((image) => (
        <img
          key={image}
          src={"/products/" + image + ".jpg"}
          className="w-full aspect-theme-product rounded-xl"
        />
      ))}
    </div>
  );
}

export default ProductImages;
