import { Heading, Typography } from "@/components/ui";
import { type Room } from "@/types/dtos/rooms";
import { TypographyTag } from "@/types/ui/typography";
import Image from "next/image";

interface PropTypes {
  room: Room;
}

export function Room({ room }: PropTypes) {
  return (
    <div className="rounded-2xl overflow-hidden relative">
      <Image
        src={room.img}
        alt={room.label}
        height={300}
        width={300}
        className="brightness-75"
      />
      <div className="absolute bottom-0 right-0 p-4">
        <Heading classes="font-semibold text-lg text-white" level={3}>
          {room.label}
        </Heading>
        <Typography classes="text-white" tag={TypographyTag.p}>
          اقامت از شبی {room.price} تومان
        </Typography>
      </div>
    </div>
  );
}
