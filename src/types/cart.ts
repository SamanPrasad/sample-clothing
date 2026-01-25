export type CartItem = {
  productId: string;
  title: string;
  slug: string;
  color: string;
  image: string;
  size: string;
  price: number;
  count: number;
  sku: string;
};

export type AddToCartPayload = {
  productId: string;
  variant: string;
  size: string;
  count: number;
};
