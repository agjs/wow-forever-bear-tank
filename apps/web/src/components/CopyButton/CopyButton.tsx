import { useEffect, useState } from "react";

type CopyState = "idle" | "copied" | "failed";
const RESET_AFTER_MS = 1500;

interface CopyButtonProps {
  readonly text: string;
  readonly label?: string;
  readonly title?: string;
}

export function CopyButton({ text, label = "Copy", title }: CopyButtonProps) {
  const [state, setState] = useState<CopyState>("idle");

  useEffect(() => {
    if (state === "idle") return;
    const timer = setTimeout(() => setState("idle"), RESET_AFTER_MS);
    return () => clearTimeout(timer);
  }, [state]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setState("copied");
    } catch {
      setState("failed");
    }
  };

  return (
    <button type="button" className="copy" title={title} onClick={copy}>
      {state === "copied" ? "Copied ✓" : state === "failed" ? "Select and copy" : label}
    </button>
  );
}
