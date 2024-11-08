import type { Frontmatter } from "../types";

export default function Top() {
  const posts = import.meta.glob<{ frontmatter: Frontmatter }>(
    "./articles/**/*.mdx",
    {
      eager: true,
    },
  );
  return (
    <section class="py-12 bg-slate-50 rounded-lg shadow-md">
      <div class={"mx-8"}>
        <p class={"text-base max-md:text-sm pb-12"}>
          <a href="https://github.com/sho-hata">hata</a>
          のブログです。雑多な技術ネタや、とりとめもないことを記録します。
        </p>
        <div class={"mt-6 flex flex-col gap-8"}>
          {Object.entries(posts).map(([id, module]) => {
            if (module.frontmatter) {
              return (
                <div class={"flex flex-col gap-0"}>
                  <time class={"text-sm max-md:text-xs"}>
                    {module.frontmatter.date}
                  </time>
                  <a
                    class={"text-lg max-md:text-base underline"}
                    href={`${id.replace(/\.mdx$/, "")}`}
                  >
                    {module.frontmatter.title}
                  </a>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
