"use client";

import { usePrices } from "@/services/modules";

export function PriceBox() {
  const { data, isFetching } = usePrices({});

  return <div>{isFetching ? "loading..." : JSON.stringify(data)}</div>;
}
