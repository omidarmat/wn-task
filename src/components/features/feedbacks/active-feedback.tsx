import { Feedback } from "@/types/dtos/feedback";
import { cn } from "@/utils/styles/tailwind";
import Image from "next/image";
import { FeedbackContent } from "./feedback-content";

interface PropTypes {
  feedback: Feedback;
  classes?: string;
}

export function ActiveFeedback({ feedback, classes = "" }: PropTypes) {
  return (
    <div
      className={cn("flex flex-col items-center justify-center gap-4", classes)}
    >
      <Image
        src={feedback.img}
        height={80}
        width={80}
        alt={`تصویر ${feedback.name}`}
        className="rounded-full outline-3 outline-neutral-50"
      />
      <FeedbackContent
        content={feedback.content}
        name={feedback.name}
        role={feedback.role}
      />
    </div>
  );
}
