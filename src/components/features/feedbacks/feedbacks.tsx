"use client";

import { Heading, IconContainer, Typography } from "@/components/ui";
import { IconComment } from "@/components/ui/icons";
import Image from "next/image";
import WorldMapDotted from "@/../public/img/bgs/world-map-dotted.png";
import { ActiveFeedback } from "./active-feedback";
import { feedbacks } from "@/contents/feedbacks";
import { IndexIndicator } from "./index-indicator";
import { useMemo, useState } from "react";
import { Feedback } from "@/types/dtos/feedback";
import { RandomDisperse } from "./random-disperse";
import { cn } from "@/utils/styles/tailwind";

interface PropTypes {
  classes?: string;
}

export function Feedbacks({ classes = "" }: PropTypes) {
  const [selectedFeedback, setSelectedFeedback] = useState<Feedback>(
    feedbacks[0],
  );

  const feedbackPortions = useMemo(
    () => ({
      one: feedbacks.slice(0, Math.floor(feedbacks.length / 2) + 1),
      two: feedbacks.slice(Math.floor(feedbacks.length / 2) + 1),
    }),
    [feedbacks],
  );

  const selectedFeedbackIndex = feedbacks.findIndex(
    (f) => f.id === selectedFeedback.id,
  );

  return (
    <div className={cn("flex flex-col items-center gap-4", classes)}>
      <IconContainer classes="mb-6">
        <IconComment />
      </IconContainer>
      <Heading level={2} classes="leading-[35px]">
        گیلمار از نگاه مهمانان
      </Heading>
      <Typography classes="mb-6">
        تجربه واقعی مهمانان، بهترین روایت از آرامش، طبیعت و حال خوب گیلمار است.
      </Typography>
      <div className="relative">
        <Image src={WorldMapDotted} alt="Dotted world map" />
        <div className="grid grid-cols-[1fr_1.5fr_1fr] gap-10 absolute right-0 left-0 top-0 bottom-0">
          <RandomDisperse
            onClickItem={(item) => setSelectedFeedback(item)}
            feedbacks={feedbackPortions.one}
          />
          <div className="flex flex-col items-center justify-center">
            <ActiveFeedback feedback={selectedFeedback} classes="mb-4" />
            <IndexIndicator
              numItems={feedbacks.length}
              activeIndex={selectedFeedbackIndex}
            />
          </div>
          <RandomDisperse
            onClickItem={(item) => setSelectedFeedback(item)}
            feedbacks={feedbackPortions.two}
          />
        </div>
      </div>
    </div>
  );
}
