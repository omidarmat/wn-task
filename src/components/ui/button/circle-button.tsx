import { cn } from "@/utils/styles/tailwind";
import React, { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
  classes?: string;
}

export function CircleButton({ children, classes = "" }: PropTypes) {
  return (
    <button
      className={cn(
        "h-16 w-16 rounded-full bg-white p-2 flex items-center justify-center relative before:content-[''] before:bg-white/25 before:h-22 before:w-22 before:rounded-full before:absolute hover:before:h-24 hover:before:w-24 cursor-pointer",
        classes,
      )}
    >
      {children}
    </button>
  );
}
