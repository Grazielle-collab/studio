// studio/components/AdSense.tsx
"use client";
import { useEffect } from "react";

export default function AdSense() {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-SEU_ID_AQUI"
      data-ad-slot="SEU_SLOT_AQUI"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}