import { cn } from "@/utils/styles/tailwind";
import { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
  classes?: string;
  variant: "colorful" | "simple";
}

export function CircleButton({
  children,
  classes = "",
  variant = "simple",
}: PropTypes) {
  if (variant === "simple")
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

  if (variant === "colorful")
    return (
      <button className="relative">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="15"
            cy="15"
            r="14.4"
            fill="url(#paint0_linear_14_683)"
            stroke="url(#paint1_linear_14_683)"
            strokeWidth="1.2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_14_683"
              x1="32.6786"
              y1="-9.22594"
              x2="-12.4451"
              y2="29.2903"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#02ADF7" />
              <stop offset="1" stopColor="#26E05A" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_14_683"
              x1="15"
              y1="0"
              x2="15"
              y2="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.735221" stopColor="#0F6B29" stopOpacity="0" />
              <stop offset="1" stopColor="#0F6B29" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2">
          {children}
        </div>
      </button>
    );
}
