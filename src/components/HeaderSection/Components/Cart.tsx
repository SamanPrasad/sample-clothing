import { products } from "@data/products";
import type { RootStore } from "@store";
import { setCart } from "@store/cart/cartSlice";
import type { CartItem, LocalStorageCartItem } from "@typings";
import { getLocalStorageCartItems } from "@utils/getFromLocalStorage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const items = useSelector((store: RootStore) => store.cart.products);
  const dispatch = useDispatch();

  useEffect(() => {
    //API calls for loggedin users
    //Local Storage for guest uses
    const storedItems: LocalStorageCartItem[] =
      getLocalStorageCartItems("cart");
    const storedItemsIds = storedItems.map(
      (item: LocalStorageCartItem) => item.id
    );
    const productsList: CartItem[] = products
      .filter((product) => storedItemsIds.includes(product.id))
      .map((product) => {
        return {
          product,
          color:
            storedItems.find((item) => item.id == product.id)?.color || "black",
          size: storedItems.find((item) => item.id == product.id)?.size || "XL",
        };
      });

    dispatch(setCart(productsList));
  }, []);
  return (
    <div className="w-full relative cursor-pointer">
      <svg
        viewBox="0 0 1024 1024"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full aspect-square fill-none"
      >
        <path
          d="M800.8 952C769.6 952 744.8 927.2 744.8 896C744.8 864.8 769.6 840 800.8 840C832 840 856.8 864.8 856.8 896C856.8 927.2 831.2 952 800.8 952ZM352.8 952C321.6 952 296.8 927.2 296.8 896C296.8 864.8 321.6 840 352.8 840C384 840 408.8 864.8 408.8 896C408.8 927.2 383.2 952 352.8 952ZM344 792C301.6 792 264.8 758.4 260 716L205.6 333.6L174.4 155.2C172 136 155.2 120 136.8 120H96C82.4 120 72 109.6 72 96C72 82.4 82.4 72 96 72H136.8C179.2 72 216.8 105.6 222.4 148L253.6 326.4L308 709.6C309.6 728 326.4 744 344 744H864C877.6 744 888 754.4 888 768C888 781.6 877.6 792 864 792H344ZM384 664C371.2 664 360.8 654.4 360 641.6C359.2 635.2 361.6 628.8 365.6 624C369.6 619.2 376 616 381.6 616L816 584C835.2 584 852 568.8 854.4 550.4L904.8 262.4C906.4 248.8 902.4 234.4 894.4 225.6C888.8 219.2 881.6 216 872.8 216H320C306.4 216 296 205.6 296 192C296 178.4 306.4 168 320 168H874.4C896.8 168 916.8 177.6 932 193.6C948.8 212.8 956.8 240.8 953.6 268.8L903.2 556.8C898.4 598.4 860.8 631.2 819.2 631.2L387.2 663.2C385.6 664 384.8 664 384 664Z"
          fill="black"
          className="fill-black dark:fill-white duration-700"
        />
      </svg>
      <p className="absolute min-w-5 p-0.5 -top-2 -right-2.5 text-xs bg-red-700 text-white aspect-square rounded-full flex justify-center items-center">
        {items.length}
      </p>
    </div>
  );
}

export default Cart;
