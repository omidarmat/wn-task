"use client";

import Carousel1 from "@/../public/img/carousel/img-1.jpg";
import Carousel2 from "@/../public/img/carousel/img-2.jpg";
import Carousel3 from "@/../public/img/carousel/img-3.jpg";
import { Container, Heading, IconContainer, Typography } from "@/components/ui";
import { IconArrowEllipse, IconStar } from "@/components/ui/icons";
import Image from "next/image";
// Import Swiper styles
import { cn } from "@/utils/styles/tailwind";
import "swiper/css";
import "swiper/css/navigation";

interface PropTypes {
  classes?: string;
}

export function Carousel({ classes = "" }: PropTypes) {
  return (
    <div className={cn("relative", classes)}>
      <Container>
        <div className="grid grid-cols-2 gap-2 items-center">
          <div>
            <IconContainer classes="mb-6">
              <IconStar />
            </IconContainer>
            <Heading level={2} classes="leading-[50px] mb-4">
              خدمات رفاهی گیلمار برای اقامتی دلنشین
            </Heading>
            <Typography classes="leading-[30px]">
              در گیلمار، آرامش را در کنار خدمات رفاهی کامل تجربه می‌کنید؛ فضایی
              دنج و صمیمی که برای ساختن لحظاتی آرام، خوش و به‌یادماندنی آماده
              شده است.
            </Typography>
          </div>
          <div className="absolute -left-20 w-[50vw]">
            <button className="button-linear-gradient border-2 border-white rounded-full h-10 w-10 flex items-center justify-center absolute -right-5 top-1/2 -translate-y-1/2 z-2">
              <IconArrowEllipse classes="size-5 rotate-180" />
            </button>
            <div className="overflow-x-hidden">
              <div className="flex items-center gap-4 translate-x-[0px] transition-all duration-150">
                <Image
                  src={Carousel1}
                  alt="Carousel 1"
                  className="rounded-2xl shrink-0"
                  height={350}
                />
                <Image
                  src={Carousel2}
                  alt="Carousel 2"
                  className="rounded-2xl shrink-0"
                  height={400}
                />
                <Image
                  src={Carousel3}
                  alt="Carousel 3"
                  className="rounded-2xl shrink-0"
                  height={350}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
