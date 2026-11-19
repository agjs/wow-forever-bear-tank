import "react";

declare module "react" {
  interface CSSProperties {
    /** Background image of a talent tree. */
    "--bg"?: string;
  }
}
