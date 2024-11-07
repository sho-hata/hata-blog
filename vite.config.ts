import mdx from "@mdx-js/rollup";
import pages from "@hono/vite-cloudflare-pages";
import honox from "honox/vite";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import ssg from "@hono/vite-ssg"

const entry = './app/server.ts'

export default defineConfig(() => {
  return {
    plugins: [
      pages(),
      honox(),
      ssg({ entry }),
      mdx({
        jsxImportSource: "hono/jsx",
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm,],
        rehypePlugins: [[rehypePrettyCode, {theme: "nord"}]],
      }),
    ],
  };
});
