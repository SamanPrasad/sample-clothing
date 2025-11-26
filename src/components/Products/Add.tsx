import { addToCart } from "@store/cart/cartSlice";
import type { LocalStoageNewItem, VariantType } from "@typings";
import {
  getLocalStorageCartItems,
  setLocalStorageCartItems,
} from "@utils/getFromLocalStorage";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

type Props = {
  title: string;
  selectedProduct: VariantType;
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
      const newItem: LocalStoageNewItem = {
        id: selectedProduct.id,
      };

      setLocalStorageCartItems(storedItems, newItem);

      //API call
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  return (
    <div
      className="w-full py-3 duration-300 bg-white hover:bg-[#232323] text-[#232323] hover:text-white cursor-pointer"
      onClick={loading ? () => {} : handleAdd}
    >
      <h1 className="uppercase font-[Poppins] text-sm font-semibold text-center">
        {loading ? "Adding..." : title}
      </h1>
    </div>
  );
}

export default Add;
