import { Container, Heading, IconContainer, Typography } from "@/components/ui";
import { IconLightning } from "@/components/ui/icons";
import { features } from "@/constants/features";
import { TypographyTag } from "@/types/ui/typography";
import { FeatureItem } from "./feature-item";

interface PropTypes {
  classes?: string;
}

export function Features({ classes }: PropTypes) {
  return (
    <div className={classes}>
      <Container>
        <div className="flex flex-col items-center mb-24">
          <IconContainer>
            <IconLightning />
          </IconContainer>
          <Heading level={2}>همراهی برای حفظ آرامش و طبیعت گیلمار</Heading>
          <Typography tag={TypographyTag.p}>
            برای حفظ آرامش، نظم و تجربه‌ای دلنشین برای همه مهمانان، لطفاً قوانین
            اقامتگاه گیلمار را پیش از رزرو مطالعه و رعایت فرمایید.
          </Typography>
        </div>

        <div className="grid grid-cols-3">
          {Object.values(features).map((feat) => (
            <FeatureItem
              key={feat.id}
              title={feat.title}
              description={feat.description}
              image={feat.img}
              imageBoxStyles={{
                rotate: `${feat.imageRotation}deg`,
              }}
              imageStyles={{
                rotate: `-${feat.imageRotation}deg`,
              }}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
