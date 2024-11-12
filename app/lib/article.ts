import type { JSX } from "hono/jsx/jsx-runtime";
import type { MDXProps } from "mdx/types";
import type { Frontmatter } from "../types";

type MDX = {
  frontmatter: Frontmatter;
  default: (props: MDXProps) => JSX.Element;
};

const sortPostsByDate = (
  [, a]: [string, { frontmatter: Frontmatter }],
  [, b]: [string, { frontmatter: Frontmatter }],
) => {
  return (
    new Date(b.frontmatter.date).getTime() -
    new Date(a.frontmatter.date).getTime()
  );
};

export const pathToEntryName = (path: string): string | undefined => {
  const match = path.match(
    /(?<=\/routes\/)(articles\/\d+\/[a-z0-9]+)(?=\.mdx)/,
  );
  if (!match) {
    return undefined;
  }
  return match[0];
};

export const getAllArticles = () => {
  const articles = import.meta.glob<MDX>("../routes/articles/**/*.mdx", {
    eager: true,
  });

  return Object.entries(articles)
    .sort(sortPostsByDate)
    .map(([path, post]) => {
      const entryName = pathToEntryName(path);
      const { frontmatter } = post;
      const { default: Component } = post;
      return { entryName, frontmatter, Component };
    });
};
