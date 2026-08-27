import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { ReactNode } from "react";

interface PropTypes {
  prefetchFn: () => Promise<QueryClient>;
  children: ReactNode;
}

export async function Prefetch({ prefetchFn, children }: PropTypes) {
  const queryClient = await prefetchFn();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
