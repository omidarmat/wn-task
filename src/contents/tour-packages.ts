import { TourPackage } from "@/types/dtos/tour-packages";

export const tourPackages: TourPackage[] = [
  {
    id: "romantic-couple",
    label: "پکیج رمانتیک دو نفره",
    price: 2300000,
    items: [
      {
        id: "kayak",
        image: "/img/tour-packages/img-1.png",
        label: "قایق‌سواری",
      },
      {
        id: "tent",
        image: "/img/tour-packages/img-2.png",
        label: "۱ شب اقامت",
      },
      {
        id: "forest",
        image: "/img/tour-packages/img-3.png",
        label: "تور جنگل‌نوردی",
      },
      {
        id: "breakfast",
        image: "/img/tour-packages/img-4.png",
        label: "صبحانه",
      },
    ],
  },
];
