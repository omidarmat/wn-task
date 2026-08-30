import { Typography } from "@/components/ui";
import { IconQuotes } from "@/components/ui/icons";
import { USER_ROLES } from "@/constants/user-roles";
import { Feedback } from "@/types/dtos/feedback";
import { TypographyWeight } from "@/types/ui/typography";

interface PropTypes {
  content: Feedback["content"];
  name: Feedback["name"];
  role: Feedback["role"];
}

export function FeedbackContent({ content, name, role }: PropTypes) {
  return (
    <div className="p-2 rounded-2xl bg-[#FCFDFD]">
      <div className="bg-[#FCFDFD] border border-gray-100 rounded-xl px-3 py-6 flex flex-col items-center drop-shadow-xl">
        <IconQuotes classes="mb-4" />
        <Typography classes="text-center leading-[30px] mb-6">
          {content}
        </Typography>
        <Typography classes="mb-2" weight={TypographyWeight.bold}>
          {name}
        </Typography>
        <Typography>{USER_ROLES[role].faName}</Typography>
      </div>
    </div>
  );
}
