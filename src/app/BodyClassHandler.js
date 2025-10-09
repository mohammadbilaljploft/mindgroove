"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BodyClassHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const body = document.body;

    // Add class on inner pages, remove on home
    if (pathname !== "/") {
      body.classList.add("common-bg");
    } else {
      body.classList.remove("common-bg");
    }

    // Cleanup when route changes
    return () => body.classList.remove("common-bg");
  }, [pathname]);

  return null;
}
