export type ProductType = {
  id: string;
  title: string;
  slug: string;
  description: string;
  sizes: string[];
  colors: string[];
  tags: string[];
  variants: VariantType[];
};

export type VariantType = {
  id: string;
  productId: string;
  color: string;
  size: string;
  price: number;
  stock: number;
  images: string[];
};
