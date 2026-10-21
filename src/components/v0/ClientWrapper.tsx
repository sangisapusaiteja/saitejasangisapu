"use client";

import { useState } from "react";
import Navigation from "@/components/v0/Navigation";
import CustomCursor from "@/components/v0/CustomCursor";
import Loader from "@/components/v0/Loader";
import SmoothScroll from "@/components/v0/SmoothScroll";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <SmoothScroll>
        <Navigation />
        <CustomCursor />
        {children}
      </SmoothScroll>
    </>
  );
}