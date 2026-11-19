/** Tells the player that content they've already passed is hidden, and how to see it again. */
export function HiddenNote({ count, what }: { readonly count: number; readonly what: string }) {
  if (count <= 0) return null;
  return (
    <p className="hidnote">
      {count} earlier {what} hidden. Lower your level at the top to see them.
    </p>
  );
}
