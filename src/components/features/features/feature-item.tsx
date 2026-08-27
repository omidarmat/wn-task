import { Heading, Typography } from "@/components/ui";
import { TypographySize, TypographyTag } from "@/types/ui/typography";
import { cn } from "@/utils/styles/tailwind";
import Image from "next/image";

interface PropTypes {
  title: string;
  description: string;
  image: string;
  imageBoxStyles?: Record<string, string>;
  imageStyles?: Record<string, string>;
}

export function FeatureItem({
  title,
  description,
  image,
  imageStyles,
  imageBoxStyles,
}: PropTypes) {
  return (
    <div className="flex flex-col items-center gap-4 px-10">
      <div
        className={cn("py-8 px-4 bg-white rounded-2xl drop-shadow-xl mb-16")}
        style={imageBoxStyles}
      >
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          style={imageStyles}
        />
      </div>
      <Heading level={3} classes="text-xl">
        {title}
      </Heading>
      <Typography
        size={TypographySize.sm}
        classes="text-center"
        tag={TypographyTag.p}
      >
        {description}
      </Typography>
    </div>
  );
}
