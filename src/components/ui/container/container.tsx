import { cn } from "@/utils/styles/tailwind";
import { ReactNode } from "react";

interface PropTypes {
  children?: ReactNode;
  classes?: string;
}

export function Container({ children, classes = "" }: PropTypes) {
  return (
    <div className={cn("mx-auto w-11/12 max-w-6xl", classes)}>{children}</div>
  );
}
