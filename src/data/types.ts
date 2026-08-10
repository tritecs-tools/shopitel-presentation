export interface BatchOrderRow {
  number: number;
  id: string;
  customer: string;
  itemsCount: number;
  skuCount: number;
  badge: { label: string; tone: "success" | "neutral" } | null;
}

export type PickupItemState = "pending" | "picked" | "not-found";

export interface PickupItem {
  sku: string;
  name: string;
  variant: string;
  color: string;
  barcode: string;
  required: number;
  state: PickupItemState;
}

export interface PackingLineItem {
  sku: string;
  name: string;
  variant: string;
  color: string;
  barcode: string;
  qty: number;
  packed: boolean;
}

export interface PackingOrder {
  id: string;
  customer: string;
  phone: string;
  email: string;
  address: string;
  items: PackingLineItem[];
}
