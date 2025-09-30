import { addToCart } from "@store/cart/cartSlice";
import type { CartItem, LocalStoageNewItem } from "@typings";
import {
  getLocalStorageCartItems,
  setLocalStorageCartItems,
} from "@utils/getFromLocalStorage";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

type Props = {
  title: string;
  selectedProduct: CartItem;
};

function Add({ title, selectedProduct }: Props) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(selectedProduct));
    setLoading(true);
  };

  useEffect(() => {
    if (loading) {
      const storedItems = getLocalStorageCartItems("cart");
      console.log("stored", storedItems);
      const newItem: LocalStoageNewItem = {
        id: selectedProduct.product.id,
        color: selectedProduct.color,
        size: selectedProduct.size,
      };
      console.log("new", newItem);

      setLocalStorageCartItems(storedItems, newItem);

      //API call
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  return (
    <div
      className="w-full border border-[#232323] py-3 hover:shadow-xl/30 duration-150 bg-white hover:bg-[#232323] text-[#232323] hover:text-white cursor-pointer"
      onClick={loading ? () => {} : handleAdd}
    >
      <h1 className="uppercase font-[Poppins] text-sm font-semibold text-center">
        {loading ? "Adding..." : title}
      </h1>
    </div>
  );
}

export default Add;
