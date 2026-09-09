"use client";

import { usePathname } from "next/navigation";
import HomeNav from "@/components/HomeNav";
import PageTransition from "@/page-transition";
import DelayedFooter from "@/delayed-footer";

export default function PortfolioShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isResumePage = pathname.startsWith("/resume");

  if (isResumePage) {
    // Resume routes: no navbar, no footer, no side padding
    return <>{children}</>;
  }

  return (
    <div className="px-3.5 sm:px-6 max-w-full overflow-x-clip">
      <HomeNav />
      <PageTransition>{children}</PageTransition>
      <DelayedFooter />
    </div>
  );
}
