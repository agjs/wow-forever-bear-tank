import type { ReactNode } from "react";

interface FoldProps {
  readonly title: ReactNode;
  readonly open?: boolean;
  readonly children: ReactNode;
}

/** A collapsed section for detail most players only need once. */
export function Fold({ title, open = false, children }: FoldProps) {
  return (
    <details className="dd" open={open}>
      <summary>{title}</summary>
      {children}
    </details>
  );
}
