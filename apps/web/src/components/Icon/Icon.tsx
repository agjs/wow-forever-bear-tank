import { iconUrl } from "../../lib/wowhead/index.ts";

interface IconProps {
  readonly name: string;
  readonly className?: string;
  readonly alt?: string;
}

/** A game icon from Wowhead's image server. Decorative unless given alt text. */
export function Icon({ name, className = "ico", alt = "" }: IconProps) {
  return <img className={className} src={iconUrl(name)} alt={alt} loading="lazy" />;
}
