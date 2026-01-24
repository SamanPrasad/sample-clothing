import type { Dispatch, RootStore } from "@store";
import { addToCartAsync } from "@store/cart/cartSlice";
import clsx from "clsx";
import { type PropsWithChildren } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = PropsWithChildren<{
  productId: string;
  variant: string;
  size: string | undefined;
  count: number;
}>;

function AddToCart({ productId, variant, size, count }: Props) {
  const dispatch = useDispatch<Dispatch>();
  const isAdding = useSelector((store: RootStore) => store.cart.waiting);
  const buttonDisabled = size && !isAdding ? false : true;
  console.log("addingggg", isAdding, size, buttonDisabled);
  return (
    <div>
      <button
        className={clsx(
          "font-theme text-sm font-normal rounded-3xl border border-black text-white bg-black px-16 py-2.5 uppercase",
          !buttonDisabled &&
            " hover:text-black hover:bg-white duration-300 transition-all opacity-100 cursor-pointer",
          buttonDisabled && "opacity-20",
        )}
        onClick={
          !buttonDisabled
            ? () =>
                dispatch(
                  addToCartAsync({
                    productId,
                    variant,
                    size: size ? size : "",
                    count,
                  }),
                )
            : () => {}
        }
      >
        {isAdding ? "Adding..." : "Add to Cart"}
      </button>
    </div>
  );
}

export default AddToCart;
