import { useEffect } from "react";

declare global {
  interface Window {
    $WowheadPower?: { refreshLinks: () => void };
  }
}

/** Asks Wowhead's tooltip script to color and wire up links after every render of the calling component. */
export function useWowheadRefresh(): void {
  useEffect(() => {
    try {
      window.$WowheadPower?.refreshLinks();
    } catch {
      // The tooltip script is optional; links still work without it.
    }
  });
}
