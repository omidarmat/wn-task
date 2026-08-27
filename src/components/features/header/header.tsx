import { EntryCta, Logo, Navbar } from "@/components/features";
import { Container } from "@/components/ui";

export function Header() {
  return (
    <div className="bg-neutral-300">
      <Container classes="flex items-center justify-between">
        <Logo />
        <Navbar />
        <EntryCta />
      </Container>
    </div>
  );
}
