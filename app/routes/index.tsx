import type { Frontmatter } from "../types";

export default function Top() {
  const posts = import.meta.glob<{ frontmatter: Frontmatter }>(
    "./articles/**/*.mdx",
    {
      eager: true,
    },
  );
  return (
    <div>
      <h2>Articles</h2>
      <ul>
        {Object.entries(posts).map(([id, module]) => {
          if (module.frontmatter) {
            return (
              <li>
                <a href={`${id.replace(/\.mdx$/, "")}`}>
                  {module.frontmatter.title}
                </a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
