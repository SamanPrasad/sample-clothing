export type LocalStorageCartItem = {
  id: number;
  color: string;
  size: string;
  count: number;
  expiry: number;
};

export type LocalStoageNewItem = Omit<LocalStorageCartItem, "expiry" | "count">;
