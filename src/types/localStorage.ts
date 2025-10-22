export type LocalStorageCartItem = {
  id: string;
  count: number;
  expiry: number;
};

export type LocalStoageNewItem = Omit<LocalStorageCartItem, "expiry" | "count">;
