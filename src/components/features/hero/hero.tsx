import { Prefetch } from "@/components/wrappers";
import { prefetchPrices } from "@/services/modules";
import { PriceBox } from "../price-box/price-box";

export async function Hero() {
  return (
    <div>
      <Prefetch prefetchFn={prefetchPrices}>
        <PriceBox />
      </Prefetch>
    </div>
  );
}
