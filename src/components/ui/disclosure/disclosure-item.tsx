import { cn } from "@/utils/styles/tailwind";
import { CircleButton } from "../button/circle-button";
import { Heading } from "../heading/heading";
import { IconMinus } from "../icons";
import { Typography } from "../typography/typography";
import { type DisclosureItem } from "@/types/ui/disclosure";

interface PropTypes {
  item: DisclosureItem;
  onClick: (item: DisclosureItem) => void;
}

export function DisclosureItem({ item, onClick }: PropTypes) {
  return (
    <div
      onClick={() => onClick(item)}
      className="p-2 bg-neutral-50 rounded-3xl shadow-xs cursor-pointer"
    >
      <div
        className={cn(
          "p-3 bg-neutral-50 rounded-2xl border border-gray-200/70 drop-shadow-xl flex flex-col items-center justify-center",
        )}
      >
        <div className="w-full flex items-center justify-between">
          <Heading classes="text-base" level={4}>
            {item.question}
          </Heading>
          <CircleButton variant="colorful">
            <IconMinus />
          </CircleButton>
        </div>

        <div className="mt-6">
          <Typography classes="leading-[30px]">{item.answer}</Typography>
        </div>
      </div>
    </div>
  );
}
