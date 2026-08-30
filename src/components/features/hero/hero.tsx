import { Button, Container, Heading, Typography } from "@/components/ui";
import { TypographySize, TypographyTag } from "@/types/ui/typography";
import GilmarImage from "@/../public/img/hero/gilmar.png";
import Image from "next/image";
import { SuccessfulReservations } from "./successful-reservations";

interface PropTypes {
  classes?: string;
}

export async function Hero({ classes }: PropTypes) {
  return (
    <Container classes={classes}>
      <div className="flex flex-col items-center justify-center">
        <Heading level={1}>
          اقامتگاه بومگردی گیلمار جایی که طبیعت خانه است
        </Heading>
        <Typography
          tag={TypographyTag.p}
          size={TypographySize.xl}
          classes="max-w-6xl text-center leading-[38px] mb-10"
        >
          اقامتگاه بومگردی گیلمار بزرگ‌ترین مجموعه اکولوژ شمال کشور دارای
          امکانات رفاهی و تفریحی در فضایی منحصر به فرد با مجوز رسمی از اداره
          میراث فرهنگی، صنایع دستی و گردشگری گیلان فعالیت دارد.
        </Typography>
        <Button className="mb-10">مهمان گلیمار شو</Button>

        <div className="relative">
          <Image
            src={GilmarImage}
            alt="Gilmar residence image"
            className="hero-clip"
          />
          <Image
            src={GilmarImage}
            alt=""
            className="absolute top-0 right-0 blur-xl w-full -z-1"
          />
          <Typography
            size={TypographySize.sm}
            classes="absolute right-0 bottom-5 w-[20%] leading-[30px]"
          >
            فرار از شلوغی شهر و تجربه‌ی اقامتی اصیل در دل طبیعت شمال
          </Typography>
          <SuccessfulReservations classes="absolute left-2 bottom-2" />
        </div>
      </div>
    </Container>
  );
}
