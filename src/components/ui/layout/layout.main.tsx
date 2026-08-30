import { Footer, Header } from "@/components/features";
import { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
}

export function MainLayout({ children }: PropTypes) {
  return (
    <div className="border overflow-hidden">
      <Header classes="fixed top-5 mx-auto z-100" />
      <main className="mt-32">{children}</main>
      <Footer />
    </div>
  );
}
