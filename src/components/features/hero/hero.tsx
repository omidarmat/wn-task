import { Button, Container, Heading, Typography } from "@/components/ui";
import { TypographySize, TypographyTag } from "@/types/ui/typography";

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
        <div className="w-full h-125 bg-neutral-200 rounded-2xl" />
      </div>
    </Container>
  );
}
