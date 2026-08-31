import { cn } from "@/utils/styles/tailwind";
import { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
  outerFoldClasses?: string;
  innerFoldClasses?: string;
  size?: number;
}

export function DoubleFoldBox({
  children,
  outerFoldClasses = "",
  innerFoldClasses = "",
  size = 32,
}: PropTypes) {
  const sizeStyles = size
    ? {
        height: size,
        width: size,
      }
    : undefined;

  return (
    <div
      className={cn(
        "p-2 bg-neutral-50 rounded-3xl shadow-xs",
        outerFoldClasses,
      )}
    >
      <div
        className={cn(
          "p-3 bg-neutral-50 rounded-2xl border border-gray-200/70 drop-shadow-xl flex flex-col items-center justify-center",
          innerFoldClasses,
        )}
        style={sizeStyles}
      >
        <div className="flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
