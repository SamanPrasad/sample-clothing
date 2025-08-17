import React from "react";

interface Props {
  category: string;
}

function ShopCategory({ category }: Props) {
  return <div>Category : {category}</div>;
}

export default ShopCategory;
