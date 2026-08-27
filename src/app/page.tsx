import { Features, Hero, Intro } from "@/components/features";

export default function Home() {
  return (
    <div>
      <Hero classes="mb-32" />
      <Intro classes="mb-64" />
      <Features classes="mb-32" />
    </div>
  );
}
