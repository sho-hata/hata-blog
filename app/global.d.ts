import {} from "hono";
import type Frontmatter from "./types";

type Head = {
  title?: string;
  frontmatter?: Frontmatter;
};

declare module "hono" {
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      head?: Head,
    ): Response | Promise<Response>;
  }
}
