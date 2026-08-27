import {
  TypographyColor,
  TypographySize,
  TypographyTag,
  TypographyWeight,
} from "@/types/ui/typography";
import { cn } from "@/utils/styles/tailwind";
import type { ReactNode } from "react";

const sizeClasses = {
  "2xs": "text-[10px]",
  xs: "text-xs",
  sm: "text-sm",
  normal: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
};

const weightClasses = {
  lighter: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  bold: "font-semibold",
  bolder: "font-bold",
  black: "font-black",
};

const colorClasses = {
  neutral: "",
  primary: "text-primary-600",
  secondary: "text-secondary-600",
  muted: "text-neutral-400",
  inherit: "text-inherit",
};

interface PropTypes {
  tag?: TypographyTag;
  size?: TypographySize;
  weight?: TypographyWeight;
  color?: TypographyColor;
  classes?: string;
  dir?: "rtl" | "ltr";
  children: ReactNode;
}

export function Typography({
  tag = TypographyTag.p,
  size = TypographySize.normal,
  weight = TypographyWeight.normal,
  color = TypographyColor.neutral,
  dir = "rtl",
  classes = "",
  children,
}: PropTypes) {
  if (!["p", "span"].includes(tag)) {
    throw new Error("Unexpected tag name");
  }

  const Component = tag;

  return (
    <Component
      dir={dir}
      className={cn(
        sizeClasses[size],
        weightClasses[weight],
        colorClasses[color],
        classes,
      )}
    >
      {children}
    </Component>
  );
}
