import {
  GithubIcon,
  HomeIcon,
  NoteIcon,
  SizuMeIcon,
  XIcon,
} from "../components/icons";
import type { Frontmatter } from "../types";

export default function Top() {
  const imageUrl = import.meta.env.PROD
    ? "/static/hata.png"
    : "/app/static/img/hata.png";

  const posts = import.meta.glob<{ frontmatter: Frontmatter }>(
    "./articles/**/*.mdx",
    {
      eager: true,
    },
  );
  return (
    <section class="py-12 bg-slate-50 rounded-lg shadow-md">
      <div class={"mx-8"}>
        <div class={"flex items-center space-x-4 mb-8"}>
          <img
            src={imageUrl}
            alt={"Profile"}
            class={"w-20 h-20 rounded-full"}
          />
          <div class={"flex flex-col gap-2"}>
            <span class={"font-semibold"}>Shoki Hata</span>
            <p class={"text-sm"}>
              GoやTypeScriptでソフトウェアを書いているHataです。
              このブログでは、雑多な技術ネタや、とりとめもないことを記録します。
            </p>
          </div>
        </div>
        <div class={"flex gap-2 items-center pb-8 border-b"}>
          <a
            href="https://gist.github.com/sho-hata/94c4a5066b101d98080abd6ef45a44b0"
            target="_blank"
            rel="noreferrer"
          >
            <HomeIcon />
          </a>
          <a href="https://x.com/sho_hata_" target="_blank" rel="noreferrer">
            <XIcon />
          </a>
          <a
            href="https://github.com/sho-hata"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
          <a href="https://sizu.me/sho_hata" target="_blank" rel="noreferrer">
            <SizuMeIcon />
          </a>
          <a href="https://note.com/sho_hata/" target="_blank" rel="noreferrer">
            <NoteIcon />
          </a>
        </div>
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
