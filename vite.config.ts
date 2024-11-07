import mdx from "@mdx-js/rollup";
import pages from "@hono/vite-cloudflare-pages";
import honox from "honox/vite";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

export default defineConfig(() => {
  return {
    plugins: [
      pages(),
      honox(),
      mdx({
        jsxImportSource: "hono/jsx",
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm,],
        rehypePlugins: [[rehypePrettyCode, {theme: "nord"}]],
      }),
    ],
  };
});
