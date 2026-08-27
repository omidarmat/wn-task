import { cn } from "@/utils/styles/tailwind";
import { Heading } from "@/components/ui";
import { ReactNode } from "react";
import { HeadingLevel } from "@/types/ui/heading";

interface PropTypes {
  children: ReactNode;
  heading: ReactNode;
  headingClasses?: string;
  headingLevel?: HeadingLevel;
  contentContainerClasses?: string;
  classes?: string;
}

export function Section({
  children,
  heading,
  classes = "",
  headingClasses = "",
  headingLevel = 2,
  contentContainerClasses = "",
}: PropTypes) {
  return (
    <section className={cn("mb-12", classes)}>
      {typeof heading === "string" ? (
        <Heading level={headingLevel} classes={headingClasses}>
          {heading}
        </Heading>
      ) : (
        heading
      )}
      <div className={contentContainerClasses}>{children}</div>
    </section>
  );
}
