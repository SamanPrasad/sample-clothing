export type ProductType = {
  id: string;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  variants: VariantType[];
};

export type VariantType = {
  color: string;
  sizes: SizeType[];
  images: string[];
};

export type SizeType = {
  size: string;
  price: number;
  availableStock: number;
  sku: string;
};
