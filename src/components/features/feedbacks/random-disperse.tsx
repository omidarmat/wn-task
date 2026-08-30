"use client";

import { Feedback } from "@/types/dtos/feedback";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

interface PropTypes {
  feedbacks: Feedback[];
  onClickItem: (item: Feedback) => void;
}

export function RandomDisperse({ feedbacks, onClickItem }: PropTypes) {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const randomizedFeedbacks = useMemo(
    () =>
      feedbacks.map((item) => {
        const randX = Math.round(Math.random() * 100);
        const randY = Math.round(Math.random() * 100);

        return (
          <Image
            onClick={() => onClickItem(item)}
            key={item.id}
            src={item.img}
            alt={`تصویر ${item.name}`}
            width={30}
            height={30}
            style={{
              position: "absolute",
              top: `${randY}%`,
              right: `${randX}%`,
            }}
            className="rounded-full outline-2 outline-neutral-50 absolute top-[10%] right-[5%] hover:scale-125"
          />
        );
      }),
    [feedbacks],
  );

  return <div className="relative">{isClient && randomizedFeedbacks}</div>;
}
