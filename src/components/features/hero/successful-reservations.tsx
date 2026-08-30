import { Typography } from "@/components/ui";
import { successfulReservations } from "@/contents/successful-reservations";
import { TypographySize } from "@/types/ui/typography";
import { cn } from "@/utils/styles/tailwind";
import Image from "next/image";

interface PropTypes {
  classes?: string;
}

export function SuccessfulReservations({ classes = "" }: PropTypes) {
  return (
    <div
      className={cn(
        "bg-neutral-50 px-2 py-3 rounded-full flex items-center gap-4",
        classes,
      )}
    >
      <div className="flex itmes-center">
        {successfulReservations.slice(0, 3).map((item) => (
          <Image
            src={item.img}
            alt={item.id}
            key={item.id}
            width={23}
            height={23}
            className="outline-2 outline-neutral-50 rounded-full -ml-1"
          />
        ))}
      </div>
      <Typography size={TypographySize.sm}>120+ رزر موفق</Typography>
    </div>
  );
}
