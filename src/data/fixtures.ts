import type { BatchOrderRow, PickupItem, PackingOrder } from "./types";

export const BATCH_ID = "BATCH-0042";

export const pickingBatchOrders: BatchOrderRow[] = [
  { number: 1, id: "#10045", customer: "Sarah Johnson", itemsCount: 1, skuCount: 1, badge: { label: "2/2 Picked", tone: "success" } },
  { number: 2, id: "#10046", customer: "Michael Smith", itemsCount: 3, skuCount: 2, badge: { label: "2/2 Picked", tone: "success" } },
  { number: 3, id: "#10047", customer: "Emily Davis", itemsCount: 5, skuCount: 3, badge: { label: "0/2 Picked", tone: "neutral" } },
  { number: 4, id: "#10048", customer: "David Wilson", itemsCount: 2, skuCount: 1, badge: { label: "2/2 Picked", tone: "success" } },
  { number: 5, id: "#10049", customer: "Maria Garcia", itemsCount: 4, skuCount: 2, badge: { label: "1/2 Picked", tone: "neutral" } },
  { number: 6, id: "#10050", customer: "Christopher Lee", itemsCount: 7, skuCount: 4, badge: { label: "2/2 Picked", tone: "success" } },
  { number: 7, id: "#10051", customer: "Linda Martinez", itemsCount: 6, skuCount: 3, badge: { label: "1/2 Picked", tone: "neutral" } },
  { number: 8, id: "#10052", customer: "James Rodriguez", itemsCount: 8, skuCount: 5, badge: { label: "1/2 Picked", tone: "success" } },
];

export const packingBatchOrdersBase: BatchOrderRow[] = pickingBatchOrders.map((o) => ({ ...o, badge: null }));

export const pickupItems: PickupItem[] = [
  { sku: "SWB-008", name: "Smart Watch Sport Band 44mm", variant: "44mm", color: "Red", barcode: "8901234567897", required: 6, state: "pending" },
  { sku: "LSC-015", name: "Luxury Smartwatch Classic 42mm", variant: "42mm", color: "Black", barcode: "8901234567899", required: 3, state: "pending" },
  { sku: "AME-020", name: "Activity Monitor Elite 40mm", variant: "40mm", color: "Silver", barcode: "8901234567900", required: 2, state: "pending" },
];

export const packingOrders: PackingOrder[] = [
  {
    id: "#10045",
    customer: "Sarah Johnson",
    phone: "+971 50 123 4567",
    email: "m@email.com",
    address: "Villa 12, Street 5A, Al Barsha 1 - Dubai",
    items: [
      { sku: "SWB-008", name: "Smart Watch Sport Band 44mm", variant: "44mm", color: "Red", barcode: "8901234567897", qty: 3, packed: false },
      { sku: "AME-020", name: "Activity Monitor Elite 40mm", variant: "40mm", color: "Silver", barcode: "8901234567900", qty: 1, packed: false },
    ],
  },
  {
    id: "#10046",
    customer: "Michael Smith",
    phone: "+971 55 987 6543",
    email: "michael.smith@email.com",
    address: "Apt 8, Marina Tower, Dubai Marina - Dubai",
    items: [
      { sku: "LSC-015", name: "Luxury Smartwatch Classic 42mm", variant: "42mm", color: "Black", barcode: "8901234567899", qty: 2, packed: false },
      { sku: "SWB-008", name: "Smart Watch Sport Band 44mm", variant: "44mm", color: "Red", barcode: "8901234567897", qty: 1, packed: false },
    ],
  },
];
