"use client";

import { cn } from "@/utils/styles/tailwind";
import { DisclosureItem } from "./disclosure-item";
import { useState } from "react";
import { type DisclosureItem as DisclosureItemType } from "@/types/ui/disclosure";
import { faq } from "@/contents/faq";

interface PropTypes {
  classes?: string;
  items: DisclosureItemType[];
}

export function Disclosure({ classes = "", items }: PropTypes) {
  const [activeItem, setActiveItem] = useState<DisclosureItemType>(faq[0]);

  return (
    <div className={cn("w-full space-y-4", classes)}>
      {items.map((item) => (
        <DisclosureItem
          key={item.id}
          item={item}
          onClick={(item) => setActiveItem(item)}
          isActive={activeItem.id === item.id}
        />
      ))}
    </div>
  );
}
