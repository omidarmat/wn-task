import { HeadingColor, HeadingLevel } from "@/types/ui/heading";
import { cn } from "@/utils/styles/tailwind";
import type { ReactNode } from "react";

const levelClasses: Record<HeadingLevel, string> = {
  1: "text-5xl font-extrabold leading-32",
  2: "text-4xl font-extrabold leading-24",
  3: "text-3xl font-extrabold leading-20",
  4: "text-2xl font-semibold leading-16",
  5: "text-xl font-semibold",
  6: "text-lg font-semibold",
};

const colorClasses: Record<HeadingColor, string> = {
  neutral: "text-gray-700",
  primary: "text-primary-700",
  secondary: "text-secondary-600",
};

interface PropTypes {
  level: HeadingLevel;
  color?: HeadingColor;
  classes?: string;
  children: ReactNode;
}

export function Heading({
  level,
  color = HeadingColor.neutral,
  classes,
  children,
}: PropTypes) {
  const taglist: Record<HeadingLevel, string> = {
    1: "h1",
    2: "h2",
    3: "h3",
    4: "h4",
    5: "h5",
    6: "h6",
  };

  if (
    !Object.keys(taglist)
      .map((k) => +k)
      .includes(level)
  ) {
    throw new Error("Invalid heading level");
  }

  const Tag = taglist[level];

  return (
    // @ts-expect-error its ok!
    <Tag className={cn(levelClasses[level], colorClasses[color], classes)}>
      {children}
    </Tag>
  );
}
