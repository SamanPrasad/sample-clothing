import { CART_ITEM_TTL } from "@constants";
import type { LocalStoageNewItem, LocalStorageCartItem } from "@typings";

export const getLocalStorageCartItems = (key: string) => {
  const storedItems = JSON.parse(localStorage.getItem(key) ?? "[]");

  const expiry = new Date().getTime();

  return storedItems.filter(
    (item: LocalStorageCartItem) => item.expiry > expiry
  );
};

export const setLocalStorageCartItems = (
  currentItems: LocalStorageCartItem[],
  newItem: LocalStoageNewItem
) => {
  const existingItem = currentItems.find(
    (item: LocalStorageCartItem) => item.id == newItem.id
  );

  try {
    localStorage.setItem(
      "cart",
      JSON.stringify(
        existingItem
          ? [
              ...currentItems.filter(
                (item: LocalStorageCartItem) => item.id !== existingItem.id
              ),
              { ...existingItem, count: existingItem.count + 1 },
            ]
          : [
              ...currentItems,
              {
                id: newItem.id,
                count: 1,
                expiry: new Date().getTime() + CART_ITEM_TTL,
              },
            ]
      )
    );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
