import {} from "hono";
import type Frontmatter from "./types";

type Head = {
  title?: string;
  entryName?: string;
};

declare module "hono" {
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      head?: Head & { frontmatter: Frontmatter },
    ): Response | Promise<Response>;
  }
}
