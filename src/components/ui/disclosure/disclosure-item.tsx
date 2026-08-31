import { cn } from "@/utils/styles/tailwind";
import { CircleButton } from "../button/circle-button";
import { Heading } from "../heading/heading";
import { IconMinus, IconPlus } from "../icons";
import { Typography } from "../typography/typography";
import { type DisclosureItem } from "@/types/ui/disclosure";

interface PropTypes {
  item: DisclosureItem;
  onClick: (item: DisclosureItem) => void;
  isActive: boolean;
}

export function DisclosureItem({ item, onClick, isActive }: PropTypes) {
  return (
    <div
      onClick={() => onClick(item)}
      className={`p-2 bg-neutral-50 shadow-xs cursor-pointer ${isActive ? "rounded-3xl" : "rounded-full"}`}
    >
      <div
        className={cn(
          `p-3 bg-neutral-50 ${isActive ? "rounded-2xl" : "rounded-full"} border border-gray-200/70 drop-shadow-xl flex flex-col items-center justify-center`,
        )}
      >
        <div className="w-full flex items-center justify-between">
          <Heading classes="text-base" level={4}>
            {item.question}
          </Heading>
          <CircleButton variant="colorful">
            {isActive ? (
              <IconMinus classes="-translate-y-px" />
            ) : (
              <IconPlus classes="-translate-y-3" />
            )}
          </CircleButton>
        </div>

        {isActive && (
          <div className="mt-6">
            <Typography classes="leading-[30px]">{item.answer}</Typography>
          </div>
        )}
      </div>
    </div>
  );
}
