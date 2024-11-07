import mdx from "@mdx-js/rollup";
import pages from "@hono/vite-cloudflare-pages";
import honox from "honox/vite";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import ssg from "@hono/vite-ssg";

const entry = "./app/server.ts";

export default defineConfig(() => {
  return {
    build: {
      rollupOptions: {
        input: ["./app/styles/style.css"],
        output: {
          entryFileNames: "static/[name].js",
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === "style.css") return "styles/style.css";
            return assetInfo.name ?? "";
          },
        },
      },
      assetsDir: "static",
      ssrEmitAssets: true,
    },
    plugins: [
      pages(),
      honox(),
      ssg({ entry }),
      mdx({
        jsxImportSource: "hono/jsx",
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
        rehypePlugins: [[rehypePrettyCode, { theme: "nord" }]],
      }),
    ],
  };
});
