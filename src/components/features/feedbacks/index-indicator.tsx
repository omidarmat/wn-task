interface PropTypes {
  numItems: number;
  activeIndex: number;
}

export function IndexIndicator({ numItems, activeIndex }: PropTypes) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: numItems }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${activeIndex === i ? "bg-green-500" : "bg-gray-400"}`}
        />
      ))}
    </div>
  );
}
