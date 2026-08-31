import {
  Button,
  Container,
  DoubleFoldBox,
  ElapseIndicator,
  Heading,
  IconContainer,
  Typography,
} from "@/components/ui";
import { IconBox } from "@/components/ui/icons";
import { tourPackages } from "@/contents/tour-packages";
import { TypographySize, TypographyWeight } from "@/types/ui/typography";
import Image from "next/image";
import OrangeLeafs from "@/../public/img/bgs/orange-leafs.jpg";
import { Checker } from "@/components/patterns";

interface PropTypes {
  classes?: string;
}

export function TourPackages({ classes = "" }: PropTypes) {
  const tourPackage = tourPackages[0];

  return (
    <div className={classes}>
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <IconContainer classes="mb-6">
              <IconBox />
            </IconContainer>

            <Heading level={2}>پکیج‌های ویژه اقامت در گیلمار</Heading>

            <Typography classes="mb-20">
              پکیج‌های ویژه ما ترکیبی از اقامت آرام، غذاهای محلی و تفریحات
              هیجان‌انگیز در دل طبیعت است.
            </Typography>

            <Heading level={3} classes="text-base mb-4">
              {tourPackage?.label}
            </Heading>

            <Typography classes="mb-10">
              شامل: {tourPackage?.items?.map((item) => item.label).join(" + ")}
            </Typography>

            <div className="flex items-center justify-between mb-10">
              {tourPackage.items.map((item) => (
                <DoubleFoldBox key={item.id}>
                  <Image
                    width={50}
                    height={50}
                    src={item.image}
                    alt={item.label}
                  />
                  <Typography
                    size={TypographySize.sm}
                    weight={TypographyWeight.bold}
                  >
                    {item.label}
                  </Typography>
                </DoubleFoldBox>
              ))}
            </div>

            <div className="h-px border-b border-dashed border-neutral-300 mb-10" />

            <div className="flex items-center justify-between">
              <Typography
                weight={TypographyWeight.bold}
                classes="text-green-700"
              >
                قیمت: {tourPackage.price} تومان
              </Typography>
              <Button>همین حالا رزرو کن</Button>
            </div>
          </div>

          <div className="relative">
            <Image
              src={OrangeLeafs}
              alt="Orange leafs"
              width={500}
              height={800}
              className="rounded-2xl"
            />
            <Checker variant={1} classes="absolute left-0 top-0" />
            <Checker variant={2} classes="absolute right-0 bottom-0" />
            <ElapseIndicator
              numItems={4}
              activeIndex={0}
              elapsedPercent={70}
              classes="absolute left-4 bottom-4"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
