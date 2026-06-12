"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <Header />
      {children}
      <Footer />
    </LazyMotion>
  );
}
