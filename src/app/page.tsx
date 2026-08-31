import {
  Blog,
  Carousel,
  Faq,
  Features,
  Feedbacks,
  Hero,
  Intro,
  TourPackages,
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
      <TourPackages classes="mb-48" />
      <Blog classes="mb-32" />
      <Faq />
    </div>
  );
}
