import Image from "next/image";
import GilmarTour from "@/../public/img/bgs/forrest.jpg";
import {
  Button,
  CircleButton,
  Container,
  Heading,
  IconContainer,
  Typography,
} from "@/components/ui";
import GeoMap from "@/../public/img/masks/world-map.png";
import { IconPlay, IconVideo } from "@/components/ui/icons";
import Compass from "@/../public/img/elements/compass.png";
import { cn } from "@/utils/styles/tailwind";

interface PropTypes {
  classes?: string;
}

export function VideoTour({ classes = "" }: PropTypes) {
  return (
    <div className={cn("relative", classes)}>
      <Container classes="relative overflow-hidden">
        <div className="relative">
          <Image
            src={GilmarTour}
            alt="Gilmar video tour"
            className="rounded-2xl"
          />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-2 max-w-[40%]">
            <IconContainer>
              <IconVideo />
            </IconContainer>
            <Heading level={2}>تور ویدیویی اقامتگاه گیلمار</Heading>
            <Typography classes="mb-6 leading-[30px]">
              در این تور ویدیویی، گوشه‌ای از آرامش، طبیعت بکر و فضای گرم
              اقامتگاه گیلمار را از نزدیک تماشا کنید و پیش از سفر، حال‌وهوای
              دلنشین آن را تجربه کنید.
            </Typography>
            <Button>اقامت در گیلمار</Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-40">
            <CircleButton>
              <IconPlay />
            </CircleButton>
          </div>
        </div>
        <Image
          src={GeoMap}
          alt="Geographical map"
          className="brightness-95 absolute right-0 -top-10"
        />
      </Container>
      <Image
        src={Compass}
        alt="Compass illustration"
        className="absolute right-1/2 -bottom-20 z-2 translate-x-32 rotate-20"
      />
    </div>
  );
}
