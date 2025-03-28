import pages from "@hono/vite-cloudflare-pages";
import ssg from "@hono/vite-ssg";
import mdx from "@mdx-js/rollup";
import honox from "honox/vite";
import rehypePrettyCode from "rehype-pretty-code";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";

const entry = "./app/server.ts";

export default defineConfig(() => {
  return {
    build: {
      rollupOptions: {
        input: [
          "./app/styles/style.css",
          "./app/static/img/me.png",
          "./app/static/img/404.png",
        ],
        output: {
          entryFileNames: "static/[name].js",
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === "style.css") return "styles/style.css";
            if (assetInfo.name === "me.png") return "static/me.png";
            if (assetInfo.name === "404.png") return "static/404.png";
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
        providerImportSource: "/app/lib/mdxComponents/index.ts",
      }),
    ],
    ssr: {
      target: "node",
      external: ["@mdx-js/mdx", "jsdom", "unified"],
    },
    server: {
      host: "0.0.0.0",
    },
  };
});
