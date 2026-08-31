import {
  Container,
  Disclosure,
  Heading,
  IconContainer,
  Typography,
} from "@/components/ui";
import { IconQuestion } from "@/components/ui/icons";
import Image from "next/image";
import QueryForAnswers from "@/../public/img/bgs/query.png";
import { faq } from "@/contents/faq";

interface PropTypes {
  classes?: string;
}

export function Faq({ classes = "" }: PropTypes) {
  return (
    <div className={classes}>
      <Container>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <IconContainer>
              <IconQuestion />
            </IconContainer>

            <Heading level={2}>سوالات متداول مهمانان گیلمار</Heading>
            <Typography classes="leading-[40px]">
              پاسخ رایج‌ترین سوالات درباره رزرو، اقامت و امکانات گیلمار را اینجا
              پیدا کنید تا با خیال راحت سفر خود را برنامه‌ریزی کنید.
            </Typography>

            <Image
              src={QueryForAnswers}
              alt="Faq section image"
              width={350}
              height={350}
            />
          </div>

          <Disclosure items={faq} />
        </div>
      </Container>
    </div>
  );
}
