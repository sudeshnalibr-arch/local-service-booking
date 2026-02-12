"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayoutRoutes = [
    "/auth/signUp",
    "/auth/signIn",
    "/auth/otp",
  ];

  const hideLayout = hideLayoutRoutes.includes(pathname);

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
