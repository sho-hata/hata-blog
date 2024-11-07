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
      <h2>Shoki Hata's blog</h2>
      <a href="https://github.com/sho-hata">ShokiHata</a>のブログです。雑多な技術ネタを投稿します。
      <ul>
        {Object.entries(posts).map(([id, module]) => {
          if (module.frontmatter) {
            return (
              <li>
                <small>{module.frontmatter.date}</small><br />
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
