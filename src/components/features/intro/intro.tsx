import IntroImg1 from "@/../public/img/intro/img-1.jpg";
import IntroImg2 from "@/../public/img/intro/img-2.jpg";
import IntroImg3 from "@/../public/img/intro/img-3.jpg";
import {
  Button,
  Container,
  Heading,
  IconContainer,
  Typography,
} from "@/components/ui";
import { IconEarth } from "@/components/ui/icons";
import { TypographyTag } from "@/types/ui/typography";
import Image from "next/image";

interface PropTypes {
  classes?: string;
}

export function Intro({ classes }: PropTypes) {
  return (
    <Container classes={classes}>
      <div className="grid grid-cols-2 gap-20 items-start">
        <div className="self-center mt-32">
          <IconContainer>
            <IconEarth />
          </IconContainer>
          <Heading level={2}>گیلمار؛ آرامش ناب در آغوش طبیعت گیلان</Heading>
          <Typography tag={TypographyTag.p} classes="mb-10">
            گیلمار با فضایی آرام، سرسبز و چشم‌اندازی زیبا از دریاچه‌ها، میزبان
            لحظاتی دلنشین و به‌یادماندنی برای شماست. طبیعت بکر تالابی، حضور
            پرندگان بومی و مهاجر، نزدیکی به جاذبه‌های گردشگری گیلان، مسیر دسترسی
            مناسب و انواع تفریحات و گشت‌های گیلان‌گردی، این اقامتگاه را به مقصدی
            متفاوت برای سفر تبدیل کرده است.
          </Typography>
          <Button>اقامت در گیلمار</Button>
        </div>
        <div className="relative">
          <Image
            src={IntroImg2}
            alt="Intro image 2"
            className="rounded-2xl absolute right-1/2 translate-x-1/2 top-0 z-2 ring-4 ring-[#F5F8FA]"
          />
          <Image
            src={IntroImg1}
            alt="Intro image 1"
            className="rounded-2xl absolute right-0 top-50 z-1 ring-4 ring-[#F5F8FA]"
          />
          <Image
            src={IntroImg3}
            alt="Intro image 3"
            className="rounded-2xl absolute left-0 top-50 z-3 ring-4 ring-[#F5F8FA]"
          />
        </div>
      </div>
    </Container>
  );
}
