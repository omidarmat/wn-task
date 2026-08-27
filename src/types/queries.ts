export interface QueryHandlerProps<T> {
  params: T;
}

export interface QueryHookBaseProps {
  enabled?: boolean;
  refetchInterval?: number;
}

export type QueryHookProps<TExtra extends object = {}> = QueryHookBaseProps &
  TExtra;
