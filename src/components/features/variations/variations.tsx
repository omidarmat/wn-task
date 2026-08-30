import { Heading, IconContainer, Typography } from "@/components/ui";
import { IconMedal } from "@/components/ui/icons";
import { roomVariations } from "@/contents/variations";
import { TypographyTag } from "@/types/ui/typography";
import { Room } from "./room";
import { cn } from "@/utils/styles/tailwind";

interface PropTypes {
  classes?: string;
}

export function Variations({ classes = "" }: PropTypes) {
  return (
    <div className={cn("flex flex-col items-center", classes)}>
      <IconContainer classes="mb-6">
        <IconMedal />
      </IconContainer>

      <Heading level={2}>انواع اتاق‌های اقامتگاه گیلمار</Heading>
      <Typography tag={TypographyTag.p} classes="mb-16">
        اتاق‌های گیلمار با فضایی دنج و امکانات مناسب، برای اقامتی آرام در دل
        طبیعت آماده شده‌اند.
      </Typography>
      <div className="grid grid-cols-4 gap-6">
        {Object.values(roomVariations).map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}
