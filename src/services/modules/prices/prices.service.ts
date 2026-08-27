import { api } from "@/services/api";
import { QueryHookBaseProps } from "@/types/queries";
import { QueryClient, useQuery } from "@tanstack/react-query";

async function handler() {
  const res = await api.get(`wallets/v1/pricesssss`);

  return res.data;
}

export const usePrices = ({ refetchInterval }: QueryHookBaseProps) => {
  return useQuery({
    queryFn: handler,
    queryKey: ["prices"],
    refetchInterval,
  });
};

export const prefetchPrices = async () => {
  const queryClient = new QueryClient();

  await queryClient.query({
    queryFn: handler,
    queryKey: ["prices"],
  });

  return queryClient;
};
