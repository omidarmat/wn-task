import { Heading, IconContainer, Typography } from "@/components/ui";
import { IconComment } from "@/components/ui/icons";
import Image from "next/image";
import WorldMapDotted from "@/../public/img/bgs/world-map-dotted.png";

export function Feedbacks() {
  return (
    <div className="flex flex-col items-center gap-4">
      <IconContainer classes="mb-6">
        <IconComment />
      </IconContainer>
      <Heading level={2} classes="leading-[35px]">
        گیلمار از نگاه مهمانان
      </Heading>
      <Typography classes="mb-6">
        تجربه واقعی مهمانان، بهترین روایت از آرامش، طبیعت و حال خوب گیلمار است.
      </Typography>
      <div>
        <Image src={WorldMapDotted} alt="Dotted world map" />
      </div>
    </div>
  );
}
