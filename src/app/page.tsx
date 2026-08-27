import { Carousel, Features, Hero, Intro } from "@/components/features";

export default function Home() {
  return (
    <div>
      <Hero classes="mb-32" />
      <Intro classes="mb-64" />
      <Features classes="mb-58" />
      <Carousel classes="mb-32" />
    </div>
  );
}
