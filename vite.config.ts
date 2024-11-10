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
        input: ["./app/styles/style.css", "./app/static/img/hata.png"],
        output: {
          entryFileNames: "static/[name].js",
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === "style.css") return "styles/style.css";
            if (assetInfo.name === "hata.png") return "static/hata.png";
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
      external: ["@mdx-js/mdx", "jsdom"],
    },
    server: {
      host: "0.0.0.0",
    },
  };
});
