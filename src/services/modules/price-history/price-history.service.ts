import { QueryClient, useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { QueryHandlerProps } from "@/types/queries";

interface Params {
  interval: string;
  currencyCode: string;
}

async function handler({ params }: QueryHandlerProps<Params>) {
  const res = await api.get(`wallets/v1/prices/history`, {
    params,
  });

  return res.data;
}

export const usePriceHistory = ({ interval, currencyCode }: Params) => {
  return useQuery({
    queryFn: () => handler({ params: { interval, currencyCode } }),
    queryKey: ["price-history", interval, currencyCode],
  });
};

export const prefetchPriceHistory = ({ interval, currencyCode }: Params) => {
  const queryClient = new QueryClient();

  return queryClient.query({
    queryFn: () => handler({ params: { interval, currencyCode } }),
    queryKey: ["price-history", interval, currencyCode],
  });
};
