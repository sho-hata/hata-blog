import mdx from "@mdx-js/rollup";
import pages from "@hono/vite-cloudflare-pages";
import honox from "honox/vite";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    plugins: [
      pages(),
      honox(),
      mdx({
        jsxImportSource: "hono/jsx",
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      }),
    ],
  };
});
