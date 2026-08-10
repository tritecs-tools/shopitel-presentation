import type { ReactNode } from "react";
import type { TransitionKind } from "../components/Stage";
import { ActiveBatchScreen } from "../components/ActiveBatchScreen";
import { PickupListScreen, type PickupItemRuntime } from "../components/PickupListScreen";
import { NotFoundQuantitySheet } from "../components/sheets/NotFoundQuantitySheet";
import { SomeItemsUnavailableSheet } from "../components/sheets/SomeItemsUnavailableSheet";
import { OrderScanScreen } from "../components/OrderScanScreen";
import { CustomerProfileScreen } from "../components/CustomerProfileScreen";
import { ShippedFooter } from "../components/ShippedFooter";
import { BatchCompletedScreen } from "../components/BatchCompletedScreen";
import { pickingBatchOrders, packingBatchOrdersBase, pickupItems, packingOrders } from "../data/fixtures";
import type { ToastTone } from "../components/Toast";
import type { PackingOrder } from "../data/types";

function pickupSnapshot(overrides: Record<string, Partial<PickupItemRuntime>>): PickupItemRuntime[] {
  return pickupItems.map((item) => ({
    ...item,
    picked: 0,
    ...overrides[item.sku],
  }));
}

function packOrder(order: PackingOrder, packedSkus: string[]): PackingOrder {
  return { ...order, items: order.items.map((i) => ({ ...i, packed: packedSkus.includes(i.sku) })) };
}

export interface Step {
  transition: TransitionKind;
  render: (nav: { next: () => void; restart: () => void }) => ReactNode;
}

/**
 * The full, linear script of the interactive demo: Act 1 (pickup, steps 0-9),
 * Act 2 (packing, steps 10-20), Act 3 (payoff, step 21). Consumers slice this
 * array to reuse specific beats as autoplay loops or interactive snippets.
 */
