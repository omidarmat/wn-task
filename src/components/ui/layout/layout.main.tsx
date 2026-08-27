import { Footer, Header } from "@/components/features";
import { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
}

export function MainLayout({ children }: PropTypes) {
  return (
    <div className="">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
