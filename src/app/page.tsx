import {
  Carousel,
  Features,
  Feedbacks,
  Hero,
  Intro,
  Variations,
  VideoTour,
} from "@/components/features";

export default function Home() {
  return (
    <div>
      <Hero classes="mb-32" />
      <Intro classes="mb-64" />
      <Features classes="mb-58" />
      <Carousel classes="mb-58" />
      <Variations classes="mb-58" />
      <VideoTour classes="mb-58" />
      <Feedbacks classes="mb-48" />
    </div>
  );
}
