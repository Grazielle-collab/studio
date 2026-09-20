// studio/components/ScrollProgressBar.tsx
"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] bg-transparent z-[70]">
      <div
        className="h-full bg-black transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}