// studio/types/global.d.ts
import type Lenis from "lenis";

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

export {};