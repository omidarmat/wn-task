interface PropTypes {
  classes?: string;
}
export function IconPlus({ classes }: PropTypes) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M10.75 5.75004L5.75 5.75004M5.75 5.75004L0.75 5.75004M5.75 5.75004L5.75 0.75M5.75 5.75004L5.75 10.75"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
