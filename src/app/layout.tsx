import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { MainLayout } from "@/components/ui";
// import localFont from "next/font/local";

// const myFont = localFont({
//   src: [
//     {
//       path: "../assets/fonts/MeemFaNum-thin.woff2",
//       weight: "50",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/MeemFaNum-UltraLight.woff2",
//       weight: "100",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/MeemFaNum-ExtraLight.woff2",
//       weight: "200",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/MeemFaNum-Light.woff2",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/MeemFaNum-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/MeemFaNum-Medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/MeemFaNum-SemiBold.woff2",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/MeemFaNum-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/MeemFaNum-ExtraBold.woff2",
//       weight: "800",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/MeemFaNum-UltraBold.woff2",
//       weight: "900",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/MeemFaNum-Black.woff2",
//       weight: "950",
//       style: "normal",
//     },
//   ],
// });

export const metadata: Metadata = {
  title: "زرافزا | خرید و فروش طلای آب شده",
  description: "خرید و فروش آسان طلای آب شده",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body dir="rtl" className="min-h-full flex flex-col">
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
