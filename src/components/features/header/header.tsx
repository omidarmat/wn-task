import { EntryCta, Logo, Navbar } from "@/components/features";
import { Container } from "@/components/ui";
import { cn } from "@/utils/styles/tailwind";

interface PropTypes {
  classes?: string;
}

export function Header({ classes = "" }: PropTypes) {
  return (
    <div className={cn("w-full", classes)}>
      <div className="mx-auto w-fit rounded-full bg-white p-2">
        <Container classes="flex w-fit min-w-[70vw] items-center justify-between rounded-full border border-neutral-100 p-2 gap-10">
          <Logo />
          <Navbar />
          <EntryCta />
        </Container>
      </div>
    </div>
  );
}
