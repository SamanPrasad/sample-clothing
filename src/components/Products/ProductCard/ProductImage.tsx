import noImage from "@assets/no-image.png";

type Props = {
  src: string;
  alt: string;
  extraClasses: string;
};
function ProductImage({ src, alt, extraClasses }: Props) {
  return (
    <img
      src={src ? `/products/${src}.jpg` : noImage}
      alt={alt}
      className={`${extraClasses} absolute w-full h-full object-center object-cover transition-[scale,opacity] group-hover:scale-110 duration-[2s,0.5s]`}
    />
  );
}

export default ProductImage;
