import { CircleButton, Container, Heading, Typography } from "@/components/ui";
import { Logo } from "../logo/logo";
import { footerContacts, footerNavbar } from "@/contents/footer";
import { TypographySize, TypographyTag } from "@/types/ui/typography";
import FooterWorldMap from "@/../public/img/masks/world-map-footer.png";
import Image from "next/image";
import {
  IconLinkedin,
  IconTelegram,
  IconX,
  IconYoutube,
} from "@/components/ui/icons";

export function Footer() {
  return (
    <div className="mb-5">
      <Container>
        <div className={"p-2 bg-neutral-50 rounded-3xl shadow-xs mb-4"}>
          <div
            className={
              "p-3 bg-neutral-50 rounded-2xl border border-gray-200/70 drop-shadow-xl relative overflow-hidden"
            }
          >
            <div className="absolute top-0 left-0 right-0 bottom-0 -z-1">
              <div className="h-full w-full flex items-center">
                <Image
                  src={FooterWorldMap}
                  alt="Footer world map mask"
                  height={200}
                  width={200}
                  className="mr-auto -translate-x-full brightness-99"
                />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6350.512631966228!2d49.4490!3d37.265348609764565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401fd759af942fa3%3A0xe5636f8f5004f91a!2z2KfZgtin2YXYqtqv2KfZhyDYqNmI2YXar9ix2K_bjCDar9uM2YTZhdin2LE!5e0!3m2!1sen!2s!4v1788206463954!5m2!1sen!2s"
                  width="35%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>

            <div className="grid grid-cols-[2fr_1fr_2fr] gap-20 w-[70%] py-4">
              <div>
                <Logo classes="mb-2" />
                <Typography size={TypographySize.sm} classes="leading-[30px]">
                  اقامتگاه بوم‌گردی گیلمار، بزرگ‌ترین مجموعه اکولوژ شمال کشور با
                  امکانات رفاهی و تفریحی متنوع، در فضایی منحصربه‌فرد و با مجوز
                  رسمی میراث فرهنگی گیلان فعالیت می‌کند.
                </Typography>
              </div>

              <div>
                <Heading level={4} classes="text-base mb-4">
                  کاوش در گیلمار
                </Heading>
                <ul className="list-disc list-inside">
                  {Object.values(footerNavbar).map((item) => (
                    <li key={item.id}>
                      <Typography
                        size={TypographySize.sm}
                        tag={TypographyTag.span}
                      >
                        {item.label}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Heading level={4} classes="text-base mb-4">
                  کاوش در گیلمار
                </Heading>

                <ul className="space-y-2">
                  {Object.values(footerContacts).map((item) => (
                    <li key={item.id}>
                      <Typography
                        size={TypographySize.sm}
                        tag={TypographyTag.span}
                      >
                        {item.method}: {item.contact}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 bg-neutral-50 rounded-full shadow-xs">
          <div
            className={
              "px-3 py-2 bg-neutral-50 rounded-full border border-gray-200/70 drop-shadow-xl relative overflow-hidden"
            }
          >
            <div className="flex items-center justify-between px-6">
              <Typography size={TypographySize.sm}>
                تمامی حقوق برای اقامتگاه بوم‌گردی گیلمار محفوظ است.
              </Typography>

              <div className="flex items-center gap-4">
                <CircleButton variant="colorful">
                  <IconLinkedin classes="-translate-y-5 scale-70" />
                </CircleButton>

                <CircleButton variant="colorful">
                  <IconTelegram classes="-translate-y-5 scale-80" />
                </CircleButton>

                <CircleButton variant="colorful">
                  <IconYoutube classes="-translate-y-[14px] scale-80" />
                </CircleButton>

                <CircleButton variant="colorful">
                  <IconX classes="-translate-y-4 scale-80" />
                </CircleButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
