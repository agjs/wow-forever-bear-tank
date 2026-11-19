import type { Source } from "@btc/guide-data";

export function SourceList({ sources }: { readonly sources: readonly Source[] }) {
  if (!sources.length) return null;
  return (
    <p className="small muted psrc">
      Sources:{" "}
      {sources.map((source, index) => (
        <span key={source.url + source.title}>
          {index > 0 && " · "}
          <a href={source.url} target="_blank" rel="noopener">
            {source.title}
          </a>
        </span>
      ))}
    </p>
  );
}
