import clsx from "clsx";

interface SpinnerProps {
  classes?: string;
  size?: number;
}

export function Spinner({ classes, size = 12 }: SpinnerProps) {
  return (
    <svg
      className={clsx("animate-spin", classes)}
      viewBox="0 0 24 24"
      height={size}
      width={size}
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}
