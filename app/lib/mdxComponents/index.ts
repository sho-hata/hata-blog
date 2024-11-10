import type { MDXComponents } from "mdx/types";
import { AnchorLink } from "./anchorLink";
import { ExternalOgp } from "./externalOgp";

export function useMDXComponents(): MDXComponents {
  const components = {
    ExternalOgp: ExternalOgp,
    a: AnchorLink,
  };
  return components;
}
