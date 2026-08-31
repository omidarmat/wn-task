"use client";

import { cn } from "@/utils/styles/tailwind";

interface PropTypes {
  numItems: number;
  activeIndex: number;
  elapsedPercent: number;
  classes?: string;
}

export function ElapseIndicator({
  numItems,
  activeIndex,
  elapsedPercent,
  classes = "",
}: PropTypes) {
  return (
    <div dir="ltr" className={cn("flex items-center gap-2", classes)}>
      {Array.from({ length: numItems }, (_, i) => {
        return (
          <div key={i} className="h-1 w-10 rounded-full bg-neutral-50/50">
            {activeIndex === i && (
              <div
                style={{ width: `${elapsedPercent}%` }}
                className="bg-neutral-50 h-full rounded-full"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
