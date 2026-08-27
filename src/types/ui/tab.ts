import { ReactNode } from "react";

export interface TabItem {
  label: string;
  id: string;
  panel: ReactNode;
}