export function buildDemoSteps(): Step[] {
  const order1 = packingOrders[0];
  const order2 = packingOrders[1];

  const steps: Step[] = [
    // ACT 1 — Pickup
    {
      transition: "crossfade",
      render: () => (
        <ActiveBatchScreen
          batchSize={10}
          skus={8}
          totalItems={28}
          pickingPct={35}
          packingPct={0}
          stageLabel="Picking"
          orders={pickingBatchOrders}
          ctaLabel="Resume Batch"
          onCta={() => {}}
        />
      ),
    },
    {
      transition: "push",
      render: () => <PickupListScreen items={pickupSnapshot({})} />,
    },
    {
      transition: "crossfade",
      render: () => (
        <PickupListScreen
          items={pickupSnapshot({ "SWB-008": { state: "picked", picked: 6 } })}
          toast={{ text: "Item Completed", tone: "success" as ToastTone }}
          scanFlashKey={1}
        />
      ),
    },
    {
      transition: "crossfade",
      render: () => <PickupListScreen items={pickupSnapshot({ "SWB-008": { state: "picked", picked: 6 } })} />,
    },
    {
      transition: "crossfade",
      render: ({ next }) => (
        <>
          <PickupListScreen items={pickupSnapshot({ "SWB-008": { state: "picked", picked: 6 } })} />
          <NotFoundQuantitySheet item={pickupItems[1]} onConfirm={next} onClose={next} />
        </>
      ),
    },
    {
      transition: "crossfade",
      render: ({ next }) => (
        <>
          <PickupListScreen items={pickupSnapshot({ "SWB-008": { state: "picked", picked: 6 } })} />
          <SomeItemsUnavailableSheet
            required={3}
            available={0}
            missing={3}
            orders={[
              {
                id: "#10046",
                customer: "Michael Smith",
                date: "5 May 2026",
                itemsCount: 3,
                itemLabel: "3x Luxury Smartwatch Classic 42mm",
              },
            ]}
            onConfirm={next}
            onClose={next}
          />
        </>
      ),
    },
    {
      transition: "crossfade",
      render: () => (
        <PickupListScreen
          items={pickupSnapshot({ "SWB-008": { state: "picked", picked: 6 }, "LSC-015": { state: "not-found" } })}
          toast={{ text: "Orders set as pending", tone: "warning" as ToastTone }}
        />
      ),
    },
    {
      transition: "crossfade",
      render: () => (
        <PickupListScreen items={pickupSnapshot({ "SWB-008": { state: "picked", picked: 6 }, "LSC-015": { state: "not-found" } })} />
      ),
    },
    {
      transition: "crossfade",
      render: () => (
        <PickupListScreen
          items={pickupSnapshot({
            "SWB-008": { state: "picked", picked: 6 },
            "LSC-015": { state: "not-found" },
            "AME-020": { state: "picked", picked: 2 },
          })}
          toast={{ text: "Item Completed", tone: "success" as ToastTone }}
          scanFlashKey={2}
        />
      ),
    },
    {
      transition: "crossfade",
      render: ({ next }) => (
        <PickupListScreen
          items={pickupSnapshot({
            "SWB-008": { state: "picked", picked: 6 },
            "LSC-015": { state: "not-found" },
            "AME-020": { state: "picked", picked: 2 },
          })}
          onComplete={next}
        />
      ),
    },

    // ACT 2 — Packing
    {
      transition: "push",
      render: () => (
        <ActiveBatchScreen
          batchSize={8}
          skus={27}
          totalItems={49}
          pickingPct={100}
          packingPct={12}
          stageLabel="Packing"
          orders={packingBatchOrdersBase}
          listHeading="Batch Orders"
          subheading="Select an order to pack"
        />
      ),
    },
    {
      transition: "push",
      render: () => <OrderScanScreen order={packOrder(order1, [])} />,
    },
    {
      transition: "crossfade",
      render: () => <OrderScanScreen order={packOrder(order1, [order1.items[0].sku])} scanFlashKey={1} />,
    },
    {
      transition: "crossfade",
      render: () => (
        <OrderScanScreen order={packOrder(order1, [order1.items[0].sku, order1.items[1].sku])} scanFlashKey={2} />
      ),
    },
    {
      transition: "push",
      render: ({ next }) => (
        <CustomerProfileScreen order={packOrder(order1, order1.items.map((i) => i.sku))} onMarkShipped={next} />
      ),
    },
    {
      transition: "crossfade",
      render: () => (
        <OrderScanScreen order={packOrder(order1, order1.items.map((i) => i.sku))} footer={<ShippedFooter />} />
      ),
    },
    {
      transition: "push",
      render: () => <OrderScanScreen order={packOrder(order2, [])} />,
    },
    {
      transition: "crossfade",
      render: () => <OrderScanScreen order={packOrder(order2, order2.items.map((i) => i.sku))} scanFlashKey={3} />,
    },
    {
      transition: "push",
      render: ({ next }) => (
        <CustomerProfileScreen order={packOrder(order2, order2.items.map((i) => i.sku))} onMarkShipped={next} />
      ),
    },
    {
      transition: "crossfade",
      render: () => (
        <OrderScanScreen order={packOrder(order2, order2.items.map((i) => i.sku))} footer={<ShippedFooter />} />
      ),
    },
    {
      transition: "push",
      render: () => (
        <ActiveBatchScreen
          batchSize={8}
          skus={27}
          totalItems={49}
          pickingPct={100}
          packingPct={100}
          stageLabel="Packing"
          orders={packingBatchOrdersBase.map((o) => ({ ...o, badge: { label: "Shipped", tone: "success" as const } }))}
          ctaLabel="Complete Batch"
          onCta={() => {}}
          banner={
            <div className="mb-[8px] rounded-[12px] bg-success-100 p-[12px] text-[13px] text-success-700">
              <p className="font-semibold">All Orders are Shipped</p>
              <p>Completing this batch will close it. The batch will remain visible until a new batch is started or assigned.</p>
            </div>
          }
        />
      ),
    },

    // ACT 3 — Payoff
    {
      transition: "push",
      render: ({ restart }) => <BatchCompletedScreen onRestart={restart} />,
    },
  ];

  return steps;
}
